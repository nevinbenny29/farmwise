const agroKnowledgeBase = {
  basmati: {
    id: "basmati", idealTempMin: 25, idealTempMax: 35, idealRainMin: 15, sowMonths: [6, 7],
    name: "Basmati Rice (Pusa 1121)",
    category: "Cereal",
    duration: "125 - 135 Days",
    sowingWindow: "July 01 - July 25",
    sellingWindow: "Late Nov (Peak Mandi Premium)",
    bestSeedBuyTime: "Aug 15 - Aug 30",
    bestCultivateTime: "Early July (Puddling & Transplanting)",
    fertilizer: "NPK 120:60:40 kg/ha + 25 kg Zinc Sulphate",
    chartLabels: ['Jun', 'Jul', 'Aug (Current)', 'Sep (Forecast)', 'Oct (Harvest)', 'Nov (Peak Mandi)'],
    mandiSellPrices: [3400, 3550, 3850, 3950, 4100, 4380],
    seedBuyPrices: [950, 920, 850, 890, 930, 960],
    bestSeedShop: {
      name: "Kisan Vikas Beej Kendra",
      location: "GT Road, Amritsar (4.2 km away)", lat: 31.618, lng: 74.8935,
      price: "₹850 / 10kg",
      savings: "₹120 lower than district avg",
      rating: "4.9 ★"
    },
    bestSellMandi: {
      name: "Bhagtanwala APMC Mandi",
      location: "Amritsar South (8.5 km away)", lat: 31.58, lng: 74.83,
      rate: "₹3,850 / Quintal",
      mspNote: "+₹190 above Central MSP",
      badge: "Highest Bid Hub"
    },
    seedVendors: [
      { name: "Kisan Vikas Beej Kendra", loc: "GT Road (4.2 km)", rate: "₹850", stock: "Certified In-Stock", variety: "Pusa 1121 Breeder", highlight: true },
      { name: "Punjab State Agro Traders", loc: "Majitha Mandi (14 km)", lat: 31.7649, lng: 74.9503, rate: "₹910", stock: "In-Stock", variety: "Pusa 1718 / 1121", highlight: false },
      { name: "IFFCO Kisan e-Bazar", loc: "Rayya Center (24 km)", lat: 31.7728, lng: 75.0431, rate: "₹890", stock: "Limited 15 Bags", variety: "Pusa 1121 Foundation", highlight: false }
    ],
    mandis: [
      { name: "Bhagtanwala APMC Mandi", lat: 31.58, lng: 74.83, dist: "8.5 km", rate: "₹3,850", demand: "Very High Demand", highlight: true },
      { name: "Tarn Taran Main Grain APMC", lat: 31.452, lng: 74.925, dist: "22.0 km", rate: "₹3,810", demand: "High Demand", highlight: false },
      { name: "Jandiala Guru Sub-Mandi", lat: 31.5959, lng: 75.0292, dist: "14.0 km", rate: "₹3,780", demand: "Moderate", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Seed Inoculation & Nursery", desc: "Treat seeds with Trichoderma (5g/kg) and soak 24h. Prepare raised beds with fine tilth.", timing: "June 05 - June 20" },
      { step: 2, title: "Puddling & Transplanting", desc: "Puddle land 2 times. Transplant 25-day seedlings at 20x15 cm spacing (2 seedlings/hill).", timing: "July 01 - July 20" },
      { step: 3, title: "Nutrient & Water Dosing", desc: "Apply 1/3 N + Full P & K basal. Apply Zinc Sulphate at 25 DAT. Keep 2-3 cm standing water.", timing: "Day 20 & 45 DAT" },
      { step: 4, title: "Harvesting & Mandi Dispatch", desc: "Harvest when 85% panicles turn golden yellow. Sun-dry to 12-14% moisture before Mandi.", timing: "Nov 10 - Nov 25" }
    ]
  },
  moong: {
    id: "moong", idealTempMin: 25, idealTempMax: 35, idealRainMin: 5, sowMonths: [8, 9],
    name: "Green Gram (Moong SML-668)",
    category: "Pulse",
    duration: "65 - 75 Days",
    sowingWindow: "Late Aug - Early Sep",
    sellingWindow: "Late Oct (Diwali Surge)",
    bestSeedBuyTime: "Aug 10 - Aug 25",
    bestCultivateTime: "Late August (Vattar condition)",
    fertilizer: "DAP 100 kg/ha + Rhizobium Seed Culture",
    chartLabels: ['Jun', 'Jul', 'Aug (Current)', 'Sep', 'Oct (Surge)', 'Nov'],
    mandiSellPrices: [6800, 7100, 7550, 7800, 8250, 7900],
    seedBuyPrices: [1400, 1350, 1250, 1300, 1380, 1420],
    bestSeedShop: {
      name: "Guru Nanak Seed Depot",
      location: "Rayya Bypass (11 km away)",
      price: "₹1,250 / 10kg",
      savings: "Govt Certified SML 668",
      rating: "4.9 ★"
    },
    bestSellMandi: {
      name: "Tarn Taran APMC Mandi",
      location: "Tarn Taran (21 km away)",
      rate: "₹7,550 / Quintal",
      mspNote: "+₹350 above State Average",
      badge: "High Pulse Demand"
    },
    seedVendors: [
      { name: "Guru Nanak Seed Depot", loc: "Rayya Bypass (11 km)", lat: 31.7728, lng: 75.0431, rate: "₹1,250", stock: "Certified In-Stock", variety: "SML-668 / MH-421", highlight: true },
      { name: "National Seeds Corp Agency", loc: "Amritsar (5 km)", lat: 31.634, lng: 74.8723, rate: "₹1,320", stock: "In-Stock", variety: "PAU Moong 8", highlight: false }
    ],
    mandis: [
      { name: "Tarn Taran APMC", lat: 31.452, lng: 74.925, dist: "21.0 km", rate: "₹7,550", demand: "Very High", highlight: true },
      { name: "Bhagtanwala APMC", lat: 31.58, lng: 74.83, dist: "8.5 km", rate: "₹7,420", demand: "High", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Rhizobium Bio-Treatment", desc: "Coat seeds with Rhizobium culture slurry to boost nitrogen fixing root nodules.", timing: "Mid August" },
      { step: 2, title: "Line Sowing with Pora", desc: "Drill seeds at 30 cm row spacing and 4 cm depth with sufficient soil moisture.", timing: "Late August" },
      { step: 3, title: "Irrigation & Weed Control", desc: "First watering at 20-25 days. Hand weeding or herbicide spray within 20 days.", timing: "Sep 15 - 22" },
      { step: 4, title: "Pod Picking & Sale", desc: "Pick mature pods or combine harvest when 85% pods turn brownish black.", timing: "Late October" }
    ]
  },
  cauliflower: {
    id: "cauliflower", idealTempMin: 15, idealTempMax: 25, idealRainMin: 0, sowMonths: [8, 9],
    name: "Cauliflower (Early Rabi Pusa Deepali)",
    category: "Horticulture",
    duration: "60 - 80 Days",
    sowingWindow: "Aug 15 - Sep 15",
    sellingWindow: "Nov - Dec (Winter High)",
    bestSeedBuyTime: "Late July - Early Aug",
    bestCultivateTime: "Mid August (Nursery Sowing)",
    fertilizer: "NPK 150:80:80 + 15 kg Borax / ha",
    chartLabels: ['Jul', 'Aug (Current)', 'Sep', 'Oct', 'Nov (Peak)', 'Dec'],
    mandiSellPrices: [1800, 2200, 2700, 3200, 3650, 2900],
    seedBuyPrices: [1800, 1650, 1750, 1900, 2050, 2100],
    bestSeedShop: {
      name: "Syal Vegetable Seeds",
      location: "Hall Gate, Amritsar (3 km away)", lat: 31.6259, lng: 74.863,
      price: "₹1,650 / 100g",
      savings: "Hybrid High-Curd Germination",
      rating: "4.8 ★"
    },
    bestSellMandi: {
      name: "Amritsar Vallah Sabzi Mandi",
      location: "Vallah Bypass (6.5 km away)", lat: 31.66, lng: 74.92,
      rate: "₹3,650 / Quintal",
      mspNote: "Wholesale High Volume",
      badge: "Peak Veg Demand"
    },
    seedVendors: [
      { name: "Syal Vegetable Seeds", loc: "Hall Gate (3 km)", rate: "₹1,650/100g", stock: "In-Stock", variety: "Pusa Deepali F1", highlight: true },
      { name: "Green Gold Agri Agency", loc: "Batala Road (7 km)", lat: 31.64, lng: 74.9, rate: "₹1,720/100g", stock: "In-Stock", variety: "Early Snowball", highlight: false }
    ],
    mandis: [
      { name: "Vallah Sabzi Mandi", lat: 31.66, lng: 74.92, dist: "6.5 km", rate: "₹3,650", demand: "Extremely High", highlight: true },
      { name: "Jalandhar Maqsudan Mandi", lat: 31.326, lng: 75.5762, dist: "75 km", rate: "₹3,800", demand: "High", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Raised Nursery Beds", desc: "Prepare 15cm raised beds with vermicompost. Protect seedlings under 50% shade net.", timing: "Early August" },
      { step: 2, title: "Ridge Transplanting", desc: "Transplant 25-day seedlings on ridges (45x45 cm spacing) during evening hours.", timing: "Late Aug - Sep" },
      { step: 3, title: "Boron & Nitrogen Spray", desc: "Foliar spray of Borax (0.2%) to prevent hollow stems and curd browning.", timing: "Day 25 & 40" },
      { step: 4, title: "Blanching & Mandi Auction", desc: "Wrap inner leaves over curd 4 days before harvest to keep snow-white color.", timing: "Nov - Dec" }
    ]
  },
  wheat: {
    id: "wheat", idealTempMin: 10, idealTempMax: 22, idealRainMin: 0, sowMonths: [10, 11],
    name: "Wheat (HD-2967 / PBW-826)",
    category: "Cereal",
    duration: "140 - 150 Days",
    sowingWindow: "Nov 01 - Nov 20",
    sellingWindow: "April - May (Govt MSP Window)",
    bestSeedBuyTime: "Oct 15 - Oct 30",
    bestCultivateTime: "Early November (Zero Tillage)",
    fertilizer: "NPK 120:60:40 + 20 kg Zinc Sulphate",
    chartLabels: ['Oct (Pre)', 'Nov (Sow)', 'Dec', 'Jan', 'Feb', 'Mar (Harvest)'],
    mandiSellPrices: [2250, 2275, 2300, 2350, 2450, 2520],
    seedBuyPrices: [720, 680, 750, 780, 800, 810],
    bestSeedShop: {
      name: "PAU Certified Seed Store",
      location: "Kachehri Road, Amritsar (5 km away)", lat: 31.628, lng: 74.86,
      price: "₹680 / 10kg",
      savings: "98% High Germination Certified",
      rating: "5.0 ★"
    },
    bestSellMandi: {
      name: "Majitha Grain Market",
      location: "Majitha (16 km away)", lat: 31.7649, lng: 74.9503,
      rate: "₹2,350 / Quintal",
      mspNote: "Direct FCI MSP Center",
      badge: "Govt MSP Active"
    },
    seedVendors: [
      { name: "PAU Certified Seed Store", loc: "Kachehri Road (5 km)", rate: "₹680", stock: "In-Stock", variety: "HD-2967 Certified", highlight: true },
      { name: "IFFCO Kisan Sewa Kendra", loc: "Verka (6 km)", lat: 31.68, lng: 74.87, rate: "₹710", stock: "In-Stock", variety: "PBW-826", highlight: false }
    ],
    mandis: [
      { name: "Majitha Grain Market", lat: 31.7649, lng: 74.9503, dist: "16.0 km", rate: "₹2,350", demand: "High (MSP)", highlight: true },
      { name: "Bhagtanwala APMC", lat: 31.58, lng: 74.83, dist: "8.5 km", rate: "₹2,325", demand: "High (MSP)", highlight: false }
    ],
    tutorials: [
      { step: 1, title: "Residue Management & Sowing", desc: "Use Super Seeder or Happy Seeder directly into paddy stubble without burning.", timing: "Nov 01 - Nov 15" },
      { step: 2, title: "CRI Stage 1st Irrigation", desc: "Apply first watering exactly 21 days after sowing (Crown Root Initiation stage).", timing: "Day 21" },
      { step: 3, title: "Urea Top Dressing", desc: "Broadcast remaining Nitrogen before second irrigation at tillering stage.", timing: "Day 45 - 50" },
      { step: 4, title: "Combine Harvest & Mandi", desc: "Harvest once grain moisture drops below 12%. Direct dispatch to procurement center.", timing: "April" }
    ]
  },
  mustard: {
    id: "mustard", idealTempMin: 15, idealTempMax: 25, idealRainMin: 0, sowMonths: [9, 10],
    name: "Mustard (Pusa Mustard 25 / Giriraj)",
    category: "Oilseed",
    duration: "115 - 125 Days",
    sowingWindow: "Oct 01 - Oct 25",
    sellingWindow: "Feb - March (Oil Mill Peak)",
    bestSeedBuyTime: "Sep 15 - Sep 30",
    bestCultivateTime: "Early October",
    fertilizer: "NPK 80:40:40 + 20 kg Elemental Sulphur",
    chartLabels: ['Sep', 'Oct (Sow)', 'Nov', 'Dec', 'Jan', 'Feb (Peak)'],
    mandiSellPrices: [5100, 5250, 5400, 5600, 5950, 5800],
    seedBuyPrices: [850, 780, 820, 860, 900, 910],
    bestSeedShop: {
      name: "Punjab Agro Seeds Store",
      location: "Rayya Bypass (22 km)", lat: 31.7728, lng: 75.0431,
      price: "₹780 / 5kg",
      savings: "High 42% Oil Content Seed",
      rating: "4.8 ★"
    },
    bestSellMandi: {
      name: "Jandiala Guru Oilseed Mandi",
      location: "Jandiala (14 km away)", lat: 31.5959, lng: 75.0292,
      rate: "₹5,600 / Quintal",
      mspNote: "+₹310 above MSP",
      badge: "High Mill Demand"
    },
    seedVendors: [
      { name: "Punjab Agro Seeds Store", loc: "Rayya (22 km)", rate: "₹780/5kg", stock: "In-Stock", variety: "Giriraj (DRMRIJ-31)", highlight: true }
    ],
    mandis: [
      { name: "Jandiala Guru APMC", lat: 31.5959, lng: 75.0292, dist: "14 km", rate: "₹5,600", demand: "Very High", highlight: true }
    ],
    tutorials: [
      { step: 1, title: "Field Prep & Sulphur", desc: "Fine seedbed preparation. Incorporate 20kg/ha Elemental Sulphur to boost oil percentage.", timing: "Late September" },
      { step: 2, title: "Sowing & Thinning", desc: "Drill at 45x15 cm spacing. Thin plants at 15-20 days to ensure robust branching.", timing: "Oct 01 - Oct 15" },
      { step: 3, title: "Aphid Monitoring", desc: "Watch for mustard aphid during flowering. Spray recommended neem oil or bio-agent.", timing: "Dec - Jan" },
      { step: 4, title: "Harvesting at Siliqua Maturity", desc: "Harvest when 75% pods turn golden brown. Thresh and clean.", timing: "Late February" }
    ]
  }
};

let chartInstance = null;

function renderPriceChart(cropKey) {
  const crop = agroKnowledgeBase[cropKey] || agroKnowledgeBase.basmati;
  const ctx = document.getElementById('interactivePriceChart').getContext('2d');

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: crop.chartLabels,
      datasets: [
        {
          label: 'Mandi Selling Rate (₹/Quintal)',
          data: crop.mandiSellPrices,
          borderColor: '#16a34a',
          backgroundColor: 'rgba(22, 163, 74, 0.15)',
          fill: true,
          tension: 0.35,
          borderWidth: 3,
          pointRadius: 5,
          pointBackgroundColor: '#16a34a'
        },
        {
          label: 'Seed Cost Index (₹)',
          data: crop.seedBuyPrices,
          borderColor: '#f59e0b',
          borderDash: [6, 6],
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 4,
          pointBackgroundColor: '#f59e0b'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 14, font: { size: 12, weight: 'bold' } } },
        tooltip: {
          padding: 12,
          callbacks: { label: (ctx) => `${ctx.dataset.label}: ₹${ctx.parsed.y.toLocaleString('en-IN')}` }
        }
      },
      scales: {
        y: { grid: { color: '#e2e8f0' }, ticks: { callback: (v) => '₹' + v, font: { weight: 'bold' } } },
        x: { grid: { display: false }, ticks: { font: { weight: 'bold' } } }
      }
    }
  });

  document.getElementById('chart-optimal-indicator').innerHTML = `
    <span class="bg-brand-100 text-brand-800 text-xs font-black px-3 py-1.5 rounded-xl border border-brand-200">
      <i class="fa-solid fa-fire text-amber-500 mr-1"></i> Best Selling Peak: ${crop.sellingWindow}
    </span>
  `;
}

