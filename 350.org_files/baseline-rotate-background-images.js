/*
Baseline: Crossfading background image rotator
– Preloads a comma-separated list of image URLs from a 'data-bg-rotator' attribute
- Puts the existing content of the target element in a div, and creates a
    new background image div, z-indexed below the content
- Incorporates the existing bg image+credit, and matches the background-attachment
- When preloading is complete, cycles through each image with a crossfade effect.

Works with Superpages' built-in bg image, image credit, and data-* attribute features.

*/
(function($){
  jQuery.fn.rotateBackgroundImages = function(images, credits, options){
    return this.each(function(index){
        // Add 1 to the index so it starts counting at 1 instead of 0 (for readability in the HTML)
        index++;
        // Store target element for later
        var bgRotatorParent = $(this);
        // Image URLs and photo credits from data-bg-rotate-urls attribute
        var bgRotatorImageUrlsAttr = $(bgRotatorParent).data('bgRotator');
        var bgRotatorImageUrls = images ? images : bgRotatorImageUrlsAttr.replace(' ','').split(',');
        // Image credits from data-bg-rotator-credits attribute
        var bgRotatorImageCreditsAttr = $(bgRotatorParent).data('bgRotatorCredits');
        var bgRotatorImageCredits = credits ? credits : bgRotatorImageCreditsAttr.split(',');
        // Interval option from data-bg-rotator-interval attribute
        var bgRotatorInterval = $(bgRotatorParent).data('bgRotatorInterval') ? $(bgRotatorParent).data('bgRotatorInterval') : 6000;
        // Crossfade option from data-bg-rotator-crossfade attribute
        var bgRotatorCrossfade = $(bgRotatorParent).data('bgRotatorCrossfade') ? $(bgRotatorParent).data('bgRotatorCrossfade') : 2500;
        // Z-index option from data-bg-rotator-zindex attribute
        var bgRotatorZindex = $(bgRotatorParent).data('bgRotatorZindex') ? $(bgRotatorParent).data('bgRotatorZindex') : 3;
        // set options
        var defaultOptions = {
            displayTime: bgRotatorInterval,
            crossfadeTime: bgRotatorCrossfade,
            bgAttachment: 'scroll',
            zIndex: bgRotatorZindex
        }
        var options = $.extend({}, defaultOptions, options);
        // Define unique 'start loading' event, in case of multiple rotators)
        var bgRotatorPreloadStartEvent = 'bgRotatorPreloadStart-' + index;
        // Define unique 'loaded' event, in case of multiple rotators)
        var bgRotatorPreloadCompleteEvent = 'bgRotatorPreloadComplete-' + index;
        // Define unique rotating item class
        var bgRotatorImgClass = 'js-bg-rotator-' + index + '-image';

        // if we've got image URLs...
        if ( bgRotatorImageUrls ){

            // Wrap normal content in a div so we can z-index it above the rotator
            // but don't add "position:relative" until we're ready to rotate
            $(bgRotatorParent)
                .children()
                .wrapAll('<div id="js-bg-rotator-' + index + '-content" class="js-bg-rotator-content" style="z-index:' + options['zIndex'] + ';width:100%;"/>');

            $(bgRotatorParent).append('<div id="js-bg-rotator-' + index + '-container" class="js-bg-rotator-container" style="z-index:2;position:absolute;top:0;left:0;height:100%;width:100%;"></div>');

            // If the parent element has a normal bg image, add it the first slot
            // in the array so when the rotator starts and the normal image is
            // removed, there's no jarring switch
            var initialBgUrl = $(bgRotatorParent).css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
            if ( initialBgUrl && initialBgUrl !== 'none' ){
                bgRotatorImageUrls.unshift(initialBgUrl);
            }
            // Do the same with normal bg credit
            var initialBgCredit = $(bgRotatorParent).find('.section-img-credit').text();
            if ( initialBgCredit ){
                bgRotatorImageCredits.unshift(initialBgCredit);
            }
            // Check existing for bg attachment setting, and update options with it
            options['bgAttachment'] = $(bgRotatorParent).css('background-attachment') ? $(bgRotatorParent).css('background-attachment') : options['bgAttachment'];

            // Once we're done adding to the array, get the # of imgs in it
            var bgRotatorNumberOfItems = bgRotatorImageCredits.length;

            // Set up preloader function
            function preloadImages(){
                var preloadArr = new Array();
                var i;
                // the "i" variable doesn't pass through into the "onload" function,
                // so create an extra counter variable:
                var bgRotatorPreloadCount = 0;
                for(i=0; i < bgRotatorNumberOfItems; i++){
                    preloadArr[i] = new Image();
                    // when image is loaded, add it to the markup and trigger
                    // our "preload complete" event
                    preloadArr[i].onload = function(){
                        $(bgRotatorParent)
                            .children('.js-bg-rotator-container')
                            .append('<div class="js-bg-rotate-img ' + bgRotatorImgClass + '" style="position:absolute;z-index:' + ( options['zIndex'] - 1 ) + ';display:none;top:0;left:0;height:100%;width:100%;background-attachment:' + options['bgAttachment'] + ';background-size:cover;background-image:url(' + bgRotatorImageUrls[bgRotatorPreloadCount] + ');background-position:center;"><div class="section-img-credit meta">' + bgRotatorImageCredits[bgRotatorPreloadCount] + '</div></div>')
                            .trigger( bgRotatorPreloadCompleteEvent, [{'count':bgRotatorPreloadCount}] );
                        bgRotatorPreloadCount++;
                    }
                    preloadArr[i].onerror = function(){
                        $(bgRotatorParent).trigger( bgRotatorPreloadCompleteEvent, [{'count':bgRotatorPreloadCount}] );
                        console.log('(Background rotator ' + index + '): Image "' + bgRotatorImageUrls[bgRotatorPreloadCount] + '" failed to load.');
                        bgRotatorPreloadCount++;
                    }
                    preloadArr[i].src = bgRotatorImageUrls[i];
                }
            }
            // Preload the images
            preloadImages();

            // Set up image rotator function
            function rotateBgImages(){
                var bgRotatorCurrentItem = 0;
                // show first item
                $('.' + bgRotatorImgClass).eq(bgRotatorCurrentItem).show();
                // loop through the items
                var rotateLoop = setInterval(function(){
                    $('.' + bgRotatorImgClass).eq(bgRotatorCurrentItem).fadeOut(options['crossfadeTime']);
                    if( bgRotatorCurrentItem == bgRotatorNumberOfItems - 1){
                        bgRotatorCurrentItem = 0;
                    } else {
                        bgRotatorCurrentItem++;
                    }
                    $('.' + bgRotatorImgClass).eq(bgRotatorCurrentItem).fadeIn(options['crossfadeTime']);
                }, options['displayTime']);
            }

            // On the "preload complete" event...
            $(bgRotatorParent).on( bgRotatorPreloadCompleteEvent, function(e, data){
                console.log('(Background rotator ' + index + '): Image ' + data.count + '/' + (bgRotatorNumberOfItems - 1) + ' pre-load complete.');
                // check if all the images have loaded by comparing the # of 'load complete' events
                // with the total # of images
                if ( data.count == bgRotatorNumberOfItems - 1 ){
                    console.log('(Background rotator ' + index + '): All preloading complete, starting rotator');
                    // Remove any normal background colors/images
                    $(bgRotatorParent).css({
                        'backgroundImage': 'none',
                        'backgroundColor': 'transparent',
                    });
                    $('#js-bg-rotator-' + index + '-content')
                        .css('position','relative')
                        .find('.section-img-credit')
                        .hide();
                    // Start rotator function
                    rotateBgImages();
                }
            });
        } else {
            console.log('(Background rotator ' + index + '): Did not find a list of image URLs to rotate.');
        }
    });
  };
}(jQuery));
jQuery(window).load(function(){
    jQuery('[data-bg-rotator], .js-bg-rotator').rotateBackgroundImages().get(0);
});
