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

let input = document.querySelector('#phone')
// formatar input de telefone
function formatPhone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo o que não for número
    
    // Formata o número conforme o padrão (XX) XXXXX-XXXX
    if (value.length <= 2) {
        input.value = `(${value}`;
    } else if (value.length <= 6) {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
        input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
}



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