document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded successfully!");

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const nav = document.querySelector("nav ul");

    mobileMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
