(function(){var ajaxurl=window.ajaxurl||'/wp-admin/admin-ajax.php',data=window.wpcomVipAnalytics,dataQs,percent;if(typeof XMLHttpRequest==='undefined'){return;}
if(!data){return;}
percent=~~data.percentToTrack;if(percent&&percent<100&&(~~((Math.random()*100)+1)>percent)){return;}
dataQs='action=wpcom_vip_analytics';for(var key in data){if(key==='percentToTrack'){continue;}
if(data.hasOwnProperty(key)){dataQs+='&'+
encodeURIComponent(key).replace(/%20/g,'+')+'='+
encodeURIComponent(data[key]).replace(/%20/g,'+');}}
function sendInfo(){var xhr=new XMLHttpRequest();xhr.open('POST',ajaxurl,true);xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');xhr.send(dataQs);}
function docReady(){setTimeout(function(){sendInfo();},1500);}
if(document.readyState==='complete'){docReady.apply();}
else if(document.addEventListener){document.addEventListener('DOMContentLoaded',docReady,false);}
else if(document.attachEvent){document.attachEvent('onreadystatechange',docReady);}})();