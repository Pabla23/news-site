const menuBtn = document.getElementById("menu-btn")
const nav = document.getElementById('main-nav')

menuBtn.addEventListener('click', openMenu)

function openMenu() {
    nav.classList.add('activated');
    menuBtn.classList.toggle('open');
    document.body.classList.toggle('open')
}
