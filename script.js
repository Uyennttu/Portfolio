document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector("header > nav"); // Selects the nav directly inside header

    window.addEventListener("scroll", function() {
        nav.classList.toggle("sticky", window.scrollY > 120);
    });
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var navigation = document.querySelector('nav ul');
    if (navigation.style.display === 'block') {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'block';
    }
});