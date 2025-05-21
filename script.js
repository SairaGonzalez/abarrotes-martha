// Funcionalidad del Catálogo de Productos
function initCatalog() {
  // Datos de ejemplo de productos
  const products = [
    {
      id: 1,
      name: "Escudo antibacterial",
      price: 15.0,
      category: "Higiene",
      brand: "Escudo",
      rating: 4,
      description: "Barra de jabón corporal 150g",
      image: "imagenes/productos/escudo.png",
    },
    {
      id: 2,
      name: "Corn Flakes",
      price: 55.0,
      category: "Frutas",
      brand: "Kellog's",
      rating: 5,
      description: "Cereal Corn Flakes 370g",
      image: "imagenes/productos/cereal.png",
    },
    {
      id: 3,
      name: "Leche Entera",
      price: 32.5,
      category: "Lácteos",
      brand: "Lala",
      rating: 4,
      description: "Leche entera pasteurizada 3,78L",
      image: "imagenes/productos/lechelala.png",
    },
    {
      id: 4,
      name: "Yogur de manzana",
      price: 11.0,
      category: "Lácteos",
      brand: "Lala",
      rating: 4,
      description: "Yogur bebible de manzana 220g",
      image: "imagenes/productos/yogur.png",
    },
    {
      id: 5,
      name: "Chip's Jalapeño",
      price: 17.0,
      category: "Botanas",
      brand: "Barcel",
      rating: 4,
      description: "Papas fritas sabor jalapeño 170g",
      image: "imagenes/productos/chips.png",
    },
    {
      id: 6,
      name: "Waffer Natta",
      price: 25.0,
      category: "Galletas",
      brand: "Mac'Ma",
      rating: 5,
      description: "Galletas con relleno sabor nata 70g",
      image: "imagenes/productos/galletas.png",
    },
    {
      id: 7,
      name: "Jugo de Durazno",
      price: 17.0,
      category: "Jugos",
      brand: "Del Valle",
      rating: 4,
      description: "Jugo de durazno 413ml",
      image: "imagenes/productos/jugovalle.png",
    },
    {
      id: 8,
      name: "Sopa de Municiones Knorr",
      price: 17.0,
      category: "Sopas",
      brand: "Knorr",
      rating: 4,
      description: "Sobre de sopa 95g",
      image: "imagenes/productos/knorr.png",
    },
    {
      id: 9,
      name: "Mantecadas Bimbo",
      price: 15.0,
      category: "Pan dulce",
      brand: "Bimbo",
      rating: 4,
      description: "Mantecadas con nuez 184,5g",
      image: "imagenes/productos/mantecadas.png",
    },
    {
      id: 10,
      name: "Sopa Maruchan",
      price: 17.0,
      category: "Sopas",
      brand: "Maruchan",
      rating: 5,
      description: "Sopa instantánea con camarón, limón y habanero 64g",
      image: "imagenes/productos/maruchan.png",
    },
    {
      id: 11,
      name: "Pan Napolitano",
      price: 25.0,
      category: "Pan dulce",
      brand: "Marinela",
      rating: 4,
      description: "Pastelito de naranja con pasas 140g",
      image: "imagenes/productos/Napolitanos.png",
    },
    {
      id: 12,
      name: "Nito",
      price: 15.0,
      category: "Pan dulce",
      brand: "Bimbo",
      rating: 4,
      description: "Pastelito con cubierta y relleno de chocolate 62g",
      image: "imagenes/productos/nito.png",
    },
    {
      id: 13,
      name: "Roles Bimbo",
      price: 25.0,
      category: "Pan dulce",
      brand: "Bimbo",
      rating: 3,
      description: "Roles de canela glaseados 205g",
      image: "imagenes/productos/roles.png",
    },
    {
      id: 14,
      name: "Ruffles Queso",
      price: 17.0,
      category: "Botanas",
      brand: "Ruffles",
      rating: 4,
      description: "Papas fritas sabor queso 50g",
      image: "imagenes/productos/rufles.png",
    },
    {
      id: 15,
      name: "Electrolit Manzana",
      price: 20.0,
      category: "Bebidas",
      brand: "Electrolit",
      rating: 3,
      description: "Electrolitos orales sabor manzana 625ml",
      image: "imagenes/productos/suero.png",
    },
    {
      id: 16,
      name: "Takis Blue Heat",
      price: 16.0,
      category: "Botanas",
      brand: "Barcel",
      rating: 5,
      description: "Papas fritas con chile y limón 65g",
      image: "imagenes/productos/takis.png",
    },
    {
      id: 17,
      name: "Takis Fuego",
      price: 16.0,
      category: "Botanas",
      brand: "Barcel",
      rating: 4,
      description: "Papas fritas con chile y limón 65g",
      image: "imagenes/productos/takisfuego.png",
    },
    {
      id: 18,
      name: "Tartinas Tía Rosa",
      price: 18.0,
      category: "Galletas",
      brand: "Tía Rosa",
      rating: 3,
      description: "Galletas sabor fresa 100g",
      image: "imagenes/productos/tartinas.png",
    },
    {
      id: 19,
      name: "Tostadas Milpa Real",
      price: 37.0,
      category: "Alimentos",
      brand: "Milpa Real",
      rating: 4,
      description: "Tostadas fritas de maíz 360g",
      image: "imagenes/productos/tostadas.png",
    },
    {
      id: 20,
      name: "Wapas de Queso",
      price: 15.0,
      category: "Botanas",
      brand: "Barcel",
      rating: 4,
      description: "Papas fritas sabor queso 75g",
      image: "imagenes/productos/wapas.png",
    },
  ];

  // Variables de estado del catálogo
  let currentPage = 1;
  let itemsPerPage = 16;
  let filteredProducts = [...products];

  // Elementos del DOM del catálogo
  const productsContainer = document.getElementById("products-container");
  const paginationContainer = document.getElementById("pagination");
  const itemsPerPageSelect = document.getElementById("items-per-page");
  const applyFiltersButton = document.getElementById("apply-filters");
  const clearFiltersButton = document.getElementById("clear-filters");

  // Funciones del catálogo
  function renderProducts() {
    productsContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    productsToShow.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-rating">${"★".repeat(
                  product.rating
                )}${"☆".repeat(5 - product.rating)}</div>
            </div>
        `;

      productsContainer.appendChild(productCard);
    });

    productsContainer.className = "products-grid";
    if (itemsPerPage === 16) {
      productsContainer.classList.add("grid-4x4");
    } else if (itemsPerPage === 9) {
      productsContainer.classList.add("grid-3x3");
    } else if (itemsPerPage === 4) {
      productsContainer.classList.add("grid-2x2");
    }
  }

  function renderPagination() {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const prevButton = document.createElement("button");
    prevButton.textContent = "Anterior";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
      currentPage--;
      renderProducts();
      renderPagination();
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add("active");
      }
      pageButton.addEventListener("click", () => {
        currentPage = i;
        renderProducts();
        renderPagination();
      });
      paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Siguiente";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
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
    const selectedCategories = Array.from(
      document.querySelectorAll('input[name="category"]:checked')
    ).map((cb) => cb.value);
    const selectedBrands = Array.from(
      document.querySelectorAll('input[name="brand"]:checked')
    ).map((cb) => cb.value);
    const priceRange = document.querySelector(
      'input[name="price"]:checked'
    ).value;

    filteredProducts = products.filter((product) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map(Number);
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
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = radio.value === "all";
    });

    filteredProducts = [...products];
    currentPage = 1;
    renderProducts();
    renderPagination();
  }

  // Inicialización del catálogo
  renderProducts();
  renderPagination();

  itemsPerPageSelect.addEventListener("change", handleItemsPerPageChange);
  applyFiltersButton.addEventListener("click", applyFilters);
  clearFiltersButton.addEventListener("click", clearFilters);
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

  const desplazamiento = 1020;

  if (carrusel && btnIzq && btnDer) {
    btnIzq.addEventListener("click", () => {
      carrusel.scrollBy({ left: -desplazamiento, behavior: "smooth" });
    });

    btnDer.addEventListener("click", () => {
      carrusel.scrollBy({ left: desplazamiento, behavior: "smooth" });
    });
  }
}

// =============================================
// Función para cambiar la imagen principal
function cambiarImagen(elemento) {
  const imagenPrincipal = document.getElementById("imagen-principal");
  imagenPrincipal.src = elemento.src;

  // Actualizar clases activas
  document.querySelectorAll(".imagen-secundaria").forEach((img) => {
    img.classList.remove("activa");
  });
  elemento.classList.add("activa");
}

// =============================================
// Función para cambiar la cantidad
function cambiarCantidad(cambio) {
  const inputCantidad = document.getElementById("cantidad");
  let nuevaCantidad = parseInt(inputCantidad.value) + cambio;

  if (nuevaCantidad < 1) nuevaCantidad = 1;
  if (nuevaCantidad > 10) nuevaCantidad = 10;

  inputCantidad.value = nuevaCantidad;
}

// =============================================
// Función para cambiar el metodo de pago
function cambiarMetodoPago() {
  const toggle = document.getElementById("toggle-pago");
  const selectorTarjeta = document.getElementById("seleccion-tarjeta");
  const textoEfectivo = document.getElementById("texto-efectivo");
  const textoElectronico = document.getElementById("texto-electronico");

  if (toggle.checked) {
    // Pago electrónico seleccionado
    selectorTarjeta.classList.remove("desactivado");
    textoEfectivo.classList.remove("activo");
    textoElectronico.classList.add("activo");
  } else {
    // Efectivo seleccionado
    selectorTarjeta.classList.add("desactivado");
    textoEfectivo.classList.add("activo");
    textoElectronico.classList.remove("activo");
    document.getElementById("tarjetas").value = "";
  }
}

// =============================================
// FAQs
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentNode;
    item.classList.toggle("active");

    // Cerrar otros items abiertos
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
  });
});

// =============================================
// Inicialización de todas las funcionalidades

document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidades que se ejecutan en todas las páginas
  initChat();
  initCarousel();

  // Inicia el catálogo si se esta en la página de productos
  if (document.getElementById("products-container")) {
    initCatalog();
  }
});
