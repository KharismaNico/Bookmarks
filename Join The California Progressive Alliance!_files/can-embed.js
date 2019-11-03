//global translation variable
an_javascript_translation = {
	weekly: "Weekly",
	monthly: "Monthly",
	every_3_months: "Every 3 Months",
	yearly: "Yearly",
	securely_purchase_tickets: "Securely Purchase Tickets",
	securely_contribute_now: "Securely Contribute Now",
	securely_purchase: "Securely Purchase",
	ticket_for: "Ticket For",
	tickets_for: "Tickets For",
	now: "Now",
	securely_contribute: "Securely Contribute",
	enter_amt: "Enter Amt",
	other: "Other",
	this_event_is_sold_out: "This Event Is Sold Out",
	street_address: "Street Address",
	city: "City",
	oops_you_have: "Oops! You have",
	error: "error",
	errors: "errors",
	processing: "Processing",
	your_card_has_not_been_charged_please_try_again_or: "Your card has not been charged. Please try again or",
	contact_us: "contact us",
	if_it_keeps_happening: "if it keeps happening",
	there_was_an_error_contacting_our_payment_processor: "There was an error contacting our payment processor",
	please_ensure_you_are_not_blocking_our_javascript_and_try_again_or: "Please ensure you are not blocking our javascript and try again, or",
	an_error_has_occured_please_try_again: "An error has occured, please try again."
};

