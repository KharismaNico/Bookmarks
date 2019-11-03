/*
 * @licstart  The following is the entire license notice for the
 *    JavaScript code in this page.
 *
 * Venture Theme
 * Copyright (C) 2014  Saran Quardz
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see
 * <http://www.gnu.org/licenses/>.
 *
 * @licend  The above is the entire license notice for the JavaScript
 *   code in this page.
 */
jQuery( function($) {

	$(document).ready(function(){

		// Main menu superfish
		$('#main-menu > ul').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			cssArrows: false,
			disableHI: true
		});

		// Mobile Menu
		$('#navigation-toggle').sidr({
			name: 'sidr-main',
			source: '#sidr-close, #site-navigation',
			side: 'left'
		});
		$(".sidr-class-toggle-sidr-close").click( function() {
			$.sidr('close', 'sidr-main');
			return false;
		});

		// Close the menu on window change
		$(window).resize(function() {
			$.sidr('close', 'sidr-main');
		});

		// Fixed Header
		//$("#header-wrap.fixed-header").sticky({topSpacing:0});

	}); // End doc ready

	$(window).load(function(){
		// Homepage FlexSlider

		$('#main-menu > ul > li > a.sf-with-ul').append('<i class="fa fa-angle-down"></i>');
		$('#main-menu > ul > li li > a.sf-with-ul').append('<i class="fa fa-angle-right"></i>');

		$('#homepage-slider').flexslider({
			animation: 'slide',
			slideshow: true,
			smoothHeight: true,
			controlNav: false,
			directionNav: true,
			prevText: '<span class="fa fa-angle-left"></span>',
			nextText: '<span class="fa fa-angle-right"></span>',
			controlsContainer: ".flexslider-container"
		});

	}); // End on window load

});
