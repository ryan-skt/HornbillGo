
// ═══════════════════════════════════════════════════════
//  WEATHER ENGINE  —  WeatherAPI.com
//  Declared here so constants are available before they
//  are referenced by the destination-init code below.
// ═══════════════════════════════════════════════════════

const WX_API_KEY = "dd4384e7b50e4b6cab0182816261904";
const WX_BASE    = "https://api.weatherapi.com/v1";

// Coordinates for every destination in the app
const DEST_COORDS = {
  "Tawang":              { lat: 27.5859, lon: 91.8694 },
  "Ziro Valley":         { lat: 27.5455, lon: 93.8313 },
  "Bomdila":             { lat: 27.2645, lon: 92.4163 },
  "Pasighat":            { lat: 28.0647, lon: 95.3320 },
  "Majuli":              { lat: 26.9448, lon: 94.1673 },
  "Kaziranga":           { lat: 26.5775, lon: 93.1711 },
  "Manas National Park": { lat: 26.6968, lon: 91.0014 },
  "Tezpur":              { lat: 26.6338, lon: 92.7944 },
  "Cherrapunji":         { lat: 25.2932, lon: 91.7267 },
  "Shillong":            { lat: 25.5788, lon: 91.8933 },
  "Dawki":               { lat: 25.1905, lon: 92.0225 },
  "Mawlynnong":          { lat: 25.2012, lon: 91.9844 },
  "Kohima":              { lat: 25.6580, lon: 94.1089 },
  "Dimapur":             { lat: 25.9027, lon: 93.7228 },
  "Hornbill Festival":   { lat: 25.5982, lon: 94.0444 },
  "Dzukou Valley":       { lat: 25.5500, lon: 94.0800 },
  "Gangtok":             { lat: 27.3389, lon: 88.6065 },
  "Tsomgo Lake":         { lat: 27.3723, lon: 88.7631 },
  "Pelling":             { lat: 27.3981, lon: 88.1091 },
  "Yumthang Valley":     { lat: 27.8279, lon: 88.6949 },
  "Aizawl":              { lat: 23.7271, lon: 92.7176 },
  "Champhai":            { lat: 23.4575, lon: 93.3241 },
  "Loktak Lake":         { lat: 24.5282, lon: 93.8032 },
  "Imphal":              { lat: 24.8170, lon: 93.9368 },
  "Unakoti":             { lat: 24.2941, lon: 92.2020 },
  "Agartala":            { lat: 23.8315, lon: 91.2868 },
};

