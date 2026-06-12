/* app.js - CMEGP Project Report Generator */

// Preset database extracted from the reference spreadsheets
const PRESETS = {
  "blank": {
    "name": "",
    "father": "",
    "project_name": "",
    "qualification_academic": "Graduate",
    "qualification_technical": "",
    "gender": "Male",
    "agency": "DIC (Urban)",
    "category": "General",
    "unit_type": "Service",
    "district": "",
    "taluka": "",
    "pin": "",
    "mobile": "",
    "email": "",
    "land_type": "Rented",
    "land_val": 0,
    "preop_cost": 0,
    "furniture_cost": 0,
    "contingency_cost": 0,
    "rent_pm": 0,
    "interest_rate": 12,
    "payback_period": 5,
    "moratorium_period": 12,
    "receivables_days": 0,
    "raw_material_days": 0,
    "sip_days": 0,
    "finished_goods_days": 0,
    "tax_rate": 0,
    "workshed": [],
    "machinery": [],
    "sales": [],
    "raw_material": [],
    "wages": [],
    "salary": [],
    "workshed_rent": 0,
    "maint_pct": 1,
    "power_pct": 2,
    "overhead_pct": 3,
    "phone_pct": 1,
    "stationery_pct": 0.1,
    "adv_pct": 0.5,
    "misc_pct": 0.09,
    "depr_building": 10,
    "depr_machinery": 15,
    "override_financing": false,
    "custom_own_contrib": 0,
    "custom_term_loan": 0,
    "wc_raw_material_val": 0,
    "power_hp": 0,
    "project_intro": "",
    "promoter_about": "",
    "place": ""
  },
  "car_wash": {
    "name": "Shubham Mahadev Huskal",
    "father": "Mahadev Huskal",
    "project_name": "Samarth Car Washing Center",
    "qualification_academic": "12th Pass",
    "qualification_technical": "B.com",
    "gender": "Male",
    "agency": "DIC (Urban)",
    "category": "OBC",
    "unit_type": "Service",
    "district": "Amravati",
    "taluka": "Anjangaon Surji",
    "pin": 444705,
    "mobile": "9503702051",
    "email": "shubham.huskal@example.com",
    "land_type": "Rented",
    "land_val": 10000,
    "preop_cost": 10000,
    "furniture_cost": 25000,
    "contingency_cost": 0,
    "rent_pm": 5000,
    "interest_rate": 12,
    "payback_period": 5,
    "moratorium_period": 12,
    "receivables_days": 6,
    "raw_material_days": 0,
    "sip_days": 0,
    "finished_goods_days": 0,
    "tax_rate": 0,
    "workshed": [],
    "machinery": [
      { "particulars": "Upholsiter Vaccum Cleaner", "qty": 1, "rate": 112100 },
      { "particulars": "Scissor Washing Tyre rest", "qty": 1, "rate": 531000 },
      { "particulars": "High Pressure Car Washer", "qty": 1, "rate": 188800 },
      { "particulars": "Nitrogen Tyre Inflator", "qty": 1, "rate": 100000 }
    ],
    "sales": [
      { "particulars": "Car Washing and Allignment & Other Services", "unit": "Services", "rate_unit": 1200000, "qty": 1, "amount": 1200000 }
    ],
    "raw_material": [
      { "particulars": "Consumables and Other Accessories", "unit": "Lump sum", "rate": 200000, "qty": 1, "amount": 200000 }
    ],
    "wages": [
      { "particulars": "Worker", "no_workers": 2, "wages_pm": 5000 }
    ],
    "salary": [
      { "particulars": "Accountant", "no_staff": 1, "salary_pm": 1000 }
    ],
    "workshed_rent": 5000,
    "maint_pct": 1,
    "power_pct": 2,
    "overhead_pct": 3,
    "phone_pct": 1,
    "stationery_pct": 0.1,
    "adv_pct": 0.5,
    "misc_pct": 0.09,
    "depr_building": 10,
    "depr_machinery": 15,
    "override_financing": true,
    "custom_own_contrib": 45262,
    "custom_term_loan": 950000,
    "wc_raw_material_val": 100000,
    "power_hp": 200,
    "project_intro": `The automobile service industry has witnessed steady growth due to the increasing number of vehicles and rising awareness among vehicle owners about regular maintenance. A Car Washing, Wheel Alignment, and Allied Automobile Service Center aims to provide comprehensive vehicle care solutions under one roof.
This project focuses on offering services such as car washing, wheel alignment, wheel balancing, tyre care, basic servicing, and other related maintenance services to ensure vehicle safety, performance, and longevity. With the use of modern equipment, trained manpower, and standardized procedures, the service center intends to deliver quality, timely, and cost-effective solutions to customers.`,
    "promoter_about": `Mr. Shubham Mahadev Huskal is the promoter of the proposed enterprise Samarth Car Washing Center. He is a Bachelor of Commerce (B.Com.) graduate with a sound understanding of business administration, accounting, and financial management, and he also possesses practical knowledge of car washing, wheel alignment, wheel balancing, and other allied automobile services. His familiarity with operational procedures, equipment handling, service quality standards, and customer management enables him to efficiently manage the day-to-day operations of the service center. With his educational background and technical awareness, the promoter is well-equipped to establish and successfully operate Samarth Car Washing Center in a sustainable and professional manner.`,
    "place": "Anjangaon Surji"
  },
  "photo_juned": {
    "name": "Juned Khan Jahangir Khan",
    "father": "Jahangir Khan",
    "project_name": "JK Film Studio",
    "qualification_academic": "10th Pass",
    "qualification_technical": "Computer",
    "gender": "Male",
    "agency": "DIC (Urban)",
    "category": "Minority",
    "unit_type": "Service",
    "district": "Amravati",
    "taluka": "Amravati",
    "pin": 444601,
    "mobile": "9503149480",
    "email": "juned.khan@example.com",
    "land_type": "Rented",
    "land_val": 0,
    "preop_cost": 5000,
    "furniture_cost": 15000,
    "contingency_cost": 0,
    "rent_pm": 5000,
    "interest_rate": 12,
    "payback_period": 5,
    "moratorium_period": 12,
    "receivables_days": 0,
    "raw_material_days": 0,
    "sip_days": 0,
    "finished_goods_days": 0,
    "tax_rate": 0,
    "workshed": [],
    "machinery": [
      { "particulars": "ILCE-7M4K/ BQ IN5 - 3285820", "qty": 2, "rate": 196000 },
      { "particulars": "Canon DSLR EOS RG M II 24-105 F4-7.1", "qty": 1, "rate": 185000 },
      { "particulars": "Canon DSLR EOS RG M II Body", "qty": 2, "rate": 155000 },
      { "particulars": "Agless Camera - DJI RS4", "qty": 2, "rate": 45000 }
    ],
    "sales": [
      { "particulars": "Photograph & Videography Services", "unit": "Services", "rate_unit": 1250000, "qty": 1, "amount": 1250000 }
    ],
    "raw_material": [],
    "wages": [
      { "particulars": "Worker", "no_workers": 4, "wages_pm": 5000 }
    ],
    "salary": [
      { "particulars": "Accountant", "no_staff": 1, "salary_pm": 1000 }
    ],
    "workshed_rent": 5000,
    "maint_pct": 1,
    "power_pct": 2,
    "overhead_pct": 3,
    "phone_pct": 1,
    "stationery_pct": 0.1,
    "adv_pct": 0.5,
    "misc_pct": 0.09,
    "depr_building": 10,
    "depr_machinery": 15,
    "override_financing": false,
    "custom_own_contrib": 49850,
    "custom_term_loan": 947150,
    "wc_raw_material_val": 0,
    "power_hp": 15,
    "project_intro": `The media and entertainment industry has witnessed rapid growth due to the increasing demand for high-quality photography, videography, and digital content creation for events, weddings, and commercial purposes. A modern photography and film studio aims to provide comprehensive digital imaging and videography solutions under one roof.
This project focuses on offering professional services such as portrait photography, wedding videography, event coverage, digital photo editing, and video post-production. With the use of modern high-resolution cameras, editing workstations, and trained technicians, the studio intends to deliver premium quality and timely creative services to its clients.`,
    "promoter_about": `Mr. Juned Khan Jahangir Khan is the promoter of the proposed enterprise JK Film Studio. He has completed his 10th Pass education and has additional training and experience in Computer applications. He possesses practical knowledge and skills in photography, videography, digital editing, and studio management. His familiarity with modern camera equipment, editing software, and client relations enables him to efficiently manage the day-to-day operations of the studio. With his technical skills and dedication, the promoter is well-equipped to establish and successfully operate JK Film Studio in a professional and sustainable manner.`,
    "place": "Amravati"
  },
  "photo_tushar": {
    "name": "Tushar Shankarao Sorgivkar",
    "father": "Shankarao Sorgivkar",
    "project_name": "Amey Film Creation",
    "qualification_academic": "12th Pass",
    "qualification_technical": "MA, M.ED",
    "gender": "Male",
    "agency": "DIC (Urban)",
    "category": "SC",
    "unit_type": "Service",
    "district": "Amravati",
    "taluka": "Amravati",
    "pin": 444602,
    "mobile": "9890542534",
    "email": "tushar.sorgivkar@example.com",
    "land_type": "Rented",
    "land_val": 0,
    "preop_cost": 5000,
    "furniture_cost": 12000,
    "contingency_cost": 0,
    "rent_pm": 5000,
    "interest_rate": 12,
    "payback_period": 5,
    "moratorium_period": 12,
    "receivables_days": 0,
    "raw_material_days": 0,
    "sip_days": 0,
    "finished_goods_days": 0,
    "tax_rate": 0,
    "workshed": [],
    "machinery": [
      { "particulars": "Sony ILCE-7M4 Body", "qty": 5, "rate": 142372.88 },
      { "particulars": "NanliteMix Wand 18", "qty": 6, "rate": 8474.58 },
      { "particulars": "Agless Camera - DJI RS4", "qty": 2, "rate": 34332.03 }
    ],
    "sales": [
      { "particulars": "Photograph & Videography Services", "unit": "Services", "rate_unit": 1200000, "qty": 1, "amount": 1200000 }
    ],
    "raw_material": [],
    "wages": [
      { "particulars": "Worker", "no_workers": 4, "wages_pm": 5000 }
    ],
    "salary": [
      { "particulars": "Accountant", "no_staff": 1, "salary_pm": 1000 }
    ],
    "workshed_rent": 5000,
    "maint_pct": 1,
    "power_pct": 2,
    "overhead_pct": 3,
    "phone_pct": 1,
    "stationery_pct": 0.1,
    "adv_pct": 0.5,
    "misc_pct": 0.09,
    "depr_building": 10,
    "depr_machinery": 15,
    "override_financing": false,
    "custom_own_contrib": 49900,
    "custom_term_loan": 948100,
    "wc_raw_material_val": 0,
    "power_hp": 15,
    "project_intro": `The digital media and professional videography industry continues to expand as individuals and businesses seek high-end video production and cinematic coverage for personal milestones and corporate marketing. A professional film creation and photography unit provides state-of-the-art cinematic video recording, editing, and commercial photography.
This project aims to offer high-quality digital video shooting, cinematography, drone videography, and post-production services. Utilizing advanced DSLR cameras, stabilizer equipment, lighting gear, and creative editing systems, the venture is positioned to capture market demand by delivering exceptional visual content.`,
    "promoter_about": `Mr. Tushar Shankarao Sorgivkar is the promoter of the proposed enterprise Amey Film Creation. He holds a 12th Pass academic qualification along with higher qualifications of MA and M.ED, demonstrating a strong academic foundation. He possesses practical experience and a keen interest in digital photography, film-making, video editing, and visual storytelling. His administrative capabilities, combined with his expertise in camera operations and direction, enable him to manage the service center's business and production workflows efficiently. The promoter is well-qualified and equipped to successfully run and grow Amey Film Creation.`,
    "place": "Amravati"
  },
  "mandap": {
    "name": "Nitin Vinayak Watane",
    "father": "Vinayak Watane",
    "project_name": "Jay Gajanan Bichayat Kendra",
    "qualification_academic": "8th Pass",
    "qualification_technical": "Computer",
    "gender": "Male",
    "agency": "DIC (Rural)",
    "category": "OBC",
    "unit_type": "Service",
    "district": "Amravati",
    "taluka": "Wasani Khurd",
    "pin": 444806,
    "mobile": "7057454550",
    "email": "nitin.watane@example.com",
    "land_type": "Rented",
    "land_val": 0,
    "preop_cost": 5000,
    "furniture_cost": 12000,
    "contingency_cost": 0,
    "rent_pm": 3000,
    "interest_rate": 12,
    "payback_period": 5,
    "moratorium_period": 12,
    "receivables_days": 0,
    "raw_material_days": 0,
    "sip_days": 0,
    "finished_goods_days": 0,
    "tax_rate": 0,
    "workshed": [],
    "machinery": [
      { "particulars": "Mandap & Decoration Items", "qty": 1, "rate": 1983000 }
    ],
    "sales": [
      { "particulars": "Mandap & Decoration Services", "unit": "Services", "rate_unit": 2400000, "qty": 1, "amount": 2400000 }
    ],
    "raw_material": [],
    "wages": [
      { "particulars": "Worker", "no_workers": 4, "wages_pm": 8000 }
    ],
    "salary": [
      { "particulars": "Accountant", "no_staff": 1, "salary_pm": 5000 }
    ],
    "workshed_rent": 3000,
    "maint_pct": 1,
    "power_pct": 2,
    "overhead_pct": 3,
    "phone_pct": 1,
    "stationery_pct": 0.1,
    "adv_pct": 0.5,
    "misc_pct": 0.09,
    "depr_building": 10,
    "depr_machinery": 15,
    "override_financing": false,
    "custom_own_contrib": 100000,
    "custom_term_loan": 1900000,
    "wc_raw_material_val": 0,
    "power_hp": 10,
    "project_intro": `The event management and decoration services market is highly active in India, driven by weddings, festivals, social gatherings, and public events. A Mandap and Decoration Services unit (Bichayat Kendra) supplies essential infrastructure, seating, decorative setups, and staging materials on a rental basis.
This project focuses on providing durable and decorative tent setups, chairs, tables, stage backdrops, lighting decoration, and event utensils. By maintaining high-quality inventory, reliable transport, and efficient setup labor, the center aims to offer prompt and attractive event services to satisfy local community requirements.`,
    "promoter_about": `Mr. Nitin Vinayak Watane is the promoter of the proposed enterprise Jay Gajanan Bichayat Kendra. He is an 8th Pass with computer qualification and has gained extensive experience in event management, mandap decoration, and catering service arrangements. He has practical knowledge of managing inventory, setup design, customer coordination, and labor scheduling for major events and celebrations. His operational familiarity with mandap structures, stage decoration items, and sound setups enables him to manage the enterprise's daily activities. With his hands-on experience, the promoter is well-positioned to operate Jay Gajanan Bichayat Kendra successfully.`,
    "place": "Wasani Khurd"
  }
};

// Global App State
let state = {};

// Initialize application with a preset (default: car_wash)
function init() {
  setupTabListeners();
  setupPresetListener();
  loadPreset("blank");
}

// Set up UI Tab switching logic
function setupTabListeners() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and panels
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      
      // Activate clicked tab
      btn.classList.add("active");
      const targetPanel = document.getElementById(btn.dataset.tab);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

// Preset dropdown listener
function setupPresetListener() {
  const select = document.getElementById("template-preset");
  select.addEventListener("change", (e) => {
    if (e.target.value) {
      loadPreset(e.target.value);
    }
  });
}

