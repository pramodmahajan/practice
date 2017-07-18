// Cube Portfolio
var ShopPortfolio = function() {
    "use strict";

    // Handle Portfolio 3 Columns Grid
    var handleShopPortfolio3ColGrid = function() {
        $('#shop-portfolio-3-col-grid').cubeportfolio({
            filters: '#shop-portfolio-3-col-grid-filter',
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: 'rotateRoom',
            gapHorizontal: 30,
            gapVertical: 30,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 3
            }, {
                width: 1100,
                cols: 3
            }, {
                width: 800,
                cols: 3
            }, {
                width: 550,
                cols: 2
            }, {
                width: 320,
                cols: 1
            }],
            caption: ' ',
            displayType: 'bottomToTop',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        });
    }

    return {
        init: function() {
            handleShopPortfolio3ColGrid(); // initial setup for shop portfolio 3 columns grid
        }
    }
}();

$(document).ready(function() {
    ShopPortfolio.init();
});
