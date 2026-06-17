const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menuMobile');
const a=document.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('open');
    menuMobile.classList.toggle('open');
});
// a.addEventListener('click',closeMenu);
function closeMobile(){
    btnMenu.classList.remove('open');
    menuMobile.classList.remove('open');
}   