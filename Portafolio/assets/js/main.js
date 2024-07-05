// Expresiones de funciones invocadas inmediatamente IIFE
(function () {
    let navbar = document.querySelector('#navbar');
    let hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });
})()


