/* =========================================================
   CALOR TROPICAL — SCRIPT.JS COMPLETO E CORRIGIDO
========================================================= */

const WA_NUMBER = "258846220984";

let selectedCategory = "Todos";
let selectedProduct = null;
let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("calorTropicalCart")) || [];
} catch (error) {
  cart = [];
}

/* ELEMENTOS PRINCIPAIS */
const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");

const categoryEmoji = {
  "Café / Chá": "☕",
  "Saladas": "🥗",
  "Entradas": "🍤",
  "Snacks & Sandwich": "🥪",
  "Omeletes": "🍳",
  "Combo's": "🍱",
  "Principais": "🍽️",
  "Mariscos": "🦐",
  "Refrescos": "🥤",
  "Sumos / Águas": "🧃",
  "Cervejas": "🍺",
  "Cocktail": "🍹",
  "Aperitivos": "🥃",
  "Digestivos": "🥃",
  "Shoots": "🥂",
  "Vinhos": "🍷"
};

const categoryImages = {
  "Café / Chá": "images/menu.jpg",
  "Saladas": "images/galeria1.jpg",
  "Entradas": "images/camarao.jpg",
  "Snacks & Sandwich": "images/galeria2.jpg",
  "Omeletes": "images/galeria3.jpg",
  "Combo's": "images/frango.jpg",
  "Principais": "images/peixe.jpg",
  "Mariscos": "images/seafood.jpg",
  "Refrescos": "images/galeria4.jpg",
  "Sumos / Águas": "images/galeria5.jpg",
  "Cervejas": "images/galeria6.jpg",
  "Cocktail": "images/galeria2.jpg",
  "Aperitivos": "images/galeria6.jpg",
  "Digestivos": "images/galeria6.jpg",
  "Shoots": "images/galeria6.jpg",
  "Vinhos": "images/galeria5.jpg"
};

/* =========================================================
   MENU DO RESTAURANTE
========================================================= */

