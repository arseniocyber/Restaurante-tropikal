/* =========================================================
   CALOR TROPICAL
   JAVASCRIPT COMPLETO
========================================================= */

const WA_NUMBER = "258846220984";

/* =========================
   MENU
========================= */

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
  ["Shamussas de peixe (1 uni)", "Fish samossa", 220, "Entradas"],
  ["Caranguejo ao natural", "Crab", 500, "Entradas"],
  ["Pão de alho", "Garlic bread", 150, "Entradas"],
  ["Rissóis de camarão (4 uni)", "Prawn rissoles", 220, "Entradas"],
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
  ["1/2 frango & prawns", "1/2 chicken & prawns", 1325, "Combo's"],

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
  ["Marisco for 3 pax", "Seafood for 3 pax", 3500, "Mariscos"],
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
  ["JC lata 250 ml", "JC can 250 ml", 150, "Cervejas"],
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
  ["Gin Tanquery", "Gin Tanquery", 100, "Aperitivos"],
  ["Whisky Novo", "New Whisky", 100, "Aperitivos"],
  ["Whisky Velho", "Old Whisky", 150, "Aperitivos"],
  ["Captain Morgan / Bacardi", "Captain Morgan / Bacardi", 100, "Aperitivos"],
  ["Klipdrift", "Klipdrift", 80, "Aperitivos"],
  ["Amarula DBL", "Amarula DBL", 190, "Aperitivos"],
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
  ["Vinho a copo", "Wine by glass", 150, "Vinhos"],
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


/* =========================
   IMAGENS
========================= */

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


/* =========================
   PRODUTOS
========================= */

const products = menuData.map((item, index) => ({
  id: index,
  name: item[0],
  english: item[1],
  price: item[2],
  category: item[3],
  image: categoryImages[item[3]] || "images/menu.jpg"
}));


/* =========================
   ELEMENTOS
========================= */

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");

const productModal = document.getElementById("productModal");
const overlay = document.getElementById("overlay");

const modalProductImage = document.getElementById("modalProductImage");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductName = document.getElementById("modalProductName");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDescription =
  document.getElementById("modalProductDescription");

const modalClose = document.getElementById("modalClose");
const modalAddButton = document.getElementById("modalAddButton");

const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");

const customerName = document.getElementById("customerName");
const customerNote = document.getElementById("customerNote");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

let selectedCategory = "Todos";
let selectedProduct = null;
let cart = [];


/* =========================
   DESCRIÇÕES
========================= */

function getDescription(product) {

  const descriptions = {
    "Camarão":
      "Camarão preparado com todo o cuidado para proporcionar uma experiência especial de sabores do mar.",

    "Peixe inteiro":
      "Peixe inteiro preparado ao estilo do Calor Tropical, servido com acompanhamentos.",

    "Frango inteiro":
      "Frango preparado com sabor e qualidade, ideal para partilhar.",

    "Marisco p2 pax":
      "Uma seleção de mariscos para duas pessoas.",

    "Marisco for 3 pax":
      "Uma seleção generosa de mariscos para três pessoas.",

    "Salada tropical":
      "Uma combinação fresca e tropical para acompanhar a sua refeição.",

    "Caipirinha":
      "Cocktail refrescante preparado para momentos especiais na Ilha de Inhaca."
  };

  return descriptions[product.name] ||
    `${product.name} — uma opção do menu Calor Tropical.`;
}


/* =========================
   MOSTRAR MENU
========================= */

function renderMenu() {

  if (!menuGrid) return;

  const search =
    menuSearch ? menuSearch.value.toLowerCase().trim() : "";

  const filtered = products.filter(product => {

    const categoryOK =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const searchOK =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.english.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    return categoryOK && searchOK;
  });


  if (filtered.length === 0) {

    menuGrid.innerHTML = `
      <div class="menu-empty">
        <h3>Nenhum prato encontrado</h3>
        <p>Tente pesquisar outro item ou escolher outra categoria.</p>
      </div>
    `;

    return;
  }


  menuGrid.innerHTML = filtered.map(product => `

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

        <span class="menu-card-category">
          ${product.category}
        </span>

        <h3>${product.name}</h3>

        <p>${product.english}</p>

        <div class="menu-card-bottom">

          <strong>${product.price} MTS</strong>

          <button
            class="menu-item-btn"
            type="button"
            data-id="${product.id}"
          >
            Ver detalhes
          </button>

        </div>

      </div>

    </article>

  `).join("");
}


