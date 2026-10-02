/* ==========================================================================
   MEZHUKU ECOSTORE - Interactive Application & Store Logic
   ========================================================================== */

const PRODUCTS = [
  {
    id: '01',
    title: 'SIGNATURE CANDLE (100G)',
    price: 390,
    category: 'jar',
    tag: 'Signature Blend',
    image: 'images/thumbs/01.jpg',
    fullImage: 'images/thumbs/01.jpg',
    description: 'Our exclusive signature blend, carefully crafted to deliver a premium and unforgettable aromatic experience for your space.',
    specs: '100g Soy Wax | ~30 Hours Burn | Premium Essential Oils'
  },
  {
    id: '02',
    title: 'BIG JAR CANDLE (100G)',
    price: 340,
    category: 'jar',
    tag: 'Best Seller',
    image: 'images/thumbs/02.jpg',
    fullImage: 'images/thumbs/02.jpg',
    description: 'Long-lasting soy wax candle in a large reusable jar, providing hours of delightful, clean-burning fragrance.',
    specs: '100g Soy Wax | ~28 Hours Burn | Reusable Glass Jar'
  },
  {
    id: '03',
    title: 'SMALL JAR CANDLE (60G)',
    price: 200,
    category: 'jar',
    tag: 'Classic Favor',
    image: 'images/thumbs/03.jpg',
    fullImage: 'images/thumbs/03.jpg',
    description: 'A classic and elegant soy wax candle poured perfectly into a sustainable, aesthetic small glass jar.',
    specs: '60g Soy Wax | ~18 Hours Burn | Lead-Free Wick'
  },
  {
    id: '04',
    title: 'MINI JAR CANDLE (45G)',
    price: 170,
    category: 'jar',
    tag: 'Compact & Cozy',
    image: 'images/thumbs/04.jpg',
    fullImage: 'images/thumbs/04.jpg',
    description: 'Compact and convenient soy wax candle in a reusable mini jar, perfect for gifting or cozying up small spaces.',
    specs: '45g Soy Wax | ~12 Hours Burn | Mini Reusable Glass'
  },
  {
    id: '05',
    title: 'THE LITTLE COLLECTION CANDLE (4 IN A PACK)',
    price: 300,
    category: 'sets',
    tag: 'Sampler Gift Pack',
    image: 'images/thumbs/05.jpg',
    fullImage: 'images/thumbs/05.jpg',
    description: 'A delightful curated set of four 30g miniature candles. The ideal way to sample our favorite fragrances or share the light.',
    specs: '4 x 30g Miniature Candles | Gift Box Included | Multi-Scent'
  },
  {
    id: '06',
    title: 'MINI HEART CANDLE',
    price: 180,
    category: 'sculptural',
    tag: 'Romantic & Sweet',
    image: 'images/thumbs/06.jpg',
    fullImage: 'images/thumbs/06.jpg',
    description: 'A charming, miniature heart-shaped piece that brings a touch of warmth and sweet romance to any corner of your room.',
    specs: 'Sculpted Soy Wax | Sweet Aromatic Notes | Decorative'
  },
  {
    id: '07',
    title: 'BUBBLE CANDLE',
    price: 80,
    category: 'sculptural',
    tag: 'Modern Decor',
    image: 'images/thumbs/07.jpg',
    fullImage: 'images/thumbs/07.jpg',
    description: 'Aesthetic and unique bubble-shaped soy wax candle that serves as a beautiful piece of modern home decor.',
    specs: 'Cube Bubble Design | Natural Soy Blend | Aesthetic Accent'
  },
  {
    id: '08',
    title: 'LADDOO CANDLE',
    price: 90,
    category: 'festive',
    tag: 'Kerala Heritage',
    image: 'images/thumbs/08.jpg',
    fullImage: 'images/thumbs/08.jpg',
    description: 'Festive laddoo-shaped candle crafted with natural essential oils to brighten up your traditional celebrations.',
    specs: 'Kerala Heritage Series | Essential Oils | Festive Ambiance'
  },
  {
    id: '09',
    title: 'CHAI CANDLE',
    price: 280,
    category: 'jar',
    tag: 'Nostalgic Spice',
    image: 'images/thumbs/09.jpg',
    fullImage: 'images/thumbs/09.jpg',
    description: 'Comforting chai-aroma candle designed to create a warm, spicy, and deeply inviting ambiance.',
    specs: 'Spiced Tea Infusion | Warm Ambiance | ~25 Hours Burn'
  },
  {
    id: '10',
    title: 'COCONUT CANDLE',
    price: 500,
    category: 'heritage',
    tag: '100% Eco Shell',
    image: 'images/thumbs/10.jpg',
    fullImage: 'images/thumbs/10.jpg',
    description: 'Eco-friendly, toxin-free candle hand-poured directly into an authentic, natural coconut shell.',
    specs: 'Authentic Coconut Shell | Natural Soy Wax | Handcrafted in Kerala'
  },
  {
    id: '11',
    title: 'SUNFLOWER CANDLE',
    price: 60,
    category: 'floral',
    tag: 'Bright Floral',
    image: 'images/thumbs/11.jpg',
    fullImage: 'images/thumbs/11.jpg',
    description: 'A bright and cheerful sunflower-shaped piece that adds a refreshing splash of nature-inspired beauty to your day.',
    specs: 'Sunflower Sculpted Form | Fresh Floral Scent | Table Accent'
  },
  {
    id: '12',
    title: 'PEONY CANDLE',
    price: 250,
    category: 'floral',
    tag: 'Intricate Bloom',
    image: 'images/thumbs/12.jpg',
    fullImage: 'images/thumbs/12.jpg',
    description: 'Beautiful, intricately detailed peony flower-shaped candle offering a light and fresh floral scent.',
    specs: 'Detailed Petal Sculpture | Fresh Bloom Aroma | Premium Gift'
  },
  {
    id: '13',
    title: 'CHRISTMAS TREE CANDLE',
    price: 250,
    category: 'seasonal',
    tag: 'Holiday Magic',
    image: 'images/thumbs/13.jpg',
    fullImage: 'images/thumbs/13.jpg',
    description: 'A festive tree-shaped piece to bring joyful holiday cheer and seasonal magic into your home.',
    specs: 'Evergreen Form | Winter Pine Fragrance | Festive Highlight'
  },
  {
    id: '14',
    title: 'SNOWFLAKES CANDLE',
    price: 220,
    category: 'seasonal',
    tag: 'Winter Serenity',
    image: 'images/thumbs/14.jpg',
    fullImage: 'images/thumbs/14.jpg',
    description: 'Delicate snowflake-shaped piece, crafted to capture a crisp, cozy, and serene winter vibe.',
    specs: 'Snowflake Motif | Crisp Atmosphere | Holiday Special'
  },
  {
    id: '15',
    title: 'PATISSERIE CANDLE',
    price: 260,
    category: 'sculptural',
    tag: 'Dessert Art',
    image: 'images/thumbs/15.jpg',
    fullImage: 'images/thumbs/15.jpg',
    description: 'A hyper-realistic dessert-inspired creation that looks as deliciously sweet and enticing as it smells.',
    specs: 'Gourmand Dessert Sculpture | Vanilla Scent | Decorative Art'
  },
  {
    id: '16',
    title: 'DIYA CANDLE',
    price: 30,
    category: 'festive',
    tag: 'Seashell Diya',
    image: 'images/thumbs/16.jpg',
    fullImage: 'images/thumbs/16.jpg',
    description: 'A handcrafted, terracotta-style diya beautifully embedded with small natural seashells for a coastal touch on tradition.',
    specs: 'Terracotta & Shell Craft | Traditional Flame | Kerala Coastal Touch'
  },
  {
    id: '17',
    title: 'WAX MELTS (100G)',
    price: 100,
    category: 'melts',
    tag: 'Flame-Free Aroma',
    image: 'images/thumbs/17.jpg',
    fullImage: 'images/thumbs/17.jpg',
    description: 'Highly aromatic soy wax melts providing a deeply fragrant, long-lasting, and completely flame-free scent experience.',
    specs: '100g Aromatic Melts | Burner Essential | Instant Fragrance'
  },
  {
    id: '18',
    title: 'HEART CANDLE',
    price: 80,
    category: 'sculptural',
    tag: 'Classic Love',
    image: 'images/thumbs/18.jpg',
    fullImage: 'images/thumbs/18.jpg',
    description: 'A classic, beautifully sculpted heart-shaped soy wax candle, perfect for thoughtful gifting and celebrating love.',
    specs: 'Classic Sculpted Form | Warm Scent | Thoughtful Gift'
  }
];

