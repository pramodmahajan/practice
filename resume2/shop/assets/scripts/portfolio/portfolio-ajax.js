// Cube Portfolio
var ShopPortfolioAjax = function() {
    "use strict";

    // Handle Shop Portfolio Ajax
    var handleShopPortfolioAjax = function() {
        (function($, window, document, undefined) {
            'use strict';

            // init cubeportfolio
            $('#js-grid-portfolio-ajax').cubeportfolio({
                layoutMode: 'grid',
                defaultFilter: '*',
                animationType: 'rotateRoom',
                mediaQueries: [{
                    width: 1300,
                    cols: 4
                }, {
                    width: 1100,
                    cols: 3
                }, {
                    width: 800,
                    cols: 3
                }, {
                    width: 480,
                    cols: 2
                }, {
                    width: 320,
                    cols: 1
                }],
                gapHorizontal: 0,
                gapVertical: 20,
                gridAdjustment: 'responsive',
                caption: 'zoom',
                displayType: 'sequentially',
                displayTypeSpeed: 100,

                // singlePageInline
                singlePageInlineDelegate: '.cbp-singlePageInline',
                singlePageInlinePosition: 'below',
                singlePageInlineInFocus: true,
                singlePageInlineCallback: function(url, element) {
                    // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
                    var t = this;

                    $.ajax({
                        url: url,
                        type: 'GET',
                        dataType: 'html',
                        timeout: 30000
                    })
                    .done(function(result) {

                        t.updateSinglePageInline(result);

                    })
                    .fail(function() {
                        t.updateSinglePageInline('AJAX Error! Please refresh the page!');
                    });
                },
            });
        })(jQuery, window, document);
    }

    return {
        init: function() {
            handleShopPortfolioAjax(); // initial setup for shop portfolio ajax
        }
    }
}();

$(document).ready(function() {
    ShopPortfolioAjax.init();
});

