// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu saat tautan di nav-menu diklik
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Portfolio Scroll
const portfolioItems = document.querySelector('.portfolio-items');
const scrollLeft = document.querySelector('.scroll-icon.left');
const scrollRight = document.querySelector('.scroll-icon.right');

// Deteksi lebar layar untuk menentukan jarak scroll
const scrollDistance = window.innerWidth <= 768 ? 200 : 300;

scrollLeft.addEventListener('click', () => {
    portfolioItems.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    portfolioItems.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});