// Load preset data into state and inputs
function loadPreset(name) {
  const preset = JSON.parse(JSON.stringify(PRESETS[name])); // Deep copy
  state = preset;
  
  // Set non-table inputs
  const keys = [
    "name", "father", "project_name", "qualification_academic", "qualification_technical",
    "gender", "agency", "category", "unit_type", "district", "taluka", "pin", "mobile", "email",
    "land_type", "land_val", "preop_cost", "furniture_cost", "contingency_cost", "rent_pm",
    "interest_rate", "payback_period", "moratorium_period", "receivables_days", "raw_material_days",
    "sip_days", "finished_goods_days", "tax_rate", "workshed_rent",
    "maint_pct", "power_pct", "overhead_pct", "phone_pct", "stationery_pct", "adv_pct", "misc_pct",
    "depr_building", "depr_machinery", "override_financing", "custom_own_contrib", "custom_term_loan",
    "wc_raw_material_val", "power_hp", "project_intro", "promoter_about", "place"
  ];
  
  keys.forEach(k => {
    const el = document.getElementById(`in-${k}`);
    if (el) {
      if (el.type === "checkbox") {
        el.checked = !!state[k];
      } else {
        el.value = state[k] !== undefined ? state[k] : "";
      }
    }
  });
  
  // Render dynamic tables inputs
  renderFormTable("workshed", ["particulars", "area", "rate", "amount"]);
  renderFormTable("machinery", ["particulars", "qty", "rate", "amount"]);
  renderFormTable("sales", ["particulars", "unit", "rate_unit", "qty", "amount"]);
  renderFormTable("raw_material", ["particulars", "unit", "rate", "qty", "amount"]);
  renderFormTable("wages", ["particulars", "no_workers", "wages_pm"]);
  renderFormTable("salary", ["particulars", "no_staff", "salary_pm"]);

  // Set initial input listener triggers
  setupInputListeners();
  
  // Run first calculation
  recalculateAndRender();
}

// Render dynamic tables in the form panels
function renderFormTable(tableName, cols) {
  const tbody = document.querySelector(`#form-${tableName} tbody`);
  if (!tbody) return;
  tbody.innerHTML = "";
  
  const rows = state[tableName] || [];
  rows.forEach((row, rIndex) => {
    const tr = document.createElement("tr");
    cols.forEach(col => {
      const td = document.createElement("td");
      const input = document.createElement("input");
      if (col === "particulars" || col === "unit") {
        input.type = "text";
      } else if (col === "amount") {
        input.type = "text";
        input.inputMode = "numeric";
        input.pattern = "[0-9]*";
      } else {
        input.type = "number";
        input.step = "any";
      }
      input.dataset.col = col; // Set column identifier
      input.value = row[col] !== undefined && row[col] !== null ? row[col] : "";
      input.addEventListener("input", (e) => {
        const isNumericCol = (col !== "particulars" && col !== "unit");
        const val = isNumericCol ? parseFloat(e.target.value) || 0 : e.target.value;
        state[tableName][rIndex][col] = val;
        
        // Auto-calculate amount if qty/area or rate changes
        if (col === "area" || col === "qty" || col === "rate" || col === "rate_unit") {
          const r = state[tableName][rIndex];
          const q = parseFloat(r.area !== undefined ? r.area : r.qty) || 0;
          const rt = parseFloat(r.rate !== undefined ? r.rate : r.rate_unit) || 0;
          if (q > 0 && rt > 0) {
            r.amount = Math.round(q * rt);
            const trEl = input.closest("tr");
            const amtInp = trEl.querySelector('input[data-col="amount"]');
            if (amtInp) {
              amtInp.value = r.amount;
            }
          }
        }
        recalculateAndRender();
      });
      td.appendChild(input);
      tr.appendChild(td);
    });
    
    // Add remove button
    const tdAction = document.createElement("td");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "icon-btn";
    btn.innerHTML = `<span style="font-size:12px; font-weight:bold;">&times;</span>`;
    btn.addEventListener("click", () => {
      state[tableName].splice(rIndex, 1);
      renderFormTable(tableName, cols);
      recalculateAndRender();
    });
    tdAction.appendChild(btn);
    tr.appendChild(tdAction);
    
    tbody.appendChild(tr);
  });
}

// Set up dynamic input list additions
function addRow(tableName, cols) {
  const newRow = {};
  cols.forEach(col => {
    newRow[col] = (col === "particulars" || col === "unit") ? "" : 0;
  });
  if (!state[tableName]) state[tableName] = [];
  state[tableName].push(newRow);
  renderFormTable(tableName, cols);
  recalculateAndRender();
}

// Setup input binding listeners
function setupInputListeners() {
  const inputs = document.querySelectorAll(".sidebar .form-content input:not(.form-table input), .sidebar .form-content select, .sidebar .form-content textarea");
  inputs.forEach(input => {
    // Avoid double attaching
    input.removeEventListener("change", handleInputChange);
    input.removeEventListener("input", handleInputChange);
    
    input.addEventListener("change", handleInputChange);
    if ((input.tagName === "INPUT" || input.tagName === "TEXTAREA") && input.type !== "checkbox" && input.type !== "radio") {
      input.addEventListener("input", handleInputChange);
    }
  });
}

// Handle value updates in global state
function handleInputChange(e) {
  const id = e.target.id;
  const key = id.replace("in-", "");
  let val;
  if (e.target.type === "checkbox") {
    val = e.target.checked;
  } else if (e.target.type === "number") {
    val = parseFloat(e.target.value) || 0;
  } else {
    val = e.target.value;
  }
  
  state[key] = val;
  
  // Enable or disable override inputs based on override check
  if (key === "override_financing") {
    const customOwn = document.getElementById("in-custom_own_contrib");
    const customTL = document.getElementById("in-custom_term_loan");
    if (customOwn && customTL) {
      customOwn.disabled = !val;
      customTL.disabled = !val;
    }
  }
  
  recalculateAndRender();
}

// Helper to format values in Indian Rupee format (comma grouped)
function formatINR(val, decimals = 0) {
  if (val === undefined || val === null || isNaN(val)) return "0";
  if (typeof val === "string") return val;
  
  const num = parseFloat(val);
  const fixed = num.toFixed(decimals);
  const parts = fixed.split(".");
  let integerPart = parts[0];
  const decimalPart = parts[1] ? "." + parts[1] : "";
  
  // Remove minus sign for formatting and re-add later
  const isNegative = integerPart.startsWith("-");
  if (isNegative) {
    integerPart = integerPart.substring(1);
  }
  
  // Indian numbering system formatting: last 3 digits grouped, then groups of 2 digits
  let lastThree = integerPart.substring(integerPart.length - 3);
  const otherDigits = integerPart.substring(0, integerPart.length - 3);
  if (otherDigits !== "") {
    lastThree = "," + lastThree;
  }
  const res = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + decimalPart;
  return isNegative ? "-" + res : res;
}

// Recalculates all values and outputs them to preview A4 sheets
function recalculateAndRender() {
  const data = calculateDPR();
  renderPreviewHTML(data);
}

