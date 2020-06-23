
const $navMenu = document.querySelector('.nav__mobile')
const $burgerButton = document.querySelector('#burger-button')
const $body = document.querySelector('body')


$burgerButton.addEventListener('click', () => {
    $navMenu.classList.toggle('nav__mobile--active')
    $body.classList.toggle('scroll')
    $burgerButton.classList.toggle('burguer-icon--active')
})