/* =========================
   ABRIR PRODUTO
========================= */

function openProduct(id) {

  const product = products.find(p => p.id === Number(id));

  if (!product || !productModal) return;

  selectedProduct = product;

  if (modalProductImage)
    modalProductImage.src = product.image;

  if (modalProductImage)
    modalProductImage.alt = product.name;

  if (modalProductCategory)
    modalProductCategory.textContent = product.category;

  if (modalProductName)
    modalProductName.textContent = product.name;

  if (modalProductPrice)
    modalProductPrice.textContent = `${product.price} MTS`;

  if (modalProductDescription)
    modalProductDescription.textContent =
      getDescription(product);

  productModal.classList.add("active");

  if (overlay)
    overlay.classList.add("active");
}


/* =========================
   FECHAR PRODUTO
========================= */

function closeProductModal() {

  if (productModal)
    productModal.classList.remove("active");

  if (overlay &&
      (!cartDrawer || !cartDrawer.classList.contains("active"))) {
    overlay.classList.remove("active");
  }

  selectedProduct = null;
}


/* =========================
   EVENTO MENU
========================= */

if (menuGrid) {

  menuGrid.addEventListener("click", function(event) {

    const button =
      event.target.closest(".menu-item-btn");

    const card =
      event.target.closest(".menu-card");

    if (button) {
      event.preventDefault();
      event.stopPropagation();

      openProduct(button.dataset.id);
      return;
    }

    if (card) {
      openProduct(card.dataset.id);
    }

  });
}


/* =========================
   MODAL
========================= */

if (modalClose) {
  modalClose.addEventListener("click", closeProductModal);
}


/* =========================
   CARRINHO
========================= */

function saveCart() {

  try {
    localStorage.setItem(
      "calorTropicalCart",
      JSON.stringify(cart)
    );
  } catch (error) {
    console.log("Não foi possível guardar o carrinho.");
  }
}


function loadCart() {

  try {

    const saved =
      localStorage.getItem("calorTropicalCart");

    cart = saved ? JSON.parse(saved) : [];

  } catch (error) {

    cart = [];

  }
}


function addToCart(product) {

  if (!product) return;

  const existing =
    cart.find(item => item.id === product.id);

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

  const item =
    cart.find(product => product.id === Number(id));

  if (item) {
    item.quantity++;
  }

  saveCart();
  renderCart();
  updateCartCount();
}


function decreaseQuantity(id) {

  const item =
    cart.find(product => product.id === Number(id));

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {

    cart =
      cart.filter(product => product.id !== Number(id));

  }

  saveCart();
  renderCart();
  updateCartCount();
}


function removeFromCart(id) {

  cart =
    cart.filter(product => product.id !== Number(id));

  saveCart();
  renderCart();
  updateCartCount();
}


function getCartTotal() {

  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
}


function updateCartCount() {

  if (!cartCount) return;

  const count =
    cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

  cartCount.textContent = count;
}


/* =========================
   MOSTRAR CARRINHO
========================= */

