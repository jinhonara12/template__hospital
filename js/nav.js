window.addEventListener('load', function () {
    let header = document.querySelector('header');
    let mainLinks = document.querySelectorAll('nav .menu__box .main__link');
    let mobileBox = document.querySelector('#mobile_box')
    let mobileBtn = document.querySelector('#mobile__btn')

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



})