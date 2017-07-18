// Owl Carousel
var OwlCarousel = function() {
    "use strict";

    // Handle Owl Carousel Blog Carousel One Page Business
    var handleOnePageBBlog = function() {
        $(document).ready(function() {
            var owl = $(".owl-carousel-op-b-blog");
            owl.owlCarousel({
                items: 3,
                loop: true,
                dots: true,
                nav: false,
                smartSpeed: 450,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 1
                    },
                    // breakpoint from 550 up
                    550: {
                        items: 2
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 2
                    },
                    // breakpoint from 992 up
                    992: {
                        items: 2
                    },
                    // breakpoint from 1199 up
                    1199: {
                        items: 3
                    }
                }
            });
        });
    }

    // Handle Owl Carousel One Page Promo Block v2
    var handleOnePageBPromoBlockV2 = function() {
        $(document).ready(function() {
            var owl = $(".owl-carousel-op-b-promo-b-v2");
            owl.owlCarousel({
                items: 3,
                loop: true,
                dots: false,
                nav: true,
                navText: ['', ''],
                navContainer: '.owl-controls-op-b-promo-b-v2',
                margin: 10,
                autoplay: true,
                smartSpeed: 450,
                autoplaySpeed: 1000,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 2
                    },
                    // breakpoint from 550 up
                    550: {
                        items: 2
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 2
                    },
                    // breakpoint from 992 up
                    992: {
                        items: 3
                    },
                    // breakpoint from 1199 up
                    1199: {
                        items: 3
                    }
                }
            });

            // Custom Navigation Events
            $('.owl-controls-op-b-promo-b-v2-next').on('click', function() {
                owl.trigger('next.owl.carousel');
            })
            $('.owl-controls-op-b-promo-b-v2-prev').on('click', function() {
                owl.trigger('prev.owl.carousel', [300]);
            })
        });
    }

    return {
        init: function() {
            handleOnePageBBlog(); // initial setup for one page business blog carousel
            handleOnePageBPromoBlockV2(); // initial setup for one page business promo block v2
        }
    }
}();

$(document).ready(function() {
    OwlCarousel.init();
});
