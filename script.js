/* =========================================================
   CALOR TROPICAL
   SCRIPT.JS
   ========================================================= */


/* ================= CONFIGURAÇÕES ================= */

const WA_NUMBER = "258874220984";

let cart = [];

let selectedCategory = "Todos";

const money = value =>
  `${Number(value).toLocaleString("pt-MZ")} MTS`;


/* ================= MENU ================= */

const menuData = [

  /* CAFÉ / CHÁ */

  {
    name: "Café e leite / Coffee with milk",
    price: 150,
    category: "Café / Chá",
    image: "images/menu.jpg"
  },

  {
    name: "Chá e leite / Tea with milk",
    price: 125,
    category: "Café / Chá",
    image: "images/menu.jpg"
  },

  {
    name: "Capuchinho / Cappuccino",
    price: 150,
    category: "Café / Chá",
    image: "images/menu.jpg"
  },

  {
    name: "Expresso / Express",
    price: 150,
    category: "Café / Chá",
    image: "images/menu.jpg"
  },

  {
    name: "Chocolate quente / Hot chocolate",
    price: 175,
    category: "Café / Chá",
    image: "images/menu.jpg"
  },


  /* SALADAS */

  {
    name: "Salada grega / Greek salad",
    price: 250,
    category: "Saladas",
    image: "images/menu.jpg"
  },

  {
    name: "Salada de atum / Tuna salad",
    price: 250,
    category: "Saladas",
    image: "images/menu.jpg"
  },

  {
    name: "Salada russa / Russian salad",
    price: 250,
    category: "Saladas",
    image: "images/menu.jpg"
  },

  {
    name: "Salada tropical / Tropical salad",
    price: 200,
    category: "Saladas",
    image: "images/menu.jpg"
  },


  /* ENTRADAS */

  {
    name: "Shamussas de peixe (1 uni)",
    price: 220,
    category: "Entradas",
    image: "images/menu.jpg"
  },

  {
    name: "Caranguejo ao natural / Crab",
    price: 500,
    category: "Entradas",
    image: "images/seafood.jpg"
  },

  {
    name: "Pão de alho / Garlic bread",
    price: 150,
    category: "Entradas",
    image: "images/menu.jpg"
  },

  {
    name: "Rissóis de camarão (4 uni)",
    price: 220,
    category: "Entradas",
    image: "images/camarao.jpg"
  },

  {
    name: "Camarão alhinho",
    price: 550,
    category: "Entradas",
    image: "images/camarao.jpg"
  },

  {
    name: "Caril de camarão",
    price: 880,
    category: "Entradas",
    image: "images/camarao.jpg"
  },

  {
    name: "Caril de caranguejo",
    price: 650,
    category: "Entradas",
    image: "images/seafood.jpg"
  },


  /* SNACKS */

  {
    name: "Tosta de queijo / Cheese toast",
    price: 250,
    category: "Snacks & Sandwich",
    image: "images/menu.jpg"
  },

  {
    name: "Tosta mista / Ham & cheese toast",
    price: 300,
    category: "Snacks & Sandwich",
    image: "images/menu.jpg"
  },

  {
    name: "Prego no pão / Steak N Roll",
    price: 285,
    category: "Snacks & Sandwich",
    image: "images/menu.jpg"
  },

  {
    name: "Cheese N Bacon sandwich",
    price: 300,
    category: "Snacks & Sandwich",
    image: "images/menu.jpg"
  },

  {
    name: "Chicken Mayo / Hamburger",
    price: 300,
    category: "Snacks & Sandwich",
    image: "images/menu.jpg"
  },


  /* OMELETES */

  {
    name: "Omelete simples",
    price: 200,
    category: "Omeletes",
    image: "images/menu.jpg"
  },

  {
    name: "Omelete de queijo",
    price: 200,
    category: "Omeletes",
    image: "images/menu.jpg"
  },

  {
    name: "Omelete misto",
    price: 250,
    category: "Omeletes",
    image: "images/menu.jpg"
  },

  {
    name: "Pequeno almoço / Breakfast",
    price: 425,
    category: "Omeletes",
    image: "images/menu.jpg"
  },


  /* COMBOS */

  {
    name: "Chicken & calamari",
    price: 875,
    category: "Combo's",
    image: "images/frango.jpg"
  },

  {
    name: "Chicken & prawns",
    price: 875,
    category: "Combo's",
    image: "images/camarao.jpg"
  },

  {
    name: "Prawns & calamari",
    price: 875,
    category: "Combo's",
    image: "images/seafood.jpg"
  },

  {
    name: "Prawns & fish fillet",
    price: 875,
    category: "Combo's",
    image: "images/peixe.jpg"
  },

  {
    name: "Calamari & fish fillet",
    price: 875,
    category: "Combo's",
    image: "images/peixe.jpg"
  },

  {
    name: "Chicken & fish fillet",
    price: 875,
    category: "Combo's",
    image: "images/frango.jpg"
  },

  {
    name: "1/2 frango & prawns",
    price: 1325,
    category: "Combo's",
    image: "images/camarao.jpg"
  },


  /* PRINCIPAIS */

  {
    name: "1/4 frango / Chicken",
    price: 305,
    category: "Principais",
    image: "images/frango.jpg"
  },

  {
    name: "1/2 frango / Chicken",
    price: 450,
    category: "Principais",
    image: "images/frango.jpg"
  },

  {
    name: "Frango inteiro / Chicken",
    price: 850,
    category: "Principais",
    image: "images/frango.jpg"
  },

  {
    name: "Peixe inteiro / Whole fish",
    price: 850,
    category: "Principais",
    image: "images/peixe.jpg"
  },

  {
    name: "Filete de peixe",
    price: 600,
    category: "Principais",
    image: "images/peixe.jpg"
  },

  {
    name: "Lula grelhada",
    price: 550,
    category: "Principais",
    image: "images/seafood.jpg"
  },

  {
    name: "Posta de peixe",
    price: 500,
    category: "Principais",
    image: "images/peixe.jpg"
  },

  {
    name: "Panado / Fish fingers",
    price: 550,
    category: "Principais",
    image: "images/peixe.jpg"
  },

  {
    name: "Camarão",
    price: 895,
    category: "Principais",
    image: "images/camarao.jpg"
  },

  {
    name: "Bife / Beef",
    price: 850,
    category: "Principais",
    image: "images/frango.jpg"
  },


  /* MARISCOS */

  {
    name: "4 (fish, prawns, calamari)",
    price: 1525,
    category: "Mariscos",
    image: "images/seafood.jpg"
  },

  {
    name: "Marisco / Seafood p2 pax",
    price: 2500,
    category: "Mariscos",
    image: "images/seafood.jpg"
  },

  {
    name: "Lobstar & 6 prawns",
    price: 1975,
    category: "Mariscos",
    image: "images/seafood.jpg"
  },

  {
    name: "Marisco / Seafood for 3 pax",
    price: 3500,
    category: "Mariscos",
    image: "images/seafood.jpg"
  },

  {
    name: "12 camarões / Prawns with chips",
    price: 1275,
    category: "Mariscos",
    image: "images/camarao.jpg"
  },


  /* REFRESCOS */

  {
    name: "330 ml",
    price: 70,
    category: "Refrescos",
    image: "images/menu.jpg"
  },

  {
    name: "Soda & Tônica",
    price: 75,
    category: "Refrescos",
    image: "images/menu.jpg"
  },

  {
    name: "Appletiser",
    price: 100,
    category: "Refrescos",
    image: "images/menu.jpg"
  },


  /* SUMOS / ÁGUAS */

  {
    name: "Sumo Cappy",
    price: 125,
    category: "Sumos / Águas",
    image: "images/menu.jpg"
  },

  {
    name: "Sumo 500 ml",
    price: 100,
    category: "Sumos / Águas",
    image: "images/menu.jpg"
  },

  {
    name: "Sumo 1 L",
    price: 165,
    category: "Sumos / Águas",
    image: "images/menu.jpg"
  },

  {
    name: "Água 500 ml",
    price: 50,
    category: "Sumos / Águas",
    image: "images/menu.jpg"
  },

  {
    name: "Água 1,5 L",
    price: 95,
    category: "Sumos / Águas",
    image: "images/menu.jpg"
  },

  {
    name: "Água gaseificada",
    price: 100,
    category: "Sumos / Águas",
    image: "images/menu.jpg"
  },


  /* CERVEJAS */

  {
    name: "JC lata 250 ml",
    price: 150,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Ciders / Cidras",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Heineken",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Breezer / Brutal",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Corona",
    price: 120,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Txilar / Preta",
    price: 85,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Manica / Impala 330 ml",
    price: 80,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Fly-fishing / Spin",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Castle Lite",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Castle D. Malte",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Bermin",
    price: 125,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Red Bull",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },

  {
    name: "Monster",
    price: 100,
    category: "Cervejas",
    image: "images/menu.jpg"
  },


  /* COCKTAIL */

  {
    name: "Vodka / Sumo",
    price: 150,
    category: "Cocktail",
    image: "images/menu.jpg"
  },

  {
    name: "R & R",
    price: 150,
    category: "Cocktail",
    image: "images/menu.jpg"
  },

  {
    name: "Passion fruit / Sprite",
    price: 125,
    category: "Cocktail",
    image: "images/menu.jpg"
  },

  {
    name: "Milk Pedro",
    price: 325,
    category: "Cocktail",
    image: "images/menu.jpg"
  },

  {
    name: "Caipirinha",
    price: 350,
    category: "Cocktail",
    image: "images/menu.jpg"
  },


  /* APERITIVOS */

  {
    name: "May Fair",
    price: 125,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Gin Gordon / Belgravia",
    price: 80,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Gin Tanquery",
    price: 100,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Whisky Novo",
    price: 100,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Whisky Velho",
    price: 150,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Captain Morgan / Bacardi",
    price: 100,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Klipdrift",
    price: 80,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Amarula DBL",
    price: 190,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Vodka Absolut",
    price: 100,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },

  {
    name: "Vodka Smirnoff",
    price: 80,
    category: "Aperitivos",
    image: "images/menu.jpg"
  },


  /* DIGESTIVOS */

  {
    name: "1920 / S. Domingos",
    price: 150,
    category: "Digestivos",
    image: "images/menu.jpg"
  },

  {
    name: "Vinho do Porto",
    price: 150,
    category: "Digestivos",
    image: "images/menu.jpg"
  },


  /* SHOOTS */

  {
    name: "Sambuca",
    price: 150,
    category: "Shoots",
    image: "images/menu.jpg"
  },

  {
    name: "Tequila",
    price: 150,
    category: "Shoots",
    image: "images/menu.jpg"
  },

  {
    name: "Vinho do Porto",
    price: 300,
    category: "Shoots",
    image: "images/menu.jpg"
  },


  /* VINHOS */

  {
    name: "Vinho a copo",
    price: 150,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "Boschendal / Kadete",
    price: 1350,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "F. Bostsrd / Roodenberg",
    price: 1250,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "G. Carlou / C. Sauvignon",
    price: 1350,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "Cabriz, Gatão, Graça",
    price: 850,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "G. Garcia, Aveleda",
    price: 850,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "Portada",
    price: 850,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "Chocolate Bloc",
    price: 1750,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "JC - Keuroux grf.",
    price: 650,
    category: "Vinhos",
    image: "images/menu.jpg"
  },

  {
    name: "Krone, Tosti, Anabela",
    price: 1100,
    category: "Vinhos",
    image: "images/menu.jpg"
  }

];


/* ================= ELEMENTOS ================= */

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const filters = document.getElementById("filters");

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalProductImage = document.getElementById("modalProductImage");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductName = document.getElementById("modalProductName");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDescription = document.getElementById("modalProductDescription");
const modalAddButton = document.getElementById("modalAddButton");

const overlay = document.getElementById("overlay");

const cartDrawer = document.getElementById("cartDrawer");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const customerName = document.getElementById("customerName");
const customerNote = document.getElementById("customerNote");
const sendWhatsApp = document.getElementById("sendWhatsApp");

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

const backToTop = document.getElementById("backToTop");


/* ================= LOCAL STORAGE ================= */

function saveCart() {

  try {
    localStorage.setItem(
      "calorTropicalCart",
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn("Não foi possível guardar o pedido.");
  }

}


function loadCart() {

  try {

    const saved = localStorage.getItem("calorTropicalCart");

    if (saved) {
      cart = JSON.parse(saved);
    }

  } catch (error) {

    cart = [];

  }

}


/* ================= IMAGENS ================= */

function getImage(item) {

  return item.image || "images/menu.jpg";

}


/* ================= RENDER MENU ================= */

function renderMenu() {

  const searchTerm =
    menuSearch.value
      .trim()
      .toLowerCase();


  const filtered = menuData.filter(item => {

    const matchesCategory =
      selectedCategory === "Todos" ||
      item.category === selectedCategory;


    const matchesSearch =
      item.name
        .toLowerCase()
        .includes(searchTerm);


    return matchesCategory && matchesSearch;

  });


  if (!filtered.length) {

    menuGrid.innerHTML = `
      <div class="empty-cart" style="grid-column:1/-1">
        <span>🔎</span>
        <p>Nenhum item encontrado.</p>
      </div>
    `;

    return;

  }


  menuGrid.innerHTML = filtered.map((item, index) => {

    const realIndex =
      menuData.indexOf(item);


    return `
      <article
        class="menu-card reveal visible"
        data-index="${realIndex}"
        tabindex="0"
      >

        <div class="menu-card-image">

          <img
            src="${getImage(item)}"
            alt="${item.name}"
            loading="lazy"
          >

        </div>


        <div class="menu-card-content">

          <span class="menu-category">
            ${item.category}
          </span>

          <h3>
            ${item.name}
          </h3>


          <div class="menu-card-bottom">

            <strong class="menu-price">
              ${money(item.price)}
            </strong>

            <span class="menu-view">
              VER DETALHES →
            </span>

          </div>

        </div>

      </article>
    `;

  }).join("");

}


/* ================= FILTROS ================= */

filters.addEventListener("click", event => {

  const button =
    event.target.closest(".filter");


  if (!button) return;


  selectedCategory =
    button.dataset.category;


  document
    .querySelectorAll(".filter")
    .forEach(item => {
      item.classList.remove("active");
    });


  button.classList.add("active");

  renderMenu();

});


/* ================= PESQUISA ================= */

menuSearch.addEventListener("input", renderMenu);


/* ================= MODAL ================= */

function openProduct(item) {

  modalProductImage.src =
    getImage(item);

  modalProductImage.alt =
    item.name;

  modalProductCategory.textContent =
    item.category;

  modalProductName.textContent =
    item.name;

  modalProductPrice.textContent =
    money(item.price);


  let description =
    "Uma opção disponível no menu do Calor Tropical.";


  if (item.category === "Principais") {

    description =
      "Prato principal servido com arroz, batatas fritas e salada.";

  }


  if (
    item.category === "Combo's" ||
    item.category === "Mariscos"
  ) {

    description =
      "Servido com 1 ou 2 shamussas, conforme indicado no menu.";

  }


  modalProductDescription.textContent =
    description;


  modalAddButton.onclick = () => {

    addToCart(item);

    closeProduct();

  };


  productModal.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");

}


function closeProduct() {

  productModal.classList.remove("active");

  if (!cartDrawer.classList.contains("active")) {
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

}


menuGrid.addEventListener("click", event => {

  const card =
    event.target.closest(".menu-card");


  if (!card) return;


  const item =
    menuData[Number(card.dataset.index)];


  if (item) {
    openProduct(item);
  }

});


menuGrid.addEventListener("keydown", event => {

  if (
    event.key !== "Enter" &&
    event.key !== " "
  ) {
    return;
  }


  const card =
    event.target.closest(".menu-card");


  if (!card) return;


  event.preventDefault();


  const item =
    menuData[Number(card.dataset.index)];


  if (item) {
    openProduct(item);
  }

});


modalClose.addEventListener("click", closeProduct);


/* ================= CARRINHO ================= */

function addToCart(item) {

  const existing =
    cart.find(
      product => product.name === item.name
    );


  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({
      ...item,
      quantity: 1
    });

  }


  saveCart();

  renderCart();

  openCartDrawer();

}


function removeFromCart(name) {

  cart =
    cart.filter(
      item => item.name !== name
    );


  saveCart();

  renderCart();

}


function changeQuantity(name, amount) {

  const item =
    cart.find(
      product => product.name === name
    );


  if (!item) return;


  item.quantity += amount;


  if (item.quantity <= 0) {
    removeFromCart(name);
    return;
  }


  saveCart();

  renderCart();

}


function getCartTotal() {

  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

}


function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}


function renderCart() {

  const count =
    getCartCount();


  cartCount.textContent =
    count;


  cartTotal.textContent =
    money(getCartTotal());


  if (!cart.length) {

    cartItems.innerHTML = `
      <div class="empty-cart">

        <span>🛒</span>

        <p>
          O seu pedido está vazio.
        </p>

        <a href="#menu" id="emptyCartLink">
          Escolher pratos
        </a>

      </div>
    `;

    return;

  }


  cartItems.innerHTML =
    cart.map(item => `

      <div class="cart-item">

        <img
          src="${getImage(item)}"
          alt="${item.name}"
        >


        <div>

          <h4>
            ${item.name}
          </h4>

          <div class="cart-item-price">
            ${money(item.price)}
          </div>


          <div class="quantity">

            <button
              data-action="minus"
              data-name="${item.name}"
  
