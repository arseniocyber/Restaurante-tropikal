document.addEventListener('DOMContentLoaded', function() {

  // --- BASE DE DADOS DO MENU (CALOR TROPICAL) ---
const menuData = [

  // CAFÉ E CHÁ / COFFEE & TEA
  ["Café com leite", "Coffee with milk", 175, "Café / Chá"],
  ["Chá com leite", "Tea with milk", 150, "Café / Chá"],
  ["Capuchinho", "Cappuccino", 200, "Café / Chá"],
  ["Expresso", "Espresso", 175, "Café / Chá"],
  ["Chocolate quente", "Hot chocolate", 200, "Café / Chá"],

  // SNACKS E SANDES / SNACKS & SANDWICHES
  ["Tosta mista", "Ham and cheese toast", 300, "Snacks & Sandwich"],
  ["Sandes de ovo", "Egg sandwich", 85, "Snacks & Sandwich"],
  ["Tosta de queijo", "Cheese toast", 250, "Snacks & Sandwich"],
  ["Prego no pão", "Steak sandwich", 300, "Snacks & Sandwich"],
  ["Queijo com bacon", "Cheese and bacon sandwich", 300, "Snacks & Sandwich"],

  // OMELETES
  ["Omelete simples", "Plain omelette", 250, "Omeletes"],
  ["Omelete de queijo", "Cheese omelette", 275, "Omeletes"],
  ["Omelete mista", "Mixed omelette", 300, "Omeletes"],
  ["Pequeno-almoço", "Breakfast", 550, "Omeletes"],
  ["Frango com maionese", "Chicken mayo", 350, "Omeletes"],

  // SALADAS / SALADS
  ["Salada grega", "Greek salad", 350, "Saladas"],
  ["Salada de atum", "Tuna salad", 300, "Saladas"],
  ["Salada russa", "Russian salad", 500, "Saladas"],
  ["Salada tropical", "Tropical salad", 300, "Saladas"],

  // ENTRADAS / STARTERS
  ["Chamussas de peixe (4 unidades)", "Fish samosas (4 pieces)", 250, "Entradas"],
  ["Pão de alho", "Garlic bread", 150, "Entradas"],
  ["Rissóis (4 unidades)", "Rissoles (4 pieces)", 250, "Entradas"],
  ["Caranguejo ao natural (2 unidades)", "Natural crab (2 pieces)", 500, "Entradas"],
  ["Camarão alhinho (8 unidades)", "Garlic prawns (8 pieces)", 825, "Entradas"],

  // COMBOS
  ["Frango e lula", "Chicken & calamari", 1050, "Combo's"],
  ["Frango e camarão", "Chicken & prawns", 1050, "Combo's"],
  ["Camarão e lula", "Prawns & calamari", 1050, "Combo's"],
  ["Camarão e filete de peixe", "Prawns & fish fillet", 1050, "Combo's"],
  ["Lula e filete de peixe", "Calamari & fish fillet", 1050, "Combo's"],
  ["Frango e filete de peixe", "Chicken & fish fillet", 1050, "Combo's"],
  ["Meio frango e 5 camarões", "Half chicken & 5 prawns", 1575, "Combo's"],

  // MARISCOS / SEAFOOD
  ["4 peças: peixe, camarão e lula", "4 pieces: fish, prawns & calamari", 1855, "Mariscos"],
  ["Lagosta e 6 camarões", "Lobster & 6 prawns", 2575, "Mariscos"],
  ["Marisco para 2 pessoas", "Seafood for 2 people", 3050, "Mariscos"],
  ["Lagosta", "Lobster", 1375, "Mariscos"],
  ["Marisco para 3 pessoas", "Seafood for 3 people", 1500, "Mariscos"],
  ["12 camarões com batatas fritas", "12 prawns with chips", 1485, "Mariscos"],

  // PRATOS PRINCIPAIS / MAIN DISHES
  ["Quarto de frango", "Quarter chicken", 325, "Principais"],
  ["Meio frango", "Half chicken", 550, "Principais"],
  ["Frango inteiro", "Whole chicken", 1000, "Principais"],
  ["Peixe inteiro", "Whole fish", 550, "Principais"],
  ["Filete de peixe", "Fish fillet", 700, "Principais"],
  ["Lula grelhada", "Grilled calamari", 650, "Principais"],
  ["Camarão médio (8 unidades)", "Medium prawns (8 pieces)", 1050, "Principais"],
  ["Camarão tigre (2 unidades)", "Tiger prawns (2 pieces)", 1485, "Principais"],
  ["Panado", "Breaded fish", 600, "Principais"],
  ["Camarão King (5 unidades)", "King prawns (5 pieces)", 1325, "Principais"],
  ["Bife", "Beef steak", 950, "Principais"],
  ["Caril de camarão", "Prawn curry", 950, "Principais"],
  ["Caril de caranguejo", "Crab curry", 650, "Principais"],

  // REFRESCOS / SOFT DRINKS
  ["Refrigerante 330 ml", "Soft drink 330 ml", 85, "Refrescos"],
  ["Soda e tónica", "Soda & tonic", 85, "Refrescos"],
  ["Appletiser", "Appletiser", 150, "Refrescos"],

  // SUMOS E ÁGUAS / JUICES & WATER
  ["Sumo Cappy", "Cappy juice", 120, "Sumos / Águas"],
  ["Sumo 500 ml", "Juice 500 ml", 100, "Sumos / Águas"],
  ["Sumo 1 litro", "Juice 1 litre", 185, "Sumos / Águas"],
  ["Água 1,5 litros", "Water 1.5 litres", 95, "Sumos / Águas"],
  ["Água gaseificada", "Sparkling water", 100, "Sumos / Águas"],

  // CERVEJAS E CIDRAS / BEERS & CIDERS
  ["JC lata 250 ml", "JC can 250 ml", 150, "Cervejas"],
  ["Cidras", "Ciders", 150, "Cervejas"],
  ["2M 550 ml", "2M 550 ml", 125, "Cervejas"],
  ["Heineken", "Heineken", 120, "Cervejas"],
  ["Breezer / Brutal", "Breezer / Brutal", 150, "Cervejas"],
  ["Corona", "Corona", 150, "Cervejas"],
  ["Txilar / Preta", "Txilar / Dark beer", 100, "Cervejas"],
  ["Manica / Impala 330 ml", "Manica / Impala 330 ml", 100, "Cervejas"],
  ["Fly Fishing / Spin", "Fly Fishing / Spin", 150, "Cervejas"],
  ["Castle Lite", "Castle Lite", 100, "Cervejas"],
  ["Castle Double Malt", "Castle Double Malt", 100, "Cervejas"],
  ["Bermin", "Bermin", 150, "Cervejas"],
  ["Red Bull", "Red Bull", 150, "Cervejas"],
  ["Monster", "Monster", 150, "Cervejas"],

  // COCKTAILS
  ["Vodka com sumo", "Vodka with juice", 150, "Cocktail"],
  ["R & R", "R & R", 150, "Cocktail"],
  ["Maracujá com Sprite", "Passion fruit with Sprite", 125, "Cocktail"],
  ["Milk Shake", "Milkshake", 350, "Cocktail"],
  ["Dom Pedro", "Dom Pedro", 325, "Cocktail"],
  ["Caipirinha", "Caipirinha", 350, "Cocktail"],

  // APERITIVOS / APERITIFS
  ["May Fair", "May Fair", 150, "Aperitivos"],
  ["Gin Gordon / Belgravia", "Gordon / Belgravia gin", 100, "Aperitivos"],
  ["Gin Tanqueray", "Tanqueray gin", 150, "Aperitivos"],
  ["Whisky novo", "Young whisky", 150, "Aperitivos"],
  ["Whisky velho", "Aged whisky", 180, "Aperitivos"],
  ["Captain Morgan / Bacardi", "Captain Morgan / Bacardi", 150, "Aperitivos"],
  ["Malibu / Richelieu", "Malibu / Richelieu", 150, "Aperitivos"],
  ["Klipdrift", "Klipdrift", 100, "Aperitivos"],
  ["Amarula DBL", "Amarula double", 200, "Aperitivos"],
  ["Vodka Absolut", "Absolut vodka", 100, "Aperitivos"],
  ["Vodka Smirnoff", "Smirnoff vodka", 100, "Aperitivos"],

  // DIGESTIVOS / DIGESTIFS
  ["1920 / São Domingos", "1920 / São Domingos", 185, "Digestivos"],
  ["Vinho do Porto", "Port wine", 150, "Digestivos"],

  // SHOTS
  ["Sambuca", "Sambuca", 185, "Shoots"],
  ["Tequila", "Tequila", 185, "Shoots"],
  ["Jägermeister", "Jägermeister", 185, "Shoots"],
  ["Rémy Martin", "Rémy Martin", 300, "Shoots"],
  ["Kahlúa", "Kahlúa", 200, "Shoots"]

];
  menuData = menuData.map(function(item) {
  return {
    name: item[0],
    description: item[1],
    price: item[2],
    category: item[3]
  };
});


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
  function getMenuEmoji(item) {
  var category = item.category.toLowerCase();

  if (category.indexOf('café') !== -1 || category.indexOf('chá') !== -1) return '☕';
  if (category.indexOf('salada') !== -1) return '🥗';
  if (category.indexOf('entrada') !== -1) return '🦀';
  if (category.indexOf('snacks') !== -1 || category.indexOf('sandwich') !== -1) return '🥪';
  if (category.indexOf('omelete') !== -1) return '🍳';
  if (category.indexOf('combo') !== -1) return '🍱';
  if (category.indexOf('principal') !== -1) return '🍽️';
  if (category.indexOf('marisco') !== -1) return '🦐';
  if (category.indexOf('refresco') !== -1) return '🥤';
  if (category.indexOf('sumos') !== -1 || category.indexOf('águas') !== -1) return '🧃';
  if (category.indexOf('cerveja') !== -1) return '🍺';
  if (category.indexOf('cocktail') !== -1) return '🍹';
  if (category.indexOf('aperitivo') !== -1) return '🥃';
  if (category.indexOf('digestivo') !== -1) return '🥃';
  if (category.indexOf('shoot') !== -1) return '🥃';
  if (category.indexOf('vinho') !== -1) return '🍷';

  return '🍽️';
  }
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
        '<div class="menu-emoji-box" style="font-size: 55px; text-align: center; padding: 25px 0; background: rgba(255,255,255,0.03); border-radius: 8px 8px 0 0;">' + getMenuEmoji(item) + '</div>' +
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
    if (modalProductEmoji) modalProductEmoji.textContent = getMenuEmoji(item);
    
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

 // --- LIGHTBOX PARA IMAGENS --- 
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
       
