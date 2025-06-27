document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.getElementById('main-nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) { // Sayfa aşağı kaydırıldığında
            mainNav.classList.add('visible');
        } else { // Sayfa en üste geldiğinde
            mainNav.classList.remove('visible');
        }

        lastScrollY = window.scrollY;
    });
});