function syncSelectedCrop(cropKey) {
  const crop = agroKnowledgeBase[cropKey];
  if (!crop) return;

  renderPriceChart(cropKey);

  document.getElementById('market-spotlight-cards').innerHTML = `
    <div class="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-5 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-black uppercase tracking-wider text-brand-700 bg-brand-200/60 px-2.5 py-0.5 rounded-lg">Top Recommended Seed Vendor</span>
        <span class="text-xs font-bold text-amber-600">${crop.bestSeedShop.rating}</span>
      </div>
      <h4 class="font-black text-slate-900 text-lg mt-2">${crop.bestSeedShop.name}</h4>
      <p class="text-xs text-slate-500">${crop.bestSeedShop.location}</p>
      <div class="mt-4 p-3 bg-white rounded-xl border border-brand-100 flex justify-between items-center text-xs">
        <div>Price: <strong class="text-slate-800 text-sm">${crop.bestSeedShop.price}</strong></div>
        <span class="text-emerald-700 font-extrabold">${crop.bestSeedShop.savings}</span>
      </div>
      <div class="mt-3 text-xs text-brand-800 font-semibold flex items-center justify-between">
        <span>Optimal Seed Buying: <strong>${crop.bestSeedBuyTime}</strong></span>
      </div>
    </div>

    <div class="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl p-5 shadow-sm">
      <div class="flex items-center justify-between">
        <span class="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-lg">${crop.bestSellMandi.badge}</span>
        <span class="text-xs font-bold text-emerald-600"><i class="fa-solid fa-arrow-trend-up"></i> Live Surge</span>
      </div>
      <h4 class="font-black text-slate-900 text-lg mt-2">${crop.bestSellMandi.name}</h4>
      <p class="text-xs text-slate-500">${crop.bestSellMandi.location}</p>
      <div class="mt-4 p-3 bg-white rounded-xl border border-amber-100 flex justify-between items-center text-xs">
        <div>Current Mandi Rate: <strong class="text-amber-800 text-sm">${crop.bestSellMandi.rate}</strong></div>
        <span class="text-amber-900 font-extrabold">${crop.bestSellMandi.mspNote}</span>
      </div>
      <div class="mt-3 text-xs text-amber-900 font-semibold flex items-center justify-between">
        <span>Ideal Cultivation Sowing: <strong>${crop.bestCultivateTime}</strong></span>
      </div>
    </div>
  `;

  document.getElementById('seed-table-rows').innerHTML = crop.seedVendors.map(v => `
    <tr class="${v.highlight ? 'bg-brand-50/60 font-semibold' : ''}">
      <td class="p-3 font-bold text-slate-900">${v.name}</td>
      <td class="p-3">${v.loc}</td>
      <td class="p-3 font-black text-brand-700">${v.rate}</td>
      <td class="p-3"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-bold">${v.stock}</span></td>
      <td class="p-3 flex items-center gap-3">
        <button onclick="openMapModal(${v.lat ?? 'null'}, ${v.lng ?? 'null'}, ${JSON.stringify(v.name)})" class="text-slate-500 hover:text-slate-800 font-bold"><i class="fa-solid fa-location-dot"></i> Map</button>
      </td>
    </tr>
  `).join('');

  document.getElementById('mandi-table-rows').innerHTML = crop.mandis.map(m => `
    <tr class="${m.highlight ? 'bg-amber-50/60 font-semibold' : ''}">
      <td class="p-3 font-bold text-slate-900">${m.name}</td>
      <td class="p-3">${m.dist}</td>
      <td class="p-3 font-black text-amber-800 text-sm">${m.rate}</td>
      <td class="p-3"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[11px] font-bold">${m.demand}</span></td>
      <td class="p-3"><button onclick="openMapModal(${m.lat ?? 'null'}, ${m.lng ?? 'null'}, ${JSON.stringify(m.name)})" class="text-brand-600 hover:text-brand-800 font-bold"><i class="fa-solid fa-location-arrow"></i> Map</button></td>
    </tr>
  `).join('');

  document.getElementById('blueprint-title').innerText = `Full Cultivation Blueprint: ${crop.name}`;
  document.getElementById('blueprint-duration').innerText = `${crop.duration} • ${crop.category}`;
  document.getElementById('blueprint-steps-container').innerHTML = crop.tutorials.map(tut => `
    <div class="border border-slate-200 rounded-2xl p-5 bg-slate-50/60 relative hover:bg-white hover:shadow-lg transition">
      <div class="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-black text-sm mb-3">
        ${tut.step}
      </div>
      <h4 class="font-black text-slate-900 text-base mb-1">${tut.title}</h4>
      <p class="text-xs text-slate-600 leading-relaxed">${tut.desc}</p>
      <div class="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-extrabold text-brand-700">
        <i class="fa-regular fa-clock mr-1"></i> Phase: ${tut.timing}
      </div>
    </div>
  `).join('');

  const defaultRate = parseInt(crop.bestSellMandi.rate.replace(/[^0-9]/g, '')) || 3850;
  document.getElementById('slider-rate').value = defaultRate;
  document.getElementById('slider-rate-val').innerText = `₹${defaultRate.toLocaleString('en-IN')}`;
  runProfitSimulator();
}

