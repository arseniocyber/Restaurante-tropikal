document.addEventListener('DOMContentLoaded', function() {

  // --- BASE DE DADOS DO MENU (CALOR TROPICAL) ---
  var menuData = [

  // =========================
  // COFFEE / TEA
  // =========================
  {
    category: "Café / Chá",
    items: [
      { name: "Café eleite / Coffee with Milk", price: 150 },
      { name: "Chá e leite / Tea with Milk", price: 125 },
      { name: "Capuchinho / Cappuccino", price: 150 },
      { name: "Expresso / Express", price: 150 },
      { name: "Chocotale quente / Hot Choc.", price: 175 }
    ]
  },

  // =========================
  // SALADAS
  // =========================
  {
    category: "Saladas",
    items: [
      { name: "Salada grega / Greak Salad", price: 250 },
      { name: "Salada de Atum / Tuna Salad", price: 250 },
      { name: "Salada Russa / Russian Salad", price: 250 },
      { name: "Salada tropical / Tropical Salad", price: 200 }
    ]
  },

  // =========================
  // ENTRADAS
  // =========================
  {
    category: "Entradas",
    items: [
      { name: "Shamussas de peixe (uni)", price: 220 },
      { name: "Caranguejo ao Natural / Crab", price: 500 },
      { name: "Pão de alho / Garlic Bread", price: 150 },
      { name: "Rissóis de camarão (4 uni)", price: 220 },
      { name: "Camarão alhinho", price: 550 },
      { name: "Caril de camarão", price: 880 },
      { name: "Caril de caranguejo", price: 650 }
    ]
  },

  // =========================
  // SNACKS & SANDWICH
  // =========================
  {
    category: "Snacks & Sandwich",
    items: [
      { name: "Tosta de queijo / Cheese Tost", price: 250 },
      { name: "Tosta mista / HAM & CHEESE TOST", price: 300 },
      { name: "Prego no pão / Steark N Roll", price: 285 },
      { name: "Cheese N Becon Sandwich", price: 300 },
      { name: "Chicken Mayo / Hamburger", price: 300 }
    ]
  },

  // =========================
  // OMELETES
  // =========================
  {
    category: "Omeletes",
    items: [
      { name: "Omelete simples", price: 200 },
      { name: "Omelete de queijo", price: 200 },
      { name: "Omelete misto", price: 250 },
      { name: "Pequeno almoço / Breakfast", price: 425 }
    ]
  },

  // =========================
  // COMBO'S
  // =========================
  {
    category: "Combo's",
    items: [
      { name: "Chicken & Calamari", price: 875 },
      { name: "Chicken & Prawns", price: 875 },
      { name: "Prawns & Calamari", price: 875 },
      { name: "Prawns & Fish Fillet", price: 875 },
      { name: "Calamari & Fish Fillet", price: 875 },
      { name: "Chicken & Fish Fillet", price: 875 },
      { name: "1/2 Frango & Prawns", price: 1325 }
    ]
  },

  // =========================
  // PRINCIPAIS PRATOS
  // =========================
  {
    category: "Principais",
    items: [
      { name: "1/4 Frango / Chicken", price: 305 },
      { name: "1/2 Frango / Chicken", price: 450 },
      { name: "Frango inteiro / Chicken", price: 850 },
      { name: "Peixe inteiro / Whole Fish", price: 850 },
      { name: "Filete de peixe", price: 600 },
      { name: "Lula grelhada", price: 550 },
      { name: "Posta de peixe", price: 500 },
      { name: "Panado / Fish Fingers", price: 550 },
      { name: "Camarão", price: 895 },
      { name: "Bife / Beef", price: 850 }
    ]
  },

  // =========================
  // MARISCOS
  // =========================
  {
    category: "Mariscos",
    items: [
      { name: "4 (Fish, Prawns, Calamari)", price: 1525 },
      { name: "Marisco / Seafood p2 pax", price: 2500 },
      { name: "Lobstar & 6 Prawns", price: 1975 },
      { name: "Marisco / Seafood for 3 pax", price: 3500 },
      { name: "12 Camarões / Prawns with Chips", price: 1275 }
    ]
  },

  // =========================
  // REFRESCOS / COLD DRINKS
  // =========================
  {
    category: "Refrescos",
    items: [
      { name: "330 ml", price: 70 },
      { name: "Soda & Tônica", price: 75 },
      { name: "Appllestiser", price: 100 }
    ]
  },

  // =========================
  // SUMOS / ÁGUAS
  // =========================
  {
    category: "Sumos / Águas",
    items: [
      { name: "Sumo Cappy", price: 125 },
      { name: "Sumo 500 ml", price: 100 },
      { name: "Sumo 1L", price: 165 },
      { name: "Água 500ml", price: 50 },
      { name: "Água 1,5L", price: 95 },
      { name: "Água gaseificada", price: 100 }
    ]
  },

  // =========================
  // CERVEJAS / BEERS / CIDERS
  // =========================
  {
    category: "Cervejas",
    items: [
      { name: "JC lata 250ml", price: 150 },
      { name: "Ciders / Cidras", price: 100 },
      { name: "Heineken", price: 100 },
      { name: "Breezer / Brutal", price: 100 },
      { name: "Corona", price: 120 },
      { name: "Txilar / Preta", price: 85 },
      { name: "Manica / Impala 330ml", price: 80 },
      { name: "Fly-fishing / Spin", price: 100 },
      { name: "Castle Lite", price: 100 },
      { name: "Castle D. Malte", price: 100 },
      { name: "Bermin", price: 125 },
      { name: "Red Bull", price: 100 },
      { name: "Monster", price: 100 }
    ]
  },

  // =========================
  // COCKTAIL
  // =========================
  {
    category: "Cocktail",
    items: [
      { name: "Vodka / Sumo", price: 150 },
      { name: "R & R", price: 150 },
      { name: "Passion Fruit / Sprite", price: 125 },
      { name: "Milk Pedro", price: 325 },
      { name: "Caipirinha", price: 350 }
    ]
  },

  // =========================
  // APERITIVOS
  // =========================
  {
    category: "Aperitivos",
    items: [
      { name: "May Fair", price: 125 },
      { name: "Gin Gordon / Belgravia", price: 80 },
      { name: "Gin Tanquery", price: 100 },
      { name: "Whisky Novo", price: 100 },
      { name: "Whisky velho", price: 150 },
      { name: "Captain Morgan / Bacordi", price: 100 },
      { name: "Klipidrift", price: 80 },
      { name: "Amarula DBL", price: 190 },
      { name: "Vodka Absolut", price: 100 },
      { name: "Vodka Smirnoff", price: 80 }
    ]
  },

  // =========================
  // DIGESTIVOS
  // =========================
  {
    category: "Digestivos",
    items: [
      { name: "1920 / S. Domingos", price: 150 },
      { name: "Vinho do Porto", price: 150 }
    ]
  },

  // =========================
  // SHOOTS
  // =========================
  {
    category: "Shoots",
    items: [
      { name: "Sambuca", price: 150 },
      { name: "Tequila", price: 150 },
      { name: "Vinho do Porto", price: 300 }
    ]
  },

  // =========================
  // VINHOS / WINES
  // =========================
  {
    category: "Vinhos",
    items: [
      { name: "Vinho a copo", price: 150 },
      { name: "Boschendal / Kadete", price: 1350 },
      { name: "F.Bostsrd / Roodenberg", price: 1250 },
      { name: "G.Carlou / C.sauvignon", price: 1350 },
      { name: "Cabriz, gatão, Graca", price: 850 },
      { name: "G.Garcia, Aveleda", price: 850 },
      { name: "Portada", price: 850 },
      { name: "Chocotale Bloc", price: 1750 },
      { name: "JC - Keuroux grf", price: 650 },
      { name: "Krone, Tosti, Anabela", price: 1100 }
    ]
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
       