// Static monthly climate normals [lo°C, hi°C] Jan→Dec
const DEST_CLIMATE = {
  "Tawang":              [[-4,4],[-2,6],[2,10],[6,15],[10,18],[13,20],[14,21],[14,20],[11,18],[6,14],[0,8],[-3,5]],
  "Ziro Valley":         [[5,17],[7,19],[11,22],[14,25],[17,27],[19,27],[20,27],[20,27],[18,26],[14,23],[9,20],[6,17]],
  "Bomdila":             [[4,14],[6,16],[10,20],[14,24],[17,26],[20,27],[21,27],[21,27],[18,25],[13,22],[7,18],[4,14]],
  "Pasighat":            [[12,24],[14,26],[18,30],[21,32],[23,33],[25,33],[26,33],[26,32],[24,31],[20,29],[16,26],[12,24]],
  "Majuli":              [[10,23],[13,26],[18,31],[22,33],[25,34],[27,34],[28,33],[28,33],[26,31],[22,29],[16,26],[11,23]],
  "Kaziranga":           [[10,22],[12,25],[17,30],[21,33],[24,34],[26,33],[27,32],[27,32],[25,31],[20,29],[14,25],[10,22]],
  "Manas National Park": [[10,22],[12,25],[17,30],[21,33],[24,34],[26,33],[27,32],[27,32],[25,31],[20,29],[14,25],[10,22]],
  "Tezpur":              [[11,23],[14,26],[19,31],[23,33],[25,34],[27,34],[28,33],[28,33],[26,32],[22,30],[16,26],[12,23]],
  "Cherrapunji":         [[7,16],[9,18],[14,22],[17,25],[18,25],[18,24],[18,23],[18,23],[17,24],[15,23],[11,19],[8,16]],
  "Shillong":            [[6,14],[8,16],[12,20],[15,23],[17,24],[18,24],[18,23],[18,23],[17,23],[14,21],[9,17],[6,14]],
  "Dawki":               [[8,20],[10,22],[15,26],[18,28],[20,28],[20,27],[20,27],[20,27],[19,27],[16,25],[11,22],[8,20]],
  "Mawlynnong":          [[9,21],[11,23],[15,26],[18,28],[20,28],[20,27],[20,27],[20,27],[19,27],[16,25],[12,22],[9,21]],
  "Kohima":              [[6,18],[8,20],[12,24],[15,26],[18,27],[19,26],[20,26],[20,26],[18,25],[14,22],[9,19],[6,18]],
  "Dimapur":             [[11,23],[13,26],[18,30],[21,33],[24,33],[25,33],[26,32],[26,32],[24,31],[20,29],[15,26],[11,23]],
  "Hornbill Festival":   [[7,18],[9,20],[13,24],[16,26],[18,27],[19,26],[20,26],[20,26],[18,25],[14,22],[9,19],[7,18]],
  "Dzukou Valley":       [[2,12],[4,14],[8,18],[12,22],[16,24],[18,24],[18,24],[18,24],[16,22],[11,19],[5,14],[2,12]],
  "Gangtok":             [[5,13],[6,15],[10,19],[13,22],[16,24],[18,25],[19,25],[19,24],[17,23],[13,20],[9,16],[6,13]],
  "Tsomgo Lake":         [[-8,2],[-7,3],[-3,7],[2,12],[7,16],[10,18],[12,19],[12,18],[8,15],[2,9],[-4,4],[-7,2]],
  "Pelling":             [[4,12],[5,14],[9,18],[12,21],[15,23],[17,24],[18,24],[18,23],[16,22],[12,19],[8,15],[5,12]],
  "Yumthang Valley":     [[-5,4],[-4,5],[0,9],[4,14],[9,17],[12,19],[14,20],[13,19],[10,16],[4,11],[-2,6],[-4,4]],
  "Aizawl":              [[9,21],[11,23],[15,27],[18,29],[20,30],[21,29],[21,28],[21,28],[20,28],[17,26],[13,23],[10,21]],
  "Champhai":            [[8,20],[10,23],[14,27],[17,29],[19,30],[20,29],[20,28],[20,28],[19,28],[16,26],[12,22],[9,20]],
  "Loktak Lake":         [[8,20],[10,22],[15,26],[18,29],[21,30],[22,29],[23,29],[23,29],[21,28],[17,26],[12,23],[9,21]],
  "Imphal":              [[8,21],[10,24],[15,28],[18,30],[21,31],[22,30],[23,29],[23,29],[21,28],[17,26],[12,24],[9,22]],
  "Unakoti":             [[10,22],[13,25],[17,29],[21,32],[23,33],[24,32],[25,31],[25,31],[23,30],[19,28],[14,25],[10,22]],
  "Agartala":            [[11,24],[13,27],[18,31],[22,33],[24,34],[25,33],[25,32],[25,32],[24,31],[20,29],[15,26],[11,24]],
};

const MONTH_WX_ICONS = ["🌥️","🌤️","⛅","🌦️","🌧️","🌧️","🌧️","🌧️","🌦️","⛅","🌤️","🌥️"];
const MONTH_NAMES    = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// Best visit window per destination
const DEST_BEST_MONTHS = {
  "Tawang":              "October – April",
  "Ziro Valley":         "October – March",
  "Bomdila":             "October – April",
  "Pasighat":            "October – April",
  "Majuli":              "November – March",
  "Kaziranga":           "November – April",
  "Manas National Park": "November – April",
  "Tezpur":              "October – March",
  "Cherrapunji":         "October – February",
  "Shillong":            "October – June",
  "Dawki":               "November – April",
  "Mawlynnong":          "October – May",
  "Kohima":              "October – March",
  "Dimapur":             "October – March",
  "Hornbill Festival":   "November – December",
  "Dzukou Valley":       "June – September",
  "Gangtok":             "March – June, Oct – Dec",
  "Tsomgo Lake":         "March – May, Oct – Jan",
  "Pelling":             "March – June, Sep – Dec",
  "Yumthang Valley":     "April – June",
  "Aizawl":              "October – March",
  "Champhai":            "October – April",
  "Loktak Lake":         "October – March",
  "Imphal":              "October – March",
  "Unakoti":             "October – March",
  "Agartala":            "October – March",
};