let cropWeatherScores = {};

function renderCropGrid(filterCategory = 'all') {
  const container = document.getElementById('expanded-crop-grid');
  const cropKeys = Object.keys(agroKnowledgeBase);

  let filtered = cropKeys.filter(k => {
    if (filterCategory === 'all') return true;
    return agroKnowledgeBase[k].category === filterCategory;
  });

  const hasScores = Object.keys(cropWeatherScores).length > 0;
  if (hasScores) {
    filtered = filtered.slice().sort((a, b) => (cropWeatherScores[b] || 0) - (cropWeatherScores[a] || 0));
  }

  container.innerHTML = filtered.map(key => {
    const crop = agroKnowledgeBase[key];
    const score = cropWeatherScores[key];
    const isRecommended = hasScores && score >= 3;

    return `
      <div class="bg-white rounded-3xl border ${isRecommended ? 'border-brand-400 ring-2 ring-brand-100' : 'border-slate-200'} p-6 shadow-sm hover:shadow-xl transition flex flex-col justify-between group relative">
        ${isRecommended ? `
          <div class="absolute -top-3 left-5 bg-brand-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
            <i class="fa-solid fa-cloud-sun-rain"></i> Best Fit For Current Weather
          </div>` : ''}
        <div>
          <div class="flex justify-between items-start mb-3">
            <span class="bg-brand-50 text-brand-800 text-xs font-extrabold px-3 py-1 rounded-full border border-brand-200">${crop.category}</span>
            <span class="text-xs font-bold text-emerald-600"><i class="fa-solid fa-clock"></i> ${crop.duration}</span>
          </div>
          <h3 class="text-xl font-black text-slate-900 group-hover:text-brand-600 transition">${crop.name}</h3>

          <div class="mt-5 space-y-2.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div class="flex justify-between"><span>Sowing Window:</span> <strong class="text-slate-800">${crop.sowingWindow}</strong></div>
            <div class="flex justify-between"><span>Harvest & Peak Price:</span> <strong class="text-slate-800">${crop.sellingWindow}</strong></div>
            <div class="flex justify-between"><span>Key Fertilizer:</span> <strong class="text-slate-800">${crop.fertilizer}</strong></div>
            <div class="flex justify-between"><span>Best Mandi Rate:</span> <strong class="text-amber-800 font-extrabold">${crop.bestSellMandi.rate}</strong></div>
          </div>
        </div>

        <button onclick="selectAndFocusCrop('${key}')" class="mt-6 w-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold py-3 rounded-2xl shadow-md transition flex items-center justify-center gap-2">
          <span>Analyze Rates & Blueprint</span> <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    `;
  }).join('');
}

