(function () {
    "use strict";

    function toggleHeader(element) {
        element.addEventListener('click', function () {
            document.querySelector('header').classList.toggle('active-menu');
        })
    }

    if(document.querySelector('.menu-mobile')) {
        toggleHeader(document.querySelector('.menu-mobile'));
    }

    if(document.querySelector('.menu-close')) {
        toggleHeader(document.querySelector('.menu-close'));
    }

})();