// Main CMEGP project report financial engine
function calculateDPR() {
  const d = {};
  
  // 1. Basic Metadata
  d.name = state.name || "";
  d.father = state.father || "";
  d.project_name = state.project_name || "";
  d.gender = state.gender || "Male";
  d.category = state.category || "General";
  d.qualification_academic = state.qualification_academic || "";
  d.qualification_technical = state.qualification_technical || "";
  d.district = state.district || "";
  d.taluka = state.taluka || "";
  d.pin = state.pin || "";
  d.mobile = state.mobile || "";
  d.email = state.email || "";
  d.agency = state.agency || "DIC (Urban)";
  d.unit_type = state.unit_type || "Service";
  d.power_hp = state.power_hp !== undefined ? parseFloat(state.power_hp) || 0 : 0;
  d.project_intro = state.project_intro || "";
  d.promoter_about = state.promoter_about || "";
  d.place = state.place !== undefined ? state.place : (state.taluka || "");
  
  // Determine if Rural or Urban sponsoring agency
  d.is_urban = d.agency === "DIC (Urban)";
  
  // 2. Fixed Capital - Workshed
  d.workshed = (state.workshed || []).map(w => {
    const area = parseFloat(w.area) || 0;
    const rate = parseFloat(w.rate) || 0;
    const amt = (area > 0 && rate > 0) ? Math.round(area * rate) : (parseFloat(w.amount) || 0);
    return {
      particulars: w.particulars || "",
      area: area,
      rate: rate,
      amount: amt
    };
  });
  d.total_workshed = d.workshed.reduce((sum, w) => sum + w.amount, 0);
  
  // 3. Fixed Capital - Machinery
  d.machinery = (state.machinery || []).map(m => {
    const qty = parseFloat(m.qty) || 0;
    const rate = parseFloat(m.rate) || 0;
    const amt = (qty > 0 && rate > 0) ? Math.round(qty * rate) : (parseFloat(m.amount) || 0);
    return {
      particulars: m.particulars || "",
      qty: qty,
      rate: rate,
      amount: amt
    };
  });
  d.total_machinery = d.machinery.reduce((sum, m) => sum + m.amount, 0);
  
  // 4. Other Fixed Expenses
  d.preop_cost = parseFloat(state.preop_cost) || 0;
  d.furniture_cost = parseFloat(state.furniture_cost) || 0;
  d.contingency_cost = parseFloat(state.contingency_cost) || 0;
  
  d.total_capex = d.total_workshed + d.total_machinery + d.preop_cost + d.furniture_cost + d.contingency_cost;
  
  // 5. Operating Expenses - Sales
  d.sales = (state.sales || []).map(s => {
    const qty = parseFloat(s.qty) || 0;
    const rate = parseFloat(s.rate_unit) || 0;
    const amt = (qty > 0 && rate > 0) ? Math.round(qty * rate) : (parseFloat(s.amount) || 0);
    return {
      particulars: s.particulars || "",
      unit: s.unit || "",
      rate_unit: rate,
      qty: qty,
      amount: amt
    };
  });
  d.annual_sales = d.sales.reduce((sum, s) => sum + s.amount, 0);
  
  // 6. Operating Expenses - Raw Materials
  d.raw_material = (state.raw_material || []).map(rm => {
    const qty = parseFloat(rm.qty) || 0;
    const rate = parseFloat(rm.rate) || 0;
    const amt = (qty > 0 && rate > 0) ? Math.round(qty * rate) : (parseFloat(rm.amount) || 0);
    return {
      particulars: rm.particulars || "",
      unit: rm.unit || "",
      rate: rate,
      qty: qty,
      amount: amt
    };
  });
  d.annual_raw_material = d.raw_material.reduce((sum, rm) => sum + rm.amount, 0);
  
  // 7. Operating Expenses - Wages
  d.wages = (state.wages || []).map(w => {
    const no = parseFloat(w.no_workers) || 0;
    const pm = parseFloat(w.wages_pm) || 0;
    return {
      particulars: w.particulars || "",
      no_workers: no,
      wages_pm: pm,
      amount: Math.round(no * pm * 12)
    };
  });
  d.annual_wages = d.wages.reduce((sum, w) => sum + w.amount, 0);
  
  // 8. Operating Expenses - Salaries
  d.salary = (state.salary || []).map(s => {
    const no = parseFloat(s.no_staff) || 0;
    const pm = parseFloat(s.salary_pm) || 0;
    return {
      particulars: s.particulars || "",
      no_staff: no,
      salary_pm: pm,
      amount: Math.round(no * pm * 12)
    };
  });
  d.annual_salary = d.salary.reduce((sum, s) => sum + s.amount, 0);
  
  // 9. Overheads (100% capacity)
  d.repairs_maint = Math.round(d.annual_sales * (parseFloat(state.maint_pct) || 0) / 100);
  d.power_fuel = Math.round(d.annual_sales * (parseFloat(state.power_pct) || 0) / 100);
  d.other_overheads = Math.round(d.annual_sales * (parseFloat(state.overhead_pct) || 0) / 100);
  d.telephone = Math.round(d.annual_sales * (parseFloat(state.phone_pct) || 0) / 100);
  d.stationery = Math.round(d.annual_sales * (parseFloat(state.stationery_pct) || 0) / 100);
  d.advertisement = Math.round(d.annual_sales * (parseFloat(state.adv_pct) || 0) / 100);
  d.rent = Math.round((parseFloat(state.rent_pm) || 0) * 12);
  d.other_misc = Math.round(d.annual_sales * (parseFloat(state.misc_pct) || 0) / 100);
  
  // 10. Operations Calculations
  d.wc_raw_material_val = state.wc_raw_material_val !== undefined ? parseFloat(state.wc_raw_material_val) : d.annual_raw_material;
  d.total_service_cost = d.annual_raw_material + d.annual_wages + d.repairs_maint + d.power_fuel + d.other_overheads;
  d.total_admin_cost = d.annual_salary + d.telephone + d.stationery + d.advertisement + d.rent + d.other_misc;
  d.total_service_primary_cost = d.total_service_cost; // backup
  d.total_service_admin_cost = d.total_service_cost + d.total_admin_cost;
  
  // Working Capital specific Service Cost
  d.total_service_cost_wc = d.wc_raw_material_val + d.annual_wages + d.repairs_maint + d.power_fuel + d.other_overheads;
  d.total_service_admin_cost_wc = d.total_service_cost_wc + d.total_admin_cost;
  
  // 11. Working Capital Estimate (Days base, standard year = 300 days)
  d.wc_raw_material = Math.round((d.wc_raw_material_val / 300) * (parseFloat(state.raw_material_days) || 0));
  d.wc_stock_in_process = Math.round((d.total_service_cost_wc / 300) * (parseFloat(state.sip_days) || 0));
  d.wc_finished_goods = Math.round((d.total_service_admin_cost_wc / 300) * (parseFloat(state.finished_goods_days) || 0));
  
  // Receivables Days calculation with the exact Excel formula correction: ROUND(ServiceCost/300 * Days, 0) - 1
  const rec_days = parseFloat(state.receivables_days) || 0;
  d.wc_receivables = rec_days > 0 ? Math.round((d.total_service_admin_cost_wc / 300) * rec_days) - 1 : 0;
  
  d.total_wc_requirement = d.wc_raw_material + d.wc_stock_in_process + d.wc_finished_goods + d.wc_receivables;
  
  // 12. Total Project Cost
  d.total_project_cost = d.total_capex + d.total_wc_requirement;
  
  // 13. Financing Ratios
  // Determine if Special category or General
  // Special category: Own contribution 5%, Bank finance 95%
  // General: Own contribution 10%, Bank finance 90% (Note: Male General is 10%, Female General is 5% since women are under Special)
  d.is_special = d.category !== "General" || d.gender === "Female";
  d.own_contrib_rate = d.is_special ? 0.05 : 0.10;
  d.bank_finance_rate = 1.0 - d.own_contrib_rate;
  
  if (state.override_financing) {
    d.own_contribution = parseFloat(state.custom_own_contrib) || 0;
    d.term_loan = parseFloat(state.custom_term_loan) || 0;
    d.wc_loan = Math.round(d.total_wc_requirement * d.bank_finance_rate);
    d.total_loan = d.term_loan + d.wc_loan;
  } else {
    d.own_contribution = Math.round(d.total_project_cost * d.own_contrib_rate);
    d.term_loan = Math.round(d.total_capex * d.bank_finance_rate);
    d.wc_loan = Math.round(d.total_wc_requirement * d.bank_finance_rate);
    d.total_loan = d.term_loan + d.wc_loan;
  }
  
  // 14. Margin Money (Subsidy) Rate & Verification Limits
  // Rural Special: 35%, Urban Special: 25%
  // Rural General Male: 25%, Urban General Male: 15%
  if (d.is_urban) {
    d.subsidy_rate = d.is_special ? 0.25 : 0.15;
  } else {
    d.subsidy_rate = d.is_special ? 0.35 : 0.25;
  }
  
  // CMEGP Project Cost Limits:
  // Qualification index mapping (1: Under 8th, 2: 8th Pass, 3: 10th Pass, etc.)
  // We'll determine qualification code based on select
  const q_academic = d.qualification_academic;
  d.is_under_8th = q_academic === "Under 8th";
  
  d.max_project_limit = 0;
  if (d.is_under_8th) {
    d.max_project_limit = d.unit_type === "Manufacturing" ? 1000000 : 500000;
  } else {
    d.max_project_limit = d.unit_type === "Manufacturing" ? 5000000 : 2000000;
  }
  
  // Check if project cost violates CMEGP guidelines
  d.subsidy_warning = "";
  if (d.is_under_8th && d.unit_type === "Service" && d.total_project_cost > 500000) {
    d.subsidy_warning = "Should not exceed 5 lakhs Project cost under Service Industry";
  } else if (d.is_under_8th && d.unit_type === "Manufacturing" && d.total_project_cost > 1000000) {
    d.subsidy_warning = "should not exceed 10 lakhs Project cost Manufacturing Industry";
  } else if (!d.is_under_8th && d.unit_type === "Service" && d.total_project_cost > 2000000) {
    d.subsidy_warning = "should not exceed 20 lakhs Project cost under Service Industry";
  } else if (!d.is_under_8th && d.unit_type === "Manufacturing" && d.total_project_cost > 5000000) {
    d.subsidy_warning = "should not exceed 50 lakhs Project cost under Manufacturing Industry";
  }
  
  if (d.subsidy_warning) {
    d.subsidy_amount = d.subsidy_warning;
  } else {
    d.subsidy_amount = Math.round(d.total_project_cost * d.subsidy_rate);
  }
  
  // 15. Statement Showing repayment of Term Loan (up to 8 years)
  // Term Loan Interest Rate
  d.interest_rate = (parseFloat(state.interest_rate) || 12) / 100;
  d.payback_period = parseFloat(state.payback_period) || 5;
  d.moratorium_months = parseFloat(state.moratorium_period) || 12;
  
  d.repayment_tl = [];
  let tl_opening = d.term_loan;
  for (let year = 1; year <= 8; year++) {
    let installment = 0;
    if (year === 1) {
      // Moratorium logic
      installment = Math.round(tl_opening * d.moratorium_months / 12 * 1 / d.payback_period);
      // Wait! For Shubham, moratorium_months = 12, installment was 0?
      // Yes, in our analysis, Year 1 installment = 0 because C142*F34/12*1/F31 = 950000 * 0 / 12 * 1/5 = 0
      // In the Excel sheet, the F34 cell had value 0, so it computed 0.
      // We will make Year 1 installment = 0 if moratorium is 12 months, or scale it accordingly
      if (d.moratorium_months === 12) {
        installment = 0;
      }
    } else if (year <= d.payback_period + 1) {
      installment = Math.round(d.term_loan / d.payback_period);
    } else if (year === d.payback_period + 2) {
      installment = tl_opening;
    }
    
    // Safety check to not exceed remaining opening balance
    if (installment > tl_opening) installment = tl_opening;
    if (tl_opening <= 0) installment = 0;
    
    const closing = tl_opening - installment;
    const interest = Math.round(tl_opening * d.interest_rate);
    
    d.repayment_tl.push({
      year: getYearLabel(year),
      opening: tl_opening,
      installment: installment,
      closing: closing,
      interest: interest
    });
    
    tl_opening = closing;
  }
  
  // 16. Statement Showing repayment of Working Capital Loan
  d.repayment_wc = [];
  let wc_opening = d.wc_loan;
  for (let year = 1; year <= 8; year++) {
    let installment = 0;
    if (year === 1) {
      if (d.moratorium_months === 12) {
        installment = 0;
      }
    } else if (year <= d.payback_period + 1) {
      installment = Math.round(d.wc_loan / d.payback_period);
    } else if (year === d.payback_period + 2) {
      installment = wc_opening;
    }
    
    if (installment > wc_opening) installment = wc_opening;
    if (wc_opening <= 0) installment = 0;
    
    const closing = wc_opening - installment;
    const interest = Math.round(wc_opening * d.interest_rate);
    
    d.repayment_wc.push({
      year: getYearLabel(year),
      opening: wc_opening,
      installment: installment,
      closing: closing,
      interest: interest
    });
    
    wc_opening = closing;
  }
  
  // 17. Statement Showing Depreciation on Fixed Assets
  d.depr_b_rate = (parseFloat(state.depr_building) || 10) / 100;
  d.depr_m_rate = (parseFloat(state.depr_machinery) || 15) / 100;
  
  d.depr_workshed = [];
  let workshed_val = d.total_workshed;
  for (let year = 1; year <= 5; year++) {
    const depr = Math.round(workshed_val * d.depr_b_rate);
    const closing = workshed_val - depr;
    d.depr_workshed.push({ year: year, opening: workshed_val, depr: depr, closing: closing });
    workshed_val = closing;
  }
  
  d.depr_machinery = [];
  let machinery_val = d.total_machinery + d.furniture_cost; // Include furniture in machinery depr as in the sheets!
  for (let year = 1; year <= 5; year++) {
    const depr = Math.round(machinery_val * d.depr_m_rate);
    const closing = machinery_val - depr;
    d.depr_machinery.push({ year: year, opening: machinery_val, depr: depr, closing: closing });
    machinery_val = closing;
  }
  
  d.total_depr = [];
  for (let idx = 0; idx < 5; idx++) {
    const w_depr = d.depr_workshed[idx].depr;
    const m_depr = d.depr_machinery[idx].depr;
    d.total_depr.push(w_depr + m_depr);
  }
  
  // 18. Schedule of Sales Realization & Capacity scale
  // Capacity sales scale: Y1: 70%, Y2: 80%, Y3: 90%, Y4: 90%, Y5: 100%
  d.sales_cap_pct = [0.70, 0.80, 0.90, 0.90, 1.00];
  d.sales_projections = d.sales_cap_pct.map(pct => Math.round(d.annual_sales * pct));
  
  // Capacity expenses scale: Y1: 80%, Y2: 85%, Y3: 90%, Y4: 95%, Y5: 100%
  d.exp_cap_pct = [0.80, 0.85, 0.90, 0.95, 1.00];
  
  // 19. Projected Profit & Loss (Years 1 to 5)
  d.pl_sales = [...d.sales_projections];
  d.pl_raw_material = d.exp_cap_pct.map(pct => Math.round(d.annual_raw_material * pct));
  d.pl_wages = d.exp_cap_pct.map(pct => Math.round(d.annual_wages * pct));
  d.pl_repairs = d.exp_cap_pct.map(pct => Math.round(d.repairs_maint * pct));
  d.pl_power = d.exp_cap_pct.map(pct => Math.round(d.power_fuel * pct));
  d.pl_overhead = d.exp_cap_pct.map(pct => Math.round(d.other_overheads * pct));
  
  d.pl_service_cost = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const raw = d.pl_raw_material[yearIdx];
    const wage = d.pl_wages[yearIdx];
    const rep = d.pl_repairs[yearIdx];
    const pwr = d.pl_power[yearIdx];
    const ovh = d.pl_overhead[yearIdx];
    const depr = d.total_depr[yearIdx];
    d.pl_service_cost.push(raw + wage + rep + pwr + ovh + depr);
  }
  
  // Accountant Salary (scales? No, in sheet it was fixed, wait! Yes: Y1 = 12000, Y2 = ROUND(5%*Y1 + Y1) = 12600.
  // Wait! Let's check: in sheets_dump_rest Row 304:
  // `G304: =ROUND(((5%*F304)+F304),0) | H304: =ROUND(((5%*G304)+G304),0)...`
  // So accountant salary grows by 5% each year!
  // Let's implement this 5% annual increase for salary in the P&L!
  d.pl_salary = [];
  let current_salary = d.annual_salary;
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    d.pl_salary.push(current_salary);
    current_salary = Math.round(current_salary * 1.05);
  }
  
  d.pl_telephone = d.exp_cap_pct.map(pct => Math.round(d.telephone * pct));
  d.pl_stationery = d.exp_cap_pct.map(pct => Math.round(d.stationery * pct));
  d.pl_advertisement = d.exp_cap_pct.map(pct => Math.round(d.advertisement * pct));
  d.pl_rent = Array(5).fill(d.rent); // Fixed workshed rent
  d.pl_misc = d.exp_cap_pct.map(pct => Math.round(d.other_misc * pct));
  
  d.pl_admin_cost = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const sal = d.pl_salary[yearIdx];
    const tel = d.pl_telephone[yearIdx];
    const stat = d.pl_stationery[yearIdx];
    const adv = d.pl_advertisement[yearIdx];
    const rnt = d.pl_rent[yearIdx];
    const msc = d.pl_misc[yearIdx];
    d.pl_admin_cost.push(sal + tel + stat + adv + rnt + msc);
  }
  
  // Interest Costs (from repayment tables)
  d.pl_interest_tl = [];
  d.pl_interest_wc = [];
  d.pl_total_interest = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const tl_int = d.repayment_tl[yearIdx].interest;
    const wc_int = d.repayment_wc[yearIdx].interest;
    d.pl_interest_tl.push(tl_int);
    d.pl_interest_wc.push(wc_int);
    d.pl_total_interest.push(tl_int + wc_int);
  }
  
  // Cost of Sale
  d.pl_cost_of_sale = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const s_cost = d.pl_service_cost[yearIdx];
    const a_cost = d.pl_admin_cost[yearIdx];
    const interest = d.pl_total_interest[yearIdx];
    d.pl_cost_of_sale.push(s_cost + a_cost + interest);
  }
  
  // Profit & Tax
  d.pl_profit_before_tax = [];
  d.pl_tax = [];
  d.pl_net_profit = [];
  const taxRate = (parseFloat(state.tax_rate) || 0) / 100;
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const sales = d.pl_sales[yearIdx];
    const cost = d.pl_cost_of_sale[yearIdx];
    const pbt = sales - cost;
    const tax = pbt > 0 ? Math.round(pbt * taxRate) : 0;
    d.pl_profit_before_tax.push(pbt);
    d.pl_tax.push(tax);
    d.pl_net_profit.push(pbt - tax);
  }
  
  // 20. Debt Service Coverage Ratio (D.S.C.R.)
  d.dscr_a = [];
  d.dscr_b = [];
  d.dscr = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const profit = d.pl_net_profit[yearIdx];
    const depr = d.total_depr[yearIdx];
    const tl_int = d.pl_interest_tl[yearIdx];
    const tl_inst = d.repayment_tl[yearIdx].installment;
    const wc_int = d.pl_interest_wc[yearIdx];
    
    const a = profit + depr;
    const b = tl_int + tl_inst + wc_int;
    
    d.dscr_a.push(a);
    d.dscr_b.push(b);
    d.dscr.push(b > 0 ? a / b : 0);
  }
  
  const sum_dscr = d.dscr.reduce((sum, v) => sum + v, 0);
  d.avg_dscr = sum_dscr / 5;
  
  // 21. Projected Balance Sheet
  // Liabilities
  d.bs_promoter_capital = Array(5).fill(d.own_contribution);
  d.bs_profit = [...d.pl_net_profit]; // current year profit in liabilities
  d.bs_term_loan = [];
  d.bs_wc_loan = [];
  d.bs_total_liabilities = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const tl_bal = d.repayment_tl[yearIdx].opening; // opening TL balance
    const wc_bal = d.repayment_wc[yearIdx].opening; // opening WC balance
    d.bs_term_loan.push(tl_bal);
    d.bs_wc_loan.push(wc_bal);
    
    d.bs_total_liabilities.push(d.own_contribution + d.pl_net_profit[yearIdx] + tl_bal + wc_bal);
  }
  
  // Assets
  d.bs_gross_fixed_assets = [];
  d.bs_depreciation = [...d.total_depr];
  d.bs_net_fixed_assets = [];
  d.bs_preliminary_exp = [];
  d.bs_current_assets = [];
  d.bs_cash = [];
  d.bs_total_assets = [];
  
  let current_gross = d.total_workshed + d.total_machinery + d.furniture_cost;
  let current_prelim = d.preop_cost;
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    d.bs_gross_fixed_assets.push(current_gross);
    const depr = d.total_depr[yearIdx];
    const net_fa = current_gross - depr;
    d.bs_net_fixed_assets.push(net_fa);
    
    // Scale preliminary expenses down by 25% (75% remains)
    d.bs_preliminary_exp.push(current_prelim);
    current_prelim = current_prelim * 0.75;
    
    const wc_bal = d.repayment_wc[yearIdx].opening;
    d.bs_current_assets.push(wc_bal);
    
    // Cash balance plug equation: TotalLiab - (NetFixedAssets + CurrentAssets)
    const liab = d.bs_total_liabilities[yearIdx];
    const cash = liab - (net_fa + wc_bal);
    d.bs_cash.push(cash);
    
    // Total Assets = NetFixedAssets + CurrentAssets + Cash
    d.bs_total_assets.push(net_fa + wc_bal + cash);
    
    // Next year's gross asset is this year's net fixed asset
    current_gross = net_fa;
  }
  
  // 22. Cash Flow Statement
  // Inflows
  d.cf_net_profit = [...d.pl_net_profit];
  d.cf_depreciation = [...d.total_depr];
  d.cf_term_loan = [];
  d.cf_wc_loan = [];
  d.cf_promoter_capital = [];
  d.cf_total_inflow = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const tl_bal = d.repayment_tl[yearIdx].opening;
    const wc_bal = d.repayment_wc[yearIdx].opening;
    d.cf_term_loan.push(tl_bal);
    d.cf_wc_loan.push(wc_bal);
    
    const capital = yearIdx === 0 ? d.own_contribution : 0;
    d.cf_promoter_capital.push(capital);
    
    d.cf_total_inflow.push(d.pl_net_profit[yearIdx] + d.total_depr[yearIdx] + tl_bal + wc_bal + capital);
  }
  
  // Outflows
  d.cf_fixed_capital = [];
  d.cf_repay_tl = [];
  d.cf_repay_wc = [];
  d.cf_current_assets = [];
  d.cf_total_outflow = [];
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const fixed_cap = yearIdx === 0 ? d.total_capex : 0;
    d.cf_fixed_capital.push(fixed_cap);
    
    const tl_repay = d.repayment_tl[yearIdx].installment;
    const wc_repay = d.repayment_wc[yearIdx].installment;
    d.cf_repay_tl.push(tl_repay);
    d.cf_repay_wc.push(wc_repay);
    
    const wc_bal = d.repayment_wc[yearIdx].opening;
    d.cf_current_assets.push(wc_bal);
    
    // Note: total outflow = Repayment TL + Repayment WC + Current Assets
    // (And year 0 or year 1 Fixed Capital is included in the sum? Wait!
    // In our Excel inspection, year 1 outflow was SUM(repayments + current assets), and Fixed Capital was NOT in the sum, but let's check!)
    // Yes: F368: Val=7301, Form==SUM(F365:F367)
    // G368: Val=198761.2, Form==SUM(G365:G367)
    // F365: Repay TL, F366: Repay WC, F367: Current Assets.
    // So indeed, the Outflow SUM in the Excel sheet ONLY sums Repay TL, Repay WC, and Current Assets!
    // We will follow this exact formula layout.
    d.cf_total_outflow.push(tl_repay + wc_repay + wc_bal);
  }
  
  // Surplus & Cash accumulation
  d.cf_opening_cash = [];
  d.cf_surplus = [];
  d.cf_closing_cash = [];
  
  let prev_closing_cash = 0;
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    d.cf_opening_cash.push(prev_closing_cash);
    const surplus = d.cf_total_inflow[yearIdx] - d.cf_total_outflow[yearIdx];
    d.cf_surplus.push(surplus);
    
    const closing = prev_closing_cash + surplus;
    d.cf_closing_cash.push(closing);
    prev_closing_cash = closing;
  }
  
  // 23. Break Even Point & Ratios
  // Fixed Cost = Salary + Rent + TL Interest + Depreciation
  // Variable Cost = Raw Materials + Wages + Repairs + Power + Overheads + WC Interest
  d.ratio_fixed_cost = [];
  d.ratio_variable_cost = [];
  d.ratio_total_cost = [];
  d.ratio_sales = [...d.pl_sales];
  d.ratio_contribution = [];
  d.ratio_bep_pct = [];
  d.ratio_be_sales = [];
  d.ratio_be_units = [];
  d.ratio_current_ratio = [];
  d.ratio_net_profit_ratio = [];
  
  for (let yearIdx = 0; yearIdx < 5; yearIdx++) {
    const salary = d.pl_salary[yearIdx];
    const rent = d.pl_rent[yearIdx];
    const tl_int = d.pl_interest_tl[yearIdx];
    const depr = d.total_depr[yearIdx];
    
    const raw = d.pl_raw_material[yearIdx];
    const wage = d.pl_wages[yearIdx];
    const rep = d.pl_repairs[yearIdx];
    const pwr = d.pl_power[yearIdx];
    const ovh = d.pl_overhead[yearIdx];
    const wc_int = d.pl_interest_wc[yearIdx];
    
    // Add other fixed / admin expenses to fixed cost
    const fixed = salary + rent + tl_int + depr;
    const variable = raw + wage + rep + pwr + ovh + wc_int + d.pl_telephone[yearIdx] + d.pl_stationery[yearIdx] + d.pl_advertisement[yearIdx] + d.pl_misc[yearIdx];
    
    d.ratio_fixed_cost.push(fixed);
    d.ratio_variable_cost.push(variable);
    d.ratio_total_cost.push(fixed + variable);
    
    const sales = d.pl_sales[yearIdx];
    const contribution = sales - variable;
    d.ratio_contribution.push(contribution);
    
    const bep_pct = contribution > 0 ? (fixed / contribution) : 0;
    d.ratio_bep_pct.push(bep_pct);
    d.ratio_be_sales.push(bep_pct * sales);
    
    // BE Units = BE Sales / Rate of first product
    const first_product_rate = d.sales[0] ? d.sales[0].rate_unit : 1;
    d.ratio_be_units.push(first_product_rate > 0 ? (bep_pct * sales) / first_product_rate : 0);
    
    // Current Ratio = Current Assets / (TL Installment + TL Interest + WC Installment + WC Interest)
    // Formula in sheet: F391: =(((F350)/(F142+I142+F155+I155)))
    // F350: Current Assets, F142: TL Inst, I142: TL Int, F155: WC Inst, I155: WC Int.
    const tl_inst = d.repayment_tl[yearIdx].installment;
    const wc_inst = d.repayment_wc[yearIdx].installment;
    const denominator = tl_inst + tl_int + wc_inst + wc_int;
    const cur_assets = d.bs_current_assets[yearIdx];
    d.ratio_current_ratio.push(denominator > 0 ? cur_assets / denominator : 0);
    
    // Net Profit Ratio = Net Profit / Sales
    d.ratio_net_profit_ratio.push(sales > 0 ? d.pl_net_profit[yearIdx] / sales : 0);
  }
  
  return d;
}

