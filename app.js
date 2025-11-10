// JPG bevorzugen, bei Fehler auf HEIC zurückfallen
const preferJpg = (path) => path.replace(/\.HEIC$/i, ".jpg");

// Ordner + "Cover" und (optional) alle Bilder des Ordners
const items = [
  { name: "BlauSchwarzeDunks", cover: "FloMarktGallerie/BlauSchwarzeDunks/IMG_1007.HEIC", images: ["IMG_1007.HEIC","IMG_1008.HEIC","IMG_1009.HEIC","IMG_1010.HEIC","IMG_1011.HEIC"] },
  { name: "BooHooManFlaredJeans", cover: "FloMarktGallerie/BooHooManFlaredJeans/IMG_0974.HEIC", images: ["IMG_0974.HEIC","IMG_0975.HEIC","IMG_0976.HEIC","IMG_0977.HEIC","IMG_0978.HEIC","IMG_0979.HEIC","IMG_0980.HEIC","IMG_0981.HEIC"] },
  { name: "BrasilienTrikot", cover: "FloMarktGallerie/BrasilienTrikot/IMG_0929.HEIC", images: ["IMG_0929.HEIC","IMG_0930.HEIC","IMG_0931.HEIC","IMG_0932.HEIC","IMG_0933.HEIC","IMG_0934.HEIC"] },
  { name: "BurberrySchal", cover: "FloMarktGallerie/BurberrySchal/IMG_0972.HEIC", images: ["IMG_0972.HEIC","IMG_0973.HEIC"] },
  { name: "CriminalDamageTee", cover: "FloMarktGallerie/CriminalDamageTee/IMG_0946.HEIC", images: ["IMG_0946.HEIC","IMG_0947.HEIC","IMG_0948.HEIC"] },
  { name: "GAPPullover", cover: "FloMarktGallerie/GAPPullover/IMG_0986.HEIC", images: ["IMG_0986.HEIC","IMG_0987.HEIC","IMG_0988.HEIC"] },
  { name: "GrauerNikeTech", cover: "FloMarktGallerie/GrauerNikeTech/IMG_0907.HEIC", images: ["IMG_0907.HEIC","IMG_0909.HEIC","IMG_0910.HEIC","IMG_0911.HEIC"] },
  { name: "GucciSlides", cover: "FloMarktGallerie/GucciSlides/IMG_1017.HEIC", images: ["IMG_1017.HEIC","IMG_1018.HEIC"] },
  { name: "HandyController", cover: "FloMarktGallerie/HandyController/IMG_0915.HEIC", images: ["IMG_0915.HEIC","IMG_0916.HEIC","IMG_0917.HEIC","IMG_0918.HEIC"] },
  { name: "JordanJersey", cover: "FloMarktGallerie/JordanJersey/IMG_0923.HEIC", images: ["IMG_0923.HEIC","IMG_0924.HEIC","IMG_0925.HEIC","IMG_0926.HEIC","IMG_0927.HEIC","IMG_0928.HEIC"] },
  { name: "KappaTrackPants", cover: "FloMarktGallerie/KappaTrackPants/IMG_0935.HEIC", images: ["IMG_0935.HEIC","IMG_0936.HEIC","IMG_0937.HEIC","IMG_0938.HEIC","IMG_0939.HEIC","IMG_0940.HEIC"] },
  { name: "KurzeNikeHose", cover: "FloMarktGallerie/KurzeNikeHose/IMG_0912.HEIC", images: ["IMG_0912.HEIC","IMG_0913.HEIC","IMG_0914.HEIC"] },
  { name: "LA23Jersey", cover: "FloMarktGallerie/LA23Jersey/IMG_0919.HEIC", images: ["IMG_0919.HEIC","IMG_0920.HEIC","IMG_0921.HEIC","IMG_0922.HEIC"] },
  { name: "MausMitUsb:Bluetooth", cover: "FloMarktGallerie/MausMitUsb:Bluetooth/IMG_1035.HEIC", images: ["IMG_1035.HEIC","IMG_1036.HEIC","IMG_1038.HEIC"] },
  { name: "MenaceTee", cover: "FloMarktGallerie/MenaceTee/IMG_0949.HEIC", images: ["IMG_0949.HEIC","IMG_0950.HEIC","IMG_0951.HEIC"] },
  { name: "MousePad", cover: "FloMarktGallerie/MousePad/IMG_0961.HEIC", images: ["IMG_0961.HEIC","IMG_0962.HEIC"] },
  { name: "NOFSjoggerPink", cover: "FloMarktGallerie/NOFSjoggerPink/IMG_0941.HEIC", images: ["IMG_0941.HEIC","IMG_0942.HEIC","IMG_0943.HEIC","IMG_0944.HEIC"] },
  { name: "PinkeCorteizSpringJacket", cover: "FloMarktGallerie/PinkeCorteizSpringJacket/IMG_0964.HEIC", images: ["IMG_0964.HEIC","IMG_0965.HEIC","IMG_0966.HEIC","IMG_0967.HEIC","IMG_0968.HEIC","IMG_0969.HEIC","IMG_0970.HEIC","IMG_0971.HEIC"] },
  { name: "PinkeEspritJacke", cover: "FloMarktGallerie/PinkeEspritJacke/IMG_0982.HEIC", images: ["IMG_0982.HEIC","IMG_0983.HEIC","IMG_0984.HEIC","IMG_0985.HEIC"] },
  { name: "RotGelbeDunks", cover: "FloMarktGallerie/RotGelbeDunks/IMG_1012.HEIC", images: ["IMG_1012.HEIC","IMG_1013.HEIC","IMG_1014.HEIC","IMG_1015.HEIC","IMG_1016.HEIC"] },
  { name: "SchnelleBrillen", cover: "FloMarktGallerie/SchnelleBrillen/IMG_0953.HEIC", images: ["IMG_0953.HEIC","IMG_0954.HEIC","IMG_0955.HEIC"] },
  { name: "SchwarzeReacts", cover: "FloMarktGallerie/SchwarzeReacts/IMG_0994.HEIC", images: ["IMG_0994.HEIC","IMG_0995.HEIC","IMG_0996.HEIC","IMG_0997.HEIC","IMG_0998.HEIC"] },
  { name: "SchwarzeTracks", cover: "FloMarktGallerie/SchwarzeTracks/IMG_1019.HEIC", images: ["IMG_1019.HEIC","IMG_1020.HEIC","IMG_1021.HEIC","IMG_1022.HEIC","IMG_1023.HEIC"] },
  { name: "Tastatur", cover: "FloMarktGallerie/Tastatur/IMG_1030.HEIC", images: ["IMG_1030.HEIC","IMG_1031.HEIC","IMG_1032.HEIC","IMG_1034.HEIC"] },
  { name: "WeinroteNikeTennisSchuhe", cover: "FloMarktGallerie/WeinroteNikeTennisSchuhe/IMG_0989.HEIC", images: ["IMG_0989.HEIC","IMG_0990.HEIC","IMG_0991.HEIC","IMG_0992.HEIC","IMG_0993.HEIC"] },
  { name: "WeissBlaueNikeDunks", cover: "FloMarktGallerie/WeissBlaueNikeDunks/IMG_0999-2.HEIC", images: ["IMG_0999-2.HEIC","IMG_1001.HEIC","IMG_1002.HEIC","IMG_1003.HEIC","IMG_1004.HEIC","IMG_1005.HEIC"] },
  { name: "WeisseTracks", cover: "FloMarktGallerie/WeisseTracks/IMG_1024.HEIC", images: ["IMG_1024.HEIC","IMG_1025.HEIC","IMG_1026.HEIC","IMG_1027.HEIC","IMG_1028.HEIC","IMG_1029.HEIC"] },
  { name: "WeissRotSchwarzeMidJordans", cover: "FloMarktGallerie/WeissRotSchwarzeMidJordans/IMG_0956.HEIC", images: ["IMG_0956.HEIC","IMG_0957.HEIC","IMG_0958.HEIC","IMG_0959.HEIC","IMG_0960.HEIC"] }
];

