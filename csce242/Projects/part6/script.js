const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('main-nav');

hamburger.onclick = () => {
    nav.classList.toggle('show');
};

document.querySelectorAll('#pf-content img').forEach(img => {
    img.style.cursor = 'pointer'; // make it look clickable
    img.addEventListener('click', () => {
        window.location.href = 'testimonials.html';
    });
});