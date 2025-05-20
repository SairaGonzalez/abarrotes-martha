// Funcionalidad del Catálogo de Productos
function initCatalog() {
  // Datos de ejemplo de productos 
  const products = [
    { id: 1, name: "Manzanas", price: 25.50, category: "Frutas", brand: "Sin Marca", rating: 4, description: "Manzanas rojas frescas por kilo.", image: "https://via.placeholder.com/300x300?text=Manzanas" },
    { id: 2, name: "Plátanos", price: 18.00, category: "Frutas", brand: "Sin Marca", rating: 5, description: "Plátanos maduros por kilo.", image: "https://via.placeholder.com/300x300?text=Plátanos" },
    { id: 3, name: "Leche Entera", price: 32.50, category: "Lácteos", brand: "Lala", rating: 4, description: "Leche entera pasteurizada 1 litro.", image: "https://via.placeholder.com/300x300?text=Leche+Lala" },
    { id: 4, name: "Yogur Natural", price: 15.00, category: "Lácteos", brand: "Lala", rating: 4, description: "Yogur natural sin azúcar 250g.", image: "https://via.placeholder.com/300x300?text=Yogur+Lala" },
    { id: 5, name: "Pan Blanco", price: 38.00, category: "Cereales", brand: "Bimbo", rating: 3, description: "Pan blanco grande 680g.", image: "https://via.placeholder.com/300x300?text=Pan+Bimbo" },
    { id: 6, name: "Papas Sabritas", price: 18.50, category: "Botanas", brand: "Sabritas", rating: 5, description: "Papas fritas sabor original 45g.", image: "https://via.placeholder.com/300x300?text=Sabritas" },
    { id: 7, name: "Jugo de Naranja", price: 22.00, category: "Jugos", brand: "Jumex", rating: 4, description: "Jugo de naranja 1 litro.", image: "https://via.placeholder.com/300x300?text=Jugo+Jumex" },
    { id: 8, name: "Atún en Lata", price: 28.00, category: "Enlatados", brand: "Nobel", rating: 4, description: "Atún en agua 140g.", image: "https://via.placeholder.com/300x300?text=Atún+Nobel" },
    { id: 9, name: "Zanahorias", price: 12.00, category: "Verduras", brand: "Sin Marca", rating: 4, description: "Zanahorias frescas por kilo.", image: "https://via.placeholder.com/300x300?text=Zanahorias" },
    { id: 10, name: "Galletas Oreo", price: 25.00, category: "Postres", brand: "Bimbo", rating: 5, description: "Galletas sabor chocolate 156g.", image: "https://via.placeholder.com/300x300?text=Oreo" },
    { id: 11, name: "Queso Panela", price: 85.00, category: "Lácteos", brand: "Lala", rating: 4, description: "Queso panela 400g.", image: "https://via.placeholder.com/300x300?text=Queso+Panela" },
    { id: 12, name: "Fresas", price: 45.00, category: "Frutas", brand: "Sin Marca", rating: 4, description: "Fresas frescas por kilo.", image: "https://via.placeholder.com/300x300?text=Fresas" },
    { id: 13, name: "Cereal Zucaritas", price: 65.00, category: "Cereales", brand: "Bimbo", rating: 3, description: "Cereal de maíz azucarado 500g.", image: "https://via.placeholder.com/300x300?text=Zucaritas" },
    { id: 14, name: "Palomitas Act II", price: 15.50, category: "Botanas", brand: "Bimbo", rating: 4, description: "Palomitas para microondas mantequilla.", image: "https://via.placeholder.com/300x300?text=Palomitas" },
    { id: 15, name: "Lechuga", price: 10.00, category: "Verduras", brand: "Sin Marca", rating: 4, description: "Lechuga romana fresca por pieza.", image: "https://via.placeholder.com/300x300?text=Lechuga" },
    { id: 16, name: "Pastelito Gansito", price: 12.00, category: "Postres", brand: "Bimbo", rating: 5, description: "Pastelito cubierto de chocolate.", image: "https://via.placeholder.com/300x300?text=Gansito" },
    { id: 17, name: "Chiles Jalapeños", price: 35.00, category: "Enlatados", brand: "Nobel", rating: 4, description: "Chiles jalapeños en escabeche 220g.", image: "https://via.placeholder.com/300x300?text=Jalapeños" },
    { id: 18, name: "Jugo de Manzana", price: 24.00, category: "Jugos", brand: "Jumex", rating: 4, description: "Jugo de manzana 1 litro.", image: "https://via.placeholder.com/300x300?text=Jugo+Manzana" },
    { id: 19, name: "Tomates", price: 20.00, category: "Verduras", brand: "Sin Marca", rating: 4, description: "Tomates rojos por kilo.", image: "https://via.placeholder.com/300x300?text=Tomates" },
    { id: 20, name: "Yogur con Fruta", price: 18.00, category: "Lácteos", brand: "Lala", rating: 4, description: "Yogur con trozos de fruta 250g.", image: "https://via.placeholder.com/300x300?text=Yogur+Fruta" }
  ];

  // Variables de estado del catálogo
  let currentPage = 1;
  let itemsPerPage = 16;
  let filteredProducts = [...products];

  // Elementos del DOM del catálogo
  const productsContainer = document.getElementById('products-container');
  const paginationContainer = document.getElementById('pagination');
  const itemsPerPageSelect = document.getElementById('items-per-page');
  const applyFiltersButton = document.getElementById('apply-filters');
  const clearFiltersButton = document.getElementById('clear-filters');

  // Funciones del catálogo
  function renderProducts() {
    productsContainer.innerHTML = '';
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
  
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
      
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
            </div>
        `;
      
        productsContainer.appendChild(productCard);
    });
  
    productsContainer.className = 'products-grid';
    if (itemsPerPage === 16) {
        productsContainer.classList.add('grid-4x4');
    } else if (itemsPerPage === 9) {
        productsContainer.classList.add('grid-3x3');
    } else if (itemsPerPage === 4) {
        productsContainer.classList.add('grid-2x2');
    }
  }

  function renderPagination() {
    paginationContainer.innerHTML = '';
  
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        currentPage--;
        renderProducts();
        renderPagination();
    });
    paginationContainer.appendChild(prevButton);
  
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
            renderPagination();
        });
        paginationContainer.appendChild(pageButton);
    }
  
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        currentPage++;
        renderProducts();
        renderPagination();
    });
    paginationContainer.appendChild(nextButton);
  }

  function handleItemsPerPageChange(e) {
    itemsPerPage = parseInt(e.target.value);
    currentPage = 1;
    renderProducts();
    renderPagination();
  }

  function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
    const priceRange = document.querySelector('input[name="price"]:checked').value;
  
    filteredProducts = products.filter(product => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false;
        }
      
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
            return false;
        }
      
        if (priceRange !== 'all') {
            const [min, max] = priceRange.split('-').map(Number);
            if (product.price < min || product.price > max) {
                return false;
            }
        }
      
        return true;
    });
  
    currentPage = 1;
    renderProducts();
    renderPagination();
  }

  function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
  
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = radio.value === 'all';
    });
  
    filteredProducts = [...products];
    currentPage = 1;
    renderProducts();
    renderPagination();
  }

    // Inicialización del catálogo
    renderProducts();
    renderPagination();
    
    itemsPerPageSelect.addEventListener('change', handleItemsPerPageChange);
    applyFiltersButton.addEventListener('click', applyFilters);
    clearFiltersButton.addEventListener('click', clearFilters);
}

// =============================================
// Funcionalidad del Chat

function initChat() {
  const chatToggle = document.getElementById("chat-toggle");
  const chatWindow = document.getElementById("ventana-chat");

  if (chatToggle && chatWindow) {
      chatToggle.addEventListener("click", () => {
          chatWindow.classList.toggle("show");
      });
  }
}

// =============================================
// Funcionalidad del Carrusel de Promociones

function initCarousel() {
  const carrusel = document.getElementById("carousel-promociones");
  const btnIzq = document.querySelector(".flecha.izquierda");
  const btnDer = document.querySelector(".flecha.derecha");

  if (carrusel && btnIzq && btnDer) {
      btnIzq.addEventListener("click", () => {
          carrusel.scrollBy({ left: -300, behavior: "smooth" });
      });

      btnDer.addEventListener("click", () => {
          carrusel.scrollBy({ left: 300, behavior: "smooth" });
      });
  }
}

// =============================================
// Función para cambiar la imagen principal
function cambiarImagen(elemento) {
    const imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = elemento.src;
    
    // Actualizar clases activas
    document.querySelectorAll('.imagen-secundaria').forEach(img => {
        img.classList.remove('activa');
    });
    elemento.classList.add('activa');
}

// =============================================
// Función para cambiar la cantidad
function cambiarCantidad(cambio) {
    const inputCantidad = document.getElementById('cantidad');
    let nuevaCantidad = parseInt(inputCantidad.value) + cambio;
    
    if (nuevaCantidad < 1) nuevaCantidad = 1;
    if (nuevaCantidad > 10) nuevaCantidad = 10;
    
    inputCantidad.value = nuevaCantidad;
}

// =============================================
// Función para cambiar el metodo de pago
function cambiarMetodoPago() {
    const toggle = document.getElementById('toggle-pago');
    const selectorTarjeta = document.getElementById('seleccion-tarjeta');
    const textoEfectivo = document.getElementById('texto-efectivo');
    const textoElectronico = document.getElementById('texto-electronico');
    
    if (toggle.checked) {
        // Pago electrónico seleccionado
        selectorTarjeta.classList.remove('desactivado');
        textoEfectivo.classList.remove('activo');
        textoElectronico.classList.add('activo');
    } else {
        // Efectivo seleccionado
        selectorTarjeta.classList.add('desactivado');
        textoEfectivo.classList.add('activo');
        textoElectronico.classList.remove('activo');
        document.getElementById('tarjetas').value = '';
    }
}

// =============================================
// Inicialización de todas las funcionalidades

document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidades que se ejecutan en todas las páginas
  initChat();
  initCarousel();
  
  // Inicia el catálogo si se esta en la página de productos
  if (document.getElementById('products-container')) {
      initCatalog();
  }
});
