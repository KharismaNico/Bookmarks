// common.js

function getPageOffset(pageWidth) {

	var inWidth = (window.innerWidth) ? window.innerWidth : document.body.clientWidth;
	if (inWidth < pageWidth) {
		return 0;
	} else {
		return Math.round((inWidth - pageWidth) / 2);
	}
	
}

function onResizeCallback() {
	document.getElementById(textId).style.left = textOffset + getPageOffset(pageWidth) + "px";
	document.getElementById(photoId).style.left = textOffset + getPageOffset(pageWidth) + "px";
	document.getElementById(dvdBadgeId).style.left = dvdBadgeOffset + getPageOffset(pageWidth) + "px";
}

function hideOverlay() {
	$("#dim").fadeOut();
	$("#dvdBox").fadeOut();
}

function buyDVDNot() {
	alert("Available again soon. Please try back. Thanks.");
}

function buyDVD() {
	document.forms[0].submit();
}

	$(document).ready(function(){
			$("#dim").css("height", $(window).height());
			
			document.forms[0].target = "_blank";
			
			$("#dvdBadge").click(function(){
				$("#dim").fadeIn();
				$("#dvdBox").fadeIn();
				$(document).click(function() {
					hideOverlay();
				});
				return false;
			});
			
	});
	
	$(window).bind("resize", function(){
		$("#dim").css("height", $(window).height());
	});
