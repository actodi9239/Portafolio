document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    let nav = document.querySelector('nav');

    function revealSection() {
        for (let section of sections) {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        }
    }

    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#0b0c10'; 
        } else {
            nav.style.backgroundColor = '#1f2833';
        }
    }

    window.addEventListener('scroll', function() {
        revealSection();
        updateNavbarBackground();
    });

    revealSection(); 
    updateNavbarBackground(); 
});