// Convert 1 to "1st", 2 to "2nd", etc.
function getYearLabel(year) {
  if (year === 1) return "1st";
  if (year === 2) return "2nd";
  if (year === 3) return "3rd";
  return year + "th";
}

// Helper to set element text safely
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = val !== undefined && val !== null ? val : "";
  }
}

// Helper to set element html safely
function setHTML(id, val) {
  const el = document.getElementById(id);
  if (el) {
    el.innerHTML = val !== undefined && val !== null ? val : "";
  }
}

// Helper to set table html safely
function setTableHTML(selector, html) {
  const el = document.querySelector(selector);
  if (el) {
    el.innerHTML = html;
  }
}

// Render values into preview area HTML
function renderPreviewHTML(d) {
  // Page 1: DPR_FRONT (Cover Page)
  setText("p1-title", d.project_name);
  
  // Page 3: DPR Introduction & About the Promoter
  setText("p3-intro", d.project_intro);
  setText("p3-promoter", d.promoter_about);
  
  // Signature blocks Place rendering
  const places = document.querySelectorAll(".sig-place");
  places.forEach(el => {
    el.innerText = d.place || "-";
  });
  setText("p1-agency", d.agency);
  setText("p1-applicant", d.name);
  setText("p1-district", d.district);
  setText("p1-state", "Maharashtra");
  setText("p1-email", d.email);
  setText("p1-mobile", d.mobile);
  
  // Page 2: Project Glance (Top Sheet)
  setText("gl-applicant", d.name);
  setText("gl-constitution", "Individual");
  setText("gl-father", d.father);
  
  setText("gl-address", `${d.taluka}, Dist. ${d.district}, Maharashtra - ${d.pin}`);
  setText("gl-agency", d.agency);
  
  // Product info
  const productNames = d.sales.map(s => s.particulars).join(", ");
  setText("gl-product", productNames);
  
  // Project cost & financing
  setText("gl-cost", formatINR(d.total_project_cost));
  setText("gl-project-name", d.project_name);
  setText("gl-term-loan", formatINR(d.term_loan));
  setText("gl-subsidy", typeof d.subsidy_amount === "string" ? d.subsidy_amount : formatINR(d.subsidy_amount));
  setText("gl-capital", formatINR(d.own_contribution));
  
  // Key ratios
  setText("gl-dscr", d.avg_dscr.toFixed(2));
  setText("gl-payback", d.payback_period + " Years");
  setText("gl-impl", d.payback_period + " Years (incl. moratorium)");
  
  const y1_bep = d.ratio_bep_pct[0] * 100;
  setText("gl-bep", y1_bep.toFixed(2) + "%");
  setText("gl-employment", d.annual_wages > 0 ? d.wages.reduce((sum, w) => sum + w.no_workers, 0) + d.salary.reduce((sum, s) => sum + s.no_staff, 0) : "2");
  setText("gl-power", d.power_hp ? formatINR(d.power_hp) + " Units" : "-");
  
  const rawNames = d.raw_material.map(rm => rm.particulars).join(", ");
  setText("gl-raw", rawNames || "Consumables & Accessories");
  setText("gl-sales", formatINR(d.annual_sales));
  
  // Generate dynamically calculated tables and render them in place
  renderPreviewTables(d);
}

