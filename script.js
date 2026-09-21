const fans = [
  {
    id: 1,
    name: "Breeze Stand 16",
    type: "Stand Fan",
    category: "Stand Fan",
    className: "stand",
    description: "A tall everyday fan concept designed for flexible room cooling and easy positioning.",
    use: "Bedrooms, living rooms, study areas, and general indoor spaces.",
    highlights: "Tall adjustable design with broad airflow coverage.",
    features: ["3 speed settings", "Wide oscillation", "Adjustable height", "Adjustable angle", "Easy controls", "Energy-aware design"],
    materials: [
      ["Fan Blades", "Lightweight molded material for air circulation."],
      ["Protective Grille", "Grille surrounding the rotating blades."],
      ["Motor", "Drives the fan blades."],
      ["Plastic Housing", "Outer body around the internal parts."],
      ["Stand/Base", "Provides support and stability."],
      ["Control Panel", "Contains the basic operating controls."]
    ],
    specs: {
      "Model": "Breeze Stand 16",
      "Fan Type": "Stand Fan",
      "Fan Size": "16 inches (demo)",
      "Number of Blades": "3 (demo)",
      "Speed Settings": "3 (demo)",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "Yes (demo)",
      "Adjustable Height": "Yes (demo)"
    }
  },
  {
    id: 2,
    name: "Study Desk Mini",
    type: "Desk / Table Fan",
    category: "Desk Fan",
    className: "desk",
    description: "A compact fan concept made for desks, study corners, and smaller personal spaces.",
    use: "Study desks, work tables, bedside tables, and compact rooms.",
    highlights: "Small footprint with an adjustable airflow direction.",
    features: ["Compact design", "Adjustable angle", "3 speed settings", "Quiet-operation concept", "Stable base", "Easy controls"],
    materials: [
      ["Fan Blades", "Compact blades designed for personal airflow."],
      ["Protective Grille", "Protective cover around the blades."],
      ["Motor", "Turns the blades to create airflow."],
      ["Plastic Housing", "Light outer body."],
      ["Stand/Base", "Keeps the desk fan stable."],
      ["Control Panel", "Basic speed and power controls."]
    ],
    specs: {
      "Model": "Study Desk Mini",
      "Fan Type": "Desk / Table Fan",
      "Fan Size": "Demo compact size",
      "Number of Blades": "3 (demo)",
      "Speed Settings": "3 (demo)",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "Demo dependent",
      "Adjustable Angle": "Yes (demo)"
    }
  },
  {
    id: 3,
    name: "Wall Breeze 16",
    type: "Wall-Mounted Fan",
    category: "Wall Fan",
    className: "wall",
    description: "A wall-mounted fan concept that saves floor space while keeping adjustable airflow nearby.",
    use: "Rooms where floor space is limited.",
    highlights: "Wall-mounted form with directional airflow.",
    features: ["Space-saving installation", "Oscillation", "3 speed settings", "Adjustable angle", "Wall bracket", "Easy controls"],
    materials: [
      ["Fan Blades", "Blades designed to circulate air."],
      ["Protective Grille", "Protective front and rear grille."],
      ["Motor", "Rotates the blades."],
      ["Plastic Housing", "Protective outer casing."],
      ["Wall Bracket", "Supports the fan on a wall."],
      ["Control Panel", "Basic operating controls."]
    ],
    specs: {
      "Model": "Wall Breeze 16",
      "Fan Type": "Wall-Mounted Fan",
      "Fan Size": "16 inches (demo)",
      "Number of Blades": "3 (demo)",
      "Speed Settings": "3 (demo)",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "Yes (demo)",
      "Installation": "Wall mounted (demo)"
    }
  },
  {
    id: 4,
    name: "Tower Flow",
    type: "Tower Fan",
    category: "Tower Fan",
    className: "tower",
    description: "A slim vertical fan concept for spaces where a tall, narrow footprint is useful.",
    use: "Bedrooms, apartments, offices, and narrow corners.",
    highlights: "Slim vertical body with multiple airflow modes.",
    features: ["Slim design", "Multiple airflow modes", "Oscillation", "Timer concept", "Compact footprint", "Easy controls"],
    materials: [
      ["Air Outlet", "Vertical opening for distributing airflow."],
      ["Protective Housing", "Outer shell around the internal fan system."],
      ["Motor", "Drives the internal rotating mechanism."],
      ["Base", "Supports the tower body."],
      ["Control Panel", "Operating buttons or controls."],
      ["Internal Grille", "Helps protect internal components."]
    ],
    specs: {
      "Model": "Tower Flow",
      "Fan Type": "Tower Fan",
      "Body": "Slim vertical design (demo)",
      "Speed Settings": "Multiple (demo)",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "Yes (demo)",
      "Timer": "Demo feature"
    }
  },
  {
    id: 5,
    name: "Box Air 20",
    type: "Box Fan",
    category: "Box Fan",
    className: "box",
    description: "A square fan concept with a broad front grille for straightforward room airflow.",
    use: "Windows, floors, workshops, and larger open areas.",
    highlights: "Square body with a wide front airflow area.",
    features: ["Square body", "Wide front grille", "Multiple speeds", "Portable form", "Stable frame", "Easy controls"],
    materials: [
      ["Fan Blades", "Large blades for moving air."],
      ["Front Grille", "Protective square grille."],
      ["Motor", "Turns the fan blades."],
      ["Square Housing", "Supports and protects the fan assembly."],
      ["Base Feet", "Keep the box fan stable."],
      ["Control Panel", "Basic operating controls."]
    ],
    specs: {
      "Model": "Box Air 20",
      "Fan Type": "Box Fan",
      "Fan Size": "20 inches (demo)",
      "Number of Blades": "3 (demo)",
      "Speed Settings": "3 (demo)",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "No (demo)",
      "Body": "Square frame"
    }
  },
  {
    id: 6,
    name: "Force Industrial",
    type: "Industrial / Heavy-Duty Fan",
    category: "Industrial Fan",
    className: "industrial",
    description: "A heavy-duty fan concept intended for stronger airflow in larger working environments.",
    use: "Workshops, warehouses, garages, and other large spaces.",
    highlights: "Large protective grille and heavy-duty visual design.",
    features: ["Heavy-duty airflow", "Large fan blades", "Durable construction", "Strong base", "Multiple speeds", "Directional airflow"],
    materials: [
      ["Fan Blades", "Large blades intended for strong airflow."],
      ["Metal Grille", "Heavy protective grille concept."],
      ["Motor", "Drives the larger blade assembly."],
      ["Metal Housing", "Durable outer structure concept."],
      ["Heavy Base", "Supports the fan during operation."],
      ["Control Panel", "Basic operating controls."]
    ],
    specs: {
      "Model": "Force Industrial",
      "Fan Type": "Industrial / Heavy-Duty Fan",
      "Fan Size": "Large (demo)",
      "Number of Blades": "Demo design",
      "Speed Settings": "Multiple (demo)",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "Demo dependent",
      "Construction": "Heavy-duty concept"
    }
  },
  {
    id: 7,
    name: "Fresh Wall Exhaust",
    type: "Exhaust Fan",
    category: "Exhaust Fan",
    className: "exhaust",
    description: "A square exhaust fan concept designed to fit into a wall opening and help move stale air outside.",
    use: "Kitchens, utility rooms, bathrooms, and other ventilated spaces.",
    highlights: "Square wall-mounted form with a practical ventilation focus.",
    features: ["Square frame", "Wall-mounted design", "Ventilation focused", "Protective grille", "Compact footprint", "Simple controls"],
    materials: [
      ["Fan Blades", "Compact blades for air movement."],
      ["Front Grille", "Protective square cover."],
      ["Motor", "Turns the blades."],
      ["Plastic Frame", "Fits around the fan assembly."],
      ["Wall Mount", "Supports the unit in an opening."],
      ["Control Panel", "Basic operating control."]
    ],
    specs: {
      "Model": "Fresh Wall Exhaust",
      "Fan Type": "Exhaust Fan",
      "Frame": "Square (demo)",
      "Number of Blades": "Demo design",
      "Speed Settings": "Demo dependent",
      "Power": "Sample wattage",
      "Voltage": "220V (demo)",
      "Oscillation": "No",
      "Installation": "Wall mounted"
    }
  }
];

