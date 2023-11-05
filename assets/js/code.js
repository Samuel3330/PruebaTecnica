/* Scroll navigation Transform  */

const icon = document.getElementById("phone");
const navigation = document.getElementById("navigation");

const cargarImagen = (entradas, observador) => {
  if (entradas[0].isIntersecting == false) {
    navigation.classList.toggle("scroll-navigation");
  } else if (entradas[0].isIntersecting == true) {
    navigation.classList.remove("scroll-navigation");
  }
};

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px",
  threshold: 1,
});

observador.observe(icon);
