   // navbar
   document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const megaDropdown = document.querySelector('.mega-dropdown');
    const isMobile = window.innerWidth <= 991.98;

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Check if dropdownToggle and dropdownMenu exist
        if (dropdownToggle && dropdownMenu) {
            if (!isMobile) {
                dropdown.addEventListener('mouseenter', () => {
                    dropdownMenu.classList.add('show');
                });

                dropdown.addEventListener('mouseleave', () => {
                    dropdownMenu.classList.remove('show');
                });
            } else {
                dropdownToggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdownMenu.classList.toggle('show');
                });
            }
        }
    });
    // Special handling for mega dropdown on mobile
    if (isMobile) {
        const megaDropdownToggle = megaDropdown ? megaDropdown.querySelector('.dropdown-toggle') : null;
        const megaDropdownMenu = megaDropdown ? megaDropdown.querySelector('.mega-dropdown-menu') : null;

        // Check if megaDropdownToggle and megaDropdownMenu exist
        if (megaDropdownToggle && megaDropdownMenu) {
            megaDropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                megaDropdownMenu.classList.toggle('show');
            });
        }
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // Prevent dropdowns from closing when clicking inside
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});
// excellence

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

const animatedElements = document.querySelectorAll('.animate-on-scroll');
if (animatedElements.length > 0) {
    animatedElements.forEach((element) => {
        animationObserver.observe(element);
    });
} else {
    console.warn('No elements with the classes "animate-on-scroll" found to observe.');
}
// campus life


 // Intersection Observer for fade-in animation
 const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

// Observe all elements with fade-in class
const fadeInElements = document.querySelectorAll('.fade-in');
if (fadeInElements.length > 0) {
    fadeInElements.forEach(el => {
        fadeInObserver.observe(el);
    });
} else {
    console.warn('No elements with the class "fade-in" found to observe.');
}
// campus
 // Tab switching functionality
 document.querySelectorAll('.nav-link').forEach(tab => {
    tab.addEventListener('click', (e) => {
        // e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Intersection Observer for fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
// footer
 // Animate footer sections on scroll
 function animateFooter() {
    const footerSections = document.querySelectorAll('.footer-animated');
    footerSections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Run animation when the page loads
window.addEventListener('load', animateFooter);

// Smooth scroll for footer links
document.querySelectorAll('.footer-links a, .footer-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form submission (for demonstration)
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    this.reset();
});