document.addEventListener('DOMContentLoaded', () => {

    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    fadeInElements.forEach(el => { observer.observe(el); });

    if (window.matchMedia("(min-width: 901px)").matches) {
        const parallaxScene = document.querySelector('.background-scene');
        const parallaxHero = document.querySelector('.hero-content');
        
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth / 2) / (innerWidth / 2);
            const y = (clientY - innerHeight / 2) / (innerHeight / 2);
            
            parallaxScene.style.transform = `translateX(${x * 15}px) translateY(${y * 10}px)`;
            parallaxHero.style.transform = `translateX(${-x * 20}px) translateY(${-y * 15}px)`;
        });
    }

});
