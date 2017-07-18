// Core Javascript Initialization
var OnePageBusiness = function() {
    'use strict';

    // Handle Header
    var handleOnePageHeader = function() {
        // jQuery to collapse the navbar on scroll
        if ($('.navbar').offset().top > 150) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        }
        $(window).scroll(function() {
            if ($('.navbar').offset().top > 150) {
                $('.navbar-fixed-top').addClass('top-nav-collapse');
            } else {
                $('.navbar-fixed-top').removeClass('top-nav-collapse');
            }
        });

        var $offset = 0;
        $offset = $(".navbar-fixed-top").height()-20;
        
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.nav-item a').on('click', function(event) {
            var $position = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({
                scrollTop: $position - $offset
            }, 600);
            event.preventDefault();
        });

        var $scrollspy = $('body').scrollspy({target: '.navbar-fixed-top', offset: $offset+2});

        // Collapse Navbar When It's Clickicked
        $(window).scroll(function() {
            $('.navbar-collapse.in').collapse('hide');
            $('.op-b-header .toggle-icon').removeClass('is-clicked');
        });
    }

    // Bootstrap Carousel by Sitepoint (http://www.sitepoint.com/bootstrap-carousel-with-css3-animations/)
    var handleBootsrapCarousel = function() {
        var $myCarousel = $('#ThemeBootstrapCarousel');

        // Initialize carousel
        $myCarousel.carousel();

        function doAnimations(elems) {
            var animEndEv = 'webkitAnimationEnd animationend';
          
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');

                // Add animate.css classes to
                // the elements to be animated 
                // Remove animate.css classes
                // once the animation event has ended
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }

        // Select the elements to be animated
        // in the first slide on page load
        var $firstAnimatingElems = $myCarousel.find('.item:first').find('[data-animation ^= "animated"]');

        // Apply the animation using our function
        doAnimations($firstAnimatingElems);

        // Pause the carousel 
        $myCarousel.carousel('pause');

        // Attach our doAnimations() function to the
        // carousel's slide.bs.carousel event 
        $myCarousel.on('slide.bs.carousel', function (e) { 
            // Select the elements to be animated inside the active slide 
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });
    }

    return {
        init: function() {
            handleOnePageHeader(); // initial header
            handleBootsrapCarousel(); // initial bootstrap caorousel
        }
    }
}();

$(document).ready(function() {
    OnePageBusiness.init();
});