const grid = document.getElementById("grid");
const qInput = document.getElementById("q");
const condBtn = document.getElementById("filterConditionBtn");
const sizeBtn = document.getElementById("filterSizeBtn");
const colorBtn = document.getElementById("filterColorBtn");
const catBtn = document.getElementById("filterCategoryBtn");
const panelCond = document.getElementById("conditionPanel");
const panelSize = document.getElementById("sizePanel");
const panelColor = document.getElementById("colorPanel");
const panelCat = document.getElementById("categoryPanel");
function createCoverImg(item) {
  const heicPath = item.cover;
  const folder = heicPath.slice(0, heicPath.lastIndexOf("/"));
  const candidates = [
    `${folder}/cover.jpg`,
    preferJpg(heicPath),
    heicPath
  ];
  let idx = 0;
  const img = document.createElement("img");
  img.className = "thumb";
  img.alt = item.name;
  if (item.rotate180) img.classList.add("rotate-180");
  if (item.rotate180) img.style.transform = "rotate(180deg)";
  img.addEventListener("error", () => {
    idx += 1;
    if (idx < candidates.length) img.src = candidates[idx];
  });
  img.src = candidates[0];
  return img;
}

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.getElementById("closeBtn");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const counter = document.getElementById("counter");
const strip = document.getElementById("modalStrip");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const metaBox = document.getElementById("meta");