const menuData = [
  /* CAFÉ / CHÁ */
  ["Café e leite", "Coffee with milk", 150, "Café / Chá"],
  ["Chá e leite", "Tea with milk", 125, "Café / Chá"],
  ["Capuchinho", "Cappuccino", 150, "Café / Chá"],
  ["Expresso", "Express", 150, "Café / Chá"],
  ["Chocolate quente", "Hot chocolate", 175, "Café / Chá"],

  /* SALADAS */
  ["Salada grega", "Greek salad", 250, "Saladas"],
  ["Salada de atum", "Tuna salad", 250, "Saladas"],
  ["Salada russa", "Russian salad", 250, "Saladas"],
  ["Salada tropical", "Tropical salad", 200, "Saladas"],

  /* ENTRADAS */
  ["Shamussas de peixe (1 uni)", "Fish samosa", 220, "Entradas"],
  ["Caranguejo ao natural", "Crab", 500, "Entradas"],
  ["Pão de alho", "Garlic bread", 150, "Entradas"],
  ["Rissóis de camarão (4 uni)", "Prawn rissole", 220, "Entradas"],
  ["Camarão alhinho", "Garlic prawns", 550, "Entradas"],
  ["Caril de camarão", "Prawn curry", 880, "Entradas"],
  ["Caril de caranguejo", "Crab curry", 650, "Entradas"],

  /* SNACKS */
  ["Tosta de queijo", "Cheese toast", 250, "Snacks & Sandwich"],
  ["Tosta mista", "Ham & cheese toast", 300, "Snacks & Sandwich"],
  ["Prego no pão", "Steak N Roll", 285, "Snacks & Sandwich"],
  ["Cheese N Bacon sandwich", "Cheese N Bacon sandwich", 300, "Snacks & Sandwich"],
  ["Chicken Mayo", "Hamburger", 300, "Snacks & Sandwich"],

  /* OMELETES */
  ["Omelete simples", "Plain omelette", 200, "Omeletes"],
  ["Omelete de queijo", "Cheese omelette", 200, "Omeletes"],
  ["Omelete misto", "Mixed omelette", 250, "Omeletes"],
  ["Pequeno almoço", "Breakfast", 425, "Omeletes"],

  /* COMBOS */
  ["Chicken & calamari", "Chicken & calamari", 875, "Combo's"],
  ["Chicken & prawns", "Chicken & prawns", 875, "Combo's"],
  ["Prawns & calamari", "Prawns & calamari", 875, "Combo's"],
  ["Prawns & fish fillet", "Prawns & fish fillet", 875, "Combo's"],
  ["Calamari & fish fillet", "Calamari & fish fillet", 875, "Combo's"],
  ["Chicken & fish fillet", "Chicken & fish fillet", 875, "Combo's"],
  ["1/2 frango & prawns", "Half chicken & prawns", 1325, "Combo's"],

  /* PRINCIPAIS */
  ["1/4 frango", "Chicken", 305, "Principais"],
  ["1/2 frango", "Chicken", 450, "Principais"],
  ["Frango inteiro", "Chicken", 850, "Principais"],
  ["Peixe inteiro", "Whole fish", 850, "Principais"],
  ["Filete de peixe", "Fish fillet", 600, "Principais"],
  ["Lula grelhada", "Grilled calamari", 550, "Principais"],
  ["Posta de peixe", "Fish steak", 500, "Principais"],
  ["Panado", "Fish fingers", 550, "Principais"],
  ["Camarão", "Prawns", 895, "Principais"],
  ["Bife", "Beef", 850, "Principais"],

  /* MARISCOS */
  ["4 (fish, prawns, calamari)", "Fish, prawns & calamari", 1525, "Mariscos"],
  ["Marisco p2 pax", "Seafood for 2 pax", 2500, "Mariscos"],
  ["Lobstar & 6 prawns", "Lobster & 6 prawns", 1975, "Mariscos"],
  ["Marisco para 3 pax", "Seafood for 3 pax", 3500, "Mariscos"],
  ["12 camarões", "Prawns with chips", 1275, "Mariscos"],

  /* REFRESCOS */
  ["330 ml", "Soft drink 330 ml", 70, "Refrescos"],
  ["Soda & Tônica", "Soda & Tonic", 75, "Refrescos"],
  ["Appletiser", "Appletiser", 100, "Refrescos"],

  /* SUMOS / ÁGUAS */
  ["Sumo Cappy", "Cappy juice", 125, "Sumos / Águas"],
  ["Sumo 500 ml", "Juice 500 ml", 100, "Sumos / Águas"],
  ["Sumo 1 L", "Juice 1 L", 165, "Sumos / Águas"],
  ["Água 500 ml", "Water 500 ml", 50, "Sumos / Águas"],
  ["Água 1,5 L", "Water 1.5 L", 95, "Sumos / Águas"],
  ["Água gaseificada", "Sparkling water", 100, "Sumos / Águas"],

  /* CERVEJAS */
  ["JC lata 250 ml", "JC 250 ml can", 150, "Cervejas"],
  ["Ciders / Cidras", "Ciders", 100, "Cervejas"],
  ["Heineken", "Heineken", 100, "Cervejas"],
  ["Breezer / Brutal", "Breezer / Brutal", 100, "Cervejas"],
  ["Corona", "Corona", 120, "Cervejas"],
  ["Txilar / Preta", "Txilar / Dark", 85, "Cervejas"],
  ["Manica / Impala 330 ml", "Manica / Impala 330 ml", 80, "Cervejas"],
  ["Fly-fishing / Spin", "Fly-fishing / Spin", 100, "Cervejas"],
  ["Castle Lite", "Castle Lite", 100, "Cervejas"],
  ["Castle D. Malte", "Castle D. Malte", 100, "Cervejas"],
  ["Bermin", "Bermin", 125, "Cervejas"],
  ["Red Bull", "Red Bull", 100, "Cervejas"],
  ["Monster", "Monster", 100, "Cervejas"],

  /* COCKTAIL */
  ["Vodka / Sumo", "Vodka / Juice", 150, "Cocktail"],
  ["R & R", "R & R", 150, "Cocktail"],
  ["Passion fruit / Sprite", "Passion fruit / Sprite", 125, "Cocktail"],
  ["Milk Pedro", "Milk Pedro", 325, "Cocktail"],
  ["Caipirinha", "Caipirinha", 350, "Cocktail"],

  /* APERITIVOS */
  ["May Fair", "May Fair", 125, "Aperitivos"],
  ["Gin Gordon / Belgravia", "Gin Gordon / Belgravia", 80, "Aperitivos"],
  ["Gin Tanquery", "Gin Tanqueray", 100, "Aperitivos"],
  ["Whisky Novo", "New Whisky", 100, "Aperitivos"],
  ["Whisky Velho", "Old Whisky", 150, "Aperitivos"],
  ["Captain Morgan / Bacardi", "Captain Morgan / Bacardi", 100, "Aperitivos"],
  ["Klipdrift", "Klipdrift", 80, "Aperitivos"],
  ["Amarula DBL", "Amarula Double", 190, "Aperitivos"],
  ["Vodka Absolut", "Absolut Vodka", 100, "Aperitivos"],
  ["Vodka Smirnoff", "Smirnoff Vodka", 80, "Aperitivos"],

  /* DIGESTIVOS */
  ["1920 / S. Domingos", "1920 / S. Domingos", 150, "Digestivos"],
  ["Vinho do Porto", "Port Wine", 150, "Digestivos"],

  /* SHOOTS */
  ["Sambuca", "Sambuca", 150, "Shoots"],
  ["Tequila", "Tequila", 150, "Shoots"],
  ["Vinho do Porto", "Port Wine", 300, "Shoots"],

  /* VINHOS */
  ["Vinho a copo", "Wine by the glass", 150, "Vinhos"],
  ["Boschendal / Kadete", "Boschendal / Kadete", 1350, "Vinhos"],
  ["F. Bostsrd / Roodenberg", "F. Bostsrd / Roodenberg", 1250, "Vinhos"],
  ["G. Carlou / C. Sauvignon", "G. Carlou / C. Sauvignon", 1350, "Vinhos"],
  ["Cabriz, Gatão, Graça", "Cabriz, Gatão, Graça", 850, "Vinhos"],
  ["G. Garcia, Aveleda", "G. Garcia, Aveleda", 850, "Vinhos"],
  ["Portada", "Portada", 850, "Vinhos"],
  ["Chocolate Bloc", "Chocolate Bloc", 1750, "Vinhos"],
  ["JC - Keuroux grf.", "JC - Keuroux bottle", 650, "Vinhos"],
  ["Krone, Tosti, Anabela", "Krone, Tosti, Anabela", 1100, "Vinhos"]
];

