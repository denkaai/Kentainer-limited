/**
 * Kentainers Limited - Main Client Scripts
 * Handles Slider, Counters, Reveal-on-scroll, Live Search & Filter,
 * Product Single Page rendering, Accordions, and WhatsApp Form Handlers.
 * 
 * Safe, verified specifications only. No invented claims.
 */

(function () {
  'use strict';

  // Category inline SVG illustrations for branded placeholders
  const CATEGORY_SVGS = {
    'water-storage': `<svg viewBox="0 0 24 24"><path d="M12 2c-5.33 4-8 8-8 12 0 4.42 3.58 8 8 8s8-3.58 8-8c0-4-2.67-8-8-12zm0 18c-3.31 0-6-2.69-6-6 0-2.97 1.83-5.96 6-9.67 4.17 3.71 6 6.7 6 9.67 0 3.31-2.69 6-6 6z"/></svg>`,
    'pipes-fittings': `<svg viewBox="0 0 24 24"><path d="M4 6h16v3H4zm0 5h16v3H4zm0 5h16v3H4z"/></svg>`,
    'sanitation-waste': `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/></svg>`,
    'agriculture-biogas': `<svg viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 3.8l5 4.5v6.7h-2v-6H9v6H7v-6.7l5-4.5z"/></svg>`,
    'material-handling': `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v3.01c0 1.06.84 1.93 1.89 1.99v9.01C3.89 19.11 4.78 20 5.89 20h12.22c1.11 0 2-.89 2-1.99V9c1.05-.06 1.89-.93 1.89-1.99V4c0-1.1-.9-2-2-2zm-1 16H5V9h14v9zm1-11H4V4h16v3z"/></svg>`,
    'furniture-qdesk': `<svg viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-3h1a1 1 0 001-1V8a1 1 0 00-1-1H3a1 1 0 00-1 1v9a1 1 0 001 1h1zm2-9h12v7H6V9z"/></svg>`
  };

  // --- 1. Product Card Template Generator ---
  function createProductCardHTML(product) {
    const badgeHTML = product.badge
      ? `<span class="product-card-badge">${product.badge}</span>`
      : '';

    const catSvg = CATEGORY_SVGS[product.categorySlug] || CATEGORY_SVGS['water-storage'];

    // Zero-code image drop-in with branded placeholder fallback
    let mediaHTML = '';
    if (product.hasPhoto) {
      mediaHTML = `
        <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="product-card-thumb" aria-label="View specifications for ${product.name}">
          <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy" width="300" height="225">
        </a>
      `;
    } else {
      // Branded placeholder with automatic zero-code image swap if photo is dropped into images/web/
      mediaHTML = `
        <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="product-card-thumb" aria-label="View specifications for ${product.name}">
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

    const capacityPill = product.capacity ? `<span class="spec-pill">${product.capacity}</span>` : '';
    const safeNotePill = `<span class="spec-pill">Rotomoulded PE</span>`;

    return `
      <article class="product-card" data-category="${product.categorySlug}" data-slug="${product.slug}">
        ${badgeHTML}
        ${mediaHTML}
        <div class="product-card-body">
          <span class="product-card-category">${product.category}</span>
          <h3 class="product-card-title">
            <a href="product.html?slug=${encodeURIComponent(product.slug)}">${product.name}</a>
          </h3>
          <p class="product-card-desc">${product.shortDescription}</p>
          <div class="product-card-specs">
            ${capacityPill}
            ${safeNotePill}
          </div>
          <div class="product-card-footer">
            <a href="request-a-quote.html?product=${encodeURIComponent(product.name)}" class="btn btn-accent btn-sm" aria-label="Request price for ${product.name}">
              Request Price
            </a>
            <a href="product.html?slug=${encodeURIComponent(product.slug)}" class="btn btn-outline btn-sm" aria-label="Details for ${product.name}">
              Details
            </a>
          </div>
        </div>
      </article>
    `;
  }

  // --- 2. Redesigned Homepage Full-Bleed Hero Slider ---
  function initHeroSlider() {
    const slider = document.querySelector('.hero-slider-section');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');

    if (!slides.length) return;

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
      timer = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
      if (timer) clearInterval(timer);
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

    // Keyboard navigation
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { prevSlide(); startAutoPlay(); }
      else if (e.key === 'ArrowRight') { nextSlide(); startAutoPlay(); }
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextSlide();
        startAutoPlay();
      } else if (touchEndX - touchStartX > 50) {
        prevSlide();
        startAutoPlay();
      }
    }, { passive: true });

    startAutoPlay();
  }

  // --- 3. Verified Stats Counters (35 Years, 6 Categories, 3 Plants) ---
  function initCounters() {
    const statElements = document.querySelectorAll('.stat-number[data-target]');
    if (!statElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          const prefix = el.getAttribute('data-prefix') || '';
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1600;
          const startTime = performance.now();

          function updateCounter(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeOut * target);

            el.textContent = `${prefix}${currentVal}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.textContent = `${prefix}${target}${suffix}`;
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    statElements.forEach(el => observer.observe(el));
  }

  // --- 4. Reveal On Scroll Animation ---
  function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.fade-in-up');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  // --- 5. Homepage Featured Products (Real Photos Only!) ---
  function initFeaturedProducts() {
    const target = document.getElementById('featuredProductsGrid');
    if (!target) return;

    if (typeof getFeaturedProducts === 'function') {
      const featured = getFeaturedProducts(8);
      target.innerHTML = featured.map(createProductCardHTML).join('');
    }
  }

  // --- 6. Shop / Catalogue Page (Filtering & Live Search) ---
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

    if (typeof KENTAINERS_PRODUCTS === 'undefined') return;

    const pills = document.querySelectorAll('.filter-pill');
    const searchInput = document.getElementById('shopSearchInput');
    const resultCountEl = document.getElementById('shopResultCount');
    const activeCategoryLabel = document.getElementById('shopActiveCategory');

    const urlParams = new URLSearchParams(window.location.search);
    let activeCategory = urlParams.get('category') || 'all';
    let searchQuery = urlParams.get('q') || urlParams.get('search') || '';

    if (searchInput && searchQuery) {
      searchInput.value = searchQuery;
    }

    function renderFilteredProducts() {
      const q = normalizeQuery(searchQuery);
      const cat = (activeCategory || 'all').trim().toLowerCase();

      const filtered = KENTAINERS_PRODUCTS.filter(item => {
        // Category check
        const matchesCat = (cat === 'all' || item.categorySlug === cat);

        // Search query check
        if (!q) return matchesCat;

        const queryTokens = q.split(' ').filter(t => t.length > 0);
        const searchableText = normalizeQuery(
          `${item.name} ${item.category} ${item.shortDescription || ''} ${(item.keywords || []).join(' ')}`
        );

        const matchesQuery = queryTokens.every(token => {
          if (token.endsWith('l') && token.length > 2) {
            const num = token.slice(0, -1);
            return searchableText.includes(token) || searchableText.includes(num);
          }
          return searchableText.includes(token);
        });

        return matchesCat && matchesQuery;
      });

      // Sort: products with real photos first, then those without
      filtered.sort((a, b) => (b.hasPhoto ? 1 : 0) - (a.hasPhoto ? 1 : 0));

      // Update pills
      pills.forEach(pill => {
        const pillCat = pill.getAttribute('data-category').toLowerCase();
        if (pillCat === cat) {
          pill.classList.add('active');
          pill.setAttribute('aria-pressed', 'true');
        } else {
          pill.classList.remove('active');
          pill.setAttribute('aria-pressed', 'false');
        }
      });

      // Update Category Heading & Count
      const catDef = (typeof KENTAINERS_CATEGORIES !== 'undefined')
        ? KENTAINERS_CATEGORIES.find(c => c.slug === cat)
        : null;

      if (activeCategoryLabel) {
        if (searchQuery) {
          activeCategoryLabel.textContent = `Search results for "${searchQuery}"`;
        } else {
          activeCategoryLabel.textContent = catDef ? catDef.name : 'Complete Product Catalogue';
        }
      }

      if (resultCountEl) {
        if (searchQuery) {
          resultCountEl.innerHTML = `Showing ${filtered.length} of ${KENTAINERS_PRODUCTS.length} products <a href="shop.html?category=${encodeURIComponent(cat)}" style="margin-left: 8px; color: var(--blue); text-decoration: underline; font-size: 0.8rem;">Clear search</a>`;
        } else {
          resultCountEl.textContent = `Showing ${filtered.length} of ${KENTAINERS_PRODUCTS.length} products`;
        }
      }

      // Render cards or friendly empty state
      if (filtered.length > 0) {
        productGrid.innerHTML = filtered.map(createProductCardHTML).join('');
      } else {
        productGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; background: var(--bg-alt); border-radius: var(--radius-lg); border: 1px dashed var(--border);">
            <div style="width: 56px; height: 56px; margin: 0 auto 16px; color: var(--text-light);">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </div>
            <h3 style="margin-bottom: 8px;">No matching products found</h3>
            <p style="color: var(--text-muted); margin-bottom: 20px;">We couldn't find any products matching "${searchQuery}". Check spelling or browse our full catalogue.</p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
              <button type="button" class="btn btn-outline btn-sm" id="resetFiltersBtn">Reset All Filters</button>
              <a href="https://wa.me/254702233258?text=Hello%20Kentainers%2C%20I%20am%20looking%20for%3A%20${encodeURIComponent(searchQuery)}" class="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
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

    // Filter pill events
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

    // Debounced search input
    let searchDebounce = null;
    searchInput?.addEventListener('input', (e) => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        searchQuery = e.target.value;
        const newUrl = new URL(window.location);
        if (searchQuery.trim()) {
          newUrl.searchParams.set('q', searchQuery.trim());
        } else {
          newUrl.searchParams.delete('q');
          newUrl.searchParams.delete('search');
        }
        window.history.replaceState({}, '', newUrl);
        renderFilteredProducts();
      }, 200);
    });

    renderFilteredProducts();
  }

  // --- 7. Single Product Page Loader (reads ?slug=) ---
  function initSingleProductPage() {
    const singleProductRoot = document.getElementById('singleProductRoot');
    if (!singleProductRoot) return;

    if (typeof KENTAINERS_PRODUCTS === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    const product = getProductBySlug(slug) || KENTAINERS_PRODUCTS[0];

    if (!product) {
      singleProductRoot.innerHTML = `
        <div class="container text-center" style="padding: 80px 0;">
          <h2>Product Not Found</h2>
          <p class="lead">The product you are looking for does not exist or may have been updated.</p>
          <a href="shop.html" class="btn btn-primary">Browse Catalogue</a>
        </div>
      `;
      return;
    }

    document.title = `${product.name} | Kentainers Limited Kenya`;

    const pageHeroTitle = document.getElementById('pageHeroProductTitle');
    if (pageHeroTitle) pageHeroTitle.textContent = product.name;

    const breadcrumbCurrent = document.getElementById('breadcrumbProductTitle');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

    const breadcrumbCat = document.getElementById('breadcrumbCategory');
    if (breadcrumbCat) {
      breadcrumbCat.textContent = product.category;
      breadcrumbCat.href = `shop.html?category=${encodeURIComponent(product.categorySlug)}`;
    }

    // Gallery / Visuals
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
          <span class="branded-placeholder-cat" style="font-size: 0.95rem;">${product.category}</span>
          <span class="branded-placeholder-note" style="font-size: 0.85rem;">Product photo coming soon</span>
        </div>
      `;
    }

    const featuresListHTML = product.features.map(f => `<li>${f}</li>`).join('');

    singleProductRoot.innerHTML = `
      <div class="product-single-grid">
        <div class="product-gallery-wrap">
          <div class="product-main-visual" id="mainVisualContainer">
            ${mainVisualHTML}
          </div>
          ${thumbsHTML}
        </div>

        <div class="product-info-panel">
          <div class="product-info-meta">
            <span class="product-card-badge">${product.badge || 'Quality Guaranteed'}</span>
            <span class="product-card-category">${product.category}</span>
          </div>

          <h2 style="font-size: clamp(1.75rem, 3vw, 2.25rem); margin-bottom: var(--space-2); color: var(--blue-dark);">${product.name}</h2>
          <p class="lead">${product.shortDescription}</p>

          <div class="product-price-callout">
            <h4 style="margin-bottom: 4px; color: var(--blue-dark);">Pricing & Delivery Information</h4>
            <p>Every product is priced factory-direct based on model specifications and required delivery location. Click below for an instant WhatsApp quotation.</p>
          </div>

          <table class="product-specs-table" aria-label="Product Specifications">
            <tbody>
              ${product.capacity ? `<tr><th>Model Capacity / Spec</th><td><strong>${product.capacity}</strong></td></tr>` : ''}
              ${product.dimensions ? `<tr><th>Profile / Format</th><td>${product.dimensions}</td></tr>` : ''}
              ${product.warranty ? `<tr><th>Warranty Coverage</th><td>${product.warranty}</td></tr>` : ''}
              ${product.application ? `<tr><th>Recommended Application</th><td>${product.application}</td></tr>` : ''}
              <tr><th>Manufacturing Method</th><td>Rotational Moulding (Seamless Polyethylene)</td></tr>
              <tr><th>Country of Origin</th><td>Made in Kenya (Nairobi, Kilifi, Kisumu Plants)</td></tr>
            </tbody>
          </table>

          <h4 style="margin-bottom: 12px;">Key Engineering Features</h4>
          <ul class="features-list">
            ${featuresListHTML}
          </ul>

          <div class="product-actions-bar">
            <a href="request-a-quote.html?product=${encodeURIComponent(product.name)}" class="btn btn-accent btn-lg" aria-label="Request Price for ${product.name}">
              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: currentColor;"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              <span>Request Price Quote</span>
            </a>
            <a href="https://wa.me/254702233258?text=Hello%20Kentainers%2C%20I%20am%20interested%20in%20pricing%20for%3A%20${encodeURIComponent(product.name)}" 
               class="btn btn-whatsapp btn-lg" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Ask about ${product.name} on WhatsApp">
              <svg viewBox="0 0 24 24" style="width: 20px; height: 20px; fill: currentColor;"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.82 2.41h-.01c-1.49 0-2.96-.4-4.24-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.76-.14-.25-.01-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>

          <div style="font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border); padding-top: 16px;">
            <strong>Need Installation Help?</strong> Visit our <a href="plumbers-hub.html" style="text-decoration: underline;">Plumber's Hub & Installation Guides</a> or locate your nearest <a href="find-a-distributor.html" style="text-decoration: underline;">Authorized Kentainers Stockist</a>.
          </div>
        </div>
      </div>
    `;

    // Gallery thumbnails
    const thumbs = singleProductRoot.querySelectorAll('.gallery-thumb');
    const mainImg = singleProductRoot.querySelector('#mainProductImg');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        if (mainImg) {
          mainImg.src = thumb.getAttribute('data-full');
        }
      });
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          thumb.click();
        }
      });
    });

    // Related products (same category)
    const relatedTarget = document.getElementById('relatedProductsGrid');
    if (relatedTarget) {
      const related = getRelatedProducts(product.slug, 4);
      relatedTarget.innerHTML = related.map(createProductCardHTML).join('');
    }
  }

  // --- 8. Request a Quote Form ---
  function initQuoteForm() {
    const form = document.getElementById('requestQuoteForm');
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const prefillProduct = params.get('product');
    const productSelect = document.getElementById('quoteProductSelect');
    if (productSelect && prefillProduct) {
      let matched = false;
      for (let opt of productSelect.options) {
        if (opt.value.toLowerCase() === prefillProduct.toLowerCase()) {
          opt.selected = true;
          matched = true;
          break;
        }
      }
      if (!matched) {
        const customOpt = new Option(prefillProduct, prefillProduct, true, true);
        productSelect.add(customOpt);
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quoteName')?.value.trim();
      const phone = document.getElementById('quotePhone')?.value.trim();
      const location = document.getElementById('quoteLocation')?.value.trim();
      const product = document.getElementById('quoteProductSelect')?.value.trim();
      const quantity = document.getElementById('quoteQuantity')?.value.trim() || '1';
      const notes = document.getElementById('quoteNotes')?.value.trim();

      if (!name || !phone || !location || !product) {
        alert('Please fill in all required fields (Name, Phone, Delivery Location, Product).');
        return;
      }

      const message = `Hello Kentainers Limited,%0A%0AI would like to request an official quotation for the following order:%0A` +
        `• *Full Name:* ${encodeURIComponent(name)}%0A` +
        `• *Phone:* ${encodeURIComponent(phone)}%0A` +
        `• *Delivery Location / County:* ${encodeURIComponent(location)}%0A` +
        `• *Product Required:* ${encodeURIComponent(product)}%0A` +
        `• *Quantity Needed:* ${encodeURIComponent(quantity)}%0A` +
        (notes ? `• *Special Notes:* ${encodeURIComponent(notes)}%0A` : '') +
        `%0APlease provide price quotation and delivery timeframe. Thank you!`;

      const waUrl = `https://wa.me/254702233258?text=${message}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      const statusBox = document.getElementById('quoteFormStatus');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div style="background: #e8f5e9; border: 1px solid #c8e6c9; color: #1b5e20; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <strong>Thank you, ${name}!</strong> Your quotation request has been prepared and WhatsApp has opened to submit directly to our sales desk (+254 702 233258). If WhatsApp didn't open automatically, <a href="${waUrl}" target="_blank" style="text-decoration: underline; font-weight: bold;">click here to send your inquiry</a>.
          </div>
        `;
      }
    });
  }

  // --- 9. Contact Us Form Handler ---
  function initContactForm() {
    const contactForm = document.getElementById('contactUsForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const subject = document.getElementById('contactSubject')?.value.trim();
      const messageText = document.getElementById('contactMessage')?.value.trim();

      if (!name || !phone || !messageText) {
        alert('Please provide your Name, Phone Number, and Message.');
        return;
      }

      const waMsg = `Hello Kentainers Limited Support,%0A%0A` +
        `• *From:* ${encodeURIComponent(name)}%0A` +
        `• *Phone:* ${encodeURIComponent(phone)}%0A` +
        (email ? `• *Email:* ${encodeURIComponent(email)}%0A` : '') +
        (subject ? `• *Subject:* ${encodeURIComponent(subject)}%0A` : '') +
        `• *Message:* ${encodeURIComponent(messageText)}%0A%0A` +
        `Looking forward to your assistance.`;

      const waUrl = `https://wa.me/254702233258?text=${waMsg}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      const statusBox = document.getElementById('contactFormStatus');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div style="background: #e8f5e9; border: 1px solid #c8e6c9; color: #1b5e20; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <strong>Message Formatted!</strong> WhatsApp has opened to send your inquiry to our central customer desk. If it did not open, <a href="${waUrl}" target="_blank" style="text-decoration: underline; font-weight: bold;">click here to chat on WhatsApp</a>.
          </div>
        `;
      }
    });
  }

  // --- 10. Distributor Application Form Handler ---
  function initDistributorForm() {
    const distForm = document.getElementById('distributorApplicationForm');
    if (!distForm) return;

    distForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const business = document.getElementById('distBusinessName')?.value.trim();
      const contactPerson = document.getElementById('distContactPerson')?.value.trim();
      const phone = document.getElementById('distPhone')?.value.trim();
      const county = document.getElementById('distCounty')?.value.trim();
      const town = document.getElementById('distTown')?.value.trim();
      const years = document.getElementById('distYears')?.value.trim();

      if (!business || !contactPerson || !phone || !county) {
        alert('Please fill in Business Name, Contact Person, Phone, and County.');
        return;
      }

      const waMsg = `Hello Kentainers Commercial Directorate,%0A%0A` +
        `*APPLICATION FOR AUTHORIZED STOCKIST / DISTRIBUTORSHIP:*%0A` +
        `• *Hardware / Business Name:* ${encodeURIComponent(business)}%0A` +
        `• *Proprietor / Contact:* ${encodeURIComponent(contactPerson)}%0A` +
        `• *Phone Number:* ${encodeURIComponent(phone)}%0A` +
        `• *County & Town:* ${encodeURIComponent(county)} - ${encodeURIComponent(town)}%0A` +
        `• *Years in Operation:* ${encodeURIComponent(years)}%0A%0A` +
        `We request dealership terms, wholesale price schedules, and consignment options.`;

      const waUrl = `https://wa.me/254702233258?text=${waMsg}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      const statusBox = document.getElementById('distributorFormStatus');
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div style="background: #e8f5e9; border: 1px solid #c8e6c9; color: #1b5e20; padding: 16px; border-radius: 8px; margin-top: 16px;">
            <strong>Application Prepared!</strong> WhatsApp has opened to connect you directly with our Commercial Distribution Manager. <a href="${waUrl}" target="_blank" style="text-decoration: underline; font-weight: bold;">Click here if WhatsApp didn't open automatically</a>.
          </div>
        `;
      }
    });
  }

  // --- 11. FAQ Accordion Handler (Plumber's Hub) ---
  function initFaqAccordions() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = header.classList.contains('open');

        // Toggle current
        if (isOpen) {
          header.classList.remove('open');
          body?.classList.remove('open');
        } else {
          header.classList.add('open');
          body?.classList.add('open');
        }
      });
    });
  }

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initCounters();
    initRevealOnScroll();
    initFeaturedProducts();
    initShopCatalogue();
    initSingleProductPage();
    initQuoteForm();
    initContactForm();
    initDistributorForm();
    initFaqAccordions();
  });
})();