function renderCart() {

  if (!cartItems) return;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="cart-empty">
        <p>O seu carrinho está vazio.</p>
      </div>
    `;

    if (cartTotal)
      cartTotal.textContent = "0 MTS";

    return;
  }


  cartItems.innerHTML = cart.map(item => `

    <div class="cart-item">

      <img
        src="${item.image}"
        alt="${item.name}"
        onerror="this.src='images/menu.jpg'"
      >

      <div class="cart-item-info">

        <strong>${item.name}</strong>

        <span>${item.price} MTS</span>

        <div class="quantity">

          <button
            type="button"
            data-action="decrease"
            data-id="${item.id}"
          >
            −
          </button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-action="increase"
            data-id="${item.id}"
          >
            +
          </button>

        </div>

      </div>

      <button
        class="remove-item"
        type="button"
        data-action="remove"
        data-id="${item.id}"
      >
        ×
      </button>

    </div>

  `).join("");


  if (cartTotal)
    cartTotal.textContent =
      `${getCartTotal()} MTS`;
}


/* =========================
   BOTÕES DO CARRINHO
========================= */

if (cartItems) {

  cartItems.addEventListener("click", function(event) {

    const button =
      event.target.closest("[data-action]");

    if (!button) return;

    const id =
      Number(button.dataset.id);

    const action =
      button.dataset.action;

    if (action === "increase")
      increaseQuantity(id);

    if (action === "decrease")
      decreaseQuantity(id);

    if (action === "remove")
      removeFromCart(id);

  });
}


/* =========================
   ABRIR / FECHAR CARRINHO
========================= */

function openCart() {

  if (cartDrawer)
    cartDrawer.classList.add("active");

  if (overlay)
    overlay.classList.add("active");

  renderCart();
}


function closeCart() {

  if (cartDrawer)
    cartDrawer.classList.remove("active");

  if (overlay &&
      (!productModal ||
       !productModal.classList.contains("active"))) {

    overlay.classList.remove("active");
  }
}


if (openCartButton) {

  openCartButton.addEventListener(
    "click",
    openCart
  );

}


if (closeCartButton) {

  closeCartButton.addEventListener(
    "click",
    closeCart
  );

}


/* =========================
   BOTÃO ADICIONAR AO CARRINHO
========================= */

if (modalAddButton) {

  modalAddButton.addEventListener("click", function() {

    if (!selectedProduct) return;

    addToCart(selectedProduct);

    closeProductModal();

    openCart();

  });

}


/* =========================
   QUICK ORDER
========================= */

document.addEventListener("click", function(event) {

  const button =
    event.target.closest(".quick-order");

  if (!button) return;

  const id = button.dataset.id;

  if (id) {

    const product =
      products.find(p => p.id === Number(id));

    if (product) {
      addToCart(product);
      openCart();
    }

    return;
  }


  const card =
    button.closest(".featured-card");

  if (!card) return;

  const title =
    card.querySelector("h3");

  if (!title) return;

  const product =
    products.find(
      p =>
        p.name.toLowerCase() ===
        title.textContent.trim().toLowerCase()
    );

  if (product) {

    addToCart(product);
    openCart();

  }

});


/* =========================
   WHATSAPP
========================= */

const sendWhatsApp =
  document.getElementById("sendWhatsApp");


if (sendWhatsApp) {

  sendWhatsApp.addEventListener(
    "click",
    function() {

      if (cart.length === 0) {

        alert("O seu carrinho está vazio.");

        return;
      }


      const name =
        customerName ?
        customerName.value.trim() :
        "";

      const note =
        customerNote ?
        customerNote.value.trim() :
        "";


      let message =
        "Olá, Calor Tropical!%0A%0A";

      message +=
        "Gostaria de fazer este pedido:%0A%0A";


      cart.forEach(item => {

        message +=
          `• ${item.name} x${item.quantity} — ${item.price * item.quantity} MTS%0A`;

      });


      message +=
        `%0ATotal: ${getCartTotal()} MTS%0A`;


      if (name)
        message += `%0ANome: ${encodeURIComponent(name)}`;


      if (note)
        message +=
          `%0AObservação: ${encodeURIComponent(note)}`;


      window.open(
        `https://wa.me/${WA_NUMBER}?text=${message}`,
        "_blank"
      );

    }
  );

}


/* =========================
   FILTROS
========================= */

const filters =
  document.querySelectorAll(".menu-filter");


filters.forEach(button => {

  button.addEventListener("click", function() {

    filters.forEach(btn =>
      btn.classList.remove("active")
    );

    this.classList.add("active");

    selectedCategory =
      this.dataset.category ||
      this.textContent
           this.textContent.trim();

    if (!selectedCategory) {
      selectedCategory = "Todos";
    }

    renderMenu();

  });

});


