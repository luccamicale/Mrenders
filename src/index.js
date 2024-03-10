

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
