// Newsletter Popup
var NewsletterPopup = function() {
    "use strict";

    // Handle Newsletter Popup On Load
    var handleNewsletterPopupEndPage = function() {
        $(document).ready( function() {
            $(".js-newsletter-popup-end-page").newsletterPopup({
                delay: 1600
            });
        });
    }

    // Handle Newsletter Popup On Load
    var handleNewsletterPopupOnLoad = function() {
        $(document).ready( function() {
            $(".js-newsletter-popup-on-load").newsletterPopup({
                trigger: "onload",
                delay: 1600
            });
        });
    }

    // Handle Newsletter Popup On Idle
    var handleNewsletterPopupOnIdle = function() {
        $(document).ready( function() {
            $(".js-newsletter-popup-on-idle").newsletterPopup({
                trigger: "onidle",
                delay: 1000
            });
        });
    }

    return {
        init: function() {
            handleNewsletterPopupEndPage(); // initial setup for newsletter popup at the end page
            handleNewsletterPopupOnLoad(); // initial setup for newsletter popup on load
            handleNewsletterPopupOnIdle(); // initial setup for newsletter popup on idle
        }
    }
}();

$(document).ready(function() {
    NewsletterPopup.init();
});
