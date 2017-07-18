// Owl Carousel
var OwlCarousel = function() {
    "use strict";

    // Handle Owl Carousel Shop Clients
    var handleshClients = function() {
        $(document).ready(function() {
            var owl = $(".owl-carousel-sh-clients");
            owl.owlCarousel({
                items: 5,
                loop: true,
                dots: false,
                nav: false,
                margin: 30,
                autoplay: true,
                smartSpeed: 450,
                autoplaySpeed: 1000,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 2
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 2
                    },
                    // breakpoint from 550 up
                    550: {
                        items: 3
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 4
                    },
                    // breakpoint from 992 up
                    992: {
                        items: 5
                    },
                    // breakpoint from 1199 up
                    1199: {
                        items: 5
                    }
                }
            });
        });
    }

    return {
        init: function() {
            handleshClients(); // initial setup for shop clients
        }
    }
}();

$(document).ready(function() {
    OwlCarousel.init();
});
