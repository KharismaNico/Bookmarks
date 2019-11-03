/**
 * @is.js
 *
 * Functions and variables for creating and using adUnits, fb, ga and PP events. Behaviors of scrolling and infinite loading pages.
 *
 */
var PPInfiniteScroll = {};
!function () {
    var STICKY_AD_REFRESH_RATE = 30000; //Time to Refresh Anchor for Mobile and Tablet

    var RR_AD_REFRESH_RATE = 30000; //Time to Refresh RR for Tablet and Desktop

    var stickyAdLoaded = false;

    var currentScreenIndex = 1; //Screen to scroll. Incrementing every item in function loadPage()

    const windowScreenWidth = $(window).outerWidth();

    var asideBlockWidth;


/// IE is not supporting JS addBefore addAfter Append, so if you want to make a DOM manipulation use THIS custom functions:

    var addBefore = function (items, ad) {
        if(items instanceof HTMLElement) {
            items = [items];
        }

        if (items.length > 0) {
            items[0].insertAdjacentElement('beforebegin', ad);
        }
    };

    var addAfter = function (items, ad) {
        if(items instanceof HTMLElement) {
            items = [items];
        }

        if (items.length > 0) {
            items[items.length - 1].insertAdjacentElement('afterend', ad);
        }
    };

    var appendIntoAll = function (items, ad) {
        if(items instanceof HTMLElement){
            items = [items];
        }
        $.each(items, function (index, item) {
            item.insertAdjacentElement('beforeend', ad);
        });
    };

    /// IE is not supporting JS addBefore addAfter Append, so if you want to make a DOM manipulation use THIS custom functions:

//Main function, which is calling all needed layout functions
    function addInfiniteScrollScript() {
        $(function () {
            var RR1_TEXT_WIDGET_SELECTOR = '#is_rr';
            var RR1Elements = $(RR1_TEXT_WIDGET_SELECTOR);
            sendGaScreenEvent(0);
            googletag.cmd.push(function () {
                addContentAd(0);
                sendFbPixel('landing_page');
                sendFbPixel('first_page');
                addRR1Ad(RR1Elements);
            });
            $('.wp-pagenavi.clearfix').last().css('display', 'none')
        });
        googletag.cmd.push(function () {
            googletag.destroySlots();
        });
        $(document).ready(function () {
            asideBlockWidth = document.getElementsByClassName('aside')[0].offsetWidth;
            addPPTrackerEvent();
            sendFbPixel('RA');
            onScroll(maxScreenIndex);

            if (typeof(gtag) != "undefined" && typeof(window.PPTracker) == "object" && typeof(window.PPTracker.sendCustomEvent) == "function") {
                PPTracker.sendCustomEvent("layout:load:is");
            }
        });
    }

//Sending PP tracker event
    function addPPTrackerEvent() {
        if (typeof(window.PPTracker) == "object" && typeof(window.PPTracker.setFacebookRevenueReportingStatus) == "function") {
            window.PPTracker.setFacebookRevenueReportingStatus(true);
        }
    }

//Sending All FB pixels. Special Event for adUnits rendering RA + screen index
    function sendFbPixel(pixelName) {
        if (pixelName == 'RA') {
            var fbevent = [];
            googletag.cmd.push(function () {
                googletag.pubads().addEventListener("slotRenderEnded", function (event) {
                    if (event.slot.getSlotElementId().indexOf("placeholder") != -1) {
                        var parts = event.slot.getSlotElementId().split("-");

                        if (fbevent.indexOf(parts[parts.length - 1]) == -1) {
                            fbq("trackCustom", pixelName + parts[parts.length - 1], {value: "1"});
                            fbevent.push(parts[parts.length - 1]);
                        }
                    }
                });
            });
        }
        else {
            fbq("trackCustom", pixelName);
        }
    }

//Sending Screen rendering events to google analytics. Use ga version with gtag function.
    function sendGaScreenEvent(screenToSend) {
        if (typeof(gtag) != "undefined" && enableGAPV) {
            gtag("event", "PV" + screenToSend);
        }
    }

    var loadedScreen = [];
    var problemReport = false;

// Calling loadPage function on User scroll
    function onScroll(maxScreenIndex) {
        $(window).scroll(function () {
            var scrollHeight = $("body")[0].scrollHeight;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var scrolled = scrollTop + windowHeight;
            if (scrollHeight - scrolled <= 600) {
                try {
                    if (loadedScreen.indexOf(currentScreenIndex) == -1) {
                        addContentAd(currentScreenIndex);
                    }
                }
                catch (error) {
                    try {
                        if (!problemReport) {
                            gtag('event', 'user_crash', {
                                'event_label': error + error.stack,
                            });
                            problemReport = true;
                        }
                    }
                    catch (e) {
                    }

                }
                loadPage(currentScreenIndex, maxScreenIndex);
                loadedScreen.push(currentScreenIndex);
            }
        });
    }

    function sendAffiliateGAEvent() {
        $(document).ready(function () {
            var amazon_affiliate = $(".amazon_affiliate");
            $(".amazon_affiliate").click(function (event) {
                if (typeof(gtag) != "undefined") {
                    gtag('event', 'click', {
                        'event_category': 'Affiliate',
                        'event_label': $('#screen-' + amazon_affiliate.index(event.currentTarget) + ' div.page-title').text()
                    });
                }
            });
        });
    }

    sendAffiliateGAEvent();

    function loadPage(indexToRender, maxScreenIndex) {
        setTimeout(function () {
            if (indexToRender < currentScreenIndex || currentScreenIndex > maxScreenIndex) {
                return;
            }

            $('#screen-' + currentScreenIndex).fadeIn(500);

            sendGaScreenEvent(currentScreenIndex);

            currentScreenIndex = currentScreenIndex + 1;

            if (typeof(PPTracker) != "undefined") {
                if (currentScreenIndex > 0) {
                    PPTracker.push('page_view');
                }
            }

        }, 400);
    }
    var checkUnderdog = false; // Check if Underdog media is already on desktop
    var checkPlayBuzz = false; // Check if PlayBuzz  is already on page
    var checkTaboolaVideo = false; // Check if Taboola  is already on page
    var checkMinuteMedia = false; // Check if Outbrain Extra Widget is already on page
    var checkAvantis = false;  // Check if Avantis is already on page
    var checkAcross33 = false; // Check if 33Across is already on page
    var checkPrimis = false; // Check if Primis  is already on page

// Add all statick adUnits and Sticky
    function addContentAd(sectionId) {

        function pickInjectionFunction(adPosition) {
            switch (adPosition) {
                case 'after':
                    return addAfter;
                case 'before':
                    return addBefore;
                default:
                    return appendIntoAll;
            }
        }

        var topInjectionFunction = pickInjectionFunction(topAdPosition);
        var bottomInjectionFunction = pickInjectionFunction(bottomAdPosition);


        var items = $('#screen-' + sectionId + chooseMediaElement(topAdElement));

        var bottom_items = $('#screen-' + sectionId + chooseMediaElement(bottomAdElement));

        if (topAdPosition != 'none' && ( (sectionId >= topAdStartFrom) || (countPages == 1) )) {
            createAd(siteInitial + '-ad-top', sectionId, adUnitsParameters.adUnitPath, adUnitsParameters.adUnitSlotSizes, adUnitsParameters.adUnitSettingsTemplate, items, topInjectionFunction, true);
        }

        if (device != 'desktop' && bottomAdPosition != 'none' && ( (sectionId >= bottomAdStartFrom) || (countPages == 1) )) {
            createAd(siteInitial + '-ad-bottom', sectionId, adUnitsParameters.bottomadUnitPath, adUnitsParameters.bottomadUnitSlotSizes, adUnitsParameters.bottomadUnitSettingsTemplate, bottom_items, bottomInjectionFunction, true);
        } else {
            if (bottomAdPosition != 'none' && ( (sectionId >= bottomAdStartFrom) || (countPages == 1) )) {
                var position = document.createElement('div');
                position.className = 'bottom-mpu-placeholder';
                bottomInjectionFunction(bottom_items, position);
                createDivider(position);
                createAd(siteInitial + '-ad-left-bottom', sectionId, adUnitsParameters.leftbottomadUnitPath, adUnitsParameters.leftbottomadUnitSlotSizes, adUnitsParameters.leftbottomadUnitSettingsTemplate, position, appendIntoAll);
                createAd(siteInitial + '-ad-right-bottom', sectionId, adUnitsParameters.rightbottomadUnitPath, adUnitsParameters.rightbottomadUnitSlotSizes, adUnitsParameters.rightbottomadUnitSettingsTemplate, position, appendIntoAll);
            }
        }
        addStickyAd();

        if(currentScreenIndex > edgeStartFrom && !checkUnderdog && udmId != 0 && device === 'desktop') {
            checkUnderdog = true;
            addUnderdogAd();
        }

        if(!checkPlayBuzz && (playBuzzId.length!=0) && (playBuzzStartFrom != NaN)  && (currentScreenIndex >= playBuzzStartFrom) ) {
            checkPlayBuzz = true;
            addPlayBuzzAd();
        }
        if(!checkTaboolaVideo && currentScreenIndex >= tabolaVideoStartFrom) {
            checkTaboolaVideo = true;
            addTaboolaVideo();
        }

        if(!checkMinuteMedia && minuteMediaId != " " && (currentScreenIndex >= minuteMediaStartScreen )){
            checkMinuteMedia = true;
            var minuteMediaScript = document.createElement('script');
            minuteMediaScript.async = true;
            minuteMediaScript.src = '../../wp-content/plugins/fb-mobile-layout/js/minuteMedia.js';
            document.getElementsByTagName('head')[0].appendChild(minuteMediaScript);
        }

        if(currentScreenIndex > avantisScreen && !checkAvantis && device === 'mobile') {
            checkAvantis = true;
            addAvantis();
        }
        if(currentScreenIndex >= across33StartScreen && !checkAcross33 && across33AdId != '' && device === 'desktop') {
            checkAcross33 = true;
            addAcross33Ad();
        }

        if(!checkPrimis && (primisString.length != 0) && (currentScreenIndex >= primisStartScreen) ) {
            checkPrimis = true;
            addPrimisAd();
        }
    }

    function addUnderdogAd() {
        var underdog = document.createElement('script');
        underdog.async = "true";
        underdog.src = "//udmserve.net/udm/img.fetch?sid=" + udmId + ";tid=1;dt=6;";
        underdog.setAttribute('language', "javascript");
        underdog.setAttribute('data-cfasync', "false");
        appendIntoAll(document.getElementsByTagName('head'), underdog);
    }

    function addPlayBuzzAd() {
        var playBuzzScript = document.createElement('script');
        playBuzzScript.async = "true";
        playBuzzScript.innerHTML = "(function (d,s,n,id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.className = n; js.src = 'https://stream.playbuzz.com/embed/sdk.js?embedId=" + playBuzzId + "'; fjs.parentNode.insertBefore(js, fjs); }(document,'script','playbuzz-stream','stream-sdk-jssdk_rocketgeeks.com'));";
        var playBuzzDiv = document.createElement('div');
        playBuzzDiv.id = playBuzzId;
        document.getElementsByTagName('body')[0].appendChild(playBuzzScript);
        var item = $('#screen-' + playBuzzStartFrom + chooseMediaElement(' img')).last()[0];
        addBefore(item, playBuzzDiv);
    }

    function addAcross33Ad() {
        var acc = document.createElement('script');
        acc.innerHTML = "" +
        "var Tynt=Tynt||[];Tynt.push('aXdC7e4F0r6jm-aKlId8sQ');" +
        "Tynt.cmd=Tynt.cmd||[];Tynt.cmd.push(function(){" +
        "    Tynt.ads.display('','','inview');});" +
        "(function(){var h,s=document.createElement('script');" +
        "    s.src=(window.location.protocol==='https:'?" +
        "        'https':'http')+'://cdn.tynt.com/rciv.js';" +
        "    h=document.getElementsByTagName('script')[0];" +
        "    h.parentNode.insertBefore(s,h);})();";
        document.getElementsByTagName('head')[0].appendChild(acc);
    }

    function addPrimisAd() {
        var primis = document.createElement('script');
        primis.async = "true";
        primis.src = "https://live.sekindo.com/live/liveView.php?s=" + primisString;
        primis.setAttribute('language', "javascript");
        appendIntoAll(document.getElementById('screen-'+ primisStartScreen), primis);
    }

    function addTaboolaVideo() {
        var taboolaVideoDiv = document.createElement('div');
        taboolaVideoDiv.id = 'taboola-video';
        var taboolaVideoScript = document.createElement('script');
        taboolaVideoScript.innerHTML = "window._taboola = window._taboola || [];\n" +
                                        "_taboola.push({\n" +
                                        "mode: 'rbox-only-video',\n" +
                                        "placement: 'Video New',\n" +
                                        "container: 'taboola-video'\n" +
                                        "});";
        appendIntoAll(document.getElementById('screen-'+ tabolaVideoStartFrom), taboolaVideoDiv);
        appendIntoAll(document.getElementById('screen-'+ tabolaVideoStartFrom), taboolaVideoScript);
    }

    function addAvantis() {
        if (avantisIds.avantisId != '' && avantisIds.avantisTagId != '') {
            var avantisScript = document.createElement('script');
            avantisScript.src = "//cdn.avantisvideo.com/avm/js/video-loader.js?id=" + avantisIds.avantisId + "&tagId=" + avantisIds.avantisTagId + "&subId=&callback=";
            avantisScript.async = true;
            console.log(avantisScript.src);
            avantisScript.id = "avantisJS";
            appendIntoAll(document.getElementsByTagName('head'), avantisScript);
        }
    }

//Creating statick adUnits
    function createDivider(ad) {
        var placeholder = document.createElement('div');
        placeholder.className = 'ad_placeholder';

        var divider = document.createElement('div');
        divider.className = 'divider';
        appendIntoAll(placeholder, divider);

        var span = document.createElement('span');
        appendIntoAll(divider, span);
        span.innerHTML = 'ADVERTISEMENT';

        var line = document.createElement('div');
        line.className = 'line';

        addBefore(ad, placeholder);
        $(line).clone().insertAfter($(ad));
    }

    function chooseMediaElement(element) {
        if ((element == ' img') && $('#screen-' + currentScreenIndex + element).length == 0) {
            element = ' div.media_content';
        }
        return element;
    }


//Creating statick adUnits
    function createAd(divPref, sectionId, adUnitPath, adUnitSlotSizes, adUnitSettingsTemplate, items, injectionFunction, divider) {
        var filteredAdUnits = [];
        var slot = null;
        var ad = document.createElement('div');

        ad.style.textAlign = 'center';
        ad.id = divPref + '-' + device + '_placeholder-' + sectionId;
        if(device === 'desktop') {
            injectionFunction(items, ad);
        }
        if (divider && (device === 'desktop')) {
            createDivider(ad)
        }
        if(device != 'desktop') {
            var placeholder = document.createElement('div');
            placeholder.className = 'ad_'+ device +'_placeholder';
            placeholder.style.width = (windowScreenWidth - asideBlockWidth).toString() + 'px';
            var span = document.createElement('span');
            span.innerHTML = 'ADVERTISEMENT';
            appendIntoAll(placeholder, span);
            injectionFunction(items, placeholder);
            appendIntoAll(placeholder, ad)
        }

        if(typeof(apstag) != "undefined" ) {
            apstag.fetchBids({
                slots: [{
                    slotName: adUnitPath, //example: '12345/box-1'
                    sizes: [adUnitSlotSizes], //example: [[300,250], [300,600]]
                    slotID: ad.id //example: 'div-gpt-ad-1475102693815-0'
                }],
            timeout: 2e3
        }, function(bids) {
                googletag.cmd.push(function(){
                    apstag.setDisplayBids();
                });
            });
        }

        googletag.cmd.push(function () {
            slot = googletag.defineSlot(adUnitPath, adUnitSlotSizes, ad.id).addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        googletag.cmd.push(function () {
            googletag.display(ad.id);
        });

        adUnits.forEach(function (item) {
            if (item['code'] === adUnitSettingsTemplate) {
                var newObject = jQuery.extend(true, {}, item);
                delete newObject['transactionId'];
                newObject['code'] = ad.id;
                filteredAdUnits.push(newObject);
            }
        });

        pbjs.que.push(function () {
            pbjs.addAdUnits(filteredAdUnits);
            pbjs.requestBids({
                timeout: PREBID_TIMEOUT,
                bidsBackHandler: function () {
                    var adUnitIds = [];
                    var adSlots = [];
                    if (slot != null) {
                        adUnitIds.push(ad.id);
                        adSlots.push(slot);
                    }
                    if (adUnitIds.length > 0) {
                        pbjs.setTargetingForGPTAsync(adUnitIds);
                        googletag.pubads().refresh(adSlots);
                    }
                },
                adUnits: filteredAdUnits
            });
        });
    }

//Adding RR for Tablet and Desktop

    function addRR1Ad(elements) {
        if (device === 'mobile' || countPages == 1) {
            return;
        }
        var intervalToRefresh = RR_AD_REFRESH_RATE;
        if (elements.length === 1) {
            createRefreshingAd(siteInitial + '-RR1-ad', adUnitsParameters.RR1adUnitPath, adUnitsParameters.RR1adUnitSlotSizes, adUnitsParameters.RR1adUnitSettingsTemplate, elements, intervalToRefresh);
        }
    }

//Adding Sticky for mobile and tablet
    function addStickyAd() {
        if (stickyAdLoaded || stickyAdStartFrom == "none" || currentScreenIndex < Number(stickyAdStartFrom) || device === 'desktop') {
            return;
        }
        var intervalToRefresh = STICKY_AD_REFRESH_RATE;
        stickyBlock.css({"background-color":"#e6e6e6", "border-top": " 1px solid #d4d4d4",  "width":windowScreenWidth.toString() + 'px', "min-height":"50px"});
        createRefreshingAd(siteInitial + '-sticky-ad', adUnitsParameters.stickyadUnitPath, adUnitsParameters.stickyadUnitSlotSizes, adUnitsParameters.stickyadUnitSettingsTemplate, stickyBlock, intervalToRefresh);
        stickyAdLoaded = true;
    }

    //Creating adUnits which will refresh every @intervalToRefresh seconds
    function createRefreshingAd(divPref, adUnitPath, adUnitSlotSizes, adUnitSettingsTemplate, items, intervalToRefresh) {
        var countOfUnfocusRefreshesForRR = 0;
        var filteredAdUnits = [];
        var slot = null;
        var ad = document.createElement('div');

        ad.id = divPref + '_' + device;
        appendIntoAll(items, ad);
        googletag.cmd.push(function () {
            if(typeof(apstag) != "undefined" ) {
                apstag.setDisplayBids();
            }
            googletag.display(ad.id);
        });

        adUnits.forEach(function (item) {
            if (item['code'] === adUnitSettingsTemplate) {
                var newObject = jQuery.extend(true, {}, item);
                delete newObject['transactionId'];
                newObject['code'] = ad.id;
                filteredAdUnits.push(newObject);
            }
        });
        if(typeof(apstag) != "undefined" ) {
            apstag.fetchBids({
                slots: [{
                    slotName: adUnitPath,
                    sizes: [adUnitSlotSizes],
                    slotID: ad.id
                }],
                timeout: 2e3
            });
        }
        googletag.cmd.push(function () {
            slot = googletag.defineSlot(adUnitPath, adUnitSlotSizes, ad.id).addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        pbjs.que.push(function () {
            pbjs.addAdUnits(filteredAdUnits);
            pbjs.requestBids({
                timeout: PREBID_TIMEOUT,
                bidsBackHandler: function () {
                    pbjs.setTargetingForGPTAsync([ad.id]);
                    googletag.pubads().refresh([slot]);
                },
                adUnits: filteredAdUnits
            });
        });

        setInterval(function () {
            pbjs.que.push(function () {
                pbjs.requestBids({
                    timeout: PREBID_TIMEOUT,
                    adUnitCodes: [ad.id],
                    bidsBackHandler: function () {
                        if (device == 'desktop') {
                            if (document.hasFocus()) {
                                countOfUnfocusRefreshesForRR = 0;
                                pbjs.setTargetingForGPTAsync([ad.id]);
                                if(typeof (apstag) !="undefined" ) {
                                    apstag.fetchBids({
                                        slots: [{
                                            slotName: adUnitPath,
                                            sizes: [adUnitSlotSizes],
                                            slotID: ad.id
                                        }],
                                    });
                                    apstag.setDisplayBids();
                                }
                                googletag.pubads().refresh([slot]);
                            }
                            else {
                                if (countOfUnfocusRefreshesForRR < 3) {
                                    pbjs.setTargetingForGPTAsync([ad.id]);
                                    if(typeof (apstag) !="undefined" ) {
                                        apstag.setDisplayBids();
                                    }
                                    googletag.pubads().refresh([slot]);
                                    countOfUnfocusRefreshesForRR++;
                                }
                            }
                        }
                        else {
                            pbjs.setTargetingForGPTAsync([ad.id]);
                            if(typeof (apstag) !="undefined" ) {
                                apstag.setDisplayBids();
                            }
                            googletag.pubads().refresh([slot]);
                        }
                    }
                });
            });
        }, intervalToRefresh);
    }

    PPInfiniteScroll.addInfiniteScrollScript = addInfiniteScrollScript;
}();