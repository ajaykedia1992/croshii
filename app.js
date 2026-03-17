/**
 * Croshii — App Logic
 * Handles: product rendering, filter, sort, modal, FAQ, nav, scroll reveal
 */

/* ── CONFIG ──────────────────────────────────────────────── */
const WA_NUMBER = '91XXXXXXXXXX'; // Replace with actual WhatsApp number (no + or spaces)

/* ── COLOUR → CSS BACKGROUND MAP ────────────────────────── */
const COLOUR_BG = {
  lightblue: '#a8d8ea',
  skyblue:   '#87ceeb',
  blue:      '#5b9bd5',
  green:     '#8bc34a',
  yellow:    '#f5c842',
  pink:      '#f4a7b9',
  red:       '#e05252',
  darkRed:   '#8b1a1a',
  darkred:   '#8b1a1a',
  lavender:  '#c9b1d9',
  white:     '#f0f0f0',
  beige:     '#d4b896',
  cream:     '#e8d5b7',
  brown:     '#8b6347',
  black:     '#2c2c2c',
};

/* ── STATE ───────────────────────────────────────────────── */
let activeFilter = 'all';
let activeSort   = 'default';
let currentProduct = null;
let currentColour  = null;

/* ══════════════════════════════════════════════════════════
   PRODUCT GRID
══════════════════════════════════════════════════════════ */
function getFilteredSorted() {
  let list = activeFilter === 'all'
    ? [...products]
    : products.filter(p => p.category === activeFilter);

  if (activeSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (activeSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (activeSort === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name));

  return list;
}

function colourDots(product) {
  const colours = Object.keys(product.images);
  if (colours.length <= 1) return '';
  return `<div class="card-colours">
    ${colours.slice(0, 5).map(c => `<span class="card-colour-dot" style="background:${COLOUR_BG[c] || '#ccc'}" title="${c}"></span>`).join('')}
    ${colours.length > 5 ? `<span class="card-colour-dot" style="background:#ccc;font-size:8px;display:flex;align-items:center;justify-content:center;color:#555">+${colours.length - 5}</span>` : ''}
  </div>`;
}

function badgeClass(badge) {
  const gold = ['Premium', 'Signature', 'Bestseller'];
  return gold.includes(badge) ? 'card-badge badge-gold' : 'card-badge';
}

function renderGrid() {
  const grid = document.getElementById('product-grid');
  const list = getFilteredSorted();

  if (list.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:3rem 0;">No products found.</p>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay:${i * 0.05}s">
      <div class="card-image-wrap">
        <img src="${p.images[p.defaultColor]}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="${badgeClass(p.badge)}">${p.badge}</span>` : ''}
        ${colourDots(p)}
      </div>
      <div class="card-body">
        <p class="card-id">${p.id}</p>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-price">₹${p.price.toLocaleString('en-IN')}</p>
        <span class="card-cta">View Details</span>
      </div>
    </div>
  `).join('');

  // Attach click listeners
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const product = products.find(p => p.id === card.dataset.id);
      if (product) openModal(product);
    });
  });
}

/* ── FILTER ──────────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});

/* ── SORT ────────────────────────────────────────────────── */
document.getElementById('sort-select').addEventListener('change', e => {
  activeSort = e.target.value;
  renderGrid();
});

/* ── FOOTER CATEGORY LINKS ───────────────────────────────── */
document.querySelectorAll('[data-filter-link]').forEach(link => {
  link.addEventListener('click', e => {
    const cat = link.dataset.filterLink;
    activeFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === cat);
    });
    renderGrid();
  });
});

/* ══════════════════════════════════════════════════════════
   MODAL
══════════════════════════════════════════════════════════ */
const overlay    = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

function openModal(product) {
  currentProduct = product;
  currentColour  = product.defaultColor;

  document.getElementById('modal-id').textContent    = product.id;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = `₹${product.price.toLocaleString('en-IN')}`;
  document.getElementById('modal-desc').textContent  = product.description;

  renderModalGallery(product, currentColour);
  renderColourSwatches(product);
  updateWALink(product, currentColour);

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  currentProduct = null;
  currentColour  = null;
}

function renderModalGallery(product, activeColour) {
  const mainImg  = document.getElementById('modal-img');
  const thumbsEl = document.getElementById('modal-thumbs');
  const colours  = Object.keys(product.images);

  mainImg.src = product.images[activeColour];
  mainImg.alt = `${product.name} — ${activeColour}`;

  if (colours.length > 1) {
    thumbsEl.innerHTML = colours.map(c => `
      <img src="${product.images[c]}"
           alt="${product.name} ${c}"
           class="modal-thumb${c === activeColour ? ' active' : ''}"
           data-colour="${c}"
           loading="lazy" />
    `).join('');
    thumbsEl.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        currentColour = thumb.dataset.colour;
        mainImg.src = product.images[currentColour];
        mainImg.alt = `${product.name} — ${currentColour}`;
        thumbsEl.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        // Sync swatch
        document.querySelectorAll('.colour-swatch').forEach(s => {
          s.classList.toggle('active', s.dataset.colour === currentColour);
        });
        updateWALink(product, currentColour);
      });
    });
  } else {
    thumbsEl.innerHTML = '';
  }
}

function renderColourSwatches(product) {
  const wrap     = document.getElementById('modal-colours-wrap');
  const swatches = document.getElementById('modal-colour-swatches');
  const colours  = Object.keys(product.images);

  if (colours.length <= 1) {
    wrap.style.display = 'none';
    return;
  }
  wrap.style.display = '';

  swatches.innerHTML = colours.map(c => `
    <span class="colour-swatch${c === currentColour ? ' active' : ''}"
          data-colour="${c}"
          style="background:${COLOUR_BG[c] || '#ccc'}"
          title="${c}">
      <span class="colour-swatch-tooltip">${c}</span>
    </span>
  `).join('');

  swatches.querySelectorAll('.colour-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      currentColour = swatch.dataset.colour;
      // Update main image
      const mainImg = document.getElementById('modal-img');
      mainImg.src = currentProduct.images[currentColour];
      mainImg.alt = `${currentProduct.name} — ${currentColour}`;
      // Update thumb active state
      document.querySelectorAll('.modal-thumb').forEach(t => {
        t.classList.toggle('active', t.dataset.colour === currentColour);
      });
      // Update swatch active state
      swatches.querySelectorAll('.colour-swatch').forEach(s => {
        s.classList.toggle('active', s.dataset.colour === currentColour);
      });
      updateWALink(currentProduct, currentColour);
    });
  });
}

function updateWALink(product, colour) {
  const colours = Object.keys(product.images);
  const colourText = colours.length > 1 ? ` — Colour: ${colour}` : '';
  const msg = encodeURIComponent(
    `Hi Croshii! I'd like to order:\n\n*${product.waText}*${colourText}\n\nPrice: ₹${product.price.toLocaleString('en-IN')}\n\nPlease confirm availability and payment details. Thank you!`
  );
  document.getElementById('modal-wa-btn').href = `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ══════════════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════════════ */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Toggle current
    if (!isOpen) item.classList.add('open');
  });
});

/* ══════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════ */
const header      = document.getElementById('site-header');
const hamburger   = document.getElementById('nav-hamburger');
const mobileMenu  = document.getElementById('mobile-menu');

// Sticky shadow on scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Hamburger toggle
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
renderGrid();
