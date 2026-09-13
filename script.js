// ================= SCRIPT COMPLETO (PARTE 1/2) - RESTAURANTE CALOR TROPICAL =================

document.addEventListener('DOMContentLoaded', () => {

  const menuData = [
    // --- Café ---
    { name: "Café eleite / coffee with Milk", category: "Café", price: 150.00, description: "Café com leite / Coffee with milk", emoji: "☕" },
    { name: "Chá e leite / Tea with milk", category: "Café", price: 125.00, description: "Chá com leite / Tea with milk", emoji: "🫖" },
    { name: "Capuchinho / cappuccino", category: "Café", price: 150.00, description: "Capuchinho / cappuccino", emoji: "☕" },
    { name: "Expresso / Express", category: "Café", price: 150.00, description: "Expresso / Espresso", emoji: "☕" },
    { name: "Chocolate quente / hot choc", category: "Café", price: 175.00, description: "Chocolate quente / Hot chocolate", emoji: "🍫" },

    // --- Saladas ---
    { name: "Salada grega / Greak salad", category: "Saladas", price: 250.00, description: "Salada grega / Greek salad", emoji: "🥗" },
    { name: "Salada de Atum / Tuna salad", category: "Saladas", price: 250.00, description: "Salada de atum / Tuna salad", emoji: "🥗" },
    { name: "Salada Russa / Russian salad", category: "Saladas", price: 250.00, description: "Salada russa / Russian salad", emoji: "🥗" },
    { name: "Salada tropical / Tropical salad", category: "Saladas", price: 200.00, description: "Salada tropical / Tropical salad", emoji: "🥗" },

    // --- Entradas ---
    { name: "Shamussas de peixe (uni)", category: "Entradas", price: 220.00, description: "Shamussas de peixe (uni) / Fish samoosas (unit)", emoji: "🥟" },
    { name: "Caranguejo ao Natural / Crab", category: "Entradas", price: 500.00, description: "Caranguejo ao natural / Natural crab", emoji: "🦀" },
    { name: "Pão de alho / Garlic bread", category: "Entradas", price: 150.00, description: "Pão de alho / Garlic bread", emoji: "🥖" },
    { name: "Rissóis de camarão (4 uni)", category: "Entradas", price: 220.00, description: "Rissóis de camarão (4 uni) / Prawn rissoles (4 units)", emoji: "🍤" },
    { name: "Camarão alhinho", category: "Entradas", price: 550.00, description: "Camarão alhinho / Garlic prawns", emoji: "🍤" },
    { name: "Caril de camarão", category: "Entradas", price: 880.00, description: "Caril de camarão / Prawn curry", emoji: "🍛" },
    { name: "Caril de caranguejo", category: "Entradas", price: 650.00, description: "Caril de caranguejo / Crab curry", emoji: "🍛" },

    // --- Snacks ---
    { name: "Tosta de queijo / cheese tost", category: "Snacks", price: 250.00, description: "Tosta de queijo / Cheese toast", emoji: "🥪" },
    { name: "Tosta mista / HAM & CHEESE TOST", category: "Snacks", price: 300.00, description: "Tosta mista / Ham & cheese toast", emoji: "🥪" },
    { name: "Prego no pão / steark N Roll", category: "Snacks", price: 285.00, description: "Prego no pão / Steak in a roll", emoji: "🍔" },
    { name: "Cheese N Becon sandwich", category: "Snacks", price: 300.00, description: "Sandes de queijo e bacon / Cheese & bacon sandwich", emoji: "🥪" },
    { name: "Chicken Mayo / hamburger", category: "Snacks", price: 300.00, description: "Hambúrguer de frango com maionese / Chicken mayo burger", emoji: "🍔" },
    { name: "Omelete simples", category: "Snacks", price: 200.00, description: "Omelete simples / Plain omelette", emoji: "🍳" },
    { name: "Omelete de queijo", category: "Snacks", price: 200.00, description: "Omelete de queijo / Cheese omelette", emoji: "🍳" },
    { name: "Omelete misto", category: "Snacks", price: 250.00, description: "Omelete mista / Mixed omelette", emoji: "🍳" },
    { name: "Pequeno almoço / breakfast", category: "Snacks", price: 425.00, description: "Pequeno-almoço / Breakfast", emoji: "🍳" },

    // --- Principais ---
    { name: "Chicken & calamari", category: "Principais", price: 875.00, description: "Frango e lulas (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "Chicken & prawns", category: "Principais", price: 875.00, description: "Frango e camarão (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "Prawns & calamari", category: "Principais", price: 875.00, description: "Camarão e lulas (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "Prawns & fish fillet", category: "Principais", price: 875.00, description: "Camarão e filete de peixe (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "Calamari & fish fillet", category: "Principais", price: 875.00, description: "Lulas e filete de peixe (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "Chicken & fish fillet", category: "Principais", price: 875.00, description: "Frango e filete de peixe (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "1/2 frango & prawns", category: "Principais", price: 1325.00, description: "Meio frango e camarão (servido com 1 ou 2 shamussas)", emoji: "🍱" },
    { name: "1/4 frango / chiken", category: "Principais", price: 305.00, description: "1/4 de frango com arroz, batatas fritas e salada", emoji: "🍗" },
    { name: "1/2 frango / chiken", category: "Principais", price: 450.00, description: "1/2 frango com arroz, batatas fritas e salada", emoji: "🍗" },
    { name: "Frango inteiro / chicken", category: "Principais", price: 850.00, description: "Frango inteiro com arroz, batatas fritas e salada", emoji: "🍗" },
    { name: "Peixe inteiro / whole fish", category: "Principais", price: 850.00, description: "Peixe inteiro com arroz, batatas fritas e salada", emoji: "🐟" },
    { name: "Filete de peixe", category: "Principais", price: 600.00, description: "Filete de peixe com arroz, batatas fritas e salada", emoji: "🐟" },
    { name: "Lula grelhada", category: "Principais", price: 550.00, description: "Lula grelhada com arroz, batatas fritas e salada", emoji: "🦑" },
    { name: "Posta de peixe", category: "Principais", price: 500.00, description: "Posta de peixe com arroz, batatas fritas e salada", emoji: "🐟" },
    { name: "Panado / fish fingers", category: "Principais", price: 550.00, description: "Panado com arroz, batatas fritas e salada", emoji: "🐟" },
    { name: "Camarão", category: "Principais", price: 895.00, description: "Camarão com arroz, batatas fritas e salada", emoji: "🦐" },
    { name: "Bife / Beef", category: "Principais", price: 850.00, description: "Bife com arroz, batatas fritas e salada", emoji: "🥩" },

    // --- Mariscos ---
    { name: "4 (fish, prawns, calamari)", category: "Mariscos", price: 1525.00, description: "Prato misto - Servido com 1 ou 2 shamussas", emoji: "🦞" },
    { name: "Marisco / seafood p2 pax", category: "Mariscos", price: 2500.00, description: "Prato de mariscos para 2 pax - Servido com 1 ou 2 shamussas", emoji: "🦞" },
    { name: "Lobstar & 6 prawns", category: "Mariscos", price: 1975.00, description: "Lagosta e 6 camarões - Servido com 1 ou 2 shamussas", emoji: "🦞" },
    { name: "Marisco / Seafood for 3 pax", category: "Mariscos", price: 3500.00, description: "Prato de mariscos para 3 pax - Servido com 1 ou 2 shamussas", emoji: "🦞" },
    { name: "12 camarões / prawns with chips", category: "Mariscos", price: 1275.00, description: "12 camarões com batatas - Servido com 1 ou 2 shamussas", emoji: "🦐" }
  ];
  // ================= SCRIPT COMPLETO (PARTE 2/2) - RESTAURANTE CALOR TROPICAL =================

  const bebidasData = [
    // --- Refrescos ---
    { name: "330 ml", category: "Refrescos", price: 70.00, description: "Refrigerante lata 330ml", emoji: "🥤" },
    { name: "Soda & Tônica", category: "Refrescos", price: 75.00, description: "Água tónica ou soda", emoji: "🥤" },
    { name: "Appletiser", category: "Refrescos", price: 100.00, description: "Bebida espumante de maçã", emoji: "🧃" },

    // --- Água e Sumos ---
    { name: "Sumo cappy", category: "Água", price: 125.00, description: "Sumo Cappy", emoji: "🧃" },
    { name: "Sumo 500 ml", category: "Água", price: 100.00, description: "Sumo natural 500ml", emoji: "🧃" },
    { name: "Sumo 1l", category: "Água", price: 165.00, description: "Jarro de sumo 1L", emoji: "🧃" },
    { name: "Água 500ml", category: "Água", price: 50.00, description: "Água mineral natural 500ml", emoji: "💧" },
    { name: "Água 1,5l", category: "Água", price: 95.00, description: "Água mineral natural 1.5L", emoji: "💧" },
    { name: "Água gaseificada", category: "Água", price: 100.00, description: "Água com gás", emoji: "💧" },

    // --- Cerveja ---
    { name: "JC lata 250ml", category: "Cerveja", price: 150.00, description: "Cerveja JC lata", emoji: "🍺" },
    { name: "Ciders / cidras", category: "Cerveja", price: 100.00, description: "Sidra refrescante", emoji: "🍺" },
    { name: "Heineken", category: "Cerveja", price: 100.00, description: "Cerveja Heineken", emoji: "🍺" },
    { name: "Breezer / Brutal", category: "Cerveja", price: 100.00, description: "Bebida mista alcoólica", emoji: "🍺" },
    { name: "Corona", category: "Cerveja", price: 120.00, description: "Cerveja Corona", emoji: "🍺" },
    { name: "Txilar / preta", category: "Cerveja", price: 85.00, description: "Cerveja preta Txilar", emoji: "🍺" },
    { name: "Manica / impala 330ml", category: "Cerveja", price: 80.00, description: "Cerveja Manica ou Impala 330ml", emoji: "🍺" },
    { name: "Fly-fishing / spin", category: "Cerveja", price: 100.00, description: "Bebida alcoólica", emoji: "🍺" },
    { name: "Castle lite", category: "Cerveja", price: 100.00, description: "Cerveja Castle Lite", emoji: "🍺" },
    { name: "Castle D. Malte", category: "Cerveja", price: 100.00, description: "Castle Milk Stout", emoji: "🍺" },
    { name: "Bermin", category: "Cerveja", price: 125.00, description: "Bebida especial", emoji: "🍺" },
    { name: "Red bull", category: "Cerveja", price: 100.00, description: "Bebida energética Red Bull", emoji: "⚡" },
    { name: "Monster", category: "Cerveja", price: 100.00, description: "Bebida energética Monster", emoji: "⚡" },

    // --- Vinhos e Outras Bebidas ---
    { name: "Vodka / sumo", category: "Vinhos", price: 150.00, description: "Vodka com sumo", emoji: "🍹" },
    { name: "R & R", category: "Vinhos", price: 150.00, description: "R&R clássico", emoji: "🍹" },
    { name: "Passion fruit / Sprite", category: "Vinhos", price: 125.00, description: "Cocktail de maracujá com Sprite", emoji: "🍹" },
    { name: "Milk Pedro", category: "Vinhos", price: 325.00, description: "Cocktail especial da casa", emoji: "🍹" },
    { name: "Caipirinha", category: "Vinhos", price: 350.00, description: "Caipirinha tradicional de limão", emoji: "🍹" },
    { name: "May fair", category: "Vinhos", price: 125.00, description: "Bebida aperitiva", emoji: "🍸" },
    { name: "Gin Gordon / Belgravia", category: "Vinhos", price: 80.00, description: "Dose de Gin Gordon ou Belgravia", emoji: "🍸" },
    { name: "Gin Tanqueray", category: "Vinhos", price: 100.00, description: "Dose de Gin Tanqueray", emoji: "🍸" },
    { name: "Whisky Novo", category: "Vinhos", price: 100.00, description: "Whisky standard", emoji: "🥃" },
    { name: "Whisky velho", category: "Vinhos", price: 150.00, description: "Whisky reserva / velho", emoji: "🥃" },
    { name: "Captain Morgan / Bacardi", category: "Vinhos", price: 100.00, description: "Rum selecionado", emoji: "🥃" },
    { name: "Klipdrift", category: "Vinhos", price: 80.00, description: "Brandy Klipdrift", emoji: "🥃" },
    { name: "Amarula DBL", category: "Vinhos", price: 190.00, description: "Dose dupla de Amarula", emoji: "🥃" },
    { name: "Vodka Absolut", category: "Vinhos", price: 100.00, description: "Vodka Absolut", emoji: "🍸" },
    { name: "Vodka Smirnoff", category: "Vinhos", price: 80.00, description: "Vodka Smirnoff", emoji: "🍸" },
    { name: "1920 / s.Domingos", category: "Vinhos", price: 150.00, description: "Aguardente digestiva", emoji: "🌿" },
    { name: "Vinho do porto", category: "Vinhos", price: 150.00, description: "Taça de Vinho do Porto", emoji: "🍷" },
    { name: "Sambuca", category: "Vinhos", price: 150.00, description: "Shoot de Sambuca", emoji: "🥃" },
    { name: "Tequila", category: "Vinhos", price: 150.00, description: "Shoot de Tequila", emoji: "🥃" },
    { name: "Vinho do porto (Shoot/Dose)", category: "Vinhos", price: 300.00, description: "Dose especial de Vinho do Porto", emoji: "🍷" },
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

  // Juntar todos os itens num array único
  menuData.push(...bebidasData);

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

  // --- ZOOM DE IMAGENS ---
  document.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      if (e.target.closest('#productModal')) return;

      const modalBox = document.createElement('div');
      modalBox.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); display: flex; align-items: center; justify-content: center; z-index: 9999;";
      
      modalBox.innerHTML = `
        <button class="close-zoom-btn" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.2); border: none; color: #fff; font-size: 28px; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s;">&times;</button>
        <img src="${img.src}" style="max-width: 90%; max-height: 85%; border-radius: 8px; box-shadow: 0 5px 25px rgba(0,0,0,0.6); object-fit: contain;">
      `;

      const closeZoom = () => modalBox.remove();

      modalBox.querySelector('.close-zoom-btn').addEventListener('click', closeZoom);
      modalBox.addEventListener('click', (e) => {
        if (e.target === modalBox) closeZoom();
      });

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
     
