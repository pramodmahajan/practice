// Cube Portfolio
var ShopPortfolio = function() {
    "use strict";

    // Handle Portfolio 4 Columns Grid
    var handleShopPortfolio4ColGrid = function() {
        $('#shop-portfolio-4-col-grid').cubeportfolio({
            filters: '#shop-portfolio-4-col-grid-filter',
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: 'rotateRoom',
            gapHorizontal: 20,
            gapVertical: 20,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 4
            }, {
                width: 1100,
                cols: 4
            }, {
                width: 800,
                cols: 4
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
            handleShopPortfolio4ColGrid(); // initial setup for shop portfolio 4 columns grid
        }
    }
}();

$(document).ready(function() {
    ShopPortfolio.init();
});