//$(document).ready(function() {
	
	var canEmbed = function($, widget_id) {
		if (typeof(an_tracking_code_pageload) !== 'undefined' && $("#" + widget_id).find('.js-letter-form').length) {
			an_tracking_code_submitted();
		} 
		//console.log('start');
			//console.log($($('#can-form-area-tesrting').selector));
/*
			$(document).bind('can_embed_loaded', function() {
   //eventName happened. React here.
   console.log('yes');
   // more...
});
*/			/*
window.can_event_object = function() {
				$.event.trigger('can_embed_loaded');
			}
			window.setInterval(function() {
				console.log('tick');
				$.event.trigger('can_embed_loaded');
			}, 500);
*/




			/*
$(document).trigger("can_embed_loaded");

			$('#' + widget_id).on('load', function() {
				console.log($(this));
				$(this).trigger( "can_embed_loaded", [ $(this) ] );
			});
*/

			//affirmative opt in required class/value manipulations
			$('#' + widget_id + ' .js-affirmative_optin_control_group .js-affirmative_optin_radio_no').each(function() {
				$(this).val('invalid').attr('name', $(this).data('name'));
			});
			
			//fix autocomplete in chrome
			//console.log(widget_id);
			if ($('.js-donate_form').parents('.chrome').length || $('.js-ticketed_event_form').parents('.chrome').length) {
				$('#' + widget_id + ' [autocomplete=off]').attr('autocomplete','really_off');
			}

		    if ($.isFunction($.fn.floatlabel) && ($("#" + widget_id).find('.v3').length || $("#" + widget_id).parents('html').find('.fundraising.v3'))) {
			    
			    // Float Labels
				if ($("#" + widget_id).find('input:focus, textarea:focus').length) {
					var $focused_input = $("#" + widget_id + ' input:focus,' + "#" + widget_id + ' textarea:focus');
				}
			    $("#" + widget_id).find('input[type=text], input[type=email], input[type=password], input[type=number], textarea').not('.select2-drop input, .select2-container input, .editable_button_text, .js-search, label + input, label + textarea, textarea.js-redactor, input.js-other_input, input.other_input, .js-no_floatlabel, #replyHiddenForm textarea, #recaptcha_response_field, .donation_info_split input, #donate_auto_modal input').floatlabel();
			    
			    $('label + input, label + textarea').each(function() {
				   if ($(this).prev().text() == '') {
					   $(this).floatlabel();
				   } 
			    });
			    
			    if ($focused_input) {
				    $focused_input.focus();
			    }
			    
			    $("#" + widget_id).on('focusin', 'input[type=text]:not(.select2-drop input, .select2-container input, .editable_button_text, .js-search, input.js-other_input, input.other_input, .js-no_floatlabel, #recaptcha_response_field, .donation_info_split input, #donate_auto_modal input), input[type=email]:not(.select2-drop input, .select2-container input, .editable_button_text, .js-search, .js-no_floatlabel, #donate_auto_modal input), input[type=password]:not(.select2-drop input, .select2-container input, .editable_button_text, .js-search, .js-no_floatlabel, #donate_auto_modal input), input[type=number]:not(.select2-drop input, .select2-container input, .editable_button_text, .js-search, .js-no_floatlabel, .donation_info_split input, #donate_auto_modal input), textarea:not(.redactor-box textarea, .js-no_floatlabel, #replyHiddenForm textarea)', function(e) {
				    if (!$(this).data.plugin_floatlabel && $(this).attr('placeholder') != '' && $(this).attr('placeholder') != undefined && 
				    		(!$(this).prev().length || 
				    			($(this).prev().length && $(this).prev().prop('tagName').toUpperCase() == "LABEL" && $(this).prev().text() == '') ||
				    			$(this).prev().prop('tagName').toUpperCase() != "LABEL")) 
				    {
					    $(this).floatlabel();
					    var $that = $(this);
					    if ($('.trident').length) {
						    setTimeout(function() {
						    	$that.focus();
							}, 10);
					    } else {
						    $that.focus();
					    }
					    //
				    }
			    });
			}
			
			var form_id;

			/* Add and remove classes based on div width */


			responsive_function = function() {
				//console.log('responsive');
				$(window).bind("resize", resizeEmbed);
				if (widget_id == 'donate_form' || widget_id == 'ticketed_event_form') {
					var section = $("#" + widget_id).parents('body').find(".can_embed > div");
					var parent_section = $("#" + widget_id).parents('body').find(".can_embed").parent();
				} else {
					var section = $("#" + widget_id + " .can_embed > div");
					var parent_section = $("#" + widget_id + " .can_embed").parent();
				}
				
/*
				if (typeof(temp_embed_width) !== 'undefined') {
					console.log(temp_embed_width);
				}
*/
				if (typeof(temp_embed_width) !== 'undefined' && temp_embed_width != false) {
					var width = temp_embed_width;
				} else {
					var width = parent_section.width();
				}

				//console.log(width);
				//console.log(parent_section);
				if (width > 400) {
					section.addClass("can_float");
				} else {
					section.removeClass("can_float");
				}
				if (width > 768) {
					//console.log($('#' + widget_id).find('#form_col1'));
					section.addClass("can_768");
					parent_section.find('.event_campaign #form_col1').after(section.find('#form_col3'));
				} else {
					section.removeClass("can_768");
				}
				function resizeEmbed( e ) {
					if (widget_id == 'donate_form' || widget_id == 'ticketed_event_form') {
						var section = $("#" + widget_id).parents('body').find(".can_embed > div");
					} else {
						var section = $("#" + widget_id + " .can_embed > div");
					}
					
					var width = section.width();
					if (width > 400) {
						section.addClass("can_float");
					} else {
						section.removeClass("can_float");
					}
				}
			}

			responsive_function();

			temp_embed_width = false;




			/* in-widget thank you page javascript */

			// show and hide embed stuff
		    $("#" + widget_id + " #embed_toggle-open").click(function() {
		        $("#" + widget_id + " #embed_options").slideDown(200);
		        $("#" + widget_id + " #embed_toggle-close").show();
		        $("#" + widget_id + " #embed_toggle-open").hide();
		    });
		    $("#" + widget_id + " #embed_toggle-close").click(function() {
		        $("#" + widget_id + " #embed_options").slideUp(200);
		        $("#" + widget_id + " #embed_toggle-open").show();
		        $("#" + widget_id + " #embed_toggle-close").hide();
		    });
		    if ($("#" + widget_id + ' .embed_custom').is(':checked')) {
		        $("#" + widget_id + ' .embed_custom_box').show();
		    } else {
		        $("#" + widget_id + ' .embed_custom_box').hide();
		    };
		    $("#" + widget_id + " .embedSize").click(function(){
		        var radio_value = $(this).val();
		        if (radio_value == "embed-custom") {
		            $("#" + widget_id + " .embed_custom_box").slideDown(200);
		        } else if(radio_value != "embed-custom") {
		            $("#" + widget_id + " .embed_custom_box").slideUp(200);
		        }
		    });

		    /* show country drop down */
		    if ($('#' + widget_id + ' .country_drop_wrap select').val() != 'US') {
			    $('#' + widget_id + ' #cc_state_drop_wrap, #' + widget_id +' .state_wrap').hide();
			    $('#' + widget_id + ' #cc_state_drop_wrap select, #' + widget_id +' .state_wrap select').removeClass('required');
		   		if ($('#' + widget_id + ' .international_link').parent().parent().hasClass('cc_li_half')) {
			   		$('#' + widget_id + ' .international_link').parent(".international_link-wrap").hide();
				} else {
					$('#' + widget_id + ' .international_link').parent(".international_link-wrap").hide();
				}
		        $('#' + widget_id + ' .international_link').parent().parent().find("#create-event-state-drop_down").toggle();
		        $('#' + widget_id + ' .international_link').parent().parent().find('.country_drop_wrap').toggle().css('display','block');
		        $('#' + widget_id + ' .international_link').parent().parent().find('.country_drop_wrap select').addClass('required');
		    }

		    $('#' + widget_id + ' .international_link').off('click');

		    $('#' + widget_id + ' .international_link').click(function() {
			    //console.log('click');
		        $('#' + widget_id + ' #cc_state_drop_wrap, #' + widget_id +' .state_wrap').hide();
		        $('#' + widget_id + ' #cc_state_drop_wrap select, #' + widget_id +' .state_wrap select').removeClass('required');
		   		if ($(this).parent().parent().hasClass('cc_li_half')) {
			   		$(this).parent(".international_link-wrap").slideToggle();
				} else {
					if ($(this).parents('.event_campaign').length) {
						$(this).parent(".international_link-wrap").hide();
					} else {
						$(this).parent(".international_link-wrap").slideToggle();
					}
				}
		        $(this).parent().parent().find("#create-event-state-drop_down").slideToggle();
		        $(this).parent().parent().find('.country_drop_wrap').slideToggle().css('display','block');
		        $(this).parent().parent().find('.country_drop_wrap select').addClass('required');
		    });

		    $('#' + widget_id + ' .country_drop_wrap select').on('change', function() {
			    if ($(this).val() == 'US' || $(this).val() == 'United States') {
				    $(this).removeClass('required');
				    $('#' + widget_id + ' .country_drop_wrap').hide();

				    $('#' + widget_id + ' #cc_state_drop_wrap select, #' + widget_id +' .state_wrap select').addClass('required');
				    $('#' + widget_id + ' #cc_state_drop_wrap, #' + widget_id +' .state_wrap').slideToggle();
				    $('#' + widget_id + " .international_link-wrap").slideToggle();
			    }
		    });

		    /* Animate the status bar */
		    //console.log($("#" + widget_id + " .action_status_status_bar-grow"));
		    $("#" + widget_id + " .action_status_status_bar-grow, .can_fundraising_widget_full .action_status_status_bar-grow, .js-ticketed_event_widget_full .action_status_status_bar-grow").delay(1000).animate({ width: "100%" }, 1500 );
		    if ($("#" + widget_id + " .v2").length) {
			    $("#" + widget_id + " .action_status_status_bar-grow, .can_fundraising_widget_full .action_status_status_bar-grow, .js-ticketed_event_widget_full .action_status_status_bar-grow").queue(function(next) {
			        $(this).animate({ top: "50" }, {easing: "linear",duration:1500} ).animate({ top: "0" }, 0 );
			        $(this).queue(arguments.callee);
			        next();
			    });
		    }
		    

		    /* Data Sharing */
		    $("#" + widget_id + " #edit_d_sharing_opts").click(function() {
			    $('body').height();
		        $("#" + widget_id + " #d_sharing_opts").slideDown(200, function() {
			        if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						//console.log($('body').height());
						var height_message = {
							"height" : $('body').height(),
							"src" : window.location.href
						}

						event_source.postMessage(JSON.stringify(height_message), event_origin);
					}
		        });
		        $("#" + widget_id + " #edit_d_sharing_opts-close").show().css("display", "inline-block");
		        $("#" + widget_id + " #edit_d_sharing_opts").hide();
		    });
		    $("#" + widget_id + " #edit_d_sharing_opts-close").click(function() {
		        $("#" + widget_id + " #d_sharing_opts").slideUp(200, function() {
			        if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						//console.log('height');
						var height_message = {
							"height" : $('body').height(),
							"src" : window.location.href
						}

						event_source.postMessage(JSON.stringify(height_message), event_origin);
					}
		        });
		        $("#" + widget_id + " #edit_d_sharing_opts").show();
		        $("#" + widget_id + " #edit_d_sharing_opts-close").hide();
		    });

			// add/remove radio button selected classes for donate and tip jar amounts
			var add_remove_donate_amount_selected = function($element) {
				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					$('.donate_amount input[type="radio"]').parent().removeClass('donate_amount-selected');
					if ($element.parent().hasClass('placeholder_fix_wrap')) {
						$element.parent().parent().addClass('donate_amount-selected');
					} else {
						$element.parent().addClass('donate_amount-selected');
					}
				} else {
					$('.donate_amount input[type="radio"]').parent().removeClass('donate_amount-selected');
					$element.parent().addClass('donate_amount-selected');
				}
			}

			var add_remove_tip_label_selected = function($element) {
				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					$('.tip_label input[type="radio"]').parent().removeClass('tip_label-selected');
					if ($element.parent().hasClass('placeholder_fix_wrap')) {
						$element.parent().parent().addClass('tip_label-selected');
					} else {
						$element.parent().addClass('tip_label-selected');
					}
				} else {
					$('.tip_label input[type="radio"]').parent().removeClass('tip_label-selected');
					$element.parent().addClass('tip_label-selected');
				}
			}

			// split amounts function
			var split_amount_function = function($element) {
				//console.log($element.val());
				if ($element.val() == 'other') {
					if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {

						if (!isNaN($element.siblings().children().val()) && $element.siblings().children().val() != '') {
							var split_amount = $('.donate_amount .other_input').val() / $('.donation_info_split').length;
							if (split_amount % 1 === 0) {
								$('.donation_info_split input').val(split_amount);
							} else {
								$('.donation_info_split input').val(split_amount.toFixed(2));
							}

						} else if ($element.siblings().children().val() == '') {
							$('.donation_info_split input').val('');
						}
					} else {
						if (!isNaN($element.siblings('.other_input').val()) && $element.siblings('.other_input').val() != '') {
							var split_amount = $('.donate_amount .other_input').val() / $('.donation_info_split').length;
							if (split_amount % 1 === 0) {
								$('.donation_info_split input').val(split_amount);
							} else {
								$('.donation_info_split input').val(split_amount.toFixed(2));
							}

						} else if ($element.siblings('.other_input').val() == '') {
							$('.donation_info_split input').val('');
						}
					}
				} else {
					var split_amount = parseInt($element.val()) / $('.donation_info_split').length;
					if (split_amount % 1 === 0) {
						$('.donation_info_split input').val(split_amount);
					} else {
						$('.donation_info_split input').val(split_amount.toFixed(2));
					}
				}
			}

			// add required classes
			var add_required_class_donate_amount = function($element) {
				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					if ($element.siblings().length && $element.is(':checked') && $element.hasClass('required')) {
						$element.siblings().children().addClass('required');
					} else {
						$element.parent().siblings().children().children().removeClass('required error_input');
					}
				} else {
					if ($element.siblings('.other_input').length && $element.is(':checked') && $element.hasClass('required')) {
						//console.log('if')
						$element.siblings('.other_input').addClass('required');
					} else {
						//console.log('else')
						$element.parent().siblings('.other_label').children('.other_input').removeClass('required error_input');
					}
				}
			}

			var add_required_class_tip = function($element) {
				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					if ($element.siblings().length && $element.is(':checked')) {
						$element.siblings().children().addClass('required');
					} else {
						$element.parent().siblings().children().children().removeClass('required error_input');
					}
				} else {
					if ($element.siblings('.other_input').length && $element.is(':checked')) {
						$element.siblings('.other_input').addClass('required');
					} else {
						$element.parent().siblings('.other_label').children('.other_input').removeClass('required error_input');
					}
				}
			}


			// calculate submit button total
			var calculate_total = function() {
				//console.log('start');
				var total_donation = 0;
				var total_count = 0;

				// if we're splitting, add up split boxes
				if ($('.donation_info_split').length) {
					$('.donation_info_split input').each(function(i,e) {
						if (!isNaN($(e).val()) && $(e).val() != '') {
							total_donation = total_donation + parseFloat($(e).val());
						}
					});
				}  else if ($('.js-ticket_option').length) {
					if ($('.js-currency').val() == 'usd') {
						var currency_prefix = '$';
					} else {
						var currency_prefix = $('.js-currency').val().toUpperCase() + ' ';
					}
					if (!isNaN($('.js-ticketed_event_subtotal').html().replace(currency_prefix,''))) {
						total_donation = total_donation + parseFloat($('.js-ticketed_event_subtotal').html().replace(currency_prefix,''));
					}
				} else {
					// otherwise, add up radios (and other amounts if the user has checked that
					//console.log($('.donate_amount input[type="radio"]:checked').val());
					//console.log($('.donate_amount input[type="radio"]:checked').siblings('.other_input').val());

					if ($('.donate_amount.donate_amount-selected input[type="radio"]').val() == 'other') {
						if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
							console.log($('.donate_amount.donate_amount-selected input.other_input').val());
							if (!isNaN($('.donate_amount.donate_amount-selected input.other_input').val()) && $('.donate_amount.donate_amount-selected input.other_input').val() != '') {
								total_donation = total_donation + parseFloat($('.donate_amount.donate_amount-selected input.other_input').val());
							}
						} else {
							if (!isNaN($('.donate_amount input[type="radio"]:checked').siblings('.other_input').val()) && $('.donate_amount input[type="radio"]:checked').siblings('.other_input').val() != '') {
								total_donation = total_donation + parseFloat($('.donate_amount input[type="radio"]:checked').siblings('.other_input').val());
							}
						}
					} else {
						if ($('.donate_amount input[type="radio"]:checked').length) {
							total_donation = total_donation + parseFloat($('.donate_amount input[type="radio"]:checked').val());
						}
					}
				}

				// add in tip
				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					//console.log($('.tip_label.tip_label-selected input[type="radio"]').val());
					if ($('.tip_label.tip_label-selected input[type="radio"]').val() == 'other') {
						if (!isNaN($('.tip_label.tip_label-selected input[type="radio"]').siblings().children().val()) && $('.tip_label.tip_label-selected input[type="radio"]').siblings().children().val() != '') {
							total_donation = total_donation + parseFloat($('.tip_label.tip_label-selected input[type="radio"]').siblings().children().val());
						}
					} else {
						if ($('.tip_label input[type="radio"]:checked').val() == '10') {
							total_donation = total_donation + (total_donation * 0.1);
						} else if ($('.tip_label input[type="radio"]:checked').val() == '20') {
							total_donation = total_donation + (total_donation * 0.2);
						}
					}
				} else {
					if ($('.tip_label input[type="radio"]:checked').val() == 'other') {
						if (!isNaN($('.tip_label input[type="radio"]:checked').siblings('.other_input').val()) && $('.tip_label input[type="radio"]:checked').siblings('.other_input').val() != '') {
							total_donation = total_donation + parseFloat($('.tip_label input[type="radio"]:checked').siblings('.other_input').val());
						}
					} else {
						if ($('.tip_label input[type="radio"]:checked').val() == '10') {
							total_donation = total_donation + (total_donation * 0.1);
						} else if ($('.tip_label input[type="radio"]:checked').val() == '20') {
							total_donation = total_donation + (total_donation * 0.2);
						}
					}
				}

				// round out numbers and add recurring period to contribute button
				if (total_donation == 0) {
					var amount_rounded = '';
				} else if (total_donation % 1 === 0) {
					var amount_rounded = total_donation;
				} else {
					var amount_rounded = total_donation.toFixed(2);
				}

				if ($('.donate_amount_recurring').attr('checked') || $('input[type="hidden"][name="donation[recurring]"]').val() == 'true') {
					if ($('input[type="hidden"][name="donation[recurring_period]"]').val() == "recurring_weekly") {
						var recurring_period = ' ' + an_javascript_translation.weekly;
					} else if ($('input[type="hidden"][name="donation[recurring_period]"]').val() == "recurring_monthly") {
						var recurring_period = ' ' + an_javascript_translation.monthly;
					} else if ($('input[type="hidden"][name="donation[recurring_period]"]').val() == "recurring_three") {
						var recurring_period = ' ' + an_javascript_translation.every_3_months;
					} else if ($('input[type="hidden"][name="donation[recurring_period]"]').val() == "recurring_yearly") {
						var recurring_period = ' ' + an_javascript_translation.yearly;
					} else {
						var recurring_period = ' ' + $('#donate_recurring_period option:selected').html();
					}
				} else {
					var recurring_period = '';
				}
				
				if ($('.js-ticket_option').length) {
				
					$('.js-ticket_option').each(function() {
						//console.log($(this).find('.js-ticketed_event_ticket_number').val());
						if (isInt($(this).find('.js-ticketed_event_ticket_number').val()) && $(this).find('.js-ticketed_event_ticket_number').val() != '' && $(this).find('.js-ticketed_event_ticket_number').val() > 0) {
							//console.log('true');
							total_count = total_count + parseInt($(this).find('.js-ticketed_event_ticket_number').val());
							//console.log(total_donation);
						}
					});
				}

				if (total_donation == 0 || (total_count == 0 && $('.js-ticket_option').length)) {
					if ($('.js-ticket_option').length) {
						$('.js-ticketed_event_form_button').val(an_javascript_translation.securely_purchase_tickets);
						$('input[name="ticket_receipt[total_amount]"]').val(amount_rounded);
					} else {
						$('#donate_form_button').val(an_javascript_translation.securely_contribute_now);
						$('input[name="donation[total_amount]"]').val(amount_rounded);
					}
				} else {
					
					if ($('.js-currency').val() == 'usd') {
						var currency_prefix = '$';
					} else {
						var currency_prefix = $('.js-currency').val().toUpperCase() + ' ';
					}
					
					if ($('.js-ticket_option').length) {
						if (total_count == 1) {
							$('.js-ticketed_event_form_button').val(an_javascript_translation.securely_purchase + ' ' + total_count + ' ' + an_javascript_translation.ticket_for + ' ' + currency_prefix + amount_rounded + ' ' + an_javascript_translation.now);
						} else {
							$('.js-ticketed_event_form_button').val(an_javascript_translation.securely_purchase + ' ' + total_count + ' ' + an_javascript_translation.tickets_for + ' ' + currency_prefix + amount_rounded + ' ' + an_javascript_translation.now);
						}
						$('input[name="ticket_receipt[total_amount]"]').val(total_donation);
					} else {
						$('#donate_form_button').val(an_javascript_translation.securely_contribute + ' ' + currency_prefix + amount_rounded + recurring_period + ' ' + an_javascript_translation.now);
						$('input[name="donation[total_amount]"]').val(total_donation);
					}
					//console.log();
					
				}
			}
			
			function isInt(n) {
			   return n % 1 === 0;
			}
			
			// calculate ticketed events subtotal
			var calculate_subtotal = function() {
				var total_donation = 0;
				
				if ($('.js-currency').val() == 'usd') {
					var currency_prefix = '$';
				} else {
					var currency_prefix = $('.js-currency').val().toUpperCase() + ' ';
				}
				
				$('.js-ticket_option').each(function() {
					//console.log($(this).find('.js-ticketed_event_ticket_number').val());
					if (isInt($(this).find('.js-ticketed_event_ticket_number').val()) && $(this).find('.js-ticketed_event_ticket_number').val() != '' && $(this).find('.js-ticketed_event_ticket_number').val() > 0) {
						//console.log('true');
						total_donation = total_donation + parseInt($(this).find('.js-ticketed_event_ticket_number').val()) * parseFloat($(this).find('.js-ticketed_event_ticket_amount').html().replace(currency_prefix,'').replace(',',''));
						//console.log(total_donation);
					}
				});		
				
				// round out numbers
				if (total_donation == 0) {
					var amount_rounded = '0.00';
				} else {
					var amount_rounded = total_donation.toFixed(2);
				}
				
				
				
				$('.js-ticketed_event_subtotal').html(currency_prefix + amount_rounded);
			}


		    //fundraising errors for grouped inputs
		    var donation_split_errors = function() {
		        var input_full_flag = false;
		        $('.donation_info_split input').each(function(i) {
		        	if ($(this).val() != '' && !isNaN($(this).val()) && $(this).val() != 0) {
		        		input_full_flag = true;
		        	}
		        });

		        if (!input_full_flag) {
		    		//console.log($(this));
		        	$('.donation_info_split input').addClass('error_input');
		    	} else {
		        	$('.donation_info_split input').removeClass('error_input');
		    	}
		    }


		    // do url argument stuff
		    var url_parameter_amount = getURLParameter('amount');
		    var url_parameter_recurring = getURLParameter('recurring');
		    var url_parameter_recurring_period = getURLParameter('period');

		    if (url_parameter_amount && !isNaN(url_parameter_amount) && url_parameter_amount > 0) {
		    	var radio_check_flag = false;
			    $('.donate_amount input[type="radio"]').each(function(i) {
					if ($(this).val() == url_parameter_amount) {
						$(this).attr('checked','checked');
						radio_check_flag = true;
					}
			    });

			    if (radio_check_flag == false && $('.donate_amount.other_label').length) {
				    $('.donate_amount.other_label input[type="radio"]').attr('checked','checked');
				    $('.donate_amount .other_input').val(url_parameter_amount);
				    radio_check_flag = true;
			    }
		    }

		    if (url_parameter_recurring == 'true') {
			    $('.donate_amount_recurring').attr('checked','checked');
		    }

		    if (url_parameter_recurring_period) {
			    $('#donate_recurring_period').val(url_parameter_recurring_period).trigger('update');
		    }

		    var cc_info_validation = function($this) {
		    	//$('.required_noname').each(function(i) {
			    	if ($this.val() == '' || isNaN($this.val())) {
			    		//console.log('true');
				    	$this.addClass('error_input_cc');
				    	if ($this.siblings('span.can_select').length) {
							$this.siblings('span.can_select').addClass('error_input_cc');
							$this.parent().addClass('error_input-select_wrap');
						}
			    	} else {
			    		//console.log('false');
				    	$this.removeClass('error_input_cc');
				    		if ($this.siblings('span.can_select').length) {
		    					$this.siblings('span.can_select').removeClass('error_input_cc');
 		    					$this.parent().removeClass('error_input-select_wrap');
 							}
			    	}

			    	cc_info_error_number = $('input.required_noname.error_input_cc, select.required_noname.error_input_cc').length;
		    	//});
		    }

		    cc_info_error_number = 0;


			// do fundraising stuff
			$('.donate_amount input[type="radio"]').each(function(i) {
				if ($(this).is(':checked')) {

					add_remove_donate_amount_selected($(this));

					split_amount_function($(this));

				}

				calculate_total();
			});

			$('.donate_amount input[type="radio"]').click(function() {
				if ($(this).is(':checked')) {
					//console.log('checked');

					add_remove_donate_amount_selected($(this));

					split_amount_function($(this));
				}

				add_required_class_donate_amount($(this));

				calculate_total();

				donation_split_errors();
			});

			$('.donate_amount .other_input').on('focusin', function() {
				//console.log('fire');

				//this won't work when users tab in, not sure why, can't get the below code to work
				//kludge, but checked doesn't seem to fire before this goes, so it screws up validation
				/*
		setTimeout(function() {
					console.log(!$(this).siblings('input[type="radio"]').is(':checked'));
					//if (!$(this).siblings('input[type="radio"]').is(':checked')) {
						$(this).siblings('input[type="radio"]').attr('checked', 'checked');
					//}
				}, 5000);
		*/

				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					if (!$(this).siblings().is(':checked')) {
						$(this).siblings().attr('checked', 'checked');

					}
				} else {
					if (!$(this).siblings('input[type="radio"]').is(':checked')) {
						$(this).siblings('input[type="radio"]').attr('checked', 'checked');
					}
				}
				$(this).parents(".check_radio_field").children('label').removeClass("error_checkbox");

				add_remove_donate_amount_selected($(this));

				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					split_amount_function($('.donate_amount.other_label input[value="other"]'));

					if ($(this).parent().siblings().hasClass('required')) {
						$(this).addClass('required');
					}
				} else {
					split_amount_function($(this).siblings('input[type="radio"]'));

					if ($(this).siblings('input[type="radio"]').hasClass('required')) {
						$(this).addClass('required');
					}
				}

				calculate_total();

				$(this).attr('placeholder', an_javascript_translation.enter_amt);

				//console.log($(this).siblings('input[type="radio"]').is(':checked'));
			});

			$('.donate_amount .other_input').on('focusout', function() {
				if ($('.js-currency').val() == 'usd') {
					var currency_prefix = '$';
				} else {
					var currency_prefix = $('.js-currency').val().toUpperCase() + ' ';
				}
				$(this).attr('placeholder', currency_prefix + ' ' + an_javascript_translation.other);
			});
			
			if ($('.js-ticketed_event_subtotal').length) {
				calculate_subtotal();
				calculate_total();
			}
			
			$('.js-ticketed_event_ticket_number').on('change keyup', function() {
				if ($(this).val() == 0) {
					$(this).val("");
				}
				calculate_subtotal();
				calculate_total();
			});


			$('.tip_label input[type="radio"]').each(function(i) {
				if ($(this).is(':checked')) {
					add_remove_tip_label_selected($(this));
				}

				calculate_total();
			});

			$('.tip_label input[type="radio"]').click(function() {

				if ($(this).is(':checked')) {
					add_remove_tip_label_selected($(this));
				}

				add_required_class_tip($(this));

				calculate_total();
			});

			$('.tip_label .other_input').on('focusin', function() {

				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					$(this).siblings().attr('checked','checked');
				} else {
					$(this).siblings('input[type="radio"]').attr('checked','checked');
				}

				add_remove_tip_label_selected($(this));

				// add required field to other amount option if selected
				$(this).addClass('required');

				calculate_total();

				$(this).attr('placeholder', an_javascript_translation.enter_amt);
			});

			$('.tip_label .other_input').on('focusout', function() {
				if ($('.js-currency').val() == 'usd') {
					var currency_prefix = '$';
				} else {
					var currency_prefix = $('.js-currency').val().toUpperCase() + ' ';
				}
				$(this).attr('placeholder', currency_prefix + ' ' + an_javascript_translation.other);
			});


			// add required field to other amount option if selected
			$('.other_label .other_input').each(function(i) {
				if (isNaN($(this).val())) {
		/*
					$(this).val(
						function(index,value){
							return value.substr(0,value.length-1);
						}
					);
		*/
					$(this).val('');
				}
				if ($(this).siblings().is(':checked')) {
					$(this).addClass('required');
				}

				calculate_total();
			});

			$('.tip_label.other_label .other_input').each(function(i) {
				if (isNaN($(this).val())) {
		/*
					$(this).val(
						function(index,value){
							return value.substr(0,value.length-1);
						}
					);
		*/
					$(this).val('');
				}
				if ($(this).siblings().is(':checked')) {
					$(this).addClass('required');
				}

				calculate_total();
			});

			$('.donate_amount_recurring').click(function() {
				calculate_total();
			});

			$('#donate_recurring_period').change(function() {
				calculate_total();
			});
			
