/* =========================================================
   CALOR TROPICAL
   SCRIPT.JS — PARTE 1/3
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
   MENU REAL DO RESTAURANTE
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
  ["12 camarões", "Prawns with chips", 1275, "Mariscos"]

];

/* =========================================================
   PARTE 2/3 — RESTANTE DO MENU + MODAL
========================================================= */

/* REFRESCOS */
menuData.push(
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
);


/* =========================================================
   TRANSFORMAR OS DADOS EM PRODUTOS
========================================================= */

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


/* =========================================================
   DESCRIÇÕES
========================================================= */

function getProductDescription(product) {

  const descriptions = {
    "Camarão":
      "Camarão preparado com todo o sabor da cozinha do Calor Tropical.",

    "Peixe inteiro":
      "Peixe inteiro preparado ao estilo do restaurante, servido com acompanhamentos.",

    "Frango inteiro":
      "Frango preparado para uma refeição saborosa e completa.",

    "Marisco p2 pax":
      "Seleção de mariscos para duas pessoas.",

    "Marisco para 3 pax":
      "Seleção especial de mariscos para três pessoas.",

    "Salada tropical":
      "Uma salada fresca e tropical, ideal para acompanhar a sua refeição.",

    "Caipirinha":
      "Cocktail refrescante preparado para momentos de descontração."
  };

  return descriptions[product.name] ||
    `${product.name} — uma opção do menu Calor Tropical.`;
}


/* =========================================================
   FORMATAR PREÇO
========================================================= */

function formatPrice(price) {
  return `${price.toLocaleString("pt-PT")} MTS`;
}


/* =========================================================
   MOSTRAR MENU
========================================================= */

function renderMenu() {

  if (!menuGrid) return;

  const searchText = menuSearch
    ? menuSearch.value.trim().toLowerCase()
    : "";

  const filteredProducts = products.filter(function(product) {

    const categoryOK =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const searchOK =
      !searchText ||
      product.name.toLowerCase().includes(searchText) ||
      product.english.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    return categoryOK && searchOK;
  });


  if (filteredProducts.length === 0) {

    menuGrid.innerHTML = `
      <div class="menu-empty">
        <h3>Nenhum prato encontrado</h3>
        <p>Tente outra pesquisa ou escolha outra categoria.</p>
      </div>
    `;

    return;
  }


  menuGrid.innerHTML = filteredProducts.map(function(product) {

    return `
      <article class="menu-card" data-id="${product.id}">

        <div class="menu-card-image">
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >
        </div>

        <div class="menu-card-content">

          <span class="menu-card-category">
            ${product.category}
          </span>

          <h3>${product.name}</h3>

          <p>${product.english}</p>

          <div class="menu-card-bottom">

            <strong>${formatPrice(product.price)}</strong>

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
    `;

  }).join("");
}


/* =========================================================
   ABRIR PRODUTO
========================================================= */

function openProduct(productId) {

  const product = products.find(function(item) {
    return item.id === Number(productId);
  });

  if (!product) return;

  selectedProduct = product;

  const modal = document.getElementById("productModal");
  const image = document.getElementById("modalProductImage");
  const category = document.getElementById("modalProductCategory");
  const name = document.getElementById("modalProductName");
  const price = document.getElementById("modalProductPrice");
  const description = document.getElementById("modalProductDescription");
  const overlay = document.getElementById("overlay");

  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }

  if (category) {
    category.textContent = product.category;
  }

  if (name) {
    name.textContent = product.name;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  if (description) {
    description.textContent = getProductDescription(product);
  }

  if (modal) {
    modal.classList.add("active");
  }

  if (overlay) {
    overlay.classList.add("active");
  }

  document.body.style.overflow = "hidden";
}


/* =========================================================
   FECHAR PRODUTO
========================================================= */

