/*
 * Copyright (c) 2010 Nick Galbreath
 * http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* base64 encode/decode compatible with window.btoa/atob
 *
 * window.atob/btoa is a Firefox extension to convert binary data (the "b")
 * to base64 (ascii, the "a").
 *
 * It is also found in Safari and Chrome.  It is not available in IE.
 *
 * if (!window.btoa) window.btoa = base64.encode
 * if (!window.atob) window.atob = base64.decode
 *
 * The original spec's for atob/btoa are a bit lacking
 * https://developer.mozilla.org/en/DOM/window.atob
 * https://developer.mozilla.org/en/DOM/window.btoa
 *
 * window.btoa and base64.encode takes a string where charCodeAt is [0,255]
 * If any character is not [0,255], then an DOMException(5) is thrown.
 *
 * window.atob and base64.decode take a base64-encoded string
 * If the input length is not a multiple of 4, or contains invalid characters
 *   then an DOMException(5) is thrown.
 */
var base64 = {};
base64.PADCHAR = '=';
base64.ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

base64.makeDOMException = function() {
    // sadly in FF,Safari,Chrome you can't make a DOMException
    var e, tmp;

    try {
        return new DOMException(DOMException.INVALID_CHARACTER_ERR);
    } catch (tmp) {
        // not available, just passback a duck-typed equiv
        // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error
        // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error/prototype
        var ex = new Error("DOM Exception 5");

        // ex.number and ex.description is IE-specific.
        ex.code = ex.number = 5;
        ex.name = ex.description = "INVALID_CHARACTER_ERR";

        // Safari/Chrome output format
        ex.toString = function() { return 'Error: ' + ex.name + ': ' + ex.message; };
        return ex;
    }
}

base64.getbyte64 = function(s,i) {
    // This is oddly fast, except on Chrome/V8.
    //  Minimal or no improvement in performance by using a
    //   object with properties mapping chars to value (eg. 'A': 0)
    var idx = base64.ALPHA.indexOf(s.charAt(i));
    if (idx === -1) {
        throw base64.makeDOMException();
    }
    return idx;
}

base64.decode = function(s) {
    // convert to string
    s = '' + s;
    var getbyte64 = base64.getbyte64;
    var pads, i, b10;
    var imax = s.length
    if (imax === 0) {
        return s;
    }

    if (imax % 4 !== 0) {
        throw base64.makeDOMException();
    }

    pads = 0
    if (s.charAt(imax - 1) === base64.PADCHAR) {
        pads = 1;
        if (s.charAt(imax - 2) === base64.PADCHAR) {
            pads = 2;
        }
        // either way, we want to ignore this last block
        imax -= 4;
    }

    var x = [];
    for (i = 0; i < imax; i += 4) {
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) |
            (getbyte64(s,i+2) << 6) | getbyte64(s,i+3);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff));
    }

    switch (pads) {
    case 1:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12) | (getbyte64(s,i+2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
        break;
    case 2:
        b10 = (getbyte64(s,i) << 18) | (getbyte64(s,i+1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
    }
    return x.join('');
}

base64.getbyte = function(s,i) {
    var x = s.charCodeAt(i);
    if (x > 255) {
        throw base64.makeDOMException();
    }
    return x;
}

base64.encode = function(s) {
    if (arguments.length !== 1) {
        throw new SyntaxError("Not enough arguments");
    }
    var padchar = base64.PADCHAR;
    var alpha   = base64.ALPHA;
    var getbyte = base64.getbyte;

    var i, b10;
    var x = [];

    // convert to string
    s = '' + s;

    var imax = s.length - s.length % 3;

    if (s.length === 0) {
        return s;
    }
    for (i = 0; i < imax; i += 3) {
        b10 = (getbyte(s,i) << 16) | (getbyte(s,i+1) << 8) | getbyte(s,i+2);
        x.push(alpha.charAt(b10 >> 18));
        x.push(alpha.charAt((b10 >> 12) & 0x3F));
        x.push(alpha.charAt((b10 >> 6) & 0x3f));
        x.push(alpha.charAt(b10 & 0x3f));
    }
    switch (s.length - imax) {
    case 1:
        b10 = getbyte(s,i) << 16;
        x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
               padchar + padchar);
        break;
    case 2:
        b10 = (getbyte(s,i) << 16) | (getbyte(s,i+1) << 8);
        x.push(alpha.charAt(b10 >> 18) + alpha.charAt((b10 >> 12) & 0x3F) +
               alpha.charAt((b10 >> 6) & 0x3f) + padchar);
        break;
    }
    return x.join('');
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}



(function() {

  !window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
    WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
      var target = this;

      registry.unshift([target, type, listener, function (event) {
        event.currentTarget = target;
        event.preventDefault = function () { event.returnValue = false };
        event.stopPropagation = function () { event.cancelBubble = true };
        event.target = event.srcElement || target;

        listener.call(target, event);
      }]);

      this.attachEvent("on" + type, registry[0][3]);
    };

    WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
      for (var index = 0, register; register = registry[index]; ++index) {
        if (register[0] == this && register[1] == type && register[2] == listener) {
          return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
        }
      }
    };

    WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
      return this.fireEvent("on" + eventObject.type, eventObject);
    };
  })(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);

})();

function Cludo(search) {

    // mandatory settings
    this.customerId = search.customerId;
    this.engineId = typeof search.engineId !== 'undefined' ? search.engineId : search.siteId;
    this.searchUrl = search.searchUrl;

    // Optional settings
    //   set the default api url based on customer id.
    this.defaultApiUrl = (this.customerId >= 10000000) ? 'https://api-us1.cludo.com/api/v3' : 'https://api.cludo.com/api/v3';
    this.searchApiUrl = typeof search.searchApiUrl !== 'undefined' ? search.searchApiUrl : this.defaultApiUrl;
    this.searchApiUrlPublic = typeof search.searchApiUrlPublic !== 'undefined' ? search.searchApiUrlPublic : this.defaultApiUrl;
    this.statisticsApiUrl = typeof search.statisticsApiUrl !== 'undefined' ? search.statisticsApiUrl : 'https://stat.cludo.com';
    this.logPageVisits = typeof search.logPageVisits !== 'undefined' ? search.logPageVisits : true;
    this.searchSiteKey = typeof search.searchSiteKey !== 'undefined' ? search.searchSiteKey : 'SearchKey';
    this.intranetSearch = typeof search.intranetSearch !== 'undefined' ? search.intranetSearch : false;
    this.customerTemplate = typeof search.customerTemplate !== 'undefined' ? search.customerTemplate : 'SearchContent';
    this.disableAutocomplete = typeof search.disableAutocomplete !== 'undefined' ? search.disableAutocomplete : false;
    this.richAutocomplete = typeof search.richAutocomplete !== 'undefined' ? search.richAutocomplete : false;
    this.autocompleteForceUseTemplate = typeof search.autocompleteForceUseTemplate !== 'undefined' ? search.autocompleteForceUseTemplate : false;
    this.facets = typeof search.facets !== 'undefined' ? search.facets : { "Category": [] };
    this.applyMultiLevelFacets = typeof search.applyMultiLevelFacets !== 'undefined' ? search.applyMultiLevelFacets : true;
    this.initFacets = typeof search.initFacets !== 'undefined' ? search.initFacets : null;
    this.filters = typeof search.filters !== 'undefined' ? search.filters : {};
    this.sortOrder = typeof search.sortOrder !== 'undefined' ? search.sortOrder : {};
    this.rangeFacets = typeof search.rangeFacets !== 'undefined' ? search.rangeFacets : {};
    this.searchInputs = typeof search.searchInputs !== 'undefined' ? search.searchInputs : ["cludo-search-form"];
    this.perPage = typeof search.perPage !== 'undefined' ? search.perPage : null;
    this.bannerIsInSearchTemplate = typeof search.bannerIsInSearchTemplate !== 'undefined' ? search.bannerIsInSearchTemplate : true;
    this.xhrRequestHeader = typeof search.xhrRequestHeader !== 'undefined' ? search.xhrRequestHeader : "application/json";

    this.searchResultsWrapper = typeof search.searchResultsWrapper !== 'undefined' ? search.searchResultsWrapper : 'cludo-search-results';
    this.translateProvider.language = typeof search.language !== 'undefined' ? search.language : (typeof this.filters.Language !== 'undefined' ? this.filters.Language[0] : 'da');
    this.initSearchBoxText = typeof search.initSearchBoxText !== 'undefined' ? search.initSearchBoxText : '';
    this.loading = typeof search.loading != 'undefined' ? search.loading : '<img src="https://customer.cludo.com/img/loading.gif" class="loading" />';
    this.changeWindowLocation = typeof search.changeWindowLocation != 'undefined' ? search.changeWindowLocation : true;

    this.hideResultsCount = typeof search.hideResultsCount !== 'undefined' ? search.hideResultsCount : false;
    this.hideSearchFilters = typeof search.hideSearchFilters !== 'undefined' ? search.hideSearchFilters : false;
    this.hideSearchDidYouMean = typeof search.hideSearchDidYouMean !== 'undefined' ? search.hideSearchDidYouMean : false;
    //To be used when customer wants to show facets from other categories, when there are no results for currently selected caegory
    //Default value is true (facets always hidden if there ar no result)
    this.hideSearchFiltersIfNoResult = typeof search.hideSearchFiltersIfNoResult !== 'undefined' ? search.hideSearchFiltersIfNoResult : true;
    this.customNoResultsMessage = typeof search.customNoResultsMessage !== 'undefined' ? search.customNoResultsMessage : null;
    this.resetFiltersBeforeSearch = typeof search.resetFiltersBeforeSearch !== 'undefined' ? search.resetFiltersBeforeSearch : false;

    this.useFixedQueryInResultsCount = typeof search.useFixedQueryInResultsCount !== 'undefined' ? search.useFixedQueryInResultsCount : false;
    this.allowSearchWithoutSearchword = typeof search.allowSearchWithoutSearchword !== 'undefined' ? search.allowSearchWithoutSearchword : false;

    this.jumpToTopOnFacetClick = typeof search.jumpToTopOnFacetClick !== 'undefined' ? search.jumpToTopOnFacetClick : true;

    //Endless scroll
    this.endlessScroll = typeof search.endlessScroll !== 'undefined' ? search.endlessScroll : null;
    this.endlessScrollElements = { scrolledElement: null, documentElement: null, backToTop: null, loadMore: null };

    // Use this to toggle the image tracking.
    this.enableExtendedTracking = typeof search.enableExtendedTracking !== 'undefined' ? search.enableExtendedTracking : true;

    //custom callback function after results loaded
    this.customCallbackAfterSearch = typeof search.customCallbackAfterSearch !== 'undefined' ? search.customCallbackAfterSearch : false;

    this.type = typeof search.type !== 'undefined' ? search.type : 'standard';

    // Only used when type == 'inline'.
    this.template = typeof search.template !== 'undefined' ? search.template : 'standardInline';
    this.translateSearchTemplates = typeof search.translateSearchTemplates !== 'undefined' ? search.translateSearchTemplates : false;
    this.ovarlayResultsWrapperOpenClass = typeof search.ovarlayResultsWrapperOpenClass !== 'undefined' ? search.ovarlayResultsWrapperOpenClass : '';
    this.useStandardSearchTemplate = typeof search.useStandardSearchTemplate !== 'undefined' ? search.useStandardSearchTemplate : true;
    this.searchBoxPosition = typeof search.theme !== 'undefined' && typeof search.theme.searchBoxPosition !== 'undefined' ? search.theme.searchBoxPosition : { align: 'right', x: 20, y: 20 };
    this.themeColor = typeof search.theme !== 'undefined' && typeof search.theme.themeColor !== 'undefined' ? search.theme.themeColor : '';
    this.elementFocusColor = typeof search.theme !== 'undefined' && typeof search.theme.elementFocusColor !== 'undefined' ? search.theme.elementFocusColor : '';
    this.themeBannerColor = typeof search.theme !== 'undefined' && typeof search.theme.themeBannerColor !== 'undefined' ? search.theme.themeBannerColor : '';
    this.borderRadius = typeof search.theme !== 'undefined' && typeof search.theme.borderRadius !== 'undefined' ? search.theme.borderRadius : 0;
    this.borderRadiusInput = typeof search.theme !== 'undefined' && typeof search.theme.borderRadiusInput !== 'undefined' ? search.theme.borderRadiusInput : 0;
    this.showSearchPage = typeof search.showSearchPage !== 'undefined' ? search.showSearchPage : true;

    // This flag will make the autocomplete box persist. Set this in the console for easier styling.
    this.debug = false;

    this.eventHandler = {
        on: window.attachEvent ? "on" : '',
        attach: window.attachEvent ? "attachEvent" : "addEventListener",
        detach: window.attachEvent ? "detachEvent" : "removeEventListener"
    };

    this.authorizationKey = '';
    this.websiteSettings = [];

    this.sessionIdKey = "cludoSessionId";
    this.sessionIdStartKey = "cludoSessionIdStart";
    this.sessionExpiration = 1800000; //30 minutes

    this.lastQuery = null;
    this.querySessionId = null;

    this.params = {
        ResponseType: "JsonHtml",
        Template: this.customerTemplate,
        facets: {},
        filters: this.filters,
        page: 1,
        query: '',
        text: '',
        sort: this.sortOrder,
        rangeFacets: this.rangeFacets,
        perPage: this.perPage,
        applyMultiLevelFacets: this.applyMultiLevelFacets
    };
    this.searchQueryLength = 0;
    this.paramsPrefix = "cludo";

    this.searchInputsLength = 0;

    this.searchBoxInputs = {};
    this.searchBoxButtons = {};
    this.searchBoxClearButtons = {};
    this.searchBoxFacets = {};

    this.elemSearchResults = {
        results: null,
        pagination: null,
        filters: null,
        didYouMean: null,
        resultCount: null,
        banner: null
    };
    this.elemAutocomplete = {
        lists: [],
        listsItems: []
    };
    this.didYouMean = '';
    this.totalDocuments = 0;
    this.fixedQuery = null;
    this.responseTime = null;

    this.selectedIndex = -1;
    this.isSearchResultPage = false;
    this.timeoutId = null;
    this.hideAutocomplete = false;

    this.quicklink = {};

    this.isOverlaySearch = false;
    this.openedOverlayOnInit = false;
    this.elemOverlaySearch = {
        closeButton: null,
        overlay: null,
        overlayInner: null,
        overlayHeader: null,
        overlayBody: null,
        overlayFooter: null,
        searchWrapper: null,
        searchBox: null,
        searchBoxLabel: null,
        searchBoxInput: null,
        searchBoxButton: null,
        searchBoxContent: null,
        searchBoxContentLabel: null,
        searchBoxContentInput: null,
        searchBoxContentButton: null,
        poweredBy: null,
        poweredByMobile: null
    };
    this.isLazyLoading = false;
    this.doSearchWithDelayTimer = null;
    this.referalHostName = location.hostname;

    // compatibility variables
    this.usingOnChange = false;     // This gets flipped to true if the browser support input change event
    this.browserIsIE = window.navigator.userAgent.indexOf('MSIE') > 0;
    this.browserIsEdge14 = typeof window.navigator.appVersion !== 'undefined' && window.navigator.appVersion.indexOf('Edge/14') > 0;

    //accessibility
    this.userIsUsingTabulator = false;
    this.resultItemCurrentlyFocusedElement = null;
    this.focusedElementBeforeOverlayOpen = null;
    this.focusInputElementTimer = null;
    this.resetFocusTimerPoweredBy = null;
    this.resetFocusTimerCloseButton = null;

    //static endpoint variables. These exist in case customers need to manually override them.
    this.autoCompleteControllerAction = "Autocomplete";
}


