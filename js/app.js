document.addEventListener("DOMContentLoaded", () => {
  // 1. DYNAMIC HEADER RENDERING
  renderHeader();

  // 2. DYNAMIC FOOTER RENDERING
  renderFooter();

  // 3. DYNAMIC CONTENT RENDERING (For Terms and Privacy Pages)
  renderPageContent();
});

/**
 * Renders the global shared header component
 */
function renderHeader() {
  const headerElement = document.getElementById("app-header");
  if (!headerElement) return;

  // Determine active page file name
  const path = window.location.pathname;
  let currentPage = path.split("/").pop();
  if (currentPage === "" || !currentPage) {
    currentPage = "index.html";
  }

  // Build Navigation Links HTML
  const navLinksHTML = GLYDE_CONFIG.navigation
    .map(link => {
      const isActive = currentPage === link.url ? "active" : "";
      return `<li><a href="${link.url}" class="nav-link ${isActive}">${link.label}</a></li>`;
    })
    .join("");

  headerElement.innerHTML = `
    <div class="header-container">
      <a href="index.html" class="brand-wrapper">
        <img src="${GLYDE_CONFIG.brand.logo}" alt="${GLYDE_CONFIG.brand.name} Logo" class="brand-logo">
        <span class="brand-name">${GLYDE_CONFIG.brand.name}</span>
      </a>
      <nav>
        <ul class="nav-menu">
          ${navLinksHTML}
        </ul>
      </nav>
    </div>
  `;

  // Apply Brand Gold background color dynamically
  headerElement.style.backgroundColor = GLYDE_CONFIG.brand.brandGold;
}

/**
 * Renders the global shared footer component
 */
function renderFooter() {
  const footerElement = document.getElementById("app-footer");
  if (!footerElement) return;

  footerElement.innerHTML = `
    <div class="footer-container">
      <img src="${GLYDE_CONFIG.brand.logo}" alt="${GLYDE_CONFIG.brand.name} Logo" class="footer-logo">
      <p class="footer-copyright">${GLYDE_CONFIG.footer.copyright}</p>
    </div>
  `;
}

/**
 * Identifies and dynamically populates page-specific legal text
 */
function renderPageContent() {
  const docContainer = document.getElementById("doc-page-container");
  if (!docContainer) return;

  // Determine which page we are rendering based on data-page attribute
  const pageType = docContainer.getAttribute("data-page");
  if (!pageType || !GLYDE_CONFIG.pages[pageType]) return;

  const pageData = GLYDE_CONFIG.pages[pageType];

  // 1. Update browser tab title
  document.title = `${pageData.title} | ${GLYDE_CONFIG.brand.name} Delivery`;

  // Determine the display tag for this type of document
  const tagMap = {
    terms: "Legal Agreements",
    privacy: "User Privacy",
    contact: "User Support"
  };
  const docTag = tagMap[pageType] || "General Information";

  // 2. Build Document Header Card HTML
  const headerCardHTML = `
    <div class="doc-header-card">
      <span class="doc-tag">${docTag}</span>
      <h1 class="doc-title">${pageData.title}</h1>
      <div class="doc-meta">
        <!-- Modern Calendar SVG Icon -->
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
        </svg>
        <span>${pageData.lastUpdated}</span>
      </div>
      <p class="doc-intro">${pageData.introduction}</p>
    </div>
  `;

  // 3. Build Document Section Cards HTML
  const sectionsHTML = pageData.sections
    .map(section => {
      let contentHTML = "";

      // Render section description if defined
      if (section.description) {
        contentHTML += `<p class="doc-section-text" style="margin-bottom: 1rem;">${escapeHtml(section.description)}</p>`;
      }

      // Handle arrays of bullets (like in Privacy Policy information collect)
      if (Array.isArray(section.content)) {
        contentHTML += `
          <ul class="doc-list">
            ${section.content
              .map(item => `<li class="doc-list-item">${escapeHtml(item)}</li>`)
              .join("")}
          </ul>
        `;
      } else {
        // Replace single newlines with break tags, double newlines as paragraphs if needed
        const formattedText = escapeHtml(section.content).replace(/\n/g, "<br>");
        contentHTML += `<p class="doc-section-text">${formattedText}</p>`;
      }

      return `
        <div class="doc-section-card">
          <h2 class="doc-section-title">${escapeHtml(section.heading)}</h2>
          ${contentHTML}
        </div>
      `;
    })
    .join("");

  // 4. Inject everything into the document
  docContainer.innerHTML = `
    ${headerCardHTML}
    <div class="doc-sections-wrapper">
      ${sectionsHTML}
    </div>
  `;
}

/**
 * Utility function to prevent XSS by escaping HTML entities
 */
function escapeHtml(text) {
  if (typeof text !== "string") return text;
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
