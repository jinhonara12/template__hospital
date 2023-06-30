window.addEventListener('load', function () {
    let header = document.querySelector('header');
    let mainLinks = document.querySelectorAll('nav .menu__box .main__link');
    let mobileBox = document.querySelector('#mobile_box');
    let mobileBtn = document.querySelector('#mobile__btn');
    let mobileMenus = document.querySelectorAll('.m__menu');

    function hoverMainLink() {
        if (!header.classList.contains('active')) {
            header.classList.add('active')
        }
    }
    
    function outHeader() {
        if (header.classList.contains('active')) {
            header.classList.remove('active')
        }
    }

    function clickMobileMenu() {
        mobileBox.classList.toggle('active')
    }


    for (el of mainLinks) {
        el.addEventListener('mouseenter', hoverMainLink)
    }
    header.addEventListener('mouseleave', outHeader)
    mobileBtn.addEventListener('click', clickMobileMenu)

    function clickMobileLink() {
        for (el of mobileMenus) {
            el.classList.remove('active')
        }
        this.classList.add('active')
    }
    
    for (el of mobileMenus) {
        el.addEventListener('click', clickMobileLink)
    }


})