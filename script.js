const menu = document.querySelector('.menu')
const nav = document.querySelector('#mainNav')

menu.addEventListener('click', () => {
    nav.classList.toggle('show_nav')
})