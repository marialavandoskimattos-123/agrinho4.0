// Efeito de rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mudança de cor do header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "0.5rem 5%";
        header.style.backgroundColor = "#fdfdfd";
    } else {
        header.style.padding = "1rem 5%";
        header.style.backgroundColor = "#ffffff";
    }
});

// Simulação de animação simples nos cards ao carregar
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