Cludo.prototype = {
    constructor: Cludo,

    init: function() {
        //this.logPageVisit();

        this.isOverlaySearch = this.isSearchWithOverlay();

        if (this.isOverlaySearch && this.type !== 'customOverlay') {
            this.endlessScroll = { stopAfterPage: 3, resultsPerPage: 8, bottomOffset: 50 };
            this.endlessScrollElements = { scrolledElement: null, documentElement: null, backToTop: null, loadMore: null };
            if (this.useStandardSearchTemplate) {
                this.params['overlay'] = 'standard' + this.translateProvider.language;
            }
            if (this.type === 'standardOverlayWithDynamicSearchBox') {
                this.overlaySetTopSearchBox();
            }
            if (this.themeColor !== '' || this.borderRadius !== 0) {
                this.overlaySetColorTheme();
            }
        }
        else if (this.type === 'inline') {
            // Support old version where we internationalize by template
            if (this.template === 'facets' || this.template === 'noFacets' || this.template === 'nofacets') {
                this.params['overlay'] = this.template + this.translateProvider.language;

                if (this.template === "noFacets" || this.template === "nofacets") {
                    this.hideSearchFilters  = true;
                }
            }
            else {
                // if template is NOT facets or noFacets then we're using I18N templates
                this.translateSearchTemplates = true;
                this.params['overlay'] = this.template + 'I18N';
            }
        }

        this.searchInputsLength = this.searchInputs.length;

        // all inputs box should be recognized at the begining
        this.setInputElements();
        if (!this.isOverlaySearch || (this.isOverlaySearch && this.type == 'customOverlay')) {
            //set search results for business search on init or for cutom overlay (standard search get seperate call to that method, when overlay is opened)
            this.setResultElements();
        }
        this.setLoadingElements();
        this.setIsSearchResultPage();
        this.setFacets();
        this.setInitParams();

        if (this.elemSearchResults.results != null) {
            this.getWebsiteSettings();
        }

        for (var i = 0, len = this.searchInputsLength; i < len; i++) {
            var inputsWrapper = document.getElementById(this.searchInputs[i]);
            if (inputsWrapper !== null) {
                this.searchBoxWrapperEvents(inputsWrapper);
                if (this.isOverlaySearch) {
                    this.helpers.addClass(document.getElementById(this.searchInputs[i]), "cludo-search_autocomplete");
                }
            }
            if (this.searchBoxInputs[this.searchInputs[i]] != null) {
                this.searchBoxInputEvents(this.searchBoxInputs[this.searchInputs[i]]);
            }
            if (this.searchBoxButtons[this.searchInputs[i]] != null) {
                this.searchBoxEvents(this.searchBoxButtons[this.searchInputs[i]]);
            }
            if (this.searchBoxClearButtons[this.searchInputs[i]] != null) {
                this.searchBoxClearEvents(this.searchBoxClearButtons[this.searchInputs[i]]);
            }
        }

        if (this.isSearchResultPage && this.endlessScroll) {
            if (!this.isOverlaySearch) {
                this.endlessScrollElements.scrolledElement = window;
                this.endlessScrollElements.documentElement = document.documentElement;
            }
            if (this.isOverlaySearch && this.type == 'customOverlay') {
                this.endlessScrollElements.scrolledElement = this.endlessScrollElements.documentElement = this.getResultWrapperContainer();
            }
            this.endlessScrollAddScrollEvent();
            this.endlessScrollSetElements(this.getResultWrapperContainer());
        }

        if (!this.browserIsIE && this.isSearchResultPage) {
            var _self = this;

            history.replaceState({ path: window.location.href }, '');
            window.addEventListener('popstate', function (event) {
                    history.replaceState({ path: window.location.href }, '');
                    if (null !== event.state && _self.isSearchResultPage) {
                        location.reload();
                    }
                });
        }
    },

    logPageVisit: function() {
        var _self = this;

        if (!this.logPageVisits)
            return;

        try {
            var params = {
                url: location.href,
                eid: this.engineId,
                cid: this.customerId
            };

            var queryString = this.helpers.objectToQueryString(params);

            var elemDiv = document.createElement('img');
            elemDiv.src = this.statisticsApiUrl + '/__ctm.gif?' + queryString;
            elemDiv.style = "display: none;"
            document.body.appendChild(elemDiv);
        } catch (err) {
            //Ignore
        }

    },

    // SETTERS
    setInputElements: function() {
        for (var i = 0, lenI = this.searchInputsLength; i < lenI; i++) {
            var inputsWrapper = document.getElementById(this.searchInputs[i]);
            if (inputsWrapper != null) {
                this.searchBoxInputs[this.searchInputs[i]] = inputsWrapper.querySelectorAll('input[type=text]')[0] || inputsWrapper.querySelectorAll('input[type=search]')[0];
                this.searchBoxButtons[this.searchInputs[i]] = inputsWrapper.getElementsByTagName('button')[0] || inputsWrapper.querySelectorAll('input[type=submit]')[0] || inputsWrapper.querySelectorAll('input[type=image]')[0];
                if (typeof inputsWrapper.querySelectorAll('.cludo-search-query-clear')[0] !== 'undefined') {
                    this.searchBoxClearButtons[this.searchInputs[i]] = inputsWrapper.querySelectorAll('.cludo-search-query-clear')[0];
                }
                if (typeof inputsWrapper.querySelectorAll('input[type=hidden]')[0] !== 'undefined') {
                    this.searchBoxFacets[this.searchInputs[i]] = {};
                    var dataFacets = inputsWrapper.querySelectorAll('input[type=hidden]');
                    for (var j = 0, lenJ = dataFacets.length; j < lenJ; j++) {
                        var facetName = inputsWrapper.querySelectorAll('input[type=hidden]')[j].getAttribute("data-facet-name");
                        var facetValue = inputsWrapper.querySelectorAll('input[type=hidden]')[j].getAttribute("data-facet");
                        this.searchBoxFacets[this.searchInputs[i]][facetName] = facetValue;
                    }
                }
            }
        }
    },
    setResultElements: function() {
        this.resultsWrapper = this.getResultWrapperContainer();
        if (this.resultsWrapper != null) {
            if (this.resultsWrapper.querySelector(".search-result-count") === null && !this.hideResultsCount) {
                this.helpers.addElement(this.resultsWrapper, "search-result-count");
            }
            if (this.resultsWrapper.querySelector(".search-did-you-mean") === null && !this.hideSearchDidYouMean) {
                this.helpers.addElement(this.resultsWrapper, "search-did-you-mean", '', "complementary");
            }
            if (this.resultsWrapper.querySelector(".search-results") === null) {
                this.helpers.addElement(this.resultsWrapper, "search-results");
            }
            if (this.resultsWrapper.querySelector(".search-filters") === null && !this.hideSearchFilters) {
                this.helpers.addElement(this.resultsWrapper, "search-filters");
            }

            this.elemSearchResults = this.getSearchResultsElements();
        }
    },

    setLoadingElements: function() {
        if (this.isOverlaySearch && this.type !== 'customOverlay') {
            this.loading = '<div id="cludo-loading"><div id="loading_1" class="loading">Loading</div><div id="loading_2" class="loading">Loading</div></div>';
        } else {
            this.loading = '<div id="cludo-loading">' + this.loading + '</div>';
        }
    },

    // Wrapper to get the container
    getResultWrapperContainer: function() {
        return document.getElementById(this.searchResultsWrapper);
    },

    // get search result object which contains the results, counts, did you mean and filters
    getSearchResultsElements: function() {
        var resultsWrapper = this.getResultWrapperContainer();

        return {
            results: resultsWrapper.querySelector(".search-results"),
            resultCount: this.hideResultsCount ? null : resultsWrapper.querySelector(".search-result-count"),
            didYouMean: this.hideSearchDidYouMean ? null : resultsWrapper.querySelector(".search-did-you-mean"),
            filters: this.hideSearchFilters ? null : resultsWrapper.querySelectorAll(".search-filters"),
            banner: !this.bannerIsInSearchTemplate ? resultsWrapper.querySelector(".search-banner") : null
        }
    },

    setIsSearchResultPage: function() {
        var currentUrl = this.helpers.getWindowLocation();
        //return currentUrl.indexOf(this.searchUrl) > -1
        if (currentUrl.indexOf(this.searchUrl) > -1) {
            this.isSearchResultPage = true;
        }
    },

    getWebsiteSettings: function() {
        var httpServiceUrl = this.searchApiUrl + "/" + this.customerId + "/" + this.engineId + "/websites/publicsettings";
        this.httpRequest("GET", httpServiceUrl, "settingsTemplate", '');
    },

    getAuthorizationKey: function() {
        var key = this.customerId + ":" + this.engineId + ":" + this.searchSiteKey;
        var base64key = base64.encode(key);
        return base64key;
    },

    setFacets: function() {
        if (typeof this.facets.length === 'undefined' && !this.helpers.isEmpty(this.facets)) {
            if (this.initFacets !== null) {
                for (var key in this.facets) {
                    if (typeof this.initFacets[key] !== 'undefined') {
                        this.facets[key] = this.initFacets[key];
                    } else {
                        this.facets[key] = [];
                    }
                }
            }
            this.params.facets = this.facets;
        } else {
            var setInitFacet = true;
            for (var i = 0, len = this.facets.length; i < len; i++) {
                if (this.helpers.getURLParam(this.paramsPrefix + this.facets[i]) != '') {
                    setInitFacet = false;
                }
            }
            for (var i = 0, len = this.facets.length; i < len; i++) {
                var facetValue = [];
                if (this.initFacets !== null && setInitFacet) {
                    facetValue = typeof this.initFacets[this.facets[i]] !== 'undefined' ? this.initFacets[this.facets[i]] : [];
                }
                this.params.facets[this.facets[i]] = facetValue;
            }
            this.facets = this.params.facets;
        }
    },

    setInitParams: function() {
        if (!this.intranetSearch) {
            this.authorizationKey = this.getAuthorizationKey();
        }

        this.params.query = this.helpers.stripHtmlTags(this.helpers.getURLParam(this.paramsPrefix + "query"));
        this.showSearchPage = this.helpers.getURLParam(this.paramsPrefix + "showsearchpage") === "false" ? false : this.showSearchPage;
        this.searchQueryLength = this.params.query.replace(/\s/g, '').length;
        if (((this.params.query !== '' && this.searchQueryLength > 0) || this.allowSearchWithoutSearchword) && (this.isSearchResultPage || this.isOverlaySearch)) {
            this.params.page = this.helpers.getURLParam(this.paramsPrefix + "page") != '' ? parseInt(this.helpers.getURLParam(this.paramsPrefix + "page")) : 1;
            if (this.showSearchPage) {

                for (var i = 0, len = this.searchInputsLength; i < len; i++) {
                    this.setElementValue(this.searchBoxInputs[this.searchInputs[i]], this.params.query);
                    if (this.searchBoxClearButtons[this.searchInputs[i]] != null && this.params.query !=="") {
                        this.helpers.removeClass(this.searchBoxClearButtons[this.searchInputs[i]], 'cludo-hidden');
                    }
                }

                for (var facet in this.params.facets) {
                    var value = this.helpers.getURLParam(this.paramsPrefix + facet);
                    if (value != '') {
                        var facetValues = value.split(",");
                        this.params.facets[facet] = facetValues;
                    }
                }

                for (var filter in this.params.filters) {
                    var value = this.helpers.getURLParam(this.paramsPrefix + filter);
                    if (value != '') {
                        var filterValues = value.split(",");
                        this.params.filters[filter] = filterValues;
                    }
                }

                if (this.isOverlaySearch && this.params.query !== '') {
                    this.openedOverlayOnInit = true;
                    this.overlayOpenModalWithSearch();
                }
                if (this.endlessScroll) {
                    this.doSearchWithDelay(1, this.params.page);
                } else {
                    this.doSearch();
                }
            } else {
                // if(typeof this.helpers.getURLParam(this.paramsPrefix + "ql") != "undefined" && this.helpers.getURLParam(this.paramsPrefix + "ql") != ""){
                //     this.track(1);
                // }                
            }
        }
        /*if(this.params.query == ''){
            var d = this.translateProvider.translate("no_search_term");
            this.errorTemplate(d)
        }*/
    },

    setElementValue: function(element, value) {
        if (element != null && value != "*") {
            element.value = value;
        }
    },

    setFacetsBeforeSearch: function(boxId) {
        this.params.page = 1;
        var facet = this.searchBoxFacets[boxId],
            i = 0;
        if (typeof facet != 'undefined' && !this.helpers.isEmpty(facet)) {
            for (var key in facet) {
                this.facets[key] = [];
                this.facets[key][0] = this.helpers.getPredefinedFacet(boxId, i);
                i++;
            }
        } else {
            if (this.initFacets !== null) {
                for (var key in this.facets) {
                    if (typeof this.initFacets[key] !== 'undefined') {
                        this.facets[key] = this.initFacets[key];
                    } else {
                        this.facets[key] = [];
                    }
                }
                this.params.facets = this.facets;

            } else {
                for (var key in this.facets) {
                    this.facets[key] = [];
                }
            }
        }
    },

    // EVENTS - ADD & REMOVE
    addEvent: function(_element, _event, _function) {
        this.callback = function(_self) {
            return function(e) {
                //e.stopPropagation();
                _self[_function](e);
            };
        }(this);
        _element[this.eventHandler.attach](this.eventHandler.on + _event, this.callback, true);

    },

    addEventAndRemove: function(_element, _event, _function) {
        this.callback = function(_self) {
            return function(e) {
                _element[_self.eventHandler.detach](_self.eventHandler.on + _event, _self.callback, true);
                _self[_function](e);
            };
        }(this);
        _element[this.eventHandler.attach](this.eventHandler.on + _event, this.callback, true);
    },

    // SEARCH BOX EVENT HANDLERS
    searchBoxInputEvents: function(element) {
        this.addEvent(element, "focus", "searchBoxInputFocusEvent");
        this.addEvent(element, "blur", "searchBoxInputBlurEvent");
        this.addEvent(element, "keyup", "searchBoxInputKeyupEvent");
        this.addEvent(element, "input", "searchBoxInputEvent");
        this.addEvent(element, "keydown", "searchBoxInputKeydownEvent");
    },

    searchBoxEvents: function(element) {
        this.addEvent(element, "click", "searchBoxClickEvent");
    },

    searchBoxClearEvents: function(element) {
        this.addEvent(element, "click", "searchBoxClearClickEvent");
    },

    searchBoxWrapperEvents: function(element) {
        this.addEvent(element, "blur", "searchBoxWrapperBlurEvent");
    },

    searchBoxWrapperBlurEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        var input = (target.querySelectorAll('input[type=text]')[0] || target.querySelectorAll('input[type=search]'));
        input.value = this.params.query === '' || this.params.query === '*' ? this.initSearchBoxText : this.params.query;

        if (!this.disableAutocomplete) {
            this.autocompleteRestore();
        }

        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchBoxInputFocusEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        var position = 0;

        if (!this.disableAutocomplete) {
            this.autocompleteRestore();
        }
        if (this.websiteSettings.length === 0) {
            this.getWebsiteSettings();
        }
        target.value = target.value === this.initSearchBoxText ? '' : this.params.query;
        if (typeof target.selectionStart !== 'undefined') {
            position = target.selectionStart === 0 ? target.value.length : target.selectionStart;
        }
        if (typeof target.setSelectionRange !== 'undefined') {
            target.setSelectionRange(position, position);
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchBoxInputBlurEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        target.value = this.params.query === '' || this.params.query === '*' ? this.initSearchBoxText : this.params.query;

        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchBoxInputEvent: function(e) {
        if (e) {
            this.usingOnChange = true;
            this.handleSearchBoxChangeEvent(e);
        }
    },

    searchBoxInputKeyupEvent: function(e) {
        if (this.usingOnChange === false) {
            this.handleSearchBoxChangeEvent(e);
        }
    },

    handleSearchBoxChangeEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        var keynum = this.helpers.getKey(e);
        this.params.query = this.helpers.stripHtmlTags(target.value);

        if (!this.disableAutocomplete && keynum != this.helpers.ENTER && keynum != this.helpers.DOWN && keynum != this.helpers.UP && keynum != this.helpers.ESC && keynum != this.helpers.TAB) {
            this.autocomplete(target);
        } else if (keynum === this.helpers.ESC) {
            if (this.isOverlaySearch && this.elemOverlaySearch.overlay) {
                this.overlayCloseModalWithSearch();
            } else if (!this.disableAutocomplete) {
                this.autocompleteRestore();
            }
        }

        if(typeof this.searchBoxClearButtons[target.parentElement.id] !== 'undefined'){
            if(this.params.query !== ""){
                this.helpers.removeClass(this.searchBoxClearButtons[target.parentElement.id], 'cludo-hidden');
            } else {
                this.helpers.addClass(this.searchBoxClearButtons[target.parentElement.id], 'cludo-hidden');
            }
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchBoxInputKeydownEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        var keynum = this.helpers.getKey(e);
        this.hideAutocomplete = false;
        if (keynum === this.helpers.ENTER || keynum === this.helpers.DOWN || keynum === this.helpers.UP) {
            this.autocompleteKeyDownEvent(keynum, target, e);
        }

        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchBoxClickEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        var currentSearchBoxId = target.parentElement.id;

        if (!this.disableAutocomplete) {
            this.autocompleteRestore();
        }
        if (this.hasQuicklink()) {
            var _cludo = this;
            this.pushQueryLog(this._buildQueryLogObjectForQuickLink(), function() {
                _cludo.redirectToUrl(_cludo.quicklink.url);
                if (_cludo.quicklink.url.indexOf("cludoquery") > -1 && _cludo.isSearchResultPage && !_cludo.isOverlaySearch) {
                    location.reload();
                }
            });
            return;
        }
        this.setFacetsBeforeSearch(currentSearchBoxId);
        if (this.isOverlaySearch) {
            this.overlayOpenModalWithSearch();
        }
        if(this.resetFiltersBeforeSearch){
            this.params.filters = {};
        }
        this.search();

        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchBoxClearClickEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        
        this.searchBoxInputs[target.parentElement.id].value = "";
        this.params.query = "";
        if(this.elemSearchResults.banner){
            this.elemSearchResults.banner.innerHTML = "";
        }
        if(this.elemSearchResults.didYouMean){
            this.elemSearchResults.didYouMean.innerHTML = "";
        }
        if(this.elemSearchResults.filters){
            this.elemSearchResults.filters[0].innerHTML = "";
        }
        if(this.elemSearchResults.resultCount){
            this.elemSearchResults.resultCount.innerHTML = "";
        }
        if(this.elemSearchResults.results){
            this.elemSearchResults.results.innerHTML = "";
        }
        if(this.endlessScrollElements.loadMore){
            this.helpers.addClass(this.endlessScrollElements.loadMore, 'cludo-hidden');
        }
        if(this.endlessScrollElements.backToTop){
            this.helpers.removeClass(this.endlessScrollElements.backToTop, 'cludo-opacity1');
            this.helpers.addClass(this.endlessScrollElements.backToTop, 'cludo-opacity0');
        }
        this.helpers.addClass(target, 'cludo-hidden');

        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    // SEARCH RESULTS EVENT HANDLER
    searchResultsEvents: function() {
        this.registerClickTrackingEvents();
        this.didYouMeanEvents();
        this.searchFacetsEvents();
        this.paginationEvents();
        this.removeFocusOnMouseClick();
    },

    // search result events
    registerClickTrackingEvents: function() {
        if (this.elemSearchResults.results.querySelectorAll) {
            var resultLinks = this.elemSearchResults.results.querySelectorAll("a");
            var _cludo = this;
            var elm;
            var href;
            var pageNo;
            var bannerLinkTitle;
            var bannerId;

            for (var i = 0; i < resultLinks.length; i++) {
                elm = resultLinks[i];
                href = elm.href;

                if (elm.getAttribute("data-page")) {
                    return;
                }

                if (href && href.length > 0) {
                    if (this.elemSearchResults.results.querySelectorAll("[data-cludo-result=banner]") && _cludo.helpers.closest(elm, "[data-cludo-result=banner]")) {
                        bannerLinkTitle = elm.getAttribute("title") !== null ? elm.getAttribute("title")
                            : elm.innerText !== '' ? elm.innerText
                                : _cludo.helpers.closest(elm, "[data-cludo-result=banner]").getAttribute("data-cludo-title");

                        bannerId = _cludo.helpers.closest(elm, "[data-cludo-result=banner]").getAttribute("data-cludo-id");

                        elm.setAttribute("data-cludo-result", "banner");
                        elm.setAttribute("data-cludo-index", 1);
                        elm.setAttribute("data-cludo-object-id", bannerId);
                        elm.setAttribute("data-cludo-title", bannerLinkTitle);
                    }

                    pageNo = _cludo.helpers.getURLParam(_cludo.paramsPrefix + 'page');
                    elm.setAttribute("data-cludo-page", pageNo);

                    elm.addEventListener("click", function(e) {
                        var isNewWindowClick = false;
                        e.preventDefault();
                        if (e.ctrlKey || e.metaKey) {
                            isNewWindowClick = true;
                        }
                        _cludo.trackClickEventHandler(this, isNewWindowClick);
                        return false;
                    });
                    _cludo.addEvent(elm, "keyup", "searchResultKeyUpEvent");
                }
            }
        }
    },

    searchResultClickEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;

        var linkTarget = ((e.metaKey && this.helpers.isMac()) || (e.ctrlKey && !this.helpers.isMac())) ? "_blank" : target.target;
        target.setAttribute('target', linkTarget);

        this.trackClickEventHandler(target);

        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    searchResultKeyUpEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        var keynum = this.helpers.getKey(e);
        if (keynum === this.helpers.TAB) {
            this.resultItemCurrentlyFocusedElement = target;
            this.userIsUsingTabulator = true;
        }

        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = false;
        }
    },

    // search results other components
    searchFacetsEvents: function() {
        if (this.elemSearchResults.filters !== null) {
            for (var j = 0, l = this.elemSearchResults.filters.length; j < l; j++) {
                var filters = this.elemSearchResults.filters[j].querySelectorAll('LI');
                for (var i = 0, len = filters.length; i < len; i++) {
                    (function(_self) {
                        filters[i].onclick = function(e) {
                            e = e || window.event;
                            var target = e.target || e.srcElement;
                            if (target.nodeName == "A") {
                                if (e && e.stopPropagation) {
                                    e.stopPropagation();
                                } else {
                                    event.cancelBubble = true;
                                }
                                if (e && e.preventDefault) {
                                    e.preventDefault();
                                } else {
                                    e.returnValue = false;
                                }

                                var selector = this.querySelector('a');
                                if (selector != null) {
                                    var facetName = selector.getAttribute("data-facet-name") !== null ? selector.getAttribute("data-facet-name") : "Category";
                                    var facetValue = selector.getAttribute("data-facet");
                                    var multifacetValue = selector.getAttribute("data-multifacet") !== null ? selector.getAttribute("data-multifacet") : false;
                                    _self.facet(facetName, facetValue, multifacetValue);
                                }
                            }
                        };
                    })(this);
                }
            }
        }
    },

    didYouMeanEvents: function() {
        if (this.elemSearchResults.didYouMean !== null) {
            (function(_self) {
                _self.elemSearchResults.didYouMean.onclick = function(e) {
                    e = e || window.event;
                    if (e && e.stopPropagation) {
                        e.stopPropagation();
                    } else {
                        e.cancelBubble = true;
                    }
                    if (e && e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                    _self.setDidYouMean();
                };
            })(this);
        }
    },

    paginationEvents: function() {
        if (this.totalDocuments > 0) {
            var paginations = this.elemSearchResults.results.querySelectorAll(".search_page_list");
            for (var j = 0, len = paginations.length; j < len; j++) {
                var pagination = paginations[j].querySelectorAll('LI');
                for (var i = 0, l = pagination.length; i < l; i++) {
                    (function(_self) {
                        pagination[i].onclick = function(e) {
                            e = e || window.event;
                            if (e && e.stopPropagation) {
                                e.stopPropagation();
                            } else {
                                e.cancelBubble = true;
                            }
                            if (e && e.preventDefault) {
                                e.preventDefault();
                            } else {
                                e.returnValue = false;
                            }

                            if (this.querySelector('a') != null) {
                                var pageNo = this.querySelector('a').getAttribute("data-page");
                                _self.page(pageNo);
                            }
                        };
                    })(this);
                }
            }
        }
    },

    removeFocusOnMouseClick: function(e) {
        if(document.querySelectorAll){
            var a =  document.getElementById(this.searchResultsWrapper).querySelectorAll('a,button');
            for(var j in a ) {
                a[j].onmousedown = function() { 
                    this.blur();                 // most browsers 
                    this.hideFocus = true;       // internet explorer
                    this.style.outline = 'none'; // mozilla
                }   
                a[j].onmouseout = a[j].onmouseup = function() { 
                    this.blur();                 // most browsers 
                    this.hideFocus = false;      // internet explorer    
                    this.style.outline = null;   // mozilla 
                }
            }
        }
    },

    // AUTOCOMPLETE
    autocomplete: function(element) {
        if (!this.timeoutId) {
            var _self = this;
            this.timeoutId = setTimeout(function() {
                clearTimeout(_self.timeoutId);
                _self.timeoutId = null;
                _self.searchQueryLength = _self.params.query.replace(/\s/g, '').length;
                if (_self.params.query != '' && _self.searchQueryLength > 0) {
                    _self.params.query = _self.helpers.removeUnsafeCharacters(_self.params.query);
                    if (_self.params.query != '') {
                        if (_self.richAutocomplete) {
                            var httpServiceUrl = _self.searchApiUrl + "/" + _self.customerId + "/" + _self.engineId + "/" + _self.autoCompleteControllerAction;
                            _self.params.text = _self.params.query;
                            _self.httpRequest("POST", httpServiceUrl, "autocompleteTemplate", element);
                        } else {
                            var httpServiceUrl = _self.searchApiUrl + "/" + _self.customerId + "/" + _self.engineId + "/" + _self.autoCompleteControllerAction;
                            httpServiceUrl += "?text=" + encodeURIComponent(_self.params.query);
                            if (!_self.helpers.isEmpty(_self.params.filters)) {
                                if (typeof _self.params.filters.DomainName !== 'undefined') {
                                    httpServiceUrl += "&filters[DomainName]=" + encodeURIComponent(_self.params.filters.DomainName);
                                }
                                if (typeof _self.params.filters.Language !== 'undefined') {
                                    httpServiceUrl += "&languages=" + encodeURIComponent(_self.params.filters.Language);
                                }
                            }
                            _self.httpRequest("GET", httpServiceUrl, "autocompleteTemplate", element);
                        }
                    }
                }
            }, 500);
        }
    },

    autocompleteRestore: function() {
        if (this.debug === true) {
            return;
        }

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
        }
        this.helpers.removeElement("search_autocomplete");
        this.selectedIndex = -1;
    },

    // FACETS
    facet: function(name, value, multivalues) {
        if (value === null || value === "null") {
            this.params.facets[name] = [];
        } else {
            if (!this.applyMultiLevelFacets) {
                for (var key in this.facets) {
                    if (this.facets.hasOwnProperty(key) && !multivalues) {
                        this.params.facets[key] = [];
                    }
                }
            }
            if (multivalues) {
                var index = this.params.facets[name].indexOf(value);
                if (index > -1) {
                    this.params.facets[name].splice(index, 1);
                } else {
                    this.params.facets[name].push(value);
                }
            } else {
                this.params.facets[name][0] = value;
            }
        }
        this.params.page = 1;
        if (this.endlessScroll && this.jumpToTopOnFacetClick) {
            this.endlessScrollBackToTopClickEvent();
        }
        if (this.jumpToTopOnFacetClick) {
            window.scrollTo(0, 0);
        }
        if(this.resetFiltersBeforeSearch){
            this.params.filters = {};
        }
        this.doSearch(); 
    },

    clearFacet: function(facet, value) {
        var index = this.facets[facet].indexOf(value);
        if (index > -1) {
            this.facets[facet].splice(index, 1);
        }
        if (this.jumpToTopOnFacetClick) {
            window.scrollTo(0, 0);
        }
        this.search();
    },

    clearAllFacets: function() {
        for (var key in this.facets) {
            this.facets[key] = [];
        }
    },

    clearAllFacetsAndSearch: function() {
        this.clearAllFacets();
        if (this.jumpToTopOnFacetClick) {
            window.scrollTo(0, 0);
        }
        this.search();
    },

    // FILTERS
    filter: function(name, value) {
        this.params.filters[name] = value;
        this.params.page = 1;
        if (this.endlessScroll && this.jumpToTopOnFacetClick) {
            this.endlessScrollBackToTopClickEvent();
        }
        if (this.jumpToTopOnFacetClick) {
            window.scrollTo(0, 0);
        }
        this.doSearch();
    },

    clearAllFilters: function() {
        this.params.filters = {};
        if (this.jumpToTopOnFacetClick) {
            window.scrollTo(0, 0);
        }
        this.search();
    },

    // FACETS & FILTERS
    clearAllFacetsAndFilters: function() {
        for (var key in this.facets) {
            this.facets[key] = [];
        }
        this.params.filters = {};
        if (this.jumpToTopOnFacetClick) {
            window.scrollTo(0, 0);
        }
        this.search();
    },

    // SORTING
    setSortOrder: function(name, value) {
        this.params.sort[name] = value;
        this.params.page = 1;
        this.doSearch();
    },

    clearSortOrder: function() {
        this.params.sort = {};
        this.search();
    },

    // PAGING
    page: function(pageNo) {
        //this.scrollToTop(window);
        window.scrollTo(0, 0);
        if (pageNo == "next") {
            this.params.page++;
        } else if (pageNo == "prev") {
            this.params.page--;
        } else {
            this.params.page = pageNo;
        }
        this.doSearch();
    },

    // DID YOU MEAN
    setDidYouMean: function() {
        this.autocompleteRestore();
        this.params.query = this.didYouMean;
        this.search();
    },

    // Search from auto-complete or after clearing facets / filters
    search: function() {
        // hide keyboard on iOS
        document.activeElement.blur();
        for (var i = 0, len = this.searchInputsLength; i < len; i++) {
            this.setElementValue(this.searchBoxInputs[this.searchInputs[i]], this.params.query);
        }
        this.params.page = 1;
        if (!this.helpers.isEmpty(this.facets)) {
            this.params.facets = this.facets;
        }
        this.autocompleteRestore();
        if (this.endlessScroll && this.jumpToTopOnFacetClick) {
            this.endlessScrollBackToTopClickEvent();
        }
        if (this.elemSearchResults.resultCount && !this.hideResultsCount) {
            this.elemSearchResults.resultCount.innerHTML = "";
        }
        this.doSearch();
    },

    // SEARCH
    doSearch: function() {

        this.updateQuerySessionId();

        if (!this.isSearchResultPage) {
            var redirectUrl = this.searchUrl + "#?" + this.paramsPrefix + "query=" + encodeURIComponent(this.params.query) + "&" + this.paramsPrefix + "page=" + this.params.page + "&" + this.paramsPrefix + "refurl=" + encodeURIComponent(window.location.protocol + "//" + window.location.hostname + window.location.pathname) + "&" + this.paramsPrefix + "refpt=" + encodeURIComponent(document.title);
            if (!this.helpers.isEmpty(this.params.facets)) {
                var facetsKeys = Object.keys(this.params.facets);
                for (var i = 0, len = facetsKeys.length; i < len; i++) {
                    if (typeof this.params.facets[facetsKeys[i]] !== 'undefined') {
                        if (typeof this.params.facets[facetsKeys[i]][0] !== 'undefined') {
                            redirectUrl += "&" + this.paramsPrefix + facetsKeys[i] + "=" + encodeURIComponent(this.params.facets[facetsKeys[i]][0]);
                        }
                    }
                }
            }
            this.redirectToUrl(redirectUrl);
            return;
        }
        this.searchQueryLength = this.params.query.replace(/\s/g, '').length;

        if (this.type == 'customOverlay') {
            this.helpers.addClass(this.resultsWrapper, this.ovarlayResultsWrapperOpenClass);
        }
        if (this.elemSearchResults.results) {
            if (this.endlessScroll) {
                this.isLazyLoading = true;
                this.helpers.addClass(this.endlessScrollElements.loadMore, "cludo-hidden");
                this.elemSearchResults.results.innerHTML += this.loading;
            } else {
                this.elemSearchResults.results.innerHTML = this.loading;
            }
        }
        if (this.elemSearchResults.didYouMean !== null) {
            this.didYouMean = this.elemSearchResults.didYouMean.innerHTML = '';
        }

        if ((this.params.query !== '' && this.searchQueryLength > 0) || this.allowSearchWithoutSearchword) {
            if (this.allowSearchWithoutSearchword) {
                this.params.query = this.params.query != "*" && this.params.query != "" ? this.params.query : "*";
            }
            if (this.changeWindowLocation === true) {
                window.location.hash = "#?" + this.convertParamsToString();
            }
            var httpServiceUrl = this.searchApiUrl + "/" + this.customerId + "/" + this.engineId + "/" + "search";
            this.params.query = this.helpers.removeUnsafeCharacters(this.params.query);
            this.httpRequest("POST", httpServiceUrl, "searchResultTemplate", this.elemSearchResults);
        } else {
            this.elemSearchResults.resultCount.innerHTML = '';
            if (this.elemSearchResults.filters) {
                for (var f = 0; this.elemSearchResults.filters.length > f; f++) {
                    this.elemSearchResults.filters[f].innerText = '';
                }
            }
            var d = this.translateProvider.translate("no_search_term");
            this.errorTemplate(d);
        }
    },

    // search for endless scroll (timeout added in order to make sure that results loads in the right order if param.page is higher than 1)
    doSearchWithDelay: function(page, stopAtPage) {
        this.updateQuerySessionId();
        var delay = page === 1 ? 0 : 1000;
        var _self = this;
        if (page <= stopAtPage) {
            if (!this.browserIsEdge14) {
                this.doSearchWithDelayTimer = setTimeout(function() {
                    _self.params.page = page;
                    _self.doSearch();
                    page++;
                    _self.doSearchWithDelay(page, stopAtPage);
                }, delay);
            } else {
                _self.params.page = page;
                _self.doSearch();
                page++;
                _self.doSearchWithDelay(page, stopAtPage);
            }
        } else {
            this.doSearchWithDelayTimer = null;
        }
    },

    updateQuerySessionId: function() {
        if (this.params.query != this.lastQuery) {
            this.querySessionId = this.generateUUID();
        }

        this.lastQuery = this.params.query;
    },

    // Check for quiclinks for search word
    hasQuicklink: function() {
        if (this.websiteSettings.quicklinks) {
            for (var i = 0, leni = this.websiteSettings.quicklinks.length; i < leni; i++) {
                for (var j = 0, lenj = this.websiteSettings.quicklinks[i].terms.length; j < lenj; j++) {
                    if (this.params.query.toUpperCase().match(this._wildcardToRegex(this.websiteSettings.quicklinks[i].terms[j].name.toUpperCase()))) {
                        this.quicklink = this.websiteSettings.quicklinks[i];
                        return true;
                    }
                }
            }
        }
        return false;
    },

    // Redirect to page
    redirectToUrl: function(redirectUrl) {
        window.location.href = redirectUrl;
    },

    convertParamsToString: function() {
        var q = '';
        q += this.paramsPrefix + "query=" + encodeURIComponent(this.params.query);

        for (var facet in this.facets) {
            if (this.params.facets[facet].length) {
                q += "&";
                q += this.paramsPrefix + facet + "=" + encodeURIComponent(this.params.facets[facet].toString());
            }
        }
        for (var filter in this.filters) {
            if (typeof this.params.filters[filter] != "undefined" && this.params.filters[filter].length) {
                q += "&";
                q += this.paramsPrefix + filter + "=" + this.params.filters[filter].toString();
            }
        }
        q += "&";
        q += this.paramsPrefix + "page=" + this.params.page;
        // need to reuse the referral parameters otherwise we will just get it from the current page
        if (typeof this._getReferralUrl() !== 'undefined' && this._getReferralUrl() !== null && this._getReferralUrl() !== '') {
            q += "&" + this.paramsPrefix + "refpt=" + encodeURIComponent(this._getReferralPageTitle());
        }

        if (typeof this._getReferralPageTitle() !== 'undefined' && this._getReferralPageTitle() !== null && this._getReferralPageTitle() !== '') {
            q += "&" + this.paramsPrefix + "refurl=" + encodeURIComponent(this._getReferralUrl());
        }

        // If overlay search we are never on IsSearchResultPage and therefore need to add the params
        if (this.isOverlaySearch && (this._getReferralPageTitle() === '' || this._getReferralUrl() === '')) {
            q += "&" + this.paramsPrefix + "refurl=" + encodeURIComponent(window.location.protocol + "//" + window.location.hostname + window.location.pathname) + "&" + this.paramsPrefix + "refpt=" + encodeURIComponent(document.title);
        }

        return q;
    },

    // HTTP REQUESTS
    httpRequest: function(type, url, template, placeholder) {
        var _self = this;
        //for mulitpart/form use encoded string 
        var params = type === "POST" ? (this.xhrRequestHeader === "application/json" ? JSON.stringify(this.params) : "Params=" + encodeURIComponent(JSON.stringify(this.params))) : null;
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        //xhr.withCredentials = true;
        xhr.onreadystatechange = (function(xhr, _self, template, placeholder, originalQuery) {
            return function() {
                _self.httpCallback(xhr, _self, template, placeholder, originalQuery);
            }
        })(xhr, this, template, placeholder, this.params.query);

        xhr.setRequestHeader("Content-type", this.xhrRequestHeader + ";charset=UTF-8");
        xhr.setRequestHeader("Accept", this.xhrRequestHeader);
        if (!this.intranetSearch) {
            xhr.setRequestHeader("Authorization", "SiteKey " + this.authorizationKey);
        }
        xhr.send(params);
    },

    httpCallback: function(xhr, _self, template, placeholder, originalQuery) {
        if (xhr.readyState === 4) {
            if (xhr.status == 200) {                
                var data = JSON.parse(xhr.responseText);
                data.query = originalQuery;
                _self[template](data, placeholder);

                // Hack for Siteimprove users if they are using links with /hash/?cludoquery=
                if (data.enableSiteimproveAnalyticsIntegration === true && /\/hash\/\?cludoquery=/i.test(window.location.href)) {
                    window.location.href = window.location.href.replace(/\/hash\/\?cludoquery=/i, '#?cludoquery=');
                }
            } else {
                var d = [_self.translateProvider.translate("error")];
                _self.errorTemplate(d);
            }
        }
    },

    // HTML AUTOCOMPLETE TEMPLATE
    // Injects autocomplete template to placeholder
    autocompleteTemplate: function(data, placeholder) {

        // Check if this is not the most recent ac call we've made. Return if it is.
        if (data.query && this.params.query != data.query) {
            return;
        }
        
        // Fix I18N tokens for ac
        if (this.translateSearchTemplates && data) {
            data.SearchResult = this.translateProvider.translateTokens(data.SearchResult);
        }

        this.selectedIndex = -1;
        this.elemAutocomplete.lists = [];
        this.elemAutocomplete.listsItems = [];
        if (!this.hideAutocomplete && data) {
            this.helpers.removeElement("search_autocomplete");
            if (this.richAutocomplete) {
                if (data.TotalResults > 0 || data.TotalSuggestions > 0 || this.autocompleteForceUseTemplate === true) {
                    var list = this.helpers.addElement(placeholder.parentNode, 'search_autocomplete', 'search_autocomplete');
                    this.elemAutocomplete.lists.push(list);
                    list.innerHTML = data.SearchResult;
                    var listItems = list.querySelectorAll('LI');
                    for (var i = 0, len = listItems.length; i < len; i++) {
                    var listItemInnerText = listItems[i].innerText;
                        var highlightedInnerText = this.getAutocompleteHighlightedWords(listItemInnerText);
                        var richAutocompleteLink = listItems[i].getElementsByTagName("a")[0];
                        if (richAutocompleteLink) {
                            richAutocompleteLink.innerHTML = highlightedInnerText;
                        } else {
                            listItems[i].innerHTML = highlightedInnerText;
                        }
                    }
                    this.elemAutocomplete.listsItems = listItems;
                } else {
                    return;
                }
            } else {
                var list = document.createElement("UL");
                list.className = "search_autocomplete";
                list.setAttribute("id", "search_autocomplete");
                this.elemAutocomplete.lists.push(list);
                for (var i = 0, len = data.length; i < len; i++) {
                    var listItem = document.createElement("li");
                    listItem.innerHTML = this.getAutocompleteHighlightedWords(data[i]).replace("!", "");
                    list.appendChild(listItem);
                    this.elemAutocomplete.listsItems.push(listItem);
                }
                placeholder.parentNode.appendChild(list);
            }
            var listLen = this.elemAutocomplete.lists.length;
            for (var i = 0, len = listLen; i < len; i++) {
                this.addEventAndRemove(this.elemAutocomplete.lists[i], 'mouseover', 'autocompleteMouseOverEvent');
            }
            var listItemsLen = this.elemAutocomplete.listsItems.length;
            for (var i = 0, len = listItemsLen; i < len; i++) {
                this.addEventAndRemove(this.elemAutocomplete.listsItems[i], 'mousedown', 'autocompleteMouseDownEvent');
            }
        }
    },

    getAutocompleteHighlightedWords: function(listItem) {
        var queryItems = this.params.query.split(" ");
        for (var j = 0, lenQ = queryItems.length; j < lenQ; j++) {
            if (typeof queryItems[j] != "undefined" && queryItems[j] !== "") {
                listItem = this.helpers.highlightSearchword(listItem, queryItems[j]);
            }
        }
        return listItem;
    },

    // AUTOCOMPLETE EVENT HANDLERS
    autocompleteMouseOverEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;

        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        var listItems = target.querySelectorAll('LI');
        var len = listItems.length;
        for (var i = 0; i < len; i++) {
            this.helpers.removeClass(listItems[i], "active");
        }
        this.selectedIndex = -1;
    },

    autocompleteMouseDownEvent: function(e) {
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;

        if (e && e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        this.params.query = target.innerText;
        this.autocompleteSetSelectedItem(target);
    },

    autocompleteKeyDownEvent: function(keynum, target, e) {
        var len = this.elemAutocomplete.listsItems.length;
        var e = e || window.event;
        var target = e.currentTarget || e.srcElement;
        if (e && e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        var selectedNode = [];
        if (keynum === this.helpers.ENTER) {
            if (this.selectedIndex < 0) {
                // no sugesstion was selected in autocomplete, user is just typing search word and clicking enter in the search box
                this.hideAutocomplete = true;
                this.autocompleteRestore();
                if (e && e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                this.params.query = this.helpers.stripHtmlTags(target.value);
                if (this.hasQuicklink()) {
                    var _cludo = this;
                    this.pushQueryLog(this._buildQueryLogObjectForQuickLink(), function() {
                        _cludo.redirectToUrl(_cludo.quicklink.url);
                        if (_cludo.quicklink.url.indexOf("cludoquery") > -1 && _cludo.isSearchResultPage && !_cludo.isOverlaySearch) {
                            location.reload();
                        }
                    });
                    return;
                }
                this.setFacetsBeforeSearch(target.parentElement.id);
                if (this.isOverlaySearch) {
                    this.overlayOpenModalWithSearch();
                }
                if(this.resetFiltersBeforeSearch){
                    this.params.filters = {};
                }
                this.search();
            } else {
                selectedNode = this.elemAutocomplete.listsItems[this.selectedIndex];
                this.params.query = this.helpers.stripHtmlTags(selectedNode.innerText);
                this.autocompleteSetSelectedItem(selectedNode);
            }
        } else if (!this.disableAutocomplete && (keynum === this.helpers.DOWN || keynum === this.helpers.UP)) {
            if (keynum === this.helpers.DOWN) {
                this.selectedIndex = this.selectedIndex == len - 1 ? -1 : this.selectedIndex;
                this.selectedIndex++;
            }
            if (keynum === this.helpers.UP) {
                this.selectedIndex = this.selectedIndex == 0 ? len : this.selectedIndex;
                this.selectedIndex--;
            }
            for (var i = 0; i < len; i++) {
                this.helpers.removeClass(this.elemAutocomplete.listsItems[i], "active");
            }
            selectedNode = this.elemAutocomplete.listsItems[this.selectedIndex];
            selectedNode.className = "active";
            var s = this.helpers.trim(selectedNode.innerText);
            // Temp fix for PH Metropol until characters are replaced in the backend
            s = s.replace(/(\&shy;|­|&#173;)/gi, "");
            this.params.query = s;
            for (var i = 0, len = this.searchInputsLength; i < len; i++) {
                this.setElementValue(this.searchBoxInputs[this.searchInputs[i]], this.params.query);
            }
        }
    },

    autocompleteSetSelectedItem: function(target) {
        if (target.hasChildNodes()) {
            if (target.getElementsByTagName("a")[0]) {
                var richAutocompleteLink = target.getElementsByTagName("a")[0].href;
                this.trackClickEventHandlerForRichAutocompleteLink(target.getElementsByTagName("a")[0]);
                var _cludo = this;
                this.pushClickLog(this._buildQueryLogObjectForRichAutocompleteLink(), function() {
                    _cludo.redirectToUrl(richAutocompleteLink);
                });
                return;
            } else {
                if (this.hasQuicklink()) {
                    var _cludo = this;
                    this.pushQueryLog(this._buildQueryLogObjectForQuickLink(), function() {
                        _cludo.redirectToUrl(_cludo.quicklink.url);
                        if (_cludo.quicklink.url.indexOf("cludoquery") > -1 && _cludo.isSearchResultPage && !_cludo.isOverlaySearch) {
                            location.reload();
                        }
                    });
                    return;
                }
                this.setFacetsBeforeSearch(target.parentElement.parentElement.id);
                if (this.isOverlaySearch) {
                    this.overlayOpenModalWithSearch();
                }
                if(this.resetFiltersBeforeSearch){
                    this.params.filters = {};
                }
                this.search();
            }
        }
    },

    // HTML SEARCH RESULTS TEMPLATE
    // Injects search results template to placeholder
    searchResultTemplate: function(data, placeholder) {
        // Fix I18N tokens for search results and facets
        if (this.translateSearchTemplates && data) {
            data.Facets = this.translateProvider.translateTokens(data.Facets);
            data.SearchResult = this.translateProvider.translateTokens(data.SearchResult);
        }

        this.totalDocuments = data.TotalDocuments;
        this.fixedQuery = data.FixedQuery;
        this.banners = data.Banners;
        this.responseTime = data.ResponseTime;
        this.queryId = data.QueryId;
        this.track(this.totalDocuments);

        if (this.endlessScroll) {
            this.isLazyLoading = false;
            this.helpers.removeElement('cludo-loading');
            if (this.params.page == 1) {
                placeholder.results.innerHTML = data.SearchResult;
            } else {
                placeholder.results.innerHTML += data.SearchResult;
                if (this.userIsUsingTabulator) {
                    // in order to prevet LI item focus when loading many pages on page load - focus back on current element    
                    placeholder.results.getElementsByTagName("ul")[this.params.page - 1].children[0].getElementsByTagName("a")[0].focus();

                    /*} else {
                        _self = this;
                        setTimeout(function(){           
                            _self.resultItemCurrentlyFocusedElement.nextSibling.focus();
                        }, 100);
                    }*/
                }
            }

            if (this.params.page >= this.endlessScroll.stopAfterPage && this.totalDocuments > 0) {
                if (this.params.page === Math.ceil(this.totalDocuments / this.endlessScroll.resultsPerPage)) {
                    this.helpers.addClass(this.endlessScrollElements.loadMore, 'cludo-hidden');
                } else {
                    this.helpers.removeClass(this.endlessScrollElements.loadMore, 'cludo-hidden');
                }
            }
        } else {
            placeholder.results.innerHTML = data.SearchResult;
        }
        if (this.isOverlaySearch && this.type !== 'customOverlay') {
            this.elemOverlaySearch.searchBoxContent.style.zIndex = "1";
        }

        if (placeholder.filters !== null) {
            for (var i = 0, len = placeholder.filters.length; i < len; i++) {
                placeholder.filters[i].innerHTML = data.TotalDocuments > 0 || !this.hideSearchFiltersIfNoResult ? data.Facets : '';
            }
        }

        if (data.DidYouMean != "" && placeholder.didYouMean !== null && typeof placeholder.didYouMean !== 'undefined' && data.TotalDocuments < 10) {
            placeholder.didYouMean.innerHTML = this.translateProvider.translate("did_you_mean", data.DidYouMean);
            this.didYouMean = data.DidYouMean;
        }
        if (!this.bannerIsInSearchTemplate && data.Banners != "" && placeholder.banner !== null) {
            var bannerHtml = "";
            for (var i = 0, len = data.Banners.length; i < len; i++) {
                bannerHtml += '<div class="cludo-banner">' + data.Banners[i].Banner + '</div>';
            }
            placeholder.banner.innerHTML = bannerHtml;
        }
        else if (!this.bannerIsInSearchTemplate && placeholder.banner !== null) {
            placeholder.banner.innerHTML = "";
        }
        if (placeholder.resultCount !== null) {
            var resultCountHTML = "";
            if (this.useFixedQueryInResultsCount && data.FixedQuery != "") {
                resultCountHTML = this.translateProvider.translate("your_search_on", this.helpers.stripHtmlTags(this.params.query)) + this.translateProvider.translate("total_results", 0);
                //resultCountHTML += ".";
                resultCountHTML += this.translateProvider.translate("searched_instead", data.FixedQuery);
                resultCountHTML += this.translateProvider.translate("searched_instead_found", data.TotalDocuments);
            } else {
                if (0 === data.TotalDocuments && null !== this.customNoResultsMessage) {
                    resultCountHTML = this.customNoResultsMessage;
                } else {
                    var totalResultsText = data.TotalDocuments === 1 ? this.translateProvider.translate("total_result", data.TotalDocuments) : this.translateProvider.translate("total_results", data.TotalDocuments);
                    resultCountHTML = this.translateProvider.translate("your_search_on", this.helpers.stripHtmlTags(this.params.query)) + totalResultsText;
                    var j = 0;
                    for (var facet in this.facets) {
                        if (typeof this.params.facets[facet][0] !== 'undefined' && this.params.facets[facet][0] !== null) {
                            if (j > 0) {
                                resultCountHTML += this.translateProvider.translate("and");
                            }
                            resultCountHTML += this.translateProvider.translate("in_category", this.helpers.stripHtmlTags(this.params.facets[facet][0]));
                            j++;
                        }
                    }
                }
            }
            //resultCountHTML += ".";
            placeholder.resultCount.innerHTML = resultCountHTML;
        }

        if(this.customCallbackAfterSearch){
            this.customCallbackAfterSearch();
        }

        this.searchResultsEvents();
    },

    errorTemplate: function(msg) {
        if (this.resultsWrapper != null) {
            this.elemSearchResults.results.innerHTML = msg;
        }
    },

    settingsTemplate: function(data, placeholder) {
        this.websiteSettings = data;
    },

    // OVERLAY
    isSearchWithOverlay: function() {
        if (this.type === 'standardOverlay' || this.type === 'standardOverlayWithDynamicSearchBox' || this.type === 'customOverlay') {
            return true;
        }
        return false;
    },

    overlaySetTopSearchBox: function() {
        this.elemOverlaySearch.searchBox = this.helpers.addElement(document.body, '', 'cludo-search-form');
        this.elemOverlaySearch.searchBox.style.position = 'absolute';
        this.elemOverlaySearch.searchBox.style[this.searchBoxPosition.align] = this.searchBoxPosition.x + 'px';
        this.elemOverlaySearch.searchBox.style.top = this.searchBoxPosition.y + 'px';
        this.elemOverlaySearch.searchBoxLabel = this.helpers.addLabelElement(this.elemOverlaySearch.searchBox, 'cludo-search-form-input', this.translateProvider.translate('search_input_label'));
        this.elemOverlaySearch.searchBoxInput = this.helpers.addInputElement(this.elemOverlaySearch.searchBox, 'searchrequest', 'search-input', this.initSearchBoxText, 'cludo-search-form-input');
        this.elemOverlaySearch.searchBoxButton = this.helpers.addButtonElement(this.elemOverlaySearch.searchBox, 'search-button', this.translateProvider.translate('search_button_text'));
    },

    overlayOpenModalWithSearch: function() {
        this.isSearchResultPage = true;

        if (this.type !== 'customOverlay') {
            if (this.elemOverlaySearch.overlay === null) {
                if (!this.openedOverlayOnInit) {
                    this.searchInputsLength++;
                }
                this.setOverlayElements();
                this.setInputElements();
                this.setResultElements();
                this.overlaySetHeight();
                this.overlayAddEventsToSearchElements();
            }
            //add & remove css classes to overlay items, set theme color
            document.body.className = document.body.className + ' cludo-search-modal-active';
            this.helpers.removeClass(this.elemOverlaySearch.overlay, 'cludo-search-modal-overlay-inactive');

            //input box in overlay - set value & focus
            if (this.elemOverlaySearch.searchBoxContentInput !== null) {
                this.elemOverlaySearch.searchBoxContentInput.value = this.params.query;
                _self = this;
                this.focusInputElementTimer = setTimeout(function() {
                    _self.elemOverlaySearch.searchBoxContentInput.focus();
                    _self.focusInputElementTimer = null;
                }, 10);
            }
        }
    },

    setOverlayElements: function() {
        var overlayWrapper = this.getOverlayParentElement();
        if (this.elemOverlaySearch.overlay === null) {
            this.elemOverlaySearch.overlay = this.helpers.addElement(overlayWrapper, 'cludo-search-modal', 'cludo-search-results');
        }
        if (this.elemOverlaySearch.overlayInner === null) {
            this.elemOverlaySearch.overlayInner = this.helpers.addElement(this.elemOverlaySearch.overlay, '', 'cludo-search-modal-inner');
        }
        /* Modal header elements */
        if (this.elemOverlaySearch.overlayHeader === null) {
            this.elemOverlaySearch.overlayHeader = this.helpers.addElement(this.elemOverlaySearch.overlayInner, 'cludo-search-modal-header');
        }
        if (this.elemOverlaySearch.closeButton === null) {
            this.elemOverlaySearch.closeButton = this.helpers.addElement(this.elemOverlaySearch.overlayHeader, '', 'cludo-close');
            this.elemOverlaySearch.closeButtonButton = this.helpers.addButtonElement(this.elemOverlaySearch.closeButton, 'cludo-close-button', this.translateProvider.translate('overlay_close_button'));
        }
        if (this.elemOverlaySearch.searchBoxContent === null) {
            this.searchInputs.push('cludo-search-form-content');
            this.elemOverlaySearch.searchBoxContent = this.helpers.addElement(this.elemOverlaySearch.overlayHeader, '', 'cludo-search-form-content');
            this.elemOverlaySearch.searchBoxLabel = this.helpers.addLabelElement(this.elemOverlaySearch.searchBoxContent, 'cludo-search-form-content-input', this.translateProvider.translate('search_input_label'));
            this.elemOverlaySearch.searchBoxContentInput = this.helpers.addInputElement(this.elemOverlaySearch.searchBoxContent, 'searchrequestcontent', 'search-input', this.params.query !== '' ? this.params.query : this.initSearchBoxText, 'cludo-search-form-content-input');
            this.elemOverlaySearch.searchBoxContentButton = this.helpers.addButtonElement(this.elemOverlaySearch.searchBoxContent, 'search-button', this.translateProvider.translate('search_button_text'));
        }
        /* Modal body elements */
        if (this.elemOverlaySearch.overlayBody === null) {
            this.elemOverlaySearch.overlayBody = this.helpers.addElement(this.elemOverlaySearch.overlayInner, 'cludo-search-modal-body');
            this.elemOverlaySearch.overlayBody.tabIndex = -1;
        }
        if (this.elemSearchResults.resultCount === null && !this.hideResultsCount) {
            this.helpers.addElement(this.elemOverlaySearch.overlayBody, 'search-result-count');
        }
        if (this.elemSearchResults.didYouMean === null && !this.hideSearchDidYouMean) {
            this.helpers.addElement(this.elemOverlaySearch.overlayBody, 'search-did-you-mean', '', "complementary");
        }
        if (this.elemSearchResults.filters === null && !this.hideSearchFilters) {
            this.helpers.addElement(this.elemOverlaySearch.overlayBody, 'search-filters');
            this.helpers.addElement(this.elemOverlaySearch.overlayHeader, 'search-filters');
        }
        if (this.elemSearchResults.results === null) {
            this.helpers.addElement(this.elemOverlaySearch.overlayBody, 'search-results');
        }
        this.endlessScrollSetElements(this.elemOverlaySearch.overlayBody);
        if (this.elemOverlaySearch.poweredByMobile === null) {
            this.elemOverlaySearch.poweredByMobile = this.helpers.addElement(this.elemOverlaySearch.overlayBody, 'cludo-poweredby-mobile');
            this.elemOverlaySearch.poweredByMobile.innerHTML = '<a href="https://cludo.com/?ref=' + this.referalHostName + '" title="' + this.translateProvider.translate('poweredBy_title') + '" target="_blank" id="cludo-poweredby-link-mobile">Powered by Cludo</a>';
        }

        /* Modal footer elements*/
        if (this.elemOverlaySearch.overlayFooter === null) {
            this.elemOverlaySearch.overlayFooter = this.helpers.addElement(this.elemOverlaySearch.overlayInner, 'cludo-search-modal-footer');
        }
        if (this.elemOverlaySearch.poweredBy === null) {
            this.elemOverlaySearch.poweredBy = this.helpers.addElement(this.elemOverlaySearch.overlayFooter, 'cludo-poweredby');
            this.elemOverlaySearch.poweredBy.innerHTML = '<a href="https://cludo.com/?ref=' + this.referalHostName + '" title="' + this.translateProvider.translate('poweredBy_title') + '" target="_blank" id="cludo-poweredby-link">Powered by Cludo</a>';
            this.addEvent(this.elemOverlaySearch.poweredBy.getElementsByTagName("a")[0], "keydown", "poweredByKeyupEvent");
        }
    },

    getOverlayParentElement: function() {
        if(document.getElementById(this.searchInputs[0])){
            var parent = document.getElementById(this.searchInputs[0]).parentNode;
            var hasDisplayNone = (parent.offsetHeight === 0 && parent.offsetWidth === 0);
            if (!hasDisplayNone) {
                return parent;
            } else {
                parent = parent.parentNode;
                hasDisplayNone = (parent.offsetHeight === 0 && parent.offsetWidth === 0);
                if (!hasDisplayNone) {
                    return parent;
                }
            }
        }
        return document.body;
    },

    overlaySetHeight: function() {
        if (!this.helpers.isMobile()) {
            var h = window.innerHeight || document.documentElement.clientHeight;
            var oH = h > 700 ? h - 280 : h - 180;
            this.elemOverlaySearch.overlayBody.style.height = oH + "px";
            this.endlessScrollElements.backToTop.style.top = oH + 80 + "px";
            this.elemOverlaySearch.overlayFooter.style.top = oH + 135 + "px";
        }
    },

    overlayAddEventsToSearchElements: function() {
        this.addEventAndRemove(this.elemOverlaySearch.closeButton, 'click', 'closeButtonClickEvent');
        this.addEventAndRemove(this.elemOverlaySearch.closeButton, 'keydown', 'closeButtonKeyupEvent');
        this.addEventAndRemove(window.document, 'keydown', 'closeButtonWindowKeyupEvent');

        this.endlessScrollElements.scrolledElement = this.elemOverlaySearch.overlayBody;
        this.endlessScrollElements.documentElement = this.elemOverlaySearch.overlayBody;
        this.endlessScrollAddScrollEvent();

        if (!this.opendOverlayOnInit) {
            this.searchBoxInputEvents(this.elemOverlaySearch.searchBoxContentInput);
            this.searchBoxWrapperEvents(this.elemOverlaySearch.searchBoxContent);
            this.searchBoxEvents(this.elemOverlaySearch.searchBoxContentButton);
        }
    },

    overlaySetColorTheme: function() {
        var sheet = document.createElement('style');
        (document.head || document.getElementsByTagName('head')[0]).appendChild(sheet);
        sheet.setAttribute('type', 'text/css');
        var css = '';
        if (this.themeColor !== '') {
            var mainColorDarken = this.helpers.shadeColor(this.themeColor, -20);
            css += "\
                .cludo-search-modal-body a, .cludo-search-modal-header a{\
                    color: " + this.themeColor + ";\
                }\
                #cludo-search-form-content input[type=\"search\"] {\
                    border-top: 1px solid " + this.themeColor + ";\
                    border-bottom: 1px solid " + this.themeColor + ";\
                }\
                #cludo-search-form .search_autocomplete li:hover, .cludo-search-form .search_autocomplete li:hover,#cludo-search-form-content .search_autocomplete li:hover, #cludo-search-form .search_autocomplete li.active, .cludo-search-form .search_autocomplete li.active, #cludo-search-form-content .search_autocomplete li.active, .cludo-search_autocomplete .search_autocomplete li.active, .cludo-search_autocomplete .search_autocomplete li:hover {\
                    background-color: " + this.themeColor + ";\
                }\
                #cludo-search-results .cludo-search-modal-header .search-filters .search-filters-mobile-button.open {\
                    background-color: " + this.themeColor + ";\
                }\
                #cludo-search-results .search-filters ul a.active {\
                    background-color: " + this.themeColor + ";\
                }\
                #cludo-search-results .cludo-search-modal-body .search-did-you-mean b {\
                    color: " + this.themeColor + ";\
                }\
                #cludo-search-results .cludo-search-modal-body #cludo-load-more {\
                    background-color: " + this.themeColor + ";\
                }\
                #cludo-search-results .cludo-search-modal-body #cludo-load-more:hover {\
                    background-color: " + mainColorDarken + ";\
                }";
        }
        var elementFocusColor = this.elementFocusColor !== '' ? this.elementFocusColor : this.themeColor;
        css += "\
            #cludo-search-results a:focus, #cludo-search-results button:focus, #cludo-search-form button:focus, #cludo-search-form input:focus, #cludo-search-form-content button:focus, #cludo-search-form-content input:focus {\
                border-color: " + elementFocusColor + " !important;\
            }";
        if (this.themeBannerColor.backgroundColor !== '') {
            css += "\
                #cludo-search-results .cludo-search-modal-body .cludo-banner {\
                    background-color: " + this.themeBannerColor.backgroundColor + ";\
                }";
        }
        if (this.themeBannerColor.textColor !== '') {
            css += "\
                #cludo-search-results .cludo-search-modal-body .cludo-banner * {\
                    color: " + this.themeBannerColor.textColor + " !important;\
                }";
        }
        if (this.borderRadius !== 0) {
            css += "\
                .cludo-search-modal-header {\
                    border-radius: " + this.borderRadius + "px " + this.borderRadius + "px 0 0;\
                }\
                .cludo-search-modal-body {\
                    border-radius: 0 0 " + this.borderRadius + "px " + this.borderRadius + "px;\
                }\
                #cludo-search-results .search-filters ul {\
                    border-radius: " + this.borderRadius + "px;\
                }\
                #cludo-search-results .search-filters ul li:first-child a{\
                    border-radius: " + this.borderRadius + "px " + this.borderRadius + "px 0 0;\
                }\
                #cludo-search-results .search-filters ul li:last-child a{\
                    border-radius: 0 0 " + this.borderRadius + "px " + this.borderRadius + "px;\
                }";
        }
        if (this.borderRadiusInput !== 0) {
            css += "\
                #cludo-search-form .search-input {\
                    border-radius: " + this.borderRadiusInput + "px;\
                }\
                #cludo-search-form .search-button {\
                    border-radius: 0 " + this.borderRadiusInput + "px " + this.borderRadiusInput + "px 0;\
                }";
        }
        if (typeof sheet.styleSheet !== "undefined") {
            sheet.styleSheet.cssText = css;
        } else {
            sheet.appendChild(document.createTextNode(css));
        }
    },

    overlayCloseModalWithSearch: function(e) {
        this.isSearchResultPage = false;
        window.location.hash = '';

        this.helpers.removeClass(document.body, "cludo-search-modal-active");
        this.helpers.removeElement("cludo-search-results");
        this.elemSearchResults = {
            results: null,
            pagination: null,
            filters: null,
            didYouMean: null,
            resultCount: null,
            banner: null
        };

        this.elemOverlaySearch = {
            closeButton: null,
            overlay: null,
            overlayInner: null,
            overlayHeader: null,
            overlayBody: null,
            overlayFooter: null,
            searchWrapper: null,
            searchBox: null,
            searchBoxInput: null,
            searchBoxButton: null,
            searchBoxContent: null,
            searchBoxContentInput: null,
            searchBoxContentButton: null,
            poweredBy: null,
            poweredByMobile: null
        };

        this.endlessScrollElements = {
            loadMore: null,
            backToTop: null
        };

        this.params.query = '';
        this.params.page = 1;
        for (var i = 0, len = this.searchInputsLength; i < len; i++) {
            var inputsWrapper = document.getElementById(this.searchInputs[i]);
            if (inputsWrapper != null) {
                var input = inputsWrapper.querySelectorAll('input[type=text]')[0] || inputsWrapper.querySelectorAll('input[type=search]')[0]
                input.value = this.initSearchBoxText;
            }
        }
    },

    // OVERLAY SEARCH RESULTS EVENT HANDLERS
    closeButtonClickEvent: function() {
        this.overlayCloseModalWithSearch();
    },

    closeButtonWindowKeyupEvent: function(e) {
        var e = e || window.event;
        var keynum = this.helpers.getKey(e);
        if (keynum === this.helpers.ESC) {
            if (document.getElementById("search_autocomplete")) {
                this.autocompleteRestore();
            } else {
                this.overlayCloseModalWithSearch();
            }
        }
    },

    closeButtonKeyupEvent: function(e) {
        var e = e || window.event;
        var keynum = this.helpers.getKey(e);
        if (keynum === this.helpers.TAB && e.shiftKey) {
            var _self = this;
            this.resetFocusTimerPoweredBy = setTimeout(function() {
                document.getElementById('cludo-poweredby-link').focus();
                _self.resetFocusTimerPoweredBy = null;
            }, 100);
        }
    },

    poweredByKeyupEvent: function(e) {
        var e = e || window.event;
        var keynum = this.helpers.getKey(e);
        if (keynum === this.helpers.TAB && !e.shiftKey) {
            this.overlayCloseModalWithSearch();
            /* TO DO: fix focus - not working yet 
            var _self = this;
            this.resetFocusTimerCloseButton = setTimeout(function () {
                document.getElementById('cludo-close-button').focus();
                _self.resetFocusTimerCloseButton = null;
            }, 100);*/
        }
    },

    // ENDLESS SCROLL
    endlessScrollSetElements: function(wrapper) {
        if (this.endlessScrollElements.loadMore === null) {
            if (document.getElementById('cludo-load-more')) {
                this.endlessScrollElements.loadMore = document.getElementById('cludo-load-more');
                this.endlessScrollElements.loadMoreButton = this.endlessScrollElements.loadMore.getElementsByTagName("button")[0];
            } else {
                this.endlessScrollElements.loadMore = this.helpers.addElement(wrapper, 'cludo-hidden', 'cludo-load-more');
                this.endlessScrollElements.loadMoreButton = this.helpers.addButtonElement(this.endlessScrollElements.loadMore, '', this.translateProvider.translate('load_more'));
            }
            this.addEvent(this.endlessScrollElements.loadMore, 'click', 'endlessScrollLoadMoreClickEvent');
        }
        if (this.endlessScrollElements.backToTop === null) {
            if (document.getElementById('cludo-back-to-top')) {
                this.endlessScrollElements.backToTop = document.getElementById('cludo-back-to-top');
                this.endlessScrollElements.backToTopButton = this.endlessScrollElements.backToTop.getElementsByTagName("button")[0];
            } else {
                this.endlessScrollElements.backToTop = this.helpers.addElement(wrapper, 'cludo-opacity0', 'cludo-back-to-top');
                this.endlessScrollElements.backToTopButton = this.helpers.addButtonElement(this.endlessScrollElements.backToTop, '', this.translateProvider.translate('backToTop'));
            }
            this.addEvent(this.endlessScrollElements.backToTop, 'click', 'endlessScrollBackToTopClickEvent');
            this.addEvent(this.endlessScrollElements.backToTop, 'keyup', 'endlessScrollBackToTopKeyupEvent');
        }
    },

    endlessScrollAddScrollEvent: function() {
        // Fix for IE9 & IE 10
        var _self = this;
        if (this.eventHandler.attach === 'attachEvent') {
            this.endlessScrollElements.scrolledElement.attachEvent("onscroll", function(e) {
                _self.endlessScrollScrollEvent(e);
            });
        } else {
            this.endlessScrollElements.scrolledElement.addEventListener("scroll", function(e) {
                _self.endlessScrollScrollEvent(e);
            });
        }
    },

    endlessScrollLoadMoreClickEvent: function() {
        this.params.page++;
        this.doSearch();
    },

    endlessScrollBackToTopClickEvent: function() {
        if (this.endlessScrollElements.documentElement) {
            //this.scrollToTop(this.endlessScrollElements.documentElement);
            if (this.isOverlaySearch) {
                this.endlessScrollElements.documentElement.scrollTop = 0;
            } else {
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            }
            this.endlessScrollElements.documentElement.scrollTop = 0;
            this.helpers.removeClass(this.endlessScrollElements.backToTop, 'cludo-opacity1');
            this.helpers.addClass(this.endlessScrollElements.backToTop, 'cludo-opacity0');
        }
    },

    endlessScrollBackToTopKeyupEvent: function() {
        var e = e || window.event;
        var keynum = this.helpers.getKey(e);
        if (keynum === this.helpers.ENTER) {
            this.elemSearchResults.results.getElementsByTagName("ul")[0].children[0].getElementsByTagName("a")[0].focus();
        }
    },

    /*scrollToTop: function(elem){
        var st = setInterval(function() {
            var pos = elem === window ? elem.pageYOffset : elem.scrollTop;
            if ( pos > 0 ) {
                if(elem === window){
                    window.scrollTo( 0, pos - 50 );
                } else{
                    elem.scrollTop = pos - 50;
                }
            } else {
                clearInterval(st);
            }
        }, 2); 
    },*/

    endlessScrollScrollEvent: function() {
        var scrollTop = this.endlessScrollElements.scrolledElement.pageYOffset || this.endlessScrollElements.documentElement.scrollTop;
        var scrollHeight = this.endlessScrollElements.documentElement.scrollHeight;
        var offsetHeight = window.innerHeight || document.documentElement.clientHeight; 
        var contentHeight = scrollHeight - offsetHeight - this.endlessScroll.bottomOffset;
        if (contentHeight <= scrollTop && contentHeight != 0 && scrollTop != 0 && !this.isLazyLoading) {
            if (this.params.page < this.endlessScroll.stopAfterPage && this.totalDocuments > this.endlessScroll.resultsPerPage && this.params.page < Math.ceil(this.totalDocuments / this.endlessScroll.resultsPerPage)) {
                this.params.page++;
                this.doSearch();
            }
        }
        if (scrollTop <= 100) {
            this.helpers.removeClass(this.endlessScrollElements.backToTop, 'cludo-opacity1');
            this.helpers.addClass(this.endlessScrollElements.backToTop, 'cludo-opacity0');
        }
        if (scrollTop > 100) {
            this.helpers.removeClass(this.endlessScrollElements.backToTop, 'cludo-opacity0');
            this.helpers.addClass(this.endlessScrollElements.backToTop, 'cludo-opacity1');
        }
    },

    // TRACKING
    track: function(totalDocuments) {

        if (this.enableExtendedTracking) {
            // Internal tracking
            this._trackQuery();
        }

        // Google Analytics tracking
        if (typeof this.websiteSettings.enableGoogleAnalyticsIntegration !== 'undefined' && (typeof ga !== 'undefined' || typeof gtag !== 'undefined' || typeof dataLayer !== 'undefined' || typeof _gaq !== 'undefined')) {

            var path = window.location.pathname + window.location.hash.substring(1);
            var hasResultsMessage = 'Search with results';
            if (totalDocuments == 0) {
                hasResultsMessage = 'Search without results';
            }

            if (this.websiteSettings.enableGoogleAnalyticsIntegration === true && typeof path !== 'undefined' && path !== '') {
                /**
                 * To provide an opportunity using 'Site Search' Tool in GA and get an access to 'Events' to be able tracking
                 * differently search with/without results we will send 2 requests to GA:
                 * 1. 'PageView' for 'Site Search'
                 * 2. 'Event tracking' for 'Events'
                 */
                if ('undefined' !== typeof ga
                    && 'undefined' !== typeof ga.getAll
                    && 'undefined' !== typeof ga.getAll()[0]
                    && 'undefined' !== typeof ga.getAll()[0].get('clientId')) {

                    // Send PageView to be able using 'Site search' filter
                    // Do not add any 'Event'/'Label' properties to this request
                    ga(
                        ga.getAll()[0].get('name') + '.send', {
                            'hitType': 'pageview',
                            'page': path,
                        });

                    // Send Event to be able track search events different
                    // When we will divide search events we should set appropriated 'eventActions'
                    ga(
                        ga.getAll()[0].get('name') + '.send',
                        'event', {
                            'eventCategory': 'Cludo Search',
                            'eventAction': 'Search',
                            'eventLabel': hasResultsMessage,
                        });

                } else if ('undefined' !== typeof dataLayer && 'undefined' !== typeof gtag) {
                    // Potentially this case will be never triggered
                    // Here 'Search' is 'eventAction'
                    gtag('event', 'Search', {
                        'event_category': 'Cludo Search',
                        'event_label': hasResultsMessage,
                    });
                } else if (typeof _gaq !== 'undefined') {
                    _gaq.push(['_trackPageview', path]);
                    _gaq.push('Cludo Search', 'Search', hasResultsMessage);
                }
            }
        }

        // Siteimprove Analytics tracking
        if (typeof this.websiteSettings.enableSiteimproveAnalyticsIntegration !== 'undefined' && this.websiteSettings.enableSiteimproveAnalyticsIntegration === true) {
            this.trackSiteimproveAnalytics(this.params.query, totalDocuments);
        }
    },

    trackSiteimproveAnalytics: function(query, totalDocuments) {
        if (typeof _sz !== 'undefined') {
            var href = window.location.href,
                //Replacing # in URL due to Siteimproves default behaviour to strip hashtag from URL
                newHref = href.replace(/\/?#\/?/, '/hash/');

            var szData = [];

            // The URL that will be displayed in analytics tool
            szData.push(['ourl', newHref]);

            // The title of the page to be displayed in analytics tool
            szData.push(['title', document.title]);

            // Update the searchword and hits values
            szData.push(['sw', this.helpers.stripHtmlTags(query)]);

            szData.push(['hits', totalDocuments]);

            // // Updates the referrer to be used next time we trackpageview
            // szData.push(['ref', newHref]);

            //_sz.push(['trackdynamic', [['url', 'https://www.example.com/'], ['sw', 'haj'], ['hits', 666]]]);
            _sz.push(['trackdynamic', szData]);
        }


    },

    // EXTENSIONS
    // limit search with predefined facet
    limitSearch: function(triggeringElelm, predefinedFacet) {
        this.triggeringElelm = triggeringElelm;
        for (var key in predefinedFacet) {
            this.predefinedFacetKey = key;
            this.predefinedFacetValue = predefinedFacet[key][0];
        }

        if (typeof this.triggeringElelm !== 'undefined' && this.triggeringElelm !== null && this.triggeringElelm.checked) {
            this.initFacets = predefinedFacet;
        } else {
            this.initFacets = null;
        }

        this.addEvent(window, "hashchange", "limitSearchOnHashchange");
        this.addEvent(window, "load", "limitSearchOnload");
    },

    limitSearchOnload: function() {
        urlParams = this.helpers.getURLParam(this.paramsPrefix + this.predefinedFacetKey);
        if (typeof urlParams !== 'undefined' && urlParams !== '' && urlParams === this.predefinedFacetValue) {
            this.triggeringElelm.checked = true;
        }
    },

    limitSearchOnHashchange: function() {
        urlParams = this.helpers.getURLParam(this.paramsPrefix + this.predefinedFacetKey);
        if (typeof urlParams !== 'undefined' && urlParams !== '' && urlParams !== this.predefinedFacetValue) {
            this.triggeringElelm.checked = false;
            this.initFacets = null;
        }
    },

    toggleMobileNavigation: function(e) {
        var el = e.parentNode.getElementsByTagName('ul')[0];
        if (el.style.display !== 'none' && el.style.display !== '') {
            el.style.display = 'none';
            this.helpers.removeClass(e, 'open');
            //this.elemOverlaySearch.searchBoxContent.style.zIndex = "1";
        } else {
            el.style.display = 'block';
            this.helpers.addClass(e, 'open');
            //this.elemOverlaySearch.searchBoxContent.style.zIndex = "0";
        }
    },
    toggleDropdown: function(e) {
        var el = document.getElementById(e);
        if (el.style.display !== 'none' && el.style.display !== '') {
            el.style.display = 'none';
            this.helpers.removeClass(e, 'open');
            //this.elemOverlaySearch.searchBoxContent.style.zIndex = "1";
        } else {
            el.style.display = 'block';
            this.helpers.addClass(e, 'open');
            //this.elemOverlaySearch.searchBoxContent.style.zIndex = "0";
        }
    },

    // HELPER FUNCTIONS
    helpers: {
        UP: 38,
        DOWN: 40,
        ENTER: 13,
        ESC: 27,
        TAB: 9,

        getKey: function(e) {
            if (window.event) {
                return e.keyCode;
            } else if (e.which) {
                return e.which;
            }
        },

        isMac: function() {
            return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        },

        addClass: function(el, className) {
            if (el) {
                if (!this.hasClass(el, className)) {
                    el.className = el.className + " " + className;
                }
            }
        },

        removeClass: function(el, className) {
            if (el) {
                if (el.classList) {
                    el.classList.remove(className);
                } else {
                    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        },

        hasClass: function(el, className) {
            if (el) {
                var match = el.className.match(className);
                return match ? true : false;
            }
            return false;
        },

        removeElement: function(el) {
            var elem = document.getElementById(el);
            if (elem != null) {
                elem.parentNode.removeChild(elem);
            }
        },

        addElement: function(el, className, id, role) {
            var elem = document.createElement("div");
            if (typeof className !== 'undefined' && className !== '') {
                elem.className = className;
            }
            if (typeof id !== 'undefined' && id !== '') {
                elem.setAttribute('id', id);
            }
            if (typeof role !== 'undefined' && role !== '') {
                elem.setAttribute('role', role);
            }
            el.appendChild(elem);
            return elem;
        },

        addLabelElement: function(el, forAtt, value) {
            var label = document.createElement("label");
            label.setAttribute('for', forAtt);
            label.innerHTML = value;
            el.appendChild(label);
            return label;
        },

        addInputElement: function(el, name, className, value, id) {
            var input = document.createElement("input");
            input.setAttribute('type', 'search');
            input.id = id;
            input.name = name;
            input.className = className;
            input.setAttribute('value', value);
            input.autocomplete = "off";
            el.appendChild(input);
            return input;
        },

        addButtonElement: function(el, className, value) {
            var button = document.createElement("button");
            button.setAttribute('type', 'button');
            button.className = className;
            button.innerHTML = value;
            if (className != "") {
                button.id = className;
            }
            el.appendChild(button);
            return button;
        },

        getWindowLocation: function() {
            return window.location.href;
        },

        getWindowHash: function() {
            return window.location.hash;
        },

        getPredefinedFacet: function(boxId, i) {
            return document.getElementById(boxId).querySelectorAll('input[type=hidden]')[i].getAttribute("data-facet");
        },

        getURLParam: function(param) {
            var hash = this.getWindowHash();
            return decodeURIComponent(hash.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(param).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
        },

        stripHtmlTags: function(query) {
            var pre = document.createElement('pre');
            var text = document.createTextNode(query);
            pre.appendChild(text);
            return pre.innerHTML;
        },

        trim: function(s) {
            if (typeof String.prototype.trim !== 'function') {
                return s.replace(/^\s+|\s+$/g, '');
            } else {
                return s.trim();
            }
        },

        removeUnsafeCharacters: function(query) {
            var regex = /"/ig;
            var count =  (query.match(regex) || []).length;
            if (count !== 2 && count > 0) {
                return query.replace(regex, "");
            }
            return query;
        },

        highlightSearchword: function(input, needle) {
            //return input.replace(new RegExp('(^|\\s)(' + needle + ')(\\s|$)','ig'), '$1<b>$2</b>$3');
            return input.replace(new RegExp('(^|\\s)(' + needle + ')(|$)', 'ig'), '$1<b>$2</b>$3');
        },

        objectToQueryString: function(obj) {
            var parts = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                }
            }
            return parts.join("&");
        },

        isEmpty: function(object) {
            for (var i in object) {
                return false;
            }
            return true;
        },

        isMobile: function() {
            var w = window.innerWidth;
            return w < 767 ? true : false;
        },

        isTablet: function() {
            var w = window.innerWidth;
            return w > 767 && w >= 940 ? true : false;
        },

        shadeColor: function(color, percent) {
            var R = parseInt(color.substring(1, 3), 16);
            var G = parseInt(color.substring(3, 5), 16);
            var B = parseInt(color.substring(5, 7), 16);

            R = parseInt(R * (100 + percent) / 100);
            G = parseInt(G * (100 + percent) / 100);
            B = parseInt(B * (100 + percent) / 100);

            R = (R < 255) ? R : 255;
            G = (G < 255) ? G : 255;
            B = (B < 255) ? B : 255;

            var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
            var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
            var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

            return "#" + RR + GG + BB;
        },
        closest: function(el, selector) {
            if ('undefined' === typeof Element.prototype.closest) {
                // matches polyfill
                Element.prototype.matches = Element.prototype.matches ||
                    Element.prototype.matchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    function(selector) {
                        var node = this;
                        var nodes = (node.parentNode || node.document).querySelectorAll(selector);
                        var i = -1;
                        while (nodes[++i] && nodes[i] !== node);
                        return !!nodes[i];
                    };

                // closest polyfill
                Element.prototype.closest = Element.prototype.closest ||
                    function(selector) {
                        var el = this;
                        while (el.matches && !el.matches(selector)) {
                            el = el.parentNode;
                        }
                        return el.matches ? el : null;
                    };
            }
            return el.closest(selector);
        }
    },

    /* START WITH TRACKING METHODS */
    pushClickLog: function(statParams, onComplete, timeout) {
        return this.pushStat('clicklog', statParams, onComplete, timeout);
    },

    pushQueryLog: function(statParams, onComplete, timeout) {
        return this.pushStat('querylog', statParams, onComplete, timeout);
    },

    pushStat: function(type, statParams, onComplete, timeout) {
        timeout = timeout || 1000;
        var pushstatUrl = this.searchApiUrlPublic + "/" + this.customerId + "/" + this.engineId + "/search/pushstat/" + type
        var statQueryUrl = this._buildPushStatQuery(pushstatUrl, statParams);
        var onCompleteTriggered = false;

        this.xhrPost.apply(this, [statQueryUrl,
            function success() {
                if (onComplete && !onCompleteTriggered) {
                    onComplete();
                    onCompleteTriggered = true;
                }
            }
        ]);

        if (onComplete)
            window.setTimeout(function() {
                if (!onCompleteTriggered) {
                    onComplete();
                    onCompleteTriggered = true;
                }
            }, timeout);
    },
    xhrPost: function(url, success) {
        var _self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200 && success) {
                success.apply(_self, []);
            }
        };

        xhr.setRequestHeader("Accept", "application/json");

        if (!this.intranetSearch) {
            xhr.setRequestHeader("Authorization", "SiteKey " + this.getAuthorizationKey());
        }
        xhr.send();
    },

    trackClickEventHandler: function(elm, isNewWindowClick) {
        isNewWindowClick = isNewWindowClick || false;
        this.clickStat = {
            element: elm,
            index: elm.getAttribute("data-cludo-index"),
            url: elm.getAttribute("data-cludo-url") || elm.href,
            title: elm.getAttribute("data-cludo-title") || elm.title,
            page: elm.getAttribute("data-cludo-page"),
            logSourse: elm.getAttribute("data-cludo-result"),
            objectId: elm.getAttribute("data-cludo-object-id")
        };

        var clickLogObj = this._buildClickLogObject();
        var _self = this;
        this.prepareNewWindow(elm, isNewWindowClick);
        this.pushClickLog.apply(this, [clickLogObj, function() {
            _self.goToClickedResult(elm, isNewWindowClick);
        }]);
    },

    trackClickEventHandlerForRichAutocompleteLink: function(elm) {
        this.clickStat = {
            element: elm,
            index: elm.getAttribute("data-cludo-index"),
            url: elm.getAttribute("data-cludo-url") || elm.href,
            title: elm.getAttribute("data-cludo-title") || elm.title,
            page: 1
        }
    },

    prepareNewWindow: function(elm, isNewWindowClick) {
        var target = elm.getAttribute("target");
        this.newWindow = null;
        if (target === "_blank" || isNewWindowClick) {
            this.newWindow = window.open('', '_blank');
        }
    },

    goToClickedResult: function(elm, isNewWindowClick) {
        if (this.newWindow || isNewWindowClick) {
            this.newWindow.location.href = this.clickStat.url;
        } else {
            window.location.href = this.clickStat.url;
        }

    },

    getSessionId: function(storageContainer) {

        //Don't continue if session-tracking is not allowed
        if (!this.isPersistentTrackingAllowed())
            return null;

        storageContainer = storageContainer || localStorage;

        if (this.storageContainerSupported(storageContainer)) {
            var currentSessionId = storageContainer.getItem(this.sessionIdKey);
            var currentSessionStart = storageContainer.getItem(this.sessionIdStartKey);

            if (!currentSessionId || this.sessionExpired(currentSessionStart)) {
                //Create new session
                currentSessionId = this.generateUUID();
                currentSessionStart = new Date();

                //Store in container
                storageContainer.setItem(this.sessionIdKey, currentSessionId);
                storageContainer.setItem(this.sessionIdStartKey, currentSessionStart);
            }

            //Update sliding expiration
            storageContainer.setItem(this.sessionIdStartKey, new Date());

            return currentSessionId;

        } else {
            return 0;
        }
    },

    sessionExpired: function(startTime) {
        if (!startTime)
            return true;

        return (Math.abs(new Date() - Date.parse(startTime) > this.sessionExpiration));

    },

    generateUUID: function() {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now();; //use high-precision timer if available
        }
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },

    storageContainerSupported: function(storageContainer) {
        var mod = "cludojs";

        try {
            storageContainer.setItem(mod, mod);
            storageContainer.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    },

    isPersistentTrackingAllowed: function() {
        return !this.websiteSettings.optOutCookieTracking;
    },

    // inspiration:: https://developers.google.com/analytics/resources/concepts/gaConceptsTrackingOverview?hl=en 

    _buildClickLogObject: function() {

        var paramsObj = {
            "sz": this._getScreenResolution(),
            "ua": this._getUserAgent(),
            "refurl": this._getReferralUrl(),
            "refpt": this._getReferralPageTitle(),
            "sw": this._getSearchWord(),
            "brl": this._getBrowserLanguage(),
            "pn": this.clickStat.page ? this.clickStat.page : 1,
            "hn": this._getHostName(),
            "enid": this._getEngineId(),
            "clurl": this.clickStat.url,
            "cli": this.clickStat.index,
            "title": this.clickStat.title,
            "qid": this._getQueryId(),
            "sid": this.getSessionId(),
            "qsid": this.querySessionId,
            // to purge cache
            "a": this._getTimestamp()

            // Add categories
        };

        if (null !== this.clickStat.logSourse) {
            paramsObj["ls"] = this.clickStat.logSourse;
        }
        if (null !== this.clickStat.objectId) {
            paramsObj["cloi"] = this.clickStat.objectId;
        }

        return paramsObj;
    },

    _buildQueryLogObject: function() {
        var paramsObj = {
            "sz": this._getScreenResolution(),
            "ua": this._getUserAgent(),
            "refurl": this._getReferralUrl(),
            "refpt": this._getReferralPageTitle(),
            "sw": this._getSearchWord(),
            "swr": this._getSearchWordRaw(),
            "brl": this._getBrowserLanguage(),
            "pn": this._getPageNumber(),
            "hn": this._getHostName(),
            "rc": this._getResultCount(),
            "enid": this._getEngineId(),
            "fquery": this._getFixedQuery(),
            "ban": this._getBannersCount(),
            "rt": this._getResponseTime(),
            "ql": this._getQuicklink(),
            "qid": this._getQueryId(),
            "sid": this.getSessionId(),
            "qsid": this.querySessionId,

            // to purge cache
            "a": this._getTimestamp(),

            // Add categories
        };

        // Banners ids
        if (this._getBannersId) {
            paramsObj["bnrs"] = this._getBannersId();
        }

        return paramsObj;
    },

    _buildQueryLogObjectForQuickLink: function() {
        var paramsObj = this._buildQueryLogObject();
        paramsObj.sw = this.params.query;
        paramsObj.refurl = encodeURIComponent(window.location.protocol + "//" + window.location.hostname + window.location.pathname);
        paramsObj.refpt = encodeURIComponent(document.title);
        paramsObj.page = this.params.page;
        paramsObj.ql = this.quicklink.id;

        return paramsObj;
    },

    _buildQueryLogObjectForRichAutocompleteLink: function() {
        var paramsObj = this._buildClickLogObject();
        paramsObj.ls = this._getLogSource();
        paramsObj.sw = this.params.query;
        paramsObj.refurl = encodeURIComponent(window.location.protocol + "//" + window.location.hostname + window.location.pathname);
        paramsObj.refpt = encodeURIComponent(document.title);

        return paramsObj;
    },


    _buildQueryLogParameters: function(imageUrl, totalResults) {
        var urlWithParams = imageUrl + '?';
        var statisticsData = this._buildQueryLogObject();
        var finalUrl = this._buildUrl(imageUrl, statisticsData)

        return finalUrl;
    },

    _buildPushStatQuery: function(pushStatUrl, parameters) {
        return this._buildUrl(pushStatUrl, parameters);
    },

    _buildUrl: function(url, parameters) {
        var urlWithParams = url + '?';
        var isFirst = true;
        for (var key in parameters) {
            var value = parameters[key] === null ? "" : parameters[key];
            urlWithParams += (isFirst ? "" : "&") + key + "=" + encodeURIComponent(value);
            isFirst = false;
        }
        //urlWithParams += (isFirst ? "" : "&") + 'a=' + new Date().getTime();

        return urlWithParams;
    },


    // param: rc
    _getResultCount: function() {
        return this.totalDocuments;
    },

    // Param: sz
    _getScreenResolution: function() {
        return screen.width + "x" + screen.height;
    },

    // Param: ua
    _getUserAgent: function() {
        return navigator.userAgent;
    },

    // Retrieve the page url from which the search was executed from
    // param: refurl
    _getReferralUrl: function() {
        return this.helpers.getURLParam(this.paramsPrefix + "refurl")
    },

    // param: refpt
    _getReferralPageTitle: function() {
        return this.helpers.getURLParam(this.paramsPrefix + 'refpt');
    },

    // The actual search term performed from URL query param
    // param: sw
    _getSearchWord: function() {
        var query = this.helpers.getURLParam(this.paramsPrefix + 'query');
        return this.helpers.stripHtmlTags(query);
    },

    // The actual search term performed from input value
    // param: swr
    _getSearchWordRaw: function() {
        var query = "";
        for (var i = 0, len = this.searchInputsLength; i < len; i++) {
            if(this.searchBoxInputs[this.searchInputs[i]]){
                if(i>0){
                    query += "|";
                }
                query += this.helpers.stripHtmlTags(this.searchBoxInputs[this.searchInputs[i]].value);
            }
        }
        return query;
    },

    // To track users searches
    // param: clcid
    _getCookieId: function() {
        // Should be enabled // disabled based upon law
    },

    // param: brl
    _getBrowserLanguage: function() {
        return window.navigator.userLanguage || window.navigator.language;
    },

    // param: pn
    _getPageNumber: function() {
        return this.helpers.getURLParam(this.paramsPrefix + 'page');
    },

    // param: hn
    _getHostName: function() {
        return window.location.hostname;
    },

    // param: enid
    _getEngineId: function() {
        return this.engineId;
    },

    // param: fquery
    _getFixedQuery: function() {
        return this.fixedQuery;
    },

    // param: rt
    _getResponseTime: function() {
        return this.responseTime;
    },

    // param ql
    _getQuicklink: function() {
        return this.helpers.getURLParam(this.paramsPrefix + "ql");
    },

    //
    _getLogSource: function() {
        return "richautocomplete";
    },

    _getTimestamp: function() {
        return new Date().getTime();
    },

    _getBannersCount: function() {
        if (typeof this.banners === 'undefined' || this.banners === null) {
            return 0;
        }

        return this.banners.length;
    },

    _getBannersId: function() {
        if (typeof this.banners === 'undefined' || this.banners === null) {
            return 0;
        } else {
            var bannersId = [];
            for (var i = 0; i < this.banners.length; i++) {
                bannersId.push(this.banners[i].Id);
            }
            return bannersId;
        }
    },

    _getQueryId: function() {
        return this.queryId;
    },
    _trackQuery: function() {
        this.pushQueryLog(this._buildQueryLogObject());
    },
    _insertTrackingImage: function() {
        var url = this._buildQueryLogParameters(this.searchApiUrl.substr(0, this.searchApiUrl.indexOf("/", 8)) + '/__utm.gif');

        var trackingImage = document.createElement('img');
        trackingImage.setAttribute('src', url);
        trackingImage.style.display = 'none';

        document.body.appendChild(trackingImage);
    },
    _wildcardToRegex: function(pattern) {
        return new RegExp("^" + pattern.replace(/\*/g, ".*").replace(/\?/g, ".") + "$");
    },

    /* START WITH TRACKING METHODS */

    // TRANSLATE
    // Keys prefixed with 'template_' handle translations in server side templates.
    translateProvider: {
        language: "da",
        translations: {
            "da": { //og fundet 999 resultater
                "did_you_mean": "Mente du <a href='' aria-label='Mente du {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Din s&oslash;gning p&aring; '<b>{{value}}</b>' ",
                "total_results": "gav <b>{{value}}</b> resultater",
                "total_result": "gav <b>{{value}}</b> resultat",
                "in_category": " i kategorien <b>{{value}}</b>",
                "and": " og",
                "searched_instead": "<br />Der er i stedet s&oslash;gt p&aring; <b>{{value}}</b>",
                "searched_instead_found": " og fundet <b>{{value}}</b> resultater",
                "error": "<p style='color: red' class='cludo-error-message'>Der er opst&aring;et en fejl.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Indtast venligst s&oslash;geord</div>",
                "overlay_close_button": "ESC eller",
                "load_more": "vis flere",
                "poweredBy_title": "Tag kontrol over din s&oslash;gemaskine - Cludo",
                "backToTop": "Tilbage til toppen",
                "search_input_label": "S&oslash;g",
                "search_button_text": "S&oslash;g",
                "overlay_close_button_title": "Luk s&oslash;gning",
                "template_all_results": "Alle resultater",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"                
            },
            "en": {
                "did_you_mean": "Did you mean <a href='' aria-label='Did you mean {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Your search for '<b>{{value}}</b>' ",
                "total_results": "returned <b>{{value}}</b> results",
                "total_result": "returned <b>{{value}}</b> result",
                "in_category": " in the category <b>{{value}}</b>",
                "and": " and",
                "searched_instead": "<br />Showing results for <b>{{value}}</b> instead",
                "searched_instead_found": " and gave <b>{{value}}</b> results",
                "error": "<p style='color: red' class='cludo-error-message'>Sorry, an error occured.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Please enter a search term</div>",
                "overlay_close_button": "ESC or",
                "load_more": "show more",
                "poweredBy_title": "Take control over the search on your website - Cludo",
                "backToTop": "Back to top",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit search",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "de": {
                "did_you_mean": "Meinten Sie <a href='' aria-label='Meinten Sie {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Ihre Suche nach '<b>{{value}}</b>' ",
                "total_results": "ergab <b>{{value}}</b> Ergebnisse",
                "total_result": "ergab  <b>{{value}}</b> Ergebnis",
                "in_category": " in Kategorie <b>{{value}}</b>",
                "and": " und",
                "searched_instead": "<br />Stattdessen werden Ergebnisse für <b>{{value}}</b> angezeigt",
                "searched_instead_found": " und ergab <b>{{value}}</b> Ergebnisse",
                "error": "<p style='color: red' class='cludo-error-message'>Tut uns leid, es ist ein Fehler aufgetreten.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Bitte geben Sie einen Suchbegriff ein</div>",
                "overlay_close_button": "ESC oder",
                "load_more": "mehr anzeigen",
                "poweredBy_title": "Übernehmen Sie die Kontrolle über die Suche auf Ihrer Website - Cludo",
                "backToTop": "Nach oben",
                "search_input_label": "Suche",
                "search_button_text": "Suche",
                "overlay_close_button_title": "Schließen Suche",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "nl": {
                "did_you_mean": "Bedoelde je <a href='' aria-label='Bedoelde je {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Uw zoektocht naar '<b>{{value}}</b>' ",
                "total_results": "gaf <b>{{value}}</b> resultaten",
                "total_result": "gaf <b>{{value}}</b> resultaat",
                "in_category": " in de categorie <b>{{value}}</b>",
                "and": " en",
                "searched_instead": "<br />Resultaten voor <b>{{value}}</b> resultaten",
                "searched_instead_found": " en gaf <b>{{value}}</b> results",
                "error": "<p style='color: red' class='cludo-error-message'>Sorry, er is een fout opgetreden.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Vul een zoekterm in</div>",
                "overlay_close_button": "ESC of",
                "load_more": "laat meer zien",
                "poweredBy_title": "Aangedreven door - Cludo",
                "backToTop": "Terug naar boven",
                "search_input_label": "Zoeken",
                "search_button_text": "Zoeken",
                "overlay_close_button_title": "Exit zoektocht",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "sv": {
                "did_you_mean": "Menade du <a href='' aria-label='Menade du {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Din sökning på '<b>{{value}}</b>' ",
                "total_results": "gav <b>{{value}}</b> resultat",
                "total_result": "gav <b>{{value}}</b> resultat",
                "in_category": " i kategorin <b>{{value}}</b>",
                "and": "och",
                "searched_instead": "<br />Visar resultat för <b>{{value}}</b> istället",
                "searched_instead_found": " och gav <b>{{value}}</b> resultat",
                "error": "<p style='color: red' class='cludo-error-message'>Ett fel uppstod.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Ange sökord</div>",
                "overlay_close_button": "ESC eller",
                "load_more": "visa fler",
                "poweredBy_title": "Ta kontroll över din sökmotor - Cludo",
                "backToTop": "Tillbaka till toppen",
                "search_input_label": "Sök",
                "search_button_text": "Sök",
                "overlay_close_button_title": "Exit sökning",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "el": {
                "did_you_mean": "Μήπως εννοείτε <a href='' aria-label='Μήπως εννοείτε {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "H αναζήτησή σας για '<b>{{value}}</b>' ",
                "total_results": "έδωσε <b>{{value}}</b> αποτελέσματα",
                "total_result": "έδωσε <b>{{value}}</b> αποτέλεσμα",
                "in_category": " στην κατηγορία <b>{{value}}</b>",
                "and": "και",
                "searched_instead": "<br />Εμφανίζονται αποτελέσματα για <b>{{value}}</b> αντί αυτού",
                "searched_instead_found": " και έδωσε <b>{{value}}</b> αποτελέσματα",
                "error": "<p style='color: red' class='cludo-error-message'>Λυπούμαστε, παρουσιάστηκε ένα σφάλμα.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>� αρακαλούμε εισάγετε έναν όρο αναζήτησης</div>",
                "overlay_close_button": "� ατήστε ESC ή",
                "load_more": "δείξτε περισσότερα",
                "poweredBy_title": "� άρτε τον έλεγχο της αναζήτησης στην ιστοσελίδα σας - Cludo",
                "backToTop": "Επιστροφή στην κορυφή",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "ar": {
                "did_you_mean": "هل تقصد <a href='' aria-label='هل تقصد {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "تبحث عن '<b>{{value}}</b>' ",
                "total_results": "نتيجة <b>{{value}}</b> أعطى",
                "total_result": "<b>{{value}}</b> أعطى نتيجة واحدة",
                "in_category": " في الفئة <b>{{value}}</b>",
                "and": " و",
                "searched_instead": "<br />يظهر نتائج لـ <b>{{value}}</b> بدلاً من ذلك",
                "searched_instead_found": " نتيجة <b>{{value}}</b> وأعطى",
                "error": "<p style='color: red' class='cludo-error-message'>معذرة، حدث خطأ.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>يرجى إدخال مصطلح بحث</div>",
                "overlay_close_button": "ESC أو",
                "load_more": "عرض المزيد",
                "poweredBy_title": "سيطر على البحث على موقعك الإلكتروني - Cludo",
                "backToTop": "رجوع إلى أعلى",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "hy": {
                "did_you_mean": "Միգուցե նկատի ունեք <a href='' aria-label='Միգուցե նկատի ունեք {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Ձեր '<b>{{value}}</b>' բառի որոնումը",
                "total_results": "տվեց <b>{{value}}</b> արդյունք",
                "total_result": "տվեց <b>{{value}}</b> արդյունք",
                "in_category": "<b>{{value}}</b> բաժնում",
                "and": "և",
                "searched_instead": "<br />Արդյունքները <b>{{value}}</b> փոխարեն ցույց տվեց",
                "searched_instead_found": " և տվեց <b>{{value}}</b> արդյունք",
                "error": "<p style='color: red' class='cludo-error-message'>Ցավում ենք, սխալմունք է տեղի ունեցել</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Մուտքագրեք խնդրեմ որոնման չափանիշները</div>",
                "overlay_close_button": "ESC կամ",
                "load_more": "ցույց տալ ավելին",
                "poweredBy_title": "Ձեր կայքում վերահսկեք Cludo բառի որոնումը",
                "backToTop": "Վերադառնալ սկիզբ",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "eu": {
                "did_you_mean": "<a href='' aria-label='{{value}} esan nahi al duzu'><b>{{value}}</b></a> esan nahi al duzu?",
                "your_search_on": " '<b>{{value}}</b>' bilaketak",
                "total_results": "<b>{{value}}</b> emaitza eman ditu",
                "total_result": "emaitza <b>{{value}}</b> eman du",
                "in_category": " <b>{{value}}</b> kategorian",
                "and": "eta",
                "searched_instead": "<br />Horren ordez, <b>{{value}}</b> bilaketaren emaitzak erakusten dira",
                "searched_instead_found": " eta <b>{{value}}</b> emaitza eman ditu",
                "error": "<p style='color: red' class='cludo-error-message'>Barkatu, errore bat gertatu da.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Idatzi bilaketa-termino bat</div>",
                "overlay_close_button": "ESC edo",
                "load_more": "gehiago erakutsi",
                "poweredBy_title": "Kontrola itzazu zure webguneko bilaketak - Cludo",
                "backToTop": "Gora itzuli",
                "search_input_label": "Sök",
                "search_button_text": "Sök",
                "overlay_close_button_title": "Exit sökning",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "bg": {
                "did_you_mean": "Имахте предвид <a href='' aria-label='Имахте предвид {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Вашето търсене за '<b>{{value}}</b>' ",
                "total_results": "даде <b>{{value}}</b> резултата",
                "total_result": "даде <b>{{value}}</b> резултат",
                "in_category": " в категория <b>{{value}}</b>",
                "and": "и",
                "searched_instead": "<br />Показване вместо това на резултати за '<b>{{value}}</b>'",
                "searched_instead_found": " и даде <b>{{value}}</b> резултата",
                "error": "<p style='color: red' class='cludo-error-message'>За съжаление, възникна грешка.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Въведете термин за търсене</div>",
                "overlay_close_button": "ESC или",
                "load_more": "показване на още",
                "poweredBy_title": "Поемете контрол върху търсенето в уеб сайта си - Cludo",
                "backToTop": "Обратно най-горе",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "ca": {
                "did_you_mean": "Volia di <a href='' aria-label='Volia di {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "La seva cerca de '<b>{{value}}</b>' ",
                "total_results": "ha donat <b>{{value}}</b> resultats",
                "total_result": "ha donat <b>{{value}}</b> resultat",
                "in_category": " en la categoria <b>{{value}}</b>",
                "and": " i",
                "searched_instead": "<br />Mostrant en canvi resultats de '<b>{{value}}</b>'",
                "searched_instead_found": " i ha donat <b>{{value}}</b> resultats",
                "error": "<p style='color: red' class='cludo-error-message'>Ens sap greu, s'ha produït un error.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Si us plau, introdueixi un terme de cerca</div>",
                "overlay_close_button": "ESC o",
                "load_more": "mostrar-ne més",
                "poweredBy_title": "Controli les cerques en el seu lloc web - Cludo",
                "backToTop": "Tornar al començament",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "zh": {
                "did_you_mean": "您是说 <a href='' aria-label='您是说 {{value}} 吗'><b>{{value}}</b></a> 吗？",
                "your_search_on": "您搜索 '<b>{{value}}</b>' ",
                "total_results": "给出 <b>{{value}}</b> 个结果",
                "total_result": "给出 <b>{{value}}</b> 个结果",
                "in_category": "在类别 <b>{{value}}</b> 中",
                "and": "并",
                "searched_instead": "<br /> 转而显示 '<b>{{value}}</b>' 的结果",
                "searched_instead_found": "并给出<b>{{value}}</b>个结果",
                "error": "<p style='color: red' class='cludo-error-message'>抱歉，发生了一个错误。</p>",
                "no_search_term": "<div class='cludo-no-search-term'>请输入一个搜索术语</div>",
                "overlay_close_button": "退出或",
                "load_more": "显示更多",
                "poweredBy_title": "取得对您网站上搜索的控制 - Cludo",
                "backToTop": "返回顶部",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "cs": {
                "did_you_mean": "Mysleli jste <a href='' aria-label='Mysleli jste {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Při vyhledávání '<b>{{value}}</b>' ",
                "total_results": "bylo nalezeno <b>{{value}}</b> výsledkù",
                "total_result": "nalezen <b>{{value}}</b> výsledek",
                "in_category": " v kategorii <b>{{value}}</b>",
                "and": " a",
                "searched_instead": "<br />Ukazuje výsledky pro '<b>{{value}}</b>' místo",
                "searched_instead_found": " a dal <b>{{value}}</b> výsledkù",
                "error": "<p style='color: red' class='cludo-error-message'>Omlouváme se, stala se chyba.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Vložte prosím slovo, které chcete vyhledat</div>",
                "overlay_close_button": "ESC nebo",
                "load_more": "ukaž víc",
                "poweredBy_title": "Převezmìte kontrolu nad vyhledáváním na wašich webových stránkách - Cludo",
                "backToTop": "Zpět nahoru",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "et": {
                "did_you_mean": "Kas te mõtlete <a href='' aria-label='Kas te mõtlete {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Te otsite '<b>{{value}}</b>' ",
                "total_results": "pakutakse <b>{{value}}</b> tulemust",
                "total_result": "pakutakse <b>{{value}}</b> tulemus",
                "in_category": " kategoorias <b>{{value}}</b>",
                "and": " ja",
                "searched_instead": "<br />asemel näidatakse '<b>{{value}}</b>' tulemusi",
                "searched_instead_found": " ja pakutakse <b>{{value}}</b> tulemust",
                "error": "<p style='color: red' class='cludo-error-message'>Vabandust, tekkis viga.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Palun sisestage otsitav mõiste</div>",
                "overlay_close_button": "ESC või",
                "load_more": "näidake rohkem",
                "poweredBy_title": "Kontrollige oma veebisaidi otsinguid - Cludo",
                "backToTop": "Tagasi üles",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "fi": {
                "did_you_mean": "Tarkoititko sanaa <a href='' aria-label='Tarkoititko sanaa {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Hakusi sanalla '<b>{{value}}</b>' ",
                "total_results": "tuotti <b>{{value}}</b> tulosta",
                "total_result": "tuotti <b>{{value}}</b> tuloksen",
                "in_category": " kategoriassa <b>{{value}}</b>",
                "and": " ja",
                "searched_instead": "<br />Näytetään tuloksia sanalla '<b>{{value}}</b>' sen sijaan,",
                "searched_instead_found": " ja haku tuotti <b>{{value}}</b> tulosta",
                "error": "<p style='color: red' class='cludo-error-message'>Pahoittelut, tapahtui virhe.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Syötä hakutermi</div>",
                "overlay_close_button": "ESC tai",
                "load_more": "näytä lisää",
                "poweredBy_title": "Ota verkkosivustosi hakutoiminto haltuusi - Cludo",
                "backToTop": "Takaisin alkuun",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "fr": {
                "did_you_mean": "Voulez-vous dire <a href='' aria-label='Voulez-vous dire {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Vous avez recherché '<b>{{value}}</b>' ",
                "total_results": "<b>{{value}}</b> occurrences trouvées",
                "total_result": "<b>{{value}}</b> occurrence trouvée",
                "in_category": " dans la catégorie <b>{{value}}</b>",
                "and": " et",
                "searched_instead": "<br />Montrer les résultats pour '<b>{{value}}</b>' �  la place",
                "searched_instead_found": " et <b>{{value}}</b> occurrences trouvés",
                "error": "<p style='color: red' class='cludo-error-message'>Une erreur s'est produite.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Veuillez entrer un terme de recherche</div>",
                "overlay_close_button": "ESC ou",
                "load_more": "voir plus",
                "poweredBy_title": "Prenez le contrôle des recherches sur votre site Internet - Cludo",
                "backToTop": "Retour vers le haut",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "gl": {
                "did_you_mean": "¿Querías dicir <a href='' aria-label='¿Querías dicir {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "A tua busca de '<b>{{value}}</b>' ",
                "total_results": "  dou <b>{{value}}</b> resultados",
                "total_result": "  dou <b>{{value}}</b> resultado",
                "in_category": " na categoría <b>{{value}}</b>",
                "and": " e",
                "searched_instead": "<br />en vez dela, móstranse os resultados de '<b>{{value}}</b>'",
                "searched_instead_found": " e dou <b>{{value}}</b> resultados",
                "error": "<p style='color: red' class='cludo-error-message'>Sentímolo, houbo un erro.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Introduce un termo na busca</div>",
                "overlay_close_button": "ESC ou",
                "load_more": "mostrar mais",
                "poweredBy_title": "Toma o control da busca no teu website - Cludo",
                "backToTop": "Volver arriba",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "hi": {
                "did_you_mean": "क्या आपका मतलब <a href='' aria-label='क्या आपका मतलब {{value}}' हैं><b>{{value}}</b></a> हैं?",
                "your_search_on": "आपकी '<b>{{value}}</b>' खोज ",
                "total_results": "  के लिए <b>{{value}}</b> परिणाम मिले",
                "total_result": "<b>{{value}}</b> परिणाम मिला",
                "in_category": "<b>{{value}}</b> श्रेणी में",
                "and": " और",
                "searched_instead": "<br />इसके बजाय '<b>{{value}}</b>' के परिणामो को दिखा रहे हैं",
                "searched_instead_found": " और <b>{{value}}</b> परिणाम मिले",
                "error": "<p style='color: red' class='cludo-error-message'>क्षमा करें, एक त्रुटी हुई।</p>",
                "no_search_term": "<div class='cludo-no-search-term'>कृपया एक खोज शब्द को प्रविष्ट करें</div>",
                "overlay_close_button": "ESC या",
                "load_more": "अधिक दिखाए",
                "poweredBy_title": "अपनी वेबसाइट की खोज पर नियंत्रण रखे - क्लुड़ो",
                "backToTop": "फिर से शीर्ष पर",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "hu": {
                "did_you_mean": "Úgy értetted, hogy <a href='' aria-label='Úgy értetted, hogy {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "A keresésed a következõre: '<b>{{value}}</b>' ",
                "total_results": "<b>{{value}}</b> találatot adott",
                "total_result": "<b>{{value}}</b> találatot adott",
                "in_category": "  a következõ kategóriában: <b>{{value}}</b>",
                "and": " és",
                "searched_instead": "<br />Találatok megjelenítése a következõre: '<b>{{value}}</b>' ehelyett:",
                "searched_instead_found": " és <b>{{value}}</b> találatot adott",
                "error": "<p style='color: red' class='cludo-error-message'>Sajnáljuk, hiba történt.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Kérjük, adj meg egy keresõszót</div>",
                "overlay_close_button": "ESC vagy",
                "load_more": "még több",
                "poweredBy_title": "Vedd át az irányítást a keresés felett a weboldaladon - Cludo",
                "backToTop": "Vissza a tetejére",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "is": {
                "did_you_mean": "Áttir þú við <a href='' aria-label='Áttir þú við {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Leit þín að '<b>{{value}}</b>' ",
                "total_results": " skilaði <b>{{value}}</b> niðurstöðum",
                "total_result": " skilaði <b>{{value}}</b> niðurstöðu",
                "in_category": "  í flokk <b>{{value}}</b>",
                "and": " og",
                "searched_instead": "<br />Sýnir niðurstöður fyrir '<b>{{value}}</b>' í staðinn",
                "searched_instead_found": " og skilaði <b>{{value}}</b> niðurstöðum",
                "error": "<p style='color: red' class='cludo-error-message'>Afsakið, villa kom upp.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Vinsamlegast sláið inn leitarorð</div>",
                "overlay_close_button": "ESC eða",
                "load_more": "sýna meira",
                "poweredBy_title": "Stjórnaðu leitinni á þinni vefsíðu - Cludo",
                "backToTop": "Aftur upp",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "id": {
                "did_you_mean": "Maksud Anda <a href='' aria-label='Maksud Anda {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Pencarian Anda untuk '<b>{{value}}</b>' ",
                "total_results": " memberikan <b>{{value}}</b> hasil",
                "total_result": " memberikan <b>{{value}}</b> hasil",
                "in_category": " dalam kategori <b>{{value}}</b>",
                "and": "dan",
                "searched_instead": "<br />Namun menampilkan hasil untuk '<b>{{value}}</b>'",
                "searched_instead_found": " dan memberikan <b>{{value}}</b> hasil",
                "error": "<p style='color: red' class='cludo-error-message'>Maaf, terjadi kesalahan.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Harap masukkan kata pencarian</div>",
                "overlay_close_button": "Keluar atau",
                "load_more": "tunjukkan lebih banyak",
                "poweredBy_title": "Ambil kendali pencarian di website Anda - Cludo",
                "backToTop": "Kembali ke atas",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "it": {
                "did_you_mean": "Intendi <a href='' aria-label='Intendi {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Hai cercato '<b>{{value}}</b>' ",
                "total_results": " ha fornito <b>{{value}}</b> risultati",
                "total_result": " ha fornito <b>{{value}}</b> risultato",
                "in_category": " nella categoria <b>{{value}}</b>",
                "and": "e",
                "searched_instead": "<br />Mostra invece i risultati per '<b>{{value}}</b>'",
                "searched_instead_found": " e ha fornito <b>{{value}}</b> risultati",
                "error": "<p style='color: red' class='cludo-error-message'>Spiacenti, si è verificato un errore.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Inserisci un termine di ricerca</div>",
                "overlay_close_button": "ESC o",
                "load_more": "visualizza altro",
                "poweredBy_title": "Prendi il controllo della ricarca sul tuo sito web - Cludo",
                "backToTop": "Torna all'inizio",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "ko": {
                "did_you_mean": "Did you mean <a href='' aria-label='Did you mean {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Your search for '<b>{{value}}</b>' ",
                "total_results": "gave <b>{{value}}</b> results",
                "total_result": "gave <b>{{value}}</b> result",
                "in_category": " in the category <b>{{value}}</b>",
                "and": " and",
                "searched_instead": "<br />Showing results for <b>{{value}}</b> instead",
                "searched_instead_found": " and gave <b>{{value}}</b> results",
                "error": "<p style='color: red' class='cludo-error-message'>Sorry, an error occured.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Please enter a search term</div>",
                "overlay_close_button": "ESC or",
                "load_more": "show more",
                "poweredBy_title": "Take control over the search on your website - Cludo",
                "backToTop": "Back to top",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit search",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "lv": {
                "did_you_mean": "Vai domājāt <a href='' aria-label='Vai domājāt {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Jūs meklējāt '<b>{{value}}</b>' ",
                "total_results": " Vaicājumam ir <b>{{value}}</b> rezultāti",
                "total_result": " vaicājumam <b>{{value}}</b> rezultāts",
                "in_category": "  kategorijā <b>{{value}}</b>",
                "and": " un",
                "searched_instead": "<br />Tiek rādīti rezultāti vaicājumam '<b>{{value}}</b>'",
                "searched_instead_found": "vaicājumam ir <b>{{value}}</b> rezultāti",
                "error": "<p style='color: red' class='cludo-error-message'>Atvainojiet, radusies kļūda.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Lūdzu, ievadiet meklējamo terminu</div>",
                "overlay_close_button": "Nospiediet ESC vai",
                "load_more": "rādīt vairāk",
                "poweredBy_title": "Kontrolēt meklēšanu mājas lapā - Cludo",
                "backToTop": "Atgriezties lapas sākumā",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "lt": {
                "did_you_mean": "Ar turėjote omenyje <a href='' aria-label='Ar turėjote omenyje {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Ar ieškojote '<b>{{value}}</b>' ",
                "total_results": " pateikta <b>{{value}}</b> rezultatų",
                "total_result": " pateiktas <b>{{value}}</b> rezultatas",
                "in_category": " kategorijoje <b>{{value}}</b>",
                "and": " ir",
                "searched_instead": "<br />rodomi rezultatai žodžiui '<b>{{value}}</b>'",
                "searched_instead_found": "ir pateikta <b>{{value}}</b> rezultatų",
                "error": "<p style='color: red' class='cludo-error-message'>Apgailestaujame, tačiau įvyko klaida.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Įveskite ieškomą terminą</div>",
                "overlay_close_button": "ESC arba",
                "load_more": "rodyti daugiau",
                "poweredBy_title": "Perimkite paieškos kontrolę savo internetinėje svetainėje - Cludo",
                "backToTop": "Grįžti į viršų",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "no": {
                "did_you_mean": "Mente du <a href='' aria-label='Mente du {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Ditt søk etter '<b>{{value}}</b>' ",
                "total_results": " ga <b>{{value}}</b> resultater",
                "total_result": " ga <b>{{value}}</b> resultat",
                "in_category": "  i kategori <b>{{value}}</b>",
                "and": " og",
                "searched_instead": "<br />viser resultat for '<b>{{value}}</b>'  i stedet",
                "searched_instead_found": "og ga <b>{{value}}</b> resultat",
                "error": "<p style='color: red' class='cludo-error-message'>Beklager, det oppstod en feil.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Skriv inn et søkeord</div>",
                "overlay_close_button": "ESC eller",
                "load_more": "vis mer",
                "poweredBy_title": "Ta kontroll over søkene på nettstedet ditt - Cludo",
                "backToTop": "Tilbake til toppen",
                "search_input_label": "Søk",
                "search_button_text": "Søk",
                "overlay_close_button_title": "Luk",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "pl": {
                "did_you_mean": "Czy chodzi o <a href='' aria-label='Czy chodzi o {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Po zakończeniu wyszukiwania '<b>{{value}}</b>' ",
                "total_results": " otrzymano <b>{{value}}</b> wyników",
                "total_result": " otrzymano <b>{{value}}</b> wynik",
                "in_category": "  w kategorii <b>{{value}}</b>",
                "and": " oraz",
                "searched_instead": "<br />Wyniki dla '<b>{{value}} zamiast</b>'",
                "searched_instead_found": " i otrzymano <b>{{value}}</b> wyników",
                "error": "<p style='color: red' class='cludo-error-message'>Wystąpił błąd.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Wprowadź pojęcie do wyszukiwania</div>",
                "overlay_close_button": "ESC lub",
                "load_more": "pokaż więcej",
                "poweredBy_title": "Wyszukuj na swojej stronie internetowej - Cludo",
                "backToTop": "Powrót do góry",
                "search_input_label": "Szukaj",
                "search_button_text": "Szukaj",
                "overlay_close_button_title": "Zamknij wyszukiwarkę",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "pt": {
                "did_you_mean": "Queria dizer <a href='' aria-label='Queria dizer {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "A sua pesquisa por '<b>{{value}}</b>' ",
                "total_results": "obteve  <b>{{value}}</b> resultados",
                "total_result": "obteve  <b>{{value}}</b> resultado",
                "in_category": "  na categoria <b>{{value}}</b>",
                "and": " e",
                "searched_instead": "<br />A mostrar resultados para '<b>{{value}}</b>' em vez disso",
                "searched_instead_found": " e obteve <b>{{value}}</b> resultados",
                "error": "<p style='color: red' class='cludo-error-message'>Lamentamos, ocorreu um erro.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Introduza um termo a procurar</div>",
                "overlay_close_button": "ESC ou",
                "load_more": "mostrar mais",
                "poweredBy_title": "Assuma o controlo da pesquisa no seu website - Cludo",
                "backToTop": "Voltar ao topo",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "ro": {
                "did_you_mean": "Vrei să spui <a href='' aria-label='Vrei să spui {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Căutarea termenului '<b>{{value}}</b>' ",
                "total_results": " a generat <b>{{value}}</b> de rezultate",
                "total_result": " a generat <b>{{value}}</b> rezultat",
                "in_category": "  în categoria <b>{{value}}</b>",
                "and": " și",
                "searched_instead": "<br />Se prezintă, însă, rezultatele pentru '<b>{{value}}</b>'",
                "searched_instead_found": " și a generat <b>{{value}}</b> de rezultate",
                "error": "<p style='color: red' class='cludo-error-message'>Ne pare rău, a apărut o eroare.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Introdu un nou termen pentru căutare</div>",
                "overlay_close_button": "ESC sau",
                "load_more": "arată mai multe",
                "poweredBy_title": "Preia controlul asupra căutării pe pagina ta web - Cludo",
                "backToTop": "Înapoi sus",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "ru": {
                "did_you_mean": "Вы имели в виду <a href='' aria-label='Вы имели в виду {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Поиск '<b>{{value}}</b>' ",
                "total_results": "дал <b>{{value}}</b> результатов",
                "total_result": "дал <b>{{value}}</b> результат",
                "in_category": "в категории <b>{{value}}</b>",
                "and": "и",
                "searched_instead": "<br />Вместо этого отображаются результаты поиска '<b>{{value}}</b>'",
                "searched_instead_found": "и дал <b>{{value}}</b> результатов",
                "error": "<p style='color: red' class='cludo-error-message'>Извините, возникла ошибка.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Введите искомый термин</div>",
                "overlay_close_button": "ESC или",
                "load_more": "показать больше",
                "poweredBy_title": "Управляйте поиском на своем сайте - Cludo",
                "backToTop": "Наверх",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "sr": {
                "did_you_mean": "Da li ste mislili <a href='' aria-label='Da li ste mislili {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Vaša pretraga za '<b>{{value}}</b>' ",
                "total_results": " dala je <b>{{value}}</b> rezultata",
                "total_result": " dala je <b>{{value}}</b> rezultat",
                "in_category": "  u kategoriji <b>{{value}}</b>",
                "and": " i",
                "searched_instead": "<br />Prikazani su rezultati za '<b>{{value}}</b>'",
                "searched_instead_found": "i postoje <b>{{value}}</b> rezultata",
                "error": "<p style='color: red' class='cludo-error-message'>Žao nam je, došlo je do greške.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Molimo unesite reč za pretraživanje</div>",
                "overlay_close_button": "ESC ili",
                "load_more": "prikaži još",
                "poweredBy_title": "Preuzmite kontrolu nad pretragom na Vašem veb-sajtu - Cludo",
                "backToTop": "Nazad do vrha",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "es": {
                "did_you_mean": "¿Quiso decir <a href='' aria-label='¿Quiso decir {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Su búsqueda de '<b>{{value}}</b>' ",
                "total_results": " ha producido <b>{{value}}</b> resultados",
                "total_result": " ha producido <b>{{value}}</b> resultado",
                "in_category": "  en la categoría <b>{{value}}</b>",
                "and": " y",
                "searched_instead": "<br />Mostrando resultados para '<b>{{value}}</b>' en su lugar",
                "searched_instead_found": "y ha producido <b>{{value}}</b> resultados",
                "error": "<p style='color: red' class='cludo-error-message'>Lo sentimos, ha ocurrido un error.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Por favor, introduzca un término de búsqueda</div>",
                "overlay_close_button": "ESC o",
                "load_more": "mostrar más",
                "poweredBy_title": "Tome el control de las búsquedas en su sitio web - Cludo",
                "backToTop": "Volver al inicio",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "th": {
                "did_you_mean": "คุณหมายความว่า <a href='' aria-label='คุณหมายความว่า {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "การค้นหาของคุณสำหรับ '<b>{{value}}</b>' ",
                "total_results": " ให้ <b>{{value}}</b> ผลการค้นหา",
                "total_result": " ให้ <b>{{value}}</b> ผลการค้นหา",
                "in_category": "  ในหมวดหมู่ <b>{{value}}</b>",
                "and": " และ",
                "searched_instead": "<br />แสดงผลการค้นหาสำหรับ '<b>{{value}}</b>' แทน",
                "searched_instead_found": "และให้ <b>{{value}}</b> ผลการค้นหา",
                "error": "<p style='color: red' class='cludo-error-message'>ขออ� ัยมีข้อผิดพลาดเกิดขึ้น</p>",
                "no_search_term": "<div class='cludo-no-search-term'>กรุณากรอกคำที่ต้องการค้นหา</div>",
                "overlay_close_button": "ESC หรือ",
                "load_more": "แสดงเพิ่มเติม",
                "poweredBy_title": "ควบคุมการค้นหาบนเว็บไซต์ของคุณ - Cludo",
                "backToTop": "กลับไปที่ด้านบน",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "tr": {
                "did_you_mean": "Şunu mu demek istediniz <a href='' aria-label='Şunu mu demek istediniz {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "'<b>{{value}}</b>' için yaptığınız arama",
                "total_results": "<b>{{value}}</b> sonuç verdi",
                "total_result": "<b>{{value}}</b> sonuç verdi",
                "in_category": "<b>{{value}}</b> kategorisinde",
                "and": " ve",
                "searched_instead": "<br />Onun yerine '<b>{{value}}</b>' için arama sonuçları gösteriliyor",
                "searched_instead_found": "ve <b>{{value}}</b> sonuç verdi",
                "error": "<p style='color: red' class='cludo-error-message'>Üzgünüz, bir hata meydana geldi.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Lütfen bir arama terimi girin</div>",
                "overlay_close_button": "ESC veya",
                "load_more": "daha fazla göster",
                "poweredBy_title": "Web sitenizdeki aramaların kontrolünü elinize alın - Cludo",
                "backToTop": "Başa dön",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "uk": {
                "did_you_mean": "Ви мали на увазі <a href='' aria-label='Ви мали на увазі {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Ваш пошук '<b>{{value}}</b>' ",
                "total_results": "дав <b>{{value}}</b> результатів",
                "total_result": "дав <b>{{value}}</b> pезультат",
                "in_category": "у категорії <b>{{value}}</b>",
                "and": " і",
                "searched_instead": "<br />Відображення результатів для '<b>{{value}}</b>' натомість",
                "searched_instead_found": "і дав <b>{{value}}</b> результатів",
                "error": "<p style='color: red' class='cludo-error-message'>На жаль, сталася помилка.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Будь ласка, введіть слово для пошуку</div>",
                "overlay_close_button": "ESC або",
                "load_more": "показати більше",
                "poweredBy_title": "Візьміть під контроль пошук на Вашому веб-сайті - Cludo",
                "backToTop": "Повернутись до початку",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "vi": {
                "did_you_mean": "Có phải bạn muốn tìm <a href='' aria-label='Có phải bạn muốn tìm {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "Tìm kiếm '<b>{{value}}</b>' ",
                "total_results": "có <b>{{value}}</b> kết quả",
                "total_result": "có <b>{{value}}</b> kết quả",
                "in_category": "trong thể loại <b>{{value}}</b>",
                "and": " v� ",
                "searched_instead": "<br />Hiển thị kết quả cho '<b>{{value}}</b>' thay thế",
                "searched_instead_found": "v�  có<b>{{value}}</b> kết quả",
                "error": "<p style='color: red' class='cludo-error-message'>Rất tiếc, đã xảy ra lỗi.</p>",
                "no_search_term": "<div class='cludo-no-search-term'>Vui lòng nhập một từ khóa tìm kiếm</div>",
                "overlay_close_button": "ESC hoặc",
                "load_more": "hiển thị thêm",
                "poweredBy_title": "Kiểm soát tìm kiếm trên trang web của bạn - Cludo",
                "backToTop": "Quay lại đầu trang",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit",
                "template_all_results": "All Results",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            },
            "jp": {
                "did_you_mean": "もしかして <a href='' aria-label='Did you mean {{value}}'><b>{{value}}</b></a>?",
                "your_search_on": "'<b>{{value}}</b>' で検索し ",
                "total_results": "<b>{{value}}</b> 件の結果がありました。",
                "total_result": "<b>{{value}}</b> 件の結果がありました。",
                "in_category": " カテゴリ <b>{{value}}</b>",
                "and": " そして",
                "searched_instead": "<br />Showing results for <b>{{value}}</b> instead",
                "searched_instead_found": " and gave <b>{{value}}</b> results",
                "error": "<p style='color: red' class='cludo-error-message'>申し訳ありませんが、エラーが発生しました</p>",
                "no_search_term": "<div class='cludo-no-search-term'>検索語を入力してく� さい</div>",
                "overlay_close_button": "ESC or",
                "load_more": "もっと見せる",
                "poweredBy_title": "Take control over the search on your website - Cludo",
                "backToTop": "トップに戻る",
                "search_input_label": "Search",
                "search_button_text": "Search",
                "overlay_close_button_title": "Exit search",
                "template_all_results": "すべての結果",
                "template_suggestions": "Suggestions",
                "template_search_results": "Search Results"
            }, 
        },

        // Looks up translation by translation id and language and, if applicable, will replace {{value}} with replace variable
        translate: function(translationId, replace, languageToUse) {
            if (languageToUse === undefined) {
                languageToUse = this.language;
            }
            var r = typeof replace !== 'undefined' ? replace : '';
            return this.translations[languageToUse][translationId].replace(new RegExp('{{value}}', 'g'), r);
        },

        // Translates strings from templating system of format {{some_variable}} to be passed to translate function
        translateTokens: function(stringToTranslate) {
            var translateProvider = this;
            if (stringToTranslate) {
                return stringToTranslate.replace(/{{(.*?)}}/g, function(token, tokenValue) {
                    return translateProvider.translate(tokenValue);           
                });
            }
            else {
                return stringToTranslate;
            }
        }
    }
};