const products = menuData.map(function(item, index) {
  return {
    id: index,
    name: item[0],
    english: item[1],
    price: item[2],
    category: item[3],
    image: categoryImages[item[3]] || "images/menu.jpg"
  };
});

function getProductDescription(product) {
  return `${product.name} — uma opção deliciosa do menu Calor Tropical.`;
}

function formatPrice(price) {
  return `${price.toLocaleString("pt-PT")} MTS`;
}

/* =========================================================
   RENDERIZAR MENU
========================================================= */
function renderMenu() {
  if (!menuGrid) return;

  const searchText = menuSearch ? menuSearch.value.trim().toLowerCase() : "";

  const filteredProducts = products.filter(function(product) {
    const categoryOK = selectedCategory === "Todos" || product.category === selectedCategory;
    const searchOK = !searchText || product.name.toLowerCase().includes(searchText) || product.english.toLowerCase().includes(searchText);
    return categoryOK && searchOK;
  });

  if (filteredProducts.length === 0) {
    menuGrid.innerHTML = `
      <div class="menu-empty" style="grid-column: 1/-1; text-align: center; padding: 40px;">
        <h3>Nenhum prato encontrado</h3>
        <p>Tente outra pesquisa ou escolha outra categoria.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filteredProducts.map(function(product) {
    const emoji = categoryEmoji[product.category] || "🍽️";
    return `
      <article class="menu-card" data-id="${product.id}" style="cursor: pointer;">
        <div class="menu-card-image" style="height: 160px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; font-size: 50px;">
          ${emoji}
        </div>
        <div class="menu-card-content" style="padding: 15px;">
          <span class="menu-card-category" style="font-size: 12px; color: #88px;">${product.category}</span>
          <h3 style="margin: 5px 0; font-size: 16px;">${product.name}</h3>
          <p style="font-size: 13px; color: #666; margin-bottom: 10px;">${product.english}</p>
          <div class="menu-card-bottom" style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: #d9534f;">${formatPrice(product.price)}</strong>
            <button type="button" class="menu-item-btn" data-id="${product.id}" style="padding: 6px 12px; background: #ff5722; color: #fff; border: none; border-radius: 4px;">Ver</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* =========================================================
   MODAL DE PRODUTO
========================================================= */
function openProduct(productId) {
  const product = products.find(function(item) {
    return item.id === Number(productId);
  });
  if (!product) return;

  selectedProduct = product;

  const modal = document.getElementById("productModal");
  const category = document.getElementById("modalProductCategory");
  const name = document.getElementById("modalProductName");
  const price = document.getElementById("modalProductPrice");
  const description = document.getElementById("modalProductDescription");
  const overlay = document.getElementById("overlay");

  if (category) category.textContent = product.category;
  if (name) name.textContent = product.name;
  if (price) price.textContent = formatPrice(product.price);
  if (description) description.textContent = getProductDescription(product);

  if (modal) modal.classList.add("active");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  const overlay = document.getElementById("overlay");

  if (modal) modal.classList.remove("active");
  if (overlay && !document.getElementById("cartDrawer")?.classList.contains("active")) {
    overlay.classList.remove("active");
  }
  if (!document.getElementById("cartDrawer")?.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

if (menuGrid) {
  menuGrid.addEventListener("click", function(event) {
    const card = event.target.closest(".menu-card");
    if (!card) return;
    const productId = card.dataset.id;
    if (productId !== undefined) {
      openProduct(productId);
    }
  });
}

const modalClose = document.getElementById("modalClose");
if (modalClose) {
  modalClose.addEventListener("click", closeProductModal);
}

/* =========================================================
   FILTROS E PESQUISA
========================================================= */
const menuFilters = document.querySelectorAll(".filter");
menuFilters.forEach(function(button) {
  button.addEventListener("click", function() {
    menuFilters.forEach(function(item) { item.classList.remove("active"); });
    this.classList.add("active");
    selectedCategory = this.dataset.category || "Todos";
    renderMenu();
  });
});

if (menuSearch) {
  menuSearch.addEventListener("input", renderMenu);
}

/* =========================================================
   MENU MOBILE (3 BARRAS) — CORRIGIDO
========================================================= */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("nav") || document.querySelector("nav");

if (menuToggle) {
  menuToggle.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (mainNav) {
      mainNav.classList.toggle("active");
      mainNav.classList.toggle("open");
    }
    menuToggle.classList.toggle("active");
  });
}

if (mainNav) {
  mainNav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      mainNav.classList.remove("active");
      mainNav.classList.remove("open");
      if (menuToggle) menuToggle.classList.remove("active");
    });
  });
}

