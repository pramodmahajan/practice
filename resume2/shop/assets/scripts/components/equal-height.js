// Equal Height
var ShopEqualHeight = function() {
    "use strict";

    // Handle Shop Equal Height
    var handleShopEqualHeight = function() {
        $(function($) {
            $('.sh-product-v1-equal-height').responsiveEqualHeightGrid();
            $('.sh-equal-height').responsiveEqualHeightGrid();
            $('.sh-promo-section-v2-equal-height').responsiveEqualHeightGrid();
        });
    }

    return {
        init: function() {
            handleShopEqualHeight(); // initial setup for shop equal height
        }
    }
}();

$(document).ready(function() {
    ShopEqualHeight.init();
});