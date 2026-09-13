// ================= SCRIPT COMPLETO (PARTE 1/2) - RESTAURANTE CALOR TROPICAL =================

document.addEventListener('DOMContentLoaded', () => {

  // --- DADOS DO MENU EXATOS FORNECIDOS PELO UTILIZADOR ---
  const menuData = [
    // Coffee/ Tea
    { name: "Café eleite / coffee with Milk", category: "Coffee/ Tea", price: 150.00, description: "Café quente com leite.", emoji: "☕" },
    { name: "Chá e leite / Tea with milk", category: "Coffee/ Tea", price: 125.00, description: "Chá tradicional com leite.", emoji: "🫖" },
    { name: "Capuchinho / cappuccino", category: "Coffee/ Tea", price: 150.00, description: "Cappuccino cremoso.", emoji: "☕" },
    { name: "Expresso / Express", category: "Coffee/ Tea", price: 150.00, description: "Café expresso forte.", emoji: "☕" },
    { name: "Chocolate quente / hot choc", category: "Coffee/ Tea", price: 175.00, description: "Chocolate quente reconfortante.", emoji: "🍫" },

    // Saladas/salads
    { name: "Salada grega / Greek salad", category: "Saladas/salads", price: 250.00, description: "Alface, tomate, pepino, azeitonas e queijo feta.", emoji: "🥗" },
    { name: "Salada de Atum / Tuna salad", category: "Saladas/salads", price: 250.00, description: "Salada fresca com atum selecionado.", emoji: "🥗" },
    { name: "Salada Russa / Russian salad", category: "Saladas/salads", price: 250.00, description: "Salada tradicional de legumes e maionese.", emoji: "🥗" },
    { name: "Salada tropical / Tropical salad", category: "Saladas/salads", price: 200.00, description: "Mix de folhas e frutos da época.", emoji: "🥗" },

    // Entradas/starters
    { name: "Shamussas de peixe (uni)", category: "Entradas/starters", price: 220.00, description: "Shamussa de peixe estaladiça.", emoji: "🥟" },
    { name: "Caranguejo ao Natural / Crab", category: "Entradas/starters", price: 500.00, description: "Caranguejo fresco ao natural.", emoji: "🦀" },
    { name: "Pão de alho / Garlic bread", category: "Entradas/starters", price: 150.00, description: "Pão tostado com pasta de alho.", emoji: "🥖" },
    { name: "Rissóis de camarão (4 uni)", category: "Entradas/starters", price: 220.00, description: "Porção de 4 rissóis de camarão.", emoji: "🍤" },
    { name: "Camarão alhinho", category: "Entradas/starters", price: 550.00, description: "Camarão salteado em molho de alho.", emoji: "🍤" },
    { name: "Caril de camarão", category: "Entradas/starters", price: 880.00, description: "Caril rico de camarão.", emoji: "🍛" },
    { name: "Caril de caranguejo", category: "Entradas/starters", price: 650.00, description: "Caril tradicional de caranguejo.", emoji: "🍛" },

    // Snacks & sandwich
    { name: "Tosta de queijo / cheese toast", category: "Snacks & sandwich", price: 250.00, description: "Tosta quente com queijo fundido.", emoji: "🥪" },
    { name: "Tosta mista / HAM & CHEESE TOAST", category: "Snacks & sandwich", price: 300.00, description: "Tosta de fiambre e queijo.", emoji: "🥪" },
    { name: "Prego no pão / steak N Roll", category: "Snacks & sandwich", price: 285.00, description: "Bife de vaca suculento no pão.", emoji: "🍔" },
    { name: "Cheese N Bacon sandwich", category: "Snacks & sandwich", price: 300.00, description: "Sandes com queijo e bacon.", emoji: "🥪" },
    { name: "Chicken Mayo / hamburger", category: "Snacks & sandwich", price: 300.00, description: "Hambúrguer de frango com maionese.", emoji: "🍔" },

    // Omeletes
    { name: "Omelete simples", category: "Omeletes", price: 200.00, description: "Omelete de ovos frescos.", emoji: "🍳" },
    { name: "Omelete de queijo", category: "Omeletes", price: 200.00, description: "Omelete recheada com queijo.", emoji: "🍳" },
    { name: "Omelete misto", category: "Omeletes", price: 250.00, description: "Omelete com queijo e fiambre.", emoji: "🍳" },
    { name: "Pequeno almoço / breakfast", category: "Omeletes", price: 425.00, description: "Pequeno-almoço completo da casa.", emoji: "🍳" },

    // Combo's
    { name: "Chicken & calamari", category: "Combo's", price: 875.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },
    { name: "Chicken & prawns", category: "Combo's", price: 875.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },
    { name: "Prawns & calamari", category: "Combo's", price: 875.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },
    { name: "Prawns & fish fillet", category: "Combo's", price: 875.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },
    { name: "Calamari & fish fillet", category: "Combo's", price: 875.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },
    { name: "Chicken & fish fillet", category: "Combo's", price: 875.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },
    { name: "1/2 frango & prawns", category: "Combo's", price: 1325.00, description: "Servido com 1 ou 2 shamussas.", emoji: "🍱" },

    // Principais pratos
    { name: "1/4 frango / chicken", category: "Principais pratos", price: 305.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🍗" },
    { name: "1/2 frango / chicken", category: "Principais pratos", price: 450.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🍗" },
    { name: "Frango inteiro / chicken", category: "Principais pratos", price: 850.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🍗" },
    { name: "Peixe inteiro / whole fish", category: "Principais pratos", price: 850.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🐟" },
    { name: "Filete de peixe", category: "Principais pratos", price: 600.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🐟" },
    { name: "Lula grelhada", category: "Principais pratos", price: 550.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🦑" },
    { name: "Posta de peixe", category: "Principais pratos", price: 500.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🐟" },
    { name: "Panado / fish fingers", category: "Principais pratos", price: 550.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🐟" },
    { name: "Camarão", category: "Principais pratos", price: 895.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🦐" },
    { name: "Bife / Beef", category: "Principais pratos", price: 850.00, description: "Servido com arroz, batatas fritas e salada.", emoji: "🥩" },

    // Mariscos/seafood's
    { name: "4 (fish, prawns, calamari)", category: "Mariscos/seafood's", price: 1525.00, description: "Seleção mista. Servido com 1 ou 2 shamussas.", emoji: "🦞" },
    { name: "Marisco / seafood p2 pax", category: "Mariscos/seafood's", price: 2500.00, description: "Prato de mariscos para 2 pessoas. Servido com 1 ou 2 shamussas.", emoji: "🦞" },
    { name: "Lobster & 6 prawns", category: "Mariscos/seafood's", price: 1975.00, description: "Lagosta e 6 camarões. Servido com 1 ou 2 shamussas.", emoji: "🦞" },
    { name: "Marisco / Seafood for 3 pax", category: "Mariscos/seafood's", price: 3500.00, description: "Prato de mariscos para 3 pessoas. Servido com 1 ou 2 shamussas.", emoji: "🦞" },
    { name: "12 camarões / prawns with chips", category: "Mariscos/seafood's", price: 1275.00, description: "12 camarões com batatas fritas. Servido com 1 ou 2 shamussas.", emoji: "🦐" }
  ];
   // ================= SCRIPT COMPLETO (PARTE 2/2) - RESTAURANTE CALOR TROPICAL =================

  // --- RESTANTE DOS ITENS (Bebidas, Cocktails, Aperitivos, Digestivos, Shoots, Vinhos) ---
  const bebidasData = [
    { name: "330 ml", category: "Refrescos/coldrinks", price: 70.00, description: "Refrigerante lata 330ml.", emoji: "🥤" },
    { name: "Soda & Tônica", category: "Refrescos/coldrinks", price: 75.00, description: "Água tónica ou soda.", emoji: "🥤" },
    { name: "Appletiser", category: "Refrescos/coldrinks", price: 100.00, description: "Bebida espumante de maçã.", emoji: "🧃" },

    { name: "Sumo cappy", category: "Sumos/águas", price: 125.00, description: "Sumo Cappy.", emoji: "🧃" },
    { name: "Sumo 500 ml", category: "Sumos/águas", price: 100.00, description: "Sumo natural 500ml.", emoji: "🧃" },
    { name: "Sumo 1l", category: "Sumos/águas", price: 165.00, description: "Jarro de sumo 1L.", emoji: "🧃" },
    { name: "Água 500ml", category: "Sumos/águas", price: 50.00, description: "Água mineral natural 500ml.", emoji: "💧" },
    { name: "Água 1,5l", category: "Sumos/águas", price: 95.00, description: "Água mineral natural 1.5L.", emoji: "💧" },
    { name: "Água gaseificada", category: "Sumos/águas", price: 100.00, description: "Água com gás.", emoji: "💧" },

    { name: "JC lata 250ml", category: "Cervejas/Beers/Ciders", price: 150.00, description: "Cerveja JC lata.", emoji: "🍺" },
    { name: "Ciders / cidras", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Sidra refrescante.", emoji: "🍺" },
    { name: "Heineken", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Cerveja Heineken.", emoji: "🍺" },
    { name: "Breezer / Brutal", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Bebida mista alcoólica.", emoji: "🍺" },
    { name: "Corona", category: "Cervejas/Beers/Ciders", price: 120.00, description: "Cerveja Corona.", emoji: "🍺" },
    { name: "Txilar / preta", category: "Cervejas/Beers/Ciders", price: 85.00, description: "Cerveja preta Txilar.", emoji: "🍺" },
    { name: "Manica / impala 330ml", category: "Cervejas/Beers/Ciders", price: 80.00, description: "Cerveja Manica ou Impala 330ml.", emoji: "🍺" },
    { name: "Fly-fishing / spin", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Bebida alcoólica.", emoji: "🍺" },
    { name: "Castle lite", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Cerveja Castle Lite.", emoji: "🍺" },
    { name: "Castle D. Malte", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Castle Milk Stout.", emoji: "🍺" },
    { name: "Bermin", category: "Cervejas/Beers/Ciders", price: 125.00, description: "Bebida especial.", emoji: "🍺" },
    { name: "Red bull", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Bebida energética Red Bull.", emoji: "⚡" },
    { name: "Monster", category: "Cervejas/Beers/Ciders", price: 100.00, description: "Bebida energética Monster.", emoji: "⚡" },

    { name: "Vodka / sumo", category: "Cocktail", price: 150.00, description: "Vodka com sumo.", emoji: "🍹" },
    { name: "R & R", category: "Cocktail", price: 150.00, description: "R&R clássico.", emoji: "🍹" },
    { name: "Passion fruit / Sprite", category: "Cocktail", price: 125.00, description: "Cocktail de maracujá com Sprite.", emoji: "🍹" },
    { name: "Milk Pedro", category: "Cocktail", price: 325.00, description: "Cocktail especial da casa.", emoji: "🍹" },
    { name: "Caipirinha", category: "Cocktail", price: 350.00, description: "Caipirinha tradicional de limão.", emoji: "🍹" },

    { name: "May fair", category: "Aperitivos", price: 125.00, description: "Bebida aperitiva.", emoji: "🍸" },
    { name: "Gin Gordon / Belgravia", category: "Aperitivos", price: 80.00, description: "Dose de Gin Gordon ou Belgravia.", emoji: "🍸" },
    { name: "Gin Tanqueray", category: "Aperitivos", price: 100.00, description: "Dose de Gin Tanqueray.", emoji: "🍸" },
    { name: "Whisky Novo", category: "Aperitivos", price: 100.00, description: "Whisky standard.", emoji: "🥃" },
    { name: "Whisky velho", category: "Aperitivos", price: 150.00, description: "Whisky reserva / velho.", emoji: "🥃" },
    { name: "Captain Morgan / Bacardi", category: "Aperitivos", price: 100.00, description: "Rum selecionado.", emoji: "🥃" },
    { name: "Klipdrift", category: "Aperitivos", price: 80.00, description: "Brandy Klipdrift.", emoji: "🥃" },
    { name: "Amarula DBL", category: "Aperitivos", price: 190.00, description: "Dose dupla de Amarula.", emoji: "🥃" },
    { name: "Vodka Absolut", category: "Aperitivos", price: 100.00, description: "Vodka Absolut.", emoji: "🍸" },
    { name: "Vodka Smirnoff", category: "Aperitivos", price: 80.00, description: "Vodka Smirnoff.", emoji: "🍸" },

    { name: "1920 / s.Domingos", category: "Digestivos", price: 150.00, description: "Aguardente digestiva.", emoji: "🌿" },
    { name: "Vinho do porto", category: "Digestivos", price: 150.00, description: "Taça de Vinho do Porto.", emoji: "🍷" },

    { name: "Sambuca", category: "Shoots", price: 150.00, description: "Shoot de Sambuca.", emoji: "🥃" },
    { name: "Tequila", category: "Shoots", price: 150.00, description: "Shoot de Tequila com limão e sal.", emoji: "🥃" },
    { name: "Vinho do porto (Shoot/Dose)", category: "Shoots", price: 300.00, description: "Dose especial de Vinho do Porto.", emoji: "🍷" },

    { name: "Vinho a copo", category: "Vinhos/wines", price: 150.00, description: "Taça de vinho da casa.", emoji: "🍷" },
    { name: "Boschendal / Kadete", category: "Vinhos/wines", price: 1350.00, description: "Garrafa de vinho selecionado.", emoji: "🍷" },
    { name: "F.Bostsrd / Roodenberg", category: "Vinhos/wines", price: 1250.00, description: "Garrafa de vinho.", emoji: "🍷" },
    { name: "G.Carlou / C.sauvignon", category: "Vinhos/wines", price: 1350.00, description: "Garrafa Cabernet Sauvignon.", emoji: "🍷" },
    { name: "Cabriz, gatão, Graca", category: "Vinhos/wines", price: 850.00, description: "Garrafa de vinho português/regional.", emoji: "🍷" },
    { name: "G.Garcia, Aveleda", category: "Vinhos/wines", price: 850.00, description: "Garrafa de vinho branco Aveleda.", emoji: "🍾" },
    { name: "Portada", category: "Vinhos/wines", price: 850.00, description: "Garrafa de Vinho Portada.", emoji: "🍷" },
    { name: "Chocolate Bloc", category: "Vinhos/wines", price: 1750.00, description: "Garrafa Chocolate Block.", emoji: "🍷" },
    { name: "JC - Keuroux grf", category: "Vinhos/wines", price: 650.00, description: "Garrafa JC Le Roux.", emoji: "🍾" },
    { name: "Krone, Tosti, Anabela", category: "Vinhos/wines", price: 1100.00, description: "Espumante / Garrafa especial.", emoji: "🍾" }
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

  // --- ZOOM DE IMAGENS COM BOTÃO 'X' NO TOPO ---
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
    