/*
			$('.donate_amount .other_input').on('change', function() {
				console.log($(this).val());
				if (isNaN($(this).val())) {
					$(this).val('');
				}
			});
*/

			//split amounts
			$('.donate_amount .other_input').on('keyup change', function() {
				//console.log($(this).val());
				if (isNaN($(this).val())) {
/*
					$(this).val(
						function(index,value){
							return value.substr(0,value.length-1);
						}
					);
*/
					$(this).val('');
				}

				if ($('body.ie_9').length || $('body.ie_7').length || $('body.ie_8').length) {
					split_amount_function($('.donate_amount.other_label input[value="other"]'));
				} else {
					split_amount_function($(this).siblings('input[type="radio"]'));
				}

				calculate_total();

				donation_split_errors();
			});
			
			$('.donation_info_split input').on('keyup', function() {
		
		
				calculate_total();
		
		
			});

			//update totals on split boxes
			$('.donation_info_split input.other_input, .tip_label_other input.other_input, .donation_info_split input.required_group').on('keyup change', function() {

				if (isNaN($(this).val()) || $(this).val() == 0) {
/*
					$(this).val(
						function(index,value){
							return value.substr(0,value.length-1);
						}
					);
*/
					$(this).val('');
				}

				calculate_total();
			});

			// update errors in keyup
		    $('.donation_info_split input').on('keyup', function() {
				donation_split_errors();
			});


			$('input.required_noname').on('keyup', function() {
				cc_info_validation($(this));
			});

			$('select.required_noname').on('change', function() {
				cc_info_validation($(this));
			});
			
			if ($('.js-ticketed_event_form_button').length) {
			    if (!$('.js-ticketed_event_ticket_number').length) {
				    $('.js-ticketed_event_form_button').attr('disabled',true).addClass('disabled').val(an_javascript_translation.this_event_is_sold_out);
			    }
			}
			
			//this might be bugged for fundraising/ticketed event forms, since the widget ID is the form element
			$("#" + widget_id + ' form').submit(function() {
			    if ( $('#' + widget_id + ' .country_drop_wrap select').val() == 'US' || $('#' + widget_id + ' .country_drop_wrap select').val() == 'United States') {
				    $(this).removeClass('required');
				    $('#' + widget_id + ' .country_drop_wrap').hide();

				    $('#' + widget_id + ' #cc_state_drop_wrap select, #' + widget_id +' .state_wrap select').addClass('required');
				    //console.log($('#' + widget_id + ' #cc_state_drop_wrap select, #' + widget_id +' .state_wrap select'));
				    $('#' + widget_id + ' #cc_state_drop_wrap, #' + widget_id +' .state_wrap').show();
				    $('#' + widget_id + " .international_link-wrap").show();
			    }

	        	if (!$("#" + widget_id + ' .create_donate_form').length) {
		        	donation_split_errors();
	        	}

	        });


			var checkboxErrorFlag = false;

			var checkbox_error_function = function() {
				$('.can_embed form, #ty_signup').submit(function (e) {
			            //console.log($(this));
			            //console.log((/cancel/).test($('#petition-save_draft').attr('class')));
		            if ($(this).find('.checkbox_group_wrap .required_checkboxes').length && !$('.form_create').length) {
		            	//console.log($(this).find('.checkbox_group_wrap .required_checkboxes'));
			            $(this).find('.checkbox_group_wrap .required_checkboxes').parent().parent().parent().each(function() {
			            	//console.log(this);
				            if ($(this).children('span').children('label').children('.required_checkboxes:checked').length == 0) {
				                checkboxErrorFlag = true;
				                return false;
				            } else {
				            	$(this).children('span').children('label').children('.required_checkboxes').each(function() {
					            	$(this).removeClass('error_input');
									$(this).parent().removeClass('error_checkbox');
								});

				                checkboxErrorFlag = false;
				                //console.log(checkboxErrorFlag);

				            }
			            });

			            //return false;
		            } else {
			            checkboxErrorFlag = false;
		            }

		            $('input.required_noname, select.required_noname').each(function(i) {
						cc_info_validation($(this));
					});



					//console.log(checkboxErrorFlag);
			    });
			}

			checkbox_error_function();

			$("#" + widget_id + ' .required_checkboxes').change(function () {
		    	$("#" + widget_id + ' .checkbox_group_wrap').each(function() {
		    		if ($(this).find('.required_checkboxes').length) {
		    			//console.log(this);
			    		if ($(this).children('span').children('label').children('.required_checkboxes:checked').length > 0) {
							//console.log('true2');
				        	$(this).children('span').children('label').children('.required_checkboxes').each(function() {
				        		//console.log(this);
				            	$(this).removeClass('error_input');
								$(this).parent().removeClass('error_checkbox');
							});

				            checkboxErrorFlag = false;
				            $('#' + form_id).valid();
				        } else {
							//console.log('false2');
							checkboxErrorFlag = true;
							$('#' + form_id).valid();
				        }
		    		}

				});
		    });

		    $("#" + widget_id + ' .required:radio').change(function () {
		    	if ($(this).attr('checked')) {
			    	$(this).parents(".check_radio_field").children('label').removeClass("error_checkbox");
		    	}
		    });

		    

		    // Data Sharing
		    $("#" + widget_id + " #edit_d_sharing_opts").click(function() {
		        $("#" + widget_id + " #d_sharing_opts").slideDown(200);
		        $("#" + widget_id + " #edit_d_sharing_opts-close").show().css("display", "inline-block");
		        $("#" + widget_id + " #edit_d_sharing_opts").hide();
		    });
		    $("#" + widget_id + " #edit_d_sharing_opts-close").click(function() {
		        $("#" + widget_id + " #d_sharing_opts").slideUp(200);
		        $("#" + widget_id + " #edit_d_sharing_opts").show();
		        $("#" + widget_id + " #edit_d_sharing_opts-close").hide();
		    });

		    //store the submit button that's clicked
		    $("#" + widget_id + ' input[type=submit]').click(function() {
		       submitClicked = $(this).attr('id');
		    });
		    
		    /* url argument for subscription defaults */
		    var url_parameter_subscription_group = getURLParameter('subscription_group');
		    var url_parameter_subscription_user = getURLParameter('subscription_user');
		    var url_parameter_subscription_referrer = getURLParameter('subscription_referrer');
		    
		    //console.log(url_parameter_subscription_user);
		    
		    //console.log(url_parameter_subscription_group);
		    
		    if (url_parameter_subscription_group === 'false') {
			    $("#" + widget_id + " input[name='subscription[group]']").attr('checked', false);
		    }
		    
		    if (url_parameter_subscription_user === 'false') {
			    $("#" + widget_id + " input[name='subscription[user]']").attr('checked', false);
		    }
		    
		    if (url_parameter_subscription_referrer === 'false') {
			    $("#" + widget_id + " input[name='subscription[referrer]']").attr('checked', false);
			    $("#" + widget_id + " input[name='subscription[group_referrer]']").attr('checked', false);
		    }
		    
		    /* prefill inputs based on URL params */
		    
		    var urlParams;
			(window.onpopstate = function () {
			    var match,
			        pl     = /\+/g,  // Regex for replacing addition symbol with a space
			        search = /([^&=]+)=?([^&]*)/g,
			        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
			        query  = window.location.search.substring(1);
			
			    urlParams = {};
			    while (match = search.exec(query))
			       urlParams[decode(match[1])] = decode(match[2]);
			})();
			
			$.each(urlParams, function(key, value) {
				if ($('#' + widget_id + ' input[name="' + key + '"]').length) {
					if ($('#' + widget_id + ' input[name="' + key + '"]').attr('type') == 'radio' || $('#' + widget_id + ' input[name="' + key + '"]').attr('type') == 'checkbox') {
						$('#' + widget_id + ' input[name="' + key + '"]').each(function() {
							if ($(this).val() == value) {
								$(this).prop("checked", true);
							}
						});
					} else {
						$('#' + widget_id + ' input[name="' + key + '"]').val(value).trigger('change');
					}
				} else if ($('#' + widget_id + ' textarea[name="' + key + '"]').length) {
					$('#' + widget_id + ' textarea[name="' + key + '"]').val(value).trigger('change');
				} else if ($('#' + widget_id + ' select[name="' + key + '"]').length) {
					$('#' + widget_id + ' select[name="' + key + '"] option').each(function(i, e) {
						if ($(e).attr('value') == value) {
							$(e).attr('selected',true);
						} else {
							$(e).attr('selected',false);
						}
					});
					
					$('#' + widget_id + ' select[name="' + key + '"]').next().find('.can_selectInner').html($('#' + widget_id + ' select[name="' + key + '"] option:selected').html());
				}
			});
			
			/* better select inputs */
		    if ($.isFunction($.fn.customSelect) &&  $.isFunction($.fn.select2)) {
			    if ($('.can_embed-html').length) {
				    $("select.can_select").not("select.can_select.js-form_select2").each(function() {
						if (!$(this).hasClass('hasCustomSelect')) {
							$(this).customSelect({customClass:"can_select"});
						}
					});
					
					$("select.js-form_select2").each(function() {
						if (!$(this).hasClass('select2-offscreen')) {
							$(this).select2({
								dropdownCssClass: "can_embed_select2", 
								allowClear: true,
								matcher: function (term, text, option) {		
									if (term.length == 0) return true;
									
									if(term.split(" ").length == 1){
									      return text.toUpperCase().indexOf(term.toUpperCase())!=-1;
									}
									
									keywords=(term).split(/ |,|\[|\]|\(|\)/);
									// `data.text` is the text that is displayed for the data object
									// check if data.text contains all of keywords, if some is missing, return null
									for (var i = 0; i < keywords.length; i++) {
									
									    if (((text).toUpperCase()).indexOf((keywords[i]).toUpperCase()) == -1) 
									      // Return `null` if the term should not be displayed
									      return null;
									
									}
									// If here, data.text contains all keywords, so return it.
									return text;
								} 
							});
						}
					});
			    } else {
				    $('#' + widget_id).find('select.can_select').not("select.can_select.js-form_select2").each(function() {
						if (!$(this).hasClass('hasCustomSelect')) {
							$(this).customSelect({customClass:"can_select"});
						}
					});
					
					$('#' + widget_id).find("select.js-form_select2").each(function() {
						if (!$(this).hasClass('select2-offscreen')) {
							$(this).select2({
								dropdownCssClass: "can_embed_select2", 
								allowClear: true,
								matcher: function (term, text, option) {		
									if (term.length == 0) return true;
									
									if(term.split(" ").length == 1){
									      return text.toUpperCase().indexOf(term.toUpperCase())!=-1;
									}
									
									keywords=(term).split(/ |,|\[|\]|\(|\)/);
									// `data.text` is the text that is displayed for the data object
									// check if data.text contains all of keywords, if some is missing, return null
									for (var i = 0; i < keywords.length; i++) {
									
									    if (((text).toUpperCase()).indexOf((keywords[i]).toUpperCase()) == -1) 
									      // Return `null` if the term should not be displayed
									      return null;
									
									}
									// If here, data.text contains all keywords, so return it.
									return text;
								} 
							});
						}
					});
			    }
			    
			    $(document).on('click', function() {
			    	var close_flag = false;
			    	$('.select2-drop-active').each(function() {
				    	if ($(this).css('display') == 'block') {
					    	close_flag = true;
				    	}
			    	});
			    	
			    	if (close_flag) {
				    	$('.js-form_select2').each(function() {
					    	$(this).select2('close');
					    });
			    	}
			    });
		    }

			// select validation
		    $("#" + widget_id + " select").change(function() {
		    	//console.log(form_id);
		        if (typeof(form_id) !== 'undefined') {
		            if ($(this).val() == "") {
		                $(this).parent().addClass('error_input-select_wrap');
		            } else {
		                $(this).parent().removeClass('error_input-select_wrap');
		            }

		            $('#' + form_id).valid();
		        }
		    });

		    //pass parameters to hidden inputs

