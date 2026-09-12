/* =========================================================
   CALOR TROPICAL — JAVASCRIPT
   PARTE 1/5 — DADOS DO MENU
========================================================= */

const WA_NUMBER = "258846220984";

let cart = [];
let selectedCategory = "Todos";
let selectedProduct = null;

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");

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
  "Cocktail": "🍹",
  "Aperitivos": "🥃",
  "Digestivos": "🥃",
  "Shoots": "🥃",
  "Vinhos": "🍷"
};

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
  ["Bife", "Beef steak", 850, "Principais"],

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
  ([name, english, price, category], index) => ({
    id: index,
    name,
    english,
    price,
    category,
    image: categoryImages[category] || "images/menu.jpg"
  })
);

/* =========================================================
   CALOR TROPICAL — JAVASCRIPT
   PARTE 2/5 — MENU + MODAL DOS PRODUTOS
========================================================= */

/* ---------- DESCRIÇÕES DOS PRODUTOS ---------- */

function getProductDescription(product) {
  const descriptions = {
    "Camarão": "Camarão preparado com sabor especial, ideal para uma refeição deliciosa junto ao mar.",
    "Peixe inteiro": "Peixe inteiro preparado ao estilo do Calor Tropical.",
    "Frango inteiro": "Frango inteiro preparado e servido com acompanhamento.",
    "Marisco": "Seleção de mariscos para uma experiência especial.",
    "Salada tropical": "Salada fresca e tropical, perfeita para acompanhar a sua refeição.",
    "Caipirinha": "Cocktail refrescante preparado com limão e ingredientes selecionados."
  };

  return descriptions[product.name] ||
    `Deliciosa opção do menu Calor Tropical — ${product.name}.`;
}


/* ---------- RENDERIZAR MENU ---------- */

