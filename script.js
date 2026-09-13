// ================= SCRIPT COMPLETO (PARTE 1/3) - RESTAURANTE CALOR TROPICAL =================

document.addEventListener('DOMContentLoaded', () => {

  const menuData = [
    // Café / Chá
    { name: "Café", category: "Café / Chá", price: 100, description: "Café espresso tradicional.", emoji: "☕" },
    { name: "Café e leite", category: "Café / Chá", price: 150, description: "Café quente misturado com leite cremoso.", emoji: "☕" },
    { name: "Chá", category: "Café / Chá", price: 100, description: "Variedade de chás disponíveis.", emoji: "🫖" },

    // Saladas
    { name: "Salada mista", category: "Saladas", price: 250, description: "Alface, tomate, cebola, pepino e cenoura fresca.", emoji: "🥗" },
    { name: "Salada tropical", category: "Saladas", price: 350, description: "Mix de folhas, frutos da época e molho especial da casa.", emoji: "🥗" },

    // Entradas
    { name: "Pão de alho", category: "Entradas", price: 150, description: "Pão tostado com pasta de alho e ervas.", emoji: "🥖" },
    { name: "Camarão rissóis (unid)", category: "Entradas", price: 80, description: "Rissóis de camarão estaladiços.", emoji: "🍤" },
    { name: "Shamussas", category: "Entradas", price: 100, description: "Shamussas estaladiças recheadas.", emoji: "🥟" },

    // Snacks & Sandwich
    { name: "Prego no pão", category: "Snacks & Sandwich", price: 300, description: "Bife de vaca suculento no pão com batatas fritas.", emoji: "🥪" },
    { name: "Hambúrguer tropical", category: "Snacks & Sandwich", price: 350, description: "Hambúrguer artesanal com queijo, alface e tomate.", emoji: "🍔" },

    // Omeletes
    { name: "Omelete simples", category: "Omeletes", price: 200, description: "Omelete de ovos frescos com ervas.", emoji: "🍳" },
    { name: "Omelete mista", category: "Omeletes", price: 280, description: "Omelete recheada com queijo e fiambre.", emoji: "🍳" },

    // Combo's
    { name: "Combo Casal", category: "Combo's", price: 1200, description: "Seleção especial de mariscos e peixe para duas pessoas. Acompanha shamussas.", emoji: "🍱" },

    // Principais
    { name: "Peixe inteiro / Whole fish", category: "Principais", price: 650, description: "Peixe fresco do dia grelhado. Servido com arroz, batatas fritas e salada.", emoji: "🐟" },
    { name: "Camarão", category: "Principais", price: 850, description: "Camarão fresco grelhado. Servido com arroz, batatas fritas e salada.", emoji: "🦐" },
    { name: "1/4 frango / Chicken", category: "Principais", price: 450, description: "Frango assado à moda da casa. Servido com arroz, batatas fritas e salada.", emoji: "🍗" }
    
    // Mariscos
    { name: "Marisco / Seafood p2 pax", category: "Mariscos", price: 1500, description: "Prato misto de mariscos frescos para partilhar. Acompanha shamussas.", emoji: "🦞" },

    // Sumos
    { name: "Sumo natural da época", category: "Sumos", price: 120, description: "Sumo de fruta fresca do dia (manga, papaia ou ananás).", emoji: "🧃" },
    { name: "Sumo de maracujá natural", category: "Sumos", price: 150, description: "Sumo natural refrescante de maracujá.", emoji: "🍹" },

    // Shoots
    { name: "Shoot Tequila", category: "Shoots", price: 200, description: "Dose de tequila com limão e sal.", emoji: "🥃" },
    { name: "Shoot Jägermeister", category: "Shoots", price: 250, description: "Dose gelada de licor de ervas.", emoji: "🥃" },

    // Vinhos
    { name: "Vinho Tinto da Casa (Taça)", category: "Vinhos", price: 250, description: "Copo de vinho tinto selecionado.", emoji: "🍷" },
    { name: "Vinho Tinto da Casa (Garrafa)", category: "Vinhos", price: 900, description: "Garrafa de vinho tinto selecionado.", emoji: "🍷" },
    { name: "Vinho Branco da Casa (Taça)", category: "Vinhos", price: 250, description: "Copo de vinho branco fresco.", emoji: "🍾" },
    { name: "Vinho Branco da Casa (Garrafa)", category: "Vinhos", price: 950, description: "Garrafa de vinho branco fresco.", emoji: "🍾" },

    // Aperitivos
    { name: "Aperitivo Martini", category: "Aperitivos", price: 200, description: "Vermute clássico servido com gelo e rodelas de limão.", emoji: "🍸" },
    { name: "Campari", category: "Aperitivos", price: 220, description: "Aperitivo clássico amargo e refrescante.", emoji: "🥃" },
    { name: "Whisky", category: "Aperitivos", price: 300, description: "Dose de whisky selecionado.", emoji: "🥃" },

    // Cervejas
    { name: "Cerveja 2M (Lata/Garrafa)", category: "Cervejas", price: 100, description: "A cerveja favorita de Moçambique bem gelada.", emoji: "🍺" },
    { name: "Cerveja Laurentina Clara", category: "Cervejas", price: 110, description: "Cerveja loura tradicional moçambicana.", emoji: "🍺" },
    { name: "Cerveja Black", category: "Cervejas", price: 120, description: "Cerveja preta encorpada.", emoji: "🍺" },
    { name: "Cerveja Melaço", category: "Cervejas", price: 130, description: "Cerveja especial com toque de melaço.", emoji: "🍺" },

    // Refrescos & Cocktails
    { name: "Refrescos", category: "Refrescos", price: 100, description: "Refrigerantes variados lata 330ml.", emoji: "🥤" },
    { name: "Caipirinha", category: "Cocktail", price: 350, description: "Cocktail refrescante com limão, açúcar e aguardente/cachaça.", emoji: "🍹" }
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
            <strong>${item.price} MTS</strong>
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
    if (modalProductPrice) modalProductPrice.textContent = `${item.price} MTS`;
    if (modalProductDescription) modalProductDescription.textContent = item.description;
    
    const modalEmojiContainer = document.getElementById('modalProductEmoji');
    if (modalEmojiContainer) {
      modalEmojiContainer.textContent = item.emoji;
    }
    
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
  // --- GESTÃO DO CARRINHO ---
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
      cartTotal.textContent = "0 MTS";
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
            <div style="font-size: 13px; color: #ff5c5c; margin-top: 2px;">${item.price} MTS x ${item.quantity}</div>
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

    cartTotal.textContent = `${totalPrice} MTS`;

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
      if (e.target.classList.contains('filter')) {
        filtersContainer.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        e.target.classList.add('active');
        const category = e.target.getAttribute('data-category');

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

  // --- BOTÕES RÁPIDOS DOS DESTAQUES ---
  document.querySelectorAll('.quick-order').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const foundItem = menuData.find(i => i.name.toLowerCase() === name.toLowerCase());
      if (foundItem) {
        openModal(foundItem);
      } else {
        const menuSection = document.getElementById('menu');
        if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- GALERIA E PRATOS (Zoom ao clicar nas fotos) ---
  document.querySelectorAll('.gallery-grid img, .about-img img, .hero-img img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const modalBox = document.createElement('div');
      modalBox.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 9999; cursor: pointer;";
      modalBox.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 5px 20px rgba(0,0,0,0.5);">`;
      modalBox.addEventListener('click', () => modalBox.remove());
      document.body.appendChild(modalBox);
    });
  });

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
        message += `• ${item.quantity}x ${item.name} - ${subtotal} MTS\n`;
      });

      message += `\n*Total:* ${total} MTS\n`;
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

  // --- MENU MOBILE RÁPIDO E FLUIDO ---
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
        
