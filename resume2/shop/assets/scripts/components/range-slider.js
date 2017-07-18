// Range Slider
var RangeSlider = function() {
    "use strict";

    // Handle Range Slider
    var handleRangeSlider = function() {
        $(".slider").slider();
    }

    return {
        init: function() {
            handleRangeSlider(); // initial setup for range slider
        }
    }
}();

$(document).ready(function() {
    RangeSlider.init();
});
