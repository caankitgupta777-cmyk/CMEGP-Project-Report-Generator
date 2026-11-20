const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'reports.json');

// Ensure persistent storage file exists
function initDatabase() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

function readReports() {
  try {
    initDatabase();
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content || '[]');
  } catch (err) {
    console.error('Error reading reports database:', err);
    return [];
  }
}

function writeReports(reports) {
  try {
    initDatabase();
    fs.writeFileSync(DB_FILE, JSON.stringify(reports, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing reports database:', err);
    return false;
  }
}

initDatabase();

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS Headers for universal client connectivity
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  // REST API Routes for Reports Database
  const parsedUrl = req.url.split('?')[0];
  if (parsedUrl.startsWith('/api/reports')) {
    const urlParts = parsedUrl.split('/');
    // e.g. /api/reports -> ['', 'api', 'reports']
    // e.g. /api/reports/sync -> ['', 'api', 'reports', 'sync']
    // e.g. /api/reports/rep_123 -> ['', 'api', 'reports', 'rep_123']
    const subRoute = urlParts[3] ? decodeURIComponent(urlParts[3]) : null;

    if (req.method === 'GET' && !subRoute) {
      const reports = readReports();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, count: reports.length, reports }));
      return;
    }

    if (req.method === 'GET' && subRoute) {
      const reports = readReports();
      const report = reports.find(r => r.id === subRoute);
      if (report) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, report }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Report not found' }));
      }
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const reports = readReports();

          if (subRoute === 'sync') {
            const incoming = Array.isArray(payload) ? payload : (payload.reports || []);
            const map = new Map();
            reports.forEach(r => map.set(r.id, r));
            incoming.forEach(ir => {
              if (ir && ir.id) {
                const existing = map.get(ir.id);
                if (!existing || new Date(ir.updatedAt || 0) > new Date(existing.updatedAt || 0)) {
                  map.set(ir.id, ir);
                }
              }
            });
            const merged = Array.from(map.values());
            writeReports(merged);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, count: merged.length, reports: merged }));
            return;
          }

          // Single Report Save/Upsert
          if (!payload.id) {
            payload.id = 'cmegp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
          }
          const now = new Date().toISOString();
          if (!payload.createdAt) payload.createdAt = now;
          payload.updatedAt = now;

          const idx = reports.findIndex(r => r.id === payload.id);
          if (idx >= 0) {
            reports[idx] = payload;
          } else {
            reports.unshift(payload);
          }
          writeReports(reports);

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, report: payload }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload', error: err.message }));
        }
      });
      return;
    }

    if (req.method === 'DELETE' && subRoute) {
      const reports = readReports();
      const filtered = reports.filter(r => r.id !== subRoute);
      writeReports(filtered);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, id: subRoute }));
      return;
    }
  }

  // Normalize and resolve the static file path
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : parsedUrl);
  
  // Safe directory check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }
  
  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('Not Found');
      } else {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Database initialized at: ${DB_FILE}`);
});
