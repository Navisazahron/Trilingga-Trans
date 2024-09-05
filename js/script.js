document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