// Generate HTML elements for tables in detailed project report preview
function renderPreviewTables(d) {
  // Table 1: Workshed details
  let workshedHTML = "";
  if (d.workshed.length === 0) {
    workshedHTML = `<tr><td>Workshed / Factory Building (Rented/Leased)</td><td class="num">-</td><td class="num">-</td><td class="num">Rented</td></tr>`;
  } else {
    d.workshed.forEach(w => {
      workshedHTML += `<tr>
        <td>${w.particulars}</td>
        <td class="num">${w.area || "-"}</td>
        <td class="num">${w.rate > 0 ? formatINR(w.rate) : "-"}</td>
        <td class="num">${formatINR(w.amount)}</td>
      </tr>`;
    });
  }
  workshedHTML += `<tr class="total-row"><td>Total</td><td class="num">-</td><td class="num">-</td><td class="num">${formatINR(d.total_workshed)}</td></tr>`;
  setTableHTML("#preview-workshed-table tbody", workshedHTML);
  
  // Table 2: Machinery details
  let machineryHTML = "";
  d.machinery.forEach(m => {
    machineryHTML += `<tr>
      <td>${m.particulars}</td>
      <td class="num">${m.qty || "-"}</td>
      <td class="num">${m.rate > 0 ? formatINR(m.rate) : "-"}</td>
      <td class="num">${formatINR(m.amount)}</td>
    </tr>`;
  });
  machineryHTML += `<tr class="total-row"><td>Total Machinery Cost</td><td class="num">-</td><td class="num">-</td><td class="num">${formatINR(d.total_machinery)}</td></tr>`;
  setTableHTML("#preview-machinery-table tbody", machineryHTML);
  
  // Summary Project Cost Table
  let summaryCostHTML = `
    <tr><td>a. Workshed/Building</td><td class="num">${formatINR(d.total_workshed)}</td></tr>
    <tr><td>b. Machinery & Equipment</td><td class="num">${formatINR(d.total_machinery)}</td></tr>
    <tr><td>c. Furniture & Fixtures</td><td class="num">${formatINR(d.furniture_cost)}</td></tr>
    <tr><td>d. Preliminary & Pre-operative Expenses</td><td class="num">${formatINR(d.preop_cost)}</td></tr>
    <tr><td>e. Contingencies & Others</td><td class="num">${formatINR(d.contingency_cost)}</td></tr>
    <tr class="total-row"><td>Total Capital Expenditure</td><td class="num">${formatINR(d.total_capex)}</td></tr>
    <tr><td>f. Working Capital (Per Cycle)</td><td class="num">${formatINR(d.total_wc_requirement)}</td></tr>
    <tr class="total-row" style="background-color:#e5e7eb;"><td>Total Cost of Project</td><td class="num">${formatINR(d.total_project_cost)}</td></tr>
  `;
  setTableHTML("#preview-cost-table tbody", summaryCostHTML);
  
  // Means of Finance Table
  const subsidyText = typeof d.subsidy_amount === "string" ? d.subsidy_amount : `${formatINR(d.subsidy_amount)} (${(d.subsidy_rate * 100)}%)`;
  let financeHTML = `
    <tr><td>Own Contribution (Capital)</td><td class="num">${(d.own_contrib_rate * 100)}%</td><td class="num">${formatINR(d.own_contribution)}</td></tr>
    <tr><td>Bank Term Loan Finance</td><td class="num">${(d.bank_finance_rate * 100)}%</td><td class="num">${formatINR(d.term_loan)}</td></tr>
    <tr><td>Working Capital Cash Credit</td><td class="num">${(d.bank_finance_rate * 100)}%</td><td class="num">${formatINR(d.wc_loan)}</td></tr>
    <tr class="total-row"><td>Total Means of Financing</td><td class="num">100%</td><td class="num">${formatINR(d.own_contribution + d.term_loan + d.wc_loan)}</td></tr>
    <tr style="background-color:#f3f4f6;"><td class="bold">Margin Money (Govt. Subsidy Amount)</td><td class="num bold">${(d.subsidy_rate * 100)}%</td><td class="num bold">${subsidyText}</td></tr>
  `;
  setTableHTML("#preview-finance-table tbody", financeHTML);
  
  // Table 3: Repayment of Term Loan
  let repayTLHTML = "";
  d.repayment_tl.forEach(r => {
    repayTLHTML += `<tr>
      <td>${r.year}</td>
      <td class="num">${formatINR(r.opening)}</td>
      <td class="num">${formatINR(r.installment)}</td>
      <td class="num">${formatINR(r.closing)}</td>
      <td class="num">${formatINR(r.interest)}</td>
    </tr>`;
  });
  setTableHTML("#preview-repay-tl-table tbody", repayTLHTML);
  
  // Table 4: Repayment of WC Loan
  let repayWCHTML = "";
  d.repayment_wc.forEach(r => {
    repayWCHTML += `<tr>
      <td>${r.year}</td>
      <td class="num">${formatINR(r.opening)}</td>
      <td class="num">${formatINR(r.installment)}</td>
      <td class="num">${formatINR(r.closing)}</td>
      <td class="num">${formatINR(r.interest)}</td>
    </tr>`;
  });
  setTableHTML("#preview-repay-wc-table tbody", repayWCHTML);
  
  // Table 5: Depreciation
  let deprHTML = "";
  for (let idx = 0; idx < 5; idx++) {
    const yearLabel = getYearLabel(idx + 1);
    deprHTML += `<tr>
      <td>${yearLabel} Year</td>
      <td class="num">${formatINR(d.depr_workshed[idx].opening)}</td>
      <td class="num">${formatINR(d.depr_workshed[idx].depr)}</td>
      <td class="num">${formatINR(d.depr_machinery[idx].opening)}</td>
      <td class="num">${formatINR(d.depr_machinery[idx].depr)}</td>
      <td class="num">${formatINR(d.total_depr[idx])}</td>
    </tr>`;
  }
  setTableHTML("#preview-depr-table tbody", deprHTML);
  
  // Table 6: Sales Realization
  let salesHTML = "";
  d.sales.forEach(s => {
    const rateStr = s.rate_unit > 0 ? formatINR(s.rate_unit) : "-";
    const qtyStr = s.qty > 0 ? s.qty : "-";
    salesHTML += `<tr>
      <td>${s.particulars}</td>
      <td class="num">${s.unit || "-"}</td>
      <td class="num">${rateStr}</td>
      <td class="num">${qtyStr}</td>
      <td class="num">${formatINR(s.amount)}</td>
    </tr>`;
  });
  salesHTML += `<tr class="total-row"><td>Total Annual Sales (100% capacity)</td><td></td><td></td><td></td><td class="num">${formatINR(d.annual_sales)}</td></tr>`;
  setTableHTML("#preview-sales-table tbody", salesHTML);
  
  // Capacity Sales Realization Years 1-5
  let capSalesHTML = `
    <tr>
      <td>Capacity Utilization %</td>
      <td class="num">${(d.sales_cap_pct[0] * 100)}%</td>
      <td class="num">${(d.sales_cap_pct[1] * 100)}%</td>
      <td class="num">${(d.sales_cap_pct[2] * 100)}%</td>
      <td class="num">${(d.sales_cap_pct[3] * 100)}%</td>
      <td class="num">${(d.sales_cap_pct[4] * 100)}%</td>
    </tr>
    <tr class="total-row">
      <td>Sales Realization / Receipts (Rs.)</td>
      <td class="num">${formatINR(d.sales_projections[0])}</td>
      <td class="num">${formatINR(d.sales_projections[1])}</td>
      <td class="num">${formatINR(d.sales_projections[2])}</td>
      <td class="num">${formatINR(d.sales_projections[3])}</td>
      <td class="num">${formatINR(d.sales_projections[4])}</td>
    </tr>
  `;
  setTableHTML("#preview-capsales-table tbody", capSalesHTML);
  
  // Table 7: Raw Materials
  let rawHTML = "";
  if (d.raw_material.length === 0) {
    rawHTML = `<tr><td colspan="5">No raw material costs (Service unit)</td></tr>`;
  } else {
    d.raw_material.forEach(rm => {
      rawHTML += `<tr>
        <td>${rm.particulars}</td>
        <td class="num">${rm.unit || "-"}</td>
        <td class="num">${rm.rate > 0 ? formatINR(rm.rate) : "-"}</td>
        <td class="num">${rm.qty > 0 ? rm.qty : "-"}</td>
        <td class="num">${formatINR(rm.amount)}</td>
      </tr>`;
    });
    rawHTML += `<tr class="total-row"><td>Total Raw Materials (100% capacity)</td><td></td><td></td><td></td><td class="num">${formatINR(d.annual_raw_material)}</td></tr>`;
  }
  setTableHTML("#preview-raw-table tbody", rawHTML);
  
  // Table 8: Wages
  let wagesHTML = "";
  d.wages.forEach(w => {
    wagesHTML += `<tr>
      <td>${w.particulars}</td>
      <td class="num">${w.no_workers}</td>
      <td class="num">${formatINR(w.wages_pm)}</td>
      <td class="num">${formatINR(w.amount)}</td>
    </tr>`;
  });
  wagesHTML += `<tr class="total-row"><td>Total Annual Wages (100% capacity)</td><td></td><td></td><td class="num">${formatINR(d.annual_wages)}</td></tr>`;
  setTableHTML("#preview-wages-table tbody", wagesHTML);
  
  // Salary details
  let salaryHTML = "";
  d.salary.forEach(s => {
    salaryHTML += `<tr>
      <td>${s.particulars}</td>
      <td class="num">${s.no_staff}</td>
      <td class="num">${formatINR(s.salary_pm)}</td>
      <td class="num">${formatINR(s.amount)}</td>
    </tr>`;
  });
  salaryHTML += `<tr class="total-row"><td>Total Annual Salaries (100% capacity)</td><td></td><td></td><td class="num">${formatINR(d.annual_salary)}</td></tr>`;
  setTableHTML("#preview-salary-table tbody", salaryHTML);
  
  // Operating Expenses scaling
  let opexScaleHTML = `
    <tr>
      <td>Capacity Utilization %</td>
      <td class="num">${(d.exp_cap_pct[0] * 100)}%</td>
      <td class="num">${(d.exp_cap_pct[1] * 100)}%</td>
      <td class="num">${(d.exp_cap_pct[2] * 100)}%</td>
      <td class="num">${(d.exp_cap_pct[3] * 100)}%</td>
      <td class="num">${(d.exp_cap_pct[4] * 100)}%</td>
    </tr>
    <tr>
      <td>Raw Materials Cost</td>
      <td class="num">${formatINR(d.pl_raw_material[0])}</td>
      <td class="num">${formatINR(d.pl_raw_material[1])}</td>
      <td class="num">${formatINR(d.pl_raw_material[2])}</td>
      <td class="num">${formatINR(d.pl_raw_material[3])}</td>
      <td class="num">${formatINR(d.pl_raw_material[4])}</td>
    </tr>
    <tr>
      <td>Wages Cost</td>
      <td class="num">${formatINR(d.pl_wages[0])}</td>
      <td class="num">${formatINR(d.pl_wages[1])}</td>
      <td class="num">${formatINR(d.pl_wages[2])}</td>
      <td class="num">${formatINR(d.pl_wages[3])}</td>
      <td class="num">${formatINR(d.pl_wages[4])}</td>
    </tr>
    <tr>
      <td>Repairs & Maintenance</td>
      <td class="num">${formatINR(d.pl_repairs[0])}</td>
      <td class="num">${formatINR(d.pl_repairs[1])}</td>
      <td class="num">${formatINR(d.pl_repairs[2])}</td>
      <td class="num">${formatINR(d.pl_repairs[3])}</td>
      <td class="num">${formatINR(d.pl_repairs[4])}</td>
    </tr>
    <tr>
      <td>Power & Fuel</td>
      <td class="num">${formatINR(d.pl_power[0])}</td>
      <td class="num">${formatINR(d.pl_power[1])}</td>
      <td class="num">${formatINR(d.pl_power[2])}</td>
      <td class="num">${formatINR(d.pl_power[3])}</td>
      <td class="num">${formatINR(d.pl_power[4])}</td>
    </tr>
    <tr>
      <td>Other Overhead Expenses</td>
      <td class="num">${formatINR(d.pl_overhead[0])}</td>
      <td class="num">${formatINR(d.pl_overhead[1])}</td>
      <td class="num">${formatINR(d.pl_overhead[2])}</td>
      <td class="num">${formatINR(d.pl_overhead[3])}</td>
      <td class="num">${formatINR(d.pl_overhead[4])}</td>
    </tr>
    <tr>
      <td class="bold">Administrative Salaries</td>
      <td class="num">${formatINR(d.pl_salary[0])}</td>
      <td class="num">${formatINR(d.pl_salary[1])}</td>
      <td class="num">${formatINR(d.pl_salary[2])}</td>
      <td class="num">${formatINR(d.pl_salary[3])}</td>
      <td class="num">${formatINR(d.pl_salary[4])}</td>
    </tr>
    <tr>
      <td>Telephone Expenses</td>
      <td class="num">${formatINR(d.pl_telephone[0])}</td>
      <td class="num">${formatINR(d.pl_telephone[1])}</td>
      <td class="num">${formatINR(d.pl_telephone[2])}</td>
      <td class="num">${formatINR(d.pl_telephone[3])}</td>
      <td class="num">${formatINR(d.pl_telephone[4])}</td>
    </tr>
    <tr>
      <td>Stationery & Postage</td>
      <td class="num">${formatINR(d.pl_stationery[0])}</td>
      <td class="num">${formatINR(d.pl_stationery[1])}</td>
      <td class="num">${formatINR(d.pl_stationery[2])}</td>
      <td class="num">${formatINR(d.pl_stationery[3])}</td>
      <td class="num">${formatINR(d.pl_stationery[4])}</td>
    </tr>
    <tr>
      <td>Advertisement & Publicity</td>
      <td class="num">${formatINR(d.pl_advertisement[0])}</td>
      <td class="num">${formatINR(d.pl_advertisement[1])}</td>
      <td class="num">${formatINR(d.pl_advertisement[2])}</td>
      <td class="num">${formatINR(d.pl_advertisement[3])}</td>
      <td class="num">${formatINR(d.pl_advertisement[4])}</td>
    </tr>
    <tr>
      <td class="bold">Workshed Rent</td>
      <td class="num">${formatINR(d.pl_rent[0])}</td>
      <td class="num">${formatINR(d.pl_rent[1])}</td>
      <td class="num">${formatINR(d.pl_rent[2])}</td>
      <td class="num">${formatINR(d.pl_rent[3])}</td>
      <td class="num">${formatINR(d.pl_rent[4])}</td>
    </tr>
    <tr>
      <td>Other Miscellaneous Expenses</td>
      <td class="num">${formatINR(d.pl_misc[0])}</td>
      <td class="num">${formatINR(d.pl_misc[1])}</td>
      <td class="num">${formatINR(d.pl_misc[2])}</td>
      <td class="num">${formatINR(d.pl_misc[3])}</td>
      <td class="num">${formatINR(d.pl_misc[4])}</td>
    </tr>
    <tr class="total-row">
      <td>Total Expenses (Operating + Admin)</td>
      <td class="num">${formatINR(d.pl_service_cost[0] - d.total_depr[0] + d.pl_admin_cost[0])}</td>
      <td class="num">${formatINR(d.pl_service_cost[1] - d.total_depr[1] + d.pl_admin_cost[1])}</td>
      <td class="num">${formatINR(d.pl_service_cost[2] - d.total_depr[2] + d.pl_admin_cost[2])}</td>
      <td class="num">${formatINR(d.pl_service_cost[3] - d.total_depr[3] + d.pl_admin_cost[3])}</td>
      <td class="num">${formatINR(d.pl_service_cost[4] - d.total_depr[4] + d.pl_admin_cost[4])}</td>
    </tr>
  `;
  setTableHTML("#preview-opexscale-table tbody", opexScaleHTML);
  
  // Working Capital Details
  let wcEstimateHTML = `
    <tr><td>Raw Materials Cost (WC Basis: ${formatINR(d.wc_raw_material_val)})</td><td class="num">${parseFloat(state.raw_material_days) || 0} Days</td><td>Material Cost</td><td class="num">${formatINR(d.wc_raw_material)}</td></tr>
    <tr><td>Stock-in-Process (Service Cost Basis: ${formatINR(d.total_service_cost_wc)})</td><td class="num">${parseFloat(state.sip_days) || 0} Days</td><td>Production Cost</td><td class="num">${formatINR(d.wc_stock_in_process)}</td></tr>
    <tr><td>Finished Goods (Service+Admin Basis: ${formatINR(d.total_service_admin_cost_wc)})</td><td class="num">${parseFloat(state.finished_goods_days) || 0} Days</td><td>Manufacturing Cost</td><td class="num">${formatINR(d.wc_finished_goods)}</td></tr>
    <tr><td>Receivables (Service+Admin Basis: ${formatINR(d.total_service_admin_cost_wc)})</td><td class="num">${parseFloat(state.receivables_days) || 0} Days</td><td>Service Cost</td><td class="num">${formatINR(d.wc_receivables)}</td></tr>
    <tr class="total-row"><td>Total Working Capital Requirement</td><td class="num">Per Cycle</td><td></td><td class="num">${formatINR(d.total_wc_requirement)}</td></tr>
  `;
  setTableHTML("#preview-wcestimate-table tbody", wcEstimateHTML);
  
  // Projected Profit & Loss Table
  let plHTML = `
    <tr class="total-row" style="background-color:#f3f4f6;"><td>Sales Receipts / Revenue</td><td class="num">${formatINR(d.pl_sales[0])}</td><td class="num">${formatINR(d.pl_sales[1])}</td><td class="num">${formatINR(d.pl_sales[2])}</td><td class="num">${formatINR(d.pl_sales[3])}</td><td class="num">${formatINR(d.pl_sales[4])}</td></tr>
    <tr><td class="bold">A. Direct Service Costs</td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr class="indent-1"><td>Raw Materials</td><td class="num">${formatINR(d.pl_raw_material[0])}</td><td class="num">${formatINR(d.pl_raw_material[1])}</td><td class="num">${formatINR(d.pl_raw_material[2])}</td><td class="num">${formatINR(d.pl_raw_material[3])}</td><td class="num">${formatINR(d.pl_raw_material[4])}</td></tr>
    <tr class="indent-1"><td>Wages</td><td class="num">${formatINR(d.pl_wages[0])}</td><td class="num">${formatINR(d.pl_wages[1])}</td><td class="num">${formatINR(d.pl_wages[2])}</td><td class="num">${formatINR(d.pl_wages[3])}</td><td class="num">${formatINR(d.pl_wages[4])}</td></tr>
    <tr class="indent-1"><td>Repairs & Maintenance</td><td class="num">${formatINR(d.pl_repairs[0])}</td><td class="num">${formatINR(d.pl_repairs[1])}</td><td class="num">${formatINR(d.pl_repairs[2])}</td><td class="num">${formatINR(d.pl_repairs[3])}</td><td class="num">${formatINR(d.pl_repairs[4])}</td></tr>
    <tr class="indent-1"><td>Power & Fuel</td><td class="num">${formatINR(d.pl_power[0])}</td><td class="num">${formatINR(d.pl_power[1])}</td><td class="num">${formatINR(d.pl_power[2])}</td><td class="num">${formatINR(d.pl_power[3])}</td><td class="num">${formatINR(d.pl_power[4])}</td></tr>
    <tr class="indent-1"><td>Other Overhead Expenses</td><td class="num">${formatINR(d.pl_overhead[0])}</td><td class="num">${formatINR(d.pl_overhead[1])}</td><td class="num">${formatINR(d.pl_overhead[2])}</td><td class="num">${formatINR(d.pl_overhead[3])}</td><td class="num">${formatINR(d.pl_overhead[4])}</td></tr>
    <tr class="indent-1"><td>Depreciation</td><td class="num">${formatINR(d.total_depr[0])}</td><td class="num">${formatINR(d.total_depr[1])}</td><td class="num">${formatINR(d.total_depr[2])}</td><td class="num">${formatINR(d.total_depr[3])}</td><td class="num">${formatINR(d.total_depr[4])}</td></tr>
    <tr class="total-row indent-1"><td>Total Service Costs (A)</td><td class="num">${formatINR(d.pl_service_cost[0])}</td><td class="num">${formatINR(d.pl_service_cost[1])}</td><td class="num">${formatINR(d.pl_service_cost[2])}</td><td class="num">${formatINR(d.pl_service_cost[3])}</td><td class="num">${formatINR(d.pl_service_cost[4])}</td></tr>
    
    <tr><td class="bold">B. Administrative Overhead Costs</td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr class="indent-1"><td>Salaries</td><td class="num">${formatINR(d.pl_salary[0])}</td><td class="num">${formatINR(d.pl_salary[1])}</td><td class="num">${formatINR(d.pl_salary[2])}</td><td class="num">${formatINR(d.pl_salary[3])}</td><td class="num">${formatINR(d.pl_salary[4])}</td></tr>
    <tr class="indent-1"><td>Telephone Expenses</td><td class="num">${formatINR(d.pl_telephone[0])}</td><td class="num">${formatINR(d.pl_telephone[1])}</td><td class="num">${formatINR(d.pl_telephone[2])}</td><td class="num">${formatINR(d.pl_telephone[3])}</td><td class="num">${formatINR(d.pl_telephone[4])}</td></tr>
    <tr class="indent-1"><td>Stationery & Postage</td><td class="num">${formatINR(d.pl_stationery[0])}</td><td class="num">${formatINR(d.pl_stationery[1])}</td><td class="num">${formatINR(d.pl_stationery[2])}</td><td class="num">${formatINR(d.pl_stationery[3])}</td><td class="num">${formatINR(d.pl_stationery[4])}</td></tr>
    <tr class="indent-1"><td>Advertisement & Publicity</td><td class="num">${formatINR(d.pl_advertisement[0])}</td><td class="num">${formatINR(d.pl_advertisement[1])}</td><td class="num">${formatINR(d.pl_advertisement[2])}</td><td class="num">${formatINR(d.pl_advertisement[3])}</td><td class="num">${formatINR(d.pl_advertisement[4])}</td></tr>
    <tr class="indent-1"><td>Workshed Rent</td><td class="num">${formatINR(d.pl_rent[0])}</td><td class="num">${formatINR(d.pl_rent[1])}</td><td class="num">${formatINR(d.pl_rent[2])}</td><td class="num">${formatINR(d.pl_rent[3])}</td><td class="num">${formatINR(d.pl_rent[4])}</td></tr>
    <tr class="indent-1"><td>Other Miscellaneous Expenses</td><td class="num">${formatINR(d.pl_misc[0])}</td><td class="num">${formatINR(d.pl_misc[1])}</td><td class="num">${formatINR(d.pl_misc[2])}</td><td class="num">${formatINR(d.pl_misc[3])}</td><td class="num">${formatINR(d.pl_misc[4])}</td></tr>
    <tr class="total-row indent-1"><td>Total Administrative Costs (B)</td><td class="num">${formatINR(d.pl_admin_cost[0])}</td><td class="num">${formatINR(d.pl_admin_cost[1])}</td><td class="num">${formatINR(d.pl_admin_cost[2])}</td><td class="num">${formatINR(d.pl_admin_cost[3])}</td><td class="num">${formatINR(d.pl_admin_cost[4])}</td></tr>
    
    <tr><td class="bold">C. Financial Costs</td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr class="indent-1"><td>Interest on Term Loan</td><td class="num">${formatINR(d.pl_interest_tl[0])}</td><td class="num">${formatINR(d.pl_interest_tl[1])}</td><td class="num">${formatINR(d.pl_interest_tl[2])}</td><td class="num">${formatINR(d.pl_interest_tl[3])}</td><td class="num">${formatINR(d.pl_interest_tl[4])}</td></tr>
    <tr class="indent-1"><td>Interest on Working Capital Credit</td><td class="num">${formatINR(d.pl_interest_wc[0])}</td><td class="num">${formatINR(d.pl_interest_wc[1])}</td><td class="num">${formatINR(d.pl_interest_wc[2])}</td><td class="num">${formatINR(d.pl_interest_wc[3])}</td><td class="num">${formatINR(d.pl_interest_wc[4])}</td></tr>
    <tr class="total-row indent-1"><td>Total Financial Costs (C)</td><td class="num">${formatINR(d.pl_total_interest[0])}</td><td class="num">${formatINR(d.pl_total_interest[1])}</td><td class="num">${formatINR(d.pl_total_interest[2])}</td><td class="num">${formatINR(d.pl_total_interest[3])}</td><td class="num">${formatINR(d.pl_total_interest[4])}</td></tr>
    
    <tr class="total-row" style="background-color:#e5e7eb;"><td>Total Cost of Sales (A+B+C)</td><td class="num">${formatINR(d.pl_cost_of_sale[0])}</td><td class="num">${formatINR(d.pl_cost_of_sale[1])}</td><td class="num">${formatINR(d.pl_cost_of_sale[2])}</td><td class="num">${formatINR(d.pl_cost_of_sale[3])}</td><td class="num">${formatINR(d.pl_cost_of_sale[4])}</td></tr>
    <tr class="total-row" style="background-color:#d1d5db;"><td>Net Profit Before Tax</td><td class="num">${formatINR(d.pl_profit_before_tax[0])}</td><td class="num">${formatINR(d.pl_profit_before_tax[1])}</td><td class="num">${formatINR(d.pl_profit_before_tax[2])}</td><td class="num">${formatINR(d.pl_profit_before_tax[3])}</td><td class="num">${formatINR(d.pl_profit_before_tax[4])}</td></tr>
    <tr><td>Less: Tax Provision</td><td class="num">${formatINR(d.pl_tax[0])}</td><td class="num">${formatINR(d.pl_tax[1])}</td><td class="num">${formatINR(d.pl_tax[2])}</td><td class="num">${formatINR(d.pl_tax[3])}</td><td class="num">${formatINR(d.pl_tax[4])}</td></tr>
    <tr class="total-row" style="background-color:#f59e0b; color:#ffffff;"><td>Net Profit After Tax</td><td class="num">${formatINR(d.pl_net_profit[0])}</td><td class="num">${formatINR(d.pl_net_profit[1])}</td><td class="num">${formatINR(d.pl_net_profit[2])}</td><td class="num">${formatINR(d.pl_net_profit[3])}</td><td class="num">${formatINR(d.pl_net_profit[4])}</td></tr>
  `;
  setTableHTML("#preview-pl-table tbody", plHTML);
  
  // Table 9.2: DSCR
  let dscrHTML = `
    <tr><td>Net Profit After Tax (A)</td><td class="num">${formatINR(d.pl_net_profit[0])}</td><td class="num">${formatINR(d.pl_net_profit[1])}</td><td class="num">${formatINR(d.pl_net_profit[2])}</td><td class="num">${formatINR(d.pl_net_profit[3])}</td><td class="num">${formatINR(d.pl_net_profit[4])}</td></tr>
    <tr><td>Add: Depreciation (B)</td><td class="num">${formatINR(d.total_depr[0])}</td><td class="num">${formatINR(d.total_depr[1])}</td><td class="num">${formatINR(d.total_depr[2])}</td><td class="num">${formatINR(d.total_depr[3])}</td><td class="num">${formatINR(d.total_depr[4])}</td></tr>
    <tr class="total-row" style="background-color:#f3f4f6;"><td>Total Cash Accruals (A+B) = I</td><td class="num">${formatINR(d.dscr_a[0])}</td><td class="num">${formatINR(d.dscr_a[1])}</td><td class="num">${formatINR(d.dscr_a[2])}</td><td class="num">${formatINR(d.dscr_a[3])}</td><td class="num">${formatINR(d.dscr_a[4])}</td></tr>
    <tr><td class="bold">Debt Servicing Commitments</td><td></td><td></td><td></td><td></td><td></td></tr>
    <tr class="indent-1"><td>Term Loan Interest</td><td class="num">${formatINR(d.pl_interest_tl[0])}</td><td class="num">${formatINR(d.pl_interest_tl[1])}</td><td class="num">${formatINR(d.pl_interest_tl[2])}</td><td class="num">${formatINR(d.pl_interest_tl[3])}</td><td class="num">${formatINR(d.pl_interest_tl[4])}</td></tr>
    <tr class="indent-1"><td>Term Loan Installment</td><td class="num">${formatINR(d.repayment_tl[0].installment)}</td><td class="num">${formatINR(d.repayment_tl[1].installment)}</td><td class="num">${formatINR(d.repayment_tl[2].installment)}</td><td class="num">${formatINR(d.repayment_tl[3].installment)}</td><td class="num">${formatINR(d.repayment_tl[4].installment)}</td></tr>
    <tr class="indent-1"><td>Working Capital Interest</td><td class="num">${formatINR(d.pl_interest_wc[0])}</td><td class="num">${formatINR(d.pl_interest_wc[1])}</td><td class="num">${formatINR(d.pl_interest_wc[2])}</td><td class="num">${formatINR(d.pl_interest_wc[3])}</td><td class="num">${formatINR(d.pl_interest_wc[4])}</td></tr>
    <tr class="total-row" style="background-color:#f3f4f6;"><td>Total Commitment = II</td><td class="num">${formatINR(d.dscr_b[0])}</td><td class="num">${formatINR(d.dscr_b[1])}</td><td class="num">${formatINR(d.dscr_b[2])}</td><td class="num">${formatINR(d.dscr_b[3])}</td><td class="num">${formatINR(d.dscr_b[4])}</td></tr>
    <tr class="total-row" style="background-color:#3b82f6; color:#ffffff;"><td>D.S.C.R (I / II)</td><td class="num">${d.dscr[0].toFixed(2)}</td><td class="num">${d.dscr[1].toFixed(2)}</td><td class="num">${d.dscr[2].toFixed(2)}</td><td class="num">${d.dscr[3].toFixed(2)}</td><td class="num">${d.dscr[4].toFixed(2)}</td></tr>
    <tr class="total-row" style="background-color:#1e3a8a; color:#ffffff;"><td colspan="4">Average Debt Service Coverage Ratio (DSCR)</td><td colspan="2" class="text-center bold">${d.avg_dscr.toFixed(2)}</td></tr>
  `;
  setTableHTML("#preview-dscr-table tbody", dscrHTML);
  
  // Table 9.3: Balance Sheet
  let bsHTML = `
    <tr style="background-color:#f3f4f6;"><td class="bold" colspan="6">LIABILITIES</td></tr>
    <tr><td>Promoter's Capital</td><td class="num">${formatINR(d.bs_promoter_capital[0])}</td><td class="num">${formatINR(d.bs_promoter_capital[1])}</td><td class="num">${formatINR(d.bs_promoter_capital[2])}</td><td class="num">${formatINR(d.bs_promoter_capital[3])}</td><td class="num">${formatINR(d.bs_promoter_capital[4])}</td></tr>
    <tr><td>Net Profit Retained</td><td class="num">${formatINR(d.bs_profit[0])}</td><td class="num">${formatINR(d.bs_profit[1])}</td><td class="num">${formatINR(d.bs_profit[2])}</td><td class="num">${formatINR(d.bs_profit[3])}</td><td class="num">${formatINR(d.bs_profit[4])}</td></tr>
    <tr><td>Term Loan (O/s)</td><td class="num">${formatINR(d.bs_term_loan[0])}</td><td class="num">${formatINR(d.bs_term_loan[1])}</td><td class="num">${formatINR(d.bs_term_loan[2])}</td><td class="num">${formatINR(d.bs_term_loan[3])}</td><td class="num">${formatINR(d.bs_term_loan[4])}</td></tr>
    <tr><td>Working Capital Loan (O/s)</td><td class="num">${formatINR(d.bs_wc_loan[0])}</td><td class="num">${formatINR(d.bs_wc_loan[1])}</td><td class="num">${formatINR(d.bs_wc_loan[2])}</td><td class="num">${formatINR(d.bs_wc_loan[3])}</td><td class="num">${formatINR(d.bs_wc_loan[4])}</td></tr>
    <tr class="total-row" style="background-color:#e5e7eb;"><td>Total Liabilities</td><td class="num">${formatINR(d.bs_total_liabilities[0])}</td><td class="num">${formatINR(d.bs_total_liabilities[1])}</td><td class="num">${formatINR(d.bs_total_liabilities[2])}</td><td class="num">${formatINR(d.bs_total_liabilities[3])}</td><td class="num">${formatINR(d.bs_total_liabilities[4])}</td></tr>
    
    <tr style="background-color:#f3f4f6;"><td class="bold" colspan="6">ASSETS</td></tr>
    <tr><td>Gross Fixed Assets</td><td class="num">${formatINR(d.bs_gross_fixed_assets[0])}</td><td class="num">${formatINR(d.bs_gross_fixed_assets[1])}</td><td class="num">${formatINR(d.bs_gross_fixed_assets[2])}</td><td class="num">${formatINR(d.bs_gross_fixed_assets[3])}</td><td class="num">${formatINR(d.bs_gross_fixed_assets[4])}</td></tr>
    <tr><td>Less: Accumulated Depreciation</td><td class="num">${formatINR(d.bs_depreciation[0])}</td><td class="num">${formatINR(d.bs_depreciation[1])}</td><td class="num">${formatINR(d.bs_depreciation[2])}</td><td class="num">${formatINR(d.bs_depreciation[3])}</td><td class="num">${formatINR(d.bs_depreciation[4])}</td></tr>
    <tr class="total-row"><td>Net Fixed Assets</td><td class="num">${formatINR(d.bs_net_fixed_assets[0])}</td><td class="num">${formatINR(d.bs_net_fixed_assets[1])}</td><td class="num">${formatINR(d.bs_net_fixed_assets[2])}</td><td class="num">${formatINR(d.bs_net_fixed_assets[3])}</td><td class="num">${formatINR(d.bs_net_fixed_assets[4])}</td></tr>
    <tr><td>Preliminary & Pre-operative Expenses</td><td class="num">${formatINR(d.bs_preliminary_exp[0])}</td><td class="num">${formatINR(d.bs_preliminary_exp[1])}</td><td class="num">${formatINR(d.bs_preliminary_exp[2])}</td><td class="num">${formatINR(d.bs_preliminary_exp[3])}</td><td class="num">${formatINR(d.bs_preliminary_exp[4])}</td></tr>
    <tr><td>Current Assets (WC Cash Credit)</td><td class="num">${formatINR(d.bs_current_assets[0])}</td><td class="num">${formatINR(d.bs_current_assets[1])}</td><td class="num">${formatINR(d.bs_current_assets[2])}</td><td class="num">${formatINR(d.bs_current_assets[3])}</td><td class="num">${formatINR(d.bs_current_assets[4])}</td></tr>
    <tr><td>Cash & Bank Balance (Plug)</td><td class="num">${formatINR(d.bs_cash[0])}</td><td class="num">${formatINR(d.bs_cash[1])}</td><td class="num">${formatINR(d.bs_cash[2])}</td><td class="num">${formatINR(d.bs_cash[3])}</td><td class="num">${formatINR(d.bs_cash[4])}</td></tr>
    <tr class="total-row" style="background-color:#e5e7eb;"><td>Total Assets</td><td class="num">${formatINR(d.bs_total_assets[0])}</td><td class="num">${formatINR(d.bs_total_assets[1])}</td><td class="num">${formatINR(d.bs_total_assets[2])}</td><td class="num">${formatINR(d.bs_total_assets[3])}</td><td class="num">${formatINR(d.bs_total_assets[4])}</td></tr>
  `;
  setTableHTML("#preview-bs-table tbody", bsHTML);
  
  // Table 9.4: Cash Flow Statement
  let cfHTML = `
    <tr style="background-color:#f3f4f6;"><td class="bold" colspan="6">CASH INFLOWS</td></tr>
    <tr><td>Net Profit After Tax</td><td class="num">${formatINR(d.cf_net_profit[0])}</td><td class="num">${formatINR(d.cf_net_profit[1])}</td><td class="num">${formatINR(d.cf_net_profit[2])}</td><td class="num">${formatINR(d.cf_net_profit[3])}</td><td class="num">${formatINR(d.cf_net_profit[4])}</td></tr>
    <tr><td>Add: Depreciation</td><td class="num">${formatINR(d.cf_depreciation[0])}</td><td class="num">${formatINR(d.cf_depreciation[1])}</td><td class="num">${formatINR(d.cf_depreciation[2])}</td><td class="num">${formatINR(d.cf_depreciation[3])}</td><td class="num">${formatINR(d.cf_depreciation[4])}</td></tr>
    <tr><td>Term Loan Disbursement</td><td class="num">${formatINR(d.cf_term_loan[0])}</td><td class="num">${formatINR(d.cf_term_loan[1])}</td><td class="num">${formatINR(d.cf_term_loan[2])}</td><td class="num">${formatINR(d.cf_term_loan[3])}</td><td class="num">${formatINR(d.cf_term_loan[4])}</td></tr>
    <tr><td>Working Capital Loan</td><td class="num">${formatINR(d.cf_wc_loan[0])}</td><td class="num">${formatINR(d.cf_wc_loan[1])}</td><td class="num">${formatINR(d.cf_wc_loan[2])}</td><td class="num">${formatINR(d.cf_wc_loan[3])}</td><td class="num">${formatINR(d.cf_wc_loan[4])}</td></tr>
    <tr><td>Promoter's Capital Injected</td><td class="num">${formatINR(d.cf_promoter_capital[0])}</td><td class="num">${formatINR(d.cf_promoter_capital[1])}</td><td class="num">${formatINR(d.cf_promoter_capital[2])}</td><td class="num">${formatINR(d.cf_promoter_capital[3])}</td><td class="num">${formatINR(d.cf_promoter_capital[4])}</td></tr>
    <tr class="total-row" style="background-color:#e5e7eb;"><td>Total Cash Inflows (I)</td><td class="num">${formatINR(d.cf_total_inflow[0])}</td><td class="num">${formatINR(d.cf_total_inflow[1])}</td><td class="num">${formatINR(d.cf_total_inflow[2])}</td><td class="num">${formatINR(d.cf_total_inflow[3])}</td><td class="num">${formatINR(d.cf_total_inflow[4])}</td></tr>
    
    <tr style="background-color:#f3f4f6;"><td class="bold" colspan="6">CASH OUTFLOWS</td></tr>
    <tr><td>Capital Investment (Fixed Assets)</td><td class="num">${formatINR(d.cf_fixed_capital[0])}</td><td class="num">${formatINR(d.cf_fixed_capital[1])}</td><td class="num">${formatINR(d.cf_fixed_capital[2])}</td><td class="num">${formatINR(d.cf_fixed_capital[3])}</td><td class="num">${formatINR(d.cf_fixed_capital[4])}</td></tr>
    <tr><td>Repayment of Term Loan principal</td><td class="num">${formatINR(d.cf_repay_tl[0])}</td><td class="num">${formatINR(d.cf_repay_tl[1])}</td><td class="num">${formatINR(d.cf_repay_tl[2])}</td><td class="num">${formatINR(d.cf_repay_tl[3])}</td><td class="num">${formatINR(d.cf_repay_tl[4])}</td></tr>
    <tr><td>Repayment of Working Capital principal</td><td class="num">${formatINR(d.cf_repay_wc[0])}</td><td class="num">${formatINR(d.cf_repay_wc[1])}</td><td class="num">${formatINR(d.cf_repay_wc[2])}</td><td class="num">${formatINR(d.cf_repay_wc[3])}</td><td class="num">${formatINR(d.cf_repay_wc[4])}</td></tr>
    <tr><td>Current Assets (WC Margin)</td><td class="num">${formatINR(d.cf_current_assets[0])}</td><td class="num">${formatINR(d.cf_current_assets[1])}</td><td class="num">${formatINR(d.cf_current_assets[2])}</td><td class="num">${formatINR(d.cf_current_assets[3])}</td><td class="num">${formatINR(d.cf_current_assets[4])}</td></tr>
    <tr class="total-row" style="background-color:#e5e7eb;"><td>Total Cash Outflows (II)</td><td class="num">${formatINR(d.cf_total_outflow[0])}</td><td class="num">${formatINR(d.cf_total_outflow[1])}</td><td class="num">${formatINR(d.cf_total_outflow[2])}</td><td class="num">${formatINR(d.cf_total_outflow[3])}</td><td class="num">${formatINR(d.cf_total_outflow[4])}</td></tr>
    
    <tr style="background-color:#f3f4f6;"><td class="bold" colspan="6">NET CASH POSITION</td></tr>
    <tr><td>Opening Cash Balance</td><td class="num">${formatINR(d.cf_opening_cash[0])}</td><td class="num">${formatINR(d.cf_opening_cash[1])}</td><td class="num">${formatINR(d.cf_opening_cash[2])}</td><td class="num">${formatINR(d.cf_opening_cash[3])}</td><td class="num">${formatINR(d.cf_opening_cash[4])}</td></tr>
    <tr><td>Surplus / Deficit (I - II)</td><td class="num">${formatINR(d.cf_surplus[0])}</td><td class="num">${formatINR(d.cf_surplus[1])}</td><td class="num">${formatINR(d.cf_surplus[2])}</td><td class="num">${formatINR(d.cf_surplus[3])}</td><td class="num">${formatINR(d.cf_surplus[4])}</td></tr>
    <tr class="total-row" style="background-color:#10b981; color:#ffffff;"><td>Closing Cash Balance</td><td class="num">${formatINR(d.cf_closing_cash[0])}</td><td class="num">${formatINR(d.cf_closing_cash[1])}</td><td class="num">${formatINR(d.cf_closing_cash[2])}</td><td class="num">${formatINR(d.cf_closing_cash[3])}</td><td class="num">${formatINR(d.cf_closing_cash[4])}</td></tr>
  `;
  setTableHTML("#preview-cf-table tbody", cfHTML);
  
  // Table 9.5: BEP and Ratio Analysis
  let ratioHTML = `
    <tr><td>Annual Sales Revenue</td><td class="num">${formatINR(d.ratio_sales[0])}</td><td class="num">${formatINR(d.ratio_sales[1])}</td><td class="num">${formatINR(d.ratio_sales[2])}</td><td class="num">${formatINR(d.ratio_sales[3])}</td><td class="num">${formatINR(d.ratio_sales[4])}</td></tr>
    <tr><td>Fixed Costs</td><td class="num">${formatINR(d.ratio_fixed_cost[0])}</td><td class="num">${formatINR(d.ratio_fixed_cost[1])}</td><td class="num">${formatINR(d.ratio_fixed_cost[2])}</td><td class="num">${formatINR(d.ratio_fixed_cost[3])}</td><td class="num">${formatINR(d.ratio_fixed_cost[4])}</td></tr>
    <tr><td>Variable Costs</td><td class="num">${formatINR(d.ratio_variable_cost[0])}</td><td class="num">${formatINR(d.ratio_variable_cost[1])}</td><td class="num">${formatINR(d.ratio_variable_cost[2])}</td><td class="num">${formatINR(d.ratio_variable_cost[3])}</td><td class="num">${formatINR(d.ratio_variable_cost[4])}</td></tr>
    <tr class="total-row"><td>Total Cost of Sales</td><td class="num">${formatINR(d.ratio_total_cost[0])}</td><td class="num">${formatINR(d.ratio_total_cost[1])}</td><td class="num">${formatINR(d.ratio_total_cost[2])}</td><td class="num">${formatINR(d.ratio_total_cost[3])}</td><td class="num">${formatINR(d.ratio_total_cost[4])}</td></tr>
    <tr class="total-row" style="background-color:#f3f4f6;"><td>Contribution Margin (Sales-VC)</td><td class="num">${formatINR(d.ratio_contribution[0])}</td><td class="num">${formatINR(d.ratio_contribution[1])}</td><td class="num">${formatINR(d.ratio_contribution[2])}</td><td class="num">${formatINR(d.ratio_contribution[3])}</td><td class="num">${formatINR(d.ratio_contribution[4])}</td></tr>
    <tr class="total-row" style="background-color:#f59e0b; color:#ffffff;"><td>Break Even Point (B.E.P. %)</td><td class="num">${(d.ratio_bep_pct[0] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_bep_pct[1] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_bep_pct[2] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_bep_pct[3] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_bep_pct[4] * 100).toFixed(2)}%</td></tr>
    <tr class="total-row"><td>Break Even Sales (Rs.)</td><td class="num">${formatINR(d.ratio_be_sales[0])}</td><td class="num">${formatINR(d.ratio_be_sales[1])}</td><td class="num">${formatINR(d.ratio_be_sales[2])}</td><td class="num">${formatINR(d.ratio_be_sales[3])}</td><td class="num">${formatINR(d.ratio_be_sales[4])}</td></tr>
    <tr><td>Break Even Units / Services</td><td class="num">${formatINR(d.ratio_be_units[0], 0)}</td><td class="num">${formatINR(d.ratio_be_units[1], 0)}</td><td class="num">${formatINR(d.ratio_be_units[2], 0)}</td><td class="num">${formatINR(d.ratio_be_units[3], 0)}</td><td class="num">${formatINR(d.ratio_be_units[4], 0)}</td></tr>
    
    <tr style="background-color:#f3f4f6;"><td class="bold" colspan="6">KEY RATIOS</td></tr>
    <tr class="bold"><td>Current Ratio (Current Assets/Liability)</td><td class="num">${d.ratio_current_ratio[0].toFixed(2)}</td><td class="num">${d.ratio_current_ratio[1].toFixed(2)}</td><td class="num">${d.ratio_current_ratio[2].toFixed(2)}</td><td class="num">${d.ratio_current_ratio[3].toFixed(2)}</td><td class="num">${d.ratio_current_ratio[4].toFixed(2)}</td></tr>
    <tr class="bold"><td>Net Profit Ratio (Profit/Sales %)</td><td class="num">${(d.ratio_net_profit_ratio[0] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_net_profit_ratio[1] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_net_profit_ratio[2] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_net_profit_ratio[3] * 100).toFixed(2)}%</td><td class="num">${(d.ratio_net_profit_ratio[4] * 100).toFixed(2)}%</td></tr>
  `;
  setTableHTML("#preview-ratio-table tbody", ratioHTML);
}