function closeProductModal() {

  const modal = document.getElementById("productModal");

  if (modal) {
    modal.classList.remove("active");
  }

  const overlay = document.getElementById("overlay");

  if (overlay && !document.getElementById("cartDrawer")?.classList.contains("active")) {
    overlay.classList.remove("active");
  }

  if (!document.getElementById("cartDrawer")?.classList.contains("active")) {
    document.body.style.overflow = "";
  }

}


/* =========================================================
   CLICAR NOS PRODUTOS DO MENU
========================================================= */

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


/* =========================================================
   BOTÃO FECHAR DO MODAL
========================================================= */

const modalClose = document.getElementById("modalClose");

if (modalClose) {

  modalClose.addEventListener("click", function() {
    closeProductModal();
  });

   }

/* =========================================================
   PARTE 3/3 — FILTROS, MENU MOBILE, CARRINHO,
   WHATSAPP, GALERIA E INICIALIZAÇÃO
========================================================= */


/* =========================================================
   FILTROS DO MENU
========================================================= */

const menuFilters = document.querySelectorAll(".menu-filter");

menuFilters.forEach(function(button) {

  button.addEventListener("click", function() {

    menuFilters.forEach(function(item) {
      item.classList.remove("active");
    });

    this.classList.add("active");

    selectedCategory = this.dataset.category || "Todos";

    if (!selectedCategory) {
      selectedCategory = "Todos";
    }

    renderMenu();

  });

});


/* =========================================================
   PESQUISA DO MENU
========================================================= */

if (menuSearch) {

  menuSearch.addEventListener("input", function() {
    renderMenu();
  });

}


/* =========================================================
   MENU DE 3 BARRAS — MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle) {

  menuToggle.addEventListener("click", function(event) {

    event.preventDefault();
    event.stopPropagation();

    if (mainNav) {
      mainNav.classList.toggle("active");
    }

    menuToggle.classList.toggle("active");

  });

}


/* Fechar o menu ao clicar num link */

if (mainNav) {

  const navLinks = mainNav.querySelectorAll("a");

  navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

      mainNav.classList.remove("active");

      if (menuToggle) {
        menuToggle.classList.remove("active");
      }

    });

  });

}


/* Fechar menu quando clicar num link */

if (mainNav) {

  mainNav.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

      mainNav.classList.remove("active");
      mainNav.classList.remove("open");

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }

    });

  });

}


/* =========================================================
   CARRINHO
========================================================= */

function saveCart() {

  localStorage.setItem(
    "calorTropicalCart",
    JSON.stringify(cart)
  );

}


function getCartTotal() {

  return cart.reduce(function(total, item) {

    return total + (item.price * item.quantity);

  }, 0);

}


function getCartCount() {

  return cart.reduce(function(total, item) {

    return total + item.quantity;

  }, 0);

}


function updateCartCount() {

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.textContent = getCartCount();
  }

}


function addToCart(product) {

  if (!product) return;

  const existing = cart.find(function(item) {
    return item.id === product.id;
  });

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

  const item = cart.find(function(product) {
    return product.id === Number(id);
  });

  if (!item) return;

  item.quantity += 1;

  saveCart();
  renderCart();
  updateCartCount();

}


function decreaseQuantity(id) {

  const item = cart.find(function(product) {
    return product.id === Number(id);
  });

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {

    cart = cart.filter(function(product) {
      return product.id !== Number(id);
    });

  }

  saveCart();
  renderCart();
  updateCartCount();

}


function removeFromCart(id) {

  cart = cart.filter(function(product) {
    return product.id !== Number(id);
  });

  saveCart();
  renderCart();
  updateCartCount();

}


/* =========================================================
   MOSTRAR CARRINHO
========================================================= */

