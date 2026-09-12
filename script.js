/* =========================================================
   CALOR TROPICAL
========================================================= */

const WA_NUMBER = "258874220984";

let cart = [];
let selectedCategory = "Todos";

const money = value =>
  `${Number(value).toLocaleString("pt-MZ")} MTS`;


/* =========================================================
   IMAGENS POR CATEGORIA
========================================================= */

const categoryImages = {
  "Café / Chá": "images/menu.jpg",
  "Saladas": "images/galeria1.jpg",
  "Entradas": "images/camarao.jpg",
  "Snacks & Sandwich": "images/menu.jpg",
  "Omeletes": "images/menu.jpg",
  "Combo's": "images/seafood.jpg",
  "Principais": "images/peixe.jpg",
  "Mariscos": "images/seafood.jpg",
  "Refrescos": "images/menu.jpg",
  "Sumos / Águas": "images/menu.jpg",
  "Cervejas": "images/menu.jpg",
  "Cocktail": "images/galeria2.jpg",
  "Aperitivos": "images/menu.jpg",
  "Digestivos": "images/menu.jpg",
  "Shoots": "images/menu.jpg",
  "Vinhos": "images/galeria3.jpg"
};


/* =========================================================
   DADOS DO MENU
   Os preços são os reais do restaurante.
========================================================= */

