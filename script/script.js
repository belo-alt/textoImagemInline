const btnMoBile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMoBile.addEventListener('click', toggleMenu);

