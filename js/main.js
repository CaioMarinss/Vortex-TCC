window.onload = function () {
    const intro = document.getElementById('intro');

    setTimeout(() => {
        intro.style.opacity = '0';
    }, 2000); // 2 segundos

    // esconde a introdução e mostra o conteúdo
    setTimeout(() => {
        intro.style.display = 'none';

    }, 3000); // 3 segundos para permitir a animação de 1 segundo
};

// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});