const menuData = [
  ["Café e leite", "Coffee with milk", 150, "Café / Chá"],
  ["Chá e leite", "Tea with milk", 125, "Café / Chá"],
  ["Capuchinho", "Cappuccino", 150, "Café / Chá"],
  ["Expresso", "Espresso", 150, "Café / Chá"],
  ["Chocolate quente", "Hot chocolate", 175, "Café / Chá"],

  ["Salada grega", "Greek salad", 250, "Saladas"],
  ["Salada de atum", "Tuna salad", 250, "Saladas"],
  ["Salada russa", "Russian salad", 250, "Saladas"],
  ["Salada tropical", "Tropical salad", 200, "Saladas"],

  ["Shamussas de peixe (1 uni)", "Fish samosas (1 pc)", 220, "Entradas"],
  ["Caranguejo ao natural", "Fresh crab", 500, "Entradas"],
  ["Pão de alho", "Garlic bread", 150, "Entradas"],
  ["Rissóis de camarão (4 uni)", "Prawn rissoles (4 pcs)", 220, "Entradas"],
  ["Camarão alhinho", "Garlic prawns", 550, "Entradas"],
  ["Caril de camarão", "Prawn curry", 880, "Entradas"],
  ["Caril de caranguejo", "Crab curry", 650, "Entradas"],

  ["Tosta de queijo", "Cheese toast", 250, "Snacks & Sandwich"],
  ["Tosta mista", "Ham & cheese toast", 300, "Snacks & Sandwich"],
  ["Prego no pão", "Steak N Roll", 285, "Snacks & Sandwich"],
  ["Cheese N Bacon sandwich", "", 300, "Snacks & Sandwich"],
  ["Chicken Mayo / Hamburger", "", 300, "Snacks & Sandwich"],

  ["Omelete simples", "Plain omelette", 200, "Omeletes"],
  ["Omelete de queijo", "Cheese omelette", 200, "Omeletes"],
  ["Omelete misto", "Mixed omelette", 250, "Omeletes"],
  ["Pequeno almoço", "Breakfast", 425, "Omeletes"],

  ["Chicken & calamari", "", 875, "Combo's"],
  ["Chicken & prawns", "", 875, "Combo's"],
  ["Prawns & calamari", "", 875, "Combo's"],
  ["Prawns & fish fillet", "", 875, "Combo's"],
  ["Calamari & fish fillet", "", 875, "Combo's"],
  ["Chicken & fish fillet", "", 875, "Combo's"],
  ["1/2 frango & prawns", "", 1325, "Combo's"],

  ["1/4 frango", "Chicken", 305, "Principais"],
  ["1/2 frango", "Chicken", 450, "Principais"],
  ["Frango inteiro", "Whole chicken", 850, "Principais"],
  ["Peixe inteiro", "Whole fish", 850, "Principais"],
  ["Filete de peixe", "Fish fillet", 600, "Principais"],
  ["Lula grelhada", "Grilled calamari", 550, "Principais"],
  ["Posta de peixe", "Fish steak", 500, "Principais"],
  ["Panado", "Fish fingers", 550, "Principais"],
  ["Camarão", "Prawns", 895, "Principais"],
  ["Bife", "Beef steak", 850, "Principais"]
];
  ["4 (fish, prawns, calamari)", "", 1525, "Mariscos"],
  ["Marisco", "Seafood p2 pax", 2500, "Mariscos"],
  ["Lobstar & 6 prawns", "", 1975, "Mariscos"],
  ["Marisco", "Seafood for 3 pax", 3500, "Mariscos"],
  ["12 camarões", "Prawns with chips", 1275, "Mariscos"],

  ["330 ml", "", 70, "Refrescos"],
  ["Soda & Tônica", "", 75, "Refrescos"],
  ["Appletiser", "", 100, "Refrescos"],
       ["Sumo Cappy", "", 125, "Sumos / Águas"],
  ["Sumo 500 ml", "", 100, "Sumos / Águas"],
  ["Sumo 1 L", "", 165, "Sumos / Águas"],
  ["Água 500 ml", "", 50, "Sumos / Águas"],
  ["Água 1,5 L", "", 95, "Sumos / Águas"],
  ["Água gaseificada", "", 100, "Sumos / Águas"],

  ["JC lata 250 ml", "", 150, "Cervejas"],
  ["Ciders / Cidras", "", 100, "Cervejas"],
  ["Heineken", "", 100, "Cervejas"],
  ["Breezer / Brutal", "", 100, "Cervejas"],
  ["Corona", "", 120, "Cervejas"],
       ["Txilar / Preta", "", 85, "Cervejas"],
  ["Manica / Impala 330 ml", "", 80, "Cervejas"],
  ["Fly-fishing / Spin", "", 100, "Cervejas"],
  ["Castle Lite", "", 100, "Cervejas"],
  ["Castle D. Malte", "", 100, "Cervejas"],
  ["Bermin", "", 125, "Cervejas"],
  ["Red Bull", "", 100, "Cervejas"],
  ["Monster", "", 100, "Cervejas"],
      ["Vodka / Sumo", "", 150, "Cocktail"],
  ["R & R", "", 150, "Cocktail"],
  ["Passion fruit / Sprite", "", 125, "Cocktail"],
  ["Milk Pedro", "", 325, "Cocktail"],
  ["Caipirinha", "", 350, "Cocktail"],

  ["May Fair", "", 125, "Aperitivos"],
  ["Gin Gordon / Belgravia", "", 80, "Aperitivos"],
  ["Gin Tanquery", "", 100, "Aperitivos"],
  ["Whisky Novo", "", 100, "Aperitivos"],
  ["Whisky Velho", "", 150, "Aperitivos"],
      ["Captain Morgan / Bacardi", "", 100, "Aperitivos"],
  ["Klipdrift", "", 80, "Aperitivos"],
  ["Amarula DBL", "", 190, "Aperitivos"],
  ["Vodka Absolut", "", 100, "Aperitivos"],
  ["Vodka Smirnoff", "", 80, "Aperitivos"],

  ["1920 / S. Domingos", "", 150, "Digestivos"],
  ["Vinho do Porto", "", 150, "Digestivos"],
       ["Sambuca", "", 150, "Shoots"],
  ["Tequila", "", 150, "Shoots"],
  ["Vinho do Porto", "", 300, "Shoots"],

  ["Vinho a copo", "", 150, "Vinhos"],
  ["Boschendal / Kadete", "", 1350, "Vinhos"],
  ["F. Bostsrd / Roodenberg", "", 1250, "Vinhos"],
       ["G. Carlou / C. Sauvignon", "", 1350, "Vinhos"],
  ["Cabriz, Gatão, Graça", "", 850, "Vinhos"],
  ["G. Garcia, Aveleda", "", 850, "Vinhos"],
  ["Portada", "", 850, "Vinhos"],
  ["Chocolate Bloc", "", 1750, "Vinhos"],
  ["JC - Keuroux grf.", "", 650, "Vinhos"],
  ["Krone, Tosti, Anabela", "", 1100, "Vinhos"]
];
const products = menuData.map(
  ([name, english, price, category]) => ({
    name,
    english,
    price,
    category,
    image: categoryImages[category] || "images/menu.jpg"
  })
);
const categoryIcons = {
  "Café / Chá": "☕",
  "Saladas": "🥗",
  "Entradas": "🥟",
  "Snacks & Sandwich": "🥪",
  "Omeletes": "🍳",
  "Combo's": "🍽️",
  "Principais": "🍛",
  "Mariscos": "🦐",
  "Refrescos": "🥤",
  "Sumos / Águas": "🧃",
  "Cervejas": "🍺",
  "Cocktail": "🍹"
};
const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");