/* =========================
   PESQUISA DO MENU
========================= */

if (menuSearch) {

  menuSearch.addEventListener("input", function () {
    renderMenu();
  });

}


/* =========================
   BOTÃO DE 3 BARRAS
========================= */

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", function (event) {

    event.preventDefault();

    mainNav.classList.toggle("active");

    menuToggle.classList.toggle("active");

  });


  mainNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

      mainNav.classList.remove("active");

      menuToggle.classList.remove("active");

    });

  });

}


/* =========================
   CARRINHO
========================= */

function saveCart() {

  localStorage.setItem(
    "calorTropicalCart",
    JSON.stringify(cart)
  );

}


function loadCart() {

  const saved =
    localStorage.getItem("calorTropicalCart");

  if (saved) {

    try {

      cart = JSON.parse(saved);

    } catch (error) {

      cart = [];

    }

  }

}


function addToCart(product) {

  if (!product) return;

  const existing =
    cart.find(function (item) {

      return item.id === product.id;

    });


  if (existing) {

    existing.quantity++;

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

  const item =
    cart.find(function (product) {

      return product.id === Number(id);

    });


  if (item) {

    item.quantity++;

  }


  saveCart();

  renderCart();

  updateCartCount();

}


function decreaseQuantity(id) {

  const item =
    cart.find(function (product) {

      return product.id === Number(id);

    });


  if (!item) return;


  item.quantity--;


  if (item.quantity <= 0) {

    cart =
      cart.filter(function (product) {

        return product.id !== Number(id);

      });

  }


  saveCart();

  renderCart();

  updateCartCount();

}


function removeFromCart(id) {

  cart =
    cart.filter(function (product) {

      return product.id !== Number(id);

    });


  saveCart();

  renderCart();

  updateCartCount();

}


function getCartTotal() {

  return cart.reduce(function (total, item) {

    return total + item.price * item.quantity;

  }, 0);

}


function updateCartCount() {

  if (!cartCount) return;

  const count =
    cart.reduce(function (total, item) {

      return total + item.quantity;

    }, 0);


  cartCount.textContent = count;

}


/* =========================
   MOSTRAR CARRINHO
========================= */

function renderCart() {

  if (!cartItems) return;


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="cart-empty">
        <p>O seu carrinho está vazio.</p>
      </div>
    `;

    if (cartTotal) {

      cartTotal.textContent = "0 MTS";

    }

    return;

  }


  cartItems.innerHTML = cart.map(function (item) {

    return `

      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
        >

        <div class="cart-item-info">

          <strong>${item.name}</strong>

          <span>${item.price} MTS</span>

          <div class="quantity">

            <button
              type="button"
              data-action="decrease"
              data-id="${item.id}"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-action="increase"
              data-id="${item.id}"
            >
              +
            </button>

          </div>

        </div>

        <button
          class="remove-item"
          type="button"
          data-action="remove"
          data-id="${item.id}"
        >
          ×
        </button>

      </div>

    `;

  }).join("");


  if (cartTotal) {

    cartTotal.textContent =
      `${getCartTotal()} MTS`;

  }

}


/* =========================
   BOTÕES DO CARRINHO
========================= */

if (cartItems) {

  cartItems.addEventListener("click", function (event) {

    const button =
      event.target.closest("[data-action]");

    if (!button) return;


    const id =
      Number(button.dataset.id);

    const action =
      button.dataset.action;


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


/* =========================
   ABRIR CARRINHO
========================= */

function openCart() {

  if (cartDrawer) {

    cartDrawer.classList.add("active");

  }


  if (overlay) {

    overlay.classList.add("active");

  }


  renderCart();

}


/* =========================
   FECHAR CARRINHO
========================= */

function closeCart() {

  if (cartDrawer) {

    cartDrawer.classList.remove("active");

  }

       }
 
/* =========================
   ABRIR / FECHAR CARRINHO
========================= */

if (openCartButton) {

  openCartButton.addEventListener("click", function () {

    openCart();

  });

}


if (closeCartButton) {

  closeCartButton.addEventListener("click", function () {

    closeCart();

  });

}


/* =========================
   BOTÕES "MARCAR / PEDIR"
========================= */

document.addEventListener("click", function (event) {

  const button =
    event.target.closest(".quick-order");

  if (!button) return;


  const id =
    button.dataset.id;


  if (id !== undefined) {

    const product =
      products.find(function (item) {

        return item.id === Number(id);

      });


    if (product) {

      addToCart(product);

      openCart();

    }

    return;

  }


  const card =
    button.closest(".featured-card");


  if (!card) return;


  const title =
    card.querySelector("h3");


  if (!title) return;


  const product =
    products.find(function (item) {

      return item.name
        .toLowerCase()
        .includes(title.textContent
        .trim()
        .toLowerCase());

    });


  if (product) {

    addToCart(product);

    openCart();

  }

});


/* =========================
   ENVIAR PEDIDO PELO WHATSAPP
========================= */

if (sendWhatsAppButton) {

  sendWhatsAppButton.addEventListener(
    "click",
    function () {

      if (cart.length === 0) {

        alert("O carrinho está vazio.");

        return;

      }


      const customerName =
        document.getElementById("customerName");


      const customerNote =
        document.getElementById("customerNote");


      let message =
        "Olá, Calor Tropical! 👋\n\n";

      message +=
        "Gostaria de fazer o seguinte pedido:\n\n";


      cart.forEach(function (item) {

        message +=
          `• ${item.name} x${item.quantity} — ${item.price * item.quantity} MTS\n`;

      });


      message +=
        `\nTotal: ${getCartTotal()} MTS`;


      if (
        customerName &&
        customerName.value.trim()
      ) {

        message +=
          `\n\nNome: ${customerName.value.trim()}`;

      }


      if (
        customerNote &&
        customerNote.value.trim()
      ) {

        message +=
          `\nObservação: ${customerNote.value.trim()}`;

      }


      message +=
        "\n\nObrigado!";


      const url =
        "https://wa.me/" +
        WA_NUMBER +
        "?text=" +
        encodeURIComponent(message);


      window.open(url, "_blank");

    }
  );

}


/* =========================
   GALERIA — IMAGENS CLICÁVEIS
========================= */

const galleryImages =
  document.querySelectorAll(
    ".gallery-grid img, .gallery-item img"
  );


galleryImages.forEach(function (image) {

  image.style.cursor = "pointer";


  image.addEventListener("click", function () {

    const lightbox =
      document.createElement("div");


    lightbox.className =
      "gallery-lightbox";


    lightbox.innerHTML = `

      <button
        class="gallery-close"
        type="button"
        aria-label="Fechar"
      >
        ×
      </button>

      <img
        src="${image.src}"
        alt="${image.alt || "Calor Tropical"}"
      >

    `;


    document.body.appendChild(lightbox);


    requestAnimationFrame(function () {

      lightbox.classList.add("active");

    });


    const close =
      lightbox.querySelector(".gallery-close");


    function closeLightbox() {

      lightbox.classList.remove("active");

      setTimeout(function () {

        lightbox.remove();

      }, 250);

    }


    close.addEventListener(
      "click",
      closeLightbox
    );


    lightbox.addEventListener(
      "click",
      function (event) {

        if (event.target === lightbox) {

          closeLightbox();

        }

      }
    );


    document.addEventListener(
      "keydown",
      function escapeGallery(event) {

        if (event.key === "Escape") {

          closeLightbox();

          document.removeEventListener(
            "keydown",
            escapeGallery
          );

        }

      }
    );

  });

});


/* =========================
   VOLTAR AO TOPO
========================= */

const backToTop =
  document.getElementById("backToTop");


if (backToTop) {

  window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  });


  backToTop.addEventListener("click", function () {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

}


/* =========================
   LINKS INTERNOS
========================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(function (link) {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          link.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) return;


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


/* =========================
   INICIALIZAÇÃO FINAL
========================= */

loadCart();

renderMenu();

renderCart();

updateCartCount();


console.log(
  "Calor Tropical — site carregado com sucesso."
);