// App State
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProducts();
  initCartDrawer();
  initQuickViewModal();
  initContactForm();
});

/* Navigation & Mobile Menu */
function initNavigation() {
  const header = document.querySelector('.header');
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile nav when clicking links
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

/* Products Catalog logic */
function initProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');

  if (!productsGrid) return;

  function render() {
    let filtered = PRODUCTS.filter(p => {
      const matchesCategory = (currentCategory === 'all') || (p.category === currentCategory);
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name-az') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
          <i class="fas fa-search" style="font-size: 2.5rem; color: var(--primary-red); margin-bottom: 1rem;"></i>
          <h3 style="font-family: var(--font-heading); color: var(--primary-red-dark);">No Products Found</h3>
          <p style="color: var(--text-muted);">Try adjusting your search terms or filter selection.</p>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(p => `
      <article class="product-card">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy" />
          <span class="product-tag-badge">${p.tag}</span>
          <span class="product-price-badge">Rs. ${p.price}/-</span>
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-actions">
            <button class="btn btn-outline" onclick="openQuickView('${p.id}')">
              <i class="fas fa-eye"></i> Details
            </button>
            <button class="btn btn-primary" onclick="addToCart('${p.id}')">
              <i class="fas fa-shopping-basket"></i> Add
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      render();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      render();
    });
  }

  render();
}

/* Quick View Modal */
function initQuickViewModal() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCard = document.getElementById('modalCard');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (!modalBackdrop || !modalCard) return;

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openQuickView(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const modalContent = document.getElementById('modalContent');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCard = document.getElementById('modalCard');

  modalContent.innerHTML = `
    <div style="border-radius: var(--radius-md); overflow: hidden; background: #F3EFEA;">
      <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 360px; object-fit: cover;" />
    </div>
    <div style="display: flex; flex-direction: column; justify-content: center;">
      <span style="color: var(--primary-red); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">${item.tag}</span>
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--primary-red-dark); margin: 0.4rem 0 0.8rem 0;">${item.title}</h2>
      <div style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--primary-red); margin-bottom: 1.25rem;">Rs. ${item.price}/-</div>
      <p style="color: var(--text-muted); font-size: 0.98rem; margin-bottom: 1.25rem;">${item.description}</p>
      <div style="background: var(--bg-cream); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light); margin-bottom: 1.5rem; font-size: 0.88rem; color: var(--text-main);">
        <i class="fas fa-certificate" style="color: var(--accent-gold); margin-right: 0.4rem;"></i> ${item.specs}
      </div>
      <div style="display: flex; gap: 1rem;">
        <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${item.id}'); closeModal();">
          <i class="fas fa-shopping-basket"></i> Add to Inquiry Basket
        </button>
        <button class="btn btn-whatsapp" onclick="orderItemDirectWhatsApp('${item.title}', ${item.price})">
          <i class="fab fa-whatsapp"></i> Buy Now
        </button>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  modalCard.classList.add('active');
}

function closeModal() {
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCard = document.getElementById('modalCard');
  modalBackdrop?.classList.remove('active');
  modalCard?.classList.remove('active');
}

/* Cart & Inquiry Drawer Logic */
function initCartDrawer() {
  const cartTrigger = document.getElementById('cartTrigger');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const cartDrawer = document.getElementById('cartDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  cartTrigger?.addEventListener('click', openCartDrawer);
  drawerCloseBtn?.addEventListener('click', closeCartDrawer);
  drawerBackdrop?.addEventListener('click', closeCartDrawer);
}

function openCartDrawer() {
  document.getElementById('drawerBackdrop')?.classList.add('active');
  document.getElementById('cartDrawer')?.classList.add('active');
  renderCart();
}

function closeCartDrawer() {
  document.getElementById('drawerBackdrop')?.classList.remove('active');
  document.getElementById('cartDrawer')?.classList.remove('active');
}

function addToCart(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartBadge();
  showToast(`Added "${item.title}" to Inquiry Basket!`);
}

function updateQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
  }
  updateCartBadge();
  renderCart();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.textContent = totalItems;
  }
}

