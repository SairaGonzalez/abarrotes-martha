const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("ventana-chat");

chatToggle.addEventListener("click", () => {
  chatWindow.classList.toggle("show");
});

const carrusel = document.getElementById("carousel-promociones");
const btnIzq = document.querySelector(".flecha.izquierda");
const btnDer = document.querySelector(".flecha.derecha");

btnIzq.addEventListener("click", () => {
  carrusel.scrollBy({ left: -300, behavior: "smooth" });
});

btnDer.addEventListener("click", () => {
  carrusel.scrollBy({ left: 300, behavior: "smooth" });
});
