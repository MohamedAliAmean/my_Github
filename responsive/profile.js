const menuIcon = document.getElementById('menu-icon');
const container = document.getElementById('container');

menuIcon.addEventListener('click', () => {
    console.log("Menu icon clicked!"); // Debugging line
    container.classList.toggle('collapsed');
});