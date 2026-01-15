const menuIcon = document.querySelector('#menu-icon');
const navabar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navabar.classList.toggle('active');
}