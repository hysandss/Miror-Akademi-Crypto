// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
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