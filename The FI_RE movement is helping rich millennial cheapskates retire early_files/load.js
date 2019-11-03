 (function () {
    tp = window["tp"] || [];

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
      
      var events = event.result.events;
      	
      	for(var index in events) {          	
          	if(events[index].eventType == "showTemplate") {
            	flyoutWillDisplay = {
    				display: true,
                  	moduleId: events[index].eventModuleParams.moduleId 
           	  	};
              	break;
            }
		}
      
      return flyoutWillDisplay; 
      
    }

    /* Callback executed if experience execution has been failed */
    function onExperienceExecutionFailed(event) {
    }
  
  	/**
     * Function to Send event data to Google Analytics
     * @param {String} templateName - Piano template name, defined in composer show template card
     * @param {String} eventName - Piano event name
     * @param {String} templateId - Piano template ID
    */
    function sendAnalytics(templateName, eventName, templateId) {
      var eventCategory = templateName ? templateName + ' - Piano' : 'Template name not defined - Piano';

      if ('function' !== typeof ga) {
        return;
      }

      // Send GA event: ga( 'send', 'event', 'category', 'action', 'label' );
      ga('send', 'event', eventCategory, eventName, templateId);
    }

    tp.push(["setAid", 'MH9NDnRj2b']);
    tp.push(["setEndpoint", 'https://buy.tinypass.com/api/v3']);
    tp.push(["setUseTinypassAccounts", false ]);
    tp.push(["setUsePianoIdUserProvider", true ]);

    /* checkout related events */
    tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
    tp.push(["addHandler", "checkoutClose", onCheckoutClose]);
    tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);
    tp.push(["addHandler", "checkoutCancel", onCheckoutCancel]);
    tp.push(["addHandler", "checkoutError", onCheckoutError]);


    /* user login events */
    tp.push(["addHandler", "loginRequired", onLoginRequired]);
    tp.push(["addHandler", "loginSuccess", onLoginSuccess]);

    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(["addHandler", "experienceExecute", onExperienceExecute]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);
  
  	  	/* Google Analytics */
  	tp.push(['addHandler', 'showTemplate', function(data) {
      	// sendAnalytics(templateName, eventName, templateId);
        // data.experienceActionId is set in the composer:
        // in the Show template card, click the arrow next to the edit icon, choose Dev Tools,
      	// and set the Module ID to whatever you want the templateName to be for GA.
    	sendAnalytics(data.experienceActionId, 'showTemplate', data.templateId);
 	}]);
  
	tp.push(['addHandler', 'customEvent', function(event) {
      var eventParams = JSON.parse(event.params.params);
      // sendAnalytics(templateName, eventName, templateId);
      // eventParams.experienceActionId is the same value from the composer show template card as described above.
      
      var eAction = eventParams.experienceActionId;
      if( eAction.indexOf('-clicked') >= 0 || eAction.indexOf('-close') >= 0){
      		sendAnalytics(eventParams.experienceActionId, event.eventName, eventParams.templateId);
      }		
    }]);

    tp.push(["init", function () {
        tp.experience.init()
    }]);
})();

// Created 7/30/2019 by tdintrone
// Sets a global variable to determine if a flyout will display.
// Object is updated in experienceExecute callback above.
console.log('flyoutLog');
var flyoutWillDisplay = window["flyoutWillDisplay"] || {};


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
    (function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("//cdn.tinypass.com/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|

