(function () {
    "use strict";

    function toggleHeader(element) {
        element.addEventListener('click', function () {
            document.querySelector('header').classList.toggle('active-menu');
        })
    }

    function togglePopupFilter(element, classFilter) {
        element.classList.toggle(classFilter);
    }

    function selectPopupValue(element, classFilter, classSelect) {
        if(element) {
            element.forEach(function (element) {
                element.addEventListener('click', function () {
                    document.querySelector('#'+classFilter).innerHTML = element.getAttribute('data-name');
                    document.querySelector('.'+classFilter ).classList.add(classSelect);
                    element.classList.add('active');
                })
            })
        }
    }

    function selectSearchPopupValue(elementSearch, elementSelect) {
        if(elementSearch) {
            elementSearch.addEventListener('input', function () {
                if(elementSearch.value.length > 0) {
                    elementSelect.forEach(function (element) {
                        let valueDrop = element.getAttribute('data-name').toLowerCase();
                        element.style.display = 'none';
                        if( valueDrop.substring(0, elementSearch.value.length) ===  elementSearch.value.toLowerCase()) {
                            element.style.display = 'flex';
                            element.addEventListener('click', function () {
                                elementSearch.value = '';
                                elementSelect.forEach(function (el) {
                                    el.style.display = 'flex';
                                });
                            });
                        }
                    });
                } else {
            elementSelect.forEach(function (element) {
                        element.style.display = 'flex';
                    });
                }
            })
        }
    }

    if(document.querySelector('.menu-mobile')) {
        toggleHeader(document.querySelector('.menu-mobile'));
    }

    if(document.querySelector('.menu-close')) {
        toggleHeader(document.querySelector('.menu-close'));
    }

    //Small sliders
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

    if(document.querySelector('.slider-small-block_recruiting_slider')) {
        let recruitingSlider = new Swiper(".slider-small-block_recruiting_slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.recruiting_left',
                prevEl: '.recruiting_right',
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

    if(document.querySelector('.slider-small-block_selling_slider')) {
        let sellingSlider = new Swiper(".slider-small-block_selling_slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.selling_left',
                prevEl: '.selling_right',
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

    //Big slider
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

    //My account analytics slider
    if(document.querySelector('.slider-analytics-table')) {
        let likedSlider = new Swiper(".slider-analytics-table", {
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    width: 300
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    width: null
                },
            }
        });
    }

    //Type filter
    if(document.querySelectorAll('.type ')) {
        document.querySelectorAll('.type ').forEach(function (element) {
            element.addEventListener('click', function () {
                document.querySelectorAll('.type ').forEach(function (el) {
                    el.classList.remove('active');
                })
                element.classList.add('active');
            })
        })
    }

    //Speaker filter and options
    if(document.querySelector('.speaker ')) {
        document.querySelector('.speaker ').addEventListener('click', function () {
            togglePopupFilter(document.querySelector('.by_speaker '), 'speaker_active');
        })
    }

    selectPopupValue(document.querySelectorAll('.popup_speaker_item '), 'speaker', 'select');

    selectSearchPopupValue(document.querySelector('.popup_speaker_search_input'), document.querySelectorAll('.popup_speaker_item'));

    //Speaker filter and options
    if(document.querySelector('.category ')) {
        document.querySelector('.category ').addEventListener('click', function () {
            togglePopupFilter(document.querySelector('.by_category '), 'speaker_active');
        })
    }

    selectPopupValue(document.querySelectorAll('.popup_category_item '), 'category', 'select');

    if(document.querySelectorAll('.icon_close ')) {
        document.querySelectorAll('.icon_close ').forEach(function (element) {
            element.addEventListener('click', function () {
                document.querySelector('.'+element.getAttribute('data-name')).classList.remove('select');
                document.querySelector('#'+element.getAttribute('data-name')).innerHTML = element.getAttribute('data-default');

                document.querySelectorAll('.popup_category_item').forEach(function (el) {
                    el.classList.remove('active');
                })
            })
        })

    }

    selectSearchPopupValue(document.querySelector('.popup_category_search_input'), document.querySelectorAll('.popup_category_item'));

})();