function getProductName(item) {
  if (!item.english) return item.name;

  if (
    item.english.toLowerCase() ===
    item.name.toLowerCase()
  ) {
    return item.name;
  }

  return `${item.name}<small>${item.english}</small>`;
}
function renderMenu(list = products) {
  menuGrid.innerHTML = "";

  list.forEach((item, index) => {
    const icon = categoryIcons[item.category] || "🍽️";

    const card = document.createElement("article");
    card.className = "menu-card";

    card.innerHTML = `
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}">
        <span class="menu-icon">${icon}</span>
      </div>

      <div class="menu-card-content">
        <span class="menu-category">${item.category}</span>

        <h3>${getProductName(item)}</h3>

        <strong>${item.price.toLocaleString("pt-MZ")} MTS</strong>

        <button class="menu-item-btn" data-index="${index}">
          Ver detalhes
        </button>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}
function filterMenu(category) {
  selectedCategory = category;

  const search =
    menuSearch?.value.toLowerCase().trim() || "";

  const filtered = products.filter(item => {
    const matchCategory =
      category === "Todos" ||
      item.category === category;

    const matchSearch =
      item.name.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  renderMenu(filtered);
}
menuGrid.addEventListener("click", e => {
  const button = e.target.closest(".menu-item-btn");

  if (!button) return;

  const index = Number(button.dataset.index);
  const item = products[index];

  openProduct(item);
});
function openProduct(item) {
  const modal = document.getElementById("productModal");
  const image = document.getElementById("modalProductImage");
  const category = document.getElementById("modalProductCategory");
  const name = document.getElementById("modalProductName");
  const price = document.getElementById("modalProductPrice");
  const description = document.getElementById("modalProductDescription");

  image.src = item.image;
  image.alt = item.name;
  category.textContent = item.category;
  name.innerHTML = getProductName(item);
  price.textContent = `${item.price.toLocaleString("pt-MZ")} MTS`;

  description.textContent =
    "Uma excelente opção do menu Calor Tropical.";
    
  modal.classList.add("active");
}
const modalClose = document.getElementById("modalClose");
const overlay = document.getElementById("overlay");

function closeProduct() {
  document
    .getElementById("productModal")
    .classList.remove("active");
}

modalClose?.addEventListener("click", closeProduct);

overlay?.addEventListener("click", closeProduct);
const modalAddButton =
  document.getElementById("modalAddButton");

let selectedProduct = null;

modalAddButton?.addEventListener("click", () => {
  if (!selectedProduct) return;

  addToCart(selectedProduct);
  closeProduct();
});
function selectProduct(item) {
  selectedProduct = item;
  openProduct(item);
}

const originalOpenProduct = openProduct;

openProduct = function(item) {
  selectedProduct = item;
  originalOpenProduct(item);
};
const cartItems =
  document.getElementById("cartItems");

const cartCount =
  document.getElementById("cartCount");

const cartTotal =
  document.getElementById("cartTotal");

let cart = [];

function addToCart(item) {
  const existing = cart.find(
    product => product.name === item.name
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...item,
      quantity: 1
    });
  }

  renderCart();
}
function renderCart() {
  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <strong>${item.name}</strong>
      <span>${item.price.toLocaleString("pt-MZ")} MTS</span>

      <div class="quantity">
        <button data-name="${item.name}" data-action="minus">−</button>
        <span>${item.quantity}</span>
        <button data-name="${item.name}" data-action="plus">+</button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  cartCount.textContent = count;
  cartTotal.textContent =
    `${total.toLocaleString("pt-MZ")} MTS`;
}
cartItems.addEventListener("click", e => {
  const button = e.target.closest("button");

  if (!button) return;

  const name = button.dataset.name;
  const action = button.dataset.action;

  const item = cart.find(
    product => product.name === name
  );

  if (!item) return;

  if (action === "plus") {
    item.quantity++;
  }

  if (action === "minus") {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(
        product => product.name !== name
      );
    }
  }

  renderCart();
});
const cartDrawer =
  document.getElementById("cartDrawer");

const openCart =
  document.getElementById("openCart");

const closeCart =
  document.getElementById("closeCart");

openCart?.addEventListener("click", () => {
  cartDrawer.classList.add("active");
});

closeCart?.addEventListener("click", () => {
  cartDrawer.classList.remove("active");
});
const sendWhatsApp =
  document.getElementById("sendWhatsApp");

sendWhatsApp?.addEventListener("click", () => {
  if (!cart.length) {
    alert("O carrinho está vazio.");
    return;
  }

  let message = "Olá, Calor Tropical!%0A%0A";
  message += "Gostaria de fazer este pedido:%0A%0A";

  cart.forEach(item => {
    message += `• ${item.name} x${item.quantity} - `;
    message += `${(item.price * item.quantity)
      .toLocaleString("pt-MZ")} MTS%0A`;
  });

  message += `%0ATotal: ${cartTotal.textContent}`;

  window.open(
    `https://wa.me/${WA_NUMBER}?text=${message}`,
    "_blank"
  );
});
function saveCart() {
  localStorage.setItem(
    "calorTropicalCart",
    JSON.stringify(cart)
  );
}

