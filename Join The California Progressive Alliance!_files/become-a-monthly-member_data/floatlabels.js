;
(function($, window, document, undefined) {
    var pluginName = "floatlabel",
        defaults = {
            slideInput: true,
            labelStartTop: '0px',
            labelEndTop: '0px',
            paddingOffset: '12px',
            labelClass: '',
            typeMatches: /text|password|email|number|search|url|tel/,
        };

    function Plugin(element, options) {
        this.$element = $(element);
        this.settings = $.extend({}, defaults, options);
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            var self = this,
                settings = this.settings,
                thisElement = this.$element,
                isContentEditable = false,
                elementID, placeholderText, floatingText, extraClasses;
            if (thisElement.prop('tagName').toUpperCase() != 'INPUT' && thisElement.prop('tagName').toUpperCase() != 'TEXTAREA' && (thisElement.prop('tagName').toUpperCase() != 'DIV' &&  thisElement.prop('contenteditable').toUpperCase() !== 'TRUE')) {
                return;
            }
            if (thisElement.prop('tagName').toUpperCase() === 'INPUT' && !settings.typeMatches.test(thisElement.attr('type'))) {
                return;
            }
            if (thisElement.prop('tagName').toUpperCase() === 'DIV' &&  thisElement.prop('contenteditable').toUpperCase() === 'TRUE') {
	            thisElement.data('floatlabel-isContentEditable', 'true');
            }

            placeholderText = thisElement.attr('placeholder');
            if (typeof(placeholderText) === 'undefined') {
                return;
            }
            elementID = thisElement.attr('id');
            if (!elementID) {
                elementID = Math.floor(Math.random() * 100) + 1;
                thisElement.attr('id', elementID);
            }
            floatingText = thisElement.data('label');
            extraClasses = thisElement.data('class');
            if (!extraClasses) {
                extraClasses = '';
            }
            if (!floatingText || floatingText === '') {
                floatingText = placeholderText;
            }
            

            if (thisElement.attr('class')) {
	            var element_classes_array = thisElement.attr('class').split(" ");
	            var wrapper_classes_array = [];
	            $.each(element_classes_array, function(i,e) {
		            if (
		            	   e == "hundred"
		            	|| e == "hundredtool"
		            	|| e == "right"
		            	|| e == "left"
		            	|| e == "fifty"
		            	|| e == "forty"
		            	|| e == "sixty"
		            	|| e == "clear"
		            	|| e == "clearfix"
		            	|| e == "fifty-important"
		            	|| e == "forty-important"
		            	|| e == "hundred-35"
		            	|| e == "hundred-50"
		            	|| e == "donate_amount_enter"
		            	|| e == "hundred-30"
		            	|| e == "hundred-200"
		            	|| e == "hundred-140"
		            ) {
			            thisElement.removeClass(e);
			            wrapper_classes_array.push(e);
		            }
	            });
	            
	            var wrapper_classes = wrapper_classes_array.join(" ");
            } else {
	            var wrapper_classes = '';
            }

            if (thisElement.data('floatlabel-isContentEditable') === 'true') {
	            thisElement.parents('.redactor-box').wrap('<div class="floatlabel-wrapper floatlabel-wrapper-redactor ' + wrapper_classes + '"></div>');
	            thisElement.parents('.floatlabel-wrapper').prepend('<label for="' + elementID + '" class="floatlabel-label floatlabel-label-inactive floatlabel-redactor' + settings.labelClass + ' ' + extraClasses + '" style="margin-top: ' + (thisElement.parents('.redactor-box').find('.redactor-toolbar').outerHeight() - 5) + 'px">' + floatingText + '</label>');
	            self.$label = thisElement.parents('.floatlabel-wrapper').children().first();
            } else {
	            thisElement.wrap('<div class="floatlabel-wrapper ' + wrapper_classes + '"></div>');
	            thisElement.before('<label for="' + elementID + '" class="floatlabel-label floatlabel-label-inactive' + settings.labelClass + ' ' + extraClasses + '">' + floatingText + '</label>');
	            self.$label = thisElement.prev('label');
            }
            
            
            thisElement.addClass('floatlabel-input');
            
            
            thisElement.on('keyup blur change', function(e) {
                self.checkValue(e);
            });
            thisElement.on('blur', function() {
                self.$label.removeClass('floatlabel-label-focus')
            });
            thisElement.on('focus', function() {
                self.$label.addClass('floatlabel-label-focus')
            });
            this.checkValue();
        },
        checkValue: function(e) {
            if (e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 9) {
                    return;
                }
            }
            var thisElement = this.$element,
                currentFlout = thisElement.data('flout');
            
            if (thisElement.data('floatlabel-isContentEditable') === 'true') {
	            if (thisElement.next().redactor('code.get') !== "") {
		            thisElement.data('flout', '1');
	            }
	            
	            if (thisElement.next().redactor('code.get') === "") {
	                thisElement.data('flout', '0');
	            }
            } else {
	            if (thisElement.val() !== "") {
	                thisElement.data('flout', '1');
	            }
	            
	            if (thisElement.val() === "") {
	                thisElement.data('flout', '0');
	            }
            }
            
            if (thisElement.data('flout') === '1' && currentFlout !== '1') {
                this.showLabel();
            }
            if (thisElement.data('flout') === '0' && currentFlout !== '0') {
                this.hideLabel();
            }
        },
        showLabel: function() {
            var self = this;
            self.$label.css({
                'display': 'block'
            });
            window.setTimeout(function() {
                self.$label.removeClass('floatlabel-label-inactive').addClass('floatlabel-label-active');
                if (self.settings.slideInput === true) {
                    self.$element.addClass('floatlabel-input-slide');
                }
            }, 50);
        },
        hideLabel: function() {
            var self = this;
            self.$label.removeClass('floatlabel-label-active').addClass('floatlabel-label-inactive');
            if (self.settings.slideInput === true) {
                self.$element.removeClass('floatlabel-input-slide');
            }
        }
    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
})(jQuery, window, document);