jQuery(document).ready(function($) {

  // $('#edit-zcl').after('<div class="astr">*</div>');
  //$('#edit-zcl').after('<span class="form-required" title="This field is required.">*</span>');
  
  jQuery('.form-item.form-type-textfield.form-item-zcl').css({
   'float':'left',  
   'margin-right':'10px',  
   'position':'relative',  
   });

   jQuery('.form-item.form-type-textfield.form-item-zcl4').css('float','left');

  /* $('.astr').css({
   'color':'red',
   'position':'absolute',
   'right':'9px',
   'top':'33px',
   });
  */


 jQuery('.page-zip-code-multiple #block-system-main, .page-zip-code-authentication-failed #block-system-main').css('display','none');

   // clears the float on the zip code lookup page
   jQuery('.page-zip-code-lookup .form-item:last-of-type').after('<div style="clear:both;"></div>');
   
   console.log(Drupal.settings.congress_formloc_validation);

   if( Drupal.settings.congress_formloc_validation !== undefined && Drupal.settings.congress_formloc_validation.WebformctJsInsert !== '' ){
       jQuery('body').prepend(Drupal.settings.congress_formloc_validation.WebformctJsInsert);
     }

});

;
jQuery(document).ready(function($) {

    
  jQuery( "body" ).addClass( "claro" );

  var pathToCSV = '/'+Drupal.settings.congress_office_location_settings.pathtomod+'/';
  var dcaddy = Drupal.settings.congress_office_location_settings.dcaddy;    
  var addyList = Drupal.settings.congress_office_location_settings.addylist;
  var state = Drupal.settings.congress_office_location_settings.state;
  var district = Drupal.settings.congress_office_location_settings.district;
  var clat = Drupal.settings.congress_office_location_settings.clat;
  var clng = Drupal.settings.congress_office_location_settings.clng;
  var dcofc = Drupal.settings.congress_office_location_settings.dcofc;
  var dcofctitle = Drupal.settings.congress_office_location_settings.dcofctitle;
  var dcofccontent = Drupal.settings.congress_office_location_settings.dcofccontent;
  var detail_url = Drupal.settings.congress_office_location_settings.detail_url;


/*
console.log("pathToCSV ==>  " + pathToCSV);
console.log("dcaddy ==>  " + dcaddy);
console.log("addyList ==>  " + addyList);
console.log("state ==>  " + state);
console.log("district ==>  " + district);
console.log("clat ==>  " + clat);
console.log("clng ==>  " + clng);
console.log("dcofc " + dcofc);
console.log("dcofctitle ==>  " + dcofctitle);
console.log("dcofccontent ==>  " + dcofccontent);
console.log("detail_url ==>  " + detail_url);
*/


    var dialogdc;

    require([
      "esri/map",
      "esri/layers/FeatureLayer",
      "esri/renderers/SimpleRenderer",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/Color",
      "esri/tasks/query",
      "esri/dijit/Popup",
      "esri/dijit/PopupTemplate",
      "esri/symbols/PictureMarkerSymbol",
      "dojo/dom-class",
      "dojo/dom-construct",
      "dojo/on",
      "dijit/TooltipDialog", 
      "dijit/popup",
      "dojo/dom-style",
      "esri/lang",
      "esri/graphic",
      "dojo/domReady!"

    ], function(Map, FeatureLayer,SimpleRenderer, SimpleFillSymbol,SimpleLineSymbol, Color, Query, Popup, PopupTemplate, PictureMarkerSymbol,  domClass, domConstruct, on, TooltipDialog, dijitPopup, domStyle, esriLang, Graphic
    ) {

// this is what we had        var popup = new Popup(null, domConstruct.create("div"));
       var popup = new Popup({
            titleInBody: true
      }, domConstruct.create("div"));
      //Add the light theme which is customized further in the <style> tag at the top of this page
        domClass.add(popup.domNode, "light");
      
        var map = new Map("dcmap", {
              basemap: "streets",
              infoWindow: popup,
              zoom: 16,
              }
            );

        var usdistrictlayer = new FeatureLayer("https://services1.arcgis.com/o90r8yeUBWgKSezU/arcgis/rest/services/116th_Congressional_Districts_incl_Territories/FeatureServer/0");
        var dynamicTitle = dcofctitle;
        var dynamicDescription = dcaddy;
        var template = new PopupTemplate({
            title: "{Title}",
            description: dynamicDescription
            });


        var dcOfficeLayer = new FeatureLayer("https://services1.arcgis.com/o90r8yeUBWgKSezU/arcgis/rest/services/DC_Offices/FeatureServer/0", {
            infoTemplate: template,
            outFields: ["*"],
            });

        dcOfficeLayer.setDefinitionExpression("OfficeKey = '"+dcofc+"'");
        var query = new Query();
        
        query.where = "OfficeKey = '"+dcofc+"'";
console.log("line 91");
        dcOfficeLayer.queryFeatures(query, function(result){
          var extent = esri.graphicsExtent(result.features);
          map.setExtent(extent,true);
        });

        map.addLayers([dcOfficeLayer]);     

        map.on("load", function() {
          map.disableScrollWheel();
        });

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        }
        else
        {
          console.log("navigator.userAgent is ===> " + navigator.userAgent);
          var dialog = new TooltipDialog({
              id: "tooltipDialog_DCMap",
              style: "position: absolute; width: 250px; font: normal normal normal 10pt Helvetica;z-index:100;"
              });

          dialog.startup();
        
          //close the dialog when the mouse leaves the highlight graphic

          map.on("load", function(){
             map.graphics.enableMouseEvents();
             map.graphics.on("mouse-out", closeDialog);
          });

          dcOfficeLayer.on("mouse-out", closeDialog);
        
          dcOfficeLayer.on("mouse-over", function(evt){
          //   var t = "<b>${Member_Name}<br/><hr><b>${Address}<br/>${City}, ${State}, ${Zip}<br>${Phone}"
          var t = dynamicTitle;
          var content = esriLang.substitute(evt.graphic.attributes,t);    
          dialog.setContent(content);
          domStyle.set(dialog.domNode);
          dijitPopup.open({
            popup: dialog,
            x: evt.pageX,
            y: evt.pageY
          });
        });

        function closeDialog() {
         dijitPopup.close(dialog);
         }
}
        dojo.connect(dcOfficeLayer, "onClick", function(e){
           map.centerAt(e.mapPoint);
        });

        map.on("pan-end", reposition);

        function reposition() {
          if (popup.isShowing === true){
            popup.reposition();
          }
        }
  });//require END


});//document.ready END 


