// Revolution Slider One Page Business
var RevSliderOnePageB = function() {
    "use strict";

    // Handle Revolution Slider One Page Business Layout
    var handleRevSliderOnePageBLayout = function() {
        var tpj = jQuery;
        var revapi280;
        tpj(document).ready(function() {
            if (tpj("#rev-slider-op-b").revolution == undefined) {
                revslider_showDoubleJqueryError("#rev-slider-op-b");
            } else {
                revapi280 = tpj("#rev-slider-op-b").show().revolution({
                    sliderType: "hero",
                    jsFileLocation: "../../../../../assets/plugins/rev-slider/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9000,
                    navigation: {},
                    responsiveLevels: [1240, 1024, 778, 480],
                    visibilityLevels: [1240, 1024, 778, 480],
                    gridwidth: [1240, 1024, 778, 480],
                    gridheight: [868, 768, 960, 720],
                    lazyType: "none",
                    parallax: {
                        type: "scroll",
                        origo: "slidercenter",
                        speed: 1000,
                        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                        type: "scroll",
                    },
                    shadow: 0,
                    spinner: "spinner2",
                    autoHeight: "off",
                    fullScreenAutoWidth: "off",
                    fullScreenAlignForce: "off",
                    fullScreenOffsetContainer: "",
                    disableProgressBar: "on",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    return {
        init: function() {
            handleRevSliderOnePageBLayout(); // initial setup for revolution slider one page business layout
        }
    }
}();

$(document).ready(function() {
    RevSliderOnePageB.init();
});
