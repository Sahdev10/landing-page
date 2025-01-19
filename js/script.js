document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    function activateNavLink() {
        let currentSection = '';
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 80; // Adjust for navbar height
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }

            // Ensure the last section is highlighted when reaching the bottom of the page
            if (index === sections.length - 1 && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Initial call to set the active link on page load
});