const categoryButtons = document.getElementById("categoryButtons");
const productsGrid = document.getElementById("productsGrid");
const homePage = document.getElementById("homePage");
const productPage = document.getElementById("productPage");
const selectedFan = document.getElementById("selectedFan");
const productTitle = document.getElementById("productTitle");
const infoHeading = document.getElementById("infoHeading");
const infoPanel = document.getElementById("infoPanel");
const fanStatus = document.getElementById("fanStatus");

let currentFan = fans[0];
let currentSection = "description";
let isChangingSection = false;

/* Scroll-Driven Wind Particle Effect */
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const delta = Math.abs(currentScrollY - lastScrollY);

  if (delta > 8) {
    createScrollWindParticle();
  }
  lastScrollY = currentScrollY;
});

function createScrollWindParticle() {
  const particle = document.createElement("div");
  particle.className = "scroll-wind-particle";
  
  const width = Math.random() * 120 + 80;
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * (window.innerWidth - width);
  const distX = Math.random() * 250 + 100;

  particle.style.width = `${width}px`;
  particle.style.top = `${top}px`;
  particle.style.left = `${left}px`;
  particle.style.setProperty("--distX", `${distX}px`);

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 700);
}

/* Page Transition Wind Effect Function */
function triggerWindPageTransition(targetUrl) {
  let transitionOverlay = document.getElementById("pageWindOverlay");
  if (!transitionOverlay) {
    transitionOverlay = document.createElement("div");
    transitionOverlay.id = "pageWindOverlay";
    transitionOverlay.className = "page-wind-transition";
    document.body.appendChild(transitionOverlay);
  }

  transitionOverlay.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const streak = document.createElement("div");
    streak.className = "streak";
    streak.style.top = `${Math.random() * 100}%`;
    streak.style.width = `${Math.random() * 300 + 150}px`;
    streak.style.animationDelay = `${Math.random() * 0.2}s`;
    transitionOverlay.appendChild(streak);
  }

  transitionOverlay.classList.add("active");

  setTimeout(() => {
    window.location.href = targetUrl;
  }, 450);
}