let current = { item: null, folder: "", urls: [], index: 0 };

function toUrls(item) {
  const folder = item.cover.slice(0, item.cover.lastIndexOf("/"));
  const urls = (item.images || []).map(fname => {
    const heic = `${folder}/${fname}`;
    return { jpg: preferJpg(heic), heic, fname };
  });
  return { folder, urls };
}

function setViewer(index) {
  if (!current.urls.length) return;
  current.index = (index + current.urls.length) % current.urls.length;
  const u = current.urls[current.index];
  viewerImg.onerror = null;
  viewerImg.src = u.jpg;
  viewerImg.alt = current.item.name;
  viewerImg.onerror = () => { viewerImg.onerror = null; viewerImg.src = u.heic; };
  counter.textContent = `${current.index + 1} / ${current.urls.length}`;
  Array.from(strip.children).forEach((img, i) => {
    img.classList.toggle("active", i === current.index);
  });
  const active = strip.children[current.index];
  if (active?.scrollIntoView) active.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  // Nach Bildwechsel Größe des Popups an Bildverhältnis anpassen
  viewerImg.onload = () => sizeToImage(viewerImg.naturalWidth, viewerImg.naturalHeight);
}

function openModal(item) {
  current.item = item;
  const map = toUrls(item);
  current.folder = map.folder;
  current.urls = map.urls;
  modalTitle.textContent = item.displayName || item.name;
  // Rotation auf Viewer anwenden
  viewerImg.classList.toggle("rotate-180", !!item.rotate180);
  viewerImg.style.transform = item.rotate180 ? "rotate(180deg)" : "";
  // Metadaten oben anzeigen
  const parts = [];
  if (typeof item.price !== "undefined") {
    if (item.oldPrice) {
      parts.push(`CHF ${item.price} (statt CHF ${item.oldPrice})`);
    } else {
      parts.push(`CHF ${item.price}`);
    }
  }
  if (item.condition) parts.push(item.condition.replace("_"," "));
  if (item.size) parts.push(item.size);
  if (item.colors && item.colors.length) parts.push((item.colors).join(" / "));
  if (item.note) parts.push(item.note);
  metaBox.textContent = parts.join(" • ");
  strip.innerHTML = "";
  const thumbs = current.urls.slice(0, 5); // zeige bis zu 5 unten
  thumbs.forEach((u, i) => {
    const img = document.createElement("img");
    img.alt = item.name;
    img.src = u.jpg;
    if (item.rotate180) img.classList.add("rotate-180");
    if (item.rotate180) img.style.transform = "rotate(180deg)";
    img.onerror = () => { img.onerror = null; img.src = u.heic; };
    img.addEventListener("click", () => setViewer(i));
    strip.appendChild(img);
  });
  setViewer(0);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") return closeModal();
  if (!modal.classList.contains("open")) return;
  if (e.key === "ArrowLeft") setViewer(current.index - 1);
  if (e.key === "ArrowRight") setViewer(current.index + 1);
});
prevBtn.addEventListener("click", () => setViewer(current.index - 1));
nextBtn.addEventListener("click", () => setViewer(current.index + 1));
// swipe on mobile
let touchX = null;
viewer.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
viewer.addEventListener("touchend", (e) => {
  if (touchX == null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) setViewer(current.index + (dx < 0 ? 1 : -1));
  touchX = null;
}, { passive: true });

