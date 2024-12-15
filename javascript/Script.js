function animeScroll() {
    const elements = document.querySelectorAll('[data-anime]');
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75);

    elements.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add('anime-start');
        } else {
            element.classList.remove('anime-start');
        }
    });
}

// Evento de scroll
window.addEventListener('scroll', animeScroll);

// Chama a função ao carregar a página para verificar elementos já visíveis
animeScroll();

document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetID = this.getAttribute('href'); // Obtém o ID do alvo (ex: #sobre)
        const targetSection = document.querySelector(targetID);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Posição da seção (ajuste com o offset)
                behavior: 'smooth', // Animação suave
            });
        }
    });
});