/*
		    function getURLParameter(name) {
			    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
			}
*/
			//working with hashbangs?
			function getURLParameter(name) {
				var sURL = window.location.href;
				//console.log(sURL);

				if (sURL.indexOf(name + '=') != -1) {
					if (sURL.indexOf('#') != -1) {
						var sHash = window.location.hash,
						result;
					} else {
						var sHash = window.location.search,
						result;
					}

			        //console.log(sHash);

				    sHash.substring(sHash.indexOf('?') + 1).split('&').forEach(function(el) {
				        var kv = el.split('=');
				        //console.log(kv);
				        if (kv[0] == name) {
					        result = decodeURIComponent(kv[1]);
				        }
				    });

				    return result;
				}
			};

			if (widget_id == 'donate_form' || widget_id == 'ticketed_event_form') {
				target_widget_id = 'can_embed_form';
			} else {
				target_widget_id = widget_id;
			}

		    // if source is present on parent url, overwrite widget source
		    //console.log(getURLParameter('source'));
		    if (getURLParameter('source') != null) {
		    	if ($('#' + target_widget_id + ' .event_campaign_embed').length) {
			    	if ($('#' + target_widget_id + ' input[name=source]').length) {
				    	$('#' + target_widget_id + ' input[name=source]').val(getURLParameter('source'));
			    	} else {
				    	$('#' + target_widget_id + ' form').append('<input id="source" name="source" type="hidden" value="' + getURLParameter('source') + '">');
			    	}
		    	} else {
				    if ($('#' + target_widget_id + ' #subscription_source').length) {
				    	$('#' + target_widget_id + ' #subscription_source').val(getURLParameter('source'));
			    	} else {
				    	$('#' + target_widget_id + ' form').append('<input id="subscription_source" name="subscription[source]" type="hidden" value="' + getURLParameter('source') + '">');
			    	}
			    }
		    }

			//console.log(target_widget_id);
			if (getURLParameter('redirect') != null) {
					if ($('#' + target_widget_id + ' input[name=redirect]').length) {
						$('#' + target_widget_id + ' input[name=redirect]').val(getURLParameter('redirect'));
					} else {
						$('#' + target_widget_id + ' form').append('<input id="redirect" name="redirect" type="hidden" value="' + getURLParameter('redirect') + '">');
					}
			}

		    // add email referrer parameter
		    if (getURLParameter('email_referrer') != null && getURLParameter('email_referrer') != 'undefined') {
		    	$('#' + target_widget_id + ' form').append('<input id="email_referrer" name="email_referrer" type="hidden" value="' + getURLParameter('email_referrer') + '">');
		    }

		    $('#' + target_widget_id + ' #letter-form .phone').on('keyup', function() {
				if ((/\D/g).test($(this).val())) {
					$(this).val($(this).val().replace(/\D/g,''));
				}
			});

			$('#captcha_reload').click(function() {
				$('#captcha').val('[reload]');
				$('#letter_submit').trigger('click');
			});
			
			/* recaptcha image checkbox selection */
    
		    $('.js-recaptcha_checkbox').on('click', function() {
			    var selected_array = [];
			    
			    if ($(this).hasClass('js-recaptcha_checkbox_selected')) {
				    $(this).removeClass('recaptcha_checkbox_selected js-recaptcha_checkbox_selected')
			    } else {
				    $(this).addClass('recaptcha_checkbox_selected js-recaptcha_checkbox_selected')
			    }
			    
			    $('.js-recaptcha_checkbox_selected').each(function() {
				    selected_array.push($(this).data('value'));
			    });
			    
			    $('.js-recaptcha_response').val(selected_array.join(','));
			    
		    });
		    
		    //affirmative opt in required class/value manipulations
			if ($('#' + target_widget_id + ' .js-affirmative_optin_control_group').length) {
				$('#' + target_widget_id + ' .js-affirmative_optin_control_group .js-affirmative_optin_radio').addClass('required');
				$('#' + target_widget_id + ' .js-affirmative_optin_control_group .js-affirmative_optin_radio_no').val('invalid');
			}
			
			//affirmative opt in required class/value manipulations
			var affirmative_opt_in_submit = function() {
				if ($("#" + widget_id + ' .js-affirmative_optin_control_group').length) {
					$("#" + widget_id + ' .js-affirmative_optin_control_group .js-affirmative_optin_radio_no').each(function() {
						$(this).val('').data('name',$(this).attr('name')).attr('name','');
					});
				}
			}
			
		    /* form get_height */

			if ($('#donate_form, .js-ticketed_event_form').length) {
				var stripe_tokenize = function(stripe_response, form, donation_submit_val, $donate_submit_button) {
					Stripe.card.createToken(stripe_response, stripeResponseHandler);
					
					function stripeResponseHandler(status, response) {
					
					  if (response.error) { // Problem!
					
					    // Show the errors on the form
					    $.noty.closeAll();
						noty({
			
							text: response.error.message + '<br/>' + an_javascript_translation.your_card_has_not_been_charged_please_try_again_or + ' <a href="/contact" target="_blank">' + an_javascript_translation.contact_us + '</a> ' + an_javascript_translation.if_it_keeps_happening + '.',
			
							type: 'error', // alert - success - error - warning - information - confirmation
			
							closeWith: ['button']
			
						});
						
						
			
						// early error handling
			/*
						if ((/Invalid credit card number/).test(data.error_description)) {
							$('#form-card_number').addClass('error_input_cc js-error_input_cc');
						} else if ((/That credit card expiration date has already passed./).test(data.error_description)) {
							$('#form-month').addClass('error_input_cc js-error_input_cc').siblings('span.customSelect').addClass('error_input_cc js-error_input_cc');
							$('#form-year').addClass('error_input_cc js-error_input_cc').siblings('span.customSelect').addClass('error_input_cc js-error_input_cc');
						}
			*/
			
						$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);
			
						return false;
					
					  } else { // Token was created!
						affirmative_opt_in_submit();
					    // Get the token ID:
					    var token = response.id;
					
					    // Insert the token into the form so it gets submitted to the server:
					    //console.log(data);
			            var input = $("<input>").attr("type", "hidden").attr("name","stripe_credit_card_token" ).val(token);
			            $('#donate_form, #ticketed_event_form').append($(input));
			            //console.log($(input).val());
			            if (($(form).parents('.v2').length || $(form).parents('.v3').length) && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest)) {
			            	widget_ajax_submit(form);
			            } else {
				            form.submit();
			            }		            
					
					  }
					}
				}
				
				$.validator.addMethod("require_from_group", function (value, element, options) {
			        var numberRequired = options[0];
			        var selector = options[1];
			        var fields = $(selector, element.form);
			        var filled_fields = fields.filter(function () {
			            // it's more clear to compare with empty string
			            return $(this).val() != "";
			        });
			        var empty_fields = fields.not(filled_fields);
			        // we will mark only first empty field as invalid
			        if (filled_fields.length < numberRequired && empty_fields[0] == element) {
			            return false;
			        }
			        return true;
			        // {0} below is the 0th item in the options field
			    }, $.format("'Please enter either username/ email address to recover password'/Please fill out at least {0} of these fields."));
			};

				//fundraising groups				
				var getGroups = function() {
				    var result = '';
				    if ($('.donation_info_split input').length) {
					    $('.donation_info_split input').each(function(i) {
					    	result = result + $(this).attr('name') + ' ';
					    });
				    } else {
					    $('.js-ticketed_event_ticket_number').each(function(i) {
					    	result = result + $(this).attr('name') + ' ';
					    	//console.log(result);
					    });
				    }
				    return result;
				}


			donation_return_flag = false;


			if ($('.js-ticketed_event_form_button').length) {
				var $donate_submit_button = $('.js-ticketed_event_form_button');
				
			} else {
				var $donate_submit_button = $('#donate_form_button');
			}
			
			donation_submit_val = $donate_submit_button.val();
			
			/* form validation */
			var canValidate = function() {
				//if ($.validator !== 'undefined') {
					$.extend($.validator.prototype,
					{
					
					    optional: function (element) {
					        return !$.validator.methods.required.call(this, $.trim(element.value), element); // && "dependency-mismatch";
					    }
					});
					
					$.validator.addMethod("phone_parens", function(value, element) {
					  return this.optional(element) || /(\d{3}[-]\d{3}[-]\d{4})/.test(value);
					}, "Please specify the correct domain for your documents");
					
					$.validator.addMethod(
					        "regex",
					        function(value, element, regexp) {
					            var re = new RegExp(regexp, 'i');
					            return this.optional(element) == true || re.test(value);
					        },
					        "Please check your input."
					);
				//}

				$(".can_embed form, #ty_signup").each(function () {
					$(this).validate({

						ignore: ".ignore",

						// highlight the errors
						highlight: function(element) {
							$(element).addClass("error_input");
						},
						unhighlight: function(element) {
							$(element).removeClass("error_input");
						},

						// remove the error messages
					    errorPlacement: function(error,element) {
		                    if (element.is(':checkbox, :radio')) {
		                    	//console.log($(element).parents(".check_radio_field").children('label'));
		                        $(element).parents(".check_radio_field").children('label').addClass("error_checkbox");
		                    } else {
		                        return true;
		                    }
		                },

		                /*  groups: getGroups(), */
		                groups: {
				            names: getGroups()
				        },

						// Error message
						/*
	showErrors: function(errorMap, errorList) {
							var errorCount = this.numberOfInvalids();
							this.defaultShowErrors();
						},
	*/



						showErrors: function(errorMap, errorList) {
	                   // console.log(errorMap);

	                   // console.log(errorList);

	                    //console.log(form_id_error);
	                    //console.log(this.currentForm);


		                    if ((checkboxErrorFlag) && ($(this.currentForm).find('input[type=checkbox].required_checkboxes').length)) {
								errorCount = this.numberOfInvalids();
		                    	$("#" + widget_id + ' .checkbox_group_wrap, #ty_signup  .checkbox_group_wrap').each(function() {
						    		if ($(this).find('.required_checkboxes').length) {
						    			//console.log(this);
							    		if ($(this).children('span').children('label').children('.required_checkboxes:checked').length == 0) {
							    			errorCount = errorCount + 1;

							    			$(this).children('span').children('label').children('.required_checkboxes').each(function() {
								    			errorList.push({
						                        	message: 'error',
						                        	element: this
					                        	});
							    			});

							    		}
							    	}
							    });




		                    } else {
		                        errorCount = this.numberOfInvalids();
		                    }



	                   // console.log(checkboxErrorFlag);


	                    //console.log(errorList);

	                   /*
	 if (errorList.length) {
	                        form_id = this.currentForm.id;
	                        form_id_error = '#' + form_id + " #error_message";
	                    }

	                    if (errorCount > 0) {
	                        if (errorCount < 2) {
	                            $(form_id_error).html("Oops! You have <strong>1</strong> error.").slideDown();
	                        } else {
	                            $(form_id_error).html("Oops! You have <strong>" + errorCount + "</strong> errors.").slideDown();
	                        }
	                    } else {
	                        $(form_id_error).slideUp();
	                    }
	*/

	                    //console.log($('#donate_form'));

	                    	if (errorList.length) {
		                    	if ($('#donate_form').length) {
			                    	form_id = 'donate_form';
			                    	form_id_error = '#donate_form #error_message';
		                    	} else if ($('.js-ticketed_event_form').length) {
			                    	form_id = 'ticketed_event_form';
			                    	form_id_error = '#ticketed_event_form #error_message';
			                    } else {
			                    	form_id = $(this.currentForm).parents('.can_embed').parent().attr('id');
									form_id_error = '#' + form_id + " #error_message";
		                    	}

		                    } else if (cc_info_error_number > 0) {
			                    if ($('#donate_form').length) {
			                    	form_id = 'donate_form';
									form_id_error = '#donate_form #error_message';
								} else if ($('.js-ticketed_event_form').length) {
									form_id = 'ticketed_event_form';
			                    	form_id_error = '#ticketed_event_form #error_message';
			                    }

		                    }

		                    //console.log(form_id_error);

							errorCount = errorCount + cc_info_error_number;

		                    if (errorCount > 0) {
		                        if (errorCount < 2) {
		                            $(form_id_error).html(an_javascript_translation.oops_you_have + " <strong>1</strong> " + an_javascript_translation.error + ".").slideDown(function() {
			                            if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
											//console.log($('body').height());
											var height_message = {
												"height" : $('body').height(),
												"src" : window.location.href
											}

											event_source.postMessage(JSON.stringify(height_message), event_origin);
										}
		                            });
		                        } else {
		                            $(form_id_error).html(an_javascript_translation.oops_you_have + " <strong>" + errorCount + "</strong> " + an_javascript_translation.errors + ".").slideDown(function() {
			                            if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
											//console.log($('body').height());
											var height_message = {
												"height" : $('body').height(),
												"src" : window.location.href
											}

											event_source.postMessage(JSON.stringify(height_message), event_origin);
										}
		                            });
		                        }

		                    } else {
		                    	if (typeof(form_id_error) !== 'undefined') {
			                    	$(form_id_error).slideUp();
		                    	}
		                    }

		                    $.each(errorList, function(i, object) {
		                        if ($(object.element).prop("tagName") == 'SELECT') {
		                            //console.log('true');
		                            //console.log(object);
		                            //console.log($(object.element).parent().attr('id'));
		                            $(object.element).parent().addClass('error_input-select_wrap');
		                        } else {

		                        }
		                    });

		                    this.defaultShowErrors();
		                },

		                submitHandler: function(form) {
			                //console.log(widget_id);
			                
			                
			                
			                //on submit, if custom fields are present, look for ones who's name starts with "@!@tag@!@, which indicates this is a tag question, and if it's checked/selected, add it to the tags array on the form
			                if ($("#" + widget_id + ' .js-form_builder_output').length || $("#" + widget_id + ' .js-custom_fields').length) {
					    
							    var tag_list_to_array = function() {
								    if ($("#" + widget_id + ' .js-tag_list').val() == '') {
									    $("#" + widget_id + ' .js-tag_list').val("[]");
								    }
								    return JSON.parse($("#" + widget_id + ' .js-tag_list').val());
							    }
							    
							    var unique_array = function(list) {
								    var result = [];
								    $.each(list, function(i, e) {
								        if ($.inArray(e, result) == -1) result.push(e);
								    });
								    return result;
								}
							    
							    var array_to_tag_list = function(array) {
								    return JSON.stringify(unique_array(array));
							    }
							    
							    
							    
							    $("#" + widget_id + ' input[type="checkbox"]:checked, ' + "#" + widget_id + ' input[type="radio"]:checked, ' + "#" + widget_id + ' select').each(function() {
								    //console.log($(this));
								    if ($(this).attr('name') && $(this).attr('name').indexOf('@!@tag@!@') != -1) {
									    if ($(this).val() != '') {
										    var $tag_list_input = $("#" + widget_id + ' .js-tag_list');
										    var tag_list_array = tag_list_to_array();
										    tag_list_array.push($(this).val());
										    //console.log(tag_list_array);
										    
										    //need to dedupe array too
										    $tag_list_input.val(array_to_tag_list(tag_list_array));
										    //console.log($tag_list_input.val());
										    
									    }
								    }
							    });
							    
							    
							    
							    
							    
							    //return false;
						    }
			                
							if (cc_info_error_number == 0) {
								if (typeof(wepay_form) != 'undefined') {
									
									

									donation_submit_val = $donate_submit_button.val();

									$donate_submit_button.attr('disabled',true).addClass('disabled').val(an_javascript_translation.processing + '...');

									if (wepay_form && $('#form-card_number').length) {

										var client_id = wepay_client_id,
							      			user_name = document.getElementById('form-first_name').value+" "+document.getElementById('form-last_name').value,
							      			cc_number = document.getElementById('form-card_number').value,
							      			cvv = document.getElementById('form-card_sec').value,
							      			expiration_month = document.getElementById('form-month').value,
							      			expiration_year = document.getElementById('form-year').value;
							      			
								  		var stripe_response = {
									        "number": cc_number,
									        "cvc": cvv,
									        "exp_month": expiration_month,
									        "exp_year": expiration_year,
									        "address_zip": document.getElementById('form-zip_code').value,
									        "name": user_name,
									        "address_line1": document.getElementById('form-address').value,
									        "address_city": document.getElementById('form-city').value
								        }

							      		if ($('#form-country').val() == 'US' || $('#form-country').val() == 'United States') {
								      		var address = {
								      			"address1":document.getElementById('form-address').value,
									  			"city":document.getElementById('form-city').value,
									  			"state":document.getElementById('form-state').value,
									  			"country":'US',
									  			"zip":document.getElementById('form-zip_code').value
							      			};
							      			
							      			stripe_response.address_country = 'US';
								  			stripe_response.address_state = document.getElementById('form-state').value
							      		} else {
								      		var address = {
								              	"address1":document.getElementById('form-address').value,
											  	"city":document.getElementById('form-city').value,
											  	"country":document.getElementById('form-country').value,
											  	"postcode":document.getElementById('form-zip_code').value
							      			};
							      			
							      			stripe_response.address_country = document.getElementById('form-country').value;
							      		}

							      		if ($('#form-email').val() == '') {
								      		var email = document.getElementById('default_email').value;
							      		} else {
								      		var email = document.getElementById('form-email').value;
							      		}

							      		var wepay_response = {
											"client_id":client_id,
											"user_name":user_name,
											"email":email,
											"cc_number":cc_number,
											"cvv":cvv,
											"expiration_month":expiration_month,
											"expiration_year":expiration_year,
											"address":address,
											"auto_update": true
								        };

								        if (typeof(WePay) != 'undefined') {

											var response = WePay.credit_card.create( wepay_response, function(data) {
									        	if (data.error) {
										            //console.log(data);
										            // handle error response

										            $.noty.closeAll();

													noty({

														text: data.error_description + '<br/>' + an_javascript_translation.your_card_has_not_been_charged_please_try_again_or + ' <a href="/contact" target="_blank">' + an_javascript_translation.contact_us + '</a> ' + an_javascript_translation.if_it_keeps_happening + '.',

														type: 'error', // alert - success - error - warning - information - confirmation

														closeWith: ['button']

													});

													// early error handling
													if ((/Invalid credit card number/).test(data.error_description)) {
														$('#form-card_number').addClass('error_input_cc');
													} else if ((/That credit card expiration date has already passed./).test(data.error_description)) {
														$('#form-month').addClass('error_input_cc').siblings('span.customSelect').addClass('error_input_cc');
														$('#form-year').addClass('error_input_cc').siblings('span.customSelect').addClass('error_input_cc');
													}

													$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);

										            return false;
									          	} else {
										            //console.log(data);
										           
										            var input = $("<input>").attr("type", "hidden").attr("name","credit_card_id" ).val(data.credit_card_id);
										            $('#donate_form, #ticketed_event_form').append($(input));
										            var input = $("<input>").attr("type", "hidden").attr("name","credit_card_last_digits" ).val(document.getElementById('form-card_number').value.substring(document.getElementById('form-card_number').value.length - 4, document.getElementById('form-card_number').value.length));
										            $('#donate_form, #ticketed_event_form').append($(input));

/*
										            if ($(form).parents('.v2').length && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest)) {
										            	widget_ajax_submit(form);
										            } else {
											            form.submit();
										            }
*/
													stripe_tokenize(stripe_response, form, donation_submit_val, $donate_submit_button);
									        	}
							      			});


									        if (response.error) {
									          //console.log(response);

									          $.noty.closeAll()
									          // handle error response
												noty({

												text: data.error_description + '<br/>' + an_javascript_translation.your_card_has_not_been_charged_please_try_again_or + ' <a href="/contact" target="_blank">' + an_javascript_translation.contact_us + '</a> ' + an_javascript_translation.if_it_keeps_happening + '.',


												type: 'error', // alert - success - error - warning - information - confirmation

												closeWith: ['button']

												});

												// early error handling
												if ((/Invalid credit card number/).test(data.error_description)) {
													$('#form-card_number').addClass('error_input_cc');
												} else if ((/That credit card expiration date has already passed./).test(data.error_description)) {
													$('#form-month').addClass('error_input_cc').siblings('span.customSelect').addClass('error_input_cc');
													$('#form-year').addClass('error_input_cc').siblings('span.customSelect').addClass('error_input_cc');
												}

											  $donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);

									          return false;

									        }
									    } else {
										    $.noty.closeAll()
									          // handle error response
												noty({

												text: an_javascript_translation.there_was_an_error_contacting_our_payment_processor + '<br/>' + an_javascript_translation.please_ensure_you_are_not_blocking_our_javascript_and_try_again_or + ' <a href="/contact" target="_blank">' + an_javascript_translation.contact_us + '</a> ' + an_javascript_translation.if_it_keeps_happening + '.',


												type: 'error', // alert - success - error - warning - information - confirmation

												closeWith: ['button']

												});

											  $donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);

									          return false;
									    }


							      } else {
								    affirmative_opt_in_submit();
								  	if (!donation_return_flag) {
									  	
								  		if (($(form).parents('.v2').length || $(form).parents('.v3').length) && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) && (!$(form).parents('.v2').hasClass('event_campaign') && !$(form).parents('.v3').hasClass('event_campaign'))) {
							            	widget_ajax_submit(form);
							            } else if (($(form).parents('.v2').length || $(form).parents('.v3').length) && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) && ($(form).parents('.v2').hasClass('event_campaign') || $(form).parents('.v3').hasClass('event_campaign'))) {
								            widget_ajax_submit_event_campaign(form);
								        } else {
								            form.submit();
							            }
								  	}
								  }
							    } else {
								    affirmative_opt_in_submit();
								  	if (!donation_return_flag) {
									  	
								  		if (($(form).parents('.v2').length || $(form).parents('.v3').length) && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) && (!$(form).parents('.v2').hasClass('event_campaign') && !$(form).parents('.v3').hasClass('event_campaign'))) {
									  		
							            	widget_ajax_submit(form);
							            } else if (($(form).parents('.v2').length || $(form).parents('.v3').length) && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) && ($(form).parents('.v2').hasClass('event_campaign') || $(form).parents('.v3').hasClass('event_campaign'))) {
								            widget_ajax_submit_event_campaign(form);
								        } else {
								            form.submit();
							            }
								  	}
								}
						    } else {
							    affirmative_opt_in_submit();
						    }
						}

					});



				});

				if ($("#" + widget_id + ' .js-phone-parens').length) {
					$("#" + widget_id + ' .js-phone-parens').rules("add", {
					  	phone_parens: true
					});
				}
				
				if ($("#" + widget_id + ' .js-form_builder_output').length || $("#" + widget_id + ' .js-custom_fields').length) {
					$("#" + widget_id + ' [data-regex]').each(function() {
						$(this).rules("add", { regex: $(this).data('regex') });
					});
				}
			}

			canValidate();
			
			var widget_ajax_submit = function(form) {
				//console.log($(form).attr('action'));
				$(form).find('.ajax_error').slideUp(function() {
					$(this).remove();
				});
				$(form).find('.ajax-loading').show();
				$(form).find('input[type=submit]').attr('disabled',true).addClass('disabled');
				$.support.cors = true;
				$.ajax({
					type: "POST",
					url: $(form).attr('action'),
					data: $(form).serialize() + '&format=js',
					crossDomain: true,
					dataType: 'html',
					cache : false,
					xhrFields: {
		                withCredentials: true
		            }
		            /*
headers: {
			            'api-key': 'something'
		            }
*/
				}).done(function(data) {
					var IS_JSON = true;
					try
					{
					   var json = $.parseJSON(data);
					}
					catch(err)
					{
			               IS_JSON = false;
			    	}

					if (IS_JSON) {
						if (typeof(json.redirect_url) !== 'undefined') {
							
							
							
							if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
								window.top.location = json.redirect_url;
							} else {
								var container_id = $('.can_embed').parent().attr('id');
								if (typeof(can_event_id_submitted[container_id + '_submitted']) != 'undefined') {
									document.dispatchEvent(can_event_id_submitted[container_id + '_submitted']);
								}
								var event_result = !document.dispatchEvent(can_event_generic_submitted);
								if (typeof(an_tracking_code_submitted) !== 'undefined') {
									an_tracking_code_submitted();
								}
								if (typeof(an_tracking_code_submitted_event_campaign) !== 'undefined') {
									an_tracking_code_submitted_event_campaign();
								}
								
								
								//console.log(event_result);
								
								if (!event_result) {
									window.location = json.redirect_url;
								}
								
								
							}
						} else if (typeof(json.error) !== 'undefined') {
							//affirmative opt in required class/value manipulations
							console.log('fire');
							$('#' + widget_id + ' .js-affirmative_optin_control_group .js-affirmative_optin_radio_no').each(function() {
								$(this).val('invalid').attr('name', $(this).data('name'));
							});
							$.noty.closeAll();
							$('.js-log-out').trigger('click');
							noty({
								text: json.error,
								type: 'error', // alert - success - error - warning - information - confirmation
								closeWith: ['button']
							});
							
							$('#form-card_number').addClass('error_input_cc');
							$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);
							$('.ajax-loading').hide();
						} else if (typeof(json.discussion_board_error) !== 'undefined') {
							$(form).find('.discussion_board_error').remove();
							$(form).find('input[type=submit]').after('<p class="discussion_board_error">' + json.discussion_board_error + '</p>');
							$(form).find('input[type=submit]').attr('disabled',false).removeClass('disabled');
						}

					} else {
						//console.log(data);
						if ($.isFunction($.fn.noty) ) {
							$.noty.closeAll();
						}

						var temp_embed_height = $(form).parents('.can_embed').parent().height();

						$(form).parents('.can_embed').parent().css('height',temp_embed_height);

						if (data.indexOf('kiosk_active') != -1) {
							

							$(form).parents('.can_embed').parent().fadeOut(function() {
								if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && $(form).parents('.can_embed').hasClass('kiosk_active')) {
									$(this).find('.can_embed').remove();
									$(this).prepend(data);
								} else {
									$(this).html(data);
								}

								canEmbed($, $(this).attr('id'));
								
								if (typeof(gmaps_initialize) !== 'undefined' && $('#' + $(form).parents('.can_embed').parent().attr('id') + ' #can_embed_form #map_canvas').length) {
									gmaps_initialize($('#' + $(form).parents('.can_embed').parent().attr('id') + ' #can_embed_form #map_canvas'));
								} else if (typeof(window["gmaps_initialize_" + $(form).parents('.can_embed').parent().attr('id')]) !== 'undefined' && $('#' + $(form).parents('.can_embed').parent().attr('id') + ' #can_embed_form #map_canvas').length) {
									window["gmaps_initialize_" + $(form).parents('.can_embed').parent().attr('id')]();
								} 
								 
								$(this).css('height','auto');
								$(this).fadeIn(function() {
									if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && typeof(event_origin) !== 'undefined' ) {
										//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
										//console.log($('body').outerHeight(true));

										//setTimeout(function() {
											//console.log($('body').outerHeight(true));
											var height_message = {
												"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')),
												"src" : window.location.href
											}
											event_source.postMessage(JSON.stringify(height_message), event_origin);
										//}, 200);
									}
								});

							});

						} else {
							$(form).parents('.can_embed').fadeOut(function() {
								$(this).html(data);
								//console.log($(this).find('.can_thank_you_wrap').length);
								if (!$(this).find('.can_thank_you_wrap').length) {
									//console.log($(this).parent());
									canEmbed($, $(this).parent().attr('id'));

									var container_id = $(this).parent().attr('id');

									if (typeof(can_event_id[container_id + '_loaded']) != 'undefined') {
										document.dispatchEvent(can_event_id[container_id + '_loaded']);
									}
									document.dispatchEvent(can_event_generic);

									$(this).parent().css('height','auto');
									$(this).fadeIn();
								} else {
									//console.log($(this).parent());
									//$(this).parent().removeChild('letter_delivery')
									thank_you_init(this);
								}
							});
						}

					}
				}).fail(function( jqXHR, textStatus, errorThrown ) {
					console.log(JSON.stringify(jqXHR));
					console.log(textStatus);
					console.log(errorThrown);
					$(form).find('.ajax-loading').hide().after('<p class="small centertext redtext ajax_error" style="display:none;">' + an_javascript_translation.an_error_has_occured_please_try_again + '</p>');

					if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						//console.log(donation_submit_val);
						$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);
						$(form).find('.ajax_error').slideDown(function() {
							if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && typeof(event_origin) !== 'undefined' ) {
								//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
								//console.log($('body').outerHeight(true));
	
								//setTimeout(function() {
									//console.log($('body').outerHeight(true));
									var height_message = {
										"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')),
										"src" : window.location.href
									}
									event_source.postMessage(JSON.stringify(height_message), event_origin);
								//}, 200);
							}
						});
					} else {
						$(form).find('input[type=submit]').attr('disabled',false).removeClass('disabled');
						$(form).find('.ajax_error').slideDown();
						form.submit();
					}
					
					


				});
			}

			var widget_ajax_submit_event_campaign = function(form) {
				//console.log(widget_id);
				$(form).find('.ajax_error').slideUp(function() {
					$(this).remove();
				});
				$(form).find('.ajax-loading').show();
				$(form).find('input[type=submit]').attr('disabled',true).addClass('disabled');
				$.support.cors = true;
				$.ajax({
					type: "GET",
					url: $(form).data('ajax-redirect'),
					data: $(form).serialize() + '&reload=true',
					crossDomain: true,
					dataType: 'html',
					cache : false,
					xhrFields: {
		                withCredentials: true
		            }
		            /*
headers: {
			            'api-key': 'something'
		            }
*/
				}).done(function(data) {
					var IS_JSON = true;
					try
					{
					   var json = $.parseJSON(data);
					}
					catch(err)
					{
			               IS_JSON = false;
			    	}

					if (IS_JSON) {
						if (typeof(json.redirect_url) !== 'undefined') {
							if ($('.can_fundraising_widget').length) {
								window.top.location = json.redirect_url;
							} else {
								window.location = json.redirect_url;
							}
						} else if (typeof(json.error) !== 'undefined') {
							$.noty.closeAll();
							noty({
								text: json.error,
								type: 'error', // alert - success - error - warning - information - confirmation
								closeWith: ['button']
							});

							$('#form-card_number').addClass('error_input_cc');
							$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);
							$('.ajax-loading').hide();
						}

					} else {
						//console.log(data);
						if ($.isFunction($.fn.noty) ) {
							$.noty.closeAll();
						}

						var temp_embed_height = $(form).parents('.can_embed').parent().height();

						$(form).parents('.can_embed').parent().css('height',temp_embed_height);

						temp_embed_width = $(form).parents('.can_embed').parent().width();

						$(form).parents('.can_embed').parent().fadeOut(function() {
							$(this).html(data);

							var container_id = $(this).attr('id');

							canEmbed($, $(this).attr('id'));

							if (typeof(can_event_id[container_id + '_loaded']) != 'undefined') {
								document.dispatchEvent(can_event_id[container_id + '_loaded']);
							}
							document.dispatchEvent(can_event_generic);
							
							
							//console.log($(this).attr('id'));
							//console.log(typeof(window["gmaps_initialize_" + $(this).attr('id')]));
							//console.log($('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length);
							
							if (typeof(gmaps_initialize) !== 'undefined' && $('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length) {
								gmaps_initialize($('#' + $(this).attr('id') + ' #can_embed_form #map_canvas'));
							} else if (typeof(window["gmaps_initialize_" + $(this).attr('id')]) !== 'undefined' && $('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length) {
								//console.log('fire');
								window["gmaps_initialize_" + $(this).attr('id')]();
							} 
							 
							$(this).css('height','auto');
							$(this).fadeIn();
						});
					}
				}).fail(function( jqXHR, textStatus, errorThrown ) {
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
					$(form).find('.ajax-loading').hide().after('<p class="small centertext redtext ajax_error" style="display:none;">' + an_javascript_translation.an_error_has_occured_please_try_again + '</p>');

					if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);
					} else {
						$(form).find('input[type=submit]').attr('disabled',false).removeClass('disabled');
					}

					$(form).find('.ajax_error').slideDown(function() {
						if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && typeof(event_origin) !== 'undefined' ) {
							//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
							//console.log($('body').outerHeight(true));

							//setTimeout(function() {
								//console.log($('body').outerHeight(true));
								var height_message = {
									"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')),
									"src" : window.location.href
								}
								event_source.postMessage(JSON.stringify(height_message), event_origin);
							//}, 200);
						}
					});

					form.submit();
				});
			}

			$('#' + widget_id + ' .choose_location_button, #' + widget_id + ' #map-notice-content').click(function(e) {
				e.preventDefault();
				widget_ajax_rsvp_event_campaign($(this));
			});
			
			onMapClick = function() {
				//console.log('click?');
				//console.log($('#' + widget_id + ' #map-notice-content a'));
				$('#map-notice-content a').click(function(e) {
					e.preventDefault();
					widget_ajax_rsvp_event_campaign($(this));
				});
			}

			widget_ajax_rsvp_event_campaign = function(button) {

				$(button).attr('disabled',true).addClass('disabled');
				/*
$(form).find('.ajax_error').slideUp(function() {
					$(this).remove();
				});
				$(form).find('.ajax-loading').show();
				$(form).find('input[type=submit]').attr('disabled',true).addClass('disabled');
*/
				$.support.cors = true;
				$.ajax({
					type: "GET",
					url: $(button).data('ajax-redirect'),
					cache : false,
					//data: $(form).serialize() + '&reload=true',
					crossDomain: true,
					dataType: 'html',
					xhrFields: {
		                withCredentials: true
		            }
		            /*
headers: {
			            'api-key': 'something'
		            }
*/
				}).done(function(data) {

					var temp_embed_height = $(button).parents('.can_embed').parent().height();

					$(button).parents('.can_embed').parent().css('height',temp_embed_height);

					temp_embed_width = $(button).parents('.can_embed').parent().width();

					$(button).parents('.can_embed').parent().fadeOut(function() {
						$(this).html(data);

						var container_id = $(this).attr('id');

						canEmbed($, $(this).attr('id'));

						$(this).find('.event_campaign').removeClass('event_campaign');

						if (typeof(can_event_id[container_id + '_loaded']) != 'undefined') {
							document.dispatchEvent(can_event_id[container_id + '_loaded']);
						}
						document.dispatchEvent(can_event_generic);
						if (typeof(an_tracking_code_pageload_event_campaign) !== 'undefined') {
							an_tracking_code_pageload_event_campaign();
						}

						if (typeof(gmaps_initialize) !== 'undefined' && $('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length) {
							gmaps_initialize($('#' + $(this).attr('id') + ' #can_embed_form #map_canvas'));
						} else if (typeof(window["gmaps_initialize_" + $(this).attr('id')]) !== 'undefined' && $('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length) {
							window["gmaps_initialize_" + $(this).attr('id')]();
						} 
						
						$(this).css('height','auto');
						$(this).fadeIn();
					});
				}).fail(function( jqXHR, textStatus, errorThrown ) {
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
					$(button).find('.ajax-loading').hide().after('<p class="small centertext redtext ajax_error" style="display:none;">' + an_javascript_translation.an_error_has_occured_please_try_again + '</p>');

					if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						$donate_submit_button.attr('disabled',false).removeClass('disabled').val(donation_submit_val);
						$(button).attr('disabled',false).removeClass('disabled');
					} else {
						$(button).find('input[type=submit]').attr('disabled',false).removeClass('disabled');
						$(button).attr('disabled',false).removeClass('disabled');
					}

					$(button).find('.ajax_error').slideDown(function() {
						if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && typeof(event_origin) !== 'undefined' ) {
							//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
							//console.log($('body').outerHeight(true));

							//setTimeout(function() {
								//console.log($('body').outerHeight(true));
								var height_message = {
									"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')),
									"src" : window.location.href
								}
								event_source.postMessage(JSON.stringify(height_message), event_origin);
							//}, 200);
						}
					});

					window.location = $(button).attr('href');
				});
			}

			var thank_you_init = function(container) {

				var set_responsive = setTimeout(function() {
					$(container).parent().css('height','auto');
					$(container).fadeIn();
					$(window).bind("resize", resizeEmbed);
					var section = $(container).children('#can_embed_form');
					var width = $(container).outerWidth();

					if (width > 400) {
						section.addClass("can_float");
					} else {
						section.removeClass("can_float");
					}
					if (width > 768) {
						section.addClass("can_768");
					} else {
						section.removeClass("can_768");
					}
					function resizeEmbed( e ) {
						var section = $(container).children();
						var width = section.width();
						if (width > 400) {
							section.addClass("can_float");
						} else {
							section.removeClass("can_float");
						}
					}

					//console.log($(document).height());

					if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						//console.log('height');
						var height_message = {
							"height" : $('body').outerHeight(true),
							"src" : window.location.href
						}

						event_source.postMessage(JSON.stringify(height_message), event_origin);
					}


					var fancy_thanks = setTimeout(function() {
						if ($.isFunction($.fn.fancybox) ) {
							$(container).find("#donate_auto_modal-link").fancybox({
								onClosed: function() {
									if ($('body').outerHeight(true) < $('#fancybox-wrap').outerHeight(true) + 60) {
										var height = $('#fancybox-wrap').outerHeight(true) + 60;
									} else {
										var height = $('body').outerHeight(true)
									}
							        var height_message = {
										"height" : height,
										"src" : window.location.href
									}
			
									event_source.postMessage(JSON.stringify(height_message), event_origin);
						        },
						        onComplete: function() {
							        if ($('body').outerHeight(true) < $('#fancybox-wrap').outerHeight(true) + 60) {
										var height = $('#fancybox-wrap').outerHeight(true) + 60;
									} else {
										var height = $('body').outerHeight(true)
									}
							        var height_message = {
										"height" : height,
										"src" : window.location.href
									}
			
									event_source.postMessage(JSON.stringify(height_message), event_origin);
						        }
							}).trigger('click');
							
			    		}
			    	}, 500);

			    	//console.log($(container).parent().attr('id'));
			    	//console.log(/can-event_campaign-area/.test($(container).parent().attr('id')));
					//setTimeout(function() {
					/*
if (/can-event_campaign-area/.test($(container).parent().attr('id'))) {
						var gmaps_init = window['gmaps_initialize_event_campaign_' + $(container).parent().attr('id').replace('can-event_campaign-area-', '').replace(/-/g,'_')];
						//console.log(gmaps_init);
						if (typeof(gmaps_init) !== 'undefined') {
							gmaps_init();
						}
					} else {
						var gmaps_init = window['gmaps_initialize_event_' + $(container).parent().attr('id').replace('can-event-area-', '').replace(/-/g,'_')];
						//console.log(gmaps_init);
						if (typeof(gmaps_init) !== 'undefined') {
							gmaps_init();
						}
					}
*/

					
					
					
					if (typeof(gmaps_initialize) !== 'undefined' && $('#' + $(container).parent().attr('id') + ' #can_embed_form #map_canvas').length) {
						gmaps_initialize($('#' + $(container).parent().attr('id') + ' #can_embed_form #map_canvas'));
					} else if (typeof(window["gmaps_initialize_" + $(container).parent().attr('id')]) !== 'undefined' && $('#' + $(container).parent().attr('id') + ' #can_embed_form #map_canvas').length) {
						window["gmaps_initialize_" + $(container).parent().attr('id')]();
					}



					//}, 500);

					var container_id = $(container).parent().attr('id');
					//console.log(container_id);
					//console.log(container);
					if (!$(container).parent().hasClass('can_fundraising_widget') && !$(container).parent().hasClass('js-ticketed_event_widget')) {
						if (typeof(can_event_id_submitted[container_id + '_submitted']) != 'undefined') {
							document.dispatchEvent(can_event_id_submitted[container_id + '_submitted']);
						}
						document.dispatchEvent(can_event_generic_submitted);
						//console.log($(container));
						if (typeof(an_tracking_code_submitted) !== 'undefined' && !$(container).hasClass('letter_delivery')) {
							an_tracking_code_submitted();
						}
						if (typeof(an_tracking_code_submitted_event_campaign) !== 'undefined') {
							an_tracking_code_submitted_event_campaign();
						}
					}

				}, 500);

				if ($.isFunction($.fn.customSelect) ) {
					$(container).find('select.can_select').each(function() {
						if (!$(this).hasClass('hasCustomSelect')) {
							$(this).customSelect({customClass:"can_select"});
						}
					});
			    }
			    
			    /* better select inputs */
			    if ($.isFunction($.fn.customSelect) &&  $.isFunction($.fn.select2)) {
				    if ($('.can_embed-html').length) {
					    $("select.can_select").not("select.can_select.js-form_select2").each(function() {
							if (!$(this).hasClass('hasCustomSelect')) {
								$(this).customSelect({customClass:"can_select"});
							}
						});
						
						$("select.js-form_select2").each(function() {
							if (!$(this).hasClass('select2-offscreen')) {
								$(this).select2({
									dropdownCssClass: "can_embed_select2", 
									allowClear: true,
									matcher: function (term, text, option) {		
										if (term.length == 0) return true;
										
										if(term.split(" ").length == 1){
										      return text.toUpperCase().indexOf(term.toUpperCase())!=-1;
										}
										
										keywords=(term).split(/ |,|\[|\]|\(|\)/);
										// `data.text` is the text that is displayed for the data object
										// check if data.text contains all of keywords, if some is missing, return null
										for (var i = 0; i < keywords.length; i++) {
										
										    if (((text).toUpperCase()).indexOf((keywords[i]).toUpperCase()) == -1) 
										      // Return `null` if the term should not be displayed
										      return null;
										
										}
										// If here, data.text contains all keywords, so return it.
										return text;
									} 
								});
							}
						});
				    } else {
					    $('#' + widget_id).find('select.can_select').not("select.can_select.js-form_select2").each(function() {
							if (!$(this).hasClass('hasCustomSelect')) {
								$(this).customSelect({customClass:"can_select"});
							}
						});
						
						$('#' + widget_id).find("select.js-form_select2").each(function() {
							if (!$(this).hasClass('select2-offscreen')) {
								$(this).select2({
									dropdownCssClass: "can_embed_select2", 
									allowClear: true,
									matcher: function (term, text, option) {		
										if (term.length == 0) return true;
										
										if(term.split(" ").length == 1){
										      return text.toUpperCase().indexOf(term.toUpperCase())!=-1;
										}
										
										keywords=(term).split(/ |,|\[|\]|\(|\)/);
										// `data.text` is the text that is displayed for the data object
										// check if data.text contains all of keywords, if some is missing, return null
										for (var i = 0; i < keywords.length; i++) {
										
										    if (((text).toUpperCase()).indexOf((keywords[i]).toUpperCase()) == -1) 
										      // Return `null` if the term should not be displayed
										      return null;
										
										}
										// If here, data.text contains all keywords, so return it.
										return text;
									} 
								});
							}
						});
				    }
				    
				    $(document).on('click', function() {
				    	var close_flag = false;
				    	$('.select2-drop-active').each(function() {
					    	if ($(this).css('display') == 'block') {
						    	close_flag = true;
					    	}
				    	});
				    	
				    	if (close_flag) {
					    	$('.js-form_select2').each(function() {
						    	$(this).select2('close');
						    });
				    	}
				    });
			    }


			    checkbox_error_function();
			    canValidate();

				// show and hide embed stuff
			    $(container).find('#embed_toggle-open').click(function() {
			        $(container).find('#embed_options').slideDown(200, function() {
				        if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
							//console.log($('body').height());
							var height_message = {
								"height" : $('body').height(),
								"src" : window.location.href
							}

							event_source.postMessage(JSON.stringify(height_message), event_origin);
						}
			        });
			        $(container).find('#embed_toggle-close').show();
			        $(container).find('#embed_toggle-open').hide();

			    });
			    $(container).find('#embed_toggle-close').click(function() {
			        $(container).find('#embed_options').slideUp(200, function() {
				        if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
							//console.log($('body').height());
							var height_message = {
								"height" : $('body').height(),
								"src" : window.location.href
							}

							event_source.postMessage(JSON.stringify(height_message), event_origin);
						}
			        });
			        $(container).find('#embed_toggle-open').show();
			        $(container).find('#embed_toggle-close').hide();
			    });
			    if ($(container).find('.embed_custom').is(':checked')) {
			        $(container).find('.embed_custom_box').show();
			        if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						//console.log('height');
						var height_message = {
							"height" : $('body').height(),
							"src" : window.location.href
						}

						event_source.postMessage(JSON.stringify(height_message), event_origin);
					}
			    } else {
			        $(container).find('.embed_custom_box').hide();
			        if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
						//console.log('height');
						var height_message = {
							"height" : $('body').height(),
							"src" : window.location.href
						}

						event_source.postMessage(JSON.stringify(height_message), event_origin);
					}
			    };
			    $(container).find('.embedSize').click(function(){
			        var radio_value = $(this).val();
			        if (radio_value == "embed-custom") {
			            $(container).find('.embed_custom_box').slideDown(200, function() {
				            if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
								//console.log('height');
								var height_message = {
									"height" : $('body').height(),
									"src" : window.location.href
								}

								event_source.postMessage(JSON.stringify(height_message), event_origin);
							}
			            });

			        } else if(radio_value != "embed-custom") {
			            $(container).find('.embed_custom_box').slideUp(200, function() {
				            if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
								//console.log('height');
								var height_message = {
									"height" : $('body').height(),
									"src" : window.location.href
								}

								event_source.postMessage(JSON.stringify(height_message), event_origin);
							}
			            });
			        }
			    });

				//widget embed advanced options
				$(container).find('.embed_textarea').val(embedForm('100%'));

				$(container).find('.embedSize').change(function() {
					var value = $(container).find('.embedSize:checked').val();

					switch(value) {
						case "size1":
							$(container).find('.embed_textarea').val(embedForm("300px"))
							break;
						case "size2":
							$(container).find('.embed_textarea').val(embedForm("600px"))
							break;
						case "embed-custom":
							$(container).find('.embed_textarea').val(embedForm($(container).children('.embed_custom_box_input').val()));
							break;
					}
				});

				$(container).find('.embed_custom_box_input').on('keyup', function() {
					var value = $(this).val();

					if ($(container).find('.embed_custom').is(':checked')) {
						$(container).find('.embed_textarea').val(embedForm(value));
					}
				});

				$(container).find('.embed-style-type').change(function() {
					$(container).find('.embed_textarea').val(embedForm());
				});

				$(container).find('.embed-layout-type').change(function() {
					$(container).find('.embed_textarea').val(embedForm());
				});

				function embedForm(size) {
					if (size == undefined) {
						var size = $(container).find('.embedSize:checked').val();

						switch(size) {
							case "size1":
								size = "300px"
								break;
							case "size2":
								size = "600px"
								break;
							case "embed-custom":
								size = $(container).find('.embed_custom_box_input').val()
								break;
							case undefined:
								size = '100%'
								break;
						}
					}

					var form_url = $(container).find('.hidden-url').val();
					var form_name = $(container).find('.hidden-name').val();
					var form_referer = $(container).find('.hidden-referrer').val();
					var form_type = $(container).find('.hidden-type').val();

					if ($(container).find('.js-referrer_code_select').select2('val')) {
						form_referer = form_referer + '&referrer=' + $(container).find('.js-referrer_code_select').select2('val');
					}

					var widgetText = "";

					var css = $(container).find('.embed-style-type').val();

					var layout = $(container).find(".embed-layout-type").val();

					if ($(container).find('.js-fundraising-embed').length) {

						if (css == 'embed-style-standard') {
							var styles = '';
						} else if (css == 'embed-style-layout') {
							var styles = '&css=whitelabel';
						} else {
							var styles = '&css=false';
						}

						if ($(container).hasClass('v3') || $(container).parents('.v3').length) {
							if (layout == 'embed-layout-standard') {
								widgetText += "<script src='https://"+form_url+"/widgets/v3/" + form_type + "/"+form_name+"?format=js"+form_referer+styles+"'></script>";
							} else {
								widgetText += "<script src='https://"+form_url+"/widgets/v3/" + form_type + "/"+form_name+"?format=js"+form_referer+styles+"&style=full'></script>";
							}
						} else {
							if (layout == 'embed-layout-standard') {
								widgetText += "<script src='https://"+form_url+"/widgets/v2/" + form_type + "/"+form_name+"?format=js"+form_referer+styles+"'></script>";
							} else {
								widgetText += "<script src='https://"+form_url+"/widgets/v2/" + form_type + "/"+form_name+"?format=js"+form_referer+styles+"&style=full'></script>";
							}
						}
						

						widgetText += "<div id='can-" + form_type + "-area-"+form_name+"' style='width: "+size+"'><!-- this div is the target for our HTML insertion --></div>";

					} else {
						//console.log($(container));
						if ($(container).hasClass('v3') || $(container).parents('.v3').length) {
							if (css == 'embed-style-standard') {
								widgetText += "<link href='https://"+form_url+"/css/style-embed-v3.css' rel='stylesheet' type='text/css' />";
							} else if (css == 'embed-style-layout') {
								widgetText += "<link href='https://"+form_url+"/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' />";
							}
	
							
	
							if (layout == 'embed-layout-standard') {
								widgetText += "<script src='https://"+form_url+"/widgets/v3/" + form_type + "/"+form_name+"?format=js"+form_referer+"'></script>";
							} else {
								widgetText += "<script src='https://"+form_url+"/widgets/v3/" + form_type + "/"+form_name+"?format=js"+form_referer+"&style=full'></script>";
							}
						} else {
							if (css == 'embed-style-standard') {
								widgetText += "<link href='https://"+form_url+"/css/style-embed.css' rel='stylesheet' type='text/css' />";
							} else if (css == 'embed-style-layout') {
								widgetText += "<link href='https://"+form_url+"/css/style-embed-whitelabel.css' rel='stylesheet' type='text/css' />";
							}
	
							
	
							if (layout == 'embed-layout-standard') {
								widgetText += "<script src='https://"+form_url+"/widgets/v2/" + form_type + "/"+form_name+"?format=js"+form_referer+"'></script>";
							} else {
								widgetText += "<script src='https://"+form_url+"/widgets/v2/" + form_type + "/"+form_name+"?format=js"+form_referer+"&style=full'></script>";
							}
						}

						widgetText += "<div id='can-" + form_type + "-area-"+form_name+"' style='width: "+size+"'><!-- this div is the target for our HTML insertion --></div>";

					}

					return widgetText
				}
				
				// referrer code select functions
			    if ($(container).find('.js-referrer_code_select').length) {

				    $(container).find('.js-referrer_code_select').on('change', function() {
					    //change embed code
					    $(container).find(".js-embed_textarea").val(embedForm());
					    
					    if ($(container).find('.js-referrer_code_select').select2('val')) {
						    $(container).find('.js-direct_link').val($(container).find('.js-direct_link_hidden').val() + 'referrer=' + $(container).find('.js-referrer_code_select').select2('val'));
						    
						    $(container).find('.js-facebook_link').attr('href', $(container).find('.js-facebook_link_hidden').val().replace(/(source%3D.+%26)/gi, "$1referrer%3D" + $(container).find('.js-referrer_code_select').select2('val')));
						    $(container).find('.js-facebook_link').attr('onclick', $(container).find('.js-facebook_click_link_hidden').val().replace(/(source%3D.+%26)/gi, "$1referrer%3D" + $(container).find('.js-referrer_code_select').select2('val')));
						    
						    $(container).find('.js-twitter_link').attr('href', $(container).find('.js-twitter_link_hidden').val().replace(/(source%3D.+%26)/gi, "$1referrer%3D" + $(container).find('.js-referrer_code_select').select2('val')));
						    $(container).find('.js-twitter_link').attr('onclick', $(container).find('.js-twitter_click_link_hidden').val().replace(/(source%3D.+%26)/gi, "$1referrer%3D" + $(container).find('.js-referrer_code_select').select2('val')));
						    
						    $(container).find('.js-gplus_link').attr('href', $(container).find('.js-gplus_link_hidden').val().replace(/(source=.+&)/gi, "$1referrer=" + $(container).find('.js-referrer_code_select').select2('val')));
						    $(container).find('.js-gplus_link').attr('onclick', $(container).find('.js-gplus_click_link_hidden').val().replace(/(source=.+&)/gi, "$1referrer=" + $(container).find('.js-referrer_code_select').select2('val')));
						    
						    $(container).find('.js-share_email').val($(container).find('.js-share_email_hidden').val().replace(/(source=.+&)/gi, "$1referrer=" + $(container).find('.js-referrer_code_select').select2('val')));
					    } else {
						    $(container).find('.js-direct_link').val($(container).find('.js-direct_link_hidden').val());
						    
						    $(container).find('.js-facebook_link').attr('href', $(container).find('.js-facebook_link_hidden').val());
						    $(container).find('.js-facebook_link').attr('onclick', $(container).find('.js-facebook_click_link_hidden').val());
						    
						    $(container).find('.js-twitter_link').attr('href', $(container).find('.js-twitter_link_hidden').val());
						    $(container).find('.js-twitter_link').attr('onclick', $(container).find('.js-twitter_click_link_hidden').val());
						    
						    $(container).find('.js-gplus_link').attr('href', $(container).find('.js-gplus_link_hidden').val());
						    $(container).find('.js-gplus_link').attr('onclick', $(container).find('.js-gplus_click_link_hidden').val());
						    
						    $(container).find('.js-share_email').val($(container).find('.js-share_email_hidden').val());
					    }
					    
				    });

			    }

				$(container).find('.comment-reply-link').click(function() {

				    var commentID = $(this).data("id");
				    var parentId = $(this).data("parent");

				    $(container).find('#respond').remove();
				    $(container).find('#respond-top').hide();

				    var commentReplyHTML =  '<div id="respond">' +
				                              $(container).find("#replyHiddenForm").html()+
				                            '</div>';



				    //create the new comment form
				    $(container).find('#comment' + commentID + ' .the_comment').first().append(commentReplyHTML);
				    //not sure why this is needed, but ie wants it
				    $(container).find('#comments_wrap #comment-text').val('');
				    setTimeout(function() {
					    $(container).find('#respond textarea').val('');
					}, 10);

				    //add the comment it to the reply

				    if(parentId == undefined)
				      $(container).find("#comment"+commentID+" .hiddenComment").attr('value',commentID);
				    else
				      $(container).find("#comment"+commentID+" .hiddenComment").attr('value',parentId);
 
				    if ($(container).hasClass('v3')) {
					    $(container).find("#comment"+commentID+" form").append('<input type="hidden" name="version" value="v3" />');
				    }

// 						$(container).find("#comment"+commentID+" form").append(<%= f.hidden_field(:redirect, {:value => @redirect_url}).to_s %>); 

				    //add the cancel click handler
				    $(container).find('.cancel-reply-link').click(function() {
				      $(container).find('#respond').remove();
				      $(container).find('#respond-top').show();
				    });

				    // call the validation again
				    canValidate();
				});

			}

			$('#' + widget_id + ' #log-out').click(function(e) {
				var container = $(this).parents('.can_embed');

				if ((container.hasClass('v2') || container.hasClass('v3')) && ($.support.cors || !$.ajaxTransport || !window.XDomainRequest)) {

					e.preventDefault();

					container.find('.ajax_error').slideUp(function() {
						$(this).remove();
					});
					container.find('.ajax-loading').show();
					container.find('input[type=submit]').attr('disabled',true).addClass('disabled');

					$.ajax({
						type: "GET",
						url: $(this).data('ajax-redirect') + '&css=' + getURLParameter('css'),
						crossDomain: true,
						dataType: 'html',
						cache: false,
						xhrFields: {
			                withCredentials: true
			            }/*
		,
			            headers: {
				            'can-origin': window.location.origin
			            }
		*/
					}).done(function(data) {
						var temp_embed_height = container.parent().height();
						temp_embed_width = container.parent().width();
						//console.log(temp_embed_width);

						container.parent().css('height',temp_embed_height);

						container.parent().fadeOut(function() {
							if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
								$(this).find('.can_embed').remove();
								$(this).prepend(data);
							} else {
								$(this).html(data);
							}

							canEmbed($, $(this).attr('id'));
							
							if (typeof(gmaps_initialize) !== 'undefined' && $('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length) {
								gmaps_initialize($('#' + $(this).attr('id') + ' #can_embed_form #map_canvas'));
							} else if (typeof(window["gmaps_initialize_" + $(this).attr('id')]) !== 'undefined' && $('#' + $(this).attr('id') + ' #can_embed_form #map_canvas').length) {
								window["gmaps_initialize_" + $(this).attr('id')]();
							} 
							 
							$(this).css('height','auto');
							$(this).fadeIn(function() {

								var container_id = $(this).attr('id');

								//console.log(container_id);

								if (!$(this).hasClass('can_fundraising_widget') && !$(this).hasClass('js-ticketed_event_widget')) {
									if (typeof(can_event_id[container_id + '_loaded']) != 'undefined') {
										document.dispatchEvent(can_event_id[container_id + '_loaded']);
									}
									document.dispatchEvent(can_event_generic);
								}

								if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && typeof(event_origin) !== 'undefined' ) {
									//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
									//console.log($('body').outerHeight(true));

									//setTimeout(function() {
										//console.log($('body').outerHeight(true));
										var height_message = {
											"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')),
											"src" : window.location.href
										}
										event_source.postMessage(JSON.stringify(height_message), event_origin);
									//}, 200);
								}
							});

						});
					}).fail(function() {
						container.find('.ajax-loading').hide().after('<p class="small centertext redtext ajax_error" style="display:none;">' + an_javascript_translation.an_error_has_occured_please_try_again + '</p>');
						container.find('input[type=submit]').attr('disabled',false).removeClass('disabled');
						container.find('.ajax_error').slideDown(function() {
							if ($('.can_fundraising_widget, .js-ticketed_event_widget').length && typeof(event_origin) !== 'undefined' ) {
								//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
								//console.log($('body').outerHeight(true));
	
								//setTimeout(function() {
									//console.log($('body').outerHeight(true));
									var height_message = {
										"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')),
										"src" : window.location.href
									}
									event_source.postMessage(JSON.stringify(height_message), event_origin);
								//}, 200);
							}
						});
						if ($('.can_fundraising_widget, .js-ticketed_event_widget').length) {
							window.top.location = container.find('#log-out').attr('href');
						} else {
							window.top.location = container.find('#log-out').attr('href');
						}
					});
				}
			});

	        // fundraising rule additions
		    $('.donation_info_split input, .js-ticketed_event_ticket_number').each(function(i) {
		    	$(this).rules('add', {
			    	require_from_group: [1, '.required_group']
		    	});
		    });

			function iframe_listener(event){
				//console.log(event.origin);
				//if (event.origin != 'http://clients.designcrumbs.com') {

					//console.log(event.data);

					if (event.data !== 'get_height') {
						try {
							event_data = JSON.parse(event.data);
						}
						catch(err) {
							
						}
						
						//console.log(event_data);
					}

					//send back height
					if (event.data === 'get_height') {

						//console.log(window.location.href);
						//console.log('height');
						//console.log($('html').height());
						var height_message = {
							"height" : $('html').height(),
							"src" : window.location.href
						}

						event.source.postMessage(JSON.stringify(height_message), event.origin);

						event_origin = event.origin;
						event_source = event.source;
						//console.log(event_origin);
					}

					//pull in css rules
					//console.log(event_data.css_files);
					if (typeof(event_data) !== 'undefined' && typeof(event_data.css_files) !== 'undefined') {
					//console.log(event_data.css_files.split(','));
						if (!$('link[rel="stylesheet"]#default').length) {
							var rulesForCssText = function (styleContent) {
							    var doc = document.implementation.createHTMLDocument(""),
							        styleElement = document.createElement("style");

							   styleElement.textContent = styleContent;
							    // the style will only be parsed once it is added to a document
							    doc.body.appendChild(styleElement);

								if (styleElement.sheet.cssRules) {
									return styleElement.sheet.cssRules;
								} else if (styleElement.sheet.rules) {
									return styleElement.sheet.rules;
								}

							};

							//console.log(rulesForCssText(event.data.css_tags));
							var sanitized_css_text = '';

							//console.log(event.data.css_files);

							$.each(rulesForCssText(event_data.css_files), function() {
								//console.log(this.cssText);
								sanitized_css_text = sanitized_css_text + ' ' + this.cssText;
							});

							$('head').prepend('<style>' + sanitized_css_text + '</style>');
						}
					}


					if (typeof(event_data) !== 'undefined' && typeof(event_data.css_tags) !== 'undefined') {
						//console.log(event.data.css_tags);
						if (!$('link[rel="stylesheet"]').length) {
							var rulesForCssText = function (styleContent) {
							    var doc = document.implementation.createHTMLDocument(""),
							        styleElement = document.createElement("style");

							   styleElement.textContent = styleContent;
							    // the style will only be parsed once it is added to a document
							    doc.body.appendChild(styleElement);

								if (styleElement.sheet.cssRules) {
									return styleElement.sheet.cssRules;
								} else if (styleElement.sheet.rules) {
									return styleElement.sheet.rules;
								}

							};

							//console.log(rulesForCssText(event.data.css_tags));
							var sanitized_css_text = '';

							//console.log(event.data.css_tags);

							$.each(rulesForCssText(event_data.css_tags), function() {
								sanitized_css_text = sanitized_css_text + ' ' + this.cssText;
							});

							$('head').prepend('<style>' + sanitized_css_text + '</style>');
						}
					}

					// send new height data after css is applied
					//console.log('height');
					var height_message = {
						"height" : $('html').height(),
						"src" : window.location.href
					}

					if (typeof event_origin !== 'undefined') {
						//setTimeout(function() {
							//console.log('height');
							event_source.postMessage(JSON.stringify(height_message), event_origin);
						//}, 5000);
					}

				//}

			}

			if ($('#donate_form, .donate_not_available, .js-ticketed_event_widget').length) {
				if (window.addEventListener){
				  	addEventListener("message", iframe_listener, false);
				} else {
				  	attachEvent("onmessage", iframe_listener);
				}
			}

		/*
if ($('.can_fundraising_widget').length && typeof(event_origin) !== 'undefined' ) {

			//console.log($('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom')));
			//console.log($('body').outerHeight(true));

			//setTimeout(function() {
				//console.log($('body').outerHeight(true));
				var height_message = {
					"height" : $('.can_embed').outerHeight(true) + parseInt($('body').css('margin-top')) + parseInt($('body').css('margin-bottom')) + parseInt($('body').css('padding-top')) + parseInt($('body').css('padding-bottom'))
				}
				top.postMessage(JSON.stringify(height_message), event_origin);
			//}, 200);
		}
*/

		return true;


	}



//});