// Build grid
function annotate(items) {
  const meta = {
    GrauerNikeTech: { displayName: "Nike Tech Fleece – Grau", size: "L", condition: "wie_neu", colors: ["grau"], price: 50, category: "jacke", tags: ["jacke","nike","tech"] },
    KurzeNikeHose: { displayName: "Nike Hose – Kurz, Schwarz", size: "XL", condition: "gebraucht", colors: ["schwarz"], price: 15, category: "hose", tags: ["hose","nike"] },
    MousePad: { displayName: "Gaming Mousepad 88×40", size: "88x40", condition: "gut", colors: ["schwarz"], price: 88, category: "elektronik", soldOut: true, tags: ["elektronik","zubehoer"] },
    BrasilienTrikot: { displayName: "Brasilien Fußballtrikot – Gelb", size: "L", condition: "wie_neu", colors: ["gelb","gruen"], price: 78, oldPrice: 100, category: "trikot", tags: ["trikot"] },
    KappaTrackPants: { displayName: "Kappa Trackpants – Schwarz", size: "XXXL", condition: "wie_neu", colors: ["schwarz"], note: "fällt klein aus", price: 60, category: "hose", tags: ["hose","kappa"] },
    CriminalDamageTee: { displayName: "Criminal Damage T‑Shirt – Verwaschen", size: "M", condition: "gebraucht", colors: ["schwarz"], price: 5, category: "shirt", tags: ["shirt","tiger"] },
    MenaceTee: { displayName: "Menace T‑Shirt – Weiß/Rot/Blau", size: "L", condition: "gebraucht", colors: ["weiß","rot","blau"], price: 10, category: "shirt", tags: ["shirt","menace"] },
    WeissRotSchwarzeMidJordans: { displayName: "Nike Air Jordan Mid – Weiß/Rot/Schwarz", size: "43", condition: "brandneu", colors: ["rot","weiß","schwarz"], price: 60, category: "schuhe", tags: ["schuhe","mid"] },
    BooHooManFlaredJeans: { displayName: "BoohooMAN Flared Jeans – Schwarz/Grau", size: "50", condition: "wie_neu", colors: ["schwarz","grau"], price: 35, oldPrice: 78, rotate180: true, category: "hose", tags: ["hose","flared"] },
    PinkeEspritJacke: { displayName: "Esprit Jacke – Pink", size: "L", condition: "wie_neu", colors: ["pink"], price: 59, oldPrice: 120, rotate180: true, category: "jacke", tags: ["jacke","esprit"] },
    WeinroteNikeTennisSchuhe: { displayName: "Nike Tennisschuhe – Weinrot", size: "44", condition: "wie_neu", colors: ["weinrot"], price: 55, category: "schuhe", tags: ["schuhe"] },
    SchwarzeReacts: { displayName: "Nike React – Schwarz", size: "44", condition: "gebraucht", colors: ["schwarz"], price: 15, category: "schuhe", tags: ["schuhe","react"] },
    WeissBlaueNikeDunks: { displayName: "Nike Dunk – Weiß/Blau", size: "44", condition: "gut", colors: ["weiß","blau"], price: 40, rotate180: true, category: "schuhe", tags: ["schuhe","dunks"] },
    BlauSchwarzeDunks: { displayName: "Nike Dunk – Blau/Schwarz", size: "44", condition: "gut", colors: ["blau","schwarz"], price: 55, category: "schuhe", tags: ["schuhe","dunks"] },
    RotGelbeDunks: { displayName: "Nike Dunk – Rot/Gelb", size: "44.5", condition: "gut", colors: ["rot","gelb"], price: 99, category: "schuhe", tags: ["schuhe","dunks"] },
    GucciSlides: { displayName: "Gucci Slides – Schwarz", size: "44", condition: "gut", colors: ["schwarz"], price: 15, category: "schuhe", tags: ["slides"] },
    SchwarzeTracks: { displayName: "Balenciaga Track – Schwarz", size: "44", condition: "gebraucht", colors: ["schwarz"], price: 25, oldPrice: 35, category: "schuhe", tags: ["schuhe","track"] },
    WeisseTracks: { displayName: "Balenciaga Track – Weiß", size: "44", condition: "gut", colors: ["weiß"], price: 35, category: "schuhe", tags: ["schuhe","track"] },
    BurberrySchal: { displayName: "Burberry Schal – Check", size: "onesize", condition: "wie_neu", colors: ["grau","rot","weiß"], price: 15, category: "schal", tags: ["schal"] },
    GAPPullover: { displayName: "GAP Pullover – Schwarz", size: "L", condition: "gut", colors: ["schwarz"], price: 30, category: "pullover", tags: ["pullover","gap"] },
    HandyController: { displayName: "Game Controller – Handy", size: "onesize", condition: "brandneu", colors: ["schwarz"], price: 20, category: "elektronik", tags: ["controller","elektronik"] },
    JordanJersey: { displayName: "Jordan Jersey – Schwarz/Rot", size: "M", condition: "gut", colors: ["schwarz","rot"], price: 25, category: "trikot", tags: ["trikot","jordan"] },
    LA23Jersey: { displayName: "LA 23 Jersey – Grau", size: "XL", condition: "wie_neu", colors: ["grau"], price: 15, category: "trikot", tags: ["trikot"] },
    "MausMitUsb:Bluetooth": { displayName: "Maus – USB & Bluetooth", size: "onesize", condition: "gut", colors: ["schwarz"], price: 10, category: "elektronik", soldOut: true, tags: ["maus","elektronik"] },
    NOFSjoggerPink: { displayName: "NOFS Jogger – Pink", size: "XL", condition: "brandneu", colors: ["pink"], price: 85, oldPrice: 110, category: "hose", tags: ["hose"] },
    PinkeCorteizSpringJacket: { displayName: "Corteiz Spring Jacket – Pink", size: "L", condition: "gut", colors: ["pink"], price: 99, oldPrice: 120, rotate180: true, category: "jacke", tags: ["jacke","corteiz"] },
    SchnelleBrillen: { displayName: "Sportbrille", size: "onesize", condition: "brandneu", colors: ["schwarz"], price: 9, oldPrice: 18, category: "brille", tags: ["brille","accessoire"] },
    Tastatur: { displayName: "Tastatur – Schwarz", size: "onesize", condition: "wie_neu", colors: ["schwarz"], price: 49, category: "elektronik", soldOut: true, tags: ["tastatur","elektronik"] },
  };
  return items.map(it => {
    const m = meta[it.name] || {};
    return { ...it, ...m };
  });
}

