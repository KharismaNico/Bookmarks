
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"469",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";return window.vertical?window.vertical:a+=",["escape",["macro",0],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=window.vertical?window.vertical+window.location.pathname+window.location.search:window.location.pathname+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"script:contains('BII')\").text().match(\/BII.user.id = \"(.*)\";\/)[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"script:contains('BII')\").text().match(\/BII.sub.id = \"(.*)\"\/)[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003Cdocument.cookie.indexOf(\"utmcsr\\x3dtaboola\"))return\"taboola\"})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return vertical+\"\/\"+BI.post.name+\"\/",["escape",["macro",6],7],"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"platform\";a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\");a=a.exec(location.search);return null==a?\"\":decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))})();"]
    },{
      "function":"__v",
      "vtp_name":"vpv",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",9],7],"\";virtualPageSplit=b.split(\"#\");var a=\"\/\"+virtualPageSplit[0].replace(\/\\\/\/g,\"\")+\"#\"+virtualPageSplit[1];b=\/^$|^undefined$\/.test(b)?window.vertical?window.vertical+window.location.pathname+window.location.search:window.location.pathname+window.location.search:window.vertical?window.vertical+a+window.location.search:a+window.location.search;try{a=b;if(-1\u003Ca.indexOf(\"?\")\u0026\u0026-1\u003Ca.indexOf(\"#\")){if(a.indexOf(\"?\")\u003Ea.indexOf(\"#\")){var c=a.split(\"#\")[0];a.split(\"#\")[1].split(\"?\");\nvar d=a.split(\"#\")[1].split(\"?\")[1];a=c+\"?\"+d}a.indexOf(\"#\")\u003Ea.indexOf(\"?\")\u0026\u0026(c=a.split(\"?\")[0],d=a.split(\"?\")[1].split(\"#\")[0],a.split(\"?\")[1].split(\"#\"),a=c+\"?\"+d)}else-1\u003Ca.indexOf(\"?\")?(c=a.split(\"?\")[0],d=a.split(\"?\")[1],a=c+\"?\"+d):-1\u003Ca.indexOf(\"#\")\u0026\u0026(c=a.split(\"#\")[0],a.split(\"#\"),a=c);b=a}catch(e){b=a}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){a:{var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"date\"==a[i].getAttribute(\"name\")){a=a[i].getAttribute(\"content\");break a}a=\"\"}if(!a)return!1;a=a.split(\"-\");a=new Date(a[0],parseInt(a[1],10)-1,a[2]);var b=new Date(2015,6,16,0,0,0);return a\u003Cb?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\/^$|^undefined$\/.test(\"",["escape",["macro",9],7],"\")?window.vertical?window.vertical+window.location.pathname+window.location.search:window.location.pathname+window.location.search:window.vertical?window.vertical+\"",["escape",["macro",9],7],"\"+window.location.search:\"",["escape",["macro",9],7],"\"+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\/^$|^undefined$\/.test(\"",["escape",["macro",9],7],"\")?window.vertical?window.vertical+window.location.pathname+window.location.search:window.location.pathname+window.location.search:window.vertical?window.vertical+\"",["escape",["macro",9],7],"\"+window.location.search:\"",["escape",["macro",9],7],"\"+window.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=navigator.userAgent||navigator.vendor||window.opera,b=\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i.test(a)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(a.substr(0,\n4));a=\/ipad|android.+\\d safari|tablet\/i.test(a);return b?\"mobile\":a?\"mobile tablet\":\"desktop\"})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=jQuery('a[href*\\x3d\"utm_source\"][href*\\x3d\"intelligence.businessinsider.com\"],a[href*\\x3d\"utm_source\"][href*\\x3d\"bii_www.businessinsider.com\"],a[href*\\x3d\"utm_source\"][href*\\x3d\"www.businessinsider.com\/intelligence\/\"]'),d=[c[0]],e=[],b=function(a,c){a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");var b=new RegExp(\"[\\\\?amp;\\x26]\"+a+\"\\x3d([^\\x26#]*)\");b=b.exec(c.search);return null===b?\"\":decodeURIComponent(b[1].replace(\/\\+\/g,\" \"))};linkCampaign=b(\"utm_campaign\",c[0]);c.each(function(a){b(\"utm_campaign\",\nc[a])!==linkCampaign\u0026\u0026d.push(c[a])});d.forEach(function(a){e.push({id:b(\"utm_term\",a),name:b(\"utm_campaign\",a),creative:b(\"utm_content\",a),position:\"",["escape",["macro",16],7],"\"})});return{ecommerce:{promoView:{promotions:e}}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=getTrafficSrcCookie().ga_source;return a=0\u003Ca.length?a:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=getTrafficSrcCookie().ga_medium;return a=0\u003Ca.length?a:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=getTrafficSrcCookie().ga_campaign;return a=0\u003Ca.length?a:null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"publisher"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"createUser"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],";return!a\u0026\u0026",["escape",["macro",22],8,16],"?\"Business Insider\":a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(-1\u003C",["escape",["macro",24],8,16],".indexOf(\"amp.businessinsider.com\"))return ",["escape",["macro",24],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){tp=window.tp||[];tp.push([\"addHandler\",\"meterActive\",function(a){PianoMeterSeen=a.views;PianoMeterMax=a.maxViews;PianoMeterLeft=a.viewsLeft}]);return PianoMeterSeen})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){tp=window.tp||[];tp.push([\"addHandler\",\"meterActive\",function(a){PianoMeterMax=a.maxViews}]);return PianoMeterMax})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){tp=window.tp||[];tp.push([\"addHandler\",\"meterActive\",function(a){PianoMeterLeft=a.viewsLeft}]);return PianoMeterLeft})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){tp=window.tp||[];tp.push([\"addHandler\",\"meterExpired\",function(a){PianoMeterExpired=a.viewsLeft}]);return PianoMeterExpired})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=ga.getAll()[0].get(\"clientId\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"og:title\"==a[i].getAttribute(\"property\"))return a[i].getAttribute(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var c=\"\",a=\"",["escape",["macro",9],7],"\";if(void 0===a||null===a||\"undefined\"===a||\"null\"===a)return ",["escape",["macro",16],8,16],";virtualPageSplit=a.split(\"#\");if(void 0===virtualPageSplit[0]||null===virtualPageSplit[0]||\"undefined\"===virtualPageSplit[0]||\"null\"===virtualPageSplit[0]||void 0===virtualPageSplit[1]||null===virtualPageSplit[1]||\"undefined\"===virtualPageSplit[1]||\"null\"===virtualPageSplit[1])return ",["escape",["macro",16],8,16],";var d=\"\/\"+virtualPageSplit[0].replace(\/\\\/\/g,\"\")+\"#\"+virtualPageSplit[1];\nc=\/^$|^undefined$\/.test(d)?window.vertical?window.vertical+window.location.pathname+window.location.search:window.location.pathname+window.location.search:window.vertical?window.vertical+d+window.location.search:d+window.location.search;try{a=c;if(-1\u003Ca.indexOf(\"?\")\u0026\u0026-1\u003Ca.indexOf(\"#\")){if(a.indexOf(\"?\")\u003Ea.indexOf(\"#\")){var b=a.split(\"#\")[0];a.split(\"#\")[1].split(\"?\");a.split(\"#\")[1].split(\"?\");a=b}a.indexOf(\"#\")\u003Ea.indexOf(\"?\")\u0026\u0026(b=a.split(\"?\")[0],a.split(\"?\")[1].split(\"#\"),a.split(\"?\")[1].split(\"#\"),\na=b)}else-1\u003Ca.indexOf(\"?\")?(b=a.split(\"?\")[0],a.split(\"?\"),a=b):-1\u003Ca.indexOf(\"#\")\u0026\u0026(b=a.split(\"#\")[0],a.split(\"#\"),a=b);c=a}catch(e){c=a}return c}catch(e){return ",["escape",["macro",16],8,16],"}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=",["escape",["macro",33],8,16],",e=",["escape",["macro",16],8,16],",a=\"?\"+",["escape",["macro",34],8,16],";if(void 0===",["escape",["macro",34],8,16],"||\"\"===",["escape",["macro",34],8,16],")a=\"\";var c=\"#\"+",["escape",["macro",35],8,16],";if(void 0===",["escape",["macro",35],8,16],"||\"\"===",["escape",["macro",35],8,16],")c=\"\";var f=",["escape",["macro",36],8,16],"+\":\/\/\",b=\"\";a=a.split(\"\\x26\");a.forEach(function(a){b=0\u003Cb.length?b+(\"\\x26\"+a.replace(\/\\\/\/g,\"\")):b+a.replace(\/\\\/\/g,\"\")});return f+d+e+b+c})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"landingPageCookie"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(jQuery('script[type*\\x3d\"application\/ld+json\"]').text().trim().replace(\/(\\\/\\\/\u003C!\\[CDATA\\[)\/g,\"\").replace(\/(\\\/\\\/\\]\\]\u003E)\/g,\"\").trim()).dateCreated;a=new Date(a);return a=a.getFullYear()+\"-\"+(a.getMonth()+1)+\"-\"+(1\u003Ca.getDate().length?a.getDate():\"0\"+a.getDate())})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",41],8,16],";return a=void 0!==typeof ",["escape",["macro",42],8,16],".getElementsByTagName(\"img\")[0].alt?",["escape",["macro",42],8,16],".getElementsByTagName(\"img\")[0].alt:",["escape",["macro",41],8,16],"}catch(b){return a=",["escape",["macro",41],8,16],"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\/image\/i.test(",["escape",["macro",42],8,16],".childNodes[0])?",["escape",["macro",42],8,16],".childNodes[0].alt:",["escape",["macro",41],8,16],"?",["escape",["macro",41],8,16],":\"Element Class: \"+",["escape",["macro",44],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",41],8,16],";return a=void 0!==typeof ",["escape",["macro",42],8,16],".getElementsByTagName(\"img\")[0].alt?",["escape",["macro",42],8,16],".getElementsByTagName(\"img\")[0].alt:",["escape",["macro",41],8,16],"}catch(b){return a=",["escape",["macro",41],8,16],"?",["escape",["macro",41],8,16],":\"Element Class: \"+",["escape",["macro",44],8,16],"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"date\"==a[i].getAttribute(\"name\"))return a[i].getAttribute(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"author\"==a[i].getAttribute(\"property\"))return a[i].getAttribute(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return post.uri.replace(\/https?:\\\/\\\/www.businessinsider.com\\\/\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],";return a?\"BIRTA\":\"TBI\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){getDocHeight=function(){var a=document;return Math.max(a.body.scrollHeight,a.documentElement.scrollHeight,a.body.offsetHeight,a.documentElement.offsetHeight,a.body.clientHeight,a.documentElement.clientHeight)};getDocHeight();var b=function(){var a=window.innerHeight||(document.documentElement||document.body).clientHeight,b=getDocHeight(),c=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;a=b-a;return c=Math.floor(c\/a*100)};return b()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=34;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",16],8,16],".match(\/^\\\/$|^\\\/newhomepage$\/)?\"1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000,27000,28000,29000,30000,31000,32000,33000,34000,35000,36000,37000,38000,39000,40000,41000,42000,43000,44000,45000,46000,47000,48000,49000,50000\":\"-1\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=\"subid2\\x3d ul\\x3d afftrack\\x3d clickref\\x3d xcust\\x3d sid\\x3d\".split(\" \"),a=0;a\u003Cb.length;a++)if(-1\u003C",["escape",["macro",55],8,16],".indexOf(b[a]))return ",["escape",["macro",55],8,16],".split(b[a])[1];if(-1\u003C",["escape",["macro",55],8,16],".indexOf(\/sid\/))return ",["escape",["macro",55],8,16],".split(\"\/sid\/\")[1].split(\"\/\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",55],8,16],".match(\/(?:\\\/sid\\\/|=)(\\d{13}a[0-9a-z]{8})\/)[1]})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\/\\?tht$|\\?tht=$|\\?tht=\u0026\/.test(",["escape",["macro",58],8,16],")?\"t\":\"a\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(!\/^https:\\\/\\\/trc\\.taboola\\.com\\\/businessinsider\\\/\/i.test(",["escape",["macro",55],8,16],"))return 1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"wordCount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",61],8,16],"\/5})();"]
    },{
      "function":"__c",
      "vtp_value":"50"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",61],8,16],"\/5\/",["escape",["macro",63],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"businessinsider.com"
    },{
      "function":"__j",
      "vtp_name":"Author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",68],
      "vtp_name":"author"
    },{
      "function":"__j",
      "vtp_name":"vertical"
    },{
      "function":"__v",
      "convert_null_to":"others",
      "convert_undefined_to":"others",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",70],
      "vtp_name":"vertical"
    },{
      "function":"__j",
      "vtp_name":"PageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",72],
      "vtp_name":"pageType"
    },{
      "function":"__j",
      "vtp_name":"Editor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",74],
      "vtp_name":"editor"
    },{
      "function":"__j",
      "vtp_name":"Category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",76],
      "vtp_name":"category"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;\/Sponsor Post\/i.test(",["escape",["macro",69],8,16],")?a=\"sponsored\":\/knarr\/i.test(",["escape",["macro",22],8,16],")?a=\"knarred\":",["escape",["macro",21],8,16],"\u0026\u0026!\/^INSIDER$|^Business Insider$|Insider Picks$\/i.test(",["escape",["macro",23],8,16],")?a=\"contributed\":",["escape",["macro",22],8,16],"\u0026\u0026(a=\"staff\");return a})();"]
    },{
      "function":"__j",
      "vtp_name":"AuthorType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",78],8,16],",b=",["escape",["macro",79],8,16],";return a?a:b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",49],
      "vtp_name":"postURI"
    },{
      "function":"__j",
      "vtp_name":"post.id"
    },{
      "function":"__v",
      "convert_null_to":["template","0000",["macro",71]],
      "convert_undefined_to":["template","0000",["macro",71]],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",82],
      "vtp_name":"postID"
    },{
      "function":"__c",
      "vtp_value":"UA-2241657-6"
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element.href",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.href",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"businessinsider.in, businessinsider.my, businessinsider.co.id, businessinsider.com.au, businessinsider.sg, businessinsider.de, businessinsider.com.pl, businessinsider.nl, businessinsider.fr, businessinsider.jp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",47],
      "vtp_name":"datePublished"
    },{
      "function":"__k",
      "vtp_name":"pf_notify",
      "vtp_decodeCookie":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",23],8,16],",b=",["escape",["macro",48],8,16],";return a?a:b})();"]
    },{
      "function":"__j",
      "vtp_name":"OriginalID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",95],
      "vtp_name":"originalID"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_customUrlSource":["macro",39],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dateCreated"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"numSlides"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",71],8,16],";!\/warroom\/i.test(",["escape",["macro",71],8,16],")\u0026\u0026\/BIStrategy\/i.test(",["escape",["macro",77],8,16],")?a=\"warroom-tag\":!\/thelife\/i.test(",["escape",["macro",71],8,16],")\u0026\u0026\/arts \u0026 culture\/i.test(",["escape",["macro",77],8,16],")?a=\"thelife-tag\":!\/moneygame\/i.test(",["escape",["macro",71],8,16],")\u0026\u0026\/MarketsOpEd\/i.test(",["escape",["macro",77],8,16],")?a=\"moneygame-tag\":!\/transportation\/i.test(",["escape",["macro",71],8,16],")\u0026\u0026\/bitranspo\/i.test(",["escape",["macro",77],8,16],")?a=\"transportation-tag\":!\/innovation\/i.test(",["escape",["macro",71],8,16],")\u0026\u0026\n\/bi innovation\/i.test(",["escape",["macro",77],8,16],")?a=\"innovation-tag\":!\/politics\/i.test(",["escape",["macro",71],8,16],")\u0026\u0026\/PoliticsOpEd\/i.test(",["escape",["macro",77],8,16],")\u0026\u0026(a=\"politics-tag\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pianoId"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product-module"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product-index"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product-price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTest"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product-area"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product-brand"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-product-position"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-amzn-asin"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",71]],["map","index","2","group",["macro",80]],["map","index","3","group",["macro",77]],["map","index","4","group",["macro",73]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",91],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value",["macro",67]],["map","fieldName","cookieExpires","value","7884000"],["map","fieldName","page","value",["macro",32]],["map","fieldName","location","value",["macro",37]],["map","fieldName","customTask","value",["macro",53]],["map","fieldName","forceSSL","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",71]],["map","index","2","dimension",["macro",73]],["map","index","3","dimension",["macro",80]],["map","index","4","dimension",["macro",69]],["map","index","5","dimension",["macro",75]],["map","index","6","dimension",["macro",77]],["map","index","7","dimension",["macro",8]],["map","index","9","dimension",["macro",81]],["map","index","10","dimension",["macro",83]],["map","index","11","dimension",["macro",92]],["map","index","12","dimension",["macro",93]],["map","index","14","dimension",["macro",94]],["map","index","17","dimension",["macro",25]],["map","index","25","dimension",["macro",96]],["map","index","27","dimension",["macro",31]],["map","index","31","dimension",["macro",97]],["map","index","26","dimension",["macro",98]],["map","index","28","dimension",["macro",22]],["map","index","30","dimension",["macro",99]],["map","index","32","dimension",["macro",61]],["map","index","33","dimension",["macro",50]],["map","index","35","dimension",["macro",100]],["map","index","36","dimension",["macro",101]],["map","index","46","dimension",["macro",102]],["map","index","47","dimension",["macro",103]],["map","index","48","dimension",["macro",104]],["map","index","49","dimension",["macro",105]],["map","index","50","dimension",["macro",106]],["map","index","51","dimension",["macro",107]],["map","index","52","dimension",["macro",59]],["map","index","53","dimension",["macro",108]],["map","index","54","dimension",["macro",109]],["map","index","55","dimension",["macro",110]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"percent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__c",
      "vtp_value":"Internal Promotion"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_customUrlSource":["macro",114],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_customUrlSource":["macro",114],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_customUrlSource":["macro",114],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element.title",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.title",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.href",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.href",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialNetwork",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialAction",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"socialTarget",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ipm_name",
      "vtp_customUrlSource":["macro",114],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ipm_position",
      "vtp_customUrlSource":["macro",114],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"ipm_creative",
      "vtp_customUrlSource":["macro",114],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.origin"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",73],
      "vtp_map":["list",["map","key","slideshow","value","1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",71]],["map","index","2","group",["macro",80]],["map","index","3","group",["macro",77]],["map","index","4","group",["macro",73]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",91],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value",["macro",67]],["map","fieldName","cookieExpires","value","7884000"],["map","fieldName","page","value",["macro",10]],["map","fieldName","location","value",["macro",37]],["map","fieldName","customTask","value",["macro",53]],["map","fieldName","forceSSL","value","true"]],
      "vtp_metric":["list",["map","index","2","metric","1"],["map","index","5","metric",["macro",131]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",71]],["map","index","2","dimension",["macro",73]],["map","index","3","dimension",["macro",80]],["map","index","4","dimension",["macro",69]],["map","index","5","dimension",["macro",75]],["map","index","6","dimension",["macro",77]],["map","index","7","dimension",["macro",8]],["map","index","9","dimension",["macro",81]],["map","index","10","dimension",["macro",83]],["map","index","11","dimension",["macro",92]],["map","index","12","dimension",["macro",93]],["map","index","14","dimension",["macro",94]],["map","index","17","dimension",["macro",25]],["map","index","25","dimension",["macro",96]],["map","index","27","dimension",["macro",31]],["map","index","31","dimension",["macro",97]],["map","index","26","dimension",["macro",98]],["map","index","28","dimension",["macro",22]],["map","index","30","dimension",["macro",99]],["map","index","32","dimension",["macro",61]],["map","index","33","dimension",["macro",50]],["map","index","35","dimension",["macro",100]],["map","index","36","dimension",["macro",101]],["map","index","46","dimension",["macro",102]],["map","index","47","dimension",["macro",103]],["map","index","48","dimension",["macro",104]],["map","index","49","dimension",["macro",105]],["map","index","50","dimension",["macro",106]],["map","index","51","dimension",["macro",107]],["map","index","52","dimension",["macro",59]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__j",
      "vtp_name":"BI.isMobile"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","\/account\/forgot_password","value","Non-restricted"],["map","key","\/analysts","value","Non-restricted"],["map","key","\/intelligence\/bii-research-reports-fb","value","Non-restricted"],["map","key","\/intelligence\/bii-research-reports?IR=T","value","Non-restricted"],["map","key","\/intelligence\/bii-research-reports\/","value","Non-restricted"],["map","key","\/intelligence\/mobile-advertising-ecosystem-explained","value","Non-restricted"],["map","key","\/intelligence\/mobile-research","value","Non-restricted"],["map","key","\/intelligence\/snapchat-report","value","Non-restricted"],["map","key","\/join\/biipaymentsform","value","Non-restricted"],["map","key","\/join\/ci\/bii-cotd-ldsignup","value","Non-restricted"],["map","key","\/join\/ci\/biiecommerceform","value","Non-restricted"],["map","key","\/join\/ci\/welcomeadsignup1","value","Non-restricted"],["map","key","\/join\/ci\/welcomeadsignup3","value","Non-restricted"],["map","key","\/login","value","Non-restricted"],["map","key","\/register","value","Non-restricted"],["map","key","\/register\/billing","value","Non-restricted"],["map","key","\/register\/enterprise","value","Non-restricted"],["map","key","\/register\/group","value","Non-restricted"],["map","key","\/welcome","value","Non-restricted"],["map","key","\/welcome-","value","Non-restricted"],["map","key","\/welcome?nr_email_referer=1","value","Non-restricted"],["map","key","\/welcome\/","value","Non-restricted"],["map","key","\/welcome\/newsletters","value","Non-restricted"],["map","key","\/welcome\/newsletters\/","value","Non-restricted"]],
      "vtp_defaultValue":"Restricted",
      "vtp_setDefaultValue":true
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1\u003C",["escape",["macro",65],8,16],".indexOf(\"intelligence.businessinsider.com\")?\"\"==$('a[href*\\x3d\"\/account\"]').text()?\"Non-restricted\":\"Restricted\":-1\u003C",["escape",["macro",65],8,16],".indexOf(\"www.businessinsider.com\/intelligence\")?\"Non-restricted\":",["escape",["macro",135],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"legacyCookieDomain"
    },{
      "function":"__c",
      "vtp_value":"intelligence.businessinsider.com, bii_www.businessinsider.com"
    },{
      "function":"__c",
      "vtp_value":"UA-2241657-11"
    },{
      "function":"__k",
      "vtp_name":"gtm_tout_clicked",
      "vtp_decodeCookie":true
    },{
      "function":"__smm",
      "vtp_input":["macro",140],
      "vtp_setDefaultValue":false,
      "vtp_map":["list",["map","key",["macro",65],"value","tout_clicked"]]
    },{
      "function":"__c",
      "vtp_value":"UA-2241657-10"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.className"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"conversionObject.chargeAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionObject.expires"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionObject.rid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionObject.termConversionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionObject.termId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionObject.uid"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",71]],["map","index","2","group",["macro",80]],["map","index","3","group",["macro",77]],["map","index","4","group",["macro",73]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_autoLinkDomains":["macro",91],
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","cookieDomain","value",["macro",67]],["map","fieldName","cookieExpires","value","7884000"],["map","fieldName","page","value",["macro",32]],["map","fieldName","location","value",["macro",37]],["map","fieldName","forceSSL","value","true"],["map","fieldName","customTask","value",["macro",53]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",71]],["map","index","2","dimension",["macro",73]],["map","index","3","dimension",["macro",80]],["map","index","4","dimension",["macro",69]],["map","index","5","dimension",["macro",75]],["map","index","6","dimension",["macro",77]],["map","index","7","dimension",["macro",8]],["map","index","9","dimension",["macro",81]],["map","index","10","dimension",["macro",83]],["map","index","11","dimension",["macro",92]],["map","index","12","dimension",["macro",93]],["map","index","14","dimension",["macro",94]],["map","index","17","dimension",["macro",25]],["map","index","18","dimension",["macro",147]],["map","index","19","dimension",["macro",148]],["map","index","20","dimension",["macro",149]],["map","index","21","dimension",["macro",150]],["map","index","22","dimension",["macro",151]],["map","index","23","dimension",["macro",152]],["map","index","25","dimension",["macro",96]],["map","index","27","dimension",["macro",31]],["map","index","31","dimension",["macro",97]],["map","index","26","dimension",["macro",98]],["map","index","28","dimension",["macro",22]],["map","index","30","dimension",["macro",99]],["map","index","32","dimension",["macro",61]],["map","index","33","dimension",["macro",50]],["map","index","36","dimension",["macro",101]],["map","index","35","dimension",["macro",100]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"jwp_video_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"piano_blocked"
    },{
      "function":"__r"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"jwp_interaction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.parentElement.className"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",160],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":["macro",160],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","get-more-links|^publication-feed-listgroup$","value","MORE FROM"],["map","key","see-also","value","SEE ALSO"],["map","key","margin-top popular-video|^popular-video-header$","value","NOW WATCH"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.parentElement.parentElement.className"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.className"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.pathname"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"page",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-position"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-analytics-module"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"afftimestamp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affstringgroup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.linktext"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.productModule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.productIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.productPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.productArea"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.productAmznAsin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.module"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonleft.linkclick.class"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.clickText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.clickURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productModule"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productArea"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productBrand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postMessageData.productAmznAsin"
    },{
      "function":"__k",
      "convert_null_to":"not set",
      "convert_undefined_to":"not set",
      "vtp_decodeCookie":false,
      "vtp_name":"scroll0"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",55],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"Outbound Click",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","businessinsider.com","value","Inbound Click"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",41],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",41],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","search icon","value","Search_icon"],["map","key","globe.*icon","value","Edition"],["map","key","Insider logo","value","Business Insider Logo"],["map","key","Profile icon","value","Profile Icon"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":["template","0000",["macro",71]],
      "convert_undefined_to":["template","0000",["macro",71]],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",49],
      "vtp_name":"postURI"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",71],8,16],";return a.replace(\/-contributor\/,\"\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",55],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"ViewHardPaywallMWD",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","offerId=OFR7BOLFLKC3","value","ViewGuestPaywallMWD"]]
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    },{
      "function":"__f"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__c",
      "vtp_value":"UA-12625662-2"
    },{
      "function":"__j",
      "vtp_name":"user_id"
    },{
      "function":"__c",
      "vtp_value":"UA-2241657-23"
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__c",
      "vtp_value":"div[data-region*=\"Lower 300\"]"
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__c",
      "vtp_value":"middle+20"
    },{
      "function":"__c",
      "vtp_value":"0"
    },{
      "function":"__v",
      "vtp_name":"percent",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ad_name",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.parentElement.host",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.host",
      "vtp_defaultValue":"",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"checkoutProducts",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"gtm.element.innerText",
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_name":"traffic_src",
      "vtp_decodeCookie":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.innerHTML",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.offsetParent.nextSibling.offsetParent.innerText",
      "vtp_dataLayerVersion":2
    },{
      "function":"__f",
      "vtp_defaultPages":["list"],
      "vtp_component":"PATH"
    },{
      "function":"__c",
      "vtp_value":"T12:00:00"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",77],8,16],";return a.replace(\/\\|\/g,\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",92],7],["escape",["macro",223],7],"\";return a})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.origin"
    },{
      "function":"__d",
      "vtp_elementSelector":"li.publication-author.ks-author-byline",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var PianoMeterLeft=",["escape",["macro",28],8,16],";var PianoMeterMax=",["escape",["macro",27],8,16],";var PianoMeterSeen=",["escape",["macro",26],8,16],";var PianoPercentLeft=\"\";PianoPercentLeft=PianoMeterLeft\/PianoMeterMax;return PianoPercentLeft})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CID"
    },{
      "function":"__j",
      "vtp_name":"maxViews"
    },{
      "function":"__j",
      "vtp_name":"viewsLeft"
    },{
      "function":"__j",
      "vtp_name":"post_id"
    },{
      "function":"__j",
      "vtp_name":"jwplayer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adblock status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blocked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"internal_blocked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"pf_blocked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"add_blocked"
    },{
      "function":"__j",
      "vtp_name":["macro",158]
    },{
      "function":"__u",
      "vtp_component":"PORT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.parentElement.parentElement.href"
    },{
      "function":"__j",
      "vtp_name":"runJWPCheck"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"postURI"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"clientId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"module"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageArea"
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",55],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":10,
      "once_per_load":true,
      "vtp_supportDocumentWrite":false,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(k,d){if(\"undefined\"===typeof JSON){var g=d.createElement(\"script\");g.setAttribute(\"type\",\"text\/javascript\");g.setAttribute(\"src\",\"\/\/cdnjs.cloudflare.com\/ajax\/libs\/json2\/20150503\/json2.min.js\");d.getElementsByTagName(\"head\")[0].appendChild(g)}var h=\"traffic_src\";k.getTrafficSrcCookie=function(){for(var c=d.cookie.split(\";\"),b,a=0;a\u003Cc.length;a++)if(0\u003C=c[a].indexOf(h)){b=c[a];break}return b?(b=b.substring(b.indexOf(\"\\x3d\")+1,b.length),JSON.parse(b)):null};var e={getParameterByName:function(a,\nb){b=b.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");var c=new RegExp(\"[\\\\?\\x26]\"+b+\"\\x3d([^\\x26#]*)\");c=c.exec(a);return null===c?\"\":decodeURIComponent(c[1].replace(\/\\+\/g,\" \"))},getKeywords:function(c){if(\"\"===c||\"(direct)\"===c)return\"\";for(var b=\"daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q\".split(\" \"),\nd=0;d\u003Cb.length;d++){var e=b[d].split(\":\"),f=e[0];e=e[1];if(0\u003C=c.indexOf(f)\u0026\u0026(a.ga_source=f,\"\"!==this.getParameterByName(c,e)))return this.getParameterByName(c,e)}b=\/^https?:\\\/\\\/(www.)?google(.com?)?(.[a-z]{2}t?)?\\\/?$\/i;d=\/^https?:\\\/\\\/(r.)?search.yahoo.com\\\/?[^?]*$\/i;f=\/^https?:\\\/\\\/(www.)?bing.com\\\/?$\/i;return b.test(c)||d.test(c)||f.test(c)?\"(not provided)\":\"\"},getMedium:function(c){return\"\"!==a.ga_medium?a.ga_medium:\"\"!==a.ga_gclid?\"cpc\":\"\"===a.ga_source?\"\":\"(direct)\"===a.ga_source?\"(none)\":\"\"!==\na.ga_keyword?\"organic\":\"referral\"},getDateAfterYears:function(a){return new Date((new Date).getTime()+31536E6*a)},getHostname:function(a){var b=\/^(https:\\\/\\\/|http:\\\/\\\/)?([^\/?:#]+)\/;a=b.exec(a)[2];return null!==a?a:\"\"},waitLoad:function(a,b){var c=100,d=function(){setTimeout(function(){c--;a()?b():0\u003Cc?d():console.error(\"timed-out!!\")},100)};d()}},f=[{key:\"utm_source\",label:\"ga_source\",required:!0},{key:\"utm_medium\",label:\"ga_medium\",required:!1},{key:\"utm_campaign\",label:\"ga_campaign\",required:!1},\n{key:\"utm_content\",label:\"ga_content\",required:!1},{key:\"utm_term\",label:\"ga_keyword\",required:!1}],a={},l=function(){a.ga_gclid=e.getParameterByName(d.location.href,\"gclid\");for(var c=!1,b=0;b\u003Cf.length;b++){var g=e.getParameterByName(d.location.href,f[b].key);if(f[b].required\u0026\u0026\"\"===g){c=!0;for(b=0;b\u003Cf.length;b++)a[f[b].label]=\"\";break}a[f[b].label]=g}if(\"\"!==a.ga_gclid\u0026\u0026\"\"===a.ga_source)a.ga_source=\"google\";else if(c){if(0\u003C=d.referrer.indexOf(d.location.host)||null!==k.getTrafficSrcCookie()\u0026\u0026\"\"===\nd.referrer)return;a.ga_source=\"\"!==d.referrer?d.referrer:\"(direct)\"}a.ga_keyword=\"\"===a.ga_keyword?e.getKeywords(a.ga_source):a.ga_keyword;a.ga_medium=e.getMedium(a);a.ga_landing_page=d.location.href;a.ga_source=e.getHostname(a.ga_source);a.ga_client_id=ga.getAll()[0].get(\"clientId\");\"\"!==a.ga_source\u0026\u0026(c=JSON.stringify(a),d.cookie=h+\"\\x3d; expires\\x3d\"+new Date(-1),d.cookie=h+\"\\x3d\"+c+\"; expires\\x3d\"+e.getDateAfterYears(1)+\"; path\\x3d\/\");dataLayer.push({event:\"trafficSrcCookieSet\"})};e.waitLoad(function(){return\"undefined\"!==\ntypeof JSON},function(){e.waitLoad(function(){return\"undefined\"!==typeof ga.getAll},l)})})(window,document);\u003C\/script\u003E",
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":250
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":68
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":69
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":70
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":71
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":179
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"New Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",81],
      "vtp_eventLabel":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":185
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","nonInteraction","value","true"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_metric":["list",["map","index","5","metric","1"]],
      "vtp_gaSettings":["macro",111],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":187
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",115],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template",["macro",116],"|",["macro",117]],
      "vtp_eventLabel":["macro",118],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":189
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"Share",
      "vtp_gaSettings":["macro",111],
      "vtp_socialActionTarget":["macro",32],
      "vtp_socialNetwork":["template",["macro",119],["macro",120]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":190
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":191
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":193
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"Share",
      "vtp_gaSettings":["macro",111],
      "vtp_socialActionTarget":["macro",32],
      "vtp_socialNetwork":"email",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":194
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Share",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Follow",
      "vtp_eventLabel":["macro",123],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":195
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Non-bounced",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"30 secs",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":197
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",115],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",127],
      "vtp_eventLabel":["template",["macro",128],"|",["macro",129]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"Share",
      "vtp_gaSettings":["macro",111],
      "vtp_socialActionTarget":["macro",32],
      "vtp_socialNetwork":["macro",130],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":199
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":"Follow",
      "vtp_gaSettings":["macro",111],
      "vtp_socialActionTarget":["macro",32],
      "vtp_socialNetwork":["macro",123],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":200
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"BII",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Click to Research Store",
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":204
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":207
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",132],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":231
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":232
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":233
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":240
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group","bii"],["map","index","2","group",["macro",80]],["map","index","3","group",["macro",77]],["map","index","4","group",["macro",136]],["map","index","5","group",["macro",69]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",17],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName",["macro",137],"value",["macro",138]],["map","fieldName","\u0026uid","value",["macro",3]],["map","fieldName","allowLinker","value","TRUE"],["map","fieldName","campaignMedium","value",["macro",19]],["map","fieldName","campaignName","value",["macro",20]],["map","fieldName","campaignSource","value",["macro",18]],["map","fieldName","cookieExpires","value","7884000"],["map","fieldName","page","value",["template","\/promo-view",["macro",16]]],["map","fieldName","forceSSL","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",136]],["map","index","3","dimension",["macro",77]],["map","index","11","dimension",["macro",81]],["map","index","2","dimension",["macro",80]],["map","index","1","dimension","bii"],["map","index","7","dimension",["macro",8]],["map","index","5","dimension",["macro",69]],["map","index","8","dimension","\"\""],["map","index","6","dimension",["macro",73]],["map","index","9","dimension",["macro",75]],["map","index","12","dimension",["macro",3]],["map","index","13","dimension",["macro",4]],["map","index","25","dimension",["macro",96]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",139],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":242
    },{
      "function":"__ua",
      "setup_tags":["list",["tag",0,0]],
      "once_per_load":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","3","group",["macro",77]],["map","index","2","group",["macro",80]],["map","index","1","group",["macro",71]],["map","index","4","group",["macro",73]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","campaignMedium","value",["macro",19]],["map","fieldName","campaignName","value",["macro",20]],["map","fieldName","campaignSource","value",["macro",18]],["map","fieldName","cookieExpires","value","7884000"],["map","fieldName","forceSSL","value","true"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",69]],["map","index","3","dimension",["macro",80]],["map","index","2","dimension",["macro",73]],["map","index","1","dimension",["macro",71]],["map","index","7","dimension",["macro",8]],["map","index","6","dimension",["macro",77]],["map","index","5","dimension",["macro",75]],["map","index","9","dimension",["macro",81]],["map","index","10","dimension",["macro",83]],["map","index","11","dimension",["macro",92]],["map","index","12","dimension",["macro",93]],["map","index","13","dimension",["macro",141]],["map","index","14","dimension",["macro",94]],["map","index","25","dimension",["macro",96]],["map","index","27","dimension",["macro",31]],["map","index","17","dimension",["macro",25]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",142],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":244
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":249
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ticker",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Tab",
      "vtp_eventLabel":["macro",126],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":251
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":256
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",144],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",145],
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":269
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",124],
      "vtp_gaSettings":["macro",111],
      "vtp_socialActionTarget":["macro",125],
      "vtp_socialNetwork":["macro",123],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":270
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",147],
      "vtp_eventCategory":["macro",144],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",153],
      "vtp_eventAction":["macro",145],
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":271
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video player",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",154],
      "vtp_eventLabel":["macro",155],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":274
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Piano",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Adblock",
      "vtp_eventLabel":["macro",156],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":282
    },{
      "function":"__ua",
      "live_only":true,
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",158],
      "vtp_eventCategory":"adChain",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",145],
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":289
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video player",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template",["macro",154]," - ",["macro",159]],
      "vtp_eventLabel":["macro",155],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":292
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video player",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",154],
      "vtp_eventLabel":["template",["macro",155]," - ",["macro",159]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":293
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"module",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",161],
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":294
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":296
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":297
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"module",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"vertical title",
      "vtp_eventLabel":["macro",164],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":298
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"module",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",162],
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":299
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"module",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"OpenEditionMenu",
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":300
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Recommended For You",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"RR",
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":303
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Recommended For You",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Bottom-Links",
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":304
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Recommended For You",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Bottom-Images",
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":305
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":306
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric",["macro",60]]],
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",46],
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":309
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Newsletter Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"RR",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":313
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":314
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Birta Footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",71],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":316
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":317
    },{
      "function":"__paused",
      "vtp_originalTagType":"ndcr",
      "tag_id":322
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":328
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",144],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",145],
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":332
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",144],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",145],
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":339
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Inbound",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Click - RR - popularLower300",
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":347
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"New Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template","Homepage",["macro",166]],
      "vtp_eventLabel":["macro",167],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":350
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":351
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HP Tout Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template",["macro",168]," - ",["macro",169]],
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":360
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":364
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"New Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template","Homepage",["macro",166]],
      "vtp_eventLabel":"NEXT Button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":366
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"New Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template","Homepage",["macro",166]],
      "vtp_eventLabel":"VIEW MORE Button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":367
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Affiliate Link Parameters",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",170],
      "vtp_eventLabel":["macro",171],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":368
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template","rt_",["macro",173]],
      "vtp_eventLabel":["macro",172],
      "vtp_dimension":["list",["map","index","46","dimension",["macro",174]],["map","index","47","dimension",["macro",175]],["map","index","48","dimension",["macro",176]],["map","index","49","dimension",["macro",177]],["map","index","51","dimension",["macro",178]],["map","index","55","dimension",["macro",179]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":370
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HP Tout Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template",["macro",180]," - rt_",["macro",181]],
      "vtp_eventLabel":["macro",172],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":375
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"New Scroll Tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric",["macro",62]],["map","index","5","metric",["macro",64]]],
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",81],
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":376
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Taboola",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"ReadMoreDisplayed",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":380
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Taboola",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"ReadMoreClicked",
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":381
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HP Blue Tag Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template",["macro",168]," - ",["macro",169]],
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":386
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HP Blue Tag Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"1 - blue tag",
      "vtp_eventLabel":["macro",55],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":387
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HP Blue Tag Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["template",["macro",180]," - rt_",["macro",181]],
      "vtp_eventLabel":["macro",172],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":388
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HP Blue Tag Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"1 - rt_blue tag",
      "vtp_eventLabel":["macro",172],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":389
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Outbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",183],
      "vtp_eventLabel":["macro",184],
      "vtp_dimension":["list",["map","index","46","dimension",["macro",185]],["map","index","47","dimension",["macro",186]],["map","index","48","dimension",["macro",187]],["map","index","49","dimension",["macro",188]],["map","index","51","dimension",["macro",189]],["map","index","53","dimension",["macro",190]],["map","index","54","dimension",["macro",191]],["map","index","55","dimension",["macro",192]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":394
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"708493099",
      "vtp_conversionLabel":"7PkECLrNq6sBEKv-6tEC",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":395
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"708493099",
      "vtp_conversionLabel":"qeyICMrFx6sBEKv-6tEC",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":396
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"708493099",
      "vtp_conversionLabel":"GEYNCNqU06sBEKv-6tEC",
      "vtp_url":["macro",86],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":397
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":398
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Share",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",146],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":400
    },{
      "function":"__bzi",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_id":"1420146",
      "tag_id":403
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/px.ads.linkedin.com\/collect\/?pid=1420146\u0026conversionId=1441874\u0026fmt=gif",
      "tag_id":404
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",194],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Navbar",
      "vtp_eventLabel":["macro",195],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":406
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Inbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Navbar",
      "vtp_eventLabel":"Search_box",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":407
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Inbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Navbar",
      "vtp_eventLabel":"Search_text",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":408
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Inbound Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":"Navbar",
      "vtp_eventLabel":"Search_icon",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":409
    },{
      "function":"__cl",
      "tag_id":411
    },{
      "function":"__fsl",
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_160",
      "tag_id":412
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_180",
      "tag_id":413
    },{
      "function":"__jel",
      "tag_id":414
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_520",
      "tag_id":415
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_532",
      "tag_id":416
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PIXELS",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_verticalThresholdsPixels":["macro",54],
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"406932_538",
      "vtp_enableTriggerStartOption":true,
      "tag_id":417
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".float-right.btn.button-white",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"406932_539",
      "tag_id":418
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"iframe[id*=\"offer\"]",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"406932_550",
      "tag_id":419
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_555",
      "tag_id":420
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_567",
      "tag_id":421
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_574",
      "tag_id":422
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_587",
      "tag_id":423
    },{
      "function":"__cl",
      "tag_id":424
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_617",
      "tag_id":425
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_629",
      "tag_id":426
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.tbl-read-more-box",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"406932_644",
      "tag_id":427
    },{
      "function":"__cl",
      "tag_id":428
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"406932_650",
      "tag_id":429
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_663",
      "tag_id":430
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_664",
      "tag_id":431
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"406932_707",
      "tag_id":432
    },{
      "function":"__cl",
      "tag_id":433
    },{
      "function":"__cl",
      "tag_id":434
    },{
      "function":"__cl",
      "tag_id":435
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1988166924554892\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n \u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=1988166924554892\u0026amp;ev=PageView\n\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a,c){var e=decodeURIComponent;var d=\"||\";var g=\";;\",f=\"split\",h=\"length\",m=\"indexOf\",k=\"localStorage\",l=\"_ccmdt\";b[c]=b[c]||{};b[c].us={};a=b[k]?b[k][l]||\"\":(a=a.cookie.match(l+\"\\x3d([^;]*)\"))\u0026\u0026a[1]||\"\";e=e(a)[f](d);a=e[h];if(0\u003Ca)for(;a--;)d=e[a][f](\"\\x3d\"),1\u003Cd[h]\u0026\u0026(-1\u003Cd[1][m](g)?(b[c].us[d[0]]=d[1][f](g),b[c].us[d[0]].pop()):b[c].us[d[0]]=d[1])})(window,document,\"_ml\");\"undefined\"!=typeof dataLayer\u0026\u0026dataLayer.push({event:\"MLD_READY\"});\n(function(){_ml=window._ml||{};_ml.eid=\"50096\";_ml.ef=\"#user-email #news-email #email *mail_from *username *email\".split(\" \");_ml.redirect=\"https:\/\/beacon.krxd.net\/usermatch.gif?partner\\x3dmadisonlogic\\x26partner_uid\\x3d[PersonID]\";_ml.informer={enable:!0};var b=document.getElementsByTagName(\"script\")[0],a=new Date,c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=\"\/\/ml314.com\/tag.aspx?\"+a.getDate()+a.getMonth()+a.getFullYear();b.parentNode.insertBefore(c,b)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.onhashchange=function(){dataLayer.push({event:\"hashChanged\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":209
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\" src=\"\/\/s.skimresources.com\/js\/35871X943606.skimlinks.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":222
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{(function(){var changeHref=function(anchorElem,paramKey,paramValue,overWrite){var href=anchorElem.href;var index=href.indexOf(paramKey);var newHref=\"\";if(index\u003E=0\u0026\u0026!overWrite)return;if(index\u003E=0){var originalValue=href.substring(index+paramKey.length,href.length);if(originalValue.indexOf(\"\\x26\")\u003E=0)originalValue=originalValue.substring(0,originalValue.indexOf(\"\\x26\"));var preValueStr=href.substring(0,index);var param=paramKey+paramValue;var postValueStr=href.substring(index+paramKey.length+originalValue.length,\nhref.length);newHref=preValueStr+param+postValueStr}else newHref=href+(href.indexOf(\"?\")\u003E=0?\"\\x26\":\"?\")+paramKey+paramValue;anchorElem.setAttribute(\"href\",newHref)};var traverseAnchors=function(domain,paramKey,paramValue,overWrite){var anchors=document.getElementsByTagName(\"a\");for(var i=0;i\u003Canchors.length;i++)if(anchors[i].href.indexOf(domain)\u003E=0)changeHref(anchors[i],paramKey,paramValue,overWrite)};if(\"",["escape",["macro",196],7],"\"==\"fbinsiderpicks\")traverseAnchors(\"stacksocial.com\",\"aid\\x3d\",\"a-z1t0qb6k\",\ntrue);else if(\"",["escape",["macro",196],7],"\".match(\/^bi_paid\/))traverseAnchors(\"amazon.com\",\"tag\\x3d\",\"",["escape",["macro",196],7],"\",true);else traverseAnchors(\"amazon.com\",\"tag\\x3d\",\"bisafetynet2-20\",false)})()}catch(e){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":234
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.amzn_assoc_ad_spec.tracking_id=\"",["escape",["macro",196],7],"\"}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(\"div#content\\x3ediv.clear-both\").find(\"a[href]\").each(function(){-1===jQuery(this)[0].hostname.indexOf(\"",["escape",["macro",90],7],"\")\u0026\u0026jQuery(this).attr(\"rel\",\"nofollow\")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":268
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar loadJWLib=function(){function e(a,b){var c=10,d=function(){setTimeout(function(){c--;a()?b():0\u003Cc\u0026\u0026d()},1E3)};d()}function b(a,b,c){var d=a.getPlaylistItem().title?a.getPlaylistItem().title:\"not set\";dataLayer.push({event:b,jwp_player_id:a.id,jwp_video_name:d,jwp_interaction:c,jwp_video_url:a.getPlaylistItem().file,jwp_duration:a.getDuration(),jwp_width:a.getWidth(),jwp_height:a.getHeight(),jwp_position:a.getPosition(),jwp_volume:a.getVolume(),jwp_player_type:a.renderingMode})}window.timeCount=\n0;window.playCount=0;try{jwplayer().on(\"ready\",function(a){b(this,\"playback-playerisready\",\"playersetup\");window.readyCheck=!0})}catch(a){window.readyCheck=!1}e(function(){return void 0!==window.jwplayer},function(){try{if(!1===window.readyCheck)jwplayer().on(\"ready\",function(a){b(this,\"playback-playerisready\",\"playersetup\")});jwplayer().on(\"setupError\",function(a){b(this,\"setup-error\",a.message)});jwplayer().on(\"play\",function(a){0\u003Cjwplayer().getPosition()\u0026\u0026b(this,\"playback-resume\",\"resume\")});jwplayer().on(\"play\",\nfunction(a){0==jwplayer().getPosition()\u0026\u00260===window.playCount\u0026\u0026(b(this,\"playback-play\",\"play\"),window.playCount+=1)});jwplayer().on(\"seek\",function(a){b(this,\"playback-seek\",\"seek\")});jwplayer().on(\"time\",function(a){20===Math.round(this.getPosition()\/this.getDuration()*100)\u0026\u00260===window.timeCount\u0026\u0026(window.timeCount+=1,b(this,\"playback-time\",\"20%\"));40===Math.round(this.getPosition()\/this.getDuration()*100)\u0026\u00261===window.timeCount\u0026\u0026(window.timeCount+=1,b(this,\"playback-time\",\"40%\"));60===Math.round(this.getPosition()\/\nthis.getDuration()*100)\u0026\u00262===window.timeCount\u0026\u0026(window.timeCount+=1,b(this,\"playback-time\",\"60%\"));80===Math.round(this.getPosition()\/this.getDuration()*100)\u0026\u00263===window.timeCount\u0026\u0026(window.timeCount+=1,b(this,\"playback-time\",\"80%\"));100===Math.round(this.getPosition()\/this.getDuration()*100)\u0026\u00264===window.timeCount\u0026\u0026(b(this,\"playback-time\",\"98%\"),window.timeCount=0,window.playCount=0)});jwplayer().on(\"pause\",function(a){b(this,\"playback-pause\",\"Pause\")});jwplayer().on(\"firstFrame\",function(a){b(this,\n\"playback-firstFrame\",\"First Frame\")});jwplayer().on(\"adRequest\",function(a){b(this,\"playback-adrequest\",\"Ad Request\")});jwplayer().on(\"adError\",function(a){b(this,\"playback-aderror\",a.message)});jwplayer().on(\"adImpression\",function(a){b(this,\"playback-adimpression\",\"Ad Impression\")});jwplayer().on(\"adPlay\",function(a){b(this,\"playback-adplay\",\"Ad Play\")});jwplayer().on(\"adClick\",function(a){b(this,\"playback-adclicked\",\"Ad Skipped\")});jwplayer().on(\"adSkipped\",function(a){b(this,\"playback-adskip\",\n\"Ad Skipped\")});jwplayer().on(\"adBlock\",function(a){b(this,\"playback-adblock\",\"Ad Blocked\")});jwplayer().on(\"complete\",function(a){b(this,\"playback-complete\",\"Complete\");window.playCount=0});jwplayer().on(\"error\",function(a){b(this,\"playback-error\",a.message)})}catch(a){}})},jwInterval=setInterval(function(){void 0!=window.jwplayer\u0026\u0026(loadJWLib(),clearInterval(jwInterval))},200);setTimeout(function(){clearInterval(jwInterval)},15E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":273
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(a){a+=\"\\x3d\";for(var c=document.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(var b=c[d];\" \"==b.charAt(0);)b=b.substring(1);if(0==b.indexOf(a))return b.substring(a.length,b.length)}return\"\"}function e(a){dataLayer.push({event:\"piano data\",piano_blocked:a});a=new Date;a.setTime(a.getTime()+1728E3);a=\"expires\\x3d\"+a.toUTCString();document.cookie=\"piano_limit\\x3d1;\"+a+\";path\\x3d\/\"}if(!c(\"piano_limit\")){var f=c(\"__adblocker\");\"\"!==f?e(f):document.addEventListener(\"piano_set\",function(a){e(a.detail)},\n!1)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":281
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction createCookie(a,b,c){document.cookie=a+\"\\x3d\"+b+\"; path\\x3d\/\"}null!==",["escape",["macro",38],8,16],"\u0026\u0026void 0!==",["escape",["macro",38],8,16],"||createCookie(\"landingPageCookie\",",["escape",["macro",58],8,16],",0);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "setup_tags":["list",["tag",117,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase_BI_Prime\",{content_name:\"bi_prime\",content_category:\"subscription\",content_ids:",["escape",["macro",152],8,16],",content_type:",["escape",["macro",151],8,16],",value:",["escape",["macro",147],8,16],",currency:\"USD\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":320
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var concatKey=",["escape",["macro",59],8,16],",removeParameterByName=function(e,d){var b=e.split(\"#\")[0],a=e.split(\"#\")[1],c=b.split(\"?\")[0];b=-1!==b.indexOf(\"?\")?b.split(\"?\")[1]:\"\";if(\"\"!==b){var f=b.split(\"\\x26\");for(var g=f.length-1;0\u003C=g;--g)b=f[g].split(\"\\x3d\")[0],b===d\u0026\u0026f.splice(g,1);b=f.join(\"\\x26\");0\u003Cb.length\u0026\u0026(c=void 0!==a?c+\"?\"+b+\"#\"+a:c+\"?\"+b)}return c},stringGroup=\"\",randomString=function(){for(var e=\"0123456789abcdefghijklmnopqrstuvwxyz\",d=8,b=\"\",a=0;a\u003Cd;a++){var c=Math.floor(Math.random()*e.length);\nb+=e.substring(c,c+1)}stringGroup=stringGroup+\"|\"+b;return b},timeStamp=Math.round((new Date).getTime()),returnUpdatedDeepURL=function(e,d){try{var b=randomString();b=timeStamp+concatKey+b;var a=e;a.indexOf(-1\u003Cd+\"\\x3d\")\u0026\u0026removeParameterByName(a,d);if(0\u003Ea.indexOf(d+\"\\x3d\"+b)){var c=a;a=c.split(\"dlg\")[0]+\"dlg\/\"+d+\"\/\"+b+\"\/http\"+c.split(\"dlg\")[1].split(\"http\")[1]}return a}catch(f){return a}},returnUpdatedURL=function(e,d){try{var b=randomString();b=timeStamp+concatKey+b;var a=e;a.indexOf(-1\u003Cd+\"\\x3d\")\u0026\u0026\nremoveParameterByName(a,d);if(0\u003Ea.indexOf(d+\"\\x3d\"+b))if(-1\u003Ca.indexOf(\"?\")\u0026\u0026-1\u003Ca.indexOf(\"#\")){if(a.indexOf(\"?\")\u003Ea.indexOf(\"#\")){var c=a.split(\"#\")[0];var f=a.split(\"#\")[1].split(\"?\")[0];var g=a.split(\"#\")[1].split(\"?\")[1];a=c+\"?\"+g+\"\\x26\"+d+\"\\x3d\"+b+\"#\"+f}a.indexOf(\"#\")\u003Ea.indexOf(\"?\")\u0026\u0026(c=a.split(\"?\")[0],g=a.split(\"?\")[1].split(\"#\")[0],f=a.split(\"?\")[1].split(\"#\")[1],a=c+\"?\"+g+\"\\x26\"+d+\"\\x3d\"+b+\"#\"+f)}else-1\u003Ca.indexOf(\"?\")?(c=a.split(\"?\")[0],g=a.split(\"?\")[1],a=c+\"?\"+g+\"\\x26\"+d+\"\\x3d\"+b):-1\u003Ca.indexOf(\"#\")?\n(c=a.split(\"#\")[0],f=a.split(\"#\")[1],a=c+\"?\"+d+\"\\x3d\"+b+\"#\"+f):(c=a,a=c+\"?\"+d+\"\\x3d\"+b);return a}catch(h){return a}},getURL=function(e,d){e.forEach(function(b,a,c){b=removeParameterByName(c[a].href,d);b=returnUpdatedURL(b,d);c[a].setAttribute(\"href\",b)})},getDeepLink=function(e,d){e.forEach(function(b,a,c){b=removeParameterByName(c[a].href,d);b=returnUpdatedDeepURL(b,d);c[a].setAttribute(\"href\",b)})},chunkString=function(e,d){return e.match(new RegExp(\".{1,\"+d+\"}\",\"g\"))};getURL(document.querySelectorAll('a[href*\\x3d\"linksynergy\"]'),\n\"u1\");getURL(document.querySelectorAll('a[href*\\x3d\"shareasale.com\"]'),\"afftrack\");getURL(document.querySelectorAll('a[href*\\x3d\"awin1.com\"]'),\"clickref\");getURL(document.querySelectorAll('a[href*\\x3d\"go.redirectingat.com\"]'),\"xcust\");getURL(document.querySelectorAll('a[href*\\x3d\"go.skimresources.com\"]'),\"xcust\");getURL(document.querySelectorAll('a[href*\\x3d\"pntra.com\"]'),\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"pjtra.com\"]'),\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"gopjn.com\"]'),\n\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"pntrs.com\"]'),\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"pntrac.com\"]'),\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"pjatr.com\"]'),\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"\/c\/\"]'),\"subid2\");getDeepLink(document.querySelectorAll('a[href*\\x3d\"\/dlg\/\"]'),\"sid\");getURL(document.querySelectorAll('a[href*\\x3d\"\/click-3861930\"],a[href*\\x3d\"\/click-8246993\"],a[href*\\x3d\"\/click-6415797\"],a[href*\\x3d\"\/click-7990061\"]'),\"sid\");chunkString(stringGroup,\n495).forEach(function(e){dataLayer.push({event:\"afflinkid\",afftimestamp:timeStamp,affstringgroup:e})})}catch(e){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":324
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientID=function(){var a=setInterval(function(){\"undefined\"!==typeof ga\u0026\u0026\"function\"===typeof ga.getAll\u0026\u0026(ga.getAll()[0].get(\"name\"),clearInterval(a),dataLayer.push({event:\"clientId_available\",clientId:ga.getAll()[0].get(\"clientId\")}))},200)}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":325
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b){a[b]=a[b]||{nlsQ:function(g,c,h,d,e,f){return e=a.document,d=e.createElement(\"script\"),d.async=1,d.src=(\"http:\"===a.location.protocol?\"http:\":\"https:\")+\"\/\/cdn-gl.imrworldwide.com\/conf\/\"+g+\".js#name\\x3d\"+c+\"\\x26ns\\x3d\"+b,f=e.getElementsByTagName(\"script\")[0],f.parentNode.insertBefore(d,f),a[b][c]=a[b][c]||{g:h||{},ggPM:function(d,e,f,g,h){(a[b][c].q=a[b][c].q||[]).push([d,e,f,g,h])}},a[b][c]}}}(window,\"NOLBUNDLE\");\nvar nSdkInstance=NOLBUNDLE.nlsQ(\"PF0863AE4-16F7-453B-A349-CA13E26ED811\",\"nlsnInstance\"),nielsenMetadata={type:\"static\",assetid:",["escape",["macro",197],8,16],",section:",["escape",["macro",198],8,16],",segA:\"\",segB:\"\",segC:\"\"};nSdkInstance.ggPM(\"staticstart\",nielsenMetadata);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":340
    },{
      "function":"__html",
      "setup_tags":["list",["tag",117,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InsiderPicks_AMZ\",{content_category:\"insiderpicks\",content_name:\"insiderpicks\",content_ids:",["escape",["macro",55],8,16],",product_catalog_id:",["escape",["macro",81],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    },{
      "function":"__html",
      "setup_tags":["list",["tag",117,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"GuestPassRegCompleted\",{content_name:\"bi_prime\",content_category:\"subscription\",content_ids:",["escape",["macro",152],8,16],",content_type:",["escape",["macro",151],8,16],",value:",["escape",["macro",147],8,16],",currency:\"USD\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":353
    },{
      "function":"__html",
      "setup_tags":["list",["tag",117,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",",["escape",["macro",199],8,16],",{content_name:\"bi_prime\",content_category:\"viewPaywall\",content_ids:\"bi_prime\",content_type:",["escape",["macro",151],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":359
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"46c707e4e995c1cf5b90bfa62de8fbc6\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":362
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cdiv id=\"amzn-assoc-ad-8abbc4aa-bc4b-4ef1-950c-995d1c7ad503\"\u003E\u003C\/div\u003E\u003Cscript async data-gtmsrc=\"\/\/z-na.amazon-adsystem.com\/widgets\/onejs?MarketPlace=US\u0026amp;adInstanceId=8abbc4aa-bc4b-4ef1-950c-995d1c7ad503\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":365
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",143,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.jQuery\u0026\u0026jQuery(\"a\").mousedown(function(a){3==a.which\u0026\u0026dataLayer.push({\"nonleft.linkclick.href\":this.href,\"nonleft.linkclick.class\":this.className,\"nonleft.linkclick.linktext\":this.text,\"nonleft.linkclick.position\":this.attributes[\"data-analytics-position\"]?this.attributes[\"data-analytics-position\"].nodeValue:\"\",\"nonleft.linkclick.module\":this.attributes[\"data-analytics-module\"]?this.attributes[\"data-analytics-module\"].nodeValue:\"\",\"nonleft.linkclick.product\":this.attributes[\"data-analytics-product\"]?\nthis.attributes[\"data-analytics-product\"].nodeValue:\"\",\"nonleft.linkclick.productArea\":this.attributes[\"data-analytics-product-area\"]?this.attributes[\"data-analytics-product-area\"].nodeValue:\"\",\"nonleft.linkclick.productIndex\":this.attributes[\"data-analytics-product-index\"]?this.attributes[\"data-analytics-product-index\"].nodeValue:\"\",\"nonleft.linkclick.productModule\":this.attributes[\"data-analytics-product-module\"]?this.attributes[\"data-analytics-product-module\"].nodeValue:\"\",\"nonleft.linkclick.productPrice\":this.attributes[\"data-analytics-product-price\"]?\nthis.attributes[\"data-analytics-product-price\"].nodeValue:\"\",\"nonleft.linkclick.productAmznAsin\":this.attributes[\"data-amzn-asin\"]?this.attributes[\"data-amzn-asin\"].nodeValue:\"\",event:\"nonleft.linkclick.right\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":369
    },{
      "function":"__html",
      "setup_tags":["list",["tag",117,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"40 seconds\",{pageURI:",["escape",["macro",81],8,16],",vertical:",["escape",["macro",71],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.xl8_config={p:1043,g:1};var xl8_script=document.createElement(\"script\");xl8_script.src=\"https:\/\/cdn.exelator.com\/build\/static.min.js\";xl8_script.type=\"text\/javascript\";xl8_script.async=!0;document.body.appendChild(xl8_script);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d){function e(b,a,c){if(b.addEventListener)b.addEventListener(a,c);else if(b.attachEvent)b.attachEvent(\"on\"+a,function(a){c.call(b,a)});else if(\"undefined\"===typeof b[\"on\"+a]||null===b[\"on\"+a])b[\"on\"+a]=function(a){c.call(b,a)}}e(d,\"message\",function(b){try{var a=JSON.parse(b.data),c=d.dataLayer||(d.dataLayer=[]);a.event\u0026\u0026c.push({event:a.event,postMessageData:a})}catch(f){}})})(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":392
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n\t\"@context\": \"https:\/\/schema.org\",\n\t\"@type\": \"FAQPage\",\n\t\"mainEntity\": [{\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"How did we choose the best rewards credit cards?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003EYou'll notice that this page doesn't include every rewards credit card currently available to new applicants. That's on purpose — we evaluated the options on the market, utilizing the expertise of our Personal Finance Insider staff and the input of credit card, points and miles, and financial experts to narrow down the list to the very best options.\u003C\/p\u003E\u003Cp\u003EWe define \\\"very best options\\\" as those that offer concrete value through benefits like annual statement credits and airport lounge access and through rewards such as bonus points on your everyday spending.\u003C\/p\u003E\u003Cp\u003EThis list doesn't include our top picks for airline and hotel cards. You can learn more about those cards here:\u003C\/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\\\"https:\/\/www.businessinsider.com\/best-airline-credit-card-comparison-delta-united-american\\\"\u003EThe best airline credit cards of 2019\u003C\/a\u003E\u003C\/li\u003E\u003Cli\u003E\u003Ca href=\\\"https:\/\/www.businessinsider.com\/best-hotel-credit-cards\\\"\u003EThe best hotel credit cards of 2019\u003C\/a\u003E\u003C\/li\u003E\u003C\/ul\u003E\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"What credit card offers the best rewards?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"If you don't want to overthink it, the Chase Sapphire Reserve (or the Chase Sapphire Preferred if you want a lower annual fee) is a safe bet. However, there is no easy answer if you want to optimize all of your spending, because all the types of points and miles have different values. We recommend using The Points Guy's valuations to get a sense of what the different currencies are worth. For example, one Chase Ultimate Rewards point is worth 2 cents, while one Delta miles is worth 1.2 cents. So when you look at how many points or miles a rewards credit card offers per dollar, remember that you need to take the value of those points or miles into account.\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"What are the different types of rewards credit cards?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003EThere are a few main types of rewards cards:\u003C\/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003E\\\"Flexible\\\" travel rewards credit cards —\u003C\/strong\u003EMost of the picks in this article fall under this category. These cards earn bank points, also called \\\"flexible points,\\\" that can be redeemed for travel, either directly through the issuing bank's travel portal (like Amex Travel) or with travel partners. This type of rewards credit card is usually the most valuable because you have the most options for using your rewards. For example, Amex has more than 20 travel partners you can transfer points to, and Chase has 13. Examples of this type of card include the Chase Sapphire Preferred, the Amex Gold card, and the Capital One Venture Card.\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003ECash-back credit cards —\u003C\/strong\u003E Examples include the Blue Cash Preferred card. These cards don't earn points or miles; they earn you cash back on all your purchases. If you don't travel or your priority is to get money back, these are the cards for you.\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003EHotel or airline travel rewards credit cards —\u003C\/strong\u003E Examples include the Hilton Honors American Express Aspire Card. These are travel-focused credit cards that earn rewards with a specific hotel or airline loyalty program and offer benefits like credit toward elite status. For that reason, they make the most sense for travelers who are loyal to the given travel brand.\u003C\/li\u003E\u003C\/ul\u003E\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"Should I earn cash back or points?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003EIt depends on what you want to do with your rewards. If you want to put money back in your bank account, a cash-back credit card will help you accomplish just that — and you usually won't have to pay a very high annual fee, if you have to pay one at all.\u003C\/p\u003E\u003Cp\u003EOn the other hand, if you're hoping to earn rewards that you can redeem for travel, a card that earns points is more up your alley. Our picks for best points-earning rewards cards earn either Amex Membership Rewards points, Chase Ultimate Rewards points, or Capital One miles. You can transfer all three of these currencies to travel partners and redeem them for things like free flights. (Note that while Capital One calls its rewards currency \\\"miles,\\\" they aren't miles with a given airline program.)\u003C\/p\u003E\u003Cp\u003EIf you're willing to juggle multiple credit card accounts, there's value in having both cash-back and points-earning cards. If you prefer a single-card strategy, evaluate your goals and consider how much you're willing to pay in annual fees to make the best decision for your situation.\u003C\/p\u003E\"\n\t\t}\n\t\t}]\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":402
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"application\/ld+json\"\u003E\n{\n\t\"@context\": \"https:\/\/schema.org\",\n\t\"@type\": \"FAQPage\",\n\t\"mainEntity\": [{\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"How did we choose the best cash-back credit cards?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003EWe narrowed down the dozens of cash-back credit cards currently available to new applicants by looking at a few factors:\u003C\/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003EEase of use — \u003C\/strong\u003E Are there any hoops to jump through, like needing to be a member of a specific bank?\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003ECash-back earning potential —\u003C\/strong\u003E How much cash back can you earn with this card, and how broad are the bonus categories?\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003EAnnual fee —\u003C\/strong\u003E Many cash-back cards waive an annual fee, but for the few that do charge a fee, is it justified based on the card's rewards?\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003EOptions for various types of consumers —\u003C\/strong\u003E We wanted our top cash-back card picks to reflect different types of users, from families looking to maximize grocery spending to those looking to rebuild their credit score.\u003C\/li\u003E\u003C\/ul\u003E\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"What are the different types of cash-back cards?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003EFlat rate —\u0026nbsp;\u003C\/strong\u003EThese cards earn the same rate of cash back on all purchases. For example, the Chase Freedom Unlimited earns 1.5% back on all spending.\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003ESelect bonus categories —\u003C\/strong\u003E Many other cash-back cards offer bonus cash back (more than 1%) on select spending categories. For example, with the Capital One Savor card, you'll earn 4% back on dining and entertainment, and 2% back at grocery stores.\u003C\/li\u003E\u003Cli\u003E\u003Cstrong\u003ERotating categories —\u003C\/strong\u003E A few cards, including the Chase Freedom, offer bonus cash back on a selection of spending categories that changes every quarter of the year. These cards have a cap on how much bonus cash back you can earn each quarter — with the Freedom, you'll earn 5% back on up to $1,500 in combined purchases each quarter. All purchases above that cap will earn just 1% back.\u003C\/li\u003E\u003Cli\u003ESome cards are starting to offer yet a fourth format for delivering cash-back rewards: pick your own bonus categories from a list of options. These cards include the Bank of America Cash Rewards credit card and the U.S. Bank Cash+ Visa Signature Card.\u003C\/li\u003E\u003C\/ul\u003E\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"What credit card offers the most cash back?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003EIf you don't want to overthink it, the Wells Fargo Propel American Express card is a good go-to. It offers 3% back on a wide variety of categories, including travel and eating out.\u003C\/p\u003E\u003Cp\u003EThat's not to say you couldn't earn more cash back with another card, though. The Blue Cash Preferred card earns 6% back on the first $6,000 you spend each year at US supermarkets (then 1% back), and 6% back on select US streaming services, for example, and the Capital One Savor is the most rewarding pick for dining out with 4% back.\u003C\/p\u003E\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"How does earning cash back work?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003ECash-back credit cards earn you a percentage of cash back —\u0026nbsp;usually at least 1%—\u0026nbsp;on every dollar you spend (or more with cards that have bonus cash-back categories). You can transfer the cash back you earn from these cards to a bank account or use them to wipe charges from your credit card statement. Credit card issuers also allow you to redeem the cash back you earn for gift cards and merchandise. If you're trying to put money back in your wallet, our top recommendations are to transfer your cash back to a banking account or use it to reduce the amount owed on your credit card statement.\u003C\/p\u003E\"\n\t\t}\n\t\t}, {\n\t\t\"@type\": \"Question\",\n\t\t\"name\": \"Should I earn cash back or points?\",\n\t\t\"acceptedAnswer\": {\n\t\t\t\"@type\": \"Answer\",\n\t\t\t\"text\": \"\u003Cp\u003EIt depends on what you want to do with your rewards. If you want to put money back in your bank account, a cash-back credit card will help you accomplish just that — and you usually won't have to pay a very high annual fee, if you have to pay one at all.\u003C\/p\u003E\u003Cp\u003EOn the other hand, if you're hoping to earn rewards that you can redeem for travel, a card that earns points is more up your alley. Our picks for best \u003Ca href=\\\"https:\/\/www.businessinsider.com\/best-rewards-credit-cards\\\"\u003Epoints-earning rewards cards\u003C\/a\u003E earn either \u003Ca href=\\\"https:\/\/www.businessinsider.com\/amex-membership-rewards-points-ways-to-use\\\"\u003EAmex Membership Rewards points\u003C\/a\u003E, \u003Ca href=\\\"https:\/\/www.businessinsider.com\/how-to-use-chase-ultimate-rewards-points-2018-1\\\"\u003EChase Ultimate Rewards points\u003C\/a\u003E, or Capital One miles. You can transfer all three of these currencies to travel partners and redeem them for things like free flights. (Note that while Capital One calls its rewards currency \\\"miles,\\\" they aren't miles with a given airline program.)\u003C\/p\u003E\u003Cp\u003EIf you're willing to juggle multiple credit card accounts, there's value in having both cash-back and points-earning cards. If you prefer a single-card strategy, evaluate your goals and consider how much you're willing to pay in annual fees to make the best decision for your situation.\u003C\/p\u003E\"\n\t\t}\n\t\t}]\n}\n\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":405
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",117,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewPFIContent\",{content_ids:",["escape",["macro",81],8,16],",content_type:",["escape",["macro",77],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":410
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.src=\"https:\/\/code.jquery.com\/jquery-3.3.1.min.js\";a.async=!0;a.addEventListener(\"load\",function(){window.google_tag_manager[",["escape",["macro",200],8,16],"].onHtmlSuccess(",["escape",["macro",201],8,16],")});a.addEventListener(\"error\",function(){window.google_tag_manager[",["escape",["macro",200],8,16],"].onHtmlFailure(",["escape",["macro",201],8,16],")});document.head.appendChild(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":326
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",85],
      "arg1":"sendVirtualPageview"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"facebook\\.com\\\/sharer\\.php"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"facebook\\.com\\\/sharer\\.php"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"linkedin\\.com\\\/shareArticle"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"linkedin\\.com\\\/shareArticle"
    },{
      "function":"_re",
      "arg0":["macro",88],
      "arg1":"twitter\\.com\\\/share"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"twitter\\.com\\\/share"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"\\\/register\\?action\\=index.*\\\u0026first\\=newsletters"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"\\\/register\\?action\\=alerts\\\u0026first\\=index"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^share-link share-post twitter |^share-link share-post linkedin |^share-link share-post facebook|^share-link share-video twitter"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.linkClick"
    },{
      "function":"_cn",
      "arg0":["macro",90],
      "arg1":"review"
    },{
      "function":"_re",
      "arg0":["macro",65],
      "arg1":"\\\/account|\\\/register|\\\/login|\\\/s\\?q="
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"newScroll"
    },{
      "function":"_cn",
      "arg0":["macro",113],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":".businessinsider.com"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"contribut",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"javascript:"
    },{
      "function":"_re",
      "arg0":["macro",114],
      "arg1":".+"
    },{
      "function":"_re",
      "arg0":["macro",114],
      "arg1":"^https?:\\\/\\\/go\\.redirectingat\\.com\\\/\\?id\\=35871X943606",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"utm_"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"businessinsider.com"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"#"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"redirect"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"icon-down-open"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"whatsapp"
    },{
      "function":"_re",
      "arg0":["macro",119],
      "arg1":"^email$|^print$|^embed$|^Copy link$|^Embed video$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",120],
      "arg1":"^email$|^print$|^embed$|^Copy link$|^Embed video$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",121],
      "arg1":"mailto"
    },{
      "function":"_cn",
      "arg0":["macro",122],
      "arg1":"mailto"
    },{
      "function":"_eq",
      "arg0":["macro",123],
      "arg1":"Facebook"
    },{
      "function":"_eq",
      "arg0":["macro",124],
      "arg1":"Like"
    },{
      "function":"_re",
      "arg0":["macro",125],
      "arg1":"https?:\\\/\\\/facebook\\.com\\\/businessinsider",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"socialInt"
    },{
      "function":"_cn",
      "arg0":["macro",126],
      "arg1":"li_ui_li_gen_"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"timer30"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"ipm_"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"businessinsider"
    },{
      "function":"_re",
      "arg0":["macro",122],
      "arg1":"\/share|whatsapp"
    },{
      "function":"_sw",
      "arg0":["macro",114],
      "arg1":"https:\/\/www.businessinsider.com\/intelligence\/research-store"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"op=0#"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"homepage"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"post|video"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"hamburger"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"image"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"item vertical-anchor|main-menu__vertical-link"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"item-label-href|item-thumbnail-href|item-text",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"post"
    },{
      "function":"_cn",
      "arg0":["macro",77],
      "arg1":"BI Intelligence"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"\/event\/"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"ignition 2015",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/event\/"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"trafficSrcCookieSet|gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",71],
      "arg1":"contributor"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"Tech Insider"
    },{
      "function":"_re",
      "arg0":["macro",94],
      "arg1":", Insider$"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"tab"
    },{
      "function":"_re",
      "arg0":["macro",143],
      "arg1":"finanzen-tabs"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"video"
    },{
      "function":"_eq",
      "arg0":["macro",73],
      "arg1":"slideshow"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"SocialShare"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"PianoTemplate"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"^playback-.*"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"playback-time"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"playback\\-aderror|playback-error"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"piano data"
    },{
      "function":"_ew",
      "arg0":["macro",157],
      "arg1":"01"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"adTimingEvent"
    },{
      "function":"_re",
      "arg0":["macro",160],
      "arg1":"get-more-links|see-also|margin-top popular-video|^links-user$|^top$|^links-promo$|^popular-video-header$|^publication-feed-listgroup$"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"nav-vertical-anchor|main-menu__sub-vertical-link|main-menu__sub-nav-link"
    },{
      "function":"_re",
      "arg0":["macro",162],
      "arg1":"flex-item flex-6 section|section sponsored-section"
    },{
      "function":"_re",
      "arg0":["macro",160],
      "arg1":"^first$|^second$"
    },{
      "function":"_re",
      "arg0":["macro",163],
      "arg1":"vert-name ellipsis"
    },{
      "function":"_re",
      "arg0":["macro",162],
      "arg1":"^international-links list-pipes$|^dropdown-menu popover bottom$"
    },{
      "function":"_eq",
      "arg0":["macro",163],
      "arg1":"bi-user-edition right"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"title-link concierge-post-link"
    },{
      "function":"_eq",
      "arg0":["macro",162],
      "arg1":"media concierge-post"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"recommended-title-link|recommended-link"
    },{
      "function":"_re",
      "arg0":["macro",160],
      "arg1":"^recommended-listitem narrow|recommended-group list-unstyled narrow"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^title-link concierge-post-link$|^concierge-post-link$"
    },{
      "function":"_eq",
      "arg0":["macro",163],
      "arg1":"related"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"recommended-title-link"
    },{
      "function":"_re",
      "arg0":["macro",160],
      "arg1":"^recommended-listitem wide"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"concierge-post-link"
    },{
      "function":"_re",
      "arg0":["macro",163],
      "arg1":"media concierge-post"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"recommended-link"
    },{
      "function":"_re",
      "arg0":["macro",163],
      "arg1":"^recommended-listitem wide"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.pageError"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"^(https?:\\\/\\\/)?((www|uk|markets)\\.)?businessinsider\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"^(https?:\\\/\\\/)?(www\\.)?(thisisinsider|insider)\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"^(https?:\\\/\\\/)?(www\\.)?marketsinsider\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":".+"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"javascript:"
    },{
      "function":"_sw",
      "arg0":["macro",55],
      "arg1":"https:\/\/trc.taboola.com\/businessinsider"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"share-link"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"e.businessinsider.com\/join"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"url=https%3A%2F%2Fwww.linkedin.com%2FshareArticle"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"businessinsider.com"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"btn submit"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^verticals-listitem-link$|^logo redesign$|^masthead-icon search$|^vertical-anchor-redesign$|^masthead-dropdown-account-site$"
    },{
      "function":"_re",
      "arg0":["macro",126],
      "arg1":"^homepage-analytics$|^referrer-analytics$"
    },{
      "function":"_re",
      "arg0":["macro",160],
      "arg1":"^dropdown masthead-icon profile$|^masthead-icon globe label$"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^social-link icon|^brands-sister-logo|^brands-logo$|^redesign-social-icon-link$|^redesign-footer-badge app-store$|^redesign-footer-badge google-play$|^redesign-footer-sister-sites sister$|^redesign-footer-site-logo$"
    },{
      "function":"_re",
      "arg0":["macro",163],
      "arg1":"^col-md app-badges$"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^svg-icon logo-BI-icon logo-vertically-center-icon$|^nav-logo-link$ ^accounts-link$|^account-menu-site$|^verticals-accordion-subvertical-link$|^main-menu__sub-vertical-heading redesign$|^verticals-accordion-listitem-link$|^main-menu__vertical-link redesign$|^account-menu-site$|^social-link icon-|^redesign-footer-site-logo$"
    },{
      "function":"_re",
      "arg0":["macro",163],
      "arg1":"^accounts-link$|^accounts-menu-site-container admin-links-redesign"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"menu-edition-picker|editions-picker-select"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"sai|clusterstock|politics|warroom|thelife",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"oilEvents"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"hpEvents"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"popularModule"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"popular-recirc-link"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_617($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/$|^\/newhomepage$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_538($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_539($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",168],
      "arg1":"\\d+"
    },{
      "function":"_eq",
      "arg0":["macro",169],
      "arg1":"blue tag"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_555($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"\/click-3861930|\/click-8246993|\/click-6415797|\/click-7990061|\/dlg\/|go\\.skimresources\\.com|shareasale\\.com|\\\/c\\\/|linksynergy|pntra\\.com|pjtra\\.com|gopjn\\.com|pntrs\\.com|pntrac\\.com|pjatr\\.com|awin1\\.com|go\\.redirectingat\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_574($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^float-right btn button-white$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_587($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"[data-analytics-view-more]"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"afflinkid"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"insiderpicks|insider picks|PFI|Newsroom Affiliate",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",172],
      "arg1":"^(https?:\\\/\\\/)?((www|uk|markets)\\.)?businessinsider\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",172],
      "arg1":"^(https?:\\\/\\\/)?(www\\.)?thisisinsider\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",172],
      "arg1":"^(https?:\\\/\\\/)?(www\\.)?(marketsinsider|insider)\\.com",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",172],
      "arg1":"https:\/\/trc.taboola.com\/businessinsider"
    },{
      "function":"_sw",
      "arg0":["macro",172],
      "arg1":"https:\/\/www.facebook.com\/share"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"nonleft.linkclick"
    },{
      "function":"_re",
      "arg0":["macro",180],
      "arg1":"\\d+"
    },{
      "function":"_eq",
      "arg0":["macro",181],
      "arg1":"blue tag"
    },{
      "function":"_eq",
      "arg0":["macro",144],
      "arg1":"scroll"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gaEvent"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_644($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"tbl-read-more-btn"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_663($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",89],
      "arg1":"tout-tag-link"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_664($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",182],
      "arg1":"tout-tag-link"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"custom.postMessage"
    },{
      "function":"_gt",
      "arg0":["macro",147],
      "arg1":"25"
    },{
      "function":"_eq",
      "arg0":["macro",146],
      "arg1":"Complete"
    },{
      "function":"_le",
      "arg0":["macro",147],
      "arg1":"130"
    },{
      "function":"_eq",
      "arg0":["macro",193],
      "arg1":"not set"
    },{
      "function":"_eq",
      "arg0":["macro",144],
      "arg1":"Piano"
    },{
      "function":"_eq",
      "arg0":["macro",145],
      "arg1":"Purchase"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"PianoTemplate"
    },{
      "function":"_le",
      "arg0":["macro",147],
      "arg1":"25"
    },{
      "function":"_ge",
      "arg0":["macro",147],
      "arg1":"0.01"
    },{
      "function":"_gt",
      "arg0":["macro",147],
      "arg1":"130"
    },{
      "function":"_eq",
      "arg0":["macro",144],
      "arg1":"Share"
    },{
      "function":"_eq",
      "arg0":["macro",145],
      "arg1":"Click"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":".masthead-container-row, .masthead-container-row *, .main-menu__nav, .main-menu__nav *, .row.verticals-accordion, .row.verticals-accordion *, .editions-picker-select, .editions-picker-select *, .nav-menu-links, .nav-menu-links *, .masthead-icon.search, .masthead-icon.search *, .logo.redesign, .logo.redesign *"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_707($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"#sb_form_q"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":".sa_sg, .sa_sg *"
    },{
      "function":"_css",
      "arg0":["macro",42],
      "arg1":"#sb_go_par, #sb_go_par *"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"businessinsider.com"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"ticketleap.com"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.load"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",65],
      "arg1":"\/sc\/"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"Insider Picks Credit Cards|PFI TPG",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"hashChanged"
    },{
      "function":"_cn",
      "arg0":["macro",113],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"post|slideshow|video",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"contribute",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/subscription\/prime"
    },{
      "function":"_gt",
      "arg0":["macro",147],
      "arg1":"0.01"
    },{
      "function":"_cn",
      "arg0":["macro",77],
      "arg1":"BI Prime"
    },{
      "function":"_re",
      "arg0":["macro",55],
      "arg1":"^(https?:\\\/\\\/)?amzn\\.to\\\/|^(https?:\\\/\\\/)?amazon\\.com\\\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_520($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"https:\/\/go.skimresources.com\/?id=35871X943606\u0026xs=1\u0026isjs=1\u0026url=https%3A%2F%2Fwww.amazon.com"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_532($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_629($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",147],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"bi prime|guest pass|guestpass",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_550($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",165],
      "arg1":"(^$|((^|,)406932_650($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"best-rewards-credit-cards"
    },{
      "function":"_cn",
      "arg0":["macro",58],
      "arg1":"best-cash-back-credit-cards"
    },{
      "function":"_re",
      "arg0":["macro",77],
      "arg1":"pfi",
      "ignore_case":true
    }],
  "rules":[
    [["if",4,5],["add",1]],
    [["if",5,6],["add",1]],
    [["if",5,7],["add",2]],
    [["if",5,8],["add",2]],
    [["if",5,9],["add",3]],
    [["if",5,10],["add",3]],
    [["if",1,11],["add",4]],
    [["if",1,12],["add",4]],
    [["if",13,14],["add",5]],
    [["if",17],["add",6]],
    [["if",2,3],["add",7,121]],
    [["if",14,20,22],["unless",19,21],["add",8]],
    [["if",14,20,22,23],["add",8]],
    [["if",14,24,25],["unless",26,27,28,29],["add",9]],
    [["if",14,22],["unless",19,20,21],["add",10]],
    [["if",14,22,23],["unless",20],["add",10]],
    [["if",5,30],["add",11,12]],
    [["if",5,31],["add",11,12]],
    [["if",5,32],["add",13,14]],
    [["if",5,33],["add",13,14]],
    [["if",34,35,36,37],["add",15,20]],
    [["if",5,38],["add",16]],
    [["if",39],["add",17]],
    [["if",5,40,41],["add",18]],
    [["if",14,42],["add",19]],
    [["if",14,43],["add",21]],
    [["if",0,1],["add",22,118,126],["block",123]],
    [["if",1],["add",23,28,84,86,0,124,129,130,134,136,139,92,94,95,96,97,99,100,101,102,103,104,105,106,107,108,109,111,112,113,114,115,116,122]],
    [["if",46,47],["add",24]],
    [["if",5,48],["add",25]],
    [["if",14,49],["add",26]],
    [["if",14,50],["add",27]],
    [["if",47,53],["add",29]],
    [["if",1,54],["add",30]],
    [["if",1,55],["add",30,31]],
    [["if",56,57],["add",31]],
    [["if",5,61,62],["add",32]],
    [["if",1,52],["add",33,60,120]],
    [["if",1,63],["add",33,60]],
    [["if",1,64],["add",33,60,120]],
    [["if",65],["add",34,35]],
    [["if",66],["add",36]],
    [["if",67],["add",37]],
    [["if",70],["add",38]],
    [["if",71,72],["add",39]],
    [["if",68],["add",40],["block",37]],
    [["if",69],["add",41],["block",37]],
    [["if",14,73],["add",42]],
    [["if",14,74],["add",43]],
    [["if",14,75],["add",44]],
    [["if",14,76],["add",44]],
    [["if",14,77],["add",45]],
    [["if",14,78],["add",46]],
    [["if",5,79],["add",47]],
    [["if",5,28],["add",47]],
    [["if",5,80,81],["add",48]],
    [["if",14,82,83],["add",48]],
    [["if",5,84,85],["add",49]],
    [["if",5,86,87],["add",49]],
    [["if",14,88,89],["add",50]],
    [["if",14,90,91],["add",50]],
    [["if",92],["add",51]],
    [["if",14,96],["unless",93,94,95,97,98,99,100,101],["add",52]],
    [["if",14,98],["unless",102],["add",52]],
    [["if",14,103],["add",53]],
    [["if",14,104],["add",54]],
    [["if",5,105],["add",54]],
    [["if",5,106],["add",55]],
    [["if",14,107],["add",56]],
    [["if",14,108],["add",56]],
    [["if",14,109],["add",57]],
    [["if",14,110],["add",57]],
    [["if",5,111],["add",58]],
    [["if",1,45],["add",59,120],["block",74,75]],
    [["if",1,112],["add",59]],
    [["if",113],["add",61]],
    [["if",114],["add",62]],
    [["if",115],["add",63]],
    [["if",14,116,117],["add",63]],
    [["if",118,119,120],["add",64]],
    [["if",121,122,123],["add",65]],
    [["if",14,118,124,126],["unless",125],["add",66]],
    [["if",14,127,128],["add",67,131]],
    [["if",14,118,129,130],["add",68]],
    [["if",5,118,131],["add",69]],
    [["if",132],["add",70]],
    [["if",133,139],["unless",134,135,136,137,138],["add",71]],
    [["if",118,139,140],["unless",141],["add",72]],
    [["if",142,143],["add",73]],
    [["if",122,144],["add",74]],
    [["if",5,145],["add",75]],
    [["if",14,118,124,125,146],["add",76]],
    [["if",14,118,147,148],["unless",124],["add",77]],
    [["if",118,139,140,141],["add",78]],
    [["if",118,139,149],["unless",140],["add",79]],
    [["if",150],["add",80]],
    [["if",151,152,153,154,155,156,157],["add",81]],
    [["if",152,154,155,156,157,158,159],["add",82]],
    [["if",152,154,155,156,157,160],["add",83]],
    [["if",143,161,162],["add",85]],
    [["if",152,154,155,156,157,159],["add",87]],
    [["if",14,163,164],["add",88]],
    [["if",5,165],["add",89]],
    [["if",5,166],["add",90]],
    [["if",5,167],["add",91]],
    [["if",1,169],["unless",168],["add",93]],
    [["if",170],["add",98]],
    [["if",1,171],["add",110]],
    [["if",1,154],["add",117,138]],
    [["if",47],["add",119,121,125]],
    [["if",174],["add",121]],
    [["if",47,58,176,177],["add",123]],
    [["if",152,154,157,178,179],["add",127]],
    [["if",152,154,157,179,180],["add",127]],
    [["if",47,133],["add",128,135]],
    [["if",14,181,182],["add",131]],
    [["if",14,183,184],["add",131]],
    [["if",152,154,155,156,157,186],["add",132]],
    [["if",122,154,187,188],["add",133]],
    [["if",154,189,190],["add",137]],
    [["if",1,191],["add",140]],
    [["if",1,192],["add",141]],
    [["if",1,193],["add",142]],
    [["if",3,15],["block",5,34,36]],
    [["if",3,16],["block",5,34,36]],
    [["if",3,18],["block",7,23]],
    [["if",0,3],["block",18]],
    [["if",3,44],["block",23]],
    [["if",14,51],["block",27,43,44]],
    [["if",3,58],["unless",59,60],["block",31,121]],
    [["if",1,172],["block",120]],
    [["if",1,173],["block",120]],
    [["if",3,175],["block",122,123]],
    [["if",14,185],["unless",154],["block",131]]]
},
"runtime":[
[],[]
]



};
var aa,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var ha=function(){},ia=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},t=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var za=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ba=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ca=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Da=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ea=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Fa=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ga=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ha=function(a){if(null==a)return String(a);var b=Ga.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ia=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ja=function(a){if(!a||"object"!=Ha(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ia(a,"constructor")&&!Ia(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ia(a,b)},A=function(a,b){var c=b||("array"==Ha(a)?[]:{}),d;for(d in a)if(Ia(a,d)){var e=a[d];"array"==Ha(e)?("array"!=Ha(c[d])&&(c[d]=[]),c[d]=A(e,c[d])):Ja(e)?(Ja(c[d])||(c[d]={}),c[d]=A(e,c[d])):c[d]=e}return c};
var Ka=[],La={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ma=function(a){return La[a]},Na=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ra=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Sa={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Ta=function(a){return Sa[a]};Ka[7]=function(a){return String(a).replace(Ra,Ta)};
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ra,Ta)+"'"}};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},fb=function(a){return eb[a]};Ka[16]=function(a){return a};var hb;
var ib=[],kb=[],lb=[],mb=[],nb=[],ob={},pb,rb,sb,tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},ub=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=ob[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):hb(c,e,b)},wb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=vb(a[e],b,c));
return d},xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=ob[b];return c?c.priorityOverride||0:0},vb=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(vb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=ib[g];if(!h||b.Fc(h))return;c[g]=!0;try{var k=wb(h,b,c);k.vtp_gtmEventId=b.id;d=ub(k,b);sb&&(d=sb.Nf(d,k))}catch(w){b.be&&b.be(w,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[vb(a[l],b,c)]=vb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=vb(a[n],b,c);rb&&(m=m||p===rb.xb);d.push(p)}return rb&&m?rb.Qf(d):d.join("");case "escape":d=vb(a[1],b,c);if(rb&&la(a[1])&&"macro"===a[1][0]&&rb.xg(a))return rb.Ig(d);d=String(d);for(var u=2;u<a.length;u++)Ka[a[u]]&&(d=Ka[a[u]](d));return d;case "tag":var q=a[1];if(!mb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Sd:a[2],
index:q};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=zb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},zb=function(a,b,c){try{return pb(wb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Ab=function(){var a=function(b){return{toString:function(){return b}}};return{hd:a("convert_case_to"),jd:a("convert_false_to"),kd:a("convert_null_to"),ld:a("convert_true_to"),md:a("convert_undefined_to"),oh:a("debug_mode_metadata"),ia:a("function"),Ze:a("instance_name"),$e:a("live_only"),af:a("malware_disabled"),bf:a("metadata"),qh:a("original_vendor_template_id"),cf:a("once_per_event"),Fd:a("once_per_load"),Gd:a("setup_tags"),Hd:a("tag_id"),Id:a("teardown_tags")}}();var Bb=null,Eb=function(a){function b(p){for(var u=0;u<p.length;u++)d[p[u]]=!0}var c=[],d=[];Bb=Cb(a);for(var e=0;e<kb.length;e++){var g=kb[e],h=Db(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<mb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Db=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Bb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Bb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Cb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=zb(lb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Fb,Gb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.yf&&(l["fix_"+m]=!0),l.Td=l.Td||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,I:q.I,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,z){var C=y||x||z||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=C;r[w]=B.textContent||B.innerText||C});return{tagName:q[1],I:r,mb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},u=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Td&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ae=function(){return this[this.length-1]};v.Jc=function(B){var F=this.ae();return F&&F.tagName&&F.tagName.toUpperCase()===B.toUpperCase()};v.Mf=
function(B){for(var F=0,H;H=this[F];F++)if(H.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.mb=q.test(B.tagName)||B.mb);return B},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(B){var F=B.tagName;"TR"===F.toUpperCase()&&v.Jc("TABLE")?(k="<TBODY>"+k,C()):l.Ah&&r.test(F)&&v.Mf(F)?v.Jc(F)?x():(k="</"+B.tagName+">"+k,C()):B.mb||v.push(B)},endTag:function(B){v.ae()?l.$f&&!v.Jc(B.tagName)?x():v.pop():l.$f&&(y(),C())}},C=function(){var B=k,F=w(y());k=B;if(F&&
z[F.type])z[F.type](F)};u=function(){C();return w(y())}}();return{append:function(q){k+=q},Rg:u,Gh:function(q){for(var r;(r=u())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Hh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Nh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ih=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Oh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.I){var u=m.I[p];
n+=" "+p+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.mb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.zh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Df=a.Df||!b[h]&&h;Fb=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,u,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)u.call(q,p[r],r)}function d(p,u,q){for(var r in p)p.hasOwnProperty(r)&&u.call(q,r,p[r])}function e(p,
u){d(u,function(q,r){p[q]=r});return p}function g(p,u){p=p||{};d(u,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var u=[];c(p,function(r){u.push(r)});return u}}var k={nf:a,pf:a,qf:a,rf:a,zf:a,Af:function(p){return p},done:a,error:function(p){throw p;},Vg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function u(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,ob:v.defaultView||v.parentWindow,Da:v,Rb:Fb("",{yf:!0}),uc:[q],Sc:"",Tc:v.createElement(q.nodeName),kb:[],na:[]});p(this.Tc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.na,arguments);for(var q;!this.Jb&&this.na.length;)q=this.na.shift(),"function"===typeof q?this.Hf(q):this.cd(q)};u.prototype.Hf=function(q){var r={type:"function",value:q.name||q.toString()};this.Pc(r);q.call(this.ob,this.Da);this.de(r)};
u.prototype.cd=function(q){this.Rb.append(q);for(var r,v=[],w,y;(r=this.Rb.Rg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.mh(v);w&&this.fg(r);y&&this.gg(r)};u.prototype.mh=function(q){var r=this.Ef(q);r.Ld&&(r.Dc=this.Sc+r.Ld,this.Sc+=r.Ng,this.Tc.innerHTML=r.Dc,this.kh())};u.prototype.Ef=function(q){var r=this.uc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.I){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.I.id&&"ps-style"!==x.I.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.mb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Ph:q,raw:v.join(""),Ld:w.join(""),Ng:y.join("")}};u.prototype.kh=function(){for(var q,r=[this.Tc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.uc[p(q,"id")]=q,p(q,"id",null));var w=q.parentNode&&p(q.parentNode,"proxyof");
w&&this.uc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};u.prototype.fg=function(q){var r=this.Rb.clear();r&&this.na.unshift(r);q.src=q.I.src||q.I.rh;q.src&&this.kb.length?this.Jb=q:this.Pc(q);var v=this;this.lh(q,function(){v.de(q)})};u.prototype.gg=function(q){var r=this.Rb.clear();r&&this.na.unshift(r);q.type=q.I.type||q.I.sh||"text/css";this.nh(q);r&&this.write()};u.prototype.nh=function(q){var r=this.Gf(q);this.ug(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Da.createTextNode(q.content)))};u.prototype.Gf=function(q){var r=this.Da.createElement(q.tagName);r.setAttribute("type",q.type);d(q.I,function(v,w){r.setAttribute(v,w)});return r};u.prototype.ug=function(q){this.cd('<span id="ps-style"/>');var r=this.Da.getElementById("ps-style");r.parentNode.replaceChild(q,r)};u.prototype.Pc=function(q){q.Eg=this.na;this.na=[];this.kb.unshift(q)};u.prototype.de=function(q){q!==this.kb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.kb.shift(),this.write.apply(this,q.Eg),!this.kb.length&&this.Jb&&(this.Pc(this.Jb),this.Jb=null))};u.prototype.lh=function(q,r){var v=this.Ff(q),w=this.$g(v),y=this.options.nf;q.src&&(v.src=q.src,this.Yg(v,w?y:function(){r();y()}));try{this.sg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};u.prototype.Ff=function(q){var r=this.Da.createElement(q.tagName);d(q.I,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};u.prototype.sg=function(q){this.cd('<span id="ps-script"/>');
var r=this.Da.getElementById("ps-script");r.parentNode.replaceChild(q,r)};u.prototype.Yg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};u.prototype.$g=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.Vg&&q.src&&q.hasAttribute("async"))};
return u}();l.postscribe=function(){function p(){var w=r.shift(),y;w&&(y=w[w.length-1],y.pf(),w.stream=u.apply(null,w),y.qf())}function u(w,y,x){function z(H){H=x.Af(H);v.write(H);x.rf(H)}v=new n(w,x);v.id=q++;v.name=x.name||v.id;var C=w.ownerDocument,B={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var F=v.ob.onerror||a;v.ob.onerror=function(H,K,P){x.error({Dh:H+
" - "+K+":"+P});F.apply(v.ob,arguments)};v.write(y,function(){e(C,B);v.ob.onerror=F;x.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Ch?w[0]:w;var z=[w,y,x];w.Hg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.zf(z);r.push(z);v||p();return w.Hg},{streams:{},Fh:r,th:n})}();Gb=l.postscribe}})();var D=window,E=document,Hb=navigator,Ib=E.currentScript&&E.currentScript.src,Jb=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Kb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lb=function(a,b,c){var d=E.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kb(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=E.getElementsByTagName("script")[0]||E.body||E.head;l.parentNode.insertBefore(d,l);return d},Mb=function(){if(Ib){var a=Ib.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nb=function(a,b){var c=E.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=E.body&&E.body.lastChild||
E.body||E.head;d.parentNode.insertBefore(c,d);Kb(c,b);void 0!==a&&(c.src=a);return c},Ob=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},G=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){D.setTimeout(a,0)},Qb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Sb=function(a){var b=E.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Tb=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Ub=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var J={ya:"_ee",bc:"event_callback",Oa:"event_timeout",o:"gtag.config",N:"allow_ad_personalization_signals",T:"cookie_expires",Ma:"cookie_update",xa:"session_duration"};var ic=/[A-Z]+/,jc=/\s/,kc=function(a){if(f(a)&&(a=xa(a),!jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},mc=function(a){for(var b={},c=0;c<a.length;++c){var d=kc(a[c]);d&&(b[d.id]=d)}lc(b);var e=[];ta(b,function(g,h){e.push(h)});return e};
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.m="GTM-NS64GV";nc.Bb="an1";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.m+"&cv=469",xc={},yc={},zc=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Ac={},Bc=function(a,b){Ac[a]=Ac[a]||[];Ac[a][b]=!0},Cc=function(a){for(var b=[],c=Ac[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Dc=function(){return"&tc="+mb.filter(function(a){return a}).length},Nc=function(){Ec&&(D.clearTimeout(Ec),Ec=void 0);void 0===Fc||Gc[Fc]&&!Hc||(Ic[Fc]||Jc.zg()||0>=Kc--?(Bc("GTM",1),Ic[Fc]=!0):(Jc.Tg(),Ob(Lc()),Gc[Fc]=!0,Mc=Hc=""))},Lc=function(){var a=Fc;if(void 0===a)return"";var b=Cc("GTM"),c=Cc("TAGGING");return[Oc,Gc[a]?"":"&es=1",Pc[a],b?"&u="+b:"",c?"&ut="+c:"",Dc(),Hc,Mc,"&z=0"].join("")},Qc=function(){return[wc,"&v=3&t=t","&pid="+oa(),"&rv="+nc.Bb].join("")},Rc="0.005000">
Math.random(),Oc=Qc(),Tc=function(){Oc=Qc()},Gc={},Hc="",Mc="",Fc=void 0,Pc={},Ic={},Ec=void 0,Jc=function(a,b){var c=0,d=0;return{zg:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},Tg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Kc=1E3,Uc=function(a,b){if(Rc&&!Ic[a]&&Fc!==a){Nc();Fc=a;Hc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Pc[a]="&e="+c+"&eid="+a;Ec||(Ec=D.setTimeout(Nc,500))}},Vc=function(a,b,c){if(Rc&&!Ic[a]&&b){a!==Fc&&(Nc(),Fc=a);var d=String(b[Ab.ia]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Hc=Hc?Hc+"."+e:"&tr="+e;Ec||(Ec=D.setTimeout(Nc,500));2022<=Lc().length&&Nc()}};var Wc={},Xc=new pa,Yc={},Zc={},bd={name:"dataLayer",set:function(a,b){A(Fa(a,b),Yc);$c()},get:function(a){return ad(a,2)},reset:function(){Xc=new pa;Yc={};$c()}},ad=function(a,b){if(2!=b){var c=Xc.get(a);if(Rc){var d=cd(a);c!==d&&Bc("GTM",5)}return c}return cd(a)},cd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:ed(d)},ed=function(a){for(var b=Yc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var gd=function(a,b){Zc.hasOwnProperty(a)||(Xc.set(a,b),A(Fa(a,b),Yc),$c())},$c=function(a){ta(Zc,function(b,c){Xc.set(b,c);A(Fa(b,void 0),Yc);A(Fa(b,c),Yc);a&&delete Zc[b]})},hd=function(a,b,c){Wc[a]=Wc[a]||{};var d=1!==c?cd(b):Xc.get(b);"array"===Ha(d)||"object"===Ha(d)?Wc[a][b]=A(d):Wc[a][b]=d},id=function(a,b){if(Wc[a])return Wc[a][b]};var jd=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===kd()||d||"http:"!=D.location.protocol?a:b)+c},kd=function(){var a=Mb(),b;if(1===a)a:{var c=sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=E.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var zd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ad={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ed=function(a){var b=ad("gtm.whitelist");b&&Bc("GTM",9);var c=b&&Ea(wa(b),Ad),d=ad("gtm.blacklist");d||(d=ad("tagTypeBlacklist"))&&Bc("GTM",3);
d?Bc("GTM",8):d=[];Dd()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=t(wa(d),"google")&&Bc("GTM",2);var e=d&&Ea(wa(d),Bd),g={};return function(h){var k=h&&h[Ab.ia];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>t(c,k))if(l&&0<l.length)for(var p=
0;p<l.length;p++){if(0>t(c,l[p])){Bc("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var q=0<=t(e,k);if(q)u=q;else{var r=qa(e,l||[]);r&&Bc("GTM",10);u=r}}var v=!m||u;v||!(0<=t(l,"sandboxedScripts"))||c&&-1!==t(c,"sandboxedScripts")||(v=qa(e,Cd));return g[k]=v}},Dd=function(){return zd.test(D.location&&D.location.hostname)};var Fd={Nf:function(a,b){b[Ab.hd]&&"string"===typeof a&&(a=1==b[Ab.hd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ab.kd)&&null===a&&(a=b[Ab.kd]);b.hasOwnProperty(Ab.md)&&void 0===a&&(a=b[Ab.md]);b.hasOwnProperty(Ab.ld)&&!0===a&&(a=b[Ab.ld]);b.hasOwnProperty(Ab.jd)&&!1===a&&(a=b[Ab.jd]);return a}};var Gd={active:!0,isWhitelisted:function(){return!0}},Hd=function(a){var b=oc.zones;!b&&a&&(b=oc.zones=a());return b};var Id=!1,Jd=0,Kd=[];function Ld(a){if(!Id){var b=E.createEventObject,c="complete"==E.readyState,d="interactive"==E.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Id=!0;for(var e=0;e<Kd.length;e++)I(Kd[e])}Kd.push=function(){for(var g=0;g<arguments.length;g++)I(arguments[g]);return 0}}}function Md(){if(!Id&&140>Jd){Jd++;try{E.documentElement.doScroll("left"),Ld()}catch(a){D.setTimeout(Md,50)}}}var Nd=function(a){Id?a():Kd.push(a)};var Od={},Pd={},Qd=function(a,b,c,d){if(!Pd[a]||qc[b]||"__zone"===b)return-1;var e={};Ja(d)&&(e=A(d,e));e.id=c;e.status="timeout";return Pd[a].tags.push(e)-1},Rd=function(a,b,c,d){if(Pd[a]){var e=Pd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Sd(a){for(var b=Od[a]||[],c=0;c<b.length;c++)b[c]();Od[a]={push:function(d){d(nc.m,Pd[a])}}}
var Vd=function(a,b,c){Pd[a]={tags:[]};ia(b)&&Td(a,b);c&&D.setTimeout(function(){return Sd(a)},Number(c));return Ud(a)},Td=function(a,b){Od[a]=Od[a]||[];Od[a].push(Ba(function(){return I(function(){b(nc.m,Pd[a])})}))};function Ud(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ba(function(){b++;d&&b>=c&&Sd(a)})},wf:function(){d=!0;b>=c&&Sd(a)}}};var Wd=function(){function a(d){return!ja(d)||0>d?0:d}if(!oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ja(bd.get("gtm.start"))?bd.get("gtm.start"):0;oc._li={cst:a(c-b),cbt:a(uc-b)}}};var $d=!1,ae=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},be=!1;
var ce=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||Bc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Wd();return D[b]},de=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ae();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var fe=function(){},ee=function(){return D.GoogleAnalyticsObject||"ga"};var he=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var ie=/:[0-9]+$/,je=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},me=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ke(a.protocol)||ke(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(ie,"").toLowerCase());var g=b,h,k=ke(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=le(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(ie,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Bc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=t(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=je(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ke=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
ne=function(a){var b=E.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Bc("TAGGING",1),c="/"+c);var d=b.hostname.replace(ie,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function se(a,b,c,d){var e=mb[a],g=te(a,b,c,d);if(!g)return null;var h=vb(e[Ab.Gd],c,[]);if(h&&h.length){var k=h[0];g=se(k.index,{L:g,U:1===k.Sd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function te(a,b,c,d){function e(){if(g[Ab.af])k();else{var w=wb(g,c,[]),y=Qd(c.id,String(g[Ab.ia]),Number(g[Ab.Hd]),w[Ab.bf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=ya()-C;Vc(c.id,mb[a],"5");Rd(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=ya()-C;Vc(c.id,mb[a],"6");Rd(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;Vc(c.id,g,"1");var z=function(){var B=ya()-C;Vc(c.id,g,"7");Rd(c.id,y,"exception",B);x||(x=!0,k())};var C=ya();try{ub(w,c)}catch(B){z(B)}}}var g=mb[a],h=b.L,k=b.U,l=b.terminate;if(c.Fc(g))return null;var m=vb(g[Ab.Id],c,[]);if(m&&m.length){var n=m[0],p=se(n.index,{L:h,U:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Sd?l:p}if(g[Ab.Fd]||g[Ab.cf]){var u=g[Ab.Fd]?nb:c.bh,q=h,r=k;if(!u[a]){e=Ba(e);var v=ue(a,u,e);h=v.L;k=v.U}return function(){u[a](q,r)}}return e}
function ue(a,b,c){var d=[],e=[];b[a]=ve(d,e,c);return{L:function(){b[a]=we;for(var g=0;g<d.length;g++)d[g]()},U:function(){b[a]=xe;for(var g=0;g<e.length;g++)e[g]()}}}function ve(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function we(a){a()}function xe(a,b){b()};var Ae=function(a,b){for(var c=[],d=0;d<mb.length;d++)if(a.gb[d]){var e=mb[d];var g=b.add();try{var h=se(d,{L:g,U:g,terminate:g},a,d);h?c.push({ue:d,ie:xb(e),Yf:h}):(ye(d,a),g())}catch(l){g()}}b.wf();c.sort(ze);for(var k=0;k<c.length;k++)c[k].Yf();return 0<c.length};function ze(a,b){var c,d=b.ie,e=a.ie;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ue,k=b.ue;g=h>k?1:h<k?-1:0}return g}
function ye(a,b){if(!Rc)return;var c=function(d){var e=b.Fc(mb[d])?"3":"4",g=vb(mb[d][Ab.Gd],b,[]);g&&g.length&&c(g[0].index);Vc(b.id,mb[d],e);var h=vb(mb[d][Ab.Id],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Be=!1,Ce=function(a,b,c,d,e){if("gtm.js"==b){if(Be)return!1;Be=!0}Uc(a,b);var g=Vd(a,d,e);hd(a,"event",1);hd(a,"ecommerce",1);hd(a,"gtm");var h={id:a,name:b,Fc:Ed(c),gb:[],bh:[],be:function(){Bc("GTM",6)}};h.gb=Eb(h);var k=Ae(h,g);
if(!k)return k;for(var l=0;l<h.gb.length;l++)if(h.gb[l]){var m=mb[l];if(m&&!qc[String(m[Ab.ia])])return!0}return!1};var Ee=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.ib=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.ib[h])return g.ib[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Fe={},Ge=["G"];Fe.we="";var He=Fe.we.split(",");function Ie(){var a=oc;return a.gcq=a.gcq||new Je}
var Ke=function(a,b,c){Ie().register(a,b,c)},Le=function(a,b,c,d){Ie().push("event",[b,a],c,d)},Me=function(a,b){Ie().push("config",[a],b)},Ne={},Oe=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.ib={};this.je=null;this.Yd=!1},Pe=function(a,b,c,d,e){this.type=a;this.ve=b;this.K=c||"";this.Fb=d;this.defer=e},Je=function(){this.Od={};this.Xd={};this.$a=[]},Qe=function(a,b){var c=kc(b);return a.Od[c.containerId]=a.Od[c.containerId]||new Oe},Re=function(a,b,c,d){if(d.K){var e=
Qe(a,d.K),g=e.je;if(g){var h=A(c),k=A(e.targetConfig[d.K]),l=A(e.containerConfig),m=A(e.ib),n=A(a.Xd),p=new Ee(h,k,l,m,n);try{3===g.length?g(b,d.ve,p):4===g.length&&g(d.K,b,d.ve,p)}catch(u){}}}};
Je.prototype.register=function(a,b,c){if(3!==Qe(this,a).status){Qe(this,a).je=b;Qe(this,a).status=3;c&&(Qe(this,a).ib=c);var d=kc(a),e=Ne[d.containerId];if(void 0!==e){var g=oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();oc[d.containerId]._spx&&(h=h.toLowerCase());var k=ad("gtm.uniqueEventId"),l=h,m=ya()-g;if(Rc&&!Ic[k]){k!==Fc&&(Nc(),Fc=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);Mc=Mc?Mc+","+n:"&cl="+n}delete Ne[d.containerId]}this.flush()}};
Je.prototype.push=function(a,b,c,d){var e=Math.floor(ya()/1E3);if(c){var g=kc(c),h;if(h=g){var k;if(k=1===Qe(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Qe(this,c).status=2,this.push("require",[],g.containerId),Ne[g.containerId]=ya(),!jd())){var m=encodeURIComponent(g.containerId);Lb(("http:"!=D.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=dataLayer&cx=c"))}}this.$a.push(new Pe(a,e,c,b,d));d||this.flush()};
Je.prototype.flush=function(a){for(var b=this;this.$a.length;){var c=this.$a[0];if(c.defer)c.defer=!1,this.$a.push(c);else switch(c.type){case "require":if(3!==Qe(this,c.K).status&&!a)return;break;case "set":ta(c.Fb[0],function(l,m){A(Fa(l,m),b.Xd)});break;case "config":var d=c.Fb[0],e=!!d[J.vb];delete d[J.vb];var g=Qe(this,c.K),h=kc(c.K),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.K]={});g.Yd&&e||Re(this,J.o,d,c);g.Yd=!0;k?A(d,g.containerConfig):A(d,g.targetConfig[c.K]);break;
case "event":Re(this,c.Fb[1],c.Fb[0],c)}this.$a.shift()}};var Se=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Ve=function(a,b,c,d){var e=Te(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Ue(e,function(g){return g.Kb},b);if(1===e.length)return e[0].id;e=Ue(e,function(g){return g.hb},c);return e[0]?e[0].id:void 0}};
function We(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Se(b,e).indexOf(c)}
var Ze=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,u=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(u=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=Xe(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Ye(y,u)&&We(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!Ye(p,u)&&We(m,a,l)}return k};function Ue(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Te(a,b){for(var c=[],d=Se(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Kb:1*k[0]||1,hb:1*k[1]||1}))}}return c}
var $e=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,af=/(^|\.)doubleclick\.net$/i,Ye=function(a,b){return af.test(document.location.hostname)||"/"===b&&$e.test(a)},Xe=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;af.test(e)||$e.test(e)||a.push("none");return a};var bf="".split(/,/),cf=!1;var df=null,ef={},ff={},gf,hf=function(a,b){var c={event:a};b&&(c.eventModel=A(b),b[J.bc]&&(c.eventCallback=b[J.bc]),b[J.Oa]&&(c.eventTimeout=b[J.Oa]));return c};
var pf={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ja(a[2])&&void 0!=a[2])return;c=a[2]}var d=hf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Bh().uh(a[1],a[2])},set:function(a){var b;2==a.length&&Ja(a[1])?b=A(a[1]):3==a.length&&
f(a[1])&&(b={},Ja(a[2])||la(a[2])?b[a[1]]=A(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},qf={policy:!0};var sf=function(a){return rf?E.querySelectorAll(a):null},tf=function(a,b){if(!rf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!E.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},uf=!1;if(E.querySelectorAll)try{var vf=E.querySelectorAll(":root");vf&&1==vf.length&&vf[0]==E.documentElement&&(uf=!0)}catch(a){}var rf=uf;var Cf=function(a){if(Bf(a))return a;this.jh=a};Cf.prototype.eg=function(){return this.jh};var Bf=function(a){return!a||"object"!==Ha(a)||Ja(a)?!1:"getUntrustedUpdateValue"in a};Cf.prototype.getUntrustedUpdateValue=Cf.prototype.eg;var Df=!1,Ef=[];function Ff(){if(!Df){Df=!0;for(var a=0;a<Ef.length;a++)I(Ef[a])}}var Gf=function(a){Df?I(a):Ef.push(a)};var Hf=[],If=!1,Jf=function(a){return D["dataLayer"].push(a)},Kf=function(a){var b=oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Mf=function(a){var b=a._clear;ta(a,function(g,h){"_clear"!==g&&(b&&gd(g,void 0),gd(g,h))});tc||(tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=zc(),a["gtm.uniqueEventId"]=d,gd("gtm.uniqueEventId",d));vc=c;var e=Lf(a);
vc=null;switch(c){case "gtm.init":Bc("GTM",19),e&&Bc("GTM",20)}return e};function Lf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=oc.zones;d=e?e.checkState(nc.m,c):Gd;return d.active?Ce(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Nf=function(){for(var a=!1;!If&&0<Hf.length;){If=!0;delete Yc.eventModel;$c();var b=Hf.shift();if(null!=b){var c=Bf(b);if(c){var d=b;b=Bf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ad(h,1);if(la(k)||Ja(k))k=A(k);Zc[h]=k}}try{if(ia(b))try{b.call(bd)}catch(v){}else if(la(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),u=ad(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&f(b[0])){var r=pf[b[0]];if(r&&(!c||!qf[b[0]])){b=r(b);break a}}b=void 0}if(!b){If=!1;continue}}a=Mf(b)||a}}finally{c&&$c(!0)}}If=!1}
return!a},Of=function(){var a=Nf();try{var b=nc.m,c=D["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Qf=function(){var a=Jb("dataLayer",[]),b=Jb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Nd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Gf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Cf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Hf.push.apply(Hf,d);if(300<this.length)for(Bc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Nf()&&h};Hf.push.apply(Hf,a.slice(0));Pf()&&I(Of)},Pf=function(){var a=!0;return a};var Rf;var mg={};mg.xb=new String("undefined");
var ng=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===mg.xb?b:a[d]);return c.join("")}};ng.prototype.toString=function(){return this.resolve("undefined")};ng.prototype.valueOf=ng.prototype.toString;mg.ff=ng;mg.qc={};mg.Qf=function(a){return new ng(a)};var og={};mg.Ug=function(a,b){var c=zc();og[c]=[a,b];return c};mg.Pd=function(a){var b=a?0:1;return function(c){var d=og[c];if(d&&"function"===typeof d[b])d[b]();og[c]=void 0}};mg.xg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};mg.Ig=function(a){if(a===mg.xb)return a;var b=zc();mg.qc[b]=a;return'google_tag_manager["'+nc.m+'"].macro('+b+")"};mg.Bg=function(a,b,c){a instanceof mg.ff&&(a=a.resolve(mg.Ug(b,c)),b=ha);return{Dc:a,L:b}};var pg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Qb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},qg=function(a){oc.hasOwnProperty("autoEventsSettings")||(oc.autoEventsSettings={});var b=oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},rg=function(a,b,c){qg(a)[b]=c},sg=function(a,b,c,d){var e=qg(a),g=za(e,b,d);e[b]=c(g)},tg=function(a,b,c){var d=qg(a);return za(d,b,c)};var ug=function(){for(var a=Hb.userAgent+(E.cookie||"")+(E.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},xg=function(a,b,c,d){var e=vg(b);return Ve(a,e,wg(c),d)},yg=function(a,b,c,d){var e=""+vg(c),g=wg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},vg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},wg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var zg=["1"],Ag={},Eg=function(a,b,c,d){var e=Bg(a);Ag[e]||Cg(e,b,c)||(Dg(e,ug(),b,c,d),Cg(e,b,c))};function Dg(a,b,c,d,e){var g=yg(b,"1",d,c);Ze(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Cg(a,b,c){var d=xg(a,b,c,zg);d&&(Ag[a]=d);return d}function Bg(a){return(a||"_gcl")+"_au"};var Fg=function(){for(var a=[],b=E.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({$c:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].$c]||(g[a[h].$c]=[]),g[a[h].$c].push({timestamp:k[1],bg:k[2]}))}return g};function Gg(){for(var a=Hg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ig(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Hg,Jg,Kg=function(a){Hg=Hg||Ig();Jg=Jg||Gg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Hg[l],Hg[m],Hg[n],Hg[p])}return b.join("")},Lg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Jg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Hg=Hg||Ig();Jg=Jg||
Gg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Mg;function Ng(a,b){if(!a||b===E.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var Rg=function(){var a=Og,b=Pg,c=Qg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){G(E,"mousedown",d);G(E,"keyup",d);G(E,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},Qg=function(){var a=Jb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Sg=/(.*?)\*(.*?)\*(.*)/,Tg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ug=/^(?:www\.|m\.|amp\.)+/,Vg=/([^?#]+)(\?[^#]*)?(#.*)?/,Wg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Yg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Kg(String(d))))}var e=b.join("*");return["1",Xg(e),e].join("*")},Xg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Mg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Mg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Mg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},$g=function(){return function(a){var b=ne(D.location.href),c=b.search.replace("?",""),d=je(c,"_gl",!0)||"";a.query=Zg(d)||{};var e=me(b,"fragment").match(Wg);a.fragment=Zg(e&&e[3]||
"")||{}}},ah=function(){var a=$g(),b=Qg();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ca(c,d.query),Ca(c,d.fragment));return c},Zg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Sg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Xg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},u=k?k.split("*"):[],q=0;q<u.length;q+=2)p[u[q]]=Lg(u[q+1]);return p}}}}catch(r){}};
function bh(a,b,c){function d(m){var n=m,p=Wg.exec(n),u=n;if(p){var q=p[2],r=p[4];u=p[1];r&&(u=u+q+r)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Vg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function ch(a,b,c){for(var d={},e={},g=Qg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Ng(k.domains,b)&&(k.fragment?Ca(e,k.callback()):Ca(d,k.callback()))}if(Da(d)){var l=Yg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,u=0;u<n.length;u++){var q=n[u];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=E.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=bh(l,a.action);he.test(v)&&(a.action=v)}}}else dh(l,a,!1)}if(!c&&Da(e)){var w=Yg(e);dh(w,a,!0)}}function dh(a,b,c){if(b.href){var d=bh(a,b.href,void 0===c?!1:c);he.test(d)&&(b.href=d)}}
var Og=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||ch(e,e.hostname,!1)}}catch(h){}},Pg=function(a){try{if(a.action){var b=me(ne(a.action),"host");ch(a,b,!0)}}catch(c){}},eh=function(a,b,c,d){Rg();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};Qg().decorators.push(e)},fh=function(){var a=E.location.hostname,b=Tg.exec(E.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Ug,""),l=e.replace(Ug,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},gh=function(a,b){return!1===a?!1:a||b||fh()};var hh={};var ih=/^\w+$/,jh=/^[\w-]+$/,kh=/^~?[\w-]+$/,lh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function mh(a){return a&&"string"==typeof a&&a.match(ih)?a:"_gcl"}var oh=function(){var a=ne(D.location.href),b=me(a,"query",!1,void 0,"gclid"),c=me(a,"query",!1,void 0,"gclsrc"),d=me(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||je(e,"gclid",void 0);c=c||je(e,"gclsrc",void 0)}return nh(b,c,d)};
function nh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(jh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==hh.gtm_3pds?0:hh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var qh=function(a){var b=oh();ph(b,a)};
function ph(a,b,c){function d(p,u){var q=rh(p,e);q&&Ze(q,u,h,g,l,!0)}b=b||{};var e=mh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ga?7776E3:b.Ga;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.Rh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var th=function(a,b,c,d,e){for(var g=ah(),h=mh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==lh[l]){var m=rh(l,h),n=g[m];if(n){var p=Math.min(sh(n),ya()),u;b:{for(var q=p,r=Se(m,E.cookie),v=0;v<r.length;++v)if(sh(r[v])>q){u=!0;break b}u=!1}u||Ze(m,n,c,d,0==e?void 0:new Date(p+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};ph(nh(g.gclid,g.gclsrc),w)},rh=function(a,b){var c=lh[a];if(void 0!==c)return b+c},sh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function uh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var vh=function(a,b,c,d,e){if(la(b)){var g=mh(e);eh(function(){for(var h={},k=0;k<a.length;++k){var l=rh(a[k],g);if(l){var m=Se(l,E.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},wh=function(a){return a.filter(function(b){return kh.test(b)})},xh=function(a,b){for(var c=mh(b&&b.prefix),d={},e=0;e<a.length;e++)lh[a[e]]&&(d[a[e]]=lh[a[e]]);ta(d,function(g,h){var k=Se(c+h,E.cookie);if(k.length){var l=k[0],m=sh(l),n={};n[g]=[uh(l)];ph(n,b,m)}})};var yh=/^\d+\.fls\.doubleclick\.net$/;function zh(a){var b=ne(D.location.href),c=me(b,"host",!1);if(c&&c.match(yh)){var d=me(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ah(a,b){if("aw"==a||"dc"==a){var c=zh("gcl"+a);if(c)return c.split(".")}var d=mh(b);if("_gcl"==d){var e;e=oh()[a]||[];if(0<e.length)return e}var g=rh(a,d),h;if(g){var k=[];if(E.cookie){var l=Se(g,E.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=uh(l[m]);n&&-1===t(k,n)&&k.push(n)}h=wh(k)}else h=k}else h=k}else h=[];return h}
var Bh=function(){var a=zh("gac");if(a)return decodeURIComponent(a);var b=Fg(),c=[];ta(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].bg);g=wh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Ch=function(a,b,c,d,e){Eg(b,c,d,e);var g=Ag[Bg(b)],h=oh().dc||[],k=!1;if(g&&0<h.length){var l=oc.joined_au=oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",u=p=p+"?gclid="+h[n]+"&auiddc="+g;Hb.sendBeacon&&Hb.sendBeacon(u)||Ob(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Bg(b),r=Ag[q];r&&Dg(q,r,c,d,e)}};var Dh;if(3===nc.Bb.length)Dh="g";else{var Eh="G";Dh=Eh}
var Fh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Dh,OPT:"o"},Gh=function(a){var b=nc.m.split("-"),c=b[0].toUpperCase(),d=Fh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===nc.Bb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+nc.Bb+e};var Lh=["input","select","textarea"],Mh=["button","hidden","image","reset","submit"],Nh=function(a){var b=a.tagName.toLowerCase();return!ma(Lh,function(c){return c===b})||"input"===b&&ma(Mh,function(c){return c===a.type.toLowerCase()})?!1:!0},Oh=function(a){return a.form?a.form.tagName?a.form:E.getElementById(a.form):Tb(a,["form"],100)},Ph=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Nh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var Sh=!!D.MutationObserver,Th=void 0,Uh=function(a){if(!Th){var b=function(){var c=E.body;if(c)if(Sh)(new MutationObserver(function(){for(var e=0;e<Th.length;e++)I(Th[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;G(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Th.length;e++)I(Th[e])}))})}};Th=[];E.body?b():I(b)}Th.push(a)};
var mi=function(){var a=E.body,b=E.documentElement||a&&a.parentElement,c,d;if(E.compatMode&&"BackCompat"!==E.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Bc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ni=function(a){var b=mi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},oi=function(a){if(E.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var pi=[],qi=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),ri=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<pi.length;g++)if(!pi[g])return pi[g]=d,g;return pi.push(d)-1},si=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:ya()};I(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=ni(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},ti=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(qi){var e=!1;I(function(){e||si(a,b,c)()});return ri(function(g){e=!0;for(var h={Ka:0};h.Ka<g.length;h={Ka:h.Ka},h.Ka++)I(function(k){return function(){return a(g[k.Ka])}}(h))},b,c)}return D.setInterval(si(a,b,c),1E3)},ui=function(a){qi?0<=a&&a<pi.length&&pi[a]&&(pi[a].disconnect(),pi[a]=void 0):D.clearInterval(a)};var wi=D.clearTimeout,xi=D.setTimeout,R=function(a,b,c){if(jd()){b&&I(b)}else return Lb(a,b,c)},yi=function(){return D.location.href},zi=function(a){return me(ne(a),"fragment")},Ai=function(a){return le(ne(a))},Bi=null;
var V=function(a,b){return ad(a,b||2)},Ci=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Jf(a)},Di=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},Ei=function(a,b,c){return Se(a,b,void 0===c?!0:!!c)},Fi=function(a,b,c){var d={prefix:a,path:b,domain:c,Ga:void 0};qh(d);xh(["aw","dc"],d)},Gi=function(a,b){if(jd()){b&&I(b)}else Nb(a,b)},Hi=function(a){return!!tg(a,
"init",!1)},Ii=function(a){rg(a,"init",!0)},Ji=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});R(Q("https://","http://",d))},Ki=function(a,b){var c=a[b];return c};

var Li=mg.Bg;var Mi=new pa,Ni=function(a,b){function c(h){var k=ne(h),l=me(k,"protocol"),m=me(k,"host",!0),n=me(k,"port"),p=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Oi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Oi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=t(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,r=Mi.get(q);r||(r=new RegExp(c,u),Mi.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ni(b,c)}return!1};var Qi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ri={},Si=encodeURI,X=encodeURIComponent,Ti=Ob;var Ui=function(a,b){if(!a)return!1;var c=me(ne(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Vi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Ri.yg=function(){var a=!1;return a};var Ej=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Se("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var sk=function(a){return"_"===a.charAt(0)},tk=function(a){ta(a,function(c){sk(c)&&delete a[c]});var b=a[J.wb]||{};ta(b,function(c){sk(c)&&delete b[c]})};var wk=function(a,b,c){Le(b,c,a)},xk=function(a,b,c){Le(b,c,a,!0)},zk=function(a,b){},yk=function(a,b){};
var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"469"})}();
Z.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],C=x.split(","),B=0;B<C.length;B++){var F=Number(C[B]);if(isNaN(F))return[];n.test(C[B])||z.push(F)}return z}function c(){var x=0,z=0;return function(){var C=mi(),B=C.height;x=Math.max(v.scrollLeft+C.width,x);z=Math.max(v.scrollTop+B,z);return{Tf:x,Uf:z}}}function d(){q=W("self");
r=q.document;v=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,C,B){var F=l(z),H={},K;for(K in F){H.oa=K;if(F.hasOwnProperty(H.oa)){var P=Number(H.oa);x<P||(Ci({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":C.toLowerCase(),"gtm.scrollDirection":B,"gtm.triggers":F[H.oa].join(",")}),sg("sdl",z,function(Y){return function(T){delete T[Y.oa];return T}}(H),{}))}H={oa:H.oa}}}function g(){var x=y(),z=x.Tf,C=x.Uf,B=z/v.scrollWidth*100,F=C/v.scrollHeight*100;e(z,"horiz.pix",
p.zb,u.Ed);e(B,"horiz.pct",p.yb,u.Ed);e(C,"vert.pix",p.zb,u.Kd);e(F,"vert.pct",p.yb,u.Kd);rg("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&q.addEventListener&&(x=50,z=!0);var C=0,B=!1,F=function(){B?C=xi(F,x):(C=0,g(),Hi("sdl")&&!a()&&(Pb(q,"scroll",H),Pb(q,"resize",H),rg("sdl","init",!1)));B=!1},H=function(){z&&y();C?B=!0:(C=xi(F,x),rg("sdl","pending",!0))};return H}function k(x,z,C){if(z){var B=b(String(x));sg("sdl",C,function(F){for(var H=0;H<B.length;H++){var K=
String(B[H]);F.hasOwnProperty(K)||(F[K]=[]);F[K].push(z)}return F},{})}}function l(x){return tg("sdl",x,{})}function m(x){I(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,C=x.vtp_horizontalThresholdsPixels,B=x.vtp_horizontalThresholdsPercent,F=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,K=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case p.zb:k(C,z,"horiz.pix");break;case p.yb:k(B,z,"horiz.pct")}switch(F){case p.zb:k(H,z,"vert.pix");break;case p.yb:k(K,
z,"vert.pct")}Hi("sdl")?tg("sdl","pending")||(w||(d(),w=!0),I(function(){return g()})):(d(),w=!0,v&&(Ii("sdl"),rg("sdl","pending",!0),I(function(){g();if(a()){var P=h();G(q,"scroll",P);G(q,"resize",P)}else rg("sdl","init",!1)})))}var n=/^\s*$/,p={yb:"PERCENT",zb:"PIXELS"},u={Kd:"vertical",Ed:"horizontal"},q,r,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.b="sdl";Z.__sdl.g=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Gf(function(){m(x)})})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=sf(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=E.getElementById(a.vtp_elementId);b&&(c=d?Qb(b,d):Rb(b));return xa(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(id(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||E.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(ne(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ai(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=pg(c,"gtm.click");Ci(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Hi("cl")){var c=W("document");G(c,"click",a,!0);Ii("cl")}I(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Ei(a.vtp_name,V("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||yi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ai(String(c));var e=ne(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=me(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(b){return function(){if(b.Kc&&b.Mc>=b.Kc)b.Ec&&W("self").clearInterval(b.Ec);else{b.Mc++;var c=(new Date).getTime();Ci({event:b.Y,"gtm.timerId":b.Ec,"gtm.timerEventNumber":b.Mc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Kc,"gtm.timerStartTime":b.te,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.te,"gtm.triggers":b.hh})}}}(function(b){Z.__tl=b;Z.__tl.b="tl";Z.__tl.g=!0;Z.__tl.priorityOverride=0})(function(b){I(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{Y:b.vtp_eventName,Mc:0,interval:Number(b.vtp_interval),Kc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),hh:String(b.vtp_uniqueTriggerId||"0"),te:(new Date).getTime()};c.Ec=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;A(Vi(n.vtp_fieldsToSet,"fieldName","value"),g);A(Vi(n.vtp_contentGroup,"index","group"),h);A(Vi(n.vtp_dimension,"index","dimension"),k);A(Vi(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=A(n);d=A(d,p)}A(Vi(d.vtp_fieldsToSet,"fieldName","value"),g);A(Vi(d.vtp_contentGroup,
"index","group"),h);A(Vi(d.vtp_dimension,"index","dimension"),k);A(Vi(d.vtp_metric,"index","metric"),l);var u=ce(d.vtp_functionName);if(ia(u)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+zc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var L=[].slice.call(arguments,0);L[0]=q+L[0];u.apply(window,L)},x=function(O,L){return void 0===L?L:O(L)},z=function(O,L){if(L)for(var ra in L)L.hasOwnProperty(ra)&&y("set",O+ra,L[ra])},C=function(){
var O=function(ml,Zh,nl){if(!Ja(Zh))return!1;for(var Sc=za(Object(Zh),nl,[]),of=0;Sc&&of<Sc.length;of++)y(ml,Sc[of]);return!!Sc&&0<Sc.length},L;if(d.vtp_useEcommerceDataLayer){var ra=!1;ra||(L=V("ecommerce",1))}else d.vtp_ecommerceMacroData&&(L=d.vtp_ecommerceMacroData.ecommerce);if(!Ja(L))return;L=Object(L);var yb=za(g,"currencyCode",L.currencyCode);
void 0!==yb&&y("set","&cu",yb);O("ec:addImpression",L,"impressions");if(O("ec:addPromo",L[L.promoClick?"promoClick":"promoView"],"promotions")&&L.promoClick){y("ec:setAction","promo_click",L.promoClick.actionField);return}for(var Aa="detail checkout checkout_option click add remove purchase refund".split(" "),Ya="refund purchase remove checkout checkout_option add click detail".split(" "),Za=0;Za<Aa.length;Za++){var jb=L[Aa[Za]];if(jb){O("ec:addProduct",jb,"products");y("ec:setAction",Aa[Za],jb.actionField);
if(Rc)for(var qb=0;qb<Ya.length;qb++){var gc=L[Ya[qb]];if(gc){gc!==jb&&Bc("GTM",13);break}}break}}},B=function(O,L,ra){var yb=0;if(O)for(var Aa in O)if(O.hasOwnProperty(Aa)&&(ra&&v[Aa]||!ra&&void 0===v[Aa])){var Ya=w[Aa]?va(O[Aa]):O[Aa];"anonymizeIp"!=Aa||Ya||(Ya=void 0);L[Aa]=Ya;yb++}return yb},F={name:r};B(g,F,!0);u("create",d.vtp_trackingId||e.trackingId,F);y("set","&gtm",Gh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&y("set",O,d[L])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var H={};B(g,H,!1)&&y("set",H);var K;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;ia(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var P={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(ua,d.vtp_eventValue||
e.value)};B(K,P,!1);y("send",P);}else if("TRACK_SOCIAL"==d.vtp_trackType){var Y={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};B(K,Y,!1);y("send",Y);}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}K?y("send","pageview",K):y("send","pageview");d.vtp_autoLinkDomains&&de(q,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);
}if(!a){var sa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(sa="internal/"+sa);a=!0;var $a=Q("https:","http:","//www.google-analytics.com/"+sa,g&&g.forceSSL);R($a,function(){var O=ae();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0;Z.__jel.priorityOverride=0})(function(a){if(!Hi("jel")){var b=W("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Ci({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Ii("jel")}I(a.vtp_gtmOnSuccess)})}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return nc.m})}();

Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){I(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
fh())){th(a,h,k,l,void 0);}Fi(e,c,d);Ch(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),p=b.vtp_urlPosition,u=!!b.vtp_formDecoration;vh(a,n,p,u,m);}})}();

Z.a.aev=["google"],function(){function a(q,r){var v=id(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(q,w);if(z&&(x=v(z),n[y]=x,p.push(y),35<p.length)){var C=p.shift();delete n[C]}}return x}function c(q,r,v){var w=a(q,u[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(yi());la(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Ui(q,w)}function e(q){m.test(q)||(q="http://"+q);return me(ne(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Qb(q,"value");case "button":return Rb(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Nh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Qb(w,r)||v}var m=/^https?:\/\//i,n={},p=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,Rb)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),C=ne(z),B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=me(C,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var F;if(void 0===q.vtp_attribute)F=c(r,w,v);else{var H=q.vtp_attribute,K=a(r,"element");F=K&&Qb(K,H)||v||""}return F;case "MD":var P=q.vtp_mdValue,Y=b(r,"MD",ii);return P&&Y?li(Y,P)||
v:Y||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=A(a),c=b;c[Ab.ia]=null;c[Ab.Ze]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Wd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Gh()},m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?V(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,z){var C="DATA_LAYER"==
v?V(x):k[y];z(C)&&p(w,C)}},q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?
(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,R(q,g(),e(q)))};Z.__awct=h;
Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.bzi=["nonGoogleScripts"],function(){(function(a){Z.__bzi=a;Z.__bzi.b="bzi";Z.__bzi.g=!0;Z.__bzi.priorityOverride=0})(function(a){try{D._bizo_data_partner_id=a.vtp_id,D._bizo_data_partner_title=a.vtp_title,D._bizo_data_partner_domain=a.vtp_domain,D._bizo_data_partner_company=a.vtp_company,D._bizo_data_partner_location=a.vtp_location,D._bizo_data_partner_employee_range=a.vtp_employeeRange,D._bizo_data_partner_sics=a.vtp_standardIndustrialClassification,D._bizo_data_partner_email=a.vtp_email,R(Q("https://sjs",
"http://js",".bizographics.com/insight.min.js"),a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}catch(b){I(a.vtp_gtmOnFailure)}})}();Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();

Z.a.fsl=[],function(){function a(){var e=W("document"),g=c(),h=HTMLFormElement.prototype.submit;G(e,"click",function(k){var l=k.target;if(l&&(l=Tb(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Qb(l,"value")){var m;(m=l.form?l.form.tagName?l.form:E.getElementById(l.form):Tb(l,["form"],100))&&g.store(m,l)}},!1);G(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=g.get(l),u=!0;if(d(l,function(){if(u){var q;
p&&(q=e.createElement("input"),q.type="hidden",q.name=p.name,q.value=p.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n,p))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return ma(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k,l){var m=tg("fsl",h?"nv.mwt":"mwt",0),n;n=h?tg("fsl","nv.ids",[]):tg("fsl","ids",[]);if(!n.length)return!0;var p=pg(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);p["gtm.elementUrl"]=u;l&&(p["gtm.formSubmitElement"]=l);if(k&&m){if(!Ci(p,Kf(g),m))return!1}else Ci(p,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};sg("fsl","mwt",m,0);h||sg("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};sg("fsl","ids",n,[]);h||sg("fsl","nv.ids",n,[]);Hi("fsl")||(a(),Ii("fsl"));I(e.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Vi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){I(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return mg.xb})}();
Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=E.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){I(h)}}}var b=function(d,e,g){Nd(function(){var h,k=oc;k.postscribe||(k.postscribe=Gb);h=k.postscribe;var l={done:e},m=E.createElement("div");m.style.display="none";m.style.visibility="hidden";E.body.appendChild(m);try{h(m,d,l)}catch(n){I(g)}})};var c=function(d){if(E.body){var e=
d.vtp_gtmOnFailure,g=Li(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Dc,k=g.L;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(E.body,Sb(h),k,e)()}else xi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();


Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0;Z.__img.priorityOverride=0})(function(a){var b=Sb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Ti(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var e=W("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.wg||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=Tb(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=tg("lcl",m?"nv.mwt":"mwt",0),p;p=m?tg("lcl","nv.ids",[]):tg("lcl","ids",[]);if(p.length){var u=pg(l,"gtm.linkClick",p);if(b(k,l,e)&&!m&&n&&l.href){var q=String(Ki(l,"rel")||""),r=!!ma(q.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
r&&Bc("GTM",25);var v=W((Ki(l,"target")||"_self").substring(1)),w=!0;if(Ci(u,Kf(function(){var y;if(y=w&&v){var x;a:if(r&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.wg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=Ki(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Ci(u,function(){},n||2E3);return!0}}};G(e,"click",h,!1);G(e,"auxclick",h,!1)}
function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=Ki(g,"href"),l=k.indexOf("#"),m=Ki(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Ai(k),p=Ai(h.location);return n!==p}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,
p)};sg("lcl","mwt",m,0);h||sg("lcl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};sg("lcl","ids",n,[]);h||sg("lcl","nv.ids",n,[]);Hi("lcl")||(a(),Ii("lcl"));I(e.vtp_gtmOnSuccess)}var d=!1;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();

Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(V("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!oi(g.target)){h.has(e.Ab)||h.set(e.Ab,""+b());h.has(e.nc)||h.set(e.nc,""+b());var p=0;h.has(e.Db)&&(p=Number(h.get(e.Db)));p+=100;h.set(e.Db,""+p);if(p>=k){var u=pg(g.target,"gtm.elementVisibility",[h.uid]),q=ni(g.target);u["gtm.visibleRatio"]=Math.round(1E3*q)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.nc));
u["gtm.visibleLastTime"]=Number(h.get(e.Ab));Ci(u);l()}}}if(!h.has(e.Xa)&&(0==k&&m(),!h.has(e.za))){var n=W("self").setInterval(m,100);h.set(e.Xa,n)}}function d(g){g.has(e.Xa)&&(W("self").clearInterval(Number(g.get(e.Xa))),g.remove(e.Xa))}var e={Xa:"polling-id-",nc:"first-on-screen-",Ab:"recent-on-screen-",Db:"total-visible-time-",za:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=sf(m)}catch(H){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=E.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var C=0;C<v.length;C++){var B=
new a(v[C],q);d(B)}v=[];for(var F=0;F<x.length;F++)v.push(x[F]);0<=w&&ui(w);0<v.length&&(w=ti(k,v,[u]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=u?x.has(e.za)||c(y,x,p,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var C=new a(v[z],q);C.set(e.za,"1");d(C)}ui(w);if(n&&Th)for(var B=0;B<Th.length;B++)Th[B]===h&&Th.splice(B,1)}:function(){x.set(e.za,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.za)&&(x.remove(e.za),x.remove(e.Db)),x.remove(e.Ab))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,p=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,u=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&Uh(h);I(g.vtp_gtmOnSuccess)})}();

var ll={};ll.macro=function(a){if(mg.qc.hasOwnProperty(a))return mg.qc[a]},ll.onHtmlSuccess=mg.Pd(!0),ll.onHtmlFailure=mg.Pd(!1);ll.dataLayer=bd;ll.callback=function(a){xc.hasOwnProperty(a)&&ia(xc[a])&&xc[a]();delete xc[a]};ll.Bf=function(){oc[nc.m]=ll;Ca(yc,Z.a);rb=rb||mg;sb=Fd};
ll.rg=function(){hh.gtm_3pds=!0;oc=D.google_tag_manager=D.google_tag_manager||{};if(oc[nc.m]){var a=oc.zones;a&&a.unregisterChild(nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)mb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)lb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},u=0;u<n.length;u++)p[n[u][0]]=Array.prototype.slice.call(n[u],1);kb.push(p)}ob=Z;pb=Oi;(0,ll.Bf)();Qf();Id=!1;Jd=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)Ld();else{G(E,"DOMContentLoaded",Ld);G(E,"readystatechange",Ld);if(E.createEventObject&&E.documentElement.doScroll){var q=!0;try{q=!D.frameElement}catch(y){}q&&Md()}G(D,"load",Ld)}Df=!1;"complete"===E.readyState?
Ff():G(D,"load",Ff);a:{if(!Rc)break a;D.setInterval(Tc,864E5);}
uc=(new Date).getTime();}};(0,ll.rg)();

})()