function getActiveCropCategory() {
  const activeBtn = document.querySelector('.category-btn.active');
  return activeBtn ? activeBtn.getAttribute('data-cat') : 'all';
}

function filterCropCategory(category) {
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderCropGrid(category);
}

function selectAndFocusCrop(cropKey) {
  document.getElementById('main-crop-selector').value = cropKey;
  syncSelectedCrop(cropKey);
  document.getElementById('price-analytics').scrollIntoView({ behavior: 'smooth' });
}

function runProfitSimulator() {
  const acres = parseFloat(document.getElementById('slider-acres').value) || 1;
  const yieldPerAcre = parseFloat(document.getElementById('slider-yield').value) || 20;
  const ratePerQtl = parseFloat(document.getElementById('slider-rate').value) || 3500;
  
  const fertCostPerAcre = parseFloat(document.getElementById('inp-fertilizer').value) || 0;
  const laborCostPerAcre = parseFloat(document.getElementById('inp-labor').value) || 0;
  const transportPerQtl = parseFloat(document.getElementById('inp-transport').value) || 0;

  document.getElementById('slider-acres-val').innerText = `${acres} Acres`;
  document.getElementById('slider-yield-val').innerText = `${yieldPerAcre} Qtl / Acre`;
  document.getElementById('slider-rate-val').innerText = `₹${ratePerQtl.toLocaleString('en-IN')}`;

  const totalYield = acres * yieldPerAcre;
  const grossRevenue = totalYield * ratePerQtl;
  
  const totalFertCost = fertCostPerAcre * acres;
  const totalLaborCost = laborCostPerAcre * acres;
  const totalTransportCost = totalYield * transportPerQtl;
  const totalCosts = totalFertCost + totalLaborCost + totalTransportCost;
  
  const netProfit = grossRevenue - totalCosts;
  const roi = totalCosts > 0 ? Math.round((netProfit / totalCosts) * 100) : 0;

  document.getElementById('sim-net-profit').innerText = `₹${Math.round(netProfit).toLocaleString('en-IN')}`;
  document.getElementById('sim-gross-revenue').innerText = `₹${Math.round(grossRevenue).toLocaleString('en-IN')}`;
  document.getElementById('sim-total-costs').innerText = `₹${Math.round(totalCosts).toLocaleString('en-IN')}`;
  document.getElementById('sim-roi-badge').innerText = `+${roi}% ROI`;

  if (grossRevenue > 0) {
    const profitPct = Math.max(0, Math.min(100, (netProfit / grossRevenue) * 100));
    const fertPct = (totalFertCost / grossRevenue) * 100;
    const laborPct = (totalLaborCost / grossRevenue) * 100;
    const transPct = (totalTransportCost / grossRevenue) * 100;

    document.getElementById('bar-profit').style.width = `${profitPct}%`;
    document.getElementById('bar-input').style.width = `${fertPct}%`;
    document.getElementById('bar-labor').style.width = `${laborPct}%`;
    document.getElementById('bar-transport').style.width = `${transPct}%`;
  }
}