// Print trigger function
function printReport() {
  window.print();
}

// Export data to a fully functional multi-sheet Excel file (.xlsx)
function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    alert("Excel export library is loading, please try again in a moment.");
    return;
  }
  
  const d = calculateDPR();
  const wb = XLSX.utils.book_new();
  
  // Sheet 1: Project Glance
  const glanceData = [
    ["CHIEF MINISTER EMPLOYMENT GENERATION PROGRAMME (CMEGP)"],
    ["PROJECT AT A GLANCE - TOP SHEET"],
    [],
    ["S.N.", "Key Project Parameter", "Value / Description"],
    [1, "Name of the Entrepreneur / Unit", d.name],
    [2, "Constitution (Legal Status)", "Individual"],
    [3, "Father's / Spouse Name", d.father],
    [4, "Proposed Unit Address", `${d.taluka}, Dist. ${d.district}, Maharashtra - ${d.pin}`],
    [5, "Sponsoring Agency of the project", d.agency],
    [6, "Name of Business / Proposed Activity", d.project_name],
    [7, "Proposed Products / Services List", d.sales.map(s => s.particulars).join(", ")],
    [8, "Total Estimated Cost of Project", d.total_project_cost],
    [9, "Means of Finance:", ""],
    ["", "  i. Own Contribution (Capital)", d.own_contribution],
    ["", "  ii. Bank Term Loan Finance", d.term_loan],
    ["", "  iii. Government Margin Money Subsidy", typeof d.subsidy_amount === "number" ? d.subsidy_amount : d.total_project_cost * d.subsidy_rate],
    [10, "Average Debt Service Coverage Ratio (DSCR)", parseFloat(d.avg_dscr.toFixed(2))],
    [11, "Project Pay Back Period", `${d.payback_period} Years`],
    [12, "Project Implementation Period", `${d.payback_period} Years (incl. moratorium)`],
    [13, "1st Year Break Even Point (BEP %)", parseFloat((d.ratio_bep_pct[0] * 100).toFixed(2))],
    [14, "Employment Generation Potential", d.annual_wages > 0 ? d.wages.reduce((sum, w) => sum + w.no_workers, 0) + d.salary.reduce((sum, s) => sum + s.no_staff, 0) : 2],
    [15, "Power Requirement (Per Year Units)", d.power_hp],
    [16, "Major Raw Materials Needed", d.raw_material.map(rm => rm.particulars).join(", ") || "Consumables & Accessories"],
    [17, "Estimated Annual Sales Turnover (100% cap)", d.annual_sales]
  ];
  const wsGlance = XLSX.utils.aoa_to_sheet(glanceData);
  XLSX.utils.book_append_sheet(wb, wsGlance, "Project Glance");

  // Sheet 2: Cost & Means of Finance
  const costData = [
    ["DETAILED COST OF PROJECT & MEANS OF FINANCE"],
    [],
    ["A. Workshed & Construction Details"],
    ["Particulars", "Area (Sq.ft)", "Rate/Sq.ft", "Amount (Rs.)"]
  ];
  if (d.workshed.length === 0) {
    costData.push(["Workshed / Factory Building (Rented)", "", "", "Rented"]);
  } else {
    d.workshed.forEach(w => costData.push([w.particulars, w.area, w.rate, w.amount]));
  }
  costData.push(["Total Workshed Cost", "", "", d.total_workshed]);
  costData.push([]);
  
  costData.push(["B. Machinery & Equipment Details"]);
  costData.push(["Asset Description", "Quantity", "Rate Per Unit (Rs.)", "Total Amount (Rs.)"]);
  d.machinery.forEach(m => costData.push([m.particulars, m.qty, m.rate, m.amount]));
  costData.push(["Total Machinery Cost", "", "", d.total_machinery]);
  costData.push([]);
  
  costData.push(["Summary Cost of Project"]);
  costData.push(["Element of Project Cost", "Amount (Rs.)"]);
  costData.push(["a. Workshed/Building", d.total_workshed]);
  costData.push(["b. Machinery & Equipment", d.total_machinery]);
  costData.push(["c. Furniture & Fixtures", d.furniture_cost]);
  costData.push(["d. Preliminary & Pre-operative Expenses", d.preop_cost]);
  costData.push(["e. Contingencies & Others", d.contingency_cost]);
  costData.push(["Total Capital Expenditure", d.total_capex]);
  costData.push(["f. Working Capital (Per Cycle)", d.total_wc_requirement]);
  costData.push(["Total Cost of Project", d.total_project_cost]);
  costData.push([]);
  
  costData.push(["Means of Financing"]);
  costData.push(["Funding Source", "Percentage (%)", "Amount (Rs.)"]);
  costData.push(["Own Contribution (Capital)", `${d.own_contrib_rate * 100}%`, d.own_contribution]);
  costData.push(["Bank Term Loan Finance", `${d.bank_finance_rate * 100}%`, d.term_loan]);
  costData.push(["Working Capital Cash Credit", `${d.bank_finance_rate * 100}%`, d.wc_loan]);
  costData.push(["Total Means of Financing", "100%", d.own_contribution + d.term_loan + d.wc_loan]);
  costData.push(["Margin Money (Govt. Subsidy)", `${d.subsidy_rate * 100}%`, typeof d.subsidy_amount === "number" ? d.subsidy_amount : d.total_project_cost * d.subsidy_rate]);

  const wsCost = XLSX.utils.aoa_to_sheet(costData);
  XLSX.utils.book_append_sheet(wb, wsCost, "Cost & Finance");

  // Sheet 3: P&L Statement
  const plData = [
    ["PROJECTED PROFIT & LOSS ACCOUNT (5 YEARS)"],
    [],
    ["Particulars", "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"],
    ["Capacity Utilization (%)", `${d.sales_cap_pct[0]*100}%`, `${d.sales_cap_pct[1]*100}%`, `${d.sales_cap_pct[2]*100}%`, `${d.sales_cap_pct[3]*100}%`, `${d.sales_cap_pct[4]*100}%`],
    ["Sales Revenue / Receipts", d.pl_sales[0], d.pl_sales[1], d.pl_sales[2], d.pl_sales[3], d.pl_sales[4]],
    [],
    ["A. Direct Service Costs"],
    ["Raw Materials", d.pl_raw_material[0], d.pl_raw_material[1], d.pl_raw_material[2], d.pl_raw_material[3], d.pl_raw_material[4]],
    ["Wages", d.pl_wages[0], d.pl_wages[1], d.pl_wages[2], d.pl_wages[3], d.pl_wages[4]],
    ["Repairs & Maintenance", d.pl_repairs[0], d.pl_repairs[1], d.pl_repairs[2], d.pl_repairs[3], d.pl_repairs[4]],
    ["Power & Fuel", d.pl_power[0], d.pl_power[1], d.pl_power[2], d.pl_power[3], d.pl_power[4]],
    ["Other Overhead Expenses", d.pl_overhead[0], d.pl_overhead[1], d.pl_overhead[2], d.pl_overhead[3], d.pl_overhead[4]],
    ["Depreciation", d.total_depr[0], d.total_depr[1], d.total_depr[2], d.total_depr[3], d.total_depr[4]],
    ["Total Service Costs (A)", d.pl_service_cost[0], d.pl_service_cost[1], d.pl_service_cost[2], d.pl_service_cost[3], d.pl_service_cost[4]],
    [],
    ["B. Administrative Overhead Costs"],
    ["Salaries", d.pl_salary[0], d.pl_salary[1], d.pl_salary[2], d.pl_salary[3], d.pl_salary[4]],
    ["Telephone Expenses", d.pl_telephone[0], d.pl_telephone[1], d.pl_telephone[2], d.pl_telephone[3], d.pl_telephone[4]],
    ["Stationery & Postage", d.pl_stationery[0], d.pl_stationery[1], d.pl_stationery[2], d.pl_stationery[3], d.pl_stationery[4]],
    ["Advertisement & Publicity", d.pl_advertisement[0], d.pl_advertisement[1], d.pl_advertisement[2], d.pl_advertisement[3], d.pl_advertisement[4]],
    ["Workshed Rent", d.pl_rent[0], d.pl_rent[1], d.pl_rent[2], d.pl_rent[3], d.pl_rent[4]],
    ["Other Miscellaneous Expenses", d.pl_misc[0], d.pl_misc[1], d.pl_misc[2], d.pl_misc[3], d.pl_misc[4]],
    ["Total Administrative Costs (B)", d.pl_admin_cost[0], d.pl_admin_cost[1], d.pl_admin_cost[2], d.pl_admin_cost[3], d.pl_admin_cost[4]],
    [],
    ["C. Financial Costs"],
    ["Interest on Term Loan", d.pl_interest_tl[0], d.pl_interest_tl[1], d.pl_interest_tl[2], d.pl_interest_tl[3], d.pl_interest_tl[4]],
    ["Interest on Working Capital", d.pl_interest_wc[0], d.pl_interest_wc[1], d.pl_interest_wc[2], d.pl_interest_wc[3], d.pl_interest_wc[4]],
    ["Total Financial Costs (C)", d.pl_total_interest[0], d.pl_total_interest[1], d.pl_total_interest[2], d.pl_total_interest[3], d.pl_total_interest[4]],
    [],
    ["Total Cost of Sales (A+B+C)", d.pl_cost_of_sale[0], d.pl_cost_of_sale[1], d.pl_cost_of_sale[2], d.pl_cost_of_sale[3], d.pl_cost_of_sale[4]],
    ["Net Profit Before Tax", d.pl_profit_before_tax[0], d.pl_profit_before_tax[1], d.pl_profit_before_tax[2], d.pl_profit_before_tax[3], d.pl_profit_before_tax[4]],
    ["Less: Tax Provision", d.pl_tax[0], d.pl_tax[1], d.pl_tax[2], d.pl_tax[3], d.pl_tax[4]],
    ["Net Profit After Tax", d.pl_net_profit[0], d.pl_net_profit[1], d.pl_net_profit[2], d.pl_net_profit[3], d.pl_net_profit[4]]
  ];
  const wsPL = XLSX.utils.aoa_to_sheet(plData);
  XLSX.utils.book_append_sheet(wb, wsPL, "Profit & Loss");

  // Sheet 4: Repayments & Depreciation
  const repDepData = [
    ["LOAN REPAYMENT & DEPRECIATION SCHEDULES"],
    [],
    ["Term Loan Repayment Schedule"],
    ["Year", "Opening Balance", "Principal Repayment", "Closing Balance", "Interest"],
    [1, d.repayment_tl[0].opening, d.repayment_tl[0].installment, d.repayment_tl[0].closing, d.repayment_tl[0].interest],
    [2, d.repayment_tl[1].opening, d.repayment_tl[1].installment, d.repayment_tl[1].closing, d.repayment_tl[1].interest],
    [3, d.repayment_tl[2].opening, d.repayment_tl[2].installment, d.repayment_tl[2].closing, d.repayment_tl[2].interest],
    [4, d.repayment_tl[3].opening, d.repayment_tl[3].installment, d.repayment_tl[3].closing, d.repayment_tl[3].interest],
    [5, d.repayment_tl[4].opening, d.repayment_tl[4].installment, d.repayment_tl[4].closing, d.repayment_tl[4].interest],
    [6, d.repayment_tl[5].opening, d.repayment_tl[5].installment, d.repayment_tl[5].closing, d.repayment_tl[5].interest],
    [7, d.repayment_tl[6].opening, d.repayment_tl[6].installment, d.repayment_tl[6].closing, d.repayment_tl[6].interest],
    [8, d.repayment_tl[7].opening, d.repayment_tl[7].installment, d.repayment_tl[7].closing, d.repayment_tl[7].interest],
    [],
    ["Working Capital Loan Repayment Schedule"],
    ["Year", "Opening Balance", "Principal Repayment", "Closing Balance", "Interest"],
    [1, d.repayment_wc[0].opening, d.repayment_wc[0].installment, d.repayment_wc[0].closing, d.repayment_wc[0].interest],
    [2, d.repayment_wc[1].opening, d.repayment_wc[1].installment, d.repayment_wc[1].closing, d.repayment_wc[1].interest],
    [3, d.repayment_wc[2].opening, d.repayment_wc[2].installment, d.repayment_wc[2].closing, d.repayment_wc[2].interest],
    [4, d.repayment_wc[3].opening, d.repayment_wc[3].installment, d.repayment_wc[3].closing, d.repayment_wc[3].interest],
    [5, d.repayment_wc[4].opening, d.repayment_wc[4].installment, d.repayment_wc[4].closing, d.repayment_wc[4].interest],
    [6, d.repayment_wc[5].opening, d.repayment_wc[5].installment, d.repayment_wc[5].closing, d.repayment_wc[5].interest],
    [7, d.repayment_wc[6].opening, d.repayment_wc[6].installment, d.repayment_wc[6].closing, d.repayment_wc[6].interest],
    [8, d.repayment_wc[7].opening, d.repayment_wc[7].installment, d.repayment_wc[7].closing, d.repayment_wc[7].interest],
    [],
    ["Depreciation Schedule"],
    ["Year", "Workshed Opening", "Workshed Depr", "Machinery Opening", "Machinery Depr", "Total Depr"],
    ["1st Year", d.depr_workshed[0].opening, d.depr_workshed[0].depr, d.depr_machinery[0].opening, d.depr_machinery[0].depr, d.total_depr[0]],
    ["2nd Year", d.depr_workshed[1].opening, d.depr_workshed[1].depr, d.depr_machinery[1].opening, d.depr_machinery[1].depr, d.total_depr[1]],
    ["3rd Year", d.depr_workshed[2].opening, d.depr_workshed[2].depr, d.depr_machinery[2].opening, d.depr_machinery[2].depr, d.total_depr[2]],
    ["4th Year", d.depr_workshed[3].opening, d.depr_workshed[3].depr, d.depr_machinery[3].opening, d.depr_machinery[3].depr, d.total_depr[3]],
    ["5th Year", d.depr_workshed[4].opening, d.depr_workshed[4].depr, d.depr_machinery[4].opening, d.depr_machinery[4].depr, d.total_depr[4]]
  ];
  const wsRepDep = XLSX.utils.aoa_to_sheet(repDepData);
  XLSX.utils.book_append_sheet(wb, wsRepDep, "Repayments & Depr");

  // Sheet 5: Ratios, BS, CashFlow
  const ratioBSCFData = [
    ["FINANCIAL RATIOS, BALANCE SHEET & CASH FLOW STATEMENT"],
    [],
    ["DSCR Projections"],
    ["Particulars", "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"],
    ["Net Profit After Tax (A)", d.pl_net_profit[0], d.pl_net_profit[1], d.pl_net_profit[2], d.pl_net_profit[3], d.pl_net_profit[4]],
    ["Add: Depreciation (B)", d.total_depr[0], d.total_depr[1], d.total_depr[2], d.total_depr[3], d.total_depr[4]],
    ["Total Cash Accruals (A+B) = I", d.dscr_a[0], d.dscr_a[1], d.dscr_a[2], d.dscr_a[3], d.dscr_a[4]],
    ["Total Debt Servicing Commitments = II", d.dscr_b[0], d.dscr_b[1], d.dscr_b[2], d.dscr_b[3], d.dscr_b[4]],
    ["DSCR (I / II)", parseFloat(d.dscr[0].toFixed(2)), parseFloat(d.dscr[1].toFixed(2)), parseFloat(d.dscr[2].toFixed(2)), parseFloat(d.dscr[3].toFixed(2)), parseFloat(d.dscr[4].toFixed(2))],
    ["Average DSCR", parseFloat(d.avg_dscr.toFixed(2))],
    [],
    ["Projected Balance Sheet"],
    ["Assets & Liabilities", "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"],
    ["LIABILITIES", "", "", "", "", ""],
    ["Promoter's Capital", d.bs_promoter_capital[0], d.bs_promoter_capital[1], d.bs_promoter_capital[2], d.bs_promoter_capital[3], d.bs_promoter_capital[4]],
    ["Net Profit Retained", d.bs_profit[0], d.bs_profit[1], d.bs_profit[2], d.bs_profit[3], d.bs_profit[4]],
    ["Term Loan Outstanding", d.bs_term_loan[0], d.bs_term_loan[1], d.bs_term_loan[2], d.bs_term_loan[3], d.bs_term_loan[4]],
    ["Working Capital Loan Outstanding", d.bs_wc_loan[0], d.bs_wc_loan[1], d.bs_wc_loan[2], d.bs_wc_loan[3], d.bs_wc_loan[4]],
    ["Total Liabilities", d.bs_total_liabilities[0], d.bs_total_liabilities[1], d.bs_total_liabilities[2], d.bs_total_liabilities[3], d.bs_total_liabilities[4]],
    ["ASSETS", "", "", "", "", ""],
    ["Gross Fixed Assets", d.bs_gross_fixed_assets[0], d.bs_gross_fixed_assets[1], d.bs_gross_fixed_assets[2], d.bs_gross_fixed_assets[3], d.bs_gross_fixed_assets[4]],
    ["Less: Accumulated Depreciation", d.bs_depreciation[0], d.bs_depreciation[1], d.bs_depreciation[2], d.bs_depreciation[3], d.bs_depreciation[4]],
    ["Net Fixed Assets", d.bs_net_fixed_assets[0], d.bs_net_fixed_assets[1], d.bs_net_fixed_assets[2], d.bs_net_fixed_assets[3], d.bs_net_fixed_assets[4]],
    ["Preliminary Expenses", d.bs_preliminary_exp[0], d.bs_preliminary_exp[1], d.bs_preliminary_exp[2], d.bs_preliminary_exp[3], d.bs_preliminary_exp[4]],
    ["Current Assets", d.bs_current_assets[0], d.bs_current_assets[1], d.bs_current_assets[2], d.bs_current_assets[3], d.bs_current_assets[4]],
    ["Cash & Bank Balance (Plug)", d.bs_cash[0], d.bs_cash[1], d.bs_cash[2], d.bs_cash[3], d.bs_cash[4]],
    ["Total Assets", d.bs_total_assets[0], d.bs_total_assets[1], d.bs_total_assets[2], d.bs_total_assets[3], d.bs_total_assets[4]],
    [],
    ["Projected Cash Flow Statement"],
    ["Particulars", "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"],
    ["INFLOWS", "", "", "", "", ""],
    ["Net Profit After Tax", d.cf_net_profit[0], d.cf_net_profit[1], d.cf_net_profit[2], d.cf_net_profit[3], d.cf_net_profit[4]],
    ["Depreciation", d.cf_depreciation[0], d.cf_depreciation[1], d.cf_depreciation[2], d.cf_depreciation[3], d.cf_depreciation[4]],
    ["Term Loan Disbursement", d.cf_term_loan[0], d.cf_term_loan[1], d.cf_term_loan[2], d.cf_term_loan[3], d.cf_term_loan[4]],
    ["Working Capital Loan", d.cf_wc_loan[0], d.cf_wc_loan[1], d.cf_wc_loan[2], d.cf_wc_loan[3], d.cf_wc_loan[4]],
    ["Promoter's Capital", d.cf_promoter_capital[0], d.cf_promoter_capital[1], d.cf_promoter_capital[2], d.cf_promoter_capital[3], d.cf_promoter_capital[4]],
    ["Total Inflow", d.cf_total_inflow[0], d.cf_total_inflow[1], d.cf_total_inflow[2], d.cf_total_inflow[3], d.cf_total_inflow[4]],
    ["OUTFLOWS", "", "", "", "", ""],
    ["Fixed Capital Expenditure", d.cf_fixed_capital[0], d.cf_fixed_capital[1], d.cf_fixed_capital[2], d.cf_fixed_capital[3], d.cf_fixed_capital[4]],
    ["Repayment of Term Loan", d.cf_repay_tl[0], d.cf_repay_tl[1], d.cf_repay_tl[2], d.cf_repay_tl[3], d.cf_repay_tl[4]],
    ["Repayment of Working Capital", d.cf_repay_wc[0], d.cf_repay_wc[1], d.cf_repay_wc[2], d.cf_repay_wc[3], d.cf_repay_wc[4]],
    ["Working Capital Assets", d.cf_current_assets[0], d.cf_current_assets[1], d.cf_current_assets[2], d.cf_current_assets[3], d.cf_current_assets[4]],
    ["Total Outflow", d.cf_total_outflow[0], d.cf_total_outflow[1], d.cf_total_outflow[2], d.cf_total_outflow[3], d.cf_total_outflow[4]],
    ["Surplus / Deficit", d.cf_surplus[0], d.cf_surplus[1], d.cf_surplus[2], d.cf_surplus[3], d.cf_surplus[4]],
    ["Opening Cash Balance", d.cf_opening_cash[0], d.cf_opening_cash[1], d.cf_opening_cash[2], d.cf_opening_cash[3], d.cf_opening_cash[4]],
    ["Closing Cash Balance", d.cf_closing_cash[0], d.cf_closing_cash[1], d.cf_closing_cash[2], d.cf_closing_cash[3], d.cf_closing_cash[4]]
  ];
  const wsRatioBSCF = XLSX.utils.aoa_to_sheet(ratioBSCFData);
  XLSX.utils.book_append_sheet(wb, wsRatioBSCF, "Ratios & Financials");

  const fileName = (d.project_name || "CMEGP_Project").replace(/\s+/g, "_") + "_Report.xlsx";
  XLSX.writeFile(wb, fileName);
}

