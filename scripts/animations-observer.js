document.addEventListener('DOMContentLoaded', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const slideUps = document.querySelectorAll('.slide-up');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleFadeIn = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }, index * 100);
            }
        });
    };

    const handleSlideUp = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    };

    const fadeInObserver = new IntersectionObserver(handleFadeIn, options);
    fadeIns.forEach(fadeIn => fadeInObserver.observe(fadeIn));

    const slideUpObserver = new IntersectionObserver(handleSlideUp, options);
    slideUps.forEach(slideUp => slideUpObserver.observe(slideUp));
});