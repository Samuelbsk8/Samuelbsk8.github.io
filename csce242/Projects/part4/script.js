const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('main-nav');

hamburger.onclick = () => {
    nav.classList.toggle('show');
};