/**
 * Kentainers Limited - Shared UI Components & Quote Basket
 * Injects Top Bar (yellow), Main Header Row (logo, search, basket),
 * Blue Nav Bar, Fixed Sticky Header, Mobile Drawer, Green Find Help Strip,
 * Deep-Blue Water-Texture Footer, Scroll-to-Top & Floating WhatsApp Button.
 *
 * Reads all contact details strictly from window.SITE_CONFIG.
 * Classic script (no ES modules, no fetch). Compatible with file:// and HTTP.
 */

(function () {
  'use strict';

  function getConfig() {
    return window.SITE_CONFIG || {
      company: 'Kentainers Limited',
      phones: [],
      email: '',
      whatsapp: { url: '#', display: '' },
      factories: [],
      social: {},
      countries: [{ code: 'KE', name: 'Kenya', active: true, href: '#' }],
      priceListUrl: 'request-a-quote.html',
      priceListAvailable: false
    };
  }

  // Inline SVG Icons (crisp geometric vectors)
  const ICONS = {
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    mapPin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>',
    basket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.21 9l-4.38-6.56a.993.993 0 00-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.49 0-2.96-.4-4.24-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 11-2 2 2 2 0 012-2z"/></svg>',
    kenyaFlag: '<svg viewBox="0 0 24 16" class="flag-svg" aria-hidden="true"><rect width="24" height="4.8" y="0" fill="#111111"/><rect width="24" height="0.9" y="4.8" fill="#ffffff"/><rect width="24" height="4.6" y="5.7" fill="#ed1c24"/><rect width="24" height="0.9" y="10.3" fill="#ffffff"/><rect width="24" height="4.8" y="11.2" fill="#00a651"/><ellipse cx="12" cy="8" rx="2.1" ry="4.2" fill="#b91c1c" stroke="#ffffff" stroke-width="0.6"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>',
    shieldReturn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
  };

  function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().toLowerCase();
    if (!page || page === 'index.html' || page === '') return 'index.html';
    return page;
  }

  const currentPage = getCurrentPage();

  function getPriceListHref() {
    const cfg = getConfig();
    if (cfg.priceListAvailable && cfg.priceListUrl) {
      return cfg.priceListUrl;
    }
    return 'request-a-quote.html';
  }

  // ========================================================================
  // QUOTE BASKET (localStorage wrapped in try/catch for privacy modes)
  // ========================================================================
  const BASKET_KEY = 'kentainers_quote_basket_v1';
  let memoryFallbackBasket = [];

  function readStorage() {
    try {
      const raw = window.localStorage.getItem(BASKET_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return memoryFallbackBasket.slice();
    }
  }

  function writeStorage(items) {
    memoryFallbackBasket = items.slice();
    try {
      window.localStorage.setItem(BASKET_KEY, JSON.stringify(items));
    } catch (e) {
      // Blocked storage fallback handled via memoryFallbackBasket
    }
  }

  const QuoteBasket = {
    getItems: function () {
      return readStorage();
    },
    getCount: function () {
      return readStorage().reduce((sum, item) => sum + (parseInt(item.qty, 10) || 1), 0);
    },
    addItem: function (slug, qty) {
      const addQty = Math.max(1, parseInt(qty, 10) || 1);
      const products = window.PRODUCTS || (typeof KENTAINERS_PRODUCTS !== 'undefined' ? KENTAINERS_PRODUCTS : []);
      const product = products.find(p => p.slug === slug);
      if (!product) return null;

      const items = readStorage();
      const existing = items.find(i => i.slug === slug);
      if (existing) {
        existing.qty = Math.min(999, (parseInt(existing.qty, 10) || 1) + addQty);
      } else {
        items.push({
          slug: product.slug,
          name: product.name,
          category: product.category,
          image: product.hasPhoto ? product.image : '',
          qty: addQty
        });
      }
      writeStorage(items);
      QuoteBasket.refreshBadges();
      QuoteBasket.showToast(product.name);
      document.dispatchEvent(new CustomEvent('kentainers:basket-updated'));
      return items;
    },
    setQty: function (slug, qty) {
      const nextQty = parseInt(qty, 10);
      let items = readStorage();
      if (isNaN(nextQty) || nextQty <= 0) {
        items = items.filter(i => i.slug !== slug);
      } else {
        const target = items.find(i => i.slug === slug);
        if (target) target.qty = Math.min(999, nextQty);
      }
      writeStorage(items);
      QuoteBasket.refreshBadges();
      document.dispatchEvent(new CustomEvent('kentainers:basket-updated'));
    },
    removeItem: function (slug) {
      const items = readStorage().filter(i => i.slug !== slug);
      writeStorage(items);
      QuoteBasket.refreshBadges();
      document.dispatchEvent(new CustomEvent('kentainers:basket-updated'));
    },
    clear: function () {
      writeStorage([]);
      QuoteBasket.refreshBadges();
      document.dispatchEvent(new CustomEvent('kentainers:basket-updated'));
    },
    refreshBadges: function () {
      const count = QuoteBasket.getCount();
      document.querySelectorAll('[data-basket-count]').forEach(el => {
        el.textContent = String(count);
        el.setAttribute('aria-label', `${count} items in quote basket`);
      });
    },
    showToast: function (productName) {
      let toast = document.getElementById('quoteBasketToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'quoteBasketToast';
        toast.className = 'quote-toast';
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        document.body.appendChild(toast);
      }
      toast.innerHTML = `
        <span class="quote-toast-msg">Added <strong>${productName}</strong> to Quote Basket</span>
        <a href="request-a-quote.html" class="quote-toast-link">View Basket</a>
      `;
      toast.classList.add('visible');
      clearTimeout(toast._hideTimer);
      toast._hideTimer = setTimeout(() => {
        toast.classList.remove('visible');
      }, 3600);
    }
  };
  window.QuoteBasket = QuoteBasket;

  // ========================================================================
  // TOP BAR (Yellow Strip from SITE_CONFIG)
  // ========================================================================
  function getSocialLinksHTML(social) {
    const entries = [
      { key: 'facebook', label: 'Facebook', icon: ICONS.facebook },
      { key: 'x', label: 'X (Twitter)', icon: ICONS.x },
      { key: 'instagram', label: 'Instagram', icon: ICONS.instagram },
      { key: 'youtube', label: 'YouTube', icon: ICONS.youtube },
      { key: 'linkedin', label: 'LinkedIn', icon: ICONS.linkedin },
      { key: 'whatsapp', label: 'WhatsApp', icon: ICONS.whatsapp }
    ];
    return entries
      .filter(e => social && social[e.key])
      .map(e => `
        <a href="${social[e.key]}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Kentainers on ${e.label}">
          ${e.icon}
        </a>
      `)
      .join('');
  }

  function getTopBarHTML() {
    const cfg = getConfig();
    const activeCountry = (cfg.countries || []).find(c => c.active) || { code: 'KE', name: 'Kenya' };
    const countryItems = (cfg.countries || [])
      .map(c => `<li><a href="${c.href || '#'}" class="country-option ${c.active ? 'active' : ''}">${c.name}${c.active ? ' (Active)' : ''}</a></li>`)
      .join('');

    const phonesHTML = (cfg.phones || [])
      .map(p => `
        <a href="${p.tel}" class="topbar-item topbar-phone" aria-label="Call ${p.label} at ${p.display}">
          <span class="topbar-phone-label">${p.label}:</span> <span>${p.display}</span>
        </a>
      `)
      .join('<span class="topbar-divider" aria-hidden="true"></span>');

    const firstPhone = (cfg.phones && cfg.phones[0]) || null;

    return `
      <div class="site-topbar" role="region" aria-label="Regional contact details and social links">
        <div class="container">
          <div class="topbar-inner">
            <div class="topbar-left">
              <div class="countries-dropdown-wrap">
                <button type="button" class="countries-toggle" id="countriesToggleBtn" aria-expanded="false" aria-haspopup="true">
                  ${ICONS.kenyaFlag}
                  <span>COUNTRIES: <strong>${activeCountry.code}</strong></span>
                  ${ICONS.chevronDown}
                </button>
                <ul class="countries-menu" id="countriesMenu" aria-label="Select country site">
                  ${countryItems}
                </ul>
              </div>
              <span class="topbar-divider" aria-hidden="true"></span>
              <a href="mailto:${cfg.email}" class="topbar-item topbar-email" aria-label="Email ${cfg.email}">
                ${ICONS.mail}
                <span>${cfg.email}</span>
              </a>
              <span class="topbar-divider desktop-only-divider" aria-hidden="true"></span>
              <div class="topbar-phones-desktop">
                ${phonesHTML}
              </div>
              ${firstPhone ? `<a href="${firstPhone.tel}" class="topbar-item topbar-phone-mobile">${ICONS.phone} <span>${firstPhone.label}: ${firstPhone.display}</span></a>` : ''}
            </div>
            <div class="topbar-right">
              <div class="social-links" aria-label="Kentainers Social Media Channels">
                ${getSocialLinksHTML(cfg.social)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ========================================================================
  // MAIN HEADER + NAV BAR + STICKY HEADER + MOBILE DRAWER
  // ========================================================================
  function getNavLinksHTML() {
    const items = [
      {
        label: 'SHOP',
        href: 'shop.html',
        active: currentPage === 'shop.html' || currentPage === 'product.html',
        dropdown: [
          { label: 'All Products', href: 'shop.html' },
          { label: 'Water Storage', href: 'shop.html?category=water-storage' },
          { label: 'Pipes & Fittings', href: 'shop.html?category=pipes-fittings' },
          { label: 'Sanitation & Waste', href: 'shop.html?category=sanitation-waste' },
          { label: 'Agriculture & Biogas', href: 'shop.html?category=agriculture-biogas' },
          { label: 'Material Handling', href: 'shop.html?category=material-handling' },
          { label: 'Furniture & QDesk', href: 'shop.html?category=furniture-qdesk' }
        ]
      },
      { label: 'ABOUT US', href: 'about-us.html', active: currentPage === 'about-us.html' },
      { label: "PLUMBER'S HUB", href: 'plumbers-hub.html', active: currentPage === 'plumbers-hub.html' },
      { label: 'NEWS & MEDIA', href: 'news-media.html', active: currentPage === 'news-media.html' },
      { label: 'FIND A DISTRIBUTOR', href: 'find-a-distributor.html', active: currentPage === 'find-a-distributor.html' },
      { label: 'CONTACT US', href: 'contact-us.html', active: currentPage === 'contact-us.html' }
    ];

    return items.map(item => {
      if (item.dropdown) {
        return `
          <li class="menu-item ${item.active ? 'active' : ''}">
            <a href="${item.href}" class="menu-link" aria-haspopup="true">
              <span>${item.label}</span>
              ${ICONS.chevronDown}
            </a>
            <ul class="dropdown-menu" aria-label="Product categories">
              ${item.dropdown.map(d => `<li><a href="${d.href}" class="dropdown-link">${d.label}</a></li>`).join('')}
            </ul>
          </li>
        `;
      }
      return `
        <li class="menu-item ${item.active ? 'active' : ''}">
          <a href="${item.href}" class="menu-link">${item.label}</a>
        </li>
      `;
    }).join('');
  }

  function getHeaderHTML() {
    const cfg = getConfig();
    const priceListHref = getPriceListHref();
    const priceListTarget = (cfg.priceListAvailable && cfg.priceListUrl) ? ' target="_blank" rel="noopener noreferrer"' : '';
    const initialCount = QuoteBasket.getCount();

    return `
      <header class="site-header" id="main-site-header" role="banner">
        <div class="header-white-row">
          <div class="container">
            <div class="header-main-row">
              <button type="button" class="mobile-menu-toggle" id="mobileMenuOpenBtn" aria-label="Open mobile navigation menu" aria-expanded="false" aria-controls="mobileDrawer">
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div class="header-logo-wrap">
                <a href="index.html" aria-label="Kentainers Limited Home">
                  <img src="images/web/logo.png" alt="Kentainers Limited - Celebrating 35 Years" class="header-logo" width="418" height="120" fetchpriority="high">
                </a>
              </div>

              <!-- Bordered Search Box: input on left, category select on RIGHT inside same box, magnifier button -->
              <div class="header-search-wrap" id="headerSearchWrap">
                <form action="shop.html" method="GET" class="header-search-form" role="search" id="headerSearchForm" autocomplete="off">
                  <input type="text" name="q" id="headerSearchInput" class="search-input" placeholder="Search for products (tanks, pipes, mobilet, qdesk...)" aria-label="Search catalogue products" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-controls="headerSearchSuggestions" required>
                  <select name="category" class="search-category-select" id="headerSearchCategory" aria-label="Select category">
                    <option value="all">Select category</option>
                    <option value="water-storage">Water Storage</option>
                    <option value="pipes-fittings">Pipes &amp; Fittings</option>
                    <option value="sanitation-waste">Sanitation &amp; Waste</option>
                    <option value="agriculture-biogas">Agriculture &amp; Biogas</option>
                    <option value="material-handling">Material Handling</option>
                    <option value="furniture-qdesk">Furniture &amp; QDesk</option>
                  </select>
                  <button type="submit" class="search-submit-btn" aria-label="Search products">
                    ${ICONS.search}
                  </button>
                </form>
                <div class="search-suggestions-dropdown" id="headerSearchSuggestions" role="listbox" aria-label="Search Suggestions"></div>
              </div>

              <div class="header-actions">
                <button type="button" class="mobile-search-trigger" id="mobileSearchToggleBtn" aria-label="Toggle product search" aria-expanded="false">
                  ${ICONS.search}
                </button>
                <a href="request-a-quote.html" class="header-basket-link" aria-label="Open Quote Basket">
                  <span class="basket-icon-wrap">
                    ${ICONS.basket}
                    <span class="basket-badge" data-basket-count>${initialCount}</span>
                  </span>
                  <span class="basket-text-col">
                    <span class="basket-label">Quote Basket</span>
                    <span class="basket-sub"><span data-basket-count>${initialCount}</span> items</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Blue Navigation Bar -->
        <nav class="site-navigation" aria-label="Main Navigation">
          <div class="container">
            <div class="nav-container">
              <span class="nav-spacer" aria-hidden="true"></span>
              <ul class="primary-menu">
                ${getNavLinksHTML()}
              </ul>
              <a href="${priceListHref}" class="btn-price-list"${priceListTarget}>PRICE LIST</a>
            </div>
          </div>
        </nav>
      </header>

      <!-- Compact Sticky Bar (shown after 200px scroll, zero layout jump) -->
      <div class="site-sticky-header" id="siteStickyHeader" aria-hidden="true">
        <div class="container">
          <div class="sticky-header-inner">
            <a href="index.html" class="sticky-logo-link" aria-label="Kentainers Limited Home" tabindex="-1">
              <img src="images/web/logo.png" alt="Kentainers Limited" class="sticky-logo" width="418" height="120">
            </a>
            <nav class="sticky-nav" aria-label="Sticky Navigation">
              <ul class="sticky-menu">
                ${getNavLinksHTML()}
              </ul>
            </nav>
            <a href="request-a-quote.html" class="header-basket-link sticky-basket-link" aria-label="Open Quote Basket">
              <span class="basket-icon-wrap">
                ${ICONS.basket}
                <span class="basket-badge" data-basket-count>${initialCount}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Mobile Drawer & Overlay -->
      <div class="mobile-drawer-overlay" id="mobileDrawerOverlay" tabindex="-1"></div>
      <aside class="mobile-drawer" id="mobileDrawer" aria-label="Mobile Navigation Drawer" aria-hidden="true">
        <div class="mobile-drawer-header">
          <a href="index.html">
            <img src="images/web/logo.png" alt="Kentainers Limited" class="mobile-drawer-logo" width="418" height="120">
          </a>
          <button type="button" class="mobile-drawer-close" id="mobileDrawerCloseBtn" aria-label="Close mobile menu">
            ${ICONS.close}
          </button>
        </div>

        <form action="shop.html" method="GET" class="mobile-drawer-search" role="search">
          <input type="text" name="q" placeholder="Search products..." aria-label="Mobile search">
          <button type="submit" aria-label="Search">${ICONS.search}</button>
        </form>

        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <button type="button" class="mobile-nav-link mobile-accordion-toggle" id="mobileCatalogueAccordionToggle" aria-expanded="false">
              <span>SHOP &amp; CATEGORIES</span>
              ${ICONS.chevronDown}
            </button>
            <div class="mobile-submenu" id="mobileCatalogueSubmenu">
              <a href="shop.html" class="mobile-submenu-link"><strong>View All Products</strong></a>
              <a href="shop.html?category=water-storage" class="mobile-submenu-link">Water Storage</a>
              <a href="shop.html?category=pipes-fittings" class="mobile-submenu-link">Pipes &amp; Fittings</a>
              <a href="shop.html?category=sanitation-waste" class="mobile-submenu-link">Sanitation &amp; Waste</a>
              <a href="shop.html?category=agriculture-biogas" class="mobile-submenu-link">Agriculture &amp; Biogas</a>
              <a href="shop.html?category=material-handling" class="mobile-submenu-link">Material Handling</a>
              <a href="shop.html?category=furniture-qdesk" class="mobile-submenu-link">Furniture &amp; QDesk</a>
            </div>
          </li>
          <li class="mobile-nav-item ${currentPage === 'about-us.html' ? 'active' : ''}">
            <a href="about-us.html" class="mobile-nav-link">ABOUT US</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'plumbers-hub.html' ? 'active' : ''}">
            <a href="plumbers-hub.html" class="mobile-nav-link">PLUMBER'S HUB</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'news-media.html' ? 'active' : ''}">
            <a href="news-media.html" class="mobile-nav-link">NEWS &amp; MEDIA</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'find-a-distributor.html' ? 'active' : ''}">
            <a href="find-a-distributor.html" class="mobile-nav-link">FIND A DISTRIBUTOR</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'contact-us.html' ? 'active' : ''}">
            <a href="contact-us.html" class="mobile-nav-link">CONTACT US</a>
          </li>
          <li class="mobile-nav-item ${currentPage === 'request-a-quote.html' ? 'active' : ''}">
            <a href="request-a-quote.html" class="mobile-nav-link">QUOTE BASKET (<span data-basket-count>${initialCount}</span>)</a>
          </li>
        </ul>

        <div class="mobile-drawer-footer">
          <a href="${priceListHref}" class="btn btn-green btn-block"${priceListTarget} style="margin-bottom: 12px;">PRICE LIST</a>
          <div class="mobile-drawer-contacts">
            ${(cfg.phones || []).map(p => `<a href="${p.tel}" class="mobile-contact-link">${ICONS.phone} <span>${p.label}: ${p.display}</span></a>`).join('')}
            <a href="mailto:${cfg.email}" class="mobile-contact-link">${ICONS.mail} <span>${cfg.email}</span></a>
            <a href="${cfg.whatsapp.url}" class="mobile-contact-link" target="_blank" rel="noopener noreferrer">${ICONS.whatsapp} <span>WhatsApp: ${cfg.whatsapp.display}</span></a>
          </div>
        </div>
      </aside>
    `;
  }

  // ========================================================================
  // GREEN FIND HELP STRIP & DEEP-BLUE FOOTER (Task 7)
  // ========================================================================
  function getFindHelpStripHTML() {
    return `
      <section class="find-help-strip" aria-label="Customer Help Links">
        <div class="container">
          <div class="find-help-strip-grid">
            <a href="find-a-distributor.html" class="find-help-strip-item">
              <span class="strip-icon">${ICONS.truck}</span>
              <span class="strip-title">Delivery &amp; Distribution</span>
            </a>
            <a href="plumbers-hub.html" class="find-help-strip-item">
              <span class="strip-icon">${ICONS.wrench}</span>
              <span class="strip-title">How to Install</span>
            </a>
            <a href="contact-us.html" class="find-help-strip-item">
              <span class="strip-icon">${ICONS.refresh}</span>
              <span class="strip-title">Product Replacement</span>
            </a>
            <a href="contact-us.html#support" class="find-help-strip-item">
              <span class="strip-icon">${ICONS.shieldReturn}</span>
              <span class="strip-title">Return &amp; Refund Policy</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function getFooterHTML() {
    const cfg = getConfig();
    const phonesList = (cfg.phones || [])
      .map(p => `
        <li>
          <span class="footer-icon-badge">${ICONS.phone}</span>
          <a href="${p.tel}">${p.label} : ${p.display}</a>
        </li>
      `)
      .join('');

    const factoriesList = (cfg.factories || [])
      .map(f => `
        <div class="footer-factory-block">
          <h4 class="footer-factory-name">${f.name}:</h4>
          ${f.address
            ? (f.mapUrl
                ? `<p class="footer-factory-addr"><a href="${f.mapUrl}" target="_blank" rel="noopener noreferrer">${f.address}</a></p>`
                : `<p class="footer-factory-addr">${f.address}</p>`)
            : '<!-- TODO: client to confirm factory address -->'}
        </div>
      `)
      .join('');

    return `
      ${getFindHelpStripHTML()}
      <footer class="site-footer" role="contentinfo">
        <div class="container">
          <div class="footer-main-grid">
            <!-- Col 1: Contact Us -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Contact Us</h3>
              <ul class="footer-contact-list">
                ${phonesList}
                <li>
                  <span class="footer-icon-badge">${ICONS.mail}</span>
                  <a href="mailto:${cfg.email}">${cfg.email}</a>
                </li>
              </ul>
              <div class="social-links footer-social-links" aria-label="Follow Kentainers Limited">
                ${getSocialLinksHTML(cfg.social)}
              </div>
            </div>

            <!-- Col 2: Our Factory Locations -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Our Factory Locations:</h3>
              ${factoriesList}
            </div>

            <!-- Col 3: Quick Links -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Quick Links</h3>
              <ul class="footer-links">
                <li><a href="shop.html"><span class="footer-dot"></span>Shop</a></li>
                <li><a href="about-us.html"><span class="footer-dot"></span>About Us</a></li>
                <li><a href="plumbers-hub.html#faq"><span class="footer-dot"></span>FAQs</a></li>
                <li><a href="contact-us.html"><span class="footer-dot"></span>Contact Us</a></li>
                <li><a href="news-media.html"><span class="footer-dot"></span>News &amp; Media</a></li>
                <li><a href="request-a-quote.html"><span class="footer-dot"></span>Request a Quote</a></li>
              </ul>
            </div>

            <!-- Col 4: Find Help -->
            <div class="footer-col">
              <h3 class="footer-widget-title">Find Help</h3>
              <ul class="footer-links">
                <li><a href="find-a-distributor.html"><span class="footer-dot"></span>Delivery &amp; Distribution</a></li>
                <li><a href="plumbers-hub.html#essentials"><span class="footer-dot"></span>How to Install</a></li>
                <li><a href="contact-us.html"><span class="footer-dot"></span>Product Replacement</a></li>
                <li><a href="contact-us.html#support"><span class="footer-dot"></span>Return &amp; Refund Policy</a></li>
                <li><a href="shop.html?category=water-storage"><span class="footer-dot"></span>Rain Water Harvesting</a></li>
                <li><a href="find-a-distributor.html#apply"><span class="footer-dot"></span>Distributor / Stockist Application</a></li>
                <li><a href="contact-us.html#contact-form"><span class="footer-dot"></span>Product Complaints</a></li>
                <li><a href="plumbers-hub.html#faq"><span class="footer-dot"></span>Frequently Asked Questions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom-bar">
          <div class="container">
            <div class="footer-bottom-flex">
              <span>&copy; ${new Date().getFullYear()} ${cfg.company}. All rights reserved.</span>
              <span>Built for genuine KENTANK products across East Africa</span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // ========================================================================
  // FLOATING SCROLL-TO-TOP + WHATSAPP BUTTON
  // ========================================================================
  function getFloatingControlsHTML() {
    const cfg = getConfig();
    const waHref = `${cfg.whatsapp.url}?text=${encodeURIComponent('Hello Kentainers, I would like to inquire about your products.')}`;
    return `
      <div class="floating-controls" aria-label="Quick navigation and WhatsApp support">
        <button type="button" class="scroll-top-btn" id="scrollTopBtn" aria-label="Scroll back to top" title="Back to top">
          ${ICONS.arrowUp}
        </button>
        <a href="${waHref}"
           class="whatsapp-floating-btn"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Chat on WhatsApp (${cfg.whatsapp.display})">
          ${ICONS.whatsapp}
          <span class="tooltip-text">Chat on WhatsApp</span>
        </a>
      </div>
    `;
  }

  // ========================================================================
  // HYDRATE CONFIG SLOTS ON ALL PAGES (Zero hard-coded contact details)
  // ========================================================================
  function populateSiteConfigSlots() {
    const cfg = getConfig();

    document.querySelectorAll('[data-site-email]').forEach(el => {
      el.textContent = cfg.email;
      if (el.tagName === 'A') el.href = `mailto:${cfg.email}`;
    });

    document.querySelectorAll('[data-site-whatsapp-link]').forEach(el => {
      const msg = el.getAttribute('data-wa-message');
      el.href = msg ? `${cfg.whatsapp.url}?text=${encodeURIComponent(msg)}` : cfg.whatsapp.url;
    });

    document.querySelectorAll('[data-site-whatsapp-display]').forEach(el => {
      el.textContent = cfg.whatsapp.display;
    });

    document.querySelectorAll('[data-site-phone-link]').forEach(el => {
      const idx = parseInt(el.getAttribute('data-site-phone-link'), 10) || 0;
      const phone = (cfg.phones && cfg.phones[idx]) || (cfg.phones && cfg.phones[0]);
      if (phone) {
        el.href = phone.tel;
        if (!el.hasAttribute('data-keep-label')) {
          el.textContent = `${phone.label}: ${phone.display}`;
        }
      }
    });

    document.querySelectorAll('[data-site-phone-display]').forEach(el => {
      const idx = parseInt(el.getAttribute('data-site-phone-display'), 10) || 0;
      const phone = (cfg.phones && cfg.phones[idx]) || (cfg.phones && cfg.phones[0]);
      if (phone) {
        el.textContent = phone.display;
      }
    });

    // Contact Us regional hubs container
    const contactHubs = document.getElementById('contactHubsGrid');
    if (contactHubs) {
      const wa = cfg.whatsapp;
      contactHubs.innerHTML = (cfg.factories || []).map((f, idx) => {
        const phone = (cfg.phones && cfg.phones[idx]) || (cfg.phones && cfg.phones[0]);
        return `
          <div class="distributor-card">
            <h3 style="font-size: 1.15rem; color: var(--blue-dark); margin-bottom: 10px;">${f.name}</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px;">
              <strong>Address:</strong> ${f.address || 'Address confirmation pending'}<br>
              ${f.mapUrl ? `<a href="${f.mapUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--blue); text-decoration: underline;">View Map</a>` : ''}
            </p>
            <p style="font-size: 0.9rem; margin-bottom: 16px;">
              ${phone ? `<strong>Phone:</strong> <a href="${phone.tel}">${phone.display}</a><br>` : ''}
              <strong>Email:</strong> <a href="mailto:${cfg.email}">${cfg.email}</a>
            </p>
            <a href="${wa.url}?text=${encodeURIComponent(`Hello Kentainers, I would like to inquire about ${f.name}.`)}"
               class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer" style="width: 100%;">
              Chat on WhatsApp
            </a>
          </div>
        `;
      }).join('');
    }
  }

  // ========================================================================
  // HEADER LIVE SEARCH ENGINE
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
    const cfg = getConfig();

    if (!searchInput || !dropdown || !searchForm) return;

    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('category');
    if (categorySelect && initialCat) categorySelect.value = initialCat;
    const initialQ = urlParams.get('q') || urlParams.get('search');
    if (initialQ) searchInput.value = initialQ;

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

      const queryTokens = normQuery.split(' ').filter(Boolean);
      const products = window.PRODUCTS || (typeof KENTAINERS_PRODUCTS !== 'undefined' ? KENTAINERS_PRODUCTS : []);

      const matchedProducts = products.filter(product => {
        if (selectedCat !== 'all' && product.categorySlug !== selectedCat) return false;
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

      matchedProducts.sort((a, b) => {
        const aNameMatch = queryTokens.every(t => normalizeSearchText(a.name).includes(t));
        const bNameMatch = queryTokens.every(t => normalizeSearchText(b.name).includes(t));
        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;
        if (a.hasPhoto && !b.hasPhoto) return -1;
        if (!a.hasPhoto && b.hasPhoto) return 1;
        return 0;
      });

      const topProducts = matchedProducts.slice(0, 6);
      let matchedPages = [];
      if (selectedCat === 'all' && typeof KENTAINERS_PAGES !== 'undefined') {
        matchedPages = KENTAINERS_PAGES.filter(page => {
          const pageText = normalizeSearchText(`${page.title} ${page.category} ${page.description} ${(page.keywords || []).join(' ')}`);
          return queryTokens.every(token => pageText.includes(token));
        }).slice(0, 2);
      }

      if (topProducts.length === 0 && matchedPages.length === 0) {
        dropdown.innerHTML = `
          <div class="suggestion-empty">
            <p style="margin-bottom: 8px;">No products found matching <strong>"${rawQuery}"</strong></p>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 12px;">Try another keyword or browse our categories.</p>
            <a href="${cfg.whatsapp.url}?text=${encodeURIComponent(`Hello Kentainers, I am looking for: ${rawQuery}`)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
              Ask Sales on WhatsApp
            </a>
          </div>
        `;
      } else {
        let html = '';
        if (topProducts.length > 0) {
          html += `<div class="suggestion-section-title">Products (${matchedProducts.length})</div>`;
          topProducts.forEach((p, idx) => {
            const thumbSrc = p.hasPhoto ? p.image : 'images/web/logo.png';
            html += `
              <a href="product.html?slug=${encodeURIComponent(p.slug)}" class="suggestion-item" data-index="${idx}" role="option" aria-selected="false">
                <img src="${thumbSrc}" alt="" class="suggestion-thumb" loading="lazy" width="44" height="44">
                <div class="suggestion-info">
                  <span class="suggestion-name">${highlightMatches(p.name, queryTokens)}</span>
                  <span class="suggestion-meta">${p.category}${p.capacity ? ' • ' + p.capacity : ''}</span>
                </div>
              </a>
            `;
          });
        }
        if (matchedPages.length > 0) {
          html += `<div class="suggestion-section-title">Pages &amp; Guides</div>`;
          matchedPages.forEach((page, idx) => {
            html += `
              <a href="${page.url}" class="suggestion-item" data-index="${topProducts.length + idx}" role="option" aria-selected="false">
                <div class="suggestion-info">
                  <span class="suggestion-name">${highlightMatches(page.title, queryTokens)}</span>
                  <span class="suggestion-meta">${page.description}</span>
                </div>
              </a>
            `;
          });
        }
        const seeAllUrl = `shop.html?q=${encodeURIComponent(rawQuery)}&category=${encodeURIComponent(selectedCat)}`;
        html += `<a href="${seeAllUrl}" class="suggestion-see-all">See all ${matchedProducts.length} results for "${rawQuery}" &rarr;</a>`;
        dropdown.innerHTML = html;
      }

      dropdown.classList.add('open');
      searchInput.setAttribute('aria-expanded', 'true');
      currentItems = Array.from(dropdown.querySelectorAll('.suggestion-item'));
      selectedIndex = -1;
    }

    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 150);
    });

    categorySelect?.addEventListener('change', () => {
      if (searchInput.value.trim().length >= 2) performSearch();
    });

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length >= 2) performSearch();
    });

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
      } else if (e.key === 'Enter' && selectedIndex >= 0 && currentItems[selectedIndex]) {
        e.preventDefault();
        currentItems[selectedIndex].click();
      } else if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        searchInput.setAttribute('aria-expanded', 'false');
      }
    });

    function updateActiveSuggestion() {
      currentItems.forEach((item, idx) => {
        const active = idx === selectedIndex;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', active ? 'true' : 'false');
        if (active) item.scrollIntoView({ block: 'nearest' });
      });
    }

    document.addEventListener('click', (e) => {
      if (!searchForm.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        searchInput.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ========================================================================
  // INIT SHARED COMPONENTS & INTERACTIONS
  // ========================================================================
  function initSharedComponents() {
    const topbarTarget = document.getElementById('site-topbar-root');
    if (topbarTarget) topbarTarget.innerHTML = getTopBarHTML();

    const headerTarget = document.getElementById('site-header-root');
    if (headerTarget) headerTarget.innerHTML = getHeaderHTML();

    const footerTarget = document.getElementById('site-footer-root');
    if (footerTarget) footerTarget.innerHTML = getFooterHTML();

    const whatsappTarget = document.getElementById('site-whatsapp-root');
    if (whatsappTarget) whatsappTarget.innerHTML = getFloatingControlsHTML();

    populateSiteConfigSlots();
    QuoteBasket.refreshBadges();

    // Countries dropdown interaction
    const countriesToggle = document.getElementById('countriesToggleBtn');
    const countriesMenu = document.getElementById('countriesMenu');
    countriesToggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = countriesMenu.classList.toggle('open');
      countriesToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', () => {
      if (countriesMenu?.classList.contains('open')) {
        countriesMenu.classList.remove('open');
        countriesToggle?.setAttribute('aria-expanded', 'false');
      }
    });

    // Mobile drawer & search toggle
    const openBtn = document.getElementById('mobileMenuOpenBtn');
    const closeBtn = document.getElementById('mobileDrawerCloseBtn');
    const drawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('mobileDrawerOverlay');
    const accordionToggle = document.getElementById('mobileCatalogueAccordionToggle');
    const accordionSubmenu = document.getElementById('mobileCatalogueSubmenu');
    const mobileSearchToggle = document.getElementById('mobileSearchToggleBtn');
    const headerSearchWrap = document.getElementById('headerSearchWrap');
    const headerSearchInput = document.getElementById('headerSearchInput');

    function openMobileMenu() {
      if (!drawer || !overlay) return;
      drawer.classList.add('active');
      overlay.classList.add('active');
      drawer.setAttribute('aria-hidden', 'false');
      openBtn?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      if (!drawer || !overlay) return;
      drawer.classList.remove('active');
      overlay.classList.remove('active');
      drawer.setAttribute('aria-hidden', 'true');
      openBtn?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    openBtn?.addEventListener('click', openMobileMenu);
    closeBtn?.addEventListener('click', closeMobileMenu);
    overlay?.addEventListener('click', closeMobileMenu);

    accordionToggle?.addEventListener('click', () => {
      const open = accordionSubmenu?.classList.toggle('open');
      accordionToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    mobileSearchToggle?.addEventListener('click', () => {
      const isOpen = headerSearchWrap?.classList.toggle('mobile-open');
      mobileSearchToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) headerSearchInput?.focus();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (drawer?.classList.contains('active')) closeMobileMenu();
        if (countriesMenu?.classList.contains('open')) {
          countriesMenu.classList.remove('open');
          countriesToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Sticky compact bar & Scroll-to-top button (>200px scroll, zero layout jump)
    const stickyBar = document.getElementById('siteStickyHeader');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    function onScroll() {
      const y = window.scrollY || window.pageYOffset || 0;
      if (stickyBar) {
        const showSticky = y > 200;
        stickyBar.classList.toggle('visible', showSticky);
        stickyBar.setAttribute('aria-hidden', showSticky ? 'false' : 'true');
      }
      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('visible', y > 300);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    scrollTopBtn?.addEventListener('click', () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });

    initHeaderLiveSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedComponents);
  } else {
    initSharedComponents();
  }

  window.KENTAINERS_ICONS = ICONS;
})();