function renderCart() {

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems) return;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:40px;">🛒</div>
        <h3>O seu pedido está vazio</h3>
        <p>Escolha os pratos que deseja pedir.</p>
      </div>
    `;

    if (cartTotal) {
      cartTotal.textContent = "0 MTS";
    }

    return;
  }


  cartItems.innerHTML = cart.map(function(item) {

    return `
      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div class="cart-item-info">

          <h4>${item.name}</h4>

          <strong>${formatPrice(item.price)}</strong>

          <div class="cart-item-controls">

            <button
              type="button"
              data-cart-action="decrease"
              data-id="${item.id}"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-cart-action="increase"
              data-id="${item.id}"
            >
              +
            </button>

            <button
              type="button"
              data-cart-action="remove"
              data-id="${item.id}"
              title="Remover"
            >
              ×
            </button>

          </div>

        </div>

      </div>
    `;

  }).join("");


  if (cartTotal) {
    cartTotal.textContent = formatPrice(getCartTotal());
  }

}


/* =========================================================
   CONTROLOS DO CARRINHO
========================================================= */

const cartItemsElement = document.getElementById("cartItems");

if (cartItemsElement) {

  cartItemsElement.addEventListener("click", function(event) {

    const button = event.target.closest("button");

    if (!button) return;

    const action = button.dataset.cartAction;
    const id = button.dataset.id;

    if (action === "increase") {
      increaseQuantity(id);
    }

    if (action === "decrease") {
      decreaseQuantity(id);
    }

    if (action === "remove") {
      removeFromCart(id);
    }

  });

}


/* =========================================================
   ABRIR / FECHAR CARRINHO
========================================================= */

function openCart() {

  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");

  if (drawer) {
    drawer.classList.add("active");
  }

  if (overlay) {
    overlay.classList.add("active");
  }

  document.body.style.overflow = "hidden";

}


function closeCart() {

  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("overlay");

  if (drawer) {
    drawer.classList.remove("active");
  }

  if (
    overlay &&
    !document.getElementById("productModal")?.classList.contains("active")
  ) {
    overlay.classList.remove("active");
  }

  if (
    !document.getElementById("productModal")?.classList.contains("active")
  ) {
    document.body.style.overflow = "";
  }

}


const openCartButton =
  document.getElementById("openCartButton");

const closeCartButton =
  document.getElementById("closeCartButton");


if (openCartButton) {

  openCartButton.addEventListener("click", function() {
    openCart();
  });

}


if (closeCartButton) {

  closeCartButton.addEventListener("click", function() {
    closeCart();
  });

}


/* =========================================================
   BOTÃO ADICIONAR AO CARRINHO DO MODAL
========================================================= */

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


/* =========================================================
   BOTÕES "MARCAR / PEDIR" DOS PRATOS EM DESTAQUE
========================================================= */

document.addEventListener("click", function(event) {

  const button = event.target.closest(".quick-order");

  if (!button) return;

  const id = button.dataset.id;

  if (id !== undefined) {

    const product = products.find(function(item) {
      return item.id === Number(id);
    });

    if (product) {
      addToCart(product);
      openCart();
    }

    return;
  }


  const card = button.closest(".featured-card");

  if (!card) return;

  const title = card.querySelector("h3");

  if (!title) return;

  const product = products.find(function(item) {

    return item.name.toLowerCase() ===
      title.textContent.trim().toLowerCase();

  });

  if (product) {

    addToCart(product);
    openCart();

  }

});


/* =========================================================
   ENVIAR PEDIDO PELO WHATSAPP
========================================================= */

const sendWhatsAppButton =
  document.getElementById("sendWhatsAppButton");


if (sendWhatsAppButton) {

  sendWhatsAppButton.addEventListener("click", function() {

    if (cart.length === 0) {

      alert("Adicione pelo menos um produto ao pedido.");

      return;
    }


    const customerName =
      document.getElementById("customerName")?.value.trim() || "";

    const customerNote =
      document.getElementById("customerNote")?.value.trim() || "";


    let message =
      "Olá, Calor Tropical! 👋\n\n" +
      "Gostaria de fazer o seguinte pedido:\n\n";


    cart.forEach(function(item) {

      message +=
        `• ${item.name} x${item.quantity} — ` +
        `${formatPrice(item.price * item.quantity)}\n`;

    });


    message +=
      `\n*Total: ${formatPrice(getCartTotal())}*`;


    if (customerName) {

      message +=
        `\n\nNome: ${customerName}`;

    }


    if (customerNote) {

      message +=
        `\nObservação: ${customerNote}`;

    }


    message +=
      "\n\nObrigado!";


    const url =
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");

  });

}


/* =========================================================
   OVERLAY
========================================================= */

const overlay =
  document.getElementById("overlay");


if (overlay) {

  overlay.addEventListener("click", function() {

    closeProductModal();
    closeCart();

  });

}


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener("keydown", function(event) {

  if (event.key !== "Escape") return;

  closeProductModal();
  closeCart();

});


/* =========================================================
   GALERIA — LIGHTBOX
========================================================= */

let galleryLightbox = null;


function createGalleryLightbox() {

  if (galleryLightbox) return;


  galleryLightbox = document.createElement("div");

  galleryLightbox.id = "galleryLightbox";

  galleryLightbox.innerHTML = `
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
      alt="Imagem ampliada"
    >
  `;


  document.body.appendChild(galleryLightbox);


  const style = document.createElement("style");

  style.textContent = `
    #galleryLightbox {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(0,0,0,.92);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 25px;
    }

    #galleryLightbox.active {
      display: flex;
    }

    #galleryLightbox img {
      max-width: 95%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 14px;
      box-shadow: 0 20px 60px rgba(0,0,0,.5);
    }

    #galleryLightboxClose {
      position: absolute;
      top: 18px;
      right: 22px;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 50%;
      background: rgba(255,255,255,.15);
      color: white;
      font-size: 34px;
      line-height: 1;
      cursor: pointer;
      z-index: 2;
    }

    #galleryLightboxClose:hover {
      background: rgba(255,255,255,.28);
    }
  `;

  document.head.appendChild(style);


  const closeButton =
    document.getElementById("galleryLightboxClose");

  if (closeButton) {

    closeButton.addEventListener("click", function() {

      galleryLightbox.classList.remove("active");

      document.body.style.overflow = "";

    });

  }


  galleryLightbox.addEventListener("click", function(event) {

    if (event.target === galleryLightbox) {

      galleryLightbox.classList.remove("active");

      document.body.style.overflow = "";

    }

  });

}


/* Abrir imagens da galeria */

document.addEventListener("click", function(event) {

  const image = event.target.closest(
    ".gallery-grid img, .gallery-item img"
  );

  if (!image) return;

  createGalleryLightbox();

  const lightboxImage =
    document.getElementById("galleryLightboxImage");

  if (!lightboxImage) return;

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "Calor Tropical";

  galleryLightbox.classList.add("active");

  document.body.style.overflow = "hidden";

});


/* =========================================================
   BOTÃO VOLTAR AO TOPO
========================================================= */

const backToTop =
  document.getElementById("backToTop");


window.addEventListener("scroll", function() {

  if (!backToTop) return;

  if (window.scrollY > 500) {

    backToTop.classList.add("show");
    backToTop.classList.add("active");

  } else {

    backToTop.classList.remove("show");
    backToTop.classList.remove("active");

  }

});


if (backToTop) {

  backToTop.addEventListener("click", function() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   LINKS PARA O MENU
========================================================= */

document.querySelectorAll(
  'a[href="#menu"], a[href="#cardapio"]'
).forEach(function(link) {

  link.addEventListener("click", function() {

    selectedCategory = "Todos";

    if (menuSearch) {
      menuSearch.value = "";
    }

    menuFilters.forEach(function(button) {
      button.classList.remove("active");

      const category =
        button.dataset.category ||
        button.textContent.trim();

      if (category === "Todos") {
        button.classList.add("active");
      }
    });

    renderMenu();

  });

});


/* =========================================================
   INICIALIZAÇÃO FINAL
========================================================= */

renderMenu();
renderCart();
updateCartCount();
createGalleryLightbox();


/* =========================================================
   FIM DO SCRIPT
========================================================= */

