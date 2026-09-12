/* =========================================================
   CALOR TROPICAL
   SCRIPT.JS — PARTE 1/2
   ========================================================= */

const WA_NUMBER = "258874220984";

let cart = [];
let selectedCategory = "Todos";

const money = value =>
  `${Number(value).toLocaleString("pt-MZ")} MTS`;


/* =========================================================
   MENU — PORTUGUÊS / ENGLISH
========================================================= */

const menuData = [

  /* ================= CAFÉ / CHÁ ================= */

  {
    category: "Café / Chá",
    name: "Café e leite",
    english: "Coffee with milk",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Café / Chá",
    name: "Chá e leite",
    english: "Tea with milk",
    price: 125,
    image: "images/menu.jpg"
  },
  {
    category: "Café / Chá",
    name: "Capuchinho",
    english: "Cappuccino",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Café / Chá",
    name: "Expresso",
    english: "Espresso",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Café / Chá",
    name: "Chocolate quente",
    english: "Hot chocolate",
    price: 175,
    image: "images/menu.jpg"
  },


  /* ================= SALADAS ================= */

  {
    category: "Saladas",
    name: "Salada grega",
    english: "Greek salad",
    price: 250,
    image: "images/menu.jpg"
  },
  {
    category: "Saladas",
    name: "Salada de atum",
    english: "Tuna salad",
    price: 250,
    image: "images/menu.jpg"
  },
  {
    category: "Saladas",
    name: "Salada russa",
    english: "Russian salad",
    price: 250,
    image: "images/menu.jpg"
  },
  {
    category: "Saladas",
    name: "Salada tropical",
    english: "Tropical salad",
    price: 200,
    image: "images/menu.jpg"
  },


  /* ================= ENTRADAS ================= */

  {
    category: "Entradas",
    name: "Shamussas de peixe (1 uni)",
    english: "Fish samosas (1 pc)",
    price: 220,
    image: "images/menu.jpg"
  },
  {
    category: "Entradas",
    name: "Caranguejo ao natural",
    english: "Fresh crab",
    price: 500,
    image: "images/seafood.jpg"
  },
  {
    category: "Entradas",
    name: "Pão de alho",
    english: "Garlic bread",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Entradas",
    name: "Rissóis de camarão (4 uni)",
    english: "Prawn rissoles (4 pcs)",
    price: 220,
    image: "images/menu.jpg"
  },
  {
    category: "Entradas",
    name: "Camarão alhinho",
    english: "Garlic prawns",
    price: 550,
    image: "images/camarao.jpg"
  },
  {
    category: "Entradas",
    name: "Caril de camarão",
    english: "Prawn curry",
    price: 880,
    image: "images/camarao.jpg"
  },
  {
    category: "Entradas",
    name: "Caril de caranguejo",
    english: "Crab curry",
    price: 650,
    image: "images/seafood.jpg"
  },


  /* ================= SNACKS ================= */

  {
    category: "Snacks & Sandwich",
    name: "Tosta de queijo",
    english: "Cheese toast",
    price: 250,
    image: "images/menu.jpg"
  },
  {
    category: "Snacks & Sandwich",
    name: "Tosta mista",
    english: "Ham & cheese toast",
    price: 300,
    image: "images/menu.jpg"
  },
  {
    category: "Snacks & Sandwich",
    name: "Prego no pão",
    english: "Steak N Roll",
    price: 285,
    image: "images/menu.jpg"
  },
  {
    category: "Snacks & Sandwich",
    name: "Cheese N Bacon sandwich",
    english: "Cheese & bacon sandwich",
    price: 300,
    image: "images/menu.jpg"
  },
  {
    category: "Snacks & Sandwich",
    name: "Chicken Mayo / Hamburger",
    english: "Chicken Mayo / Hamburger",
    price: 300,
    image: "images/menu.jpg"
  },


  /* ================= OMELETES ================= */

  {
    category: "Omeletes",
    name: "Omelete simples",
    english: "Plain omelette",
    price: 200,
    image: "images/menu.jpg"
  },
  {
    category: "Omeletes",
    name: "Omelete de queijo",
    english: "Cheese omelette",
    price: 200,
    image: "images/menu.jpg"
  },
  {
    category: "Omeletes",
    name: "Omelete misto",
    english: "Mixed omelette",
    price: 250,
    image: "images/menu.jpg"
  },
  {
    category: "Omeletes",
    name: "Pequeno almoço",
    english: "Breakfast",
    price: 425,
    image: "images/menu.jpg"
  },


  /* ================= COMBOS ================= */

  {
    category: "Combo's",
    name: "Chicken & calamari",
    english: "Chicken & calamari",
    price: 875,
    image: "images/frango.jpg"
  },
  {
    category: "Combo's",
    name: "Chicken & prawns",
    english: "Chicken & prawns",
    price: 875,
    image: "images/frango.jpg"
  },
  {
    category: "Combo's",
    name: "Prawns & calamari",
    english: "Prawns & calamari",
    price: 875,
    image: "images/camarao.jpg"
  },
  {
    category: "Combo's",
    name: "Prawns & fish fillet",
    english: "Prawns & fish fillet",
    price: 875,
    image: "images/camarao.jpg"
  },
  {
    category: "Combo's",
    name: "Calamari & fish fillet",
    english: "Calamari & fish fillet",
    price: 875,
    image: "images/peixe.jpg"
  },
  {
    category: "Combo's",
    name: "Chicken & fish fillet",
    english: "Chicken & fish fillet",
    price: 875,
    image: "images/frango.jpg"
  },
  {
    category: "Combo's",
    name: "1/2 frango & prawns",
    english: "Half chicken & prawns",
    price: 1325,
    image: "images/frango.jpg"
  },


  /* ================= PRINCIPAIS ================= */

  {
    category: "Principais",
    name: "1/4 frango",
    english: "Quarter chicken",
    price: 305,
    image: "images/frango.jpg"
  },
  {
    category: "Principais",
    name: "1/2 frango",
    english: "Half chicken",
    price: 450,
    image: "images/frango.jpg"
  },
  {
    category: "Principais",
    name: "Frango inteiro",
    english: "Whole chicken",
    price: 850,
    image: "images/frango.jpg"
  },
  {
    category: "Principais",
    name: "Peixe inteiro",
    english: "Whole fish",
    price: 850,
    image: "images/peixe.jpg"
  },
  {
    category: "Principais",
    name: "Filete de peixe",
    english: "Fish fillet",
    price: 600,
    image: "images/peixe.jpg"
  },
  {
    category: "Principais",
    name: "Lula grelhada",
    english: "Grilled calamari",
    price: 550,
    image: "images/seafood.jpg"
  },
  {
    category: "Principais",
    name: "Posta de peixe",
    english: "Fish steak",
    price: 500,
    image: "images/peixe.jpg"
  },
  {
    category: "Principais",
    name: "Panado",
    english: "Fish fingers",
    price: 550,
    image: "images/peixe.jpg"
  },
  {
    category: "Principais",
    name: "Camarão",
    english: "Prawns",
    price: 895,
    image: "images/camarao.jpg"
  },
  {
    category: "Principais",
    name: "Bife",
    english: "Beef steak",
    price: 850,
    image: "images/menu.jpg"
  },


  /* ================= MARISCOS ================= */

  {
    category: "Mariscos",
    name: "4 (fish, prawns, calamari)",
    english: "Fish, prawns & calamari",
    price: 1525,
    image: "images/seafood.jpg"
  },
  {
    category: "Mariscos",
    name: "Marisco",
    english: "Seafood for 2 pax",
    price: 2500,
    image: "images/seafood.jpg"
  },
  {
    category: "Mariscos",
    name: "Lobstar & 6 prawns",
    english: "Lobster & 6 prawns",
    price: 1975,
    image: "images/seafood.jpg"
  },
  {
    category: "Mariscos",
    name: "Marisco",
    english: "Seafood for 3 pax",
    price: 3500,
    image: "images/seafood.jpg"
  },
  {
    category: "Mariscos",
    name: "12 camarões",
    english: "12 prawns with chips",
    price: 1275,
    image: "images/camarao.jpg"
  },


  /* ================= REFRESCOS ================= */

  {
    category: "Refrescos",
    name: "330 ml",
    english: "330 ml soft drink",
    price: 70,
    image: "images/menu.jpg"
  },
  {
    category: "Refrescos",
    name: "Soda & Tônica",
    english: "Soda & tonic",
    price: 75,
    image: "images/menu.jpg"
  },
  {
    category: "Refrescos",
    name: "Appletiser",
    english: "Appletiser",
    price: 100,
    image: "images/menu.jpg"
  },


  /* ================= SUMOS / ÁGUAS ================= */

  {
    category: "Sumos / Águas",
    name: "Sumo Cappy",
    english: "Cappy juice",
    price: 125,
    image: "images/menu.jpg"
  },
  {
    category: "Sumos / Águas",
    name: "Sumo 500 ml",
    english: "Juice 500 ml",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Sumos / Águas",
    name: "Sumo 1 L",
    english: "Juice 1 L",
    price: 165,
    image: "images/menu.jpg"
  },
  {
    category: "Sumos / Águas",
    name: "Água 500 ml",
    english: "Water 500 ml",
    price: 50,
    image: "images/menu.jpg"
  },
  {
    category: "Sumos / Águas",
    name: "Água 1,5 L",
    english: "Water 1.5 L",
    price: 95,
    image: "images/menu.jpg"
  },
  {
    category: "Sumos / Águas",
    name: "Água gaseificada",
    english: "Sparkling water",
    price: 100,
    image: "images/menu.jpg"
  },


  /* ================= CERVEJAS ================= */

  {
    category: "Cervejas",
    name: "JC lata 250 ml",
    english: "JC can 250 ml",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Ciders / Cidras",
    english: "Ciders",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Heineken",
    english: "Heineken",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Breezer / Brutal",
    english: "Breezer / Brutal",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Corona",
    english: "Corona",
    price: 120,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Txilar / Preta",
    english: "Txilar / Dark beer",
    price: 85,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Manica / Impala 330 ml",
    english: "Manica / Impala 330 ml",
    price: 80,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Fly-fishing / Spin",
    english: "Fly-fishing / Spin",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Castle Lite",
    english: "Castle Lite",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Castle D. Malte",
    english: "Castle Dark Malt",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Bermin",
    english: "Bermin",
    price: 125,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Red Bull",
    english: "Red Bull",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Cervejas",
    name: "Monster",
    english: "Monster",
    price: 100,
    image: "images/menu.jpg"
  },


  /* ================= COCKTAIL ================= */

  {
    category: "Cocktail",
    name: "Vodka / Sumo",
    english: "Vodka / Juice",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Cocktail",
    name: "R & R",
    english: "R & R",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Cocktail",
    name: "Passion fruit / Sprite",
    english: "Passion fruit / Sprite",
    price: 125,
    image: "images/menu.jpg"
  },
  {
    category: "Cocktail",
    name: "Milk Pedro",
    english: "Milk Pedro",
    price: 325,
    image: "images/menu.jpg"
  },
  {
    category: "Cocktail",
    name: "Caipirinha",
    english: "Caipirinha",
    price: 350,
    image: "images/menu.jpg"
  },


  /* ================= APERITIVOS ================= */

  {
    category: "Aperitivos",
    name: "May Fair",
    english: "May Fair",
    price: 125,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Gin Gordon / Belgravia",
    english: "Gordon's / Belgravia Gin",
    price: 80,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Gin Tanquery",
    english: "Tanqueray Gin",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Whisky Novo",
    english: "Young Whisky",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Whisky Velho",
    english: "Aged Whisky",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Captain Morgan / Bacardi",
    english: "Captain Morgan / Bacardi",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Klipdrift",
    english: "Klipdrift",
    price: 80,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Amarula DBL",
    english: "Amarula Double",
    price: 190,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Vodka Absolut",
    english: "Absolut Vodka",
    price: 100,
    image: "images/menu.jpg"
  },
  {
    category: "Aperitivos",
    name: "Vodka Smirnoff",
    english: "Smirnoff Vodka",
    price: 80,
    image: "images/menu.jpg"
  },


  /* ================= DIGESTIVOS ================= */

  {
    category: "Digestivos",
    name: "1920 / S. Domingos",
    english: "1920 / S. Domingos",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Digestivos",
    name: "Vinho do Porto",
    english: "Port wine",
    price: 150,
    image: "images/menu.jpg"
  },


  /* ================= SHOOTS ================= */

  {
    category: "Shoots",
    name: "Sambuca",
    english: "Sambuca",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Shoots",
    name: "Tequila",
    english: "Tequila",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Shoots",
    name: "Vinho do Porto",
    english: "Port wine",
    price: 300,
    image: "images/menu.jpg"
  },


  /* ================= VINHOS ================= */

  {
    category: "Vinhos",
    name: "Vinho a copo",
    english: "Wine by the glass",
    price: 150,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "Boschendal / Kadete",
    english: "Boschendal / Kadete",
    price: 1350,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "F. Bostsrd / Roodenberg",
    english: "F. Bostsrd / Roodenberg",
    price: 1250,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "G. Carlou / C. Sauvignon",
    english: "G. Carlou / Cabernet Sauvignon",
    price: 1350,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "Cabriz, Gatão, Graça",
    english: "Cabriz, Gatão, Graça",
    price: 850,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "G. Garcia, Aveleda",
    english: "G. Garcia, Aveleda",
    price: 850,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "Portada",
    english: "Portada",
    price: 850,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "Chocolate Bloc",
    english: "Chocolate Bloc",
    price: 1750,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "JC - Keuroux grf.",
    english: "JC - Keuroux bottle",
    price: 650,
    image: "images/menu.jpg"
  },
  {
    category: "Vinhos",
    name: "Krone, Tosti, Anabela",
    english: "Krone, Tosti, Anabela",
    price: 1100,
    image: "images/menu.jpg"
  }

];