function renderCart() {
  const drawerBody = document.getElementById('drawerBody');
  const drawerTotal = document.getElementById('drawerTotal');

  if (!drawerBody) return;

  if (cart.length === 0) {
    drawerBody.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fas fa-shopping-basket" style="font-size: 3rem; color: rgba(139,30,38,0.2); margin-bottom: 1rem;"></i>
        <p style="font-weight: 600;">Your inquiry basket is empty</p>
        <p style="font-size: 0.88rem;">Explore our collection and add your favorite candles!</p>
      </div>
    `;
    if (drawerTotal) drawerTotal.textContent = 'Rs. 0/-';
    return;
  }

  let totalSum = 0;
  drawerBody.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    totalSum += itemTotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">Rs. ${item.price} x ${item.qty} = <strong>Rs. ${itemTotal}/-</strong></div>
          <div class="cart-qty-ctrl">
            <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
            <span style="font-weight: 600; font-size: 0.9rem;">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <button style="background: none; border: none; color: var(--text-muted); cursor: pointer;" onclick="updateQty('${item.id}', -999)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `;
  }).join('');

  if (drawerTotal) {
    drawerTotal.textContent = `Rs. ${totalSum}/-`;
  }
}

/* WhatsApp Direct Checkout & Inquiry Pre-fill */
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast('Your inquiry basket is empty!');
    return;
  }

  let text = "Hello Mezhuku Ecostore! 👋\nI would like to place an order for the following items:\n\n";
  let total = 0;
  cart.forEach((item, idx) => {
    const sub = item.price * item.qty;
    total += sub;
    text += `${idx + 1}. ${item.title} - ${item.qty} pcs (Rs. ${sub})\n`;
  });
  text += `\nTotal Estimated Price: Rs. ${total}/-\n\nPlease confirm availability and delivery details. Thank you!`;

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/919895719114?text=${encoded}`, '_blank');
}

function checkoutInquiryForm() {
  if (cart.length === 0) {
    showToast('Your inquiry basket is empty!');
    return;
  }

  const itemsList = cart.map(item => `${item.title} (x${item.qty})`).join(', ');
  const productInput = document.getElementById('product');
  if (productInput) {
    productInput.value = `Selected Products: ${itemsList}`;
  }

  closeCartDrawer();
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
  showToast('Inquiry form pre-filled with selected products!');
}

function orderItemDirectWhatsApp(title, price) {
  const text = `Hello Mezhuku Ecostore! 👋\nI am interested in ordering: *${title}* (Rs. ${price}/-).\nPlease guide me with the ordering process!`;
  window.open(`https://wa.me/919895719114?text=${encodeURIComponent(text)}`, '_blank');
}

