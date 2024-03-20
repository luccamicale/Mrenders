

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuItems.forEach(function(el) {
                el.classList.remove('active');
            });
            item.classList.add('active');
        });
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