/* =========================================================
   ELEMENTOS DO SITE
========================================================= */

const menuGrid = document.getElementById("menuGrid");
const menuSearch = document.getElementById("menuSearch");
const filters = document.getElementById("filters");

const productModal =
  document.getElementById("productModal");

const modalClose =
  document.getElementById("modalClose");

const modalProductImage =
  document.getElementById("modalProductImage");

const modalProductCategory =
  document.getElementById("modalProductCategory");

const modalProductName =
  document.getElementById("modalProductName");

const modalProductPrice =
  document.getElementById("modalProductPrice");

const modalProductDescription =
  document.getElementById("modalProductDescription");

const modalAddButton =
  document.getElementById("modalAddButton");

const overlay =
  document.getElementById("overlay");

const cartDrawer =
  document.getElementById("cartDrawer");

const openCart =
  document.getElementById("openCart");

const closeCart =
  document.getElementById("closeCart");

const cartItems =
  document.getElementById("cartItems");

const cartCount =
  document.getElementById("cartCount");

const cartTotal =
  document.getElementById("cartTotal");

const customerName =
  document.getElementById("customerName");

const customerNote =
  document.getElementById("customerNote");

const sendWhatsApp =
  document.getElementById("sendWhatsApp");

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");

const backToTop =
  document.getElementById("backToTop");


