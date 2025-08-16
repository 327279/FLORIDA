document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Animation for Subtitle ---
    const typingTextElement = document.getElementById('typing-text');
    const textToType = "Making kuru wild again";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typingTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (in ms)
        }
    }
    // Start typing after a short delay
    setTimeout(type, 500);


    // --- Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll('.anim-fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