function loadCart() {
  try {
    cart =
      JSON.parse(
        localStorage.getItem("calorTropicalCart")
      ) || [];
  } catch {
    cart = [];
  }

  renderCart();
}
function updateCart() {
  saveCart();
  renderCart();
}

cartItems.addEventListener("click", () => {
  saveCart();
});
document.querySelectorAll(".menu-filter").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".menu-filter")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    filterMenu(button.dataset.category);
  });
});
menuSearch?.addEventListener("input", () => {
  filterMenu(selectedCategory);
});
loadCart();

renderMenu();
function addToCart(item) {
  const existing = cart.find(
    product => product.name === item.name
  );

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...item,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
}
cartItems.addEventListener("click", e => {
  const button = e.target.closest("button");

  if (!button) return;

  const name = button.dataset.name;
  const action = button.dataset.action;

  const item = cart.find(
    product => product.name === name
  );

  if (!item) return;

  if (action === "plus") {
    item.quantity++;
  }

  if (action === "minus") {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(
        product => product.name !== name
      );
    }
  }

  saveCart();
  renderCart();
});
document.querySelectorAll(".quick-order").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;

    const item = products.find(
      product => product.name === name
    );

    if (item) {
      addToCart(item);
      cartDrawer.classList.add("active");
    }
  });
});
const backToTop =
  document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop?.classList.add("show");
  } else {
    backToTop?.classList.remove("show");
  }
});

backToTop?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  mainNav?.classList.toggle("active");
});
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("active");
  });
});

document.addEventListener("click", e => {
  if (
    !mainNav?.contains(e.target) &&
    !menuToggle?.contains(e.target)
  ) {
    mainNav?.classList.remove("active");
  }
});
/* =========================================================
   CONTROLO DO MODAL
========================================================= */

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeProduct();
    cartDrawer?.classList.remove("active");
  }
});


/* =========================================================
   BOTÃO "VER DETALHES"
========================================================= */

menuGrid.addEventListener("click", e => {
  const button = e.target.closest(".menu-item-btn");

  if (!button) return;

  const index = Number(button.dataset.index);

  if (products[index]) {
    selectProduct(products[index]);
  }
});


/* =========================================================
   FECHAR MODAL AO CLICAR NO OVERLAY
========================================================= */

overlay?.addEventListener("click", () => {
  closeProduct();
});
/* =========================================================
   ATUALIZAR FILTROS DO MENU
========================================================= */