const allItems = annotate(items);
let visible = [...allItems];

// filter state (Zalando-like)
const FILTERS = {
  conditions: [],
  sizes: [],
  colors: [],
  categories: [],
};

const OPTIONS = {
  conditions: ["brandneu","wie_neu","gut","gebraucht"],
  sizes: ["onesize","88x40","50","S","M","L","XL","XXL","XXXL","42","43","44","44.5"],
  colors: ["schwarz","weiß","rot","blau","grau","gelb","grün","pink","weinrot"],
  categories: ["schuhe","pullover","jacke","hose","shirt","trikot","schal","brille","elektronik"],
};

function updateFilterButtonLabels() {
  condBtn.dataset.count = FILTERS.conditions.length ? `(${FILTERS.conditions.length})` : "";
  sizeBtn.dataset.count = FILTERS.sizes.length ? `(${FILTERS.sizes.length})` : "";
  colorBtn.dataset.count = FILTERS.colors.length ? `(${FILTERS.colors.length})` : "";
  catBtn.dataset.count = FILTERS.categories.length ? `(${FILTERS.categories.length})` : "";
}

function renderPanel(type, panel, btn) {
  const current = new Set(FILTERS[type]);
  const opts = OPTIONS[type];
  const rect = btn.getBoundingClientRect();
  panel.style.top = `${rect.bottom + window.scrollY + 6}px`;
  panel.style.left = `${rect.left + window.scrollX}px`;
  panel.innerHTML = `
    <h4>${btn.textContent}</h4>
    <div class="options">
      ${opts.map(v => `
        <label class="option">
          <input type="checkbox" value="${v}" ${current.has(v) ? "checked" : ""} />
          <span>${v}</span>
        </label>
      `).join("")}
    </div>
    <div class="actions">
      <button class="btn" data-action="reset">Zurücksetzen</button>
    </div>
  `;
  panel.classList.add("open");
  btn.setAttribute("aria-expanded","true");

  panel.onclick = (e) => {
    const a = e.target.closest("button");
    if (!a) return;
    if (a.dataset.action === "reset") {
      FILTERS[type] = [];
      updateFilterButtonLabels();
      applyFilters();
      // alle Checkboxen im Panel ebenfalls visuell zurücksetzen
      panel.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
    }
  };
  // Direkt filtern beim Anklicken
  panel.addEventListener("change", (e) => {
    if (e.target && e.target.matches('input[type="checkbox"]')) {
      const checked = Array.from(panel.querySelectorAll('input[type="checkbox"]:checked')).map(i => i.value);
      FILTERS[type] = checked;
      updateFilterButtonLabels();
      applyFilters();
    }
  });
}

