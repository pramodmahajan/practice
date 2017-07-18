// Cube Portfolio
var ShopPortfolio = function() {
    "use strict";

    // Handle Portfolio Grid Card
    var handleShopPortfolioGridCard = function() {
        $('#shop-portfolio-4-col-grid').cubeportfolio({
            filters: '#shop-portfolio-4-col-grid-filter',
            layoutMode: 'grid',
            defaultFilter: '*',
            animationType: 'rotateRoom',
            gapHorizontal: 30,
            gridAdjustment: 'responsive',
            mediaQueries: [{
                width: 1500,
                cols: 1
            }, {
                width: 1100,
                cols: 1
            }, {
                width: 800,
                cols: 1
            }, {
                width: 550,
                cols: 1
            }, {
                width: 320,
                cols: 1
            }],
            caption: ' ',
            displayType: 'bottomToTop',
            displayTypeSpeed: 100,
        });
    }

    return {
        init: function() {
            handleShopPortfolioGridCard(); // initial setup for shop portfolio grid card
        }
    }
}();

$(document).ready(function() {
    ShopPortfolio.init();
});
