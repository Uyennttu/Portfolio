document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector("header > nav"); // Selects the nav directly inside header

    window.addEventListener("scroll", function() {
        nav.classList.toggle("sticky", window.scrollY > 120);
    });
});
