document.addEventListener('DOMContentLoaded', function() {

  // --- BASE DE DADOS DO MENU (CALOR TROPICAL) ---
var menuData = [

  // CAFÉ / CHÁ
  {
    name: "Café eleite/ Coffee with Milk",
    category: "Café / Chá",
    price: 150,
    description: "Café com leite."
  },
  {
    name: "Chá e leite/ Tea with milk",
    category: "Café / Chá",
    price: 125,
    description: "Chá com leite."
  },
  {
    name: "Capuchinho/cappuccino",
    category: "Café / Chá",
    price: 150,
    description: "Capuchinho."
  },
  {
    name: "Expresso/Express",
    category: "Café / Chá",
    price: 150,
    description: "Café expresso."
  },
  {
    name: "Chocotale quente/ hot choc.",
    category: "Café / Chá",
    price: 175,
    description: "Chocolate quente."
  },

  // SALADAS
  {
    name: "Salada grega/Greak salad",
    category: "Saladas",
    price: 250,
    description: "Salada grega."
  },
  {
    name: "Salada de Atum/Tuna salad",
    category: "Saladas",
    price: 250,
    description: "Salada de atum."
  },
  {
    name: "Salada Russa/ Russian salad",
    category: "Saladas",
    price: 250,
    description: "Salada russa."
  },
  {
    name: "Salada tropical/ Tropical salad",
    category: "Saladas",
    price: 200,
    description: "Salada tropical."
  },

  // ENTRADAS
  {
    name: "Shamussas de peixe (uni)",
    category: "Entradas",
    price: 220,
    description: "Shamussa de peixe. Preço por unidade."
  },
  {
    name: "Caranguejo ao Natural/ Crab",
    category: "Entradas",
    price: 500,
    description: "Caranguejo ao natural."
  },
  {
    name: "Pão de alho/Garlic bread",
    category: "Entradas",
    price: 150,
    description: "Pão de alho."
  },
  {
    name: "Rissóis de camarão (4 uni)",
    category: "Entradas",
    price: 220,
    description: "4 unidades de rissóis de camarão."
  },
  {
    name: "Camarão alhinho",
    category: "Entradas",
    price: 550,
    description: "Camarão preparado com alho."
  },
  {
    name: "Caril de camarão",
    category: "Entradas",
    price: 880,
    description: "Caril de camarão."
  },
  {
    name: "Caril de caranguejo",
    category: "Entradas",
    price: 650,
    description: "Caril de caranguejo."
  },
   // SNACKS & SANDWICH
  {
    name: "Tosta de queijo/ cheese tost",
    category: "Snacks & Sandwich",
    price: 250,
    description: "Tosta de queijo."
  },
  {
    name: "Tosta mista/HAM & CHEESE TOST",
    category: "Snacks & Sandwich",
    price: 300,
    description: "Tosta mista de fiambre e queijo."
  },
  {
    name: "Prego no pão/ steark N Roll",
    category: "Snacks & Sandwich",
    price: 285,
    description: "Prego no pão."
  },
  {
    name: "Cheese N Becon sandwich",
    category: "Snacks & Sandwich",
    price: 300,
    description: "Sanduíche de queijo e bacon."
  },
  {
    name: "Chicken Mayo/hamburger",
    category: "Snacks & Sandwich",
    price: 300,
    description: "Chicken Mayo / hambúrguer."
  },

  // OMELETES
  {
    name: "Omelete simples",
    category: "Omeletes",
    price: 200,
    description: "Omelete simples."
  },
  {
    name: "Omelete de queijo",
    category: "Omeletes",
    price: 200,
    description: "Omelete de queijo."
  },
  {
    name: "Omelete misto",
    category: "Omeletes",
    price: 250,
    description: "Omelete misto."
  },
  {
    name: "Pequeno almoço/ breakfast",
    category: "Omeletes",
    price: 425,
    description: "Pequeno almoço."
  },

  // COMBO'S
  {
    name: "Chicken & calamari",
    category: "Combo's",
    price: 875,
    description: "Chicken & calamari."
  },
  {
    name: "Chicken & prawns",
    category: "Combo's",
    price: 875,
    description: "Chicken & prawns."
  },
  {
    name: "Prawns & calamari",
    category: "Combo's",
    price: 875,
    description: "Prawns & calamari."
  },
  {
    name: "Prawns & fish fillet",
    category: "Combo's",
    price: 875,
    description: "Prawns & fish fillet."
  },
  {
    name: "Calamari & fish fillet",
    category: "Combo's",
    price: 875,
    description: "Calamari & fish fillet."
  },
  {
    name: "Chicken & fish fillet",
    category: "Combo's",
    price: 875,
    description: "Chicken & fish fillet."
  },
  {
    name: "1/2 frango & prawns",
    category: "Combo's",
    price: 1325,
    description: "1/2 frango & prawns."
  },

  // PRINCIPAIS PRATOS
  {
    name: "1/4 frango/chiken",
    category: "Principais",
    price: 305,
    description: "1/4 de frango."
  },
  {
    name: "1/2 frango/chiken",
    category: "Principais",
    price: 450,
    description: "1/2 frango."
  },
  {
    name: "Frango inteiro/chicken",
    category: "Principais",
    price: 850,
    description: "Frango inteiro."
  },
  {
    name: "Peixe inteiro/ whole fish",
    category: "Principais",
    price: 850,
    description: "Peixe inteiro."
  },
  {
    name: "Filete de peixe",
    category: "Principais",
    price: 600,
    description: "Filete de peixe."
  },
  {
    name: "Lula grelhada",
    category: "Principais",
    price: 550,
    description: "Lula grelhada."
  },
  {
    name: "Posta de peixe",
    category: "Principais",
    price: 500,
    description: "Posta de peixe."
  },
  {
    name: "Panado/ fish fingers",
    category: "Principais",
    price: 550,
    description: "Panado / fish fingers."
  },
  {
    name: "Camarão",
    category: "Principais",
    price: 895,
    description: "Camarão."
  },
  {
    name: "Bife / Beef",
    category: "Principais",
    price: 850,
    description: "Bife."
  },
    // MARISCOS / SEAFOOD
  {
    name: "4(fish. Prawns, calamari)",
    category: "Mariscos",
    price: 1525,
    description: "Fish, prawns e calamari."
  },
  {
    name: "Marisco / seafood p2 pax",
    category: "Mariscos",
    price: 2500,
    description: "Marisco para 2 pessoas."
  },
  {
    name: "Lobstar & 6 prawns",
    category: "Mariscos",
    price: 1975,
    description: "Lobstar com 6 camarões."
  },
  {
    name: "Marisco/Seafood for 3 pax",
    category: "Mariscos",
    price: 3500,
    description: "Marisco para 3 pessoas."
  },
  {
    name: "12 camarões/prawns with chips",
    category: "Mariscos",
    price: 1275,
    description: "12 camarões com chips."
  },

  // REFRESCOS / COLD DRINKS
  {
    name: "330 ml.",
    category: "Refrescos",
    price: 70,
    description: "Refresco de 330 ml."
  },
  {
    name: "Soda& Tônica",
    category: "Refrescos",
    price: 75,
    description: "Soda e tónica."
  },
  {
    name: "Appllestiser",
    category: "Refrescos",
    price: 100,
    description: "Applestiser."
  },

  // SUMOS / ÁGUAS
  {
    name: "Sumo cappy",
    category: "Sumos / Águas",
    price: 125,
    description: "Sumo Cappy."
  },
  {
    name: "Sumo 500 ml",
    category: "Sumos / Águas",
    price: 100,
    description: "Sumo de 500 ml."
  },
  {
    name: "Sumo 1l",
    category: "Sumos / Águas",
    price: 165,
    description: "Sumo de 1 litro."
  },
  {
    name: "Água 500ml",
    category: "Sumos / Águas",
    price: 50,
    description: "Água de 500 ml."
  },
  {
    name: "Água 1,5l",
    category: "Sumos / Águas",
    price: 95,
    description: "Água de 1,5 litros."
  },
  {
    name: "Água gaseificada",
    category: "Sumos / Águas",
    price: 100,
    description: "Água gaseificada."
  },

  // CERVEJAS / BEERS / CIDERS
  {
    name: "JC lata 250ml",
    category: "Cervejas",
    price: 150,
    description: "JC lata 250 ml."
  },
  {
    name: "Ciders/cidras",
    category: "Cervejas",
    price: 100,
    description: "Ciders / cidras."
  },
  {
    name: "Heineken",
    category: "Cervejas",
    price: 100,
    description: "Heineken."
  },
  {
    name: "Breezer/Brutal",
    category: "Cervejas",
    price: 100,
    description: "Breezer / Brutal."
  },
  {
    name: "corona",
    category: "Cervejas",
    price: 120,
    description: "Corona."
  },
  {
    name: "Txilar/preta",
    category: "Cervejas",
    price: 85,
    description: "Txilar / preta."
  },
  {
    name: "Manica/impala 330ml",
    category: "Cervejas",
    price: 80,
    description: "Manica / Impala 330 ml."
  },
  {
    name: "Fly-fishing/spin",
    category: "Cervejas",
    price: 100,
    description: "Fly-fishing / Spin."
  },
  {
    name: "Castle lite",
    category: "Cervejas",
    price: 100,
    description: "Castle Lite."
  },
  {
    name: "Castle D. Malte",
    category: "Cervejas",
    price: 100,
    description: "Castle D. Malte."
  },
  {
    name: "Bermin",
    category: "Cervejas",
    price: 125,
    description: "Bermin."
  },
  {
    name: "Red bull",
    category: "Cervejas",
    price: 100,
    description: "Red Bull."
  },
  {
    name: "Monster",
    category: "Cervejas",
    price: 100,
    description: "Monster."
  },
    // COCKTAIL
  {
    name: "Vodka/sumo",
    category: "Cocktail",
    price: 150,
    description: "Vodka com sumo."
  },
  {
    name: "R & R",
    category: "Cocktail",
    price: 150,
    description: "R & R."
  },
  {
    name: "Passion fruit./ Sprite",
    category: "Cocktail",
    price: 125,
    description: "Passion fruit com Sprite."
  },
  {
    name: "Milk Pedro",
    category: "Cocktail",
    price: 325,
    description: "Milk Pedro."
  },
  {
    name: "Caipirinha",
    category: "Cocktail",
    price: 350,
    description: "Caipirinha."
  },

  // APERITIVOS
  {
    name: "May fair",
    category: "Aperitivos",
    price: 125,
    description: "May Fair."
  },
  {
    name: "Gin Gordon/Belgravia",
    category: "Aperitivos",
    price: 80,
    description: "Gin Gordon / Belgravia."
  },
  {
    name: "Gin Tanquery",
    category: "Aperitivos",
    price: 100,
    description: "Gin Tanquery."
  },
  {
    name: "Whisky Novo",
    category: "Aperitivos",
    price: 100,
    description: "Whisky novo."
  },
  {
    name: "Whisky velho",
    category: "Aperitivos",
    price: 150,
    description: "Whisky velho."
  },
  {
    name: "Captain Morgan/Bacordi",
    category: "Aperitivos",
    price: 100,
    description: "Captain Morgan / Bacordi."
  },
  {
    name: "Klipidrift",
    category: "Aperitivos",
    price: 80,
    description: "Klipidrift."
  },
  {
    name: "Amarula DBL",
    category: "Aperitivos",
    price: 190,
    description: "Amarula DBL."
  },
  {
    name: "Vodka Absolut",
    category: "Aperitivos",
    price: 100,
    description: "Vodka Absolut."
  },
  {
    name: "Vodka Smirnoff",
    category: "Aperitivos",
    price: 80,
    description: "Vodka Smirnoff."
  },

  // DIGESTIVOS
  {
    name: "1920/s.Domingos",
    category: "Digestivos",
    price: 150,
    description: "1920 / S. Domingos."
  },
  {
    name: "Vinho do porto",
    category: "Digestivos",
    price: 150,
    description: "Vinho do Porto."
  },

  // SHOOTS
  {
    name: "Sambuca",
    category: "Shoots",
    price: 150,
    description: "Sambuca."
  },
  {
    name: "Tequila",
    category: "Shoots",
    price: 150,
    description: "Tequila."
  },
  {
    name: "Vinho do porto",
    category: "Shoots",
    price: 300,
    description: "Vinho do Porto."
  },

  // VINHOS / WINES
  {
    name: "Vinho a copo",
    category: "Vinhos",
    price: 150,
    description: "Vinho servido a copo."
  },
  {
    name: "Boschendal/Kadete",
    category: "Vinhos",
    price: 1350,
    description: "Vinho Boschendal / Kadete."
  },
  {
    name: "F.Bostsrd/Roodenberg",
    category: "Vinhos",
    price: 1250,
    description: "Vinho F.Bostsrd / Roodenberg."
  },
  {
    name: "G.Carlou/C.sauvignon",
    category: "Vinhos",
    price: 1350,
    description: "G.Carlou / C.sauvignon."
  },
  {
    name: "Cabriz,gatão,Graca",
    category: "Vinhos",
    price: 850,
    description: "Cabriz, Gatão, Graça."
  },
  {
    name: "G.Garcia, Aveleda",
    category: "Vinhos",
    price: 850,
    description: "G.Garcia / Aveleda."
  },
  {
    name: "Portada",
    category: "Vinhos",
    price: 850,
    description: "Portada."
  },
  {
    name: "Chocotale Bloc",
    category: "Vinhos",
    price: 1750,
    description: "Chocotale Bloc."
  },
  {
    name: "JC -Keuroux grf.",
    category: "Vinhos",
    price: 650,
    description: "JC - Keuroux."
  },
  {
    name: "Krone, Tosti , Anabela",
    category: "Vinhos",
    price: 1100,
    description: "Krone, Tosti, Anabela."
  }

];

  var cart = [];

  var menuGrid = document.getElementById('menuGrid');
  var filtersContainer = document.getElementById('filters');
  var searchInput = document.getElementById('menuSearch');
  
  var productModal = document.getElementById('productModal');
  var modalClose = document.getElementById('modalClose');
  var modalProductName = document.getElementById('modalProductName');
  var modalProductCategory = document.getElementById('modalProductCategory');
  var modalProductPrice = document.getElementById('modalProductPrice');
  var modalProductDescription = document.getElementById('modalProductDescription');
  var modalProductEmoji = document.getElementById('modalProductEmoji');
  var modalAddButton = document.getElementById('modalAddButton');

  var cartDrawer = document.getElementById('cartDrawer');
  var openCartBtn = document.getElementById('openCart');
  var closeCartBtn = document.getElementById('closeCart');
  var overlay = document.getElementById('overlay');
  var cartItemsContainer = document.getElementById('cartItems');
  var cartCount = document.getElementById('cartCount');
  var cartTotal = document.getElementById('cartTotal');
  var sendWhatsAppBtn = document.getElementById('sendWhatsAppButton');
  var customerNameInput = document.getElementById('customerName');
  var customerNoteInput = document.getElementById('customerNote');

  var currentSelectedItem = null;
       function renderMenu(items) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';
    if (items.length === 0) {
      menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 20px;">Nenhum item encontrado nesta categoria.</p>';
      return;
    }

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var card = document.createElement('article');
      card.className = 'menu-card reveal active';
      card.innerHTML = 
        '<div class="menu-emoji-box" style="font-size: 55px; text-align: center; padding: 25px 0; background: rgba(255,255,255,0.03); border-radius: 8px 8px 0 0;">' + item.emoji + '</div>' +
        '<div class="menu-card-content">' +
          '<span class="badge">' + item.category + '</span>' +
          '<h3>' + item.name + '</h3>' +
          '<p>' + item.description + '</p>' +
          '<div class="menu-card-footer">' +
            '<strong>' + item.price.toFixed(2) + ' MTS</strong>' +
            '<button class="btn btn-primary btn-sm add-to-cart-direct" type="button">Ver / Pedir</button>' +
          '</div>' +
        '</div>';
      
      (function(currentItem) {
        card.onclick = function(e) {
          if (e.target.className.indexOf('add-to-cart-direct') === -1) {
            openModal(currentItem);
          }
        };

        var btnDirect = card.querySelector('.add-to-cart-direct');
        if (btnDirect) {
          btnDirect.onclick = function(e) {
            e.stopPropagation();
            openModal(currentItem);
          };
        }
      })(item);

      menuGrid.appendChild(card);
    }
  }

  function openModal(item) {
    currentSelectedItem = item;
    if (modalProductName) modalProductName.textContent = item.name;
    if (modalProductCategory) modalProductCategory.textContent = item.category;
    if (modalProductPrice) modalProductPrice.textContent = item.price.toFixed(2) + ' MTS';
    if (modalProductDescription) modalProductDescription.textContent = item.description;
    if (modalProductEmoji) modalProductEmoji.textContent = item.emoji;
    
    if (productModal) productModal.className += ' active';
    if (overlay) overlay.className += ' active';
  }

  function closeModal() {
    if (productModal) productModal.className = productModal.className.replace(/\bactive\b/g, '');
    if (overlay) overlay.className = overlay.className.replace(/\bactive\b/g, '');
  }

  if (modalClose) modalClose.onclick = closeModal;
  if (overlay) {
    overlay.onclick = function() {
      closeModal();
      closeCart();
    };
  }

  if (modalAddButton) {
    modalAddButton.onclick = function() {
      if (currentSelectedItem) {
        addToCart(currentSelectedItem);
        closeModal();
        openCart();
      }
    };
  }

  // --- CARRINHO ---
  function addToCart(item) {
    var existing = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        existing = cart[i];
        break;
      }
    }
    if (existing) {
      existing.quantity += 1;
    } else {
      var newItem = {
        name: item.name,
        category: item.category,
        price: item.price,
        description: item.description,
        emoji: item.emoji,
        quantity: 1
      };
      cart.push(newItem);
    }
    updateCartUI();
  }

  function updateCartUI() {
    if (!cartCount || !cartItemsContainer || !cartTotal) return;
    
    var totalItemsCount = 0;
    for (var i = 0; i < cart.length; i++) {
      totalItemsCount += cart[i].quantity;
    }
    cartCount.textContent = totalItemsCount;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = 
        '<div class="empty-cart" style="text-align: center; padding: 30px;">' +
          '<span style="font-size: 40px;">🛒</span>' +
          '<p style="color: #bbb; margin: 10px 0;">O seu pedido está vazio.</p>' +
          '<a href="#menu" id="emptyCartLink" class="text-link" style="color: #ff5c5c; text-decoration: underline;">Escolher pratos</a>' +
        '</div>';
      
      var emptyLink = document.getElementById('emptyCartLink');
      if (emptyLink) {
        emptyLink.onclick = function(e) {
          e.preventDefault();
          closeCart();
          var menuSec = document.getElementById('menu');
          if (menuSec) menuSec.scrollIntoView(true);
        };
      }
      cartTotal.textContent = "0.00 MTS";
      return;
    }

    cartItemsContainer.innerHTML = '';
    var totalPrice = 0;

    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      totalPrice += item.price * item.quantity;

      var cartItemEl = document.createElement('div');
      cartItemEl.className = 'cart-item';
      cartItemEl.style.cssText = "padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 6px;";
      
      cartItemEl.innerHTML = 
        '<div style="display: flex; justify-content: space-between; align-items: flex-start;">' +
          '<div>' +
            '<strong style="font-size: 15px; color: #fff;">' + (item.emoji || '🍽️') + ' ' + item.name + '</strong>' +
            '<div style="font-size: 13px; color: #ff5c5c; margin-top: 2px;">' + item.price.toFixed(2) + ' MTS x ' + item.quantity + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">' +
          '<button type="button" class="btn-qty decrease" data-index="' + i + '" style="background: #444; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">-</button>' +
          '<span style="color: #fff; font-weight: bold; min-width: 20px; text-align: center;">' + item.quantity + '</span>' +
          '<button type="button" class="btn-qty increase" data-index="' + i + '" style="background: #444; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>' +
          '<button type="button" class="btn-remove" data-index="' + i + '" style="background: #d9534f; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; margin-left: auto;" title="Remover item">×</button>' +
        '</div>';
      
      cartItemsContainer.appendChild(cartItemEl);
    }

    cartTotal.textContent = totalPrice.toFixed(2) + ' MTS';

    var incBtns = cartItemsContainer.querySelectorAll('.increase');
    for (var i = 0; i < incBtns.length; i++) {
      incBtns[i].onclick = function() {
        var idx = parseInt(this.getAttribute('data-index'));
        cart[idx].quantity += 1;
        updateCartUI();
      };
    }

    var decBtns = cartItemsContainer.querySelectorAll('.decrease');
    for (var i = 0; i < decBtns.length; i++) {
      decBtns[i].onclick = function() {
        var idx = parseInt(this.getAttribute('data-index'));
        if (cart[idx].quantity > 1) {
          cart[idx].quantity -= 1;
        } else {
          cart.splice(idx, 1);
        }
        updateCartUI();
      };
    }

    var remBtns = cartItemsContainer.querySelectorAll('.btn-remove');
    for (var i = 0; i < remBtns.length; i++) {
      remBtns[i].onclick = function() {
        var idx = parseInt(this.getAttribute('data-index'));
        cart.splice(idx, 1);
        updateCartUI();
      };
    }
  }

  function openCart() {
    if (cartDrawer) cartDrawer.className += ' active';
    if (overlay) overlay.className += ' active';
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.className = cartDrawer.className.replace(/\bactive\b/g, '');
    if (overlay) overlay.className = overlay.className.replace(/\bactive\b/g, '');
  }

  if (openCartBtn) openCartBtn.onclick = openCart;
  if (closeCartBtn) closeCartBtn.onclick = closeCart;

  // --- FILTROS E PESQUISA ---
  if (filtersContainer) {
    filtersContainer.onclick = function(e) {
      var target = e.target;
      while (target && target !== filtersContainer && target.className.indexOf('filter') === -1) {
        target = target.parentNode;
      }
      if (target && target.className && target.className.indexOf('filter') !== -1) {
        var allFilters = filtersContainer.querySelectorAll('.filter');
        for (var i = 0; i < allFilters.length; i++) {
          allFilters[i].className = allFilters[i].className.replace(/\bactive\b/g, '');
        }
        target.className += ' active';
        
        var category = target.getAttribute('data-category') || target.textContent.trim();

        if (category === 'Todos' || category === 'Todos os Pratos' || category.indexOf('Todos') !== -1) {
          renderMenu(menuData);
        } else {
          var filtered = [];
          for (var j = 0; j < menuData.length; j++) {
            var item = menuData[j];
            if (item.category.toLowerCase() === category.toLowerCase() ||
                item.category.toLowerCase().indexOf(category.toLowerCase()) !== -1 ||
                category.toLowerCase().indexOf(item.category.toLowerCase()) !== -1) {
              filtered.push(item);
            }
          }
          renderMenu(filtered);
        }
      }
    };
  }

  if (searchInput) {
    searchInput.oninput = function(e) {
      var term = e.target.value.toLowerCase();
      var filtered = [];
      for (var i = 0; i < menuData.length; i++) {
        var item = menuData[i];
        if (item.name.toLowerCase().indexOf(term) !== -1 || 
            item.description.toLowerCase().indexOf(term) !== -1 ||
            item.category.toLowerCase().indexOf(term) !== -1) {
          filtered.push(item);
        }
      }
      renderMenu(filtered);
    };
  }

  // --- BOTÕES "VER NO MENU" ---
  var allLinks = document.querySelectorAll('a, button');
  for (var i = 0; i < allLinks.length; i++) {
    var txt = allLinks[i].textContent.toLowerCase();
    if (txt.indexOf('ver no menu') !== -1 || txt.indexOf('explorar menu') !== -1) {
      allLinks[i].onclick = function(e) {
        var menuSec = document.getElementById('menu');
        if (menuSec) {
          e.preventDefault();
          menuSec.scrollIntoView(true);
        }
      };
    }
  }

  // --- ENVIAR PEDIDO VIA WHATSAPP ---
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.onclick = function() {
      if (cart.length === 0) {
        alert('O seu pedido está vazio!');
        return;
      }

      var customerName = customerNameInput ? customerNameInput.value.trim() : 'Cliente';
      var customerNote = customerNoteInput ? customerNoteInput.value.trim() : '';

      var message = 'Olá, Restaurante Calor Tropical! 🏝️\nGostaria de fazer o seguinte pedido:\n\n';
      var total = 0;

      for (var i = 0; i < cart.length; i++) {
        var subtotal = cart[i].price * cart[i].quantity;
        total += subtotal;
        message += '• ' + cart[i].quantity + 'x ' + cart[i].name + ' - ' + subtotal.toFixed(2) + ' MTS\n';
      }

      message += '\n*Total:* ' + total.toFixed(2) + ' MTS\n';
      message += '*Nome:* ' + customerName + '\n';
      if (customerNote) {
        message += '*Observação:* ' + customerNote + '\n';
      }

      var whatsappUrl = 'https://wa.me/258874220984?text=' + encodeURIComponent(message);
      window.open(whatsappUrl, '_blank');
    };
  }

  // --- LIGHTBOX PARA IMAGENS ---special-img');
  var galleryImages = document.querySelectorAll(
  '.featured-card img, .gallery-item img, .menu-img, .special-img'
);

