

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
  