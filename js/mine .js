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

    if(document.querySelector('.slider-small-block_history_slider')) {
        let historySlider = new Swiper(".slider-small-block_history_slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.history_left',
                prevEl: '.history_right',
            },
            breakpoints: {
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1690: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            }
        });
    }

    if(document.querySelector('.slider-small-block_added_slider')) {
        let addedSlider = new Swiper(".slider-small-block_added_slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.added_left',
                prevEl: '.added_right',
            },
            breakpoints: {
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1690: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                },
            }
        });
    }

    if(document.querySelector('.slider-small-block_liked_slider')) {
        let likedSlider = new Swiper(".slider-small-block_liked_slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.liked_left',
                prevEl: '.liked_right',
            },
            breakpoints: {
                500: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                800: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1690: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });
    }
})();