function closePanel(panel, btn) {
  panel.classList.remove("open");
  btn.setAttribute("aria-expanded","false");
}

condBtn.addEventListener("click", () => {
  if (panelCond.classList.contains("open")) { closePanel(panelCond, condBtn); return; }
  closePanel(panelSize, sizeBtn);
  closePanel(panelColor, colorBtn);
  renderPanel("conditions", panelCond, condBtn);
});
sizeBtn.addEventListener("click", () => {
  if (panelSize.classList.contains("open")) { closePanel(panelSize, sizeBtn); return; }
  closePanel(panelCond, condBtn);
  closePanel(panelColor, colorBtn);
  renderPanel("sizes", panelSize, sizeBtn);
});
colorBtn.addEventListener("click", () => {
  if (panelColor.classList.contains("open")) { closePanel(panelColor, colorBtn); return; }
  closePanel(panelCond, condBtn);
  closePanel(panelSize, sizeBtn);
  renderPanel("colors", panelColor, colorBtn);
});
catBtn.addEventListener("click", () => {
  if (panelCat.classList.contains("open")) { closePanel(panelCat, catBtn); return; }
  closePanel(panelCond, condBtn);
  closePanel(panelSize, sizeBtn);
  closePanel(panelColor, colorBtn);
  renderPanel("categories", panelCat, catBtn);
});

document.addEventListener("click", (e) => {
  const within = e.target.closest(".popover") || e.target.closest(".filter-btn");
  if (!within) {
    closePanel(panelCond, condBtn);
    closePanel(panelSize, sizeBtn);
    closePanel(panelColor, colorBtn);
    closePanel(panelCat, catBtn);
  }
});

