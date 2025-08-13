document.addEventListener('DOMContentLoaded', () => {

    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    fadeInElements.forEach(el => { observer.observe(el); });

    const music = document.getElementById('ambient-music');
    const toggleButton = document.getElementById('music-toggle');
    let isPlaying = false;
    music.volume = 0.3;
    toggleButton.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM8.707 11.182l.707-.707A4.486 4.486 0 0 0 8 5.525V4.717a5.5 5.5 0 0 1 2.93 4.975l.83 1.66a.5.5 0 0 1-.745.556L8 8.983v2.2zM12 8a6.5 6.5 0 0 1-1.341 3.993l.708.707A7.5 7.5 0 0 0 13 8c0-1.8-.6-3.4-1.6-4.697l-.734.652A6.5 6.5 0 0 1 12 8z"/><path d="M10 8c0-.464-.06-.91-.17-1.332l-.708.708A3.486 3.486 0 0 1 9.025 8a3.486 3.486 0 0 1-.137.954l.708.708c.11-.422.17-.868.17-1.332zM1.5 5.5a.5.5 0 0 0 0 5h2.325l2.363 1.89a.5.5 0 0 0 .812-.39V4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5z"/></svg>`;
        } else {
            music.play().catch(() => {});
            toggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg>`;
        }
        isPlaying = !isPlaying;
    });

    const cursor = document.querySelector('.custom-cursor');
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    if (window.matchMedia("(min-width: 901px)").matches) {
        const parallaxScene = document.querySelector('.background-scene');
        const parallaxTrees = document.querySelector('.tree-container');
        const parallaxHero = document.querySelector('.hero-content');
        
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX - innerWidth / 2) / (innerWidth / 2);
            const y = (clientY - innerHeight / 2) / (innerHeight / 2);
            
            parallaxScene.style.transform = `translateX(${x * 15}px) translateY(${y * 10}px)`;
            parallaxTrees.style.transform = `translateX(${x * 30}px) translateY(${y * 15}px)`;
            parallaxHero.style.transform = `translateX(${-x * 20}px) translateY(${-y * 15}px) rotateY(${x * -10}deg)`;
        });
    }

});