let isHindiActive = false;
function toggleLanguage() {
  isHindiActive = !isHindiActive;
  document.querySelectorAll('[data-en][data-hi]').forEach(el => {
    el.innerText = isHindiActive ? el.getAttribute('data-hi') : el.getAttribute('data-en');
  });
  document.getElementById('lang-switch-label').innerText = isHindiActive ? "English Version" : "हिन्दी / English";
}

const SESSION_KEY = "farmwise_session";

function syncAuthUI() {
  const loginBtn = document.getElementById('login');
  if (!loginBtn) return;
  const span = loginBtn.querySelector('span');
  const icon = loginBtn.querySelector('i');
  let session = null;
  try { session = JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { session = null; }

  if (session && session.name) {
    const label = isHindiActive ? `लॉगआउट (${session.name.split(' ')[0]})` : `Logout (${session.name.split(' ')[0]})`;
    span.setAttribute('data-en', `Logout (${session.name.split(' ')[0]})`);
    span.setAttribute('data-hi', `लॉगआउट (${session.name.split(' ')[0]})`);
    span.innerText = label;
    icon.className = 'fa-solid fa-right-from-bracket';
    loginBtn.href = "#";
    loginBtn.onclick = (e) => {
      e.preventDefault();
      if (confirm('Log out of FarmWise?')) {
        localStorage.removeItem(SESSION_KEY);
        fetch('/api/auth/logout',{method:'POST',credentials:'include'}).catch(()=>{});
        syncAuthUI();
      }
    };
  } else {
    span.setAttribute('data-en', 'Login');
    span.setAttribute('data-hi', 'लॉग इन');
    span.innerText = isHindiActive ? 'लॉग इन' : 'Login';
    icon.className = 'fa-solid fa-user';
    loginBtn.href = "login.html";
    loginBtn.onclick = null;
  }
}

let currentLocation = { name: "Amritsar District, Punjab", lat: 31.6340, lng: 74.8723 };

function promptChangeLocation() {
  const modal = document.getElementById('location-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  const input = document.getElementById('location-search-input');
  input.value = '';
  document.getElementById('location-search-results').innerHTML = '';
  input.focus();
}

function closeLocationModal() {
  document.getElementById('location-modal').classList.add('hidden');
}

let locationSearchTimer = null;
function onLocationSearchInput() {
  clearTimeout(locationSearchTimer);
  locationSearchTimer = setTimeout(searchLocation, 350);
}

async function searchLocation() {
  const q = document.getElementById('location-search-input').value.trim();
  const resultsBox = document.getElementById('location-search-results');
  if (!q) { resultsBox.innerHTML = ''; return; }
  resultsBox.innerHTML = '<div class="text-xs text-slate-400 p-3">Searching…</div>';
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=6&language=en&country=IN`);
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      resultsBox.innerHTML = '<div class="text-xs text-rose-500 p-3">No matching Indian places found. Try a different spelling.</div>';
      return;
    }
    resultsBox.innerHTML = data.results.map(r => {
      const label = `${r.name}${r.admin1 ? ', ' + r.admin1 : ''}`;
      return `
        <button type="button" onclick='selectLocation(${r.latitude}, ${r.longitude}, ${JSON.stringify(label)})' class="w-full text-left px-4 py-2.5 hover:bg-brand-50 rounded-xl text-sm font-semibold text-slate-700 flex items-center justify-between transition">
          <span>${label}</span>
          <i class="fa-solid fa-location-arrow text-brand-500 text-xs"></i>
        </button>`;
    }).join('');
  } catch (err) {
    resultsBox.innerHTML = '<div class="text-xs text-rose-500 p-3">Could not reach the location service. Check your connection and try again.</div>';
  }
}

function useMyLocation() {
  if (!navigator.geolocation) { alert("Geolocation isn't supported by this browser."); return; }
  navigator.geolocation.getCurrentPosition(
    (pos) => selectLocation(pos.coords.latitude, pos.coords.longitude, "My Current Location"),
    () => alert("Couldn't get your location. Please search for it manually instead.")
  );
}

async function selectLocation(lat, lng, name) {
  currentLocation = { name, lat: parseFloat(lat), lng: parseFloat(lng) };
  document.getElementById('current-location-text').innerText = name;
  closeLocationModal();
  await fetchWeatherForLocation();
}

function weatherCodeLabel(code) {
  const map = {
    0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
    45: "Fog", 48: "Depositing Rime Fog",
    51: "Light Drizzle", 53: "Drizzle", 55: "Dense Drizzle",
    61: "Slight Rain", 63: "Rain", 65: "Heavy Rain",
    71: "Slight Snow", 73: "Snow", 75: "Heavy Snow",
    80: "Light Rain Showers", 81: "Rain Showers", 82: "Violent Rain Showers",
    95: "Thunderstorm", 96: "Thunderstorm w/ Hail"
  };
  return map[code] !== undefined ? map[code] : "Variable Conditions";
}

async function fetchWeatherForLocation() {
  const note = document.getElementById('weather-source-note');
  if (note) note.innerText = "Fetching live conditions…";
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${currentLocation.lat}&longitude=${currentLocation.lng}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&daily=precipitation_sum&forecast_days=3&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('weather fetch failed');
    const data = await res.json();
    renderWeather(data);
    recommendCropsForWeather(data);
  } catch (err) {
    console.error(err);
    if (note) note.innerText = "Live weather unavailable right now — showing last known values.";
  }
}

function renderWeather(data) {
  const c = data.current;
  const rain48 = (data.daily.precipitation_sum[0] || 0) + (data.daily.precipitation_sum[1] || 0);

  const tempEl = document.getElementById('weather-temp');
  const humEl = document.getElementById('weather-humidity');
  const rainEl = document.getElementById('weather-rain');
  const condEl = document.getElementById('weather-condition');
  const headlineEl = document.getElementById('weather-headline');
  const noteEl = document.getElementById('weather-source-note');

  if (tempEl) tempEl.innerText = `${c.temperature_2m.toFixed(1)}°C`;
  if (humEl) humEl.innerText = `${c.relative_humidity_2m}%`;
  if (rainEl) rainEl.innerText = `${rain48.toFixed(1)} mm`;
  if (condEl) condEl.innerText = weatherCodeLabel(c.weather_code);
  if (headlineEl) headlineEl.innerText = `Live for ${currentLocation.name}: ${weatherCodeLabel(c.weather_code)}, ${c.temperature_2m.toFixed(1)}°C, ${c.relative_humidity_2m}% humidity`;
  if (noteEl) noteEl.innerText = `Live data via Open-Meteo · Updated ${new Date().toLocaleTimeString('en-IN')}`;
}

function recommendCropsForWeather(data) {
  const temp = data.current.temperature_2m;
  const rain48 = (data.daily.precipitation_sum[0] || 0) + (data.daily.precipitation_sum[1] || 0);
  const month = new Date().getMonth() + 1;

  const scored = Object.keys(agroKnowledgeBase).map(k => {
    const crop = agroKnowledgeBase[k];
    let score = 0;
    if (temp >= crop.idealTempMin && temp <= crop.idealTempMax) {
      score += 2;
    } else {
      const mid = (crop.idealTempMin + crop.idealTempMax) / 2;
      score -= Math.min(2, Math.abs(temp - mid) / 6);
    }
    if (rain48 >= crop.idealRainMin) score += 1;
    if (crop.sowMonths.includes(month)) score += 2;
    return { key: k, crop, score };
  }).sort((a, b) => b.score - a.score);

  const box = document.getElementById('weather-crop-recommendation');
  if (box) {
    const top = scored.slice(0, 3);
    box.innerHTML = `
      <div class="text-[11px] uppercase tracking-wider font-bold text-accent-400 mb-2">
        Recommended right now for ${currentLocation.name} · ${temp.toFixed(1)}°C
      </div>
      <div class="flex flex-wrap gap-2">
        ${top.map(t => `
          <button onclick="selectAndFocusCrop('${t.key}')" class="bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2">
            <i class="fa-solid fa-seedling text-emerald-300"></i> ${t.crop.name.split('(')[0].trim()}
          </button>`).join('')}
      </div>
    `;
  }

  cropWeatherScores = Object.fromEntries(scored.map(s => [s.key, s.score]));
  renderCropGrid(getActiveCropCategory());

  const subtitle = document.getElementById('crop-finder-subtitle');
  if (subtitle) {
    subtitle.innerText = `Ranked for ${currentLocation.name} right now — ${weatherCodeLabel(data.current.weather_code)}, ${temp.toFixed(1)}°C, ${rain48.toFixed(1)} mm rain (48h). Best-fit crops are pinned to the top.`;
  }
}

let leafletMapInstance = null;

function openMapModal(lat, lng, label) {
  if (lat === undefined || lng === undefined || lat === null || lng === null) {
    lat = currentLocation.lat; lng = currentLocation.lng;
  }
  document.getElementById('map-modal-title').innerText = label;
  document.getElementById('map-modal-gmaps-link').href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  document.getElementById('map-modal-directions-link').href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  document.getElementById('map-modal').classList.remove('hidden');

  setTimeout(() => {
    if (leafletMapInstance) { leafletMapInstance.remove(); leafletMapInstance = null; }
    leafletMapInstance = L.map('map-modal-canvas').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(leafletMapInstance);
    L.marker([lat, lng]).addTo(leafletMapInstance).bindPopup(label).openPopup();
  }, 60);
}

function closeMapModal() {
  document.getElementById('map-modal').classList.add('hidden');
}

function downloadProfitReport() {
  if (!window.jspdf) { alert("PDF engine is still loading — please try again in a moment."); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const cropKey = document.getElementById('main-crop-selector').value;
  const crop = agroKnowledgeBase[cropKey];
  if (!doc.autoTable) { alert("PDF table engine is still loading — please try again in a moment."); return; }

  const acres = parseFloat(document.getElementById('slider-acres').value) || 0;
  const yieldPerAcre = parseFloat(document.getElementById('slider-yield').value) || 0;
  const ratePerQtl = parseFloat(document.getElementById('slider-rate').value) || 0;
  const fertCostPerAcre = parseFloat(document.getElementById('inp-fertilizer').value) || 0;
  const laborCostPerAcre = parseFloat(document.getElementById('inp-labor').value) || 0;
  const transportPerQtl = parseFloat(document.getElementById('inp-transport').value) || 0;

  const totalYield = acres * yieldPerAcre;
  const grossRevenue = totalYield * ratePerQtl;
  const totalFertCost = fertCostPerAcre * acres;
  const totalLaborCost = laborCostPerAcre * acres;
  const totalTransportCost = totalYield * transportPerQtl;
  const totalCosts = totalFertCost + totalLaborCost + totalTransportCost;
  const netProfit = grossRevenue - totalCosts;
  const roi = totalCosts > 0 ? Math.round((netProfit / totalCosts) * 100) : 0;

  const inr = (n) => `Rs. ${Math.round(n).toLocaleString('en-IN')}`;

  let session = null;
  try { session = JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (e) { session = null; }
  const farmerName = session && session.name ? session.name : "Farmer";

  const pageWidth = doc.internal.pageSize.getWidth();
  let y;

  doc.setFillColor(20, 83, 45);
  doc.rect(0, 0, pageWidth, 38, 'F');
  doc.setFillColor(22, 163, 74);
  doc.rect(0, 38, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(22);
  doc.text('FarmWise', 14, 18);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
  doc.text('Farm Balance Sheet & Profit Report', 14, 26);

  doc.setFontSize(9);
  doc.text(`Generated: ${new Date().toLocaleString('en-IN')}`, pageWidth - 14, 15, { align: 'right' });
  doc.text(`Location: ${currentLocation.name}`, pageWidth - 14, 21, { align: 'right' });
  doc.text(`Farmer: ${farmerName}`, pageWidth - 14, 27, { align: 'right' });

  y = 50;

  doc.setTextColor(20, 20, 20);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(15);
  doc.text(crop ? crop.name : 'Selected Crop', 14, y);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.setTextColor(100);
  doc.text(`${crop.category} · Duration: ${crop.duration}`, 14, y + 6);
  y += 16;

  doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(22, 101, 52);
  doc.text('Farm Inputs', 14, y);
  y += 4;
  doc.autoTable({
    startY: y,
    head: [['Parameter', 'Value']],
    body: [
      ['Total Farm Area', `${acres} Acres`],
      ['Expected Yield / Acre', `${yieldPerAcre} Quintals`],
      ['Total Harvest Yield', `${totalYield.toFixed(1)} Quintals`],
      ['Selling Price / Quintal', inr(ratePerQtl)],
      ['Seed + Fertilizer / Acre', inr(fertCostPerAcre)],
      ['Labor & Machinery / Acre', inr(laborCostPerAcre)],
      ['Transport Rate / Quintal', inr(transportPerQtl)]
    ],
    headStyles: { fillColor: [22, 101, 52] },
    alternateRowStyles: { fillColor: [244, 247, 243] },
    styles: { fontSize: 9.5, cellPadding: 2.5 },
    theme: 'grid'
  });
  y = doc.lastAutoTable.finalY + 10;

  doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(22, 101, 52);
  doc.text('Financial Summary', 14, y);
  y += 4;
  doc.autoTable({
    startY: y,
    head: [['Item', 'Amount']],
    body: [
      ['Gross Revenue', inr(grossRevenue)],
      ['Seed & Fertilizer Cost', inr(totalFertCost)],
      ['Labor & Machinery Cost', inr(totalLaborCost)],
      ['Transport Cost', inr(totalTransportCost)],
      ['Total Costs', inr(totalCosts)]
    ],
    headStyles: { fillColor: [22, 101, 52] },
    styles: { fontSize: 9.5, cellPadding: 2.5 },
    theme: 'grid',
    didParseCell: (data) => {
      if (data.section === 'body' && data.row.index === 4) {
        data.cell.styles.fontStyle = 'bold';
        data.cell.styles.fillColor = [254, 243, 199];
      }
    }
  });
  y = doc.lastAutoTable.finalY + 8;

  doc.setFillColor(20, 83, 45);
  doc.roundedRect(14, y, pageWidth - 28, 26, 3, 3, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
  doc.text('Estimated Net Profit', 20, y + 10);
  doc.setFont('helvetica', 'bold'); doc.setFontSize(19);
  doc.text(inr(netProfit), 20, y + 20);
  doc.setFontSize(13);
  doc.text(`+${roi}% ROI`, pageWidth - 20, y + 16, { align: 'right' });
  y += 36;

  if (grossRevenue > 0) {
    const barX = 14;
    const barWidth = pageWidth - 28;
    const segments = [
      { pct: Math.max(0, netProfit / grossRevenue), color: [52, 211, 153] },
      { pct: totalFertCost / grossRevenue, color: [251, 191, 36] },
      { pct: totalLaborCost / grossRevenue, color: [251, 113, 133] },
      { pct: totalTransportCost / grossRevenue, color: [56, 189, 248] }
    ];
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(100);
    doc.text('Revenue Distribution', barX, y);
    y += 4;
    let cursorX = barX;
    segments.forEach(seg => {
      const w = barWidth * Math.max(0, Math.min(1, seg.pct));
      doc.setFillColor(seg.color[0], seg.color[1], seg.color[2]);
      doc.rect(cursorX, y, w, 6, 'F');
      cursorX += w;
    });
    y += 12;
    doc.setFontSize(7.5); doc.setTextColor(90);
    doc.text('■ Net Profit    ■ Seed/Fertilizer    ■ Labor/Machinery    ■ Transport', barX, y);
    y += 10;
  }

  const pageCount = doc.internal.getNumberOfPages();
  const pageHeight = doc.internal.pageSize.getHeight();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(220);
    doc.line(14, pageHeight - 18, pageWidth - 14, pageHeight - 18);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(140);
    doc.text('Calculated from the FarmWise Profit Simulator. Actual realization depends on market conditions and crop yields.', 14, pageHeight - 12);
    doc.text(`FarmWise Agro-Informatics Platform · Page ${i} of ${pageCount}`, pageWidth - 14, pageHeight - 12, { align: 'right' });
  }

  doc.save(`FarmWise_Balance_Sheet_${Date.now()}.pdf`);
}

let ridesData = [
  { driver: "Gurmeet Singh", type: "Tractor Trolley", route: "Rayya Bypass → Bhagtanwala Mandi", rate: "₹40 / Qtl Rate", departure: "Tomorrow, 05:00 AM", space: "45" },
  { driver: "Harpreet Singh", type: "Mini Truck (Bolero Maxi)", route: "Majitha Mandi → Amritsar City APMC", rate: "₹45 / Qtl Rate", departure: "Today, 08:30 PM", space: "18" },
  { driver: "Sukhdev Dhillon", type: "High-Capacity Trailer", route: "Jandiala Guru → Tarn Taran APMC", rate: "₹35 / Qtl Rate", departure: "Saturday, 06:00 AM", space: "90" }
];

function renderRides() {
  const container = document.getElementById('rides-container');
  if (!container) return;
  container.innerHTML = ridesData.map((r, i) => `
    <div class="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 hover:bg-white hover:shadow-md transition">
      <div class="flex justify-between items-start mb-3">
        <span class="bg-brand-100 text-brand-800 text-[11px] font-black px-2.5 py-1 rounded-lg">${r.type}</span>
        <span class="text-xs font-bold text-emerald-600">${r.rate}</span>
      </div>
      <h4 class="font-extrabold text-slate-900 text-base">${r.route}</h4>
      <p class="text-xs text-slate-500 mt-1">Driver: ${r.driver} • Community Fleet</p>
      <div class="my-4 py-3 border-y border-slate-200/80 grid grid-cols-2 gap-2 text-xs">
        <div>Departure: <strong class="block text-slate-800">${r.departure}</strong></div>
        <div>Available: <strong class="block text-brand-700">${r.space} Quintals</strong></div>
      </div>
      <button onclick="requestRide(${i})" class="w-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2.5 rounded-xl transition">
        Book Shared Space
      </button>
    </div>
  `).join('');
}

function requestRide(i) {
  const r = ridesData[i];
  if (!r) return;
  document.getElementById('ride-popup-title').innerText = `${r.driver} · ${r.type}`;
  document.getElementById('ride-popup-route').innerText = r.route;
  document.getElementById('ride-popup-modal').classList.remove('hidden');
}

function closeRidePopup() {
  document.getElementById('ride-popup-modal').classList.add('hidden');
}

function openPostVehicleModal() {
  document.getElementById('post-vehicle-modal').classList.remove('hidden');
}

function closePostVehicleModal() {
  document.getElementById('post-vehicle-modal').classList.add('hidden');
}

function submitVehiclePost(e) {
  e.preventDefault();
  const origin = document.getElementById('pv-origin').value.trim();
  const dest = document.getElementById('pv-dest').value.trim();
  const space = document.getElementById('pv-space').value.trim();
  const type = document.getElementById('pv-type').value;
  const driver = document.getElementById('pv-driver').value.trim() || "Farmer";
  const time = document.getElementById('pv-time').value.trim() || "Flexible";

  if (!origin || !dest) { return; }

  ridesData.unshift({
    driver, type,
    route: `${origin} → ${dest}`,
    rate: "₹Negotiable",
    departure: time,
    space: space || "—"
  });
  renderRides();
  closePostVehicleModal();
  document.getElementById('post-vehicle-form').reset();
  document.getElementById('shared-logistics').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('main-crop-selector');
  if (selector) {
    selector.innerHTML = Object.keys(agroKnowledgeBase).map(k => `
      <option value="${k}">${agroKnowledgeBase[k].name}</option>
    `).join('');
  }

  renderCropGrid('all');
  syncSelectedCrop('basmati');
  runProfitSimulator();
  renderRides();
  syncAuthUI();
  fetchWeatherForLocation();
});