;
jQuery(document).ready(function($) {

    $path = window.location.href + '/ips';
    $('.view-webform-submissions').before('<div>To view IPs collected from "REMOTE_ADDR" and "HTTP_X_FORWARDED_FOR", <a href="'+$path+'">click here</a>.</div>');

});

;
/**
 * @file
 * JavaScript integrations between the Caption Filter module and particular
 * WYSIWYG editors. This file also implements Insert module hooks to respond
 * to the insertion of content into a WYSIWYG or textarea.
 */
(function ($) {

$(document).bind('insertIntoActiveEditor', function(event, options) {
  if (options['fields']['title'] && Drupal.settings.captionFilter.widgets[options['widgetType']]) {
    options['content'] = '[caption caption="' + options['fields']['title'].replace(/"/g, '\\"') + '"]' + options['content'] + '[/caption]';
  }
});

Drupal.captionFilter = Drupal.captionFilter || {};

Drupal.captionFilter.toHTML = function(co, editor) {
  return co.replace(/(?:<p>)?\[caption([^\]]*)\]([\s\S]+?)\[\/caption\](?:<\/p>)?[\s\u00a0]*/g, function(a,b,c){
    var id, cls, w, tempClass;

    b = b.replace(/\\?'|\\&#39;|\\&#039;/g, '&#39;').replace(/\\"|\\&quot;/g, '&quot;');
    c = c.replace(/\\&#39;|\\&#039;/g, '&#39;').replace(/\\&quot;/g, '&quot;');
    id = b.match(/id=['"]([^'"]+)/i);
    cls = b.match(/align=['"]([^'"]+)/i);
    ct = b.match(/caption=['"]([^'"]+)/i);
    w = c.match(/width=['"]([0-9]+)/);

    id = ( id && id[1] ) ? id[1] : '';
    cls = ( cls && cls[1] ) ? 'caption-' + cls[1] : '';
    ct = ( ct && ct[1] ) ? ct[1].replace(/\\\\"/,'"') : '';
    w = ( w && w[1] ) ? parseInt(w[1])+'px' : 'auto';

    if (editor == 'tinymce')
      tempClass = (cls == 'caption-center') ? 'mceTemp mceIEcenter' : 'mceTemp';
    else if (editor == 'ckeditor')
      tempClass = (cls == 'caption-center') ? 'mceTemp mceIEcenter' : 'mceTemp';
    else
      tempClass = '';

    if (ct) {
      return '<div class="caption ' + cls + ' ' + tempClass + ' draggable"><div class="caption-width-container" style="width: ' + w + '"><div class="caption-inner">' + c + '<p class="caption-text">' + ct + '</p></div></div></div><br />';
    }
    else {
      return '<div class="caption ' + cls + ' ' + tempClass + ' draggable"><div class="caption-width-container" style="width: ' + w + '"><div class="caption-inner">' + c + '</div></div></div><br />';
    }
  });
};

Drupal.captionFilter.toTag = function(co) {
  return co.replace(/(<div class="caption [^"]*">)\s*<div[^>]+>\s*<div[^>]+>(.+?)<\/div>\s*<\/div>\s*<\/div>\s*/gi, function(match, captionWrapper, contents) {
    var align;
    align = captionWrapper.match(/class=.*?caption-(left|center|right)/i);
    align = (align && align[1]) ? align[1] : '';
    caption = contents.match(/\<p class=\"caption-text\"\>(.*)\<\/p\>/);
    caption_html = (caption && caption[0]) ? caption[0] : '';
    caption = (caption && caption[1]) ? caption[1].replace(/"/g, '\\"') : '';
    contents = contents.replace(caption_html, '');

    return '[caption' + (caption ? (' caption="' + caption + '"') : '') + (align ? (' align="' + align + '"') : '') + ']' + contents + '[/caption]';
  });
};

})(jQuery);
;
/*
Generic toggle script
Example of how to use this...

<div>
    <div class="toggle-trigger" data-switch=".the-selector-you-want-to-toggle">
        <img src="http://member-source.house.gov/sites/all/themes/member_omega2/images/burger-open.png" class="toggle-on" >
        <img src="http://member-source.house.gov/sites/all/themes/member_omega2/images/burger-close.png" class="toggle-off" >
    </div>
</div>

<div class="the-selector-you-want-to-toggle">
  <h1>Toggled!</h1>
</div>

*/


jQuery(document).ready(function() {
    var $ = jQuery;
    $(".toggle-area").hide(); 
    $(".toggle-trigger").click(function(){
        var toggleAreaSelector = $(this).attr('data-switch');
        $(toggleAreaSelector).slideToggle("fast");
        $(this).toggleClass('toggled');
        return false;
    });
	// Generic toggle END
	// toggle based on checkbox state (for tour forms) 

	$(".cng-toggle-me").hide();
	$(".cng-toggle-trigger").click(function() {
    if ($(this).is(":checked")) {
      $(".cng-toggle-me").show(300);
    } else {
      $(".cng-toggle-me").hide(200);
    }
	});


});

;
