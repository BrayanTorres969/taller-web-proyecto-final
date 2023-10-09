//Menú Hamburguesa
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".open-menu");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active"); // Agregamos o eliminamos la clase "active" en el botón
  });
});