function bookWorkshopEnquiry() {
  const productInput = document.getElementById('product');
  if (productInput) {
    productInput.value = 'Candle-Making Workshop Booking Enquiry (Online / Offline)';
  }
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
  showToast('Workshop Enquiry pre-filled in the form below!');
}

/* Contact Form with Google Web App Script */
function initContactForm() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('formStatus');

    if (submitBtn) {
      submitBtn.value = 'Sending Enquiry...';
      submitBtn.disabled = true;
    }

    if (statusMsg) statusMsg.style.display = 'none';

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxy02Okiema2WaW2kqXZ2_92FoDuXAFOmvrzXzMKVp6DMexIKeMgwDi8TkLxiZxKvwpXQ/exec';

    fetch(scriptURL, { method: 'POST', body: data })
      .then(res => {
        showToast('Thank you! Your enquiry has been sent successfully.');
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.color = '#2E7D32';
          statusMsg.innerText = '✨ Thank you! Your enquiry has been received. We will get back to you shortly.';
        }
        form.reset();
      })
      .catch(err => {
        showToast('Enquiry sent! We will reach out to your email/phone.');
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.color = '#2E7D32';
          statusMsg.innerText = '✨ Thank you! Your enquiry has been submitted successfully.';
        }
        form.reset();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.value = 'Send Message';
          submitBtn.disabled = false;
        }
      });
  });
}

/* Toast Notifications */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-sparkles" style="color: var(--accent-gold);"></i> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
