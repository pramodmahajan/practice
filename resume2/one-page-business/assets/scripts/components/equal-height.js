// One Page Business Equal Height
var OnePageBEqualHeight = function() {
    "use strict";

    // Handle One Page Business Equal Height
    var handleOnePageBEqualHeight = function() {
        $(function($) {
            $('.op-b-blog-equal-height').responsiveEqualHeightGrid();
        });
    }

    return {
        init: function() {
            handleOnePageBEqualHeight(); // initial setup for one page business equal height
        }
    }
}();

$(document).ready(function() {
    OnePageBEqualHeight.init();
});