// Export data to a formatted Word document (.doc)
function exportToWord() {
  const preview = document.querySelector('.preview-container');
  if (!preview) {
    alert("Preview content not found.");
    return;
  }
  
  // Clone the preview container to modify elements for Word formatting without affecting the live UI
  const cloned = preview.cloneNode(true);
  
  // 1. Convert Cover Page Footer to a table layout (since Word doesn't support Flexbox)
  const coverFooter = cloned.querySelector('.cover-footer');
  if (coverFooter) {
    const leftContent = coverFooter.querySelector('.cover-footer-left')?.innerHTML || '';
    const rightContent = coverFooter.querySelector('.cover-footer-right')?.innerHTML || '';
    coverFooter.innerHTML = `
      <table class="cover-footer-table" style="width: 100%; border-collapse: collapse; border: none; border-top: 1px solid #d1d5db; margin-top: 60pt; padding-top: 15pt;">
        <tr>
          <td style="border: none; padding: 10pt 0 0 0; vertical-align: top; width: 50%; text-align: left;">
            ${leftContent}
          </td>
          <td style="border: none; padding: 10pt 0 0 0; vertical-align: top; width: 50%; text-align: left;">
            ${rightContent}
          </td>
        </tr>
      </table>
    `;
  }
  
  // 2. Convert all Signature Blocks to table layout
  const sigBlocks = cloned.querySelectorAll('.signature-block');
  sigBlocks.forEach(sigBlock => {
    const leftDiv = sigBlock.querySelector('div:first-child');
    const rightDiv = sigBlock.querySelector('.signature-box');
    if (leftDiv && rightDiv) {
      const leftContent = leftDiv.innerHTML;
      const rightContent = rightDiv.innerHTML;
      sigBlock.innerHTML = `
        <table class="sig-table" style="width: 100%; border-collapse: collapse; border: none; margin-top: 40pt; margin-bottom: 15pt;">
          <tr>
            <td style="border: none; padding: 0; vertical-align: bottom; width: 55%; text-align: left;">
              ${leftContent}
            </td>
            <td style="border: none; padding: 0; vertical-align: bottom; width: 45%; text-align: right;">
              <div style="border-top: 1px dashed #4b5563; padding-top: 8pt; font-weight: bold; display: inline-block; width: 200px; text-align: center;">
                ${rightContent}
              </div>
            </td>
          </tr>
        </table>
      `;
    }
  });

  // Get the HTML representation of all pages
  const pages = cloned.querySelectorAll('.paper-page');
  let bodyContent = '';
  
  pages.forEach((page, index) => {
    // Add page break before every page except the first
    if (index > 0) {
      bodyContent += `<br style="page-break-before: always; clear: both;" />`;
    }
    bodyContent += `<div class="paper-page-word">${page.innerHTML}</div>`;
  });

  // Word XML / HTML headers and styling
  const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
                        xmlns:w='urn:schemas-microsoft-com:office:word' 
                        xmlns='http://www.w3.org/TR/REC-html40'>
  <head>
    <meta charset='utf-8'>
    <!--[if gte mso 9]>
    <xml>
      <w:WordDocument>
        <w:View>Print</w:View>
        <w:Zoom>100</w:Zoom>
        <w:DoNotOptimizeForBrowser/>
      </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
      @page {
        size: A4;
        margin: 2cm 2cm 2cm 2cm;
      }
      body {
        font-family: 'Calibri', 'Arial', sans-serif;
        font-size: 11pt;
        line-height: 1.4;
        color: #1f2937;
      }
      .paper-page-word {
        margin-bottom: 20pt;
      }
      
      /* Cover Page Styles */
      .cover-page {
        border: 4px double #374151;
        padding: 30pt;
        text-align: center;
      }
      .cover-header {
        margin-top: 20pt;
      }
      .cover-scheme-title {
        font-size: 15pt;
        font-weight: bold;
        text-transform: uppercase;
        color: #1e3a8a;
        border-bottom: 2px solid #1e3a8a;
        padding-bottom: 10pt;
        margin-bottom: 10pt;
      }
      .cover-tagline {
        font-size: 9pt;
        font-weight: bold;
        color: #6b7280;
        text-transform: uppercase;
      }
      .cover-title-box {
        margin-top: 100pt;
        margin-bottom: 120pt;
      }
      .cover-pre-title {
        font-size: 14pt;
        text-transform: uppercase;
        color: #4b5563;
      }
      .cover-title {
        font-size: 24pt;
        font-weight: bold;
        color: #1e3a8a;
        margin-top: 15pt;
        text-transform: uppercase;
      }
      .cover-footer-left h4, .cover-footer-right h4 {
        font-size: 10pt;
        color: #4b5563;
        margin-bottom: 6pt;
        text-transform: uppercase;
        font-weight: bold;
      }
      .cover-footer-left p, .cover-footer-right p {
        font-size: 11pt;
        font-weight: bold;
        color: #111827;
        margin: 0 0 4pt 0;
      }

      /* Report Typography */
      h2.report-title {
        font-size: 16pt;
        font-weight: bold;
        color: #111827;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 18pt;
        border-bottom: 2px solid #111827;
        padding-bottom: 6pt;
        margin-top: 0pt;
      }
      h3.report-subtitle {
        font-size: 12pt;
        font-weight: bold;
        color: #1e3a8a;
        text-transform: uppercase;
        margin-top: 20pt;
        margin-bottom: 10pt;
        border-bottom: 1px solid #d1d5db;
        padding-bottom: 4pt;
      }
      p.report-paragraph {
        font-size: 11pt;
        line-height: 1.4;
        color: #374151;
        text-align: justify;
        margin-bottom: 12pt;
      }

      /* Table Styles */
      table.report-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 15pt;
        font-size: 9.5pt;
      }
      table.report-table th, table.report-table td {
        border: 1px solid #9ca3af;
        padding: 5pt 7pt;
        text-align: left;
      }
      table.report-table th {
        background-color: #f3f4f6;
        font-weight: bold;
        color: #111827;
        text-transform: uppercase;
      }
      table.report-table tr.total-row {
        font-weight: bold;
        background-color: #f9fafb;
      }
      table.report-table td.num {
        text-align: right;
      }
      .text-center { text-align: center; }
      .text-right { text-align: right; }
      .bold { font-weight: bold; }
      .indent-1 { padding-left: 15pt; }
      .indent-2 { padding-left: 30pt; }
    </style>
  </head>
  <body>`;
  
  const footer = `</body></html>`;
  
  const finalContent = header + bodyContent + footer;
  
  // Use BOM character \ufeff to force UTF-8 encoding so Indian Rupee symbols (Rs. or ₹) render correctly in MS Word
  const blob = new Blob(['\ufeff', finalContent], {
    type: 'application/msword;charset=utf-8'
  });
  
  const d = calculateDPR();
  const fileName = (d.project_name || "CMEGP_Project").replace(/\s+/g, "_") + "_Report.doc";
  
  // Trigger browser download
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

// Window load init
window.addEventListener("DOMContentLoaded", init);