/* =========================================================
   CARRINHO
========================================================= */
function saveCart() {
  localStorage.setItem("calorTropicalCart", JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce(function(total, item) { return total + (item.price * item.quantity); }, 0);
}

function getCartCount() {
  return cart.reduce(function(total, item) { return total + item.quantity; }, 0);
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) cartCount.textContent = getCartCount();
}

function addToCart(product) {
  if (!product) return;
  const existing = cart.find(function(item) { return item.id === product.id; });
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  saveCart();
  renderCart();
  updateCartCount();
}

function increaseQuantity(id) {
  const item = cart.find(function(product) { return product.id === Number(id); });
  if (!item) return;
  item.quantity += 1;
  saveCart();
  renderCart();
  updateCartCount();
}

function decreaseQuantity(id) {
  const item = cart.find(function(product) { return product.id === Number(id); });
  if (!item) return;
  item.quantity -= 1;
  if (item.quantity <= 0) {
    cart = cart.filter(function(product) { return product.id !== Number(id); });
  }
  saveCart();
  renderCart();
  updateCartCount();
}

function removeFromCart(id) {
  cart = cart.filter(function(product) { return product.id !== Number(id); });
  saveCart();
  renderCart();
  updateCartCount();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty" style="text-align:center; padding:30px;">
        <div style="font-size:40px;">🛒</div>
        <h3>O seu pedido está vazio</h3>
        <p>Escolha os pratos que deseja pedir.</p>
      </div>
    `;
    if (cartTotal) cartTotal.textContent = "0 MTS";
    return;
  }

  cartItems.innerHTML = cart.map(function(item) {
    return `
      <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:10px;">
        <div class="cart-item-info">
          <h4 style="margin:0; font-size:14px;">${item.name}</h4>
          <strong style="color:#d9534f; font-size:13px;">${formatPrice(item.price)} x ${item.quantity}</strong>
          <div class="cart-item-controls" style="margin-top:5px;">
            <button type="button" data-cart-action="decrease" data-id="${item.id}" style="padding:2px 8px;">−</button>
            <span style="margin:0 8px;">${item.quantity}</span>
            <button type="button" data-cart-action="increase" data-id="${item.id}" style="padding:2px 8px;">+</button>
            <button type="button" data-cart-action="remove" data-id="${item.id}" style="padding:2px 6px; background:#ff4d4d; color:#fff; border:none; border-radius:3px; margin-left:10px;">×</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (cartTotal) cartTotal.textContent = formatPrice(getCartTotal());
}

