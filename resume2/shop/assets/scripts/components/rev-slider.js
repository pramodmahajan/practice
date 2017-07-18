// Shop Revolution Slider
var ShopRevSlider = function() {
    "use strict";

    // Handle Shop Revolution Slider Layout 1
    var handleShopRevSliderLayout1 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#shop-rev-slider1").revolution == undefined){
                revslider_showDoubleJqueryError("#shop-rev-slider1");
            } else {
                revapi1 = tpj("#shop-rev-slider1").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "../assets/plugins/rev-slider/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            swipe_direction: "horizontal",
                            drag_block_vertical: false
                        },
                        arrows: {
                            style: "metis",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                    },
                    responsiveLevels: [1240,1024,778,480],
                    gridwidth: [1240,1024,778,480],
                    gridheight: [868,768,960,720],
                    lazyType: "smart",
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Handle Shop Revolution Slider Layout 2
    var handleShopRevSliderLayout2 = function() {
        var tpj=jQuery,         
        revapi1;
        tpj(document).ready(function() {
            if(tpj("#shop-rev-slider2").revolution == undefined){
                revslider_showDoubleJqueryError("#shop-rev-slider2");
            } else {
                revapi1 = tpj("#shop-rev-slider2").show().revolution({
                    sliderType: "standard",
                    jsFileLocation: "../assets/plugins/rev-slider/js/",
                    sliderLayout: "fullscreen",
                    dottedOverlay: "none",
                    delay: 9000,
                    navigation: {
                        keyboardNavigation: "on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation: "off",
                        onHoverStop: "off",
                        touch: {
                            touchenabled: "on",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            swipe_direction: "horizontal",
                            drag_block_vertical: false
                        },
                        arrows: {
                            style: "metis",
                            enable: true,
                            hide_onmobile: true,
                            hide_under: 768,
                            hide_onleave: false,
                            tmp: '',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        },
                    },
                    responsiveLevels: [1240,1024,778,480],
                    gridwidth: [1240,1024,778,480],
                    gridheight: [868,768,960,720],
                    lazyType: "smart",
                    shadow: 0,
                    spinner: "off",
                    stopLoop: "off",
                    stopAfterLoops: -1,
                    stopAtSlide: -1,
                    shuffle: "off",
                    autoHeight: "off",
                    fullScreenOffsetContainer: ".rev-slider-offset",
                    hideThumbsOnMobile: "off",
                    hideSliderAtLimit: 0,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLilmit: 0,
                    debugMode: false,
                    fallbacks: {
                        simplifyAll: "off",
                        nextSlideOnWindowFocus: "off",
                        disableFocusListener: false,
                    }
                });
            }
        });
    }

    // Handle Shop Revolution Slider Layout 3
    var handleShopRevSliderLayout3 = function() {
        var tpj=jQuery;
        var revapi426;
        tpj(document).ready(function() {
            if(tpj("#rev_slider_426_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_426_1");
            }else{
                revapi426 = tpj("#rev_slider_426_1").show().revolution({
                    sliderType:"hero",
                    jsFileLocation: "../../assets/plugins/rev-slider/js/",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                    },
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1240,1024,778,480],
                    gridheight:[868,768,960,720],
                    lazyType:"none",
                    parallax: {
                        type:"scroll",
                        origo:"slidercenter",
                        speed:400,
                        levels:[-10,-20,-30,-40,-50,30,35,40,45,46,47,48,49,65,75,55],
                        type:"scroll",
                    },
                    shadow:0,
                    spinner:"off",
                    autoHeight:"off",
                    fullScreenAutoWidth:"off",
                    fullScreenAlignForce:"off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "60px",
                    disableProgressBar:"on",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        disableFocusListener:false,
                    }
                });
            }
        }); /*ready*/
    }

    return {
        init: function() {
            handleShopRevSliderLayout1(); // initial setup for shop revolution slider layout 1
            handleShopRevSliderLayout2(); // initial setup for shop revolution slider layout 2
            handleShopRevSliderLayout3(); // initial setup for shop revolution slider layout 3
        }
    }
}();

$(document).ready(function() {
    ShopRevSlider.init();
});
