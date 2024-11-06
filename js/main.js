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
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {  // Se a rolagem for maior que 50px
        navbar.classList.add('scrolled'); // Adiciona a classe para mudar a cor
    } else {
        navbar.classList.remove('scrolled'); // Remove a classe quando voltar ao topo
    }
});