function renderMenu() {
  if (!menuGrid) return;

  const searchTerm = menuSearch
    ? menuSearch.value.trim().toLowerCase()
    : "";

  const filteredProducts = products.filter(product => {

    const matchesCategory =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const text =
      `${product.name} ${product.english} ${product.category}`
        .toLowerCase();

    const matchesSearch =
      !searchTerm || text.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  if (!filteredProducts.length) {
    menuGrid.innerHTML = `
      <div class="empty-menu">
        <span>🍽️</span>
        <h3>Nenhum prato encontrado</h3>
        <p>Tente outra categoria ou pesquise outro prato.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filteredProducts.map(product => `
    <article class="menu-card" data-id="${product.id}">

      <div class="menu-card-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='images/menu.jpg'"
        >
      </div>

      <div class="menu-card-content">

        <span class="menu-category">
          ${categoryIcons[product.category] || "🍽️"}
          ${product.category}
        </span>

        <h3>${product.name}</h3>

        ${
          product.english
            ? `<p class="menu-english">${product.english}</p>`
            : ""
        }

        <div class="menu-card-bottom">
          <strong>${product.price} MTS</strong>

          <button
            type="button"
            class="menu-item-btn"
            data-id="${product.id}"
          >
            Ver detalhes
          </button>
        </div>

      </div>
    </article>
  `).join("");
}


/* ---------- ABRIR PRODUTO ---------- */

function openProduct(productId) {

  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return;

  selectedProduct = product;

  const modal = document.getElementById("productModal");

  const image = document.getElementById("modalProductImage");
  const category = document.getElementById("modalProductCategory");
  const name = document.getElementById("modalProductName");
  const price = document.getElementById("modalProductPrice");
  const description = document.getElementById("modalProductDescription");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  if (category) {
    category.textContent =
      `${categoryIcons[product.category] || "🍽️"} ${product.category}`;
  }

  if (name) {
    name.textContent = product.name;
  }

  if (price) {
    price.textContent = `${product.price} MTS`;
  }

  if (description) {
    description.textContent =
      getProductDescription(product);
  }

  if (modal) {
    modal.classList.add("active");
  }

  const overlay = document.getElementById("overlay");

  if (overlay) {
    overlay.classList.add("active");
  }

  document.body.classList.add("modal-open");
}


/* ---------- FECHAR MODAL ---------- */

function closeProductModal() {

  const modal = document.getElementById("productModal");
  const overlay = document.getElementById("overlay");

  if (modal) {
    modal.classList.remove("active");
  }

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.classList.remove("modal-open");

  selectedProduct = null;
}


/* ---------- CLIQUE NOS PRODUTOS ---------- */

if (menuGrid) {

  menuGrid.addEventListener("click", function(event) {

    const button = event.target.closest(".menu-item-btn");

    if (button) {
      event.stopPropagation();

      const id = button.dataset.id;

      openProduct(id);

      return;
    }

    const card = event.target.closest(".menu-card");

    if (card) {
      openProduct(card.dataset.id);
    }

  });

}


/* ---------- BOTÃO FECHAR DO MODAL ---------- */

const modalClose = document.getElementById("modalClose");

if (modalClose) {
  modalClose.addEventListener("click", closeProductModal);
}


/* ---------- FECHAR CLICANDO NO OVERLAY ---------- */

const overlay = document.getElementById("overlay");

if (overlay) {

  overlay.addEventListener("click", function() {

    closeProductModal();

    const cartDrawer = document.getElementById("cartDrawer");

    if (cartDrawer) {
      cartDrawer.classList.remove("active");
    }

  });

}


/* ---------- TECLA ESC ---------- */

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closeProductModal();

    const cartDrawer = document.getElementById("cartDrawer");

    if (cartDrawer) {
      cartDrawer.classList.remove("active");
    }

    if (overlay) {
      overlay.classList.remove("active");
    }
  }

});


/* =========================================================
   CALOR TROPICAL — JAVASCRIPT
   PARTE 3/5 — CARRINHO
========================================================= */


/* ---------- GUARDAR CARRINHO ---------- */

function saveCart() {
  localStorage.setItem("calorTropicalCart", JSON.stringify(cart));
}


/* ---------- CARREGAR CARRINHO ---------- */

function loadCart() {

  try {

    const savedCart =
      localStorage.getItem("calorTropicalCart");

    if (savedCart) {
      cart = JSON.parse(savedCart);
    }

  } catch (error) {

    cart = [];

  }

}


/* ---------- ADICIONAR AO CARRINHO ---------- */

function addToCart(product) {

  if (!product) return;

  const existingItem = cart.find(
    item => item.id === product.id
  );

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      quantity: 1
    });

  }

  saveCart();
  renderCart();
  updateCartCount();

}


/* ---------- AUMENTAR QUANTIDADE ---------- */

function increaseQuantity(productId) {

  const item = cart.find(
    product => product.id === Number(productId)
  );

  if (!item) return;

  item.quantity += 1;

  saveCart();
  renderCart();
  updateCartCount();

}


/* ---------- DIMINUIR QUANTIDADE ---------- */

function decreaseQuantity(productId) {

  const item = cart.find(
    product => product.id === Number(productId)
  );

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {

    cart = cart.filter(
      product => product.id !== Number(productId)
    );

  }

  saveCart();
  renderCart();
  updateCartCount();

}


/* ---------- REMOVER ITEM ---------- */

function removeFromCart(productId) {

  cart = cart.filter(
    product => product.id !== Number(productId)
  );

  saveCart();
  renderCart();
  updateCartCount();

}


/* ---------- TOTAL DO CARRINHO ---------- */

function getCartTotal() {

  return cart.reduce(
    (total, item) =>
      total + (item.price * item.quantity),
    0
  );

}


/* ---------- QUANTIDADE TOTAL ---------- */

function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}


/* ---------- ATUALIZAR CONTADOR ---------- */

function updateCartCount() {

  const cartCount =
    document.getElementById("cartCount");

  if (!cartCount) return;

  const count = getCartCount();

  cartCount.textContent = count;

  if (count > 0) {
    cartCount.classList.add("active");
  } else {
    cartCount.classList.remove("active");
  }

}


/* ---------- MOSTRAR CARRINHO ---------- */

function renderCart() {

  const cartItems =
    document.getElementById("cartItems");

  const cartTotal =
    document.getElementById("cartTotal");

  if (!cartItems) return;


  /* CARRINHO VAZIO */

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>

        <h3>O seu carrinho está vazio</h3>

        <p>
          Escolha os seus pratos favoritos
          no menu para fazer o pedido.
        </p>
      </div>
    `;

    if (cartTotal) {
      cartTotal.textContent = "0 MTS";
    }

    updateCartCount();

    return;
  }


  /* ITENS DO CARRINHO */

  cartItems.innerHTML = cart.map(item => {

    const subtotal =
      item.price * item.quantity;

    return `
      <div class="cart-item">

        <div class="cart-item-info">

          <h4>${item.name}</h4>

          <span>
            ${item.price} MTS × ${item.quantity}
          </span>

          <strong>
            ${subtotal} MTS
          </strong>

        </div>


        <div class="cart-item-actions">

          <button
            type="button"
            class="quantity-btn"
            data-action="decrease"
            data-id="${item.id}"
            aria-label="Diminuir quantidade"
          >
            −
          </button>

          <span class="quantity-value">
            ${item.quantity}
          </span>

          <button
            type="button"
            class="quantity-btn"
            data-action="increase"
            data-id="${item.id}"
            aria-label="Aumentar quantidade"
          >
            +
          </button>

          <button
            type="button"
            class="remove-cart-item"
            data-action="remove"
            data-id="${item.id}"
            aria-label="Remover ${item.name}"
          >
            ×
          </button>

        </div>

      </div>
    `;

  }).join("");


  /* TOTAL */

  if (cartTotal) {

    cartTotal.textContent =
      `${getCartTotal()} MTS`;

  }

}


/* ---------- CLIQUES NO CARRINHO ---------- */

const cartItemsContainer =
  document.getElementById("cartItems");

if (cartItemsContainer) {

  cartItemsContainer.addEventListener(
    "click",
    function(event) {

      const button =
        event.target.closest("button[data-action]");

      if (!button) return;

      const action =
        button.dataset.action;

      const id =
        button.dataset.id;


      if (action === "increase") {

        increaseQuantity(id);

      }


      if (action === "decrease") {

        decreaseQuantity(id);

      }


      if (action === "remove") {

        removeFromCart(id);

      }

    }
  );

}


/* ---------- INICIALIZAR DADOS DO CARRINHO ---------- */

loadCart();
renderCart();
updateCartCount();

/* =========================================================
   CALOR TROPICAL — JAVASCRIPT
   PARTE 4/5 — CARRINHO + WHATSAPP
========================================================= */


/* ---------- ADICIONAR PELO MODAL ---------- */

const modalAddButton =
  document.getElementById("modalAddButton");

if (modalAddButton) {

  modalAddButton.addEventListener("click", function() {

    if (!selectedProduct) return;

    addToCart(selectedProduct);

    closeProductModal();

    openCart();

  });

}


/* ---------- ABRIR CARRINHO ---------- */

function openCart() {

  const cartDrawer =
    document.getElementById("cartDrawer");

  const overlay =
    document.getElementById("overlay");

  if (cartDrawer) {
    cartDrawer.classList.add("active");
  }

  if (overlay) {
    overlay.classList.add("active");
  }

  document.body.classList.add("modal-open");

}


/* ---------- FECHAR CARRINHO ---------- */

function closeCart() {

  const cartDrawer =
    document.getElementById("cartDrawer");

  const overlay =
    document.getElementById("overlay");

  if (cartDrawer) {
    cartDrawer.classList.remove("active");
  }

  if (overlay) {
    overlay.classList.remove("active");
  }

  document.body.classList.remove("modal-open");

}


/* ---------- BOTÃO ABRIR CARRINHO ---------- */

const openCartButton =
  document.getElementById("openCart");

if (openCartButton) {

  openCartButton.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      openCart();

    }
  );

}


