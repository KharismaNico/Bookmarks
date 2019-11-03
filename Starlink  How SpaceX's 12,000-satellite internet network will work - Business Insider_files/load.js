 (function () {
  	window.PianoESPConfig = {
        id: 11
    };
  
    tp = window["tp"] || [];
	if (window.location.href.match(/corporate\=prime/)){ 
		tp.push(['setCustomVariable', 'corporate', 'true']);
    }
  
    /* Checkout related */
    /**
     * Event properties
     *
     * chargeAmount - amount of purchase
     * chargeCurrency
     * uid
     * email
     * expires
     * rid
     * startedAt
     * termConversionId
     * termId
     * promotionId
     * token_list
     * cookie_domain
     * user_token
     *
     */
    function onCheckoutComplete(data) {
    }

    function onCheckoutExternalEvent() {
    }

    function onCheckoutClose(event) {
        /* Default behavior is to refresh the page on successful checkout */
        
      	if (event && event.state == "checkoutCompleted") {
       document.cookie = "promo_checkout_complete=true; path=/";
            location.reload();
        }
        
    }

    function onCheckoutCancel() {
    }

    function onCheckoutError() {
    }

    /* Meter callback */
    function onMeterExpired() {

    }

    /* Meter callback */
    function onMeterActive() {

    }

    /* Callback executed when a user must login */
    function onLoginRequired() {
        // this is a reference implementation only
        // your own custom login/registration implementation would
        // need to return the tinypass-compatible userRef inside the callback

        // mysite.showLoginRegistration(function (tinypassUserRef)
        // tp.push(["setUserRef", tinypassUserRef]); // tp.offer.startCheckout(params); // }
        // this will prevent the tinypass error screen from displaying

        return false;
    }

    /* Callback executed after a tinypassAccounts login */
    function onLoginSuccess() {
    }

    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    function onExperienceExecutionFailed(event) {
    }

    tp.push(["setAid", 'B6sIXKLiin']);
    tp.push(["setEndpoint", 'https://buy.tinypass.com/api/v3']);
    tp.push(["setUseTinypassAccounts", false]);
    tp.push(["setUsePianoIdUserProvider", true ]);

    /* checkout related events */
    tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
    tp.push(['addHandler', 'checkoutClose', onCheckoutClose]);
  	tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);
    tp.push(["addHandler", "checkoutCancel", onCheckoutCancel]);
    tp.push(["addHandler", "checkoutError", onCheckoutError]);
    tp.push(["addHandler", "startCheckout", function(){
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 30);
        document.cookie = "_pc_checkoutNotCompleted" + '=' + "true" + ';path=/;expires=' + d.toGMTString();
    }])


    /* user login events */
    tp.push(["addHandler", "loginRequired", onLoginRequired]);
    tp.push(["addHandler", "loginSuccess", onLoginSuccess]);

    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(['addHandler', 'experienceExecute', function() {
            if (tp.user.isUserValid()) {
                var userEmail = tp.pianoId.getUser().email;

                // then add ESP function with ^ user info
                if (window.PianoESPConfig && typeof window.PianoESPConfig === 'object') {
                    window.PianoESPConfig.email = window.PianoESPConfig.email || userEmail;
                }

                window.PianoESP &&
                    'function' == typeof window.PianoESP.handleUserEmail &&
                    window.PianoESP.handleUserEmail(userEmail);
            }
        }
    ]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);
    tp.push(["setFbPixelId", "1988166924554892"]);
    
    tp.push(["init", function () {
      tp.pianoId.init()
      tp.experience.init()
    }]);

})();


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
    (function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("//cdn.tinypass.com/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|

