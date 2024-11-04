window.onload = function() {
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');

    setTimeout(() => {
        intro.style.opacity = '0';
    }, 2000); // 2 segundos

    // esconde a introdução e mostra o conteúdo
    setTimeout(() => {
        intro.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // 3 segundos para permitir a animação de 1 segundo
};