/* ---------- BOTÃO FECHAR CARRINHO ---------- */

const closeCartButton =
  document.getElementById("closeCart");

if (closeCartButton) {

  closeCartButton.addEventListener(
    "click",
    function() {

      closeCart();

    }
  );

}


/* ---------- BOTÕES "MARCAR / PEDIR" ---------- */

document.addEventListener("click", function(event) {

  const quickButton =
    event.target.closest(".quick-order");

  if (!quickButton) return;

  const productId =
    quickButton.dataset.id;

  if (productId !== undefined) {

    const product =
      products.find(
        item => item.id === Number(productId)
      );

    if (product) {

      addToCart(product);

      openCart();

      return;

    }

  }


  /* Caso o botão não tenha data-id,
     tenta encontrar pelo nome */

  const card =
    quickButton.closest(".featured-card");

  if (!card) return;

  const title =
    card.querySelector("h3");

  if (!title) return;

  const product =
    products.find(
      item =>
        item.name.toLowerCase() ===
        title.textContent.trim().toLowerCase()
    );

  if (product) {

    addToCart(product);

    openCart();

  }

});


/* ---------- ENVIAR PEDIDO PELO WHATSAPP ---------- */

const sendWhatsAppButton =
  document.getElementById("sendWhatsApp");

if (sendWhatsAppButton) {

  sendWhatsAppButton.addEventListener(
    "click",
    function() {

      if (cart.length === 0) {

        alert(
          "O seu carrinho está vazio. Escolha primeiro os produtos."
        );

        return;

      }


      const customerName =
        document.getElementById("customerName");

      const customerNote =
        document.getElementById("customerNote");


      const name =
        customerName
          ? customerName.value.trim()
          : "";

      const note =
        customerNote
          ? customerNote.value.trim()
          : "";


      let message =
        "Olá, Calor Tropical! 👋%0A%0A";

      message +=
        "Gostaria de fazer o seguinte pedido:%0A%0A";


      cart.forEach((item, index) => {

        const subtotal =
          item.price * item.quantity;

        message +=
          `${index + 1}. ${item.name} — ` +
          `${item.quantity}x — ` +
          `${subtotal} MTS%0A`;

      });


      message +=
        `%0A*Total: ${getCartTotal()} MTS*%0A`;


      if (name) {

        message +=
          `%0ANome: ${encodeURIComponent(name)}`;

      }


      if (note) {

        message +=
          `%0AObservação: ${encodeURIComponent(note)}`;

      }


      const whatsappURL =
        `https://wa.me/${WA_NUMBER}?text=${message}`;


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}


/* ---------- ABRIR WHATSAPP DIRETO ---------- */

document.addEventListener("click", function(event) {

  const whatsappLink =
    event.target.closest(
      'a[href*="wa.me"]'
    );

  if (!whatsappLink) return;

  /* Mantém os links de WhatsApp
     funcionando normalmente */

});


/* ---------- SINCRONIZAR CARRINHO ---------- */

function updateCart() {

  saveCart();

  renderCart();

  updateCartCount();

}


/* ---------- FECHAR AO CLICAR NO OVERLAY ---------- */

if (overlay) {

  overlay.addEventListener("click", function() {

    closeCart();

  });

                          }

/* =========================================================
   CALOR TROPICAL — JAVASCRIPT
   PARTE 5/5 — FILTROS + MENU + GALERIA + FINALIZAÇÃO
========================================================= */


/* ---------- FILTROS DO MENU ---------- */

const menuFilters =
  document.querySelectorAll(".menu-filter");

menuFilters.forEach(button => {

  button.addEventListener("click", function() {

    menuFilters.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    selectedCategory =
      this.dataset.category ||
      this.textContent.trim();

    renderMenu();

  });

});


/* ---------- PESQUISA DO MENU ---------- */

if (menuSearch) {

  menuSearch.addEventListener(
    "input",
    function() {

      renderMenu();

    }
  );

}


/* ---------- MENU MOBILE ---------- */

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener(
    "click",
    function() {

      mainNav.classList.toggle("active");

      menuToggle.classList.toggle("active");

      const expanded =
        mainNav.classList.contains("active");

      menuToggle.setAttribute(
        "aria-expanded",
        expanded
      );

    }
  );


  /* Fechar menu depois de clicar num link */

  mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function() {

      mainNav.classList.remove("active");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ---------- GALERIA LIGHTBOX ---------- */

function createGalleryLightbox() {

  if (document.getElementById("galleryLightbox")) {
    return;
  }

  const style = document.createElement("style");

  style.textContent = `
    #galleryLightbox {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(0,0,0,.94);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    #galleryLightbox.active {
      display: flex;
    }

    #galleryLightbox img {
      max-width: 95%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 14px;
      box-shadow: 0 20px 70px rgba(0,0,0,.6);
    }

    #galleryLightboxClose {
      position: absolute;
      top: 20px;
      right: 25px;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.15);
      color: white;
      font-size: 30px;
      cursor: pointer;
      z-index: 2;
    }

    #galleryLightboxClose:hover {
      background: rgba(255,255,255,.28);
    }

    .gallery-grid img {
      cursor: pointer;
    }
  `;

  document.head.appendChild(style);


  const lightbox =
    document.createElement("div");

  lightbox.id = "galleryLightbox";

  lightbox.innerHTML = `
    <button
      type="button"
      id="galleryLightboxClose"
      aria-label="Fechar imagem"
    >
      ×
    </button>

    <img
      id="galleryLightboxImage"
      src=""
      alt="Imagem da galeria"
    >
  `;

  document.body.appendChild(lightbox);


  const closeButton =
    document.getElementById(
      "galleryLightboxClose"
    );

  const lightboxImage =
    document.getElementById(
      "galleryLightboxImage"
    );


  /* Abrir imagem */

  document.querySelectorAll(
    ".gallery-item img, .gallery-grid img"
  ).forEach(image => {

    image.addEventListener("click", function(event) {

      event.preventDefault();
      event.stopPropagation();

      lightboxImage.src = this.src;
      lightboxImage.alt =
        this.alt || "Imagem da galeria";

      lightbox.classList.add("active");

      document.body.classList.add("modal-open");

    });

  });


  /* Fechar */

  closeButton.addEventListener(
    "click",
    function() {

      lightbox.classList.remove("active");

      document.body.classList.remove("modal-open");

    }
  );


  lightbox.addEventListener(
    "click",
    function(event) {

      if (event.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.classList.remove(
          "modal-open"
        );

      }

    }
  );

}


/* ---------- BOTÃO VOLTAR AO TOPO ---------- */

const backToTop =
  document.getElementById("backToTop");


if (backToTop) {

  window.addEventListener(
    "scroll",
    function() {

      if (window.scrollY > 500) {

        backToTop.classList.add("visible");

      } else {

        backToTop.classList.remove("visible");

      }

    }
  );


  backToTop.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* ---------- LINKS INTERNOS SUAVES ---------- */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(link => {

  link.addEventListener(
    "click",
    function(event) {

      const targetId =
        this.getAttribute("href");

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

    }
  );

});


/* ---------- CORRIGIR BOTÕES DE NAVEGAÇÃO ---------- */

document.querySelectorAll(
  ".hero-buttons a, .cta a"
).forEach(button => {

  button.addEventListener(
    "click",
    function() {

      if (
        this.getAttribute("href") === "#menu"
      ) {

        selectedCategory = "Todos";

        menuFilters.forEach(item => {
          item.classList.remove("active");

          if (
            item.dataset.category === "Todos"
          ) {
            item.classList.add("active");
          }
        });

        renderMenu();

      }

    }
  );

});


/* ---------- INICIALIZAÇÃO FINAL ---------- */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadCart();

    renderCart();

    updateCartCount();

    renderMenu();

    createGalleryLightbox();

  }
);


/* ---------- GARANTIR QUE FUNCIONE
   MESMO COM SCRIPT DEFER ---------- */

if (document.readyState !== "loading") {

  renderMenu();

  renderCart();

  updateCartCount();

  createGalleryLightbox();

}




