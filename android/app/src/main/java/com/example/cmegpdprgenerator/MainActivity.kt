package com.example.cmegpdprgenerator

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ContentValues
import android.content.Context
import android.content.ContextWrapper
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.print.PrintAttributes
import android.print.PrintManager
import android.provider.MediaStore
import android.util.Base64
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.viewinterop.AndroidView
import java.io.File
import java.io.FileOutputStream

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            AppContent()
        }
    }
}

// Extension function to safely extract the Activity from any ContextWrapper
fun Context.findActivity(): Activity? {
    var currentContext = this
    while (currentContext is ContextWrapper) {
        if (currentContext is Activity) return currentContext
        currentContext = currentContext.baseContext
    }
    return null
}

@SuppressLint("SetJavaScriptEnabled")
@Composable
fun AppContent() {
    // Background matches CSS --bg-sidebar (#111827)
    val appBgColor = Color(0xFF111827)
    var isLoading by remember { mutableStateOf(true) }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(appBgColor)
            .statusBarsPadding()
    ) {
        AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { context ->
                val activity = context.findActivity() ?: return@AndroidView WebView(context)
                
                WebView(context).apply {
                    settings.javaScriptEnabled = true
                    settings.domStorageEnabled = true
                    settings.allowFileAccess = true
                    settings.builtInZoomControls = true
                    settings.displayZoomControls = false
                    
                    webViewClient = object : WebViewClient() {
                        override fun onPageFinished(view: WebView?, url: String?) {
                            super.onPageFinished(view, url)
                            isLoading = false
                            
                            // Inject JavaScript helper to bridge window.print and download clicks
                            val script = """
                                (function() {
                                    // 1. Intercept window.print()
                                    window.print = function() {
                                        if (window.AndroidBridge) {
                                            window.AndroidBridge.printPage();
                                        }
                                    };

                                    // 2. Intercept document downloads (Anchor click on blob URLs)
                                    const originalClick = HTMLAnchorElement.prototype.click;
                                    HTMLAnchorElement.prototype.click = function() {
                                        if (this.href && (this.href.startsWith('blob:') || this.href.startsWith('data:'))) {
                                            if (window.AndroidBridge) {
                                                const fileName = this.download || 'document';
                                                const hrefUrl = this.href;
                                                
                                                fetch(hrefUrl)
                                                    .then(res => res.blob())
                                                    .then(blob => {
                                                        const reader = new FileReader();
                                                        reader.onloadend = function() {
                                                            const base64Data = reader.result.split(',')[1];
                                                            window.AndroidBridge.downloadFile(base64Data, fileName, blob.type);
                                                        };
                                                        reader.readAsDataURL(blob);
                                                    })
                                                    .catch(err => {
                                                        console.error("Blob fetch failed: ", err);
                                                    });
                                                return;
                                            }
                                        }
                                        originalClick.apply(this, arguments);
                                    };
                                })();
                            """.trimIndent()
                            
                            view?.evaluateJavascript(script, null)
                        }
                    }
                    
                    // Add JavaScript Bridge
                    addJavascriptInterface(
                        AndroidBridge(context, this@apply, activity),
                        "AndroidBridge"
                    )
                    
                    // Load the local index.html file
                    loadUrl("file:///android_asset/index.html")
                }
            }
        )

        if (isLoading) {
            CircularProgressIndicator(
                modifier = Modifier.align(Alignment.Center),
                color = Color(0xFF3B82F6) // Matches primary blue theme
            )
        }
    }
}

class AndroidBridge(
    private val context: Context,
    private val webView: WebView,
    private val activity: Activity
) {
    @JavascriptInterface
    fun printPage() {
        activity.runOnUiThread {
            try {
                val printManager = activity.getSystemService(Context.PRINT_SERVICE) as PrintManager
                val printAdapter = webView.createPrintDocumentAdapter("CMEGP_DPR_Report")
                printManager.print("CMEGP DPR Report", printAdapter, PrintAttributes.Builder().build())
            } catch (e: Exception) {
                Toast.makeText(context, "Printing failed: ${e.message}", Toast.LENGTH_SHORT).show()
            }
        }
    }

    @JavascriptInterface
    fun downloadFile(base64Data: String, fileName: String, mimeType: String) {
        activity.runOnUiThread {
            try {
                val decodedBytes = Base64.decode(base64Data, Base64.DEFAULT)
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    val resolver = context.contentResolver
                    val contentValues = ContentValues().apply {
                        put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
                        put(MediaStore.MediaColumns.MIME_TYPE, mimeType)
                        put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS)
                    }
                    val uri = resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, contentValues)
                    if (uri != null) {
                        resolver.openOutputStream(uri)?.use { outputStream ->
                            outputStream.write(decodedBytes)
                        }
                        Toast.makeText(context, "Saved to Downloads: $fileName", Toast.LENGTH_LONG).show()
                    } else {
                        Toast.makeText(context, "Failed to create download entry", Toast.LENGTH_SHORT).show()
                    }
                } else {
                    val downloadsDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
                    if (!downloadsDir.exists()) {
                        downloadsDir.mkdirs()
                    }
                    val file = File(downloadsDir, fileName)
                    FileOutputStream(file).use { outputStream ->
                        outputStream.write(decodedBytes)
                    }
                    Toast.makeText(context, "Saved to Downloads: $fileName", Toast.LENGTH_LONG).show()
                }
            } catch (e: Exception) {
                e.printStackTrace()
                // Fallback: write to internal app-specific files directory
                try {
                    val decodedBytes = Base64.decode(base64Data, Base64.DEFAULT)
                    val fallbackDir = context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS)
                    val file = File(fallbackDir, fileName)
                    FileOutputStream(file).use { outputStream ->
                        outputStream.write(decodedBytes)
                    }
                    Toast.makeText(context, "Saved to App Downloads: ${file.name}", Toast.LENGTH_LONG).show()
                } catch (ex: Exception) {
                    ex.printStackTrace()
                    Toast.makeText(context, "Error saving file: ${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }
}
