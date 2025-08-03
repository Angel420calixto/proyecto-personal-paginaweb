function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('activo');
}

document.querySelectorAll('.busca__categoria').forEach((categoria) => {
    categoria.addEventListener('click', () => {
        categoria.classList.toggle('activa');
    });
});