/* =========================================================
   IMAGENS
========================================================= */

function getImage(item) {
  return item.image || "images/menu.jpg";
}


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveCart() {
  try {
    localStorage.setItem(
      "calorTropicalCart",
      JSON.stringify(cart)
    );
  } catch (error) {
    console.warn(
      "Não foi possível guardar o pedido."
    );
  }
}

function loadCart() {
  try {
    const saved =
      localStorage.getItem("calorTropicalCart");

    if (saved) {
      cart = JSON.parse(saved);
    }

    if (!Array.isArray(cart)) {
      cart = [];
    }

  } catch (error) {
    cart = [];
  }
}


/* =========================================================
   RENDERIZAR MENU
========================================================= */

function renderMenu() {

  if (!menuGrid) return;

  const searchTerm =
    menuSearch
      ? menuSearch.value.trim().toLowerCase()
      : "";

  const filtered =
    menuData.filter(item => {

      const matchesCategory =
        selectedCategory === "Todos" ||
        item.category === selectedCategory;

      const text =
        `${item.name} ${item.english}`
          .toLowerCase();

      const matchesSearch =
        text.includes(searchTerm);

      return matchesCategory &&
             matchesSearch;
    });


  if (!filtered.length) {

    menuGrid.innerHTML = `
      <div class="empty-cart"
           style="grid-column:1/-1">

        <span>🔎</span>

        <p>
          Nenhum item encontrado.
          <br>
          No item found.
        </p>

      </div>
    `;

    return;
  }


  menuGrid.innerHTML =
    filtered.map(item => {

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
              alt="${item.name} — ${item.english}"
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

            <p class="menu-english">
              ${item.english}
            </p>


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

/* =========================================================
   FILTRO DO MENU
========================================================= */

if (filters) {
  filters.addEventListener("click", event => {

    const button = event.target.closest(".filter");
    if (!button) return;

    selectedCategory =
      button.dataset.category;

    document
      .querySelectorAll(".filter")
      .forEach(btn =>
        btn.classList.remove("active")
      );

    button.classList.add("active");

    renderMenu();
  });
}


/* =========================================================
   PESQUISA DO MENU
========================================================= */

if (menuSearch) {
  menuSearch.addEventListener(
    "input",
    renderMenu
  );
}


/* =========================================================
   ABRIR PRODUTO
========================================================= */

function openProduct(item) {

  if (!item || !productModal) return;

  if (modalProductImage) {
    modalProductImage.src = getImage(item);
    modalProductImage.alt =
      `${item.name} — ${item.english}`;
  }

  if (modalProductCategory) {
    modalProductCategory.textContent =
      item.category;
  }

  if (modalProductName) {
    modalProductName.innerHTML =
      `${item.name}
       <small>${item.english}</small>`;
  }

  if (modalProductPrice) {
    modalProductPrice.textContent =
      money(item.price);
  }

  let pt =
    "Uma opção disponível no menu do Calor Tropical.";

  let en =
    "An option available on the Calor Tropical menu.";

  if (item.category === "Principais") {
    pt =
      "Prato principal servido com arroz, batatas fritas e salada.";

    en =
      "Main course served with rice, chips and salad.";
  }

  if (
    item.category === "Combo's" ||
    item.category === "Mariscos"
  ) {
    pt =
      "Servido com 1 ou 2 shamussas, conforme indicado no menu.";

    en =
      "Served with 1 or 2 samosas, as indicated on the menu.";
  }

  if (modalProductDescription) {
    modalProductDescription.innerHTML =
      `${pt}<br><span>${en}</span>`;
  }

  if (modalAddButton) {
    modalAddButton.onclick = () => {
      addToCart(item);
      closeProduct();
    };
  }

  productModal.classList.add("active");
  overlay?.classList.add("active");

  document.body.classList.add("no-scroll");
}


/* =========================================================
   FECHAR PRODUTO
========================================================= */

function closeProduct() {

  productModal?.classList.remove("active");

  if (
    !cartDrawer ||
    !cartDrawer.classList.contains("active")
  ) {
    overlay?.classList.remove("active");

    document.body.classList.remove(
      "no-scroll"
    );
  }
}


/* =========================================================
   CLIQUE NOS ITENS DO MENU
========================================================= */

if (menuGrid) {

  menuGrid.addEventListener(
    "click",
    event => {

      const card =
        event.target.closest(".menu-card");

      if (!card) return;

      const item =
        menuData[
          Number(card.dataset.index)
        ];

      if (item) {
        openProduct(item);
      }
    }
  );

}


/* =========================================================
   FECHAR MODAL
========================================================= */

if (modalClose) {
  modalClose.addEventListener(
    "click",
    closeProduct
  );
}


/* =========================================================
   CARRINHO
========================================================= */

function addToCart(item) {

  if (!item) return;

  const existing =
    cart.find(
      product =>
        product.name === item.name
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
  openCartDrawer();
}


function removeFromCart(name) {

  cart = cart.filter(
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


/* =========================================================
   RENDERIZAR CARRINHO
========================================================= */

function renderCart() {

  if (!cartItems) return;

  if (!cart.length) {

    cartItems.innerHTML = `
      <div class="empty-cart">
        <span>🛒</span>
        <p>
          Seu pedido está vazio.<br>
          Your order is empty.
        </p>
      </div>
    `;

  } else {

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

            <small>
              ${item.english}
            </small>

            <div class="cart-item-price">
              ${money(item.price)}
            </div>

            <div class="quantity">

              <button
                type="button"
                data-action="minus"
                data-name="${item.name}"
              >
                −
              </button>

              <span>
                ${item.quantity}
              </span>

              <button
                type="button"
                data-action="plus"
                data-name="${item.name}"
              >
                +
              </button>

            </div>

          </div>

          <button
            type="button"
            class="remove-cart-item"
            data-action="remove"
            data-name="${item.name}"
          >
            ×
          </button>

        </div>

      `).join("");
  }

  if (cartCount) {
    cartCount.textContent =
      getCartCount();
  }

  if (cartTotal) {
    cartTotal.textContent =
      money(getCartTotal());
  }

  cartItems
    .querySelectorAll("[data-action]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const action =
            button.dataset.action;

          const name =
            button.dataset.name;

          if (action === "plus") {
            changeQuantity(name, 1);
          }

          if (action === "minus") {
            changeQuantity(name, -1);
          }

          if (action === "remove") {
            removeFromCart(name);
          }

        }
      );

    });
}
/* =========================================================
   CARRINHO — ABRIR / FECHAR
========================================================= */

function openCartDrawer() {
  if (!cartDrawer) return;

  cartDrawer.classList.add("active");
  overlay?.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeCartDrawer() {
  if (!cartDrawer) return;

  cartDrawer.classList.remove("active");
  document.body.classList.remove("modal-open");

  if (!productModal?.classList.contains("active")) {
    overlay?.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
}

if (openCart) {
  openCart.addEventListener("click", openCartDrawer);
}

if (closeCart) {
  closeCart.addEventListener("click", closeCartDrawer);
}


/* =========================================================
   QUICK ORDER
========================================================= */

document.addEventListener("click", event => {

  const button = event.target.closest(".quick-order");

  if (!button) return;

  const name = button.dataset.name;

  const item = menuData.find(
    product => product.name === name
  );

  if (!item) return;

  addToCart(item);
});


/* =========================================================
   OVERLAY
========================================================= */

if (overlay) {

  overlay.addEventListener("click", () => {
    closeProduct();
    closeCartDrawer();
  });

}


/* =========================================================
   WHATSAPP — ENVIAR PEDIDO
========================================================= */

if (sendWhatsApp) {

  sendWhatsApp.addEventListener("click", () => {

    if (!cart.length) {
      alert("Adicione pelo menos um produto ao pedido.");
      return;
    }

    const name =
      customerName?.value.trim() || "Cliente";

    const note =
      customerNote?.value.trim();

    let message =
      "Olá, Calor Tropical! 👋\n\n";

    message += "*NOVO PEDIDO*\n\n";
    message += `Cliente: ${name}\n\n`;

    cart.forEach(item => {

      const subtotal =
        item.price * item.quantity;

      message +=
        `• ${item.name} / ${item.english} x${item.quantity} — ${money(subtotal)}\n`;
    });

    message +=
      `\n*Total: ${money(getCartTotal())}*`;

    if (note) {
      message += `\n\nObservação: ${note}`;
    }

    const url =
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });

}


/* =========================================================
   MENU MOBILE
========================================================= */

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");
    menuToggle.classList.toggle("active");

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");
      menuToggle.classList.remove("active");

    });

  });

}


/* =========================================================
   ANIMAÇÕES
========================================================= */

function initReveal() {

  const elements =
    document.querySelectorAll(".reveal");

  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;
  }

  const observer =
    new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }

      });

    }, {
      threshold: 0.12
    });

  elements.forEach(element => {
    observer.observe(element);
  });

}


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

loadCart();
renderMenu();
renderCart();
initReveal();
/* =========================================================
   LINKS INTERNOS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* =========================================================
   FALLBACK DAS IMAGENS
========================================================= */

if (modalProductImage) {

  modalProductImage.addEventListener("error", () => {

    modalProductImage.src = "images/menu.jpg";

  });

}


/* =========================================================
   INICIALIZAÇÃO FINAL
========================================================= */

loadCart();
renderMenu();
renderCart();
initReveal();
/* =========================================================
   FIM DO SCRIPT
========================================================= */

console.log("Calor Tropical — site carregado com sucesso! 🌴");
