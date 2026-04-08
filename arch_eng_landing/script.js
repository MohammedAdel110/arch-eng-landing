document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Transparent to Solid Navbar on Scroll
    const navbar = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Parallax Effect for Hero Background
    const heroBg = document.getElementById('hero-parallax-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            
            // Only apply parallax when near the top of the page for performance
            if (scrollPos < window.innerHeight) {
                // Smooth translation using requestAnimationFrame implicitly via CSS transforms
                requestAnimationFrame(() => {
                    // Translates down closely to the scroll giving a deep illusion
                    heroBg.style.transform = `translate3d(0, ${scrollPos * 0.4}px, 0)`;
                });
            }
        });
    }

    // 3. Luxurious Element Entrance Animations via Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        /**
         * Trigger when element is 15% visible on screen.
         */
        threshold: 0.15
    };

    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Stop observing once animated in to keep it active
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Developer Helpers
    // Helpful console log for the user/developer who will swap out the templates
    console.log("%c Aura Architecture Landing Page initialized.", "color: #1d1d1d; font-size: 16px; font-weight: bold; background: #f5f5f5; padding: 10px; border-radius: 4px;");
    console.log("%c IMPORTANT FOR FREELANCE PORTFOLIOS:", "color: #ff5722; font-weight: bold;");
    console.log("To avoid duplicate platform rejections, ensure you swap out the initial placeholder images.");
    console.log("Locations to update:");
    console.log(" 1) styles.css -> .hero-bg background-image");
    console.log(" 2) index.html -> #portfolio-img-1 through #portfolio-img-5 (update the src attribute)");
});
