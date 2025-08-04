document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function () {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Glide.js carousel
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 7,
        gap: 30,
        breakpoints: {
            768: {
                perView: 1
            }
        }
    });

    if (document.querySelector('.glide')) {
        glide.mount();
    }
});