// Add page transition listeners to header links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a, .logo").forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && href !== "javascript:void(0);") {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        triggerWindPageTransition(href);
      });
    }
  });
});

function createCategoryButtons() {
  if (!categoryButtons) return;
  const categories = [...new Set(fans.map(fan => fan.category))];

  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "category-button";
    button.textContent = category;
    button.dataset.category = category;

    if (index === 0) button.classList.add("active");

    button.addEventListener("click", () => {
      document.querySelectorAll(".category-button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      showProducts(category);
    });

    categoryButtons.appendChild(button);
  });
}

function showProducts(category) {
  if (!productsGrid) return;
  productsGrid.classList.remove("animate");
  void productsGrid.offsetWidth;
  productsGrid.classList.add("animate");

  const matchingFans = fans.filter(fan => fan.category === category);

  productsGrid.innerHTML = matchingFans.map(fan => `
    <article class="product-card">
      <div class="product-visual">
        ${createFanHTML(fan.className)}
      </div>
      <div class="product-card-body">
        <span class="type">${fan.type.toUpperCase()}</span>
        <h3>${fan.name}</h3>
        <p>${fan.description}</p>
        <button class="view-button" data-id="${fan.id}">View Fan</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".view-button").forEach(button => {
    button.addEventListener("click", () => {
      const fan = fans.find(item => item.id === Number(button.dataset.id));
      openProduct(fan);
    });
  });
}

function createFanHTML(className) {
  return `
    <div class="css-fan ${className}">
      <div class="fan-head">
        <div class="fan-grille-back"></div>
        <div class="fan-blades"></div>
        <div class="fan-grille-front"></div>
        <div class="fan-center"><div class="badge">ASAHI</div></div>
      </div>
      <div class="fan-neck"></div>
      <div class="fan-pole"></div>
      <div class="fan-base"></div>
    </div>
  `;
}

function openProduct(fan) {
  currentFan = fan;
  currentSection = "description";

  selectedFan.className = `css-fan ${fan.className}`;
  selectedFan.innerHTML = `
    <div class="fan-head">
      <div class="fan-grille-back"></div>
      <div class="fan-blades"></div>
      <div class="fan-grille-front"></div>
      <div class="fan-center"><div class="badge">ASAHI</div></div>
    </div>
    <div class="fan-neck"></div>
    <div class="fan-pole"></div>
    <div class="fan-base"></div>
  `;

  productTitle.textContent = fan.name.toUpperCase();
  homePage.classList.add("hidden");
  productPage.classList.remove("hidden");

  updateNavigationButtons();
  renderSection("description");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSection(section) {
  if (!infoHeading || !infoPanel) return;
  infoHeading.textContent = capitalize(section);

  if (section === "description") {
    infoPanel.innerHTML = `
      <span class="sub">${currentFan.type.toUpperCase()}</span>
      <h2>${currentFan.name}</h2>
      <p>${currentFan.description}</p>

      <div class="highlight">
        <strong>Intended use:</strong><br>
        ${currentFan.use}
      </div>

      <div class="highlight">
        <strong>Product highlight:</strong><br>
        ${currentFan.highlights}
      </div>
    `;
  }

  if (section === "features") {
    infoPanel.innerHTML = `
      <span class="sub">DEMO FEATURES</span>
      <h2>Features</h2>
      <p>Possible features for this demo product concept are listed below.</p>
      <ul class="feature-list">
        ${currentFan.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>
    `;
  }

  if (section === "materials") {
    infoPanel.innerHTML = `
      <span class="sub">DEMO MATERIALS</span>
      <h2>Materials</h2>
      <p>A simple breakdown of the major parts used in the fan concept.</p>
      <div class="material-grid">
        ${currentFan.materials.map(material => `
          <div class="material-card">
            <strong>${material[0]}</strong>
            <span>${material[1]}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (section === "specifications") {
    infoPanel.innerHTML = `
      <span class="sub">SAMPLE SPECIFICATIONS</span>
      <h2>Specifications</h2>
      <p>These values are demo data for the student website and should be replaced with verified product information if used for a real shop.</p>
      <table class="spec-table">
        <tbody>
          ${Object.entries(currentFan.specs).map(([key, value]) => `
            <tr>
              <td>${key}</td>
              <td>${value}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }
}

function spawnBreezeParticles() {
  const fanArea = document.querySelector(".fan-area");
  if (!fanArea) return;
  for (let i = 0; i < 18; i++) {
    const particle = document.createElement("div");
    particle.className = "breeze-particle";
    
    const size = Math.random() * 6 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = `${Math.random() * 40 + 40}%`;
    particle.style.top = `${Math.random() * 50 + 25}%`;
    
    const randomY = (Math.random() - 0.5) * 120;
    particle.style.setProperty("--ty", `${randomY}px`);

    fanArea.appendChild(particle);

    setTimeout(() => { particle.remove(); }, 800);
  }
}

function toggleControls(disabled) {
  document.querySelectorAll(".info-button, #backButton, #productLogo").forEach(el => {
    el.style.pointerEvents = disabled ? "none" : "";
    el.style.opacity = disabled ? "0.65" : "";
  });
}

function changeSection(newSection) {
  if (isChangingSection || newSection === currentSection) return;

  isChangingSection = true;
  toggleControls(true);

  productPage.classList.add("blowing");
  fanStatus.textContent = "POWERING UP • TURBO AIRFLOW";
  spawnBreezeParticles();

  infoPanel.classList.remove("new-panel");
  infoPanel.classList.add("blow-away");

  setTimeout(() => {
    currentSection = newSection;
    renderSection(newSection);

    infoPanel.classList.remove("blow-away");
    void infoPanel.offsetWidth;
    infoPanel.classList.add("new-panel");

    infoHeading.textContent = capitalize(newSection);
    updateNavigationButtons();
    fanStatus.textContent = "WIND • REVEALING DETAILS";
  }, 650);

  setTimeout(() => {
    productPage.classList.remove("blowing");
    fanStatus.textContent = "IDLE • READY";
    isChangingSection = false;
    toggleControls(false);
  }, 1250);
}

function updateNavigationButtons() {
  document.querySelectorAll(".info-button").forEach(button => {
    button.classList.toggle("active", button.dataset.section === currentSection);
  });
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

document.querySelectorAll(".info-button").forEach(button => {
  button.addEventListener("click", () => {
    changeSection(button.dataset.section);
  });
});

if (document.getElementById("backButton")) {
  document.getElementById("backButton").addEventListener("click", () => {
    if (isChangingSection) return;
    isChangingSection = true;
    toggleControls(true);

    productPage.classList.add("blowing");
    fanStatus.textContent = "WIND • RETURNING HOME";
    spawnBreezeParticles();

    setTimeout(() => {
      productPage.classList.add("hidden");
      homePage.classList.remove("hidden");
      productPage.classList.remove("blowing");
      fanStatus.textContent = "IDLE • READY";
      isChangingSection = false;
      toggleControls(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 650);
  });
}

createCategoryButtons();
if (fans.length > 0) showProducts(fans[0].category);