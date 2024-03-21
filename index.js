
// Obtener todos los elementos de menú
const menuItems = document.querySelectorAll('.menu li a');

// Agregar un controlador de eventos a cada elemento de menú
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Eliminar la clase 'active' de todos los elementos de menú
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    // Agregar la clase 'active' solo al elemento de menú seleccionado
    item.classList.add('active');
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const animatedImages = document.querySelectorAll(".animated-image");
  
    function checkScroll() {
      animatedImages.forEach(image => {
        const imagePosition = image.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2; // Ajusta el valor para controlar cuándo comienza la animación
  
        if (imagePosition < screenPosition) {
          image.classList.add("animate");
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
  });
  

// Obtener el botón de hamburguesa y el menú
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Agregar un evento de clic al botón de hamburguesa
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alternar la clase 'active' en el menú
    menuToggle.classList.toggle('active'); // Alternar la clase 'active' en el botón de hamburguesa
});


// Espera a que la página esté completamente cargada
window.addEventListener('load', function() {
    // Oculta la pantalla de carga después de unos segundos
    setTimeout(function() {
        var loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }, 2000); // Cambia este valor (en milisegundos) para ajustar la duración de la pantalla de carga
});



document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('.menu a');

  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href').substr(1);
          var targetElement = document.getElementById(targetId);
          if (targetElement) {
              var topOffset = targetElement.offsetTop;
              window.scrollTo({
                  top: topOffset,
                  behavior: 'smooth'
              });
          }
      });
  });
});


