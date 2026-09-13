document.addEventListener('DOMContentLoaded', () => {

  // --- BASE DE DADOS DO MENU (CALOR TROPICAL) ---
  let menuData = [
    // --- Café & Chá ---
    { name: "Café expresso", category: "Café & Chá", price: 60.00, description: "Café expresso tradicional", emoji: "☕" },
    { name: "Chá diversas variedades", category: "Café & Chá", price: 60.00, description: "Seleção de chás aromáticos", emoji: "🍵" },

    // --- Saladas ---
    { name: "Salada mista", category: "Saladas", price: 200.00, description: "Alface, tomate, cebola e pepino", emoji: "🥗" },
    { name: "Salada de Atum", category: "Saladas", price: 350.00, description: "Atum fresco, alface, tomate e maionese", emoji: "🥗" },
    { name: "Salada tropical", category: "Saladas", price: 400.00, description: "Mix de folhas, frutos tropicais e molho especial", emoji: "🥗" },

    // --- Entradas ---
    { name: "Pão de alho", category: "Entradas", price: 120.00, description: "Pão torrado com manteiga de alho e ervas", emoji: "🥖" },
    { name: "Camarão rústico (Entrada)", category: "Entradas", price: 450.00, description: "Pequena porção de camarão salteado", emoji: "🍤" },
    { name: "Chouriço grelhado", category: "Entradas", price: 350.00, description: "Chouriço artesanal grelhado na brasa", emoji: "🥓" },

    // --- Snacks ---
    { name: "Hambúrguer simples", category: "Snacks", price: 250.00, description: "Carne bovina, alface, tomate e molho", emoji: "🍔" },
    { name: "Hambúrguer completo", category: "Snacks", price: 350.00, description: "Carne, queijo, ovo, fiambre e batata frita", emoji: "🍔" },
    { name: "Prego no pão", category: "Snacks", price: 300.00, description: "Bife tenro em bolo do caco com alho", emoji: "🥪" },

    // --- Omeletes ---
    { name: "Omelete simples", category: "Omeletes", price: 150.00, description: "Ovos batidos e temperados", emoji: "🍳" },
    { name: "Omelete mista", category: "Omeletes", price: 220.00, description: "Com queijo e fiambre", emoji: "🍳" },
    { name: "Omelete camarão", category: "Omeletes", price: 400.00, description: "Omelete recheada com camarão fresco", emoji: "🍳" },

    // --- Combo's ---
    { name: "Combo Família", category: "Combo's", price: 1500.00, description: "Prato misto para partilhar com acompanhamentos", emoji: "🍱" },
    { name: "Combo Casal", category: "Combo's", price: 900.00, description: "Seleção especial para dois", emoji: "🍱" },

    // --- Principais ---
    { name: "Frango grelhado", category: "Principais", price: 450.00, description: "Frango à cafetina com arroz, batatas fritas e salada", emoji: "🍗" },
    { name: "Carne de porco àaliana", category: "Principais", price: 500.00, description: "Carne de porco com arroz, batatas e salada", emoji: "🥩" },
    { name: "Bife à cavalo", category: "Principais", price: 650.00, description: "Bife de vaca com ovo estrelado, arroz, batatas e salada", emoji: "🥩" },

    // --- Mariscos ---
    { name: "Camarão grelhado 1kg", category: "Mariscos", price: 1800.00, description: "Camarão fresco grelhado com molho piri-piri", emoji: "🦐" },
    { name: "Caril de camarão", category: "Mariscos", price: 1200.00, description: "Camarão em molho cremoso de caril e arroz", emoji: "🍛" },
    { name: "Lagosta grelhada", category: "Mariscos", price: 2500.00, description: "Lagosta fresca da região com manteiga de alho", emoji: "🦞" },

    // --- Refrescos ---
    { name: "330 ml", category: "Refrescos", price: 70.00, description: "Refrigerante lata 330ml", emoji: "🥤" },
    { name: "Soda & Tônica", category: "Refrescos", price: 75.00, description: "Água tónica ou soda", emoji: "🥤" },
    { name: "Appletiser", category: "Refrescos", price: 100.00, description: "Bebida espumante de maçã", emoji: "🧃" },

    // --- Sumos & Águas ---
    { name: "Sumo cappy", category: "Sumos & Águas", price: 125.00, description: "Sumo Cappy", emoji: "🧃" },
    { name: "Sumo 500 ml", category: "Sumos & Águas", price: 100.00, description: "Sumo natural 500ml", emoji: "🧃" },
    { name: "Sumo 1l", category: "Sumos & Águas", price: 165.00, description: "Jarro de sumo 1L", emoji: "🧃" },
    { name: "Água 500ml", category: "Sumos & Águas", price: 50.00, description: "Água mineral natural 500ml", emoji: "💧" },
    { name: "Água 1,5l", category: "Sumos & Águas", price: 95.00, description: "Água mineral natural 1.5L", emoji: "💧" },
    { name: "Água gaseificada", category: "Sumos & Águas", price: 100.00, description: "Água com gás", emoji: "💧" },

    // --- Cervejas ---
    { name: "JC lata 250ml", category: "Cervejas", price: 150.00, description: "Cerveja JC lata", emoji: "🍺" },
    { name: "Ciders / cidras", category: "Cervejas", price: 100.00, description: "Sidra refrescante", emoji: "🍺" },
    { name: "Heineken", category: "Cervejas", price: 100.00, description: "Cerveja Heineken", emoji: "🍺" },
    { name: "Breezer / Brutal", category: "Cervejas", price: 100.00, description: "Bebida mista alcoólica", emoji: "🍺" },
    { name: "Corona", category: "Cervejas", price: 120.00, description: "Cerveja Corona", emoji: "🍺" },
    { name: "Txilar / preta", category: "Cervejas", price: 85.00, description: "Cerveja preta Txilar", emoji: "🍺" },
    { name: "Manica / impala 330ml", category: "Cervejas", price: 80.00, description: "Cerveja Manica ou Impala 330ml", emoji: "🍺" },
    { name: "Fly-fishing / spin", category: "Cervejas", price: 100.00, description: "Bebida alcoólica", emoji: "🍺" },
    { name: "Castle lite", category: "Cervejas", price: 100.00, description: "Cerveja Castle Lite", emoji: "🍺" },
    { name: "Castle D. Malte", category: "Cervejas", price: 100.00, description: "Castle Milk Stout", emoji: "🍺" },
    { name: "Bermin", category: "Cervejas", price: 125.00, description: "Bebida especial", emoji: "🍺" },
    { name: "Red bull", category: "Cervejas", price: 100.00, description: "Bebida energética Red Bull", emoji: "⚡" },
    { name: "Monster", category: "Cervejas", price: 100.00, description: "Bebida energética Monster", emoji: "⚡" },

    // --- Cocktail ---
    { name: "Passion fruit / Sprite", category: "Cocktail", price: 125.00, description: "Cocktail de maracujá com Sprite", emoji: "🍹" },
    { name: "Milk Pedro", category: "Cocktail", price: 325.00, description: "Cocktail especial da casa", emoji: "🍹" },
    { name: "Caipirinha", category: "Cocktail", price: 350.00, description: "Caipirinha tradicional de limão", emoji: "🍹" },

    // --- Aperitivos ---
    { name: "May fair", category: "Aperitivos", price: 125.00, description: "Bebida aperitiva", emoji: "🍸" },
    { name: "Gin Gordon / Belgravia", category: "Aperitivos", price: 80.00, description: "Dose de Gin Gordon ou Belgravia", emoji: "🍸" },
    { name: "Gin Tanqueray", category: "Aperitivos", price: 100.00, description: "Dose de Gin Tanqueray", emoji: "🍸" },
    { name: "Vodka / sumo", category: "Aperitivos", price: 150.00, description: "Vodka com sumo", emoji: "🍹" },
    { name: "R & R", category: "Aperitivos", price: 150.00, description: "R&R clássico", emoji: "🍹" },

    // --- Digestivos ---
    { name: "Whisky Novo", category: "Digestivos", price: 100.00, description: "Whisky standard", emoji: "🥃" },
    { name: "Whisky velho", category: "Digestivos", price: 150.00, description: "Whisky reserva / velho", emoji: "🥃" },
    { name: "Captain Morgan / Bacardi", category: "Digestivos", price: 100.00, description: "Rum selecionado", emoji: "🥃" },
    { name: "Klipdrift", category: "Digestivos", price: 80.00, description: "Brandy Klipdrift", emoji: "🥃" },
    { name: "Amarula DBL", category: "Digestivos", price: 190.00, description: "Dose dupla de Amarula", emoji: "🥃" },
    { name: "Vodka Absolut", category: "Digestivos", price: 100.00, description: "Vodka Absolut", emoji: "🍸" },
    { name: "Vodka Smirnoff", category: "Digestivos", price: 80.00, description: "Vodka Smirnoff", emoji: "🍸" },
    { name: "1920 / s.Domingos", category: "Digestivos", price: 150.00, description: "Aguardente digestiva", emoji: "🌿" },

    // --- Shoots ---
    { name: "Sambuca", category: "Shoots", price: 150.00, description: "Shoot de Sambuca", emoji: "🥃" },
    { name: "Tequila", category: "Shoots", price: 150.00, description: "Shoot de Tequila", emoji: "🥃" },
    { name: "Vinho do porto (Shoot/Dose)", category: "Shoots", price: 300.00, description: "Dose especial de Vinho do Porto", emoji: "🍷" },

    // --- Vinhos ---
    { name: "Vinho do porto", category: "Vinhos", price: 150.00, description: "Taça de Vinho do Porto", emoji: "🍷" },
    { name: "Vinho a copo", category: "Vinhos", price: 150.00, description: "Taça de vinho da casa", emoji: "🍷" },
    { name: "Boschendal / Kadete", category: "Vinhos", price: 1350.00, description: "Garrafa de vinho selecionado", emoji: "🍷" },
    { name: "F.Bostsrd / Roodenberg", category: "Vinhos", price: 1250.00, description: "Garrafa de vinho", emoji: "🍷" },
    { name: "G.Carlou / C.sauvignon", category: "Vinhos", price: 1350.00, description: "Garrafa Cabernet Sauvignon", emoji: "🍷" },
    { name: "Cabriz, gatão, Graca", category: "Vinhos", price: 850.00, description: "Garrafa de vinho português", emoji: "🍷" },
    { name: "G.Garcia, Aveleda", category: "Vinhos", price: 850.00, description: "Garrafa de vinho branco Aveleda", emoji: "🍾" },
    { name: "Portada", category: "Vinhos", price: 850.00, description: "Garrafa de Vinho Portada", emoji: "🍷" },
    { name: "Chocolate Bloc", category: "Vinhos", price: 1750.00, description: "Garrafa Chocolate Block", emoji: "🍷" },
    { name: "JC - Keuroux grf", category: "Vinhos", price: 650.00, description: "Garrafa JC Le Roux", emoji: "🍾" },
    { name: "Krone, Tosti, Anabela", category: "Vinhos", price: 1100.00, description: "Espumante / Garrafa especial", emoji: "🍾" }
  ];

  let cart = [];

  const menuGrid = document.getElementById('menuGrid');
  const filtersContainer = document.getElementById('filters');
  const searchInput = document.getElementById('menuSearch');
  
  const productModal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');
  const modalProductName = document.getElementById('modalProductName');
  const modalProductCategory = document.getElementById('modalProductCategory');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductDescription = document.getElementById('modalProductDescription');
  const modalProductEmoji = document.getElementById('modalProductEmoji');
  const modalAddButton = document.getElementById('modalAddButton');

  const cartDrawer = document.getElementById('cartDrawer');
  const openCartBtn = document.getElementById('openCart');
  const closeCartBtn = document.getElementById('closeCart');
  const overlay = document.getElementById('overlay');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const sendWhatsAppBtn = document.getElementById('sendWhatsAppButton');
  const customerNameInput = document.getElementById('customerName');
  const customerNoteInput = document.getElementById('customerNote');

  let currentSelectedItem = null;
        function renderMenu(items) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';
    if (items.length === 0) {
      menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 20px;">Nenhum item encontrado nesta categoria.</p>';
      return;
    }

    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'menu-card reveal active';
      card.innerHTML = `
        <div class="menu-emoji-box" style="font-size: 55px; text-align: center; padding: 25px 0; background: rgba(255,255,255,0.03); border-radius: 8px 8px 0 0;">${item.emoji}</div>
        <div class="menu-card-content">
          <span class="badge">${item.category}</span>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="menu-card-footer">
            <strong>${item.price.toFixed(2)} MTS</strong>
            <button class="btn btn-primary btn-sm add-to-cart-direct" data-name="${item.name}">Ver / Pedir</button>
          </div>
        </div>
      `;
      
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart-direct')) {
          openModal(item);
        }
      });

      const btnDirect = card.querySelector('.add-to-cart-direct');
      if (btnDirect) {
        btnDirect.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(item);
        });
      }

      menuGrid.appendChild(card);
    });
  }

  function openModal(item) {
    currentSelectedItem = item;
    if (modalProductName) modalProductName.textContent = item.name;
    if (modalProductCategory) modalProductCategory.textContent = item.category;
    if (modalProductPrice) modalProductPrice.textContent = `${item.price.toFixed(2)} MTS`;
    if (modalProductDescription) modalProductDescription.textContent = item.description;
    if (modalProductEmoji) modalProductEmoji.textContent = item.emoji;
    
    if (productModal) productModal.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  function closeModal() {
    if (productModal) productModal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeModal();
      closeCart();
    });
  }

  if (modalAddButton) {
    modalAddButton.addEventListener('click', () => {
      if (currentSelectedItem) {
        addToCart(currentSelectedItem);
        closeModal();
        openCart();
      }
    });
  }

  // --- CARRINHO ---
  function addToCart(item) {
    const existing = cart.find(cartItem => cartItem.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
  }

  function updateCartUI() {
    if (!cartCount || !cartItemsContainer || !cartTotal) return;
    
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItemsCount;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart" style="text-align: center; padding: 30px;">
          <span style="font-size: 40px;">🛒</span>
          <p style="color: #bbb; margin: 10px 0;">O seu pedido está vazio.</p>
          <a href="#menu" id="emptyCartLink" class="text-link" style="color: #ff5c5c; text-decoration: underline;">Escolher pratos</a>
        </div>
      `;
      document.getElementById('emptyCartLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        closeCart();
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      });
      cartTotal.textContent = "0.00 MTS";
      return;
    }

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
      totalPrice += item.price * item.quantity;

      const cartItemEl = document.createElement('div');
      cartItemEl.className = 'cart-item';
      cartItemEl.style.cssText = "padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 6px;";
      
      cartItemEl.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <strong style="font-size: 15px; color: #fff;">${item.emoji || '🍽️'} ${item.name}</strong>
            <div style="font-size: 13px; color: #ff5c5c; margin-top: 2px;">${item.price.toFixed(2)} MTS x ${item.quantity}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
          <button type="button" class="btn-qty decrease" data-index="${index}" style="background: #444; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">-</button>
          <span style="color: #fff; font-weight: bold; min-width: 20px; text-align: center;">${item.quantity}</span>
          <button type="button" class="btn-qty increase" data-index="${index}" style="background: #444; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>
          <button type="button" class="btn-remove" data-index="${index}" style="background: #d9534f; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; margin-left: auto;" title="Remover item">×</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotal.textContent = `${totalPrice.toFixed(2)} MTS`;

    cartItemsContainer.querySelectorAll('.increase').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        cart[idx].quantity += 1;
        updateCartUI();
      });
    });

    cartItemsContainer.querySelectorAll('.decrease').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        if (cart[idx].quantity > 1) {
          cart[idx].quantity -= 1;
        } else {
          cart.splice(idx, 1);
        }
        updateCartUI();
      });
    });

    cartItemsContainer.querySelectorAll('.btn-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        cart.splice(idx, 1);
        updateCartUI();
      });
    });
  }

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (overlay) overlay.classList.add('active');
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }

  if (openCartBtn) openCartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  // --- FILTROS E PESQUISA ---
  if (filtersContainer) {
    filtersContainer.addEventListener('click', (e) => {
      const filterBtn = e.target.closest('.filter');
      if (filterBtn) {
        filtersContainer.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        filterBtn.classList.add('active');
        const category = filterBtn.getAttribute('data-category');

        if (category === 'Todos') {
          renderMenu(menuData);
        } else {
          const filtered = menuData.filter(item => item.category === category);
          renderMenu(filtered);
        }
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = menuData.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
      renderMenu(filtered);
    });
  }

  // --- ENVIAR PEDIDO VIA WHATSAPP ---
  if (sendWhatsAppBtn) {
    sendWhatsAppBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('O seu pedido está vazio!');
        return;
      }

      const customerName = customerNameInput ? customerNameInput.value.trim() : 'Cliente';
      const customerNote = customerNoteInput ? customerNoteInput.value.trim() : '';

      let message = `Olá, Restaurante Calor Tropical! 🏝️\nGostaria de fazer o seguinte pedido:\n\n`;
      let total = 0;

      cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `• ${item.quantity}x ${item.name} - ${subtotal.toFixed(2)} MTS\n`;
      });

      message += `\n*Total:* ${total.toFixed(2)} MTS\n`;
      message += `*Nome:* ${customerName}\n`;
      if (customerNote) {
        message += `*Observação:* ${customerNote}\n`;
      }

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/258874220984?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Inicializar menu e carrinho
  renderMenu(menuData);
  updateCartUI();

  // --- MENU MOBILE ---
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('active');
      if (overlay) overlay.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      });
    });
  }

});
      