const cartItemsElement = document.getElementById("cartItems");
if (cartItemsElement) {
  cartItemsElement.addEventListener("click", function(event) {
    const button = event.target.closest("button");
    if (!button) return;
    const action = button.dataset.cartAction;
    const id = button.dataset.id;
    if (action === "increase") increaseQuantity(id);
    if (action === "decrease") decreaseQuantity(id);
    if (action === "remove") removeFromCart(id);
  });
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay && !document.getElementById("productModal")?.classList.contains("active")) {
    overlay.classList.remove("active");
  }
  if (!document.getElementById("productModal")?.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

const openCartButton = document.getElementById("openCartButton");
const closeCartButton = document.getElementById("closeCartButton");
if (openCartButton) openCartButton.addEventListener("click", openCart);
if (closeCartButton) closeCartButton.addEventListener("click", closeCart);

const modalAddButton = document.getElementById("modalAddButton");
if (modalAddButton) {
  modalAddButton.addEventListener("click", function() {
    if (!selectedProduct) return;
    addToCart(selectedProduct);
    closeProductModal();
    openCart();
  });
}

/* =========================================================
   DESTAQUES E PRATOS RÁPIDOS — CORRIGIDO
========================================================= */
document.addEventListener("click", function(event) {
  const button = event.target.closest(".quick-order, .featured-btn");
  if (!button) return;
  const card = button.closest(".featured-card");
  if (!card) return;
  const title = card.querySelector("h3");
  if (!title) return;
  const titleText = title.textContent.trim().toLowerCase();

  let category = "Principais";
  if (titleText.includes("marisco")) category = "Mariscos";
  else if (titleText.includes("peixe")) category = "Principais";
  else if (titleText.includes("camarão")) category = "Principais";
  else if (titleText.includes("frango")) category = "Principais";

  selectedCategory = category;
  document.querySelectorAll(".filter").forEach(function(filter) {
    filter.classList.remove("active");
    if (filter.dataset.category === category) filter.classList.add("active");
  });

  renderMenu();

  const menuSection = document.getElementById("menu") || document.getElementById("cardapio");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

/* =========================================================
   WHATSAPP E OVERLAY
========================================================= */
const sendWhatsAppButton = document.getElementById("sendWhatsAppButton");
if (sendWhatsAppButton) {
  sendWhatsAppButton.addEventListener("click", function() {
    if (cart.length === 0) {
      alert("Adicione pelo menos um produto ao pedido.");
      return;
    }
    const customerName = document.getElementById("customerName")?.value.trim() || "";
    const customerNote = document.getElementById("customerNote")?.value.trim() || "";

    let message = "Olá, Calor Tropical! 👋\n\nGostaria de fazer o seguinte pedido:\n\n";
    cart.forEach(function(item) {
      message += `• ${item.name} x${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\n*Total: ${formatPrice(getCartTotal())}*`;
    if (customerName) message += `\n\nNome: ${customerName}`;
    if (customerNote) message += `\nObservação: ${customerNote}`;
    message += "\n\nObrigado!";

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}

const overlay = document.getElementById("overlay");
if (overlay) {
  overlay.addEventListener("click", function() {
    closeProductModal();
    closeCart();
  });
}

document.addEventListener("keydown", function(event) {
  if (event.key !== "Escape") return;
  closeProductModal();
  closeCart();
});

/* =========================================================
   GALERIA LIGHTBOX — CORRIGIDO
========================================================= */
let galleryLightbox = null;

function createGalleryLightbox() {
  if (galleryLightbox) return;
  galleryLightbox = document.createElement("div");
  galleryLightbox.id = "galleryLightbox";
  galleryLightbox.innerHTML = `
    <button type="button" id="galleryLightboxClose" style="position:absolute; top:20px; right:20px; background:none; border:none; color:#fff; font-size:40px; cursor:pointer;">×</button>
    <img id="galleryLightboxImage" src="" alt="Imagem ampliada" style="max-width:90%; max-height:85vh; border-radius:8px;">
  `;
  galleryLightbox.style.cssText = "position:fixed; inset:0; z-index:99999; background:rgba(0,0,0,.9); display:none; align-items:center; justify-content:center; padding:20px;";
  document.body.appendChild(galleryLightbox);

  document.getElementById("galleryLightboxClose").addEventListener("click", function() {
    galleryLightbox.style.display = "none";
    document.body.style.overflow = "";
  });

  galleryLightbox.addEventListener("click", function(event) {
    if (event.target === galleryLightbox) {
      galleryLightbox.style.display = "none";
      document.body.style.overflow = "";
    }
  });
}

document.addEventListener("click", function(event) {
  const image = event.target.closest(".gallery-grid img, .gallery-item img, .featured-card img");
  if (!image) return;

  createGalleryLightbox();
  const lightboxImage = document.getElementById("galleryLightboxImage");
  if (!lightboxImage) return;

  lightboxImage.src = image.src;
  galleryLightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
});

/* =========================================================
   INICIALIZAÇÃO FINAL
========================================================= */
renderMenu();
renderCart();
updateCartCount();
createGalleryLightbox();
