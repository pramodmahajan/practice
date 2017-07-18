// Core Javascript Initialization
var Shop = function() {
    'use strict';

    // Handle Shop Coupon
    var handleShopCoupon = function() {
        $('.sh-checkout-payment').on('click', function() {
            $('.sh-checkout-payment').removeClass('is-active');
            $(this).addClass('is-active');
        });
    }

    // Handle Point
    var handlePoint = function() {
        $(document).ready(function($){
            // open interest point description
            $('.sh-point-single').children('a').on('click', function(){
                var selectedPoint = $(this).parent('li');
                if( selectedPoint.hasClass('is-open') ) {
                    selectedPoint.removeClass('is-open').addClass('visited');
                } else {
                    selectedPoint.addClass('is-open').siblings('.sh-point-single.is-open').removeClass('is-open').addClass('visited');
                }
            });
            // close interest point description
            $('.sh-point-close-info').on('click', function(event){
                event.preventDefault();
                $(this).parents('.sh-point-single').eq(0).removeClass('is-open').addClass('visited');
            });
        });
    }

    // Handle Search
    var handleSearch = function() {
        var SearchPushTrigger = $('.sh-search-trigger');
        SearchPushTrigger.on('click', function() {
            SearchPushTrigger.toggleClass('is-clicked');    
            $('.sh-search-open').slideToggle(400);
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 1) $('.sh-search-open').slideUp(); {
                SearchPushTrigger.removeClass('is-clicked');    
            };
        });
    }

    return {
        init: function() {
            handleShopCoupon(); // initial shop coupon
            handlePoint(); // initial point
            handleSearch(); // initial search
        }
    }
}();

$(document).ready(function() {
    Shop.init();
});