function updateMenuFilters() {
  document.querySelectorAll(".menu-filter").forEach(button => {
    const category = button.dataset.category;

    if (category === selectedCategory) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}


/* =========================================================
   FILTRAR MENU
========================================================= */

function filterMenu(category) {
  selectedCategory = category;

  const search =
    menuSearch?.value.toLowerCase().trim() || "";

  const filtered = products.filter(item => {

    const matchCategory =
      category === "Todos" ||
      item.category === category;

    const matchSearch =
      item.name.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      (item.english || "").toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  renderMenu(filtered);
  updateMenuFilters();
}


/* =========================================================
   PESQUISA DO MENU
========================================================= */

menuSearch?.addEventListener("input", () => {
  filterMenu(selectedCategory);
});


/* =========================================================
   BOTÕES DAS CATEGORIAS
========================================================= */

document.querySelectorAll(".menu-filter").forEach(button => {

  button.addEventListener("click", () => {

    const category =
      button.dataset.category || "Todos";

    filterMenu(category);

  });

});


/* =========================================================
   MENU INICIAL
========================================================= */

filterMenu("Todos");
/* =========================================================
   ATUALIZAÇÃO COMPLETA DO CARRINHO
========================================================= */

function refreshCart() {
  let total = 0;
  let quantity = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    quantity += item.quantity;
  });

  if (cartCount) {
    cartCount.textContent = quantity;
  }

  if (cartTotal) {
    cartTotal.textContent =
      `${total.toLocaleString("pt-MZ")} MTS`;
  }

  saveCart();
}


/* =========================================================
   ATUALIZAR CARRINHO APÓS QUALQUER ALTERAÇÃO
========================================================= */

function syncCart() {
  renderCart();
  refreshCart();
}


/* =========================================================
   GARANTIR QUE O CARRINHO COMEÇA CORRETAMENTE
========================================================= */

if (!Array.isArray(cart)) {
  cart = [];
}

syncCart();
/* =========================================================
   PEDIDO RÁPIDO DOS PRODUTOS EM DESTAQUE
========================================================= */

document.querySelectorAll(".quick-order").forEach(button => {

  button.addEventListener("click", () => {

    const productName =
      button.dataset.name;

    const product =
      products.find(
        item => item.name === productName
      );

    if (!product) return;

    selectedProduct = product;

    addToCart(product);

    cartDrawer?.classList.add("active");

  });

});


/* =========================================================
   ADICIONAR PRODUTO PELO MODAL
========================================================= */

modalAddButton?.addEventListener("click", () => {

  if (!selectedProduct) return;

  addToCart(selectedProduct);

  closeProduct();

  cartDrawer?.classList.add("active");

});


/* =========================================================
   FECHAR CARRINHO AO CLICAR NO OVERLAY
========================================================= */

overlay?.addEventListener("click", () => {

  cartDrawer?.classList.remove("active");

});


/* =========================================================
   FECHAR CARRINHO COM ESC
========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    cartDrawer?.classList.remove("active");

  }

});
/* =========================================================
   PEDIDO PROFISSIONAL PELO WHATSAPP
========================================================= */

sendWhatsApp?.addEventListener("click", () => {

  if (!cart.length) {
    alert("O carrinho está vazio.");
    return;
  }

  const customerName =
    document.getElementById("customerName")?.value.trim() || "";

  const customerNote =
    document.getElementById("customerNote")?.value.trim() || "";

  let message =
    "Olá, Calor Tropical! 👋%0A%0A";

  if (customerName) {
    message += `Nome: ${customerName}%0A%0A`;
  }

  message += "🍽️ *Meu pedido:*%0A%0A";

  cart.forEach(item => {

    const subtotal =
      item.price * item.quantity;

    message +=
      `• ${item.name} x${item.quantity} — ` +
      `${subtotal.toLocaleString("pt-MZ")} MTS%0A`;

  });

  message +=
    `%0A💰 *Total: ${cartTotal.textContent}*`;

  if (customerNote) {
    message +=
      `%0A%0A📝 Observação: ${customerNote}`;
  }

  message +=
    "%0A%0AObrigado!";

  window.open(
    `https://wa.me/${WA_NUMBER}?text=${message}`,
    "_blank"
  );

});
/* =========================================================
   LIMPAR FORMULÁRIO DO CARRINHO
========================================================= */

function clearOrderForm() {

  const customerName =
    document.getElementById("customerName");

  const customerNote =
    document.getElementById("customerNote");

  if (customerName) {
    customerName.value = "";
  }

  if (customerNote) {
    customerNote.value = "";
  }
}


/* =========================================================
   LIMPAR CARRINHO
========================================================= */

function clearCart() {

  cart = [];

  saveCart();
  renderCart();

  clearOrderForm();
}


/* =========================================================
   LIMPAR CARRINHO QUANDO O PEDIDO FOR ENVIADO
========================================================= */

sendWhatsApp?.addEventListener("click", () => {

  if (!cart.length) return;

  setTimeout(() => {
    clearCart();
  }, 1000);

});
/* =========================================================
   PROTEÇÃO DAS IMAGENS
========================================================= */

document.querySelectorAll("img").forEach(image => {

  image.addEventListener("error", () => {

    if (
      !image.src.includes("images/menu.jpg")
    ) {
      image.src = "images/menu.jpg";
    }

  });

});


/* =========================================================
   ROLAGEM SUAVE DO SITE
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   ATUALIZAÇÃO INICIAL
========================================================= */

window.addEventListener("load", () => {

  renderMenu();
  renderCart();

  console.log(
    "Calor Tropical — site carregado com sucesso."
  );

});
/* =========================================================
   DESCRIÇÕES PROFISSIONAIS DO MENU
========================================================= */

const categoryDescriptions = {

  "Café / Chá":
    "Uma seleção quente para começar a experiência no Calor Tropical.",

  "Saladas":
    "Opções frescas e leves, preparadas para acompanhar a sua refeição.",

  "Entradas":
    "Entradas saborosas para começar a sua experiência gastronómica.",

  "Snacks & Sandwich":
    "Uma opção prática e saborosa para uma refeição rápida.",

  "Omeletes":
    "Preparações feitas para uma refeição simples, saborosa e reconfortante.",

  "Combo's":
    "Combinações especiais de sabores do mar e da terra.",

  "Principais":
    "Pratos principais preparados para uma refeição completa no Calor Tropical.",

  "Mariscos":
    "Uma seleção especial de mariscos para apreciar os sabores da Ilha de Inhaca.",

  "Refrescos":
    "Bebidas refrescantes para acompanhar a sua refeição.",

  "Sumos / Águas":
    "Bebidas para acompanhar a sua experiência no restaurante.",

  "Cervejas":
    "Seleção de bebidas para desfrutar num ambiente tropical.",

  "Cocktail":
    "Cocktails preparados para tornar a sua experiência ainda mais especial.",

  "Aperitivos":
    "Uma seleção de aperitivos para desfrutar antes ou durante a refeição.",

  "Digestivos":
    "Opções para finalizar a refeição de forma agradável.",

  "Shoots":
    "Seleção de shots para momentos especiais.",

  "Vinhos":
    "Vinhos selecionados para acompanhar diferentes momentos e refeições."

};


/* =========================================================
   MELHORAR O MODAL DOS PRODUTOS
========================================================= */

const oldOpenProduct = openProduct;

openProduct = function(item) {

  oldOpenProduct(item);

  const description =
    document.getElementById(
      "modalProductDescription"
    );

  if (!description) return;

  description.textContent =
    categoryDescriptions[item.category] ||
    "Uma excelente opção do menu Calor Tropical.";

};


/* =========================================================
   ÍCONES DAS CATEGORIAS QUE FALTAVAM
========================================================= */

categoryIcons["Aperitivos"] = "🥃";
categoryIcons["Digestivos"] = "🥃";
categoryIcons["Shoots"] = "🥃";
categoryIcons["Vinhos"] = "🍷";
/* =========================================================
   PREÇOS DO MENU — ESTILO PREMIUM
========================================================= */

.menu-card-content strong {
  display: inline-flex;
  align-items: center;
  margin-top: 12px;
  padding: 7px 12px;
  border-radius: 999px;

  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .3px;

  background: rgba(255, 255, 255, .08);
  border: 1px solid rgba(255, 255, 255, .18);

  transition:
    transform .3s ease,
    background .3s ease,
    box-shadow .3s ease;
}

.menu-card:hover .menu-card-content strong {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, .14);
  box-shadow: 0 8px 20px rgba(0, 0, 0, .18);
}


/* =========================================================
   BOTÃO VER DETALHES
========================================================= */

.menu-item-btn {
  margin-top: 14px;
  width: 100%;
  min-height: 44px;

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, .16);

  font-weight: 700;
  cursor: pointer;

  transition:
    transform .25s ease,
    box-shadow .25s ease,
    background .25s ease;
}

.menu-item-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, .18);
}

.menu-item-btn:active {
  transform: scale(.97);
}


/* =========================================================
   IMAGENS DOS PRATOS
========================================================= */

.menu-card-image {
  overflow: hidden;
}

.menu-card-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;

  transition:
    transform .6s ease,
    filter .6s ease;
}

.menu-card:hover .menu-card-image img {
  transform: scale(1.06);
  filter: brightness(1.05);
}


/* =========================================================
   NO TELEMÓVEL
========================================================= */

@media (max-width: 600px) {

  .menu-card-image img {
    height: 200px;
  }

  .menu-card-content strong {
    font-size: .95rem;
  }

  .menu-item-btn {
    min-height: 46px;
  }

}


