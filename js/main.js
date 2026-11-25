/**
 * Kentainers Limited - Main Client Scripts
 * Handles Category Tiles/Counts, Hero Slider, Featured Products, Shop Filter & Search,
 * Single Product Page, Quote Basket Checkout, Contact/Distributor Forms, and FAQ Accordions.
 *
 * Classic script reading window.SITE_CONFIG, window.PRODUCTS, and window.QuoteBasket.
 * No ES modules, no fetch(), safe for file:// and HTTP.
 */

(function () {
  'use strict';

  function getConfig() {
    return window.SITE_CONFIG || {
      company: 'Kentainers Limited',
      phones: [],
      email: '',
      whatsapp: { url: 'https://wa.me/254702233258', display: '+254 702 233258' },
      factories: []
    };
  }

  // Category inline SVG illustrations for branded placeholders
  const CATEGORY_SVGS = {
    'water-storage': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c-5.33 4-8 8-8 12 0 4.42 3.58 8 8 8s8-3.58 8-8c0-4-2.67-8-8-12zm0 18c-3.31 0-6-2.69-6-6 0-2.97 1.83-5.96 6-9.67 4.17 3.71 6 6.7 6 9.67 0 3.31-2.69 6-6 6z"/></svg>',
    'pipes-fittings': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v3H4zm0 5h16v3H4zm0 5h16v3H4z"/></svg>',
    'sanitation-waste': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/></svg>',
    'agriculture-biogas': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 3.8l5 4.5v6.7h-2v-6H9v6H7v-6.7l5-4.5z"/></svg>',
    'material-handling': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v3.01c0 1.06.84 1.93 1.89 1.99v9.01C3.89 19.11 4.78 20 5.89 20h12.22c1.11 0 2-.89 2-1.99V9c1.05-.06 1.89-.93 1.89-1.99V4c0-1.1-.9-2-2-2zm-1 16H5V9h14v9zm1-11H4V4h16v3z"/></svg>',
    'furniture-qdesk': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18v3h3v-3h10v3h3v-3h1a1 1 0 001-1V8a1 1 0 00-1-1H3a1 1 0 00-1 1v9a1 1 0 001 1h1zm2-9h12v7H6V9z"/></svg>'
  };

  // --- 1. WoodMart-style Product Card Generator (Untinted, Equal Heights, Add to Quote + Details) ---
  function createProductCardHTML(product) {
    const catSvg = CATEGORY_SVGS[product.categorySlug] || CATEGORY_SVGS['water-storage'];
    const bgStyle = product.thumbBg ? `style="background-color: ${product.thumbBg};"` : '';

    let mediaHTML = '';
    if (product.hasPhoto) {
      mediaHTML = `
        <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="product-card-thumb" ${bgStyle} aria-label="View details for ${product.name}">
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" width="300" height="225">
        </a>
      `;
    } else {
      mediaHTML = `
        <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="product-card-thumb" ${bgStyle} aria-label="View details for ${product.name}">
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" width="300" height="225"
               onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">
          <div class="branded-placeholder">
            <div class="branded-placeholder-icon">${catSvg}</div>
            <span class="branded-placeholder-cat">${product.category}</span>
            <span class="branded-placeholder-note">Product photo coming soon</span>
          </div>
        </a>
      `;
    }

    return `
      <article class="product-card" data-category="${product.categorySlug}" data-slug="${product.slug}">
        ${mediaHTML}
        <div class="product-card-body">
          <span class="product-card-category">${product.category}</span>
          <h3 class="product-card-title">
            <a href="product.html?slug=${encodeURIComponent(product.slug)}">${product.name}</a>
          </h3>
          <div class="product-card-footer">
            <button type="button" class="btn btn-yellow btn-sm btn-add-quote" data-add-quote="${product.slug}" aria-label="Add ${product.name} to quote basket">
              Add to quote
            </button>
            <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="btn btn-outline btn-sm" aria-label="Details for ${product.name}">
              Details
            </a>
          </div>
        </div>
      </article>
    `;
  }

  // Global delegate for Add to Quote buttons across homepage, shop, and product pages
  function initQuoteBasketActions() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-add-quote]');
      if (!btn || !window.QuoteBasket) return;
      const slug = btn.getAttribute('data-add-quote');
      const qtyInputId = btn.getAttribute('data-qty-input');
      const qty = qtyInputId ? (parseInt(document.getElementById(qtyInputId)?.value, 10) || 1) : 1;
      window.QuoteBasket.addItem(slug, qty);
    });
  }

  // --- 2. Clear Image Slider Band (Homepage 4b) ---
  function initHeroSlider() {
    const slider = document.querySelector('.hero-slider-section');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');
    if (!slides.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentIndex = 0;
    let timer = null;
    const intervalTime = 6000;

    function goToSlide(index) {
      slides[currentIndex]?.classList.remove('active');
      dots[currentIndex]?.classList.remove('active');
      dots[currentIndex]?.setAttribute('aria-selected', 'false');

      currentIndex = (index + slides.length) % slides.length;

      slides[currentIndex]?.classList.add('active');
      dots[currentIndex]?.classList.add('active');
      dots[currentIndex]?.setAttribute('aria-selected', 'true');
    }

    function nextSlide() { goToSlide(currentIndex + 1); }
    function prevSlide() { goToSlide(currentIndex - 1); }

    function startAutoPlay() {
      stopAutoPlay();
      if (prefersReducedMotion) return;
      timer = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    nextBtn?.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    prevBtn?.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoPlay();
      });
    });

    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
    slider.addEventListener('focusin', stopAutoPlay);
    slider.addEventListener('focusout', startAutoPlay);

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { prevSlide(); startAutoPlay(); }
      else if (e.key === 'ArrowRight') { nextSlide(); startAutoPlay(); }
    });

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (diff > 50) { nextSlide(); startAutoPlay(); }
      else if (diff < -50) { prevSlide(); startAutoPlay(); }
    }, { passive: true });

    startAutoPlay();
  }

  // --- 3. About Page Dynamic Category Grid ---
  function initAboutCategoriesGrid() {
    const target = document.getElementById('aboutCategoriesGrid');
    if (!target) return;
    const categories = window.KENTAINERS_CATEGORIES || [];
    const products = window.PRODUCTS || [];

    target.innerHTML = categories.map(cat => {
      const count = products.filter(p => p.categorySlug === cat.slug).length;
      const bg = cat.tileBg ? `style="background-color: ${cat.tileBg};"` : '';
      return `
        <a href="shop.html?category=${encodeURIComponent(cat.slug)}" class="about-cat-card" ${bg}>
          <div class="about-cat-img-wrap">
            <img src="${cat.tileImage}" alt="${cat.name}" class="about-cat-img" loading="lazy">
          </div>
          <div class="about-cat-info">
            <h3 class="about-cat-name">${cat.name}</h3>
            <span class="about-cat-count">${count} ${count === 1 ? 'product' : 'products'}</span>
          </div>
        </a>
      `;
    }).join('');
  }

  // --- 4. Homepage Featured Products (8 items, real photos only) ---
  function initFeaturedProducts() {
    const target = document.getElementById('featuredProductsGrid');
    if (!target) return;
    if (typeof getFeaturedProducts === 'function') {
      const featured = getFeaturedProducts(8);
      target.innerHTML = featured.map(createProductCardHTML).join('');
    }
  }

  // --- 5. Shop / Catalogue Page ---
  function normalizeQuery(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[,.-]/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/(\d+)\s*(litres|litre|liters|liter|ltrs|ltr|l)\b/g, '$1l')
      .replace(/(\d+)\s*mm\b/g, '$1mm')
      .trim();
  }

  function initShopCatalogue() {
    const productGrid = document.getElementById('shopProductGrid');
    if (!productGrid) return;
    const products = window.PRODUCTS || (typeof KENTAINERS_PRODUCTS !== 'undefined' ? KENTAINERS_PRODUCTS : []);
    if (!products.length) return;

    const cfg = getConfig();
    const pills = document.querySelectorAll('.filter-pill');
    const searchInput = document.getElementById('shopSearchInput');
    const resultCountEl = document.getElementById('shopResultCount');
    const activeCategoryLabel = document.getElementById('shopActiveCategory');

    const urlParams = new URLSearchParams(window.location.search);
    let activeCategory = urlParams.get('category') || 'all';
    let searchQuery = urlParams.get('q') || urlParams.get('search') || '';

    if (searchInput && searchQuery) searchInput.value = searchQuery;

    function renderFilteredProducts() {
      const q = normalizeQuery(searchQuery);
      const cat = (activeCategory || 'all').trim().toLowerCase();

      const filtered = products.filter(item => {
        const matchesCat = (cat === 'all' || item.categorySlug === cat);
        if (!q) return matchesCat;

        const queryTokens = q.split(' ').filter(Boolean);
        const searchableText = normalizeQuery(
          `${item.name} ${item.category} ${item.shortDescription || ''} ${(item.keywords || []).join(' ')}`
        );

        return matchesCat && queryTokens.every(token => {
          if (token.endsWith('l') && token.length > 2) {
            const num = token.slice(0, -1);
            return searchableText.includes(token) || searchableText.includes(num);
          }
          return searchableText.includes(token);
        });
      });

      filtered.sort((a, b) => (b.hasPhoto ? 1 : 0) - (a.hasPhoto ? 1 : 0));

      pills.forEach(pill => {
        const pillCat = pill.getAttribute('data-category').toLowerCase();
        const isActive = pillCat === cat;
        pill.classList.toggle('active', isActive);
        pill.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      const catDef = (window.KENTAINERS_CATEGORIES || []).find(c => c.slug === cat);
      if (activeCategoryLabel) {
        activeCategoryLabel.textContent = searchQuery
          ? `Search results for "${searchQuery}"`
          : (catDef ? catDef.name : 'Complete Product Catalogue');
      }

      if (resultCountEl) {
        resultCountEl.innerHTML = searchQuery
          ? `Showing ${filtered.length} of ${products.length} products <a href="shop.html?category=${encodeURIComponent(cat)}" style="margin-left: 8px; color: var(--blue); text-decoration: underline;">Clear search</a>`
          : `Showing ${filtered.length} of ${products.length} products`;
      }

      if (filtered.length > 0) {
        productGrid.innerHTML = filtered.map(createProductCardHTML).join('');
      } else {
        productGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; background: var(--tile); border-radius: var(--radius); border: 1px dashed var(--border);">
            <h3 style="margin-bottom: 8px;">No matching products found</h3>
            <p style="color: var(--text-muted); margin-bottom: 20px;">We couldn't find any products matching "${searchQuery}". Check spelling or browse another category.</p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
              <button type="button" class="btn btn-outline btn-sm" id="resetFiltersBtn">Reset Filters</button>
              <a href="${cfg.whatsapp.url}?text=${encodeURIComponent(`Hello Kentainers, I am looking for: ${searchQuery}`)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        `;
        document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
          activeCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          const newUrl = new URL(window.location);
          newUrl.searchParams.delete('q');
          newUrl.searchParams.delete('search');
          newUrl.searchParams.set('category', 'all');
          window.history.replaceState({}, '', newUrl);
          renderFilteredProducts();
        });
      }
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        activeCategory = pill.getAttribute('data-category');
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('category', activeCategory);
        if (!searchQuery) newUrl.searchParams.delete('q');
        window.history.replaceState({}, '', newUrl);
        renderFilteredProducts();
      });
    });

    let searchDebounce = null;
    searchInput?.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        searchQuery = e.target.value;
        const newUrl = new URL(window.location);
        if (searchQuery.trim()) newUrl.searchParams.set('q', searchQuery.trim());
        else {
          newUrl.searchParams.delete('q');
          newUrl.searchParams.delete('search');
        }
        window.history.replaceState({}, '', newUrl);
        renderFilteredProducts();
      }, 200);
    });

    renderFilteredProducts();
  }

  // --- 6. Single Product Detail Page ---
  function initSingleProductPage() {
    const singleProductRoot = document.getElementById('singleProductRoot');
    if (!singleProductRoot) return;
    const products = window.PRODUCTS || [];
    if (!products.length) return;

    const cfg = getConfig();
    const params = new URLSearchParams(window.location.search);
    const product = getProductBySlug(params.get('slug')) || products[0];

    document.title = `${product.name} | ${cfg.company}`;
    const pageHeroTitle = document.getElementById('pageHeroProductTitle');
    if (pageHeroTitle) pageHeroTitle.textContent = product.name;
    const breadcrumbCurrent = document.getElementById('breadcrumbProductTitle');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
    const breadcrumbCat = document.getElementById('breadcrumbCategory');
    if (breadcrumbCat) {
      breadcrumbCat.textContent = product.category;
      breadcrumbCat.href = `shop.html?category=${encodeURIComponent(product.categorySlug)}`;
    }

    let mainVisualHTML = '';
    let thumbsHTML = '';
    if (product.hasPhoto) {
      mainVisualHTML = `<img src="${product.image}" id="mainProductImg" alt="${product.name}" width="500" height="420" fetchpriority="high">`;
      if (product.gallery && product.gallery.length > 1) {
        thumbsHTML = `
          <div class="gallery-thumbs" role="tablist" aria-label="Product image gallery">
            ${product.gallery.map((img, idx) => `
              <img src="${img}" alt="${product.name} view ${idx + 1}" class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-full="${img}" role="tab" tabindex="0">
            `).join('')}
          </div>
        `;
      }
    } else {
      const catSvg = CATEGORY_SVGS[product.categorySlug] || CATEGORY_SVGS['water-storage'];
      mainVisualHTML = `
        <img src="${product.image}" alt="${product.name}" id="mainProductImg" style="display:none;"
             onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';"
             onload="this.style.display='block'; if(this.nextElementSibling) this.nextElementSibling.style.display='none';">
        <div class="branded-placeholder" style="height: 100%;">
          <div class="branded-placeholder-icon" style="width: 72px; height: 72px;">${catSvg}</div>
          <span class="branded-placeholder-cat">${product.category}</span>
          <span class="branded-placeholder-note">Product photo coming soon</span>
        </div>
      `;
    }

    const visualStyle = product.thumbBg ? `style="background-color: ${product.thumbBg};"` : '';
    const waHref = `${cfg.whatsapp.url}?text=${encodeURIComponent(`Hello ${cfg.company}, I would like pricing for: ${product.name}`)}`;

    singleProductRoot.innerHTML = `
      <div class="product-single-grid">
        <div class="product-gallery-wrap">
          <div class="product-main-visual" id="mainVisualContainer" ${visualStyle}>
            ${mainVisualHTML}
          </div>
          ${thumbsHTML}
        </div>

        <div class="product-info-panel">
          <span class="product-card-category">${product.category}</span>
          <h2 style="font-size: clamp(1.6rem, 3vw, 2.1rem); margin-bottom: var(--space-2); color: var(--blue-dark);">${product.name}</h2>
          <p class="lead">${product.shortDescription}</p>

          <div class="product-price-callout">
            <h4 style="margin-bottom: 4px; color: var(--blue-dark);">Pricing &amp; Delivery Quotation</h4>
            <p>Add items to your Quote Basket or request pricing directly from our sales team for your delivery location.</p>
          </div>

          <table class="product-specs-table" aria-label="Product Specifications">
            <tbody>
              <tr><th>Category</th><td>${product.category}</td></tr>
              ${product.capacity ? `<tr><th>Capacity / Sizes</th><td>${product.capacity}</td></tr>` : ''}
              ${product.dimensions ? `<tr><th>Format</th><td>${product.dimensions}</td></tr>` : ''}
              ${product.application ? `<tr><th>Applications</th><td>${product.application}</td></tr>` : ''}
              <tr><th>Manufacturing</th><td>Rotational / Injection Moulding</td></tr>
            </tbody>
          </table>

          <h4 style="margin-bottom: 10px;">Product Details</h4>
          <ul class="features-list">
            ${product.features.map(f => `<li>${f}</li>`).join('')}
          </ul>

          <div class="product-actions-bar">
            <div class="qty-inline-wrap">
              <label for="singleProductQty" class="sr-only">Quantity</label>
              <input type="number" id="singleProductQty" class="form-control qty-inline-input" value="1" min="1" max="999" aria-label="Quantity">
              <button type="button" class="btn btn-yellow btn-lg" data-add-quote="${product.slug}" data-qty-input="singleProductQty">
                Add to quote
              </button>
            </div>
            <a href="request-a-quote.html" class="btn btn-outline btn-lg">Details &amp; Basket</a>
            <a href="${waHref}" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>

          <div style="font-size: 0.88rem; color: var(--text-muted); border-top: 1px solid var(--border); padding-top: 16px;">
            Need installation guidance? Visit <a href="plumbers-hub.html" style="text-decoration: underline;">Plumber's Hub</a> or find a stockist on <a href="find-a-distributor.html" style="text-decoration: underline;">Find a Distributor</a>.
          </div>
        </div>
      </div>
    `;

    const thumbs = singleProductRoot.querySelectorAll('.gallery-thumb');
    const mainImg = singleProductRoot.querySelector('#mainProductImg');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) mainImg.src = thumb.getAttribute('data-full');
      });
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          thumb.click();
        }
      });
    });

    const relatedTarget = document.getElementById('relatedProductsGrid');
    if (relatedTarget && typeof getRelatedProducts === 'function') {
      relatedTarget.innerHTML = getRelatedProducts(product.slug, 4).map(createProductCardHTML).join('');
    }
  }

  // --- 7. Quote Basket & Request a Quote Form (Task 3.7) ---
  function initQuoteForm() {
    const form = document.getElementById('requestQuoteForm');
    if (!form) return;

    const cfg = getConfig();
    const products = window.PRODUCTS || [];
    const basketRoot = document.getElementById('quoteBasketContainer');
    const quickAddSelect = document.getElementById('quoteQuickAddSelect');
    const quickAddBtn = document.getElementById('quoteQuickAddBtn');

    // Populate quick-add product selector from window.PRODUCTS
    if (quickAddSelect) {
      const grouped = {};
      products.forEach(p => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
      });
      quickAddSelect.innerHTML = '<option value="">-- Add another product to basket --</option>' +
        Object.keys(grouped).map(cat => `
          <optgroup label="${cat}">
            ${grouped[cat].map(p => `<option value="${p.slug}">${p.name}</option>`).join('')}
          </optgroup>
        `).join('');
    }

    // Check URL param ?product= (by slug or name) and add if not present
    const params = new URLSearchParams(window.location.search);
    const prefill = params.get('product');
    if (prefill && window.QuoteBasket) {
      const found = products.find(p =>
        p.slug.toLowerCase() === prefill.toLowerCase() ||
        p.name.toLowerCase() === prefill.toLowerCase()
      );
      if (found) {
        const current = window.QuoteBasket.getItems();
        if (!current.some(i => i.slug === found.slug)) {
          window.QuoteBasket.addItem(found.slug, 1);
        }
      }
    }

    quickAddBtn?.addEventListener('click', () => {
      const slug = quickAddSelect?.value;
      if (!slug) {
        quickAddSelect?.focus();
        return;
      }
      window.QuoteBasket?.addItem(slug, 1);
      if (quickAddSelect) quickAddSelect.value = '';
    });

    function renderBasket() {
      if (!basketRoot || !window.QuoteBasket) return;
      const items = window.QuoteBasket.getItems();

      if (!items.length) {
        basketRoot.innerHTML = `
          <div class="basket-empty-state">
            <p><strong>Your quote basket is currently empty.</strong></p>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">
              Browse our catalogue and click <strong>Add to quote</strong> on any product, or add an item using the selector below.
            </p>
            <a href="shop.html" class="btn btn-primary btn-sm">Browse Catalogue</a>
          </div>
        `;
        return;
      }

      basketRoot.innerHTML = `
        <div class="basket-items-list">
          ${items.map(item => `
            <div class="basket-item-row" data-slug="${item.slug}">
              <div class="basket-item-thumb">
                ${item.image ? `<img src="${item.image}" alt="" width="48" height="48">` : `<span>${(item.category || 'P').slice(0, 1)}</span>`}
              </div>
              <div class="basket-item-info">
                <a href="product.html?slug=${encodeURIComponent(item.slug)}" class="basket-item-name">${item.name}</a>
                <span class="basket-item-cat">${item.category}</span>
              </div>
              <div class="basket-qty-stepper" aria-label="Quantity for ${item.name}">
                <button type="button" class="qty-step-btn" data-qty-delta="-1" data-slug="${item.slug}" aria-label="Decrease quantity">-</button>
                <input type="number" class="qty-step-value" value="${item.qty}" min="1" max="999" data-qty-slug="${item.slug}" aria-label="Quantity">
                <button type="button" class="qty-step-btn" data-qty-delta="1" data-slug="${item.slug}" aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="basket-remove-btn" data-remove-slug="${item.slug}" aria-label="Remove ${item.name}">&times;</button>
            </div>
          `).join('')}
        </div>
      `;
    }

    basketRoot?.addEventListener('click', (e) => {
      const stepBtn = e.target.closest('[data-qty-delta]');
      if (stepBtn && window.QuoteBasket) {
        const slug = stepBtn.getAttribute('data-slug');
        const delta = parseInt(stepBtn.getAttribute('data-qty-delta'), 10);
        const item = window.QuoteBasket.getItems().find(i => i.slug === slug);
        if (item) {
          window.QuoteBasket.setQty(slug, (parseInt(item.qty, 10) || 1) + delta);
        }
        return;
      }
      const removeBtn = e.target.closest('[data-remove-slug]');
      if (removeBtn && window.QuoteBasket) {
        window.QuoteBasket.removeItem(removeBtn.getAttribute('data-remove-slug'));
      }
    });

    basketRoot?.addEventListener('change', (e) => {
      const input = e.target.closest('[data-qty-slug]');
      if (input && window.QuoteBasket) {
        window.QuoteBasket.setQty(input.getAttribute('data-qty-slug'), input.value);
      }
    });

    document.addEventListener('kentainers:basket-updated', renderBasket);
    renderBasket();

    function validateField(el, valid) {
      if (!el) return true;
      el.classList.toggle('is-invalid', !valid);
      return valid;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameEl = document.getElementById('quoteName');
      const phoneEl = document.getElementById('quotePhone');
      const locEl = document.getElementById('quoteLocation');
      const notesEl = document.getElementById('quoteNotes');

      const name = nameEl?.value.trim() || '';
      const phone = phoneEl?.value.trim() || '';
      const location = locEl?.value.trim() || '';
      const notes = notesEl?.value.trim() || '';

      let items = window.QuoteBasket ? window.QuoteBasket.getItems() : [];
      if (!items.length && quickAddSelect?.value) {
        window.QuoteBasket?.addItem(quickAddSelect.value, 1);
        items = window.QuoteBasket ? window.QuoteBasket.getItems() : [];
      }

      const vName = validateField(nameEl, name.length >= 2);
      const vPhone = validateField(phoneEl, phone.replace(/\D/g, '').length >= 9);
      const vLoc = validateField(locEl, location.length >= 2);

      const statusBox = document.getElementById('quoteFormStatus');

      if (!vName || !vPhone || !vLoc) {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.innerHTML = `<div class="form-feedback error">Please enter your valid Name, Phone number, and Delivery Location.</div>`;
        }
        return;
      }

      if (!items.length) {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.innerHTML = `<div class="form-feedback error">Please add at least one product to your Quote Basket before submitting.</div>`;
        }
        return;
      }

      const lines = items.map((i, idx) => `${idx + 1}. ${i.name} (Qty: ${i.qty})`).join('\n');
      const plainMsg =
        `Hello ${cfg.company},\n\n` +
        `Please send an official price quotation for:\n${lines}\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Delivery Location: ${location}\n` +
        (notes ? `Notes: ${notes}\n` : '');

      const waUrl = `${cfg.whatsapp.url}?text=${encodeURIComponent(plainMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div class="form-feedback success">
            <strong>Quotation request prepared, ${name}!</strong> WhatsApp has opened with all ${items.length} item(s) listed.
            If WhatsApp did not open, <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: 600;">click here to send on WhatsApp (${cfg.whatsapp.display})</a>.
          </div>
        `;
      }
    });
  }

  // --- 8. Contact Us Form ---
  function initContactForm() {
    const contactForm = document.getElementById('contactUsForm');
    if (!contactForm) return;
    const cfg = getConfig();

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = document.getElementById('contactName');
      const phoneEl = document.getElementById('contactPhone');
      const emailEl = document.getElementById('contactEmail');
      const subjectEl = document.getElementById('contactSubject');
      const messageEl = document.getElementById('contactMessage');

      const name = nameEl?.value.trim() || '';
      const phone = phoneEl?.value.trim() || '';
      const email = emailEl?.value.trim() || '';
      const subject = subjectEl?.value.trim() || '';
      const messageText = messageEl?.value.trim() || '';

      nameEl?.classList.toggle('is-invalid', !name);
      phoneEl?.classList.toggle('is-invalid', phone.replace(/\D/g, '').length < 9);
      messageEl?.classList.toggle('is-invalid', !messageText);

      const statusBox = document.getElementById('contactFormStatus');
      if (!name || phone.replace(/\D/g, '').length < 9 || !messageText) {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.innerHTML = `<div class="form-feedback error">Please fill in your Name, valid Phone number, and Message.</div>`;
        }
        return;
      }

      const plainMsg =
        `Hello ${cfg.company} Support,\n\n` +
        `From: ${name}\nPhone: ${phone}\n` +
        (email ? `Email: ${email}\n` : '') +
        (subject ? `Subject: ${subject}\n` : '') +
        `Message: ${messageText}`;

      const waUrl = `${cfg.whatsapp.url}?text=${encodeURIComponent(plainMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div class="form-feedback success">
            <strong>Message ready!</strong> WhatsApp has opened to send your inquiry to ${cfg.whatsapp.display}.
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: 600;">Click here to open WhatsApp</a>.
          </div>
        `;
      }
    });
  }

  // --- 9. Distributor Application Form ---
  function initDistributorForm() {
    const distForm = document.getElementById('distributorApplicationForm');
    if (!distForm) return;
    const cfg = getConfig();

    distForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const businessEl = document.getElementById('distBusinessName');
      const contactEl = document.getElementById('distContactPerson');
      const phoneEl = document.getElementById('distPhone');
      const countyEl = document.getElementById('distCounty');
      const townEl = document.getElementById('distTown');
      const yearsEl = document.getElementById('distYears');

      const business = businessEl?.value.trim() || '';
      const contactPerson = contactEl?.value.trim() || '';
      const phone = phoneEl?.value.trim() || '';
      const county = countyEl?.value.trim() || '';
      const town = townEl?.value.trim() || '';
      const years = yearsEl?.value.trim() || '';

      businessEl?.classList.toggle('is-invalid', !business);
      contactEl?.classList.toggle('is-invalid', !contactPerson);
      phoneEl?.classList.toggle('is-invalid', phone.replace(/\D/g, '').length < 9);
      countyEl?.classList.toggle('is-invalid', !county);

      const statusBox = document.getElementById('distributorFormStatus');
      if (!business || !contactPerson || phone.replace(/\D/g, '').length < 9 || !county) {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.innerHTML = `<div class="form-feedback error">Please complete Business Name, Contact Person, valid Phone, and County.</div>`;
        }
        return;
      }

      const plainMsg =
        `Hello ${cfg.company} Commercial Desk,\n\n` +
        `AUTHORIZED STOCKIST APPLICATION\n` +
        `Business Name: ${business}\n` +
        `Contact Person: ${contactPerson}\n` +
        `Phone: ${phone}\n` +
        `Location: ${county}${town ? ' - ' + town : ''}\n` +
        (years ? `Years in Operation: ${years}\n` : '');

      const waUrl = `${cfg.whatsapp.url}?text=${encodeURIComponent(plainMsg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div class="form-feedback success">
            <strong>Application prepared!</strong> WhatsApp has opened for ${cfg.whatsapp.display}.
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; font-weight: 600;">Click here if WhatsApp did not open</a>.
          </div>
        `;
      }
    });
  }

  // --- 10. FAQ Accordions ---
  function initFaqAccordions() {
    document.querySelectorAll('.faq-header').forEach(header => {
      const toggle = () => {
        const body = header.nextElementSibling;
        const isOpen = header.classList.toggle('open');
        body?.classList.toggle('open', isOpen);
        header.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      };
      header.addEventListener('click', toggle);
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initQuoteBasketActions();
    initHeroSlider();
    initAboutCategoriesGrid();
    initFeaturedProducts();
    initShopCatalogue();
    initSingleProductPage();
    initQuoteForm();
    initContactForm();
    initDistributorForm();
    initFaqAccordions();
  });
})();
