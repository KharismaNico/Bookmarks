// JavaScript Document

jQuery(function(){
  var menuOffset = jQuery('#zone-menu-wrapper')[0].offsetTop;
  jQuery(document).bind('ready scroll',function() {
    var docScroll = jQuery(document).scrollTop();
    if(docScroll >= menuOffset) {
      jQuery('#zone-menu-wrapper').addClass('fixed').css('width');
    } else {
      jQuery('#zone-menu-wrapper').removeClass('fixed').removeAttr("width");
    }
  });
  
  jQuery(".cng-search-toggle-trigger").click(function() {
		  jQuery("#block-search-form").toggle();
		  return false;   
  });
});





;
// JavaScript Document

let iosAutoPhoneRemoveMeta = document.createElement('meta');
iosAutoPhoneRemoveMeta.setAttribute('name', 'format-detection');
iosAutoPhoneRemoveMeta.content = 'telephone=no';
document.getElementsByTagName('head')[0].appendChild(iosAutoPhoneRemoveMeta);

// jQuery(function(){
//   var menuOffset = jQuery('#zone-menu-wrapper')[0].offsetTop;
//   jQuery(document).bind('ready scroll',function() {
//     var docScroll = jQuery(document).scrollTop();
//     if(docScroll >= menuOffset) {
//       jQuery('#zone-menu-wrapper').addClass('fixed').css('width');
//     } else {
//       jQuery('#zone-menu-wrapper').removeClass('fixed').removeAttr("width");
//     }
//   });
  
//   jQuery(".cng-search-toggle-trigger").click(function() {
// 		  jQuery("#block-search-form").toggle();
// 		  return false;   
//   });
// });




;
