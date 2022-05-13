const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header-nav');
const menuLink = document.querySelectorAll('.nav-menu__link');
const logo = document.querySelector('.inside');



iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('active')
    menuBody.classList.toggle('active')
    logo.classList.toggle('active')
    if (menuBody.classList.contains('active')) {
        document.body.classList.add('inactive')
    } else {
        document.body.classList.remove('inactive')
    }
});

menuLink.forEach(element => {
    element.addEventListener('click', function (e) {
        if (menuBody.classList.contains('active')) {
            document.body.classList.remove('inactive')
            iconMenu.classList.remove('active')
            menuBody.classList.remove('active')
            logo.classList.remove('active')

        }
    })
});

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header-nav') && !target.closest('.header__burger')) {
        document.body.classList.remove('inactive')
        iconMenu.classList.remove('active')
        menuBody.classList.remove('active')
        logo.classList.remove('active')

    }
})