// Reusable star SVG for card badges
const _STAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden="true" style="width:.72rem;height:.72rem;vertical-align:middle;margin-right:.2rem"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;

// Category-based food cards
const FOOD_BY_CATEGORY = {
  mountains: [
    { badge:"4.8", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80", name:"Himalayan Kitchen", desc:"Thukpa noodle soup & butter milk tea" },
    { badge:"4.7", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80", name:"Alpine Dhaba",       desc:"Local rice platter with bamboo shoot curry" },
    { badge:"4.6", img:"https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600", name:"Summit Café",    desc:"Steamed momos & ginger honey tea" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", name:"High Pass Eatery", desc:"Yak cheese rolls & fresh buckwheat bread" },
  ],
  wildlife: [
    { badge:"4.9", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", name:"Forest Lodge Kitchen", desc:"Assamese fish tenga & steamed rice" },
    { badge:"4.7", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80", name:"Jungle Café",         desc:"Smoked pork with bamboo shoot salad" },
    { badge:"4.6", img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80", name:"Safari Mess",         desc:"Khar alkaline stew & luchi" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", name:"River Bend Diner",    desc:"Grilled river fish & cress salad" },
  ],
  waterfalls: [
    { badge:"4.9", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80", name:"Mist & Meals Kitchen", desc:"Jadoh — Khasi pork & rice" },
    { badge:"4.8", img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80", name:"Root Bridge Café",     desc:"Black sesame pithas & smoked snacks" },
    { badge:"4.6", img:"https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600", name:"Waterfall Bistro", desc:"Nakham bitchi stew & dohkhleh salad" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", name:"Stone Garden Tea House", desc:"Artisan teas & wild berry preserves" },
  ],
  villages: [
    { badge:"4.8", img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80", name:"Homestay Kitchen",   desc:"Tribal thali slow-cooked on wood fire" },
    { badge:"4.7", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80", name:"Community Hearth",   desc:"Rice beer & bamboo-shoot smoked meats" },
    { badge:"4.6", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", name:"Village Market Stall", desc:"Seasonal greens & handmade pithas" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", name:"Organic Farm Table",  desc:"Farm-to-table vegetable platters" },
  ],
  culture: [
    { badge:"4.8", img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80", name:"Cultural Kitchen",  desc:"Heritage thali — eight regional delicacies" },
    { badge:"4.7", img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80", name:"Festival Food Court", desc:"Naga smoked pork & fermented akhuni soya" },
    { badge:"4.6", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80", name:"Heritage Café",       desc:"Local rice beer & bamboo shoot pickles" },
    { badge:"4.5", img:"https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600", name:"Tribal Spice Hut", desc:"Dry fish chutney & leaf-wrapped steamed rice" },
  ],
  cities: [
    { badge:"4.7", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", name:"The Local Table",    desc:"Pan-Northeast thali with 12 side dishes" },
    { badge:"4.6", img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80", name:"Urban Bites",        desc:"Modern Northeast fusion small plates" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=600&q=80", name:"Street Market Bites", desc:"Pithas, chow & evening snack stalls" },
    { badge:"4.4", img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80", name:"Roadside Chai Corner", desc:"Clay-pot masala tea & freshly fried samosas" },
  ],
  spiritual: [
    { badge:"4.8", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", name:"Prasad Kitchen",       desc:"Sattvic meals — rice, dal & seasonal vegetables" },
    { badge:"4.6", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", name:"Pilgrim's Bhoj Sthal",  desc:"Simple, nourishing vegetarian thali" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80", name:"Temple Road Snacks",   desc:"Sweet pitha & coconut laddoo" },
    { badge:"4.4", img:"https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600", name:"Sacred Grove Café", desc:"Herbal teas & forest berry juices" },
  ],
  nature: [
    { badge:"4.8", img:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80", name:"Nature's Table",    desc:"Wild herb salads & foraged forest mushrooms" },
    { badge:"4.7", img:"https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600", name:"Lakeside Bistro", desc:"Fresh-catch river fish curry & green pea pulao" },
    { badge:"4.6", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", name:"Eco Kitchen",          desc:"Organic produce sourced within 10 km" },
    { badge:"4.5", img:"https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80", name:"Sunrise Dhaba",      desc:"Masala chai, egg bhurji & roti" },
  ],
};

// Category-based hotel/stay cards
const HOTELS_BY_CATEGORY = {
  mountains: [
    { badge:"8.9 Excellent", img:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80", name:"Summit Lodge",       distance:"0.5 km from viewpoint",     price:"₹4,800/night" },
    { badge:"8.2 Very Good", img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80", name:"Misty Mountain Inn",  distance:"1.8 km from town center",   price:"₹3,200/night" },
    { badge:"7.8 Good",      img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", name:"Highland Homestay",   distance:"2.5 km from trekking base", price:"₹1,600/night" },
  ],
  wildlife: [
    { badge:"9.1 Superb",    img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", name:"Jungle Hideaway Resort", distance:"0.2 km from park gate",   price:"₹8,500/night" },
    { badge:"8.4 Excellent", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", name:"Forest Safari Lodge",   distance:"1.5 km from sanctuary",  price:"₹5,200/night" },
    { badge:"7.9 Good",      img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", name:"River View Eco Camp",   distance:"3.0 km from wildlife zone",price:"₹2,800/night" },
  ],
  waterfalls: [
    { badge:"8.8 Excellent", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", name:"Mist Valley Hotel",    distance:"0.3 km from falls",       price:"₹4,200/night" },
    { badge:"8.1 Very Good", img:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80", name:"Cloud Forest Lodge",   distance:"1.0 km from viewpoint",   price:"₹3,000/night" },
    { badge:"7.6 Good",      img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", name:"Rain Cottage",         distance:"2.2 km from town",        price:"₹1,500/night" },
  ],
  villages: [
    { badge:"9.0 Superb",    img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", name:"Heritage Homestay",    distance:"Village centre",          price:"₹1,200/night" },
    { badge:"8.3 Very Good", img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80", name:"Bamboo Grove Inn",     distance:"0.5 km from market",      price:"₹2,400/night" },
    { badge:"7.8 Good",      img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", name:"Community Guest House", distance:"Walking distance to sights",price:"₹900/night" },
  ],
  culture: [
    { badge:"8.7 Excellent", img:"https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=600&q=80", name:"Heritage Palace Hotel", distance:"0.4 km from cultural museum",price:"₹5,600/night" },
    { badge:"8.0 Very Good", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", name:"Cultural Quarter Inn",  distance:"1.2 km from old town",    price:"₹3,800/night" },
    { badge:"7.5 Good",      img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80", name:"Festival Guest House",  distance:"2.0 km from festival grounds",price:"₹2,100/night" },
  ],
  cities: [
    { badge:"8.6 Excellent", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", name:"City Grand Hotel",      distance:"City centre",             price:"₹6,200/night" },
    { badge:"8.2 Very Good", img:"https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=600&q=80", name:"Boutique Urban Stay",   distance:"0.8 km from market",      price:"₹4,000/night" },
    { badge:"7.7 Good",      img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", name:"Travellers Rest House",  distance:"1.5 km from bus terminal", price:"₹2,200/night" },
  ],
  spiritual: [
    { badge:"8.4 Excellent", img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", name:"Pilgrim's Rest Lodge", distance:"0.1 km from temple",      price:"₹2,800/night" },
    { badge:"7.9 Good",      img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80", name:"Sacred Site Homestay", distance:"Adjacent to heritage park",price:"₹1,800/night" },
    { badge:"7.4 Good",      img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", name:"Dharamshala",          distance:"Walking distance to shrine",price:"₹800/night" },
  ],
  nature: [
    { badge:"9.2 Superb",    img:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", name:"Lake View Retreat",      distance:"Direct waterfront access",  price:"₹7,200/night" },
    { badge:"8.5 Excellent", img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80", name:"Nature's Edge Eco Lodge",distance:"1.0 km from wetlands",    price:"₹4,400/night" },
    { badge:"7.8 Good",      img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", name:"Wetland Homestay",       distance:"2.0 km from floating islands",price:"₹2,000/night" },
  ],
};
function renderClimateMonths(destName) {
  const grid = document.getElementById("month-grid");
  if (!grid) return;
  const normals = DEST_CLIMATE[destName];
  grid.innerHTML = MONTH_NAMES.map((name, i) => {
    const [lo, hi] = normals ? normals[i] : [null, null];
    const tempStr = (lo !== null) ? `${lo}/${hi}°C` : "—";
    return `
      <div class="month-card">
        <span class="mc-month">${name}</span>
        <span class="mc-wx-icon">${MONTH_WX_ICONS[i]}</span>
        <span class="mc-temp">${tempStr}</span>
      </div>`;
  }).join("");
}

async function loadWeather(lat, lon, cityName) {
  const liveCard = document.getElementById("live-weather");
  if (!liveCard) return;
  renderClimateMonths(cityName);
  fetchHistoryMonths(lat, lon);
  const ctrl  = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 5000);
  try {
    const res  = await fetch(`${WX_BASE}/current.json?key=${WX_API_KEY}&q=${lat},${lon}`, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const cur  = data.current;
    liveCard.innerHTML = `
      <div class="lw-icon"><img src="https:${cur.condition.icon}" alt="${cur.condition.text}" width="64" height="64"></div>
      <div class="lw-center">
        <div class="lw-temp">${Math.round(cur.temp_c)}<span class="lw-unit">°C</span></div>
        <div class="lw-desc">${cur.condition.text}</div>
        <div class="lw-location">${cityName} · Live</div>
      </div>
      <div class="lw-stats">
        <div class="lw-stat"><span class="lw-stat-label">Feels like</span><span class="lw-stat-val">${Math.round(cur.feelslike_c)}°C</span></div>
        <div class="lw-stat"><span class="lw-stat-label">Humidity</span><span class="lw-stat-val">${cur.humidity}%</span></div>
        <div class="lw-stat"><span class="lw-stat-label">Wind</span><span class="lw-stat-val">${Math.round(cur.wind_kph)} km/h</span></div>
        <div class="lw-stat"><span class="lw-stat-label">UV Index</span><span class="lw-stat-val">${cur.uv}</span></div>
      </div>`;
  } catch (err) {
    clearTimeout(timer);
    liveCard.innerHTML = `<div class="lw-error">Live weather unavailable</div>`;
  }
}

async function fetchHistoryMonths(lat, lon) {
  const grid = document.getElementById("month-grid");
  if (!grid) return;
  const year     = new Date().getFullYear() - 1;
  const requests = Array.from({ length: 12 }, (_, i) => {
    const mm = String(i + 1).padStart(2, "0");
    return fetch(`${WX_BASE}/history.json?key=${WX_API_KEY}&q=${lat},${lon}&dt=${year}-${mm}-15`)
      .then(r => r.ok ? r.json() : null)
      .catch(() => null);
  });
  const results = await Promise.all(requests);
  results.forEach((data, i) => {
    const cards = grid.querySelectorAll(".month-card");
    if (!cards[i] || !data) return;
    const day = data?.forecast?.forecastday?.[0]?.day;
    if (!day) return;
    const lo  = Math.round(day.mintemp_c);
    const hi  = Math.round(day.maxtemp_c);
    const rain = day.daily_chance_of_rain;
    cards[i].innerHTML = `
      <span class="mc-month">${MONTH_NAMES[i]}</span>
      <img src="https:${day.condition.icon}" alt="${day.condition.text}" title="${day.condition.text}" width="28" height="28" loading="lazy">
      <span class="mc-temp">${lo}/${hi}°C</span>
      <span class="mc-rain${rain < 20 ? ' mc-rain--dry' : ''}">${rain > 0 ? rain + '%' : '—'}</span>`;
  });
}

// 1. URL Parameters handling
function renderDestCards(dest) {
  const cat    = dest.category;
  const food   = FOOD_BY_CATEGORY[cat]   || FOOD_BY_CATEGORY.nature;
  const hotels = HOTELS_BY_CATEGORY[cat] || HOTELS_BY_CATEGORY.nature;

  const foodRow  = document.getElementById('food-card-row');
  const hotelRow = document.getElementById('hotel-card-row');

  if (foodRow) {
    foodRow.innerHTML = food.map(c => `
      <div class="dest-card">
        <div class="dest-card-badge">${_STAR_SVG}${c.badge}</div>
        <img src="${c.img}" alt="${c.name}" loading="lazy">
        <div class="dest-card-body"><h3>${c.name}</h3><p>${c.desc}</p></div>
      </div>`).join('');
  }
  if (hotelRow) {
    hotelRow.innerHTML = hotels.map(h => `
      <div class="dest-card">
        <div class="dest-card-badge">${h.badge}</div>
        <img src="${h.img}" alt="${h.name}" loading="lazy">
        <div class="dest-card-body">
          <h3>${h.name}</h3><p>${h.distance}</p>
          <p class="card-price">${h.price}</p>
        </div>
      </div>`).join('');
  }
}

// 1. URL Parameters handling
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// 2. Find selected destination
const destination = destinations.find((d) => d.name === name);

if (!destination) {
  document.body.innerHTML = "<div class='main'><h1 style='text-align:center;'>Destination not found</h1><p style='text-align:center;'><a href='index.html'>Go back to Home</a></p></div>";
} else {
  // Update Hero Section
  const destImg = document.getElementById("destination-img");
  destImg.src = destination.img;
  destImg.onerror = () => { destImg.src = "Photos/placeholder.jpg"; }; // Fallback image if source is missing

  document.getElementById("destination-name").textContent = destination.name;
  document.getElementById("destination-location").innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:.88rem;height:.88rem;vertical-align:middle;margin-right:.3rem;opacity:.85"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>${destination.location}`;
  document.getElementById("destination-price").textContent = destination.price;
  document.getElementById("destination-rating").innerHTML =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" aria-hidden="true" style="width:.85rem;height:.85rem;vertical-align:middle;margin-right:.25rem"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>${destination.rating}`;

  // Populate destination-specific food & hotel cards
  renderDestCards(destination);

  // Update best-time pill
  const btEl = document.getElementById('best-time-text');
  if (btEl) btEl.textContent = DEST_BEST_MONTHS[destination.name] || 'October – March';

  // Update flavors destination name
  const flDnEl = document.getElementById('flavors-dest-name');
  if (flDnEl) flDnEl.textContent = destination.name;

  // Update breadcrumb destination name
  const bcNameEl = document.getElementById("bc-name");
  if (bcNameEl) bcNameEl.textContent = destination.name;

  // Update Weather Title using the unique ID
  const weatherTitle = document.getElementById("weather-city-name");
  if (weatherTitle) {
    weatherTitle.textContent = `Weather in ${destination.name}`;
  }

  // Update Booking Title using the unique ID
  const bookingTitle = document.getElementById("booking-dest-name");
  if (bookingTitle) {
    bookingTitle.textContent = `Book a trip to ${destination.name}`;
  }

  // Kick off live weather fetch
  const coords = DEST_COORDS[destination.name];
  if (coords) {
    loadWeather(coords.lat, coords.lon, destination.name);
  } else {
    const lw = document.getElementById("live-weather");
    if (lw) lw.innerHTML = `<div class="lw-error">Weather data unavailable for this destination</div>`;
    renderClimateMonths(destination.name);
  }
}

// 3. Tab Switching Logic for Booking Section
const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active state from all tabs and forms
    tabs.forEach((t) => t.classList.remove("active"));
    forms.forEach((form) => form.classList.remove("active"));

    // Set current tab to active
    tab.classList.add("active");

    // Display the form matching the data-category
    const category = tab.getAttribute("data-category");
    const targetForm = document.querySelector(`.form-container[data-category="${category}"]`);
    
    if (targetForm) {
      targetForm.classList.add("active");
    }
  });
});