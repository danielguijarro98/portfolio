const boxMenuElement = document.getElementById('box-menu');
const menuBarElement = document.getElementById('menu-bar');

boxMenuElement.addEventListener('click', () => { menuBarElement.classList.toggle('menu-bar--x') })