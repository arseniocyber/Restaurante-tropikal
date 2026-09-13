// ================= SCRIPT DO RESTAURANTE CALOR TROPICAL =================

document.addEventListener('DOMContentLoaded', () => {

  // --- DADOS DO MENU ---
  const menuData = [
    // Café / Chá
    { name: "Café", category: "Café / Chá", price: 100, description: "Café espresso tradicional.", image: "images/menu.jpg" },
    { name: "Café e leite", category: "Café / Chá", price: 150, description: "Café quente misturado com leite cremoso.", image: "images/menu.jpg" },
    { name: "Chá", category: "Café / Chá", price: 100, description: "Variedade de chás disponíveis.", image: "images/menu.jpg" },

    // Saladas
    { name: "Salada mista", category: "Saladas", price: 250, description: "Alface, tomate, cebola, pepino e cenoura fresca.", image: "images/menu.jpg" },
    { name: "Salada tropical", category: "Saladas", price: 350, description: "Mix de folhas, frutos da época e molho especial da casa.", image: "images/menu.jpg" },

    // Entradas
    { name: "Pão de alho", category: "Entradas", price: 150, description: "Pão tostado com pasta de alho e ervas.", image: "images/menu.jpg" },
    { name: "Camarão rissóis (unid)", category: "Entradas", price: 80, description: "Rissóis de camarão estaladiços.", image: "images/camarao.jpg" },

    // Snacks & Sandwich
    { name: "Prego no pão", category: "Snacks & Sandwich", price: 300, description: "Bife de vaca suculento no pão com batatas fritas.", image: "images/menu.jpg" },
    { name: "Hambúrguer tropical", category: "Snacks & Sandwich", price: 350, description: "Hambúrguer artesanal com queijo, alface e tomate.", image: "images/menu.jpg" },

    // Omeletes
    { name: "Omelete simples", category: "Omeletes", price: 200, description: "Omelete de ovos frescos com ervas.", image: "images/menu.jpg" },
    { name: "Omelete mista", category: "Omeletes", price: 280, description: "Omelete recheada com queijo e fiambre.", image: "images/menu.jpg" },

    // Combo's
    { name: "Combo Casal", category: "Combo's", price: 1200, description: "Seleção especial de mariscos e peixe para duas pessoas. Acompanha shamussas.", image: "images/seafood.jpg" },

    // Principais
    { name: "Peixe inteiro / Whole fish", category: "Principais", price: 650, description: "Peixe fresco do dia grelhado. Servido com arroz, batatas fritas e salada.", image: "images/peixe.jpg" },
    { name: "Camarão", category: "Principais", price: 850, description: "Camarão fresco grelhado. Servido com arroz, batatas fritas e salada.", image: "images/camarao.jpg" },
    { name: "1/4 frango / Chicken", category: "Principais", price: 450, description: "Frango assado à moda da casa. Servido com arroz, batatas fritas e salada.", image: "images/frango.jpg" },

    // Mariscos
    { name: "Marisco / Seafood p2 pax", category: "Mariscos", price: 1500, description: "Prato misto de mariscos frescos para partilhar. Acompanha shamussas.", image: "images/seafood.jpg" },

    // Bebidas & Outros
    { name: "Refrescos", category: "Refrescos", price: 100, description: "Refrigerantes variados lata 330ml.", image: "images/menu.jpg" },
    { name: "Caipirinha", category: "Cocktail", price: 350, description: "Cocktail refrescante com limão, açúcar e aguardente/cachaça.", image: "images/menu.jpg" }
  ];

  let cart = [];
     // --- SELECIONAR ELEMENTOS DO DOM ---
  const menuGrid = document.getElementById('menuGrid');
  const filtersContainer = document.getElementById('filters');
  const searchInput = document.getElementById('menuSearch');
  
  const productModal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');
  const modalProductName = document.getElementById('modalProductName');
  const modalProductCategory = document.getElementById('modalProductCategory');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductDescription = document.getElementById('modalProductDescription');
  const modalProductImage = document.getElementById('modalProductImage');
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

  // --- RENDERIZAR MENU ---
  function renderMenu(items) {
    menuGrid.innerHTML = '';
    if (items.length === 0) {
      menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777;">Nenhum item encontrado.</p>';
      return;
    }

    items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'menu-card reveal active';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy">
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
      btnDirect.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(item);
      });

      menuGrid.appendChild(card);
    });
  }
     // --- MODAL DE PRODUTO ---
  function openModal(item) {
    currentSelectedItem = item;
    modalProductName.textContent = item.name;
    modalProductCategory.textContent = item.category;
    modalProductPrice.textContent = `${item.price} MTS`;
    modalProductDescription.textContent = item.description;
    modalProductImage.src = item.image;
    productModal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal() {
    productModal.classList.remove('active');
    overlay.classList.remove('active');
  }

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', () => {
    closeModal();
    closeCart();
  });

  modalAddButton.addEventListener('click', () => {
    if (currentSelectedItem) {
      addToCart(currentSelectedItem);
      closeModal();
      openCart();
    }
  });

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
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItemsCount;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <span>🛒</span>
          <p>O seu pedido está vazio.</p>
          <a href="#menu" id="emptyCartLink" class="text-link">Escolher pratos</a>
        </div>
      `;
      document.getElementById('emptyCartLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        closeCart();
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
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
            <strong style="font-size: 15px; color: #fff;">${item.name}</strong>
            <div style="font-size: 13px; color: #ff5c5c; margin-top: 2px;">${item.price} MTS x ${item.quantity}</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
          <button class="btn-qty decrease" data-index="${index}" style="background: #444; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">-</button>
          <span style="color: #fff; font-weight: bold; min-width: 20px; text-align: center;">${item.quantity}</span>
          <button class="btn-qty increase" data-index="${index}" style="background: #444; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>
          <button class="btn-remove" data-index="${index}" style="background: #d9534f; color: #fff; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; margin-left: auto;" title="Remover item">×</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItemEl);
    });

    cartTotal.textContent = `${totalPrice} MTS`;

    cartItemsContainer.querySelectorAll('.increase').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        cart[idx].quantity += 1;
        updateCartUI();
      });
    });

    cartItemsContainer.querySelectorAll('.decrease').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
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
        const idx = e.target.getAttribute('data-index');
        cart.splice(idx, 1);
        updateCartUI();
      });
    });
     }
    function openCart() {
    cartDrawer.classList.add('active');
    overlay.classList.add('active');
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    overlay.classList.remove('active');
  }

  openCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);

  // --- FILTROS E PESQUISA ---
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

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = menuData.filter(item => 
      item.name.toLowerCase().includes(term) || 
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
    renderMenu(filtered);
  });

  // --- BOTÕES RÁPIDOS DOS DESTAQUES ---
  document.querySelectorAll('.quick-order').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      const foundItem = menuData.find(i => i.name.toLowerCase() === name.toLowerCase());
      if (foundItem) {
        addToCart(foundItem);
        openCart();
      } else {
        addToCart({ name: name, price: 500, category: 'Especial', description: 'Prato especial do chef.', image: 'images/menu.jpg' });
        openCart();
      }
    });
  });

  // --- ENVIAR PEDIDO VIA WHATSAPP ---
  sendWhatsAppBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('O seu pedido está vazio!');
      return;
    }

    const customerName = customerNameInput.value.trim() || 'Cliente';
    const customerNote = customerNoteInput.value.trim();

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

  // Inicializar menu na carga da página
  renderMenu(menuData);
  updateCartUI();

  // Menu mobile toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
                                     