galleryImages.forEach(function(img) {
  img.style.cursor = 'zoom-in';

  img.addEventListener('click', function() {
    var lightbox = document.createElement('div');

    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.92)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '99999';
    lightbox.style.padding = '20px';
    lightbox.style.boxSizing = 'border-box';

    var image = document.createElement('img');

    image.src = img.src;
    image.alt = img.alt;

    image.style.maxWidth = '95%';
    image.style.maxHeight = '90%';
    image.style.objectFit = 'contain';
    image.style.borderRadius = '10px';

    var close = document.createElement('button');

    close.innerHTML = '×';

    close.style.position = 'absolute';
    close.style.top = '15px';
    close.style.right = '20px';
    close.style.background = 'none';
    close.style.border = 'none';
    close.style.color = 'white';
    close.style.fontSize = '45px';
    close.style.cursor = 'pointer';

    lightbox.appendChild(image);
    lightbox.appendChild(close);
    document.body.appendChild(lightbox);

    close.addEventListener('click', function() {
      lightbox.remove();
    });

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.remove();
      }
    });
  });
});

  // Inicializar menu e carrinho
  renderMenu(menuData);
  updateCartUI();

  // --- MENU MOBILE ---
  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.onclick = function(e) {
      e.stopPropagation();
      if (nav.className.indexOf('active') !== -1) {
        nav.className = nav.className.replace(/\bactive\b/g, '');
      } else {
        nav.className += ' active';
      }
      if (overlay) {
        if (overlay.className.indexOf('active') !== -1) {
          overlay.className = overlay.className.replace(/\bactive\b/g, '');
        } else {
          overlay.className += ' active';
        }
      }
    };

    var navLinks = nav.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].onclick = function() {
        nav.className = nav.className.replace(/\bactive\b/g, '');
        if (overlay) overlay.className = overlay.className.replace(/\bactive\b/g, '');
      };
    }
  }

});
       
