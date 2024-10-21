
const toggleButton = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active-links')
})

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
    const navbarHeight = navbar.getBoundingClientRect().height
    const scrollHeight = window.pageYOffset

    if(scrollHeight > navbarHeight) {
        navbar.classList.add('scrollnav')
    } else {
        navbar.classList.remove('scrollnav')
    }
})