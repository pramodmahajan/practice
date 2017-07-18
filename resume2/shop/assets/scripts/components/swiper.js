$(window).load(function(){
    // Swiper Slider v1
    var swiper = new Swiper('.swiper-slider-v1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    // Swiper Slider v2
    var swiper = new Swiper('.swiper-slider-v2', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    // Swiper Slider v3
    var swiper = new Swiper('.swiper-slider-v3', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    // Swiper Slider v4
    var swiper = new Swiper('.swiper-slider-v4', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        breakpoints: {
            1024: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            600: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    // Swiper Slider v5
    var swiper = new Swiper('.swiper-slider-v5', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    // Swiper Slider v6
    var swiper = new Swiper('.swiper-slider-v6', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            600: {
                slidesPerView: 3
            },
            480: {
                slidesPerView: 2
            }
        }
    });

    // Swiper Slider v7
    var swiper = new Swiper('.swiper-slider-v7', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        effect: 'slide',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });
});