function render() {
  grid.innerHTML = "";
  visible.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item";
    if (item.soldOut) li.classList.add("soldout");
    li.appendChild(createCoverImg(item));
    if (item.soldOut) {
      const so = document.createElement("span");
      so.className = "soldout-ribbon";
      so.textContent = "AUSVERKAUFT";
      li.appendChild(so);
    }
    if (item.oldPrice && item.price && item.price < item.oldPrice) {
      const pct = Math.round((1 - (item.price / item.oldPrice)) * 100);
      if (pct > 0) {
        const db = document.createElement("span");
        db.className = "discount-badge";
        db.textContent = `-${pct}%`;
        db.setAttribute("aria-label", `Rabatt ${pct} Prozent`);
        li.appendChild(db);
      }
    }
    const label = document.createElement("div");
    label.className = "label";
    const title = item.displayName || item.name;
    const priceHtml = typeof item.price !== "undefined"
      ? `<div class="price-group">${item.oldPrice ? `<span class="old-price">CHF ${item.oldPrice}</span>` : ""}<span class="price-tag">CHF ${item.price}</span></div>`
      : "";
    label.innerHTML = `
      <div class="title">${title}</div>
      <div class="meta-line">
        ${priceHtml}
        <div class="badge-stack">
          ${item.size ? `<span class="badge">${item.size}</span>` : ""}
          ${item.condition ? `<span class="badge">${item.condition.replace("_"," ")}</span>` : ""}
        </div>
      </div>
    `;
    li.appendChild(label);
    if (!item.soldOut) {
      li.addEventListener("click", () => openModal(item));
    } else {
      li.setAttribute("aria-disabled", "true");
      li.title = "Ausverkauft";
    }
    grid.appendChild(li);
  });
}

function normalize(str) {
  return (str || "").toString().toLowerCase();
}

function applyFilters() {
  const q = normalize(qInput.value);
  const conds = FILTERS.conditions.map(normalize);
  const sizes = FILTERS.sizes.map(normalize);
  const colors = FILTERS.colors.map(normalize);
  const cats = FILTERS.categories.map(normalize);
  visible = allItems.filter(it => {
    const nameOK = !q || normalize((it.displayName || it.name) + " " + (it.tags||[]).join(" ")).includes(q);
    const condOK = conds.length === 0 || conds.includes(normalize(it.condition));
    const sizeOK = sizes.length === 0 || sizes.includes(normalize(it.size));
    const colorOK = colors.length === 0 || (it.colors||[]).some(c => colors.includes(normalize(c)));
    const catOK = cats.length === 0 || cats.includes(normalize(it.category));
    return nameOK && condOK && sizeOK && colorOK && catOK;
  });
  render();
}

qInput.addEventListener("input", applyFilters);
updateFilterButtonLabels();

render();


function sizeToImage(nw, nh) {
  if (!nw || !nh) return;
  const ratio = nw / nh;
  const card = document.querySelector(".modal-card");
  const header = document.querySelector(".modal-header");
  const headerH = header?.offsetHeight || 52;
  const thumbsH = 96;
  const bodyPaddingX = 24;   // modal-body padding left+right
  const extraY = 12 /*top body*/ + 12 /*gap*/ + 12 /*bottom body*/;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxCardW = Math.min(vw * 0.9, 1100);
  const maxCardH = Math.min(vh * 0.9, vh - 40);

  const availW = maxCardW - bodyPaddingX;
  const availH = maxCardH - headerH - thumbsH - extraY;

  let viewerW, viewerH;
  if (availW / availH > ratio) {
    viewerH = availH;
    viewerW = viewerH * ratio;
  } else {
    viewerW = availW;
    viewerH = viewerW / ratio;
  }

  viewer.style.width = `${viewerW}px`;
  viewer.style.height = `${viewerH}px`;
  card.style.width = `${Math.ceil(viewerW + bodyPaddingX)}px`;
  card.style.height = `${Math.ceil(headerH + extraY + viewerH + thumbsH)}px`;
}

window.addEventListener("resize", () => {
  if (viewerImg.naturalWidth && viewerImg.naturalHeight && modal.classList.contains("open")) {
    sizeToImage(viewerImg.naturalWidth, viewerImg.naturalHeight);
  }
});


