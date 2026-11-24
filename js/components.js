/**
 * Kentainers Limited - Shared UI Components
 * Injects Top Bar, Sticky Header, Main Navigation, Mobile Drawer,
 * Multi-column Footer, and Floating WhatsApp Button.
 * 
 * Safe, verified copy only. All paths are strictly relative.
 */

(function () {
  'use strict';

  // SVG Icons
  const ICONS = {
    phone: `<svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
    mail: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>`,
    search: `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    chevronDown: `<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`,
    chevronRight: `<svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>`,
    close: `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.49 0-2.96-.4-4.24-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 11-2 2 2 2 0 012-2z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    quote: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`
  };

  // Determine current active page
  function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().toLowerCase();
    if (!page || page === 'index.html' || page === '') return 'index.html';
    return page;
  }

  const currentPage = getCurrentPage();

  // Top Bar HTML
  function getTopBarHTML() {
    return `
      <div class="site-topbar" role="region" aria-label="Quick contact and social links">
        <div class="container">
          <div class="topbar-content">
            <div class="topbar-left">
              <a href="tel:+254702233258" class="topbar-link" aria-label="Call customer service at +254 702 233258">
                ${ICONS.phone}
                <span>+254 702 233258</span>
              </a>
              <!-- TODO: confirm email address with client -->
              <a href="mailto:info@kentainers.co.ke" class="topbar-link" aria-label="Email customer service at info@kentainers.co.ke">
                ${ICONS.mail}
                <span>info@kentainers.co.ke</span>
              </a>
              <span class="topbar-tagline d-none d-md-inline">OVER 35 YEARS OF MANUFACTURING IN KENYA</span>
            </div>
            <div class="topbar-right">
              <!-- TODO: confirm factory locations with client -->
              <span class="topbar-tagline">Plants: Nairobi | Kilifi | Kisumu</span>
              <div class="social-links" aria-label="Follow Kentainers Limited on Social Media">
                <a href="https://facebook.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Kentainers on Facebook">${ICONS.facebook}</a>
                <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Kentainers on Twitter/X">${ICONS.twitter}</a>
                <a href="https://linkedin.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Kentainers on LinkedIn">${ICONS.linkedin}</a>
                <a href="https://instagram.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Kentainers on Instagram">${ICONS.instagram}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Header HTML with Search Form & Live Suggestions Dropdown
  function getHeaderHTML() {
    return `
      <header class="site-header" id="main-site-header" role="banner">
        <div class="container">
          <div class="header-main-row">
            <!-- Brand Logo -->
            <div class="header-logo-wrap">
              <a href="index.html" aria-label="Kentainers Limited Home">
                <img src="images/web/logo.png" alt="Kentainers Limited - Manufacturers of KENTANK Water Storage Solutions" class="header-logo" width="418" height="120" fetchpriority="high">
              </a>
            </div>

            <!-- Central Product Search Bar with Category Dropdown -->
            <div class="header-search-wrap">
              <form action="shop.html" method="GET" class="header-search-form" role="search" id="headerSearchForm" autocomplete="off">
                <select name="category" class="search-category-select" id="headerSearchCategory" aria-label="Filter search by category">
                  <option value="all">All Categories</option>
                  <option value="water-storage">Water Storage</option>
                  <option value="pipes-fittings">Pipes & Fittings</option>
                  <option value="sanitation-waste">Sanitation & Waste</option>
                  <option value="agriculture-biogas">Agriculture & Biogas</option>
                  <option value="material-handling">Material Handling</option>
                  <option value="furniture-qdesk">Furniture & QDesk</option>
                </select>
                <input type="text" name="q" id="headerSearchInput" class="search-input" placeholder="Search tanks, pipes, mobilet, qdesk..." aria-label="Search catalogue products" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="headerSearchSuggestions" required>
                <button type="submit" class="search-submit-btn" aria-label="Submit Search">
                  ${ICONS.search}
                </button>
              </form>

              <!-- Live Search Suggestions Container -->
              <div class="search-suggestions-dropdown" id="headerSearchSuggestions" role="listbox" aria-label="Search Suggestions"></div>
            </div>

            <!-- Header Right CTA & Mobile Toggle -->
            <div class="header-actions">
              <a href="request-a-quote.html" class="btn btn-accent btn-quote-desktop">
                ${ICONS.quote}
                <span>Request a Quote</span>
              </a>
              <button type="button" class="mobile-menu-toggle" id="mobileMenuOpenBtn" aria-label="Open mobile navigation menu" aria-expanded="false" aria-controls="mobileDrawer">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Main Desktop Navigation Bar -->
        <nav class="site-navigation" aria-label="Main Navigation">
          <div class="container">
            <div class="nav-container">
              <ul class="primary-menu">
                <li class="menu-item ${currentPage === 'index.html' ? 'active' : ''}">
                  <a href="index.html" class="menu-link">Home</a>
                </li>
                <li class="menu-item ${currentPage === 'shop.html' || currentPage === 'product.html' ? 'active' : ''}">
                  <a href="shop.html" class="menu-link" aria-haspopup="true">
                    <span>Products & Catalogue</span>
                    ${ICONS.chevronDown}
                  </a>
                  <ul class="dropdown-menu" aria-label="Product categories submenu">
                    <li><a href="shop.html" class="dropdown-link"><strong>View All Products</strong></a></li>
                    <li><a href="shop.html?category=water-storage" class="dropdown-link">Water Storage (KENTANK)</a></li>
                    <li><a href="shop.html?category=pipes-fittings" class="dropdown-link">Pipes & Fittings (HDPE & PVC)</a></li>
                    <li><a href="shop.html?category=sanitation-waste" class="dropdown-link">Sanitation & Waste (Mobilet)</a></li>
                    <li><a href="shop.html?category=agriculture-biogas" class="dropdown-link">Agriculture & Biogas (Silos, Troughs)</a></li>
                    <li><a href="shop.html?category=material-handling" class="dropdown-link">Material Handling (Drums, Pallets)</a></li>
                    <li><a href="shop.html?category=furniture-qdesk" class="dropdown-link">Furniture & QDesk Solutions</a></li>
                  </ul>
                </li>
                <li class="menu-item ${currentPage === 'about-us.html' ? 'active' : ''}">
                  <a href="about-us.html" class="menu-link">About Us</a>
                </li>
                <li class="menu-item ${currentPage === 'plumbers-hub.html' ? 'active' : ''}">
                  <a href="plumbers-hub.html" class="menu-link">Plumber's Hub</a>
                </li>
                <li class="menu-item ${currentPage === 'find-a-distributor.html' ? 'active' : ''}">
                  <a href="find-a-distributor.html" class="menu-link">Find a Distributor</a>
                </li>
                <li class="menu-item ${currentPage === 'news-media.html' ? 'active' : ''}">
                  <a href="news-media.html" class="menu-link">News & Media</a>
                </li>
                <li class="menu-item ${currentPage === 'contact-us.html' ? 'active' : ''}">
                  <a href="contact-us.html" class="menu-link">Contact Us</a>
                </li>
              </ul>
              <div class="nav-phone-callout">
                ${ICONS.phone}
                <span>Helpline: <a href="tel:+254702233258">+254 702 233258</a></span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <!-- Mobile Navigation Drawer Overlay -->
      <div class="mobile-drawer-overlay" id="mobileDrawerOverlay" tabindex="-1"></div>

      <!-- Slide-in Mobile Drawer with Sub-menu Accordions -->
      <aside class="mobile-drawer" id="mobileDrawer" aria-label="Mobile Navigation Drawer" aria-hidden="true">
        <div class="mobile-drawer-header">
          <a href="index.html">
            <img src="images/web/logo.png" alt="Kentainers Limited" style="max-height: 38px; width: auto;">
          </a>
          <button type="button" class="mobile-drawer-close" id="mobileDrawerCloseBtn" aria-label="Close mobile menu">
            ${ICONS.close}
          </button>
        </div>
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item ${currentPage === 'index.html' ? 'active' : ''}">
            <a href="index.html" class="mobile-nav-link">Home</a>
          </li>
          <li class="mobile-nav-item">
            <div class="mobile-nav-link" style="cursor: pointer;" id="mobileCatalogueAccordionToggle">
              <span>Products & Catalogue</span>
              <button type="button" class="accordion-btn" aria-label="Toggle categories list">
                ${ICONS.chevronDown}
              </button>
            </div>
            <div class="mobile-submenu" id="mobileCatalogueSubmenu">
              <a href="shop.html" class="mobile-submenu-link"><strong>View All Products</strong></a>
              <a href="shop.html?category=water-storage" class="mobile-submenu-link">Water Storage (KENTANK)</a>
              <a href="shop.html?category=pipes-fittings" class="mobile-submenu-link">Pipes & Fittings (HDPE & PVC)</a>
              <a href="shop.html?category=sanitation-waste" class="mobile-submenu-link">Sanitation & Waste</a>
              <a href="shop.html?category=agriculture-biogas" class="mobile-submenu-link">Agriculture & Biogas</a>
              <a href="shop.html?category=material-handling" class="mobile-submenu-link">Material Handling</a>
              <a href="shop.html?category=furniture-qdesk" class="mobile-submenu-link">Furniture & QDesk</a>
            </div>
          </li>
          <li class="mobile-nav-item ${currentPage === 'about-us.html' ? 'active' : ''}">
            <a href="about-us.html" class="mobile-nav-link">About Us</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'plumbers-hub.html' ? 'active' : ''}">
            <a href="plumbers-hub.html" class="mobile-nav-link">Plumber's Hub</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'find-a-distributor.html' ? 'active' : ''}">
            <a href="find-a-distributor.html" class="mobile-nav-link">Find a Distributor</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'news-media.html' ? 'active' : ''}">
            <a href="news-media.html" class="mobile-nav-link">News & Media</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'contact-us.html' ? 'active' : ''}">
            <a href="contact-us.html" class="mobile-nav-link">Contact Us</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'request-a-quote.html' ? 'active' : ''}">
            <a href="request-a-quote.html" class="mobile-nav-link" style="color: var(--blue); font-weight: 700;">Request a Quote</a>
          </li>
        </ul>
        <div class="mobile-drawer-footer">
          <p style="font-size: 0.8rem; margin-bottom: 8px; color: var(--text-muted);">Direct Helpline & WhatsApp:</p>
          <a href="https://wa.me/254702233258" class="btn btn-whatsapp btn-sm" style="width: 100%; margin-bottom: 8px;">
            ${ICONS.whatsapp}
            <span>Chat on WhatsApp</span>
          </a>
          <a href="tel:+254702233258" class="btn btn-outline btn-sm" style="width: 100%;">
            ${ICONS.phone}
            <span>Call +254 702 233258</span>
          </a>
        </div>
      </aside>
    `;
  }

  // Footer HTML
  function getFooterHTML() {
    return `
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="footer-main-grid">
            <!-- Col 1: About & Identity -->
            <div class="footer-col footer-about">
              <a href="index.html">
                <img src="images/web/logo.png" alt="Kentainers Limited" class="footer-logo" width="418" height="120" loading="lazy">
              </a>
              <p>
                <strong>Kentainers Limited</strong> is a leading Kenyan manufacturer of rotomoulded polyethylene products.
                KENTANK is a household name in Kenya and a premium brand in water storage solutions.
              </p>
              <div class="social-links" aria-label="Social media channels">
                <a href="https://facebook.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${ICONS.facebook}</a>
                <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">${ICONS.twitter}</a>
                <a href="https://linkedin.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${ICONS.linkedin}</a>
                <a href="https://instagram.com" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${ICONS.instagram}</a>
              </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Quick Links</h3>
              <ul class="footer-links">
                <li><a href="index.html">${ICONS.chevronRight} Home</a></li>
                <li><a href="shop.html">${ICONS.chevronRight} Product Catalogue</a></li>
                <li><a href="about-us.html">${ICONS.chevronRight} About Our Company</a></li>
                <li><a href="plumbers-hub.html">${ICONS.chevronRight} Plumber's Hub & Guides</a></li>
                <li><a href="find-a-distributor.html">${ICONS.chevronRight} Find a Distributor</a></li>
                <li><a href="news-media.html">${ICONS.chevronRight} News & Sustainability</a></li>
                <li><a href="request-a-quote.html">${ICONS.chevronRight} Request a Price Quote</a></li>
                <li><a href="contact-us.html">${ICONS.chevronRight} Contact & Support</a></li>
              </ul>
            </div>

            <!-- Col 3: Product Lines -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Product Lines</h3>
              <ul class="footer-links">
                <li><a href="shop.html?category=water-storage">${ICONS.chevronRight} Cylindrical KENTANKs</a></li>
                <li><a href="shop.html?category=water-storage">${ICONS.chevronRight} Loftanks & Ceiling Tanks</a></li>
                <li><a href="shop.html?category=pipes-fittings">${ICONS.chevronRight} HDPE & PVC Pressure Pipes</a></li>
                <li><a href="shop.html?category=sanitation-waste">${ICONS.chevronRight} Mobilet VIP Latrines</a></li>
                <li><a href="shop.html?category=sanitation-waste">${ICONS.chevronRight} Poly Septic Tanks & Handwash</a></li>
                <li><a href="shop.html?category=agriculture-biogas">${ICONS.chevronRight} Hermetic Grain Silos</a></li>
                <li><a href="shop.html?category=agriculture-biogas">${ICONS.chevronRight} Cattle Troughs & Fish Tubs</a></li>
                <li><a href="shop.html?category=material-handling">${ICONS.chevronRight} 210L Drums & Industrial Pallets</a></li>
                <li><a href="shop.html?category=furniture-qdesk">${ICONS.chevronRight} QDesk Student Class Furniture</a></li>
              </ul>
            </div>

            <!-- Col 4: Factories & Contact -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Factories & Contact</h3>
              <ul class="footer-contact-list">
                <li>
                  ${ICONS.mapPin}
                  <div>
                    <span class="factory-badge">Nairobi Headquarters & Factory</span><br>
                    <!-- TODO: confirm factory address with client -->
                    Nairobi Gate Industrial Park, Northlands Area, Eastern Bypass, Nairobi, Kenya
                  </div>
                </li>
                <li>
                  ${ICONS.mapPin}
                  <div>
                    <span class="factory-badge">Coast Regional Plant</span><br>
                    <!-- TODO: confirm factory address with client -->
                    Kikambala, Malindi Road, Kilifi County, Kenya
                  </div>
                </li>
                <li>
                  ${ICONS.mapPin}
                  <div>
                    <span class="factory-badge">Western Regional Plant</span><br>
                    <!-- TODO: confirm factory address with client -->
                    Victoria Park, Sabuni Road, Off Busia Road, Kisumu, Kenya
                  </div>
                </li>
                <li>
                  ${ICONS.phone}
                  <div>
                    <strong>Sales & WhatsApp Hotline:</strong><br>
                    <a href="tel:+254702233258" style="color: #fff; font-weight: 600;">+254 702 233258</a>
                  </div>
                </li>
                <li>
                  ${ICONS.mail}
                  <div>
                    <!-- TODO: confirm official email with client -->
                    <strong>Email Inquiries:</strong><br>
                    <a href="mailto:info@kentainers.co.ke" style="color: #fff;">info@kentainers.co.ke</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar">
          <div class="container">
            <div class="footer-bottom-flex">
              <div>
                &copy; ${new Date().getFullYear()} <strong>Kentainers Limited</strong>. All Rights Reserved. Tagline: <em>"KENTANK is a household name in Kenya and a premium brand in water storage solutions."</em>
              </div>
              <div class="certification-badges">
                <span class="cert-pill">Over 35 Years in Kenya</span>
                <span class="cert-pill">Rotomoulded Polyethylene</span>
                <span class="cert-pill">Made in Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // Floating WhatsApp Button HTML
  function getWhatsAppButtonHTML() {
    return `
      <aside aria-label="Customer Support">
        <a href="https://wa.me/254702233258?text=Hello%20Kentainers%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20prices." 
           class="whatsapp-floating-btn" 
           target="_blank" 
           rel="noopener noreferrer" 
           aria-label="Direct WhatsApp inquiry with Kentainers sales team (+254 702 233258)">
          <div class="whatsapp-ping" aria-hidden="true"></div>
          ${ICONS.whatsapp}
          <span class="tooltip-text">Chat with Sales on WhatsApp</span>
        </a>
      </aside>
    `;
  }

  // Initialize and inject shared components
  function initSharedComponents() {
    const topbarTarget = document.getElementById('site-topbar-root');
    if (topbarTarget) topbarTarget.innerHTML = getTopBarHTML();

    const headerTarget = document.getElementById('site-header-root');
    if (headerTarget) headerTarget.innerHTML = getHeaderHTML();

    const footerTarget = document.getElementById('site-footer-root');
    if (footerTarget) footerTarget.innerHTML = getFooterHTML();

    const whatsappTarget = document.getElementById('site-whatsapp-root');
    if (whatsappTarget) whatsappTarget.innerHTML = getWhatsAppButtonHTML();

    // Mobile Drawer events
    const openBtn = document.getElementById('mobileMenuOpenBtn');
    const closeBtn = document.getElementById('mobileDrawerCloseBtn');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    const accordionToggle = document.getElementById('mobileCatalogueAccordionToggle');
    const accordionSubmenu = document.getElementById('mobileCatalogueSubmenu');

    function openMobileMenu() {
      if (drawer && overlay) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
        openBtn?.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileMenu() {
      if (drawer && overlay) {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
        openBtn?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }

    openBtn?.addEventListener('click', openMobileMenu);
    closeBtn?.addEventListener('click', closeMobileMenu);
    overlay?.addEventListener('click', closeMobileMenu);

    accordionToggle?.addEventListener('click', () => {
      accordionSubmenu?.classList.toggle('open');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer?.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    // Initialize Header Live Search
    initHeaderLiveSearch();
  }

  // ========================================================================
  // TASK 6: HEADER LIVE SEARCH ENGINE
  // ========================================================================
  function normalizeSearchText(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[,.-]/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/(\d+)\s*(litres|litre|liters|liter|ltrs|ltr|l)\b/g, '$1l')
      .replace(/(\d+)\s*mm\b/g, '$1mm')
      .trim();
  }

  function highlightMatches(text, queryTokens) {
    if (!text || !queryTokens || !queryTokens.length) return text;
    let result = text;
    queryTokens.forEach(token => {
      if (token.length > 1) {
        const regex = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        result = result.replace(regex, '<span class="suggestion-highlight">$1</span>');
      }
    });
    return result;
  }

  function initHeaderLiveSearch() {
    const searchForm = document.getElementById('headerSearchForm');
    const searchInput = document.getElementById('headerSearchInput');
    const categorySelect = document.getElementById('headerSearchCategory');
    const dropdown = document.getElementById('headerSearchSuggestions');

    if (!searchInput || !dropdown) return;

    // Prefill category from current URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('category');
    if (categorySelect && initialCat) {
      categorySelect.value = initialCat;
    }
    const initialQ = urlParams.get('q') || urlParams.get('search');
    if (initialQ && searchInput) {
      searchInput.value = initialQ;
    }

    let debounceTimer = null;
    let selectedIndex = -1;
    let currentItems = [];

    function performSearch() {
      const rawQuery = searchInput.value.trim();
      const normQuery = normalizeSearchText(rawQuery);
      const selectedCat = categorySelect ? categorySelect.value : 'all';

      if (!normQuery || normQuery.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        searchInput.setAttribute('aria-expanded', 'false');
        currentItems = [];
        selectedIndex = -1;
        return;
      }

      const queryTokens = normQuery.split(' ').filter(t => t.length > 0);

      // 1. Search products
      const products = typeof KENTAINERS_PRODUCTS !== 'undefined' ? KENTAINERS_PRODUCTS : [];
      const matchedProducts = products.filter(product => {
        // Category check
        if (selectedCat !== 'all' && product.categorySlug !== selectedCat) {
          return false;
        }

        // Multi-word AND search across name, category, and keywords
        const searchableText = normalizeSearchText(
          `${product.name} ${product.category} ${product.shortDescription || ''} ${(product.keywords || []).join(' ')}`
        );

        return queryTokens.every(token => {
          if (token.endsWith('l') && token.length > 2) {
            const num = token.slice(0, -1);
            return searchableText.includes(token) || searchableText.includes(num);
          }
          return searchableText.includes(token);
        });
      });

      // Score and rank products: name match gets highest priority
      matchedProducts.sort((a, b) => {
        const aNameNorm = normalizeSearchText(a.name);
        const bNameNorm = normalizeSearchText(b.name);
        const aNameMatch = queryTokens.every(t => aNameNorm.includes(t));
        const bNameMatch = queryTokens.every(t => bNameNorm.includes(t));
        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;
        // Prioritize products with real photos
        if (a.hasPhoto && !b.hasPhoto) return -1;
        if (!a.hasPhoto && b.hasPhoto) return 1;
        return 0;
      });

      const topProducts = matchedProducts.slice(0, 6);

      // 2. Search key pages (only when searching all categories)
      let matchedPages = [];
      if (selectedCat === 'all' && typeof KENTAINERS_PAGES !== 'undefined') {
        matchedPages = KENTAINERS_PAGES.filter(page => {
          const pageText = normalizeSearchText(`${page.title} ${page.category} ${page.description} ${(page.keywords || []).join(' ')}`);
          return queryTokens.every(token => pageText.includes(token));
        }).slice(0, 2);
      }

      // Render Dropdown HTML
      if (topProducts.length === 0 && matchedPages.length === 0) {
        dropdown.innerHTML = `
          <div class="suggestion-empty">
            <p style="margin-bottom: 8px;">No products found matching <strong>"${rawQuery}"</strong></p>
            <p style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 12px;">Try checking spelling or browsing our categories.</p>
            <a href="https://wa.me/254702233258?text=Hello%20Kentainers%2C%20I%20am%20looking%20for%3A%20${encodeURIComponent(rawQuery)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
              Ask Sales on WhatsApp
            </a>
          </div>
        `;
      } else {
        let html = '';

        if (topProducts.length > 0) {
          html += `<div class="suggestion-section-title">Products (${matchedProducts.length})</div>`;
          topProducts.forEach((p, idx) => {
            const highlightedName = highlightMatches(p.name, queryTokens);
            const thumbSrc = p.hasPhoto ? p.image : 'images/web/logo.png';
            html += `
              <a href="product.html?slug=${encodeURIComponent(p.slug)}" class="suggestion-item" data-index="${idx}" role="option" aria-selected="false">
                <img src="${thumbSrc}" alt="" class="suggestion-thumb" loading="lazy" width="44" height="44">
                <div class="suggestion-info">
                  <span class="suggestion-name">${highlightedName}</span>
                  <span class="suggestion-meta">${p.category} ${p.capacity ? '• ' + p.capacity : ''}</span>
                </div>
              </a>
            `;
          });
        }

        if (matchedPages.length > 0) {
          html += `<div class="suggestion-section-title">Guides & Company Pages</div>`;
          matchedPages.forEach((page, idx) => {
            const pageIdx = topProducts.length + idx;
            html += `
              <a href="${page.url}" class="suggestion-item" data-index="${pageIdx}" role="option" aria-selected="false">
                <div class="suggestion-thumb" style="display:flex;align-items:center;justify-content:center;color:var(--blue);background:var(--bg-alt);">
                  <svg viewBox="0 0 24 24" style="width:22px;height:22px;fill:currentColor;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                </div>
                <div class="suggestion-info">
                  <span class="suggestion-name">${highlightMatches(page.title, queryTokens)}</span>
                  <span class="suggestion-meta">${page.description}</span>
                </div>
              </a>
            `;
          });
        }

        // View All Link
        const seeAllUrl = `shop.html?q=${encodeURIComponent(rawQuery)}&category=${encodeURIComponent(selectedCat)}`;
        html += `
          <a href="${seeAllUrl}" class="suggestion-see-all">
            See all ${matchedProducts.length} results for "${rawQuery}" &rarr;
          </a>
        `;

        dropdown.innerHTML = html;
      }

      dropdown.classList.add('open');
      searchInput.setAttribute('aria-expanded', 'true');
      currentItems = Array.from(dropdown.querySelectorAll('.suggestion-item'));
      selectedIndex = -1;
    }

    // Input listener with debounce
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 150);
    });

    // Re-filter when category select changes
    categorySelect?.addEventListener('change', () => {
      if (searchInput.value.trim().length >= 2) {
        performSearch();
      }
    });

    // Focus opens suggestions if query exists
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length >= 2) {
        performSearch();
      }
    });

    // Keyboard navigation (ARIA & accessibility)
    searchInput.addEventListener('keydown', (e) => {
      if (!dropdown.classList.contains('open') || currentItems.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % currentItems.length;
        updateActiveSuggestion();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + currentItems.length) % currentItems.length;
        updateActiveSuggestion();
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && currentItems[selectedIndex]) {
          e.preventDefault();
          currentItems[selectedIndex].click();
        }
        // Otherwise allow form to submit naturally to shop.html?q=...&category=...
      } else if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        searchInput.setAttribute('aria-expanded', 'false');
      }
    });

    function updateActiveSuggestion() {
      currentItems.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add('active');
          item.setAttribute('aria-selected', 'true');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.classList.remove('active');
          item.setAttribute('aria-selected', 'false');
        }
      });
    }

    // Click outside closes dropdown
    document.addEventListener('click', (e) => {
      if (!searchForm.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        searchInput.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Execute on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedComponents);
  } else {
    initSharedComponents();
  }

  window.KENTAINERS_ICONS = ICONS;
})();
