
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"173",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var u=function q(c){function f(a,b){return a\u003E\u003E\u003Eb|a\u003C\u003C32-b}for(var a,d,p=Math.pow,e=p(2,32),g=\"length\",t=\"\",k=[],h=8*c[g],b=q.h=q.h||[],r=q.k=q.k||[],m=r[g],l={},n=2;64\u003Em;n++)if(!l[n]){for(a=0;313\u003Ea;a+=n)l[a]=n;b[m]=p(n,.5)*e|0;r[m++]=p(n,1\/3)*e|0}for(c+=\"\\u0080\";c[g]%64-56;)c+=\"\\x00\";for(a=0;a\u003Cc[g];a++){if(d=c.charCodeAt(a),d\u003E\u003E8)return;k[a\u003E\u003E2]|=d\u003C\u003C(3-a)%4*8}k[k[g]]=h\/e|0;k[k[g]]=h;for(d=0;d\u003Ck[g];){c=k.slice(d,d+=16);p=b;b=b.slice(0,8);for(a=0;64\u003Ea;a++)h=c[a-15],m=c[a-2],e=b[0],l=b[4],h=\nb[7]+(f(l,6)^f(l,11)^f(l,25))+(l\u0026b[5]^~l\u0026b[6])+r[a]+(c[a]=16\u003Ea?c[a]:c[a-16]+(f(h,7)^f(h,18)^h\u003E\u003E\u003E3)+c[a-7]+(f(m,17)^f(m,19)^m\u003E\u003E\u003E10)|0),e=(f(e,2)^f(e,13)^f(e,22))+(e\u0026b[1]^e\u0026b[2]^b[1]\u0026b[2]),b=[h+e|0].concat(b),b[4]=b[4]+h|0;for(a=0;8\u003Ea;a++)b[a]=b[a]+p[a]|0}for(a=0;8\u003Ea;a++)for(d=3;d+1;d--)g=b[a]\u003E\u003E8*d\u0026255,t+=(16\u003Eg?0:\"\")+g.toString(16);return t};return u(",["escape",["macro",0],8,16],")})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":"dev",
      "vtp_map":["list",["map","key","www.aspiration.com","value","prod"],["map","key","funds.aspiration.com","value","prod"],["map","key","my.aspiration.com","value","prod"],["map","key","www.alpha.aspiration.com","value","qa"],["map","key","funds.alpha.aspiration.com","value","qa"],["map","key","my.alpha.aspiration.com","value","qa"],["map","key","www.beta.aspiration.com","value","qa"],["map","key","funds.beta.aspiration.com","value","qa"],["map","key","my.beta.aspiration.com","value","qa"],["map","key","join.aspiration.com","value","prod"]]
    },{
      "function":"__dbg"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"UA-47161598-7",
      "vtp_map":["list",["map","key","prod","value","UA-47161598-1"]]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-47161598-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"1488214761445363",
      "vtp_map":["list",["map","key","prod","value","1457306347869538"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":"1520807648157247",
      "vtp_map":["list",["map","key","prod","value","1520807648157247"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product_code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"path"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"event_context"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"account_type_code"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product_type_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"referrer_click_id"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",23],
      "vtp_map":["list",["map","key","asp.join-list.summit.success","value","LX6FCPGR0l4Q6IG_twM"],["map","key","asp.join-list.flagship.success","value","oq0kCJzdxl4Q6IG_twM"],["map","key","asp.join-list.landing-page.success","value","gPtcCMzk11sQ6IG_twM"],["map","key","asp.home.page-view","value","GunaCIio2FsQ6IG_twM"],["map","key","asp.register.account.success","value","lgVECNfp11sQ6IG_twM"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hashedUserEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"segmentAnonymousId"
    },{
      "function":"__f",
      "vtp_component":"QUERY",
      "vtp_queryKey":"PHid"
    },{
      "function":"__f",
      "vtp_component":"URL"
    }],
  "tags":[{
      "function":"__html",
      "priority":100,
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.twttr=function(a,c,d){var e=a.getElementsByTagName(c)[0],b=window.twttr||{};if(a.getElementById(d))return b;a=a.createElement(c);a.id=d;a.src=\"https:\/\/platform.twitter.com\/widgets.js\";e.parentNode.insertBefore(a,e);b._e=[];b.ready=function(a){b._e.push(a)};return b}(document,\"script\",\"twitter-wjs\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "priority":100,
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fbAsyncInit=function(){FB.init({appId:",["escape",["macro",10],8,16],",xfbml:!0,version:\"v2.5\"})};(function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src=\"\/\/connect.facebook.net\/en_US\/sdk.js\",d.parentNode.insertBefore(a,d))})(document,\"script\",\"facebook-jssdk\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "priority":90,
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",11],8,16],");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1520807648157247\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":17
    },{
      "function":"__html",
      "priority":80,
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:184404,hjsv:5};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"921682152",
      "vtp_conversionLabel":"gPtcCMzk11sQ6IG_twM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":18
    },{
      "function":"__ua",
      "setup_tags":["list",["tag",48,0]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l5z51\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar ClickMeter_conversion_id=\"E1A8624E94D2424B87BEEF473157B0D0\",ClickMeter_conversion_value=\"0.00\",ClickMeter_conversion_commission=\"25.00\",ClickMeter_conversion_commission_percentage=\"0.00\",ClickMeter_conversion_parameter=\"empty\";\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" id=\"cmconvscript\" data-gtmsrc=\"\/\/s3.amazonaws.com\/scripts-clickmeter-com\/js\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"0\" width=\"0\" alt=\"\" src=\"\/\/www.clickmeter.com\/conversion.aspx?id=E1A8624E94D2424B87BEEF473157B0D0\u0026amp;val=0.00\u0026amp;param=empty\u0026amp;com=0.00\u0026amp;comperc=0.00\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\",{content_name:\"",["escape",["macro",13],7]," ",["escape",["macro",14],7],"\",content_category:\"",["escape",["macro",8],7],"\",value:0,currency:\"USD\",order_id:\"ddfa2-aa0c-310c\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"IOS AppStore button click\",{content_name:\"IOS Application\",content_category:\"Marketing Pages\",value:0,currency:\"USD\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Get The App button click\",{content_name:\"Mobile Application Page\",content_category:\"Marketing Pages\",value:0,currency:\"USD\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Google Play button click\",{content_name:\"Android Application\",content_category:\"Marketing Pages\",value:0,currency:\"USD\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_68964d60-ab32-6108-c319-7c4fb3d177f0\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D68964d60-ab32-6108-c319-7c4fb3d177f0%26type%3D55%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D68964D60-AB32-6108-C319-7C4FB3D177F0\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_68964d60-ab32-6108-c319-7c4fb3d177f0\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D68964d60-ab32-6108-c319-7c4fb3d177f0%26type%3D55%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D68964D60-AB32-6108-C319-7C4FB3D177F0\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_33424ed3-8799-792c-ba4c-0947a4efebf6\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D33424ed3-8799-792c-ba4c-0947a4efebf6%26type%3D82%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D33424ED3-8799-792C-BA4C-0947A4EFEBF6\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_33424ed3-8799-792c-ba4c-0947a4efebf6\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D33424ed3-8799-792c-ba4c-0947a4efebf6%26type%3D82%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D33424ED3-8799-792C-BA4C-0947A4EFEBF6\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.uetq=window.uetq||[];window.uetq.push(\"event\",\"lead_submission_button\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template"," \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"e6e572d3-0a59-466c-9bd1-54bcfa26fa14\",{user_hashed_email:",["escape",["macro",1],8,16],"});snaptr(\"track\",\"ADD_CART\");\u003C\/script\u003E \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_551c1ab9-98ed-4610-c400-43f93b17fef6\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D551c1ab9-98ed-4610-c400-43f93b17fef6%26type%3D6%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D551C1AB9-98ED-4610-C400-43F93B17FEF6\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_551c1ab9-98ed-4610-c400-43f93b17fef6\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D551c1ab9-98ed-4610-c400-43f93b17fef6%26type%3D6%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D551C1AB9-98ED-4610-C400-43F93B17FEF6\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_4f25891c-e27c-0ac3-db8f-d42c064e1ff2\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D4f25891c-e27c-0ac3-db8f-d42c064e1ff2%26type%3D81%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D4F25891C-E27C-0AC3-DB8F-D42C064E1FF2\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_4f25891c-e27c-0ac3-db8f-d42c064e1ff2\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D4f25891c-e27c-0ac3-db8f-d42c064e1ff2%26type%3D81%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D4F25891C-E27C-0AC3-DB8F-D42C064E1FF2\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_93c7a25c-763d-846a-53c0-318282033967\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D93c7a25c-763d-846a-53c0-318282033967%26type%3D81%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D93C7A25C-763D-846A-53C0-318282033967\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_93c7a25c-763d-846a-53c0-318282033967\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D93c7a25c-763d-846a-53c0-318282033967%26type%3D81%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D93C7A25C-763D-846A-53C0-318282033967\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_b9677529-186e-98d8-586d-1fa5288c5a21\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Db9677529-186e-98d8-586d-1fa5288c5a21%26type%3D81%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3DB9677529-186E-98D8-586D-1FA5288C5A21\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_b9677529-186e-98d8-586d-1fa5288c5a21\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Db9677529-186e-98d8-586d-1fa5288c5a21%26type%3D81%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3DB9677529-186E-98D8-586D-1FA5288C5A21\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_680934a1-afa7-93d8-539a-a917f71c0b16\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D680934a1-afa7-93d8-539a-a917f71c0b16%26type%3D10%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D680934A1-AFA7-93D8-539A-A917F71C0B16\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_680934a1-afa7-93d8-539a-a917f71c0b16\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D680934a1-afa7-93d8-539a-a917f71c0b16%26type%3D10%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D680934A1-AFA7-93D8-539A-A917F71C0B16\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_60127d7d-c3ac-5d50-5ae9-dbec6b8a31d1\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D60127d7d-c3ac-5d50-5ae9-dbec6b8a31d1%26type%3D13%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D60127D7D-C3AC-5D50-5AE9-DBEC6B8A31D1\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_60127d7d-c3ac-5d50-5ae9-dbec6b8a31d1\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D60127d7d-c3ac-5d50-5ae9-dbec6b8a31d1%26type%3D13%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D60127D7D-C3AC-5D50-5AE9-DBEC6B8A31D1\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_f001c143-e06e-5724-0209-09b498f89597\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Df001c143-e06e-5724-0209-09b498f89597%26type%3D21%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3DF001C143-E06E-5724-0209-09B498F89597\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_f001c143-e06e-5724-0209-09b498f89597\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Df001c143-e06e-5724-0209-09b498f89597%26type%3D21%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3DF001C143-E06E-5724-0209-09B498F89597\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_e5e54f2f-ee02-d8d4-bd30-20a5f89388ad\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3De5e54f2f-ee02-d8d4-bd30-20a5f89388ad%26type%3D16%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3DE5E54F2F-EE02-D8D4-BD30-20A5F89388AD\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_e5e54f2f-ee02-d8d4-bd30-20a5f89388ad\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3De5e54f2f-ee02-d8d4-bd30-20a5f89388ad%26type%3D16%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3DE5E54F2F-EE02-D8D4-BD30-20A5F89388AD\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_8bd056c4-c497-9df1-b3f3-4f22806f89da\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D8bd056c4-c497-9df1-b3f3-4f22806f89da%26type%3D15%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D8BD056C4-C497-9DF1-B3F3-4F22806F89DA\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_8bd056c4-c497-9df1-b3f3-4f22806f89da\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D8bd056c4-c497-9df1-b3f3-4f22806f89da%26type%3D15%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D8BD056C4-C497-9DF1-B3F3-4F22806F89DA\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_78b3a48c-a0e4-264e-ebe1-561bf2151108\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D78b3a48c-a0e4-264e-ebe1-561bf2151108%26type%3D14%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D78B3A48C-A0E4-264E-EBE1-561BF2151108\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_78b3a48c-a0e4-264e-ebe1-561bf2151108\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D78b3a48c-a0e4-264e-ebe1-561bf2151108%26type%3D14%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D78B3A48C-A0E4-264E-EBE1-561BF2151108\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_8bc67e63-c30e-547a-4c38-8b933735d695\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D8bc67e63-c30e-547a-4c38-8b933735d695%26type%3D8%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D8BC67E63-C30E-547A-4C38-8B933735D695\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_8bc67e63-c30e-547a-4c38-8b933735d695\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D8bc67e63-c30e-547a-4c38-8b933735d695%26type%3D8%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D8BC67E63-C30E-547A-4C38-8B933735D695\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_6ef19fcb-a258-4f8b-6a77-afaee50b969f\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D6ef19fcb-a258-4f8b-6a77-afaee50b969f%26type%3D54%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D6EF19FCB-A258-4F8B-6A77-AFAEE50B969F\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_6ef19fcb-a258-4f8b-6a77-afaee50b969f\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D6ef19fcb-a258-4f8b-6a77-afaee50b969f%26type%3D54%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D6EF19FCB-A258-4F8B-6A77-AFAEE50B969F\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_7e6b4987-4b38-73bc-6710-c0cc0c227d1b\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D7e6b4987-4b38-73bc-6710-c0cc0c227d1b%26type%3D32%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D7E6B4987-4B38-73BC-6710-C0CC0C227D1B\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_7e6b4987-4b38-73bc-6710-c0cc0c227d1b\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D7e6b4987-4b38-73bc-6710-c0cc0c227d1b%26type%3D32%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D7E6B4987-4B38-73BC-6710-C0CC0C227D1B\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_b23bd5ea-c743-c79a-779c-0920db9e562b\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Db23bd5ea-c743-c79a-779c-0920db9e562b%26type%3D31%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3DB23BD5EA-C743-C79A-779C-0920DB9E562B\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_b23bd5ea-c743-c79a-779c-0920db9e562b\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Db23bd5ea-c743-c79a-779c-0920db9e562b%26type%3D31%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3DB23BD5EA-C743-C79A-779C-0920DB9E562B\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"25034530\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a[b]||(a.GlobalSnowplowNamespace=a.GlobalSnowplowNamespace||[],a.GlobalSnowplowNamespace.push(b),a[b]=function(){(a[b].q=a[b].q||[]).push(arguments)},a[b].q=a[b].q||[],c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.async=1,c.src=g,d.parentNode.insertBefore(c,d))})(window,document,\"script\",\"\/\/d18p8z0ptb8qab.cloudfront.net\/lp.js\",\"letterpress\");\nwindow.letterpress(\"newTracker\",\"mycljcoll\",\"t.getletterpress.com\",{appId:\"ckdplkot\",discoverRootDomain:!0,forceSecureTracker:\"\",contexts:{webPage:!0,performanceTiming:!0,gaCookies:!0,geolocation:!1}});window.letterpress(\"trackPageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":91
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv4vw\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=1;a.src=\"https:\/\/cdn.quantummetric.com\/qscripts\/quantum-aspiration.js\";var b=document.getElementsByTagName(\"script\")[0];!window.QuantumMetricAPI\u0026\u0026b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lazertag\u0026\u0026window.lazertag.addToQueue({id:\"directAgentsEmailLeadSubmitted\",param:\"",["escape",["macro",22],7],"\"});\u003C\/script\u003E\n\n\n\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_c2daae1a-2ca4-e8e1-6bb1-a212af587a6b\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3Dc2daae1a-2ca4-e8e1-6bb1-a212af587a6b%26type%3D11%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3DC2DAAE1A-2CA4-E8E1-6BB1-A212AF587A6B\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_c2daae1a-2ca4-e8e1-6bb1-a212af587a6b\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3Dc2daae1a-2ca4-e8e1-6bb1-a212af587a6b%26type%3D11%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3DC2DAAE1A-2CA4-E8E1-6BB1-A212AF587A6B\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":97
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lazertag\u0026\u0026window.lazertag.addToQueue({id:\"inboxDollarsProductApplicationApproved\",param:\"",["escape",["macro",22],7],"\"});\u003C\/script\u003E\n\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/9237300.fls.doubleclick.net\/activityi;src\\x3d9237300;type\\x3dinvmedia;cat\\x3daspir0;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/9237300.fls.doubleclick.net\/activityi;src=9237300;type=invmedia;cat=aspir0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/9237300.fls.doubleclick.net\/activityi;src\\x3d9237300;type\\x3dinvmedia;cat\\x3daspir00;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/9237300.fls.doubleclick.net\/activityi;src=9237300;type=invmedia;cat=aspir00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/9237300.fls.doubleclick.net\/activityi;src\\x3d9237300;type\\x3dinvmedia;cat\\x3daspir001;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/9237300.fls.doubleclick.net\/activityi;src=9237300;type=invmedia;cat=aspir001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":103
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/9237300.fls.doubleclick.net\/activityi;src\\x3d9237300;type\\x3dinvmedia;cat\\x3daspir00a;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/9237300.fls.doubleclick.net\/activityi;src=9237300;type=invmedia;cat=aspir00a;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/9237300.fls.doubleclick.net\/activityi;src\\x3d9237300;type\\x3dinvmedia;cat\\x3daspir00h;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/9237300.fls.doubleclick.net\/activityi;src=9237300;type=invmedia;cat=aspir00h;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":105
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/trkstar.com\/p.ashx?o=31514\u0026amp;e=664\u0026amp;t=",["escape",["macro",22],12],"\" height=\"1\" width=\"1\" frameborder=\"0\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar axel=Math.random()+\"\",a=1E13*axel;document.write('\\x3ciframe src\\x3d\"https:\/\/9237300.fls.doubleclick.net\/activityi;src\\x3d9237300;type\\x3dinvmedia;cat\\x3daspir000;dc_lat\\x3d;dc_rdid\\x3d;tag_for_child_directed_treatment\\x3d;tfua\\x3d;npa\\x3d;ord\\x3d'+a+'?\" width\\x3d\"1\" height\\x3d\"1\" frameborder\\x3d\"0\" style\\x3d\"display:none\"\\x3e\\x3c\/iframe\\x3e');\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Ciframe src=\"https:\/\/9237300.fls.doubleclick.net\/activityi;src=9237300;type=invmedia;cat=aspir000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?\" width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cstyle\u003E.async-hide { opacity: 0 !important} \u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,b,d,e,f,a,g,h,k){b.className+=\" \"+d;a.start=1*new Date;a.end=g=function(){b.className=b.className.replace(RegExp(\" ?\"+d),\"\")};(c[e]=c[e]||[]).hide=a;setTimeout(function(){g();a.end=null},f);a.timeout=f})(window,document.documentElement,\"async-hide\",\"dataLayer\",0,{\"GTM-K3SWBPL\":!0});\u003C\/script\u003E\n    \u003Cscript type=\"text\/gtmscript\"\u003E(function(a,e,f,g,b,c,d){a.GoogleAnalyticsObject=b;a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/www.google-analytics.com\/analytics.js\",\"ga\");ga(\"create\",\"UA-47161598-1\",\"auto\");ga(\"require\",\" GTM-K3SWBPL \");ga(\"send\",\"pageview\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":117
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _pix=document.getElementById(\"_pix_id_551c1ab9-98ed-4610-c400-43f93b17fef6\");\nif(!_pix){var protocol=\"\/\/\",a=1E18*Math.random();_pix=document.createElement(\"iframe\");_pix.style.display=\"none\";_pix.setAttribute(\"src\",protocol+\"s.amazon-adsystem.com\/iu3?d\\x3dgeneric\\x26ex-fargs\\x3d%3Fid%3D551c1ab9-98ed-4610-c400-43f93b17fef6%26type%3D6%26m%3D1\\x26ex-fch\\x3d416613\\x26ex-src\\x3dhttps:\/\/www.aspiration.com\/\\x26ex-hargs\\x3dv%3D1.0%3Bc%3D6803015540501%3Bp%3D551C1AB9-98ED-4610-C400-43F93B17FEF6\\x26cb\\x3d\"+a);_pix.setAttribute(\"id\",\"_pix_id_551c1ab9-98ed-4610-c400-43f93b17fef6\");document.body.appendChild(_pix)};\u003C\/script\u003E\u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/s.amazon-adsystem.com\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D551c1ab9-98ed-4610-c400-43f93b17fef6%26type%3D6%26m%3D1\u0026amp;ex-fch=416613\u0026amp;ex-src=https:\/\/www.aspiration.com\/\u0026amp;ex-hargs=v%3D1.0%3Bc%3D6803015540501%3Bp%3D551C1AB9-98ED-4610-C400-43F93B17FEF6\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":120
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToWishlist\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"SubmitApplication\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__opt",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-K3SWBPL",
      "vtp_gaSettings":["macro",9],
      "tag_id":123
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"prod"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"False",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Email Lead SUBMITTED"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/do-good\/environment"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/our-products"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"www.aspiration.com"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"SUMMIT"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"asp.marketing.getTheAppClick"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"asp.marketing.androidPlayStoreButtonClick"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Loaded a Page"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/our-products$|^\\\/our-products\\\/$)"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/savemoneyplanet"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/counterproductive"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/therightswipe"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/m\/get-summit-fast-b"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/ira"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/get-account"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/get-account-100"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/get-account-pride"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/signup\/create-an-account\/tesla-p-2019"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/get-account-teslap2019"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/conscience-coalition"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"\/terms"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/our-products"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"SUMMIT-CMA"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"Marketing Page"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"INDIVIDUAL"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Product SELECTED"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\/summit$|^\/summit\/$|^\/summit\/\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\/redwood$|^\/redwood\/$|^\/redwood\/\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/aspiration-flagship-fund$|^\\\/aspiration-flagship-fund\\\/$)"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"\/signup\/create-an-account"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Create User Credentials Form IMPRESSION"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"Product Application"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/signup\/select-product"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"SUMMIT-CMA-SAVE"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"REDWOOD"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"FLAGSHIP"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"IRA"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"Depository"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Product Application SUBMITTED"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"Investment"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Opening Investment SUBMITTED"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"\/terms"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(^da1$|^da2$)"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"inboxdollars"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"Product Application APPROVED"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/dimes-worth-of-difference$|^\\\/dimes-worth-of-difference\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/education$|^\\\/education\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/faq$|^\\\/faq\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/how-aspiration-works$|^\\\/how-aspiration-works\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/pay-what-is-fair$|^\\\/pay-what-is-fair\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/summit\/aim$|^\\\/summit\/aim\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"(^\\\/who-we-are$|^\\\/who-we-are\\\/$)"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"User Credentials SUBMITTED"
    }],
  "rules":[
    [["if",3],["add",4,6,8,15,43,45]],
    [["if",4,5],["add",5]],
    [["if",5,6],["add",5]],
    [["if",5,7],["add",5]],
    [["if",5],["add",0,1,2,31,32,33]],
    [["if",5,8],["add",3]],
    [["if",3,9],["add",7]],
    [["if",10],["add",9,10]],
    [["if",11],["add",11]],
    [["if",12,13],["add",12,30,37,44]],
    [["if",13,14],["add",13,38,44]],
    [["if",3,15],["add",14]],
    [["if",3,16],["add",14]],
    [["if",3,17],["add",14]],
    [["if",3,18],["add",14]],
    [["if",3,19],["add",14]],
    [["if",3,20],["add",14]],
    [["if",3,6],["add",14]],
    [["if",3,21],["add",14]],
    [["if",3,22],["add",14]],
    [["if",3,23],["add",14]],
    [["if",3,24],["add",14]],
    [["if",3,25],["add",14]],
    [["if",3,26],["add",14]],
    [["if",27,28,29,30,31],["add",16]],
    [["if",13,32],["add",17,39]],
    [["if",13,33],["add",18]],
    [["if",13,34],["add",19]],
    [["if",35,36],["add",20,40]],
    [["if",28,30,31,37,38],["add",21]],
    [["if",30,31,37,38,39],["add",22]],
    [["if",30,31,37,38,40],["add",23]],
    [["if",30,31,37,38,41],["add",24]],
    [["if",31,37,38,40,42],["add",25]],
    [["if",31,37,38,41,42],["add",26]],
    [["if",43,44],["add",27,35,41,47]],
    [["if",44,45],["add",28]],
    [["if",46],["add",29]],
    [["if",5,20],["add",30]],
    [["if",5,19],["add",30]],
    [["if",5,18],["add",30]],
    [["if",5,17],["add",30]],
    [["if",5,15],["add",30]],
    [["if",5,16],["add",30]],
    [["if",5,21],["add",30]],
    [["if",5,22],["add",30]],
    [["if",5,23],["add",30]],
    [["if",5,24],["add",30]],
    [["if",5,25],["add",30]],
    [["if",5,47],["add",30]],
    [["if",3,48],["add",34]],
    [["if",49,50],["add",36]],
    [["if",48,50],["add",42]],
    [["if",13,51],["add",44]],
    [["if",13,52],["add",44]],
    [["if",13,53],["add",44]],
    [["if",13,54],["add",44]],
    [["if",13,55],["add",44]],
    [["if",13,56],["add",44]],
    [["if",13,57],["add",44]],
    [["if",58],["add",46]],
    [["if",1,2],["unless",0],["block",4,0,1,6,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]],
    [["if",2],["block",44]]]
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
Ka[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ra,Ta)+"'"}};var bb=/['()]/g,cb=function(a){return"%"+a.charCodeAt(0).toString(16)};Ka[12]=function(a){var b=
encodeURIComponent(String(a));bb.lastIndex=0;return bb.test(b)?b.replace(bb,cb):b};var db=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,eb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
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
function lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var nc={},oc=null,pc=Math.random();nc.m="GTM-NDDV69";nc.Bb="an1";var qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},rc="www.googletagmanager.com/gtm.js";var sc=rc,tc=null,uc=null,vc=null,wc="//www.googletagmanager.com/a?id="+nc.m+"&cv=173",xc={},yc={},zc=function(){var a=oc.sequence||0;oc.sequence=a+1;return a};var Ac={},Bc=function(a,b){Ac[a]=Ac[a]||[];Ac[a][b]=!0},Cc=function(a){for(var b=[],c=Ac[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
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
g++}}return 0};var Sh=!!D.MutationObserver,Th=void 0,Uh=function(a){if(!Th){var b=function(){var c=E.body;if(c)if(Sh)(new MutationObserver(function(){for(var e=0;e<Th.length;e++)I(Th[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;G(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<Th.length;e++)I(Th[e])}))})}};Th=[];E.body?b():I(b)}Th.push(a)};var wi=D.clearTimeout,xi=D.setTimeout,R=function(a,b,c){if(jd()){b&&I(b)}else return Lb(a,b,c)},yi=function(){return D.location.href},zi=function(a){return me(ne(a),"fragment")},Ai=function(a){return le(ne(a))},Bi=null;
var V=function(a,b){return ad(a,b||2)},Ci=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Jf(a)},Di=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},Ei=function(a,b,c){return Se(a,b,void 0===c?!0:!!c)},Fi=function(a,b,c){var d={prefix:a,path:b,domain:c,Ga:void 0};qh(d);xh(["aw","dc"],d)},Gi=function(a,b){if(jd()){b&&I(b)}else Nb(a,b)},Hi=function(a){return!!tg(a,
"init",!1)},Ii=function(a){rg(a,"init",!0)},Ji=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":sc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});R(Q("https://","http://",d))},Ki=function(a,b){var c=a[b];return c};

var Li=mg.Bg;var Mi=new pa,Ni=function(a,b){function c(h){var k=ne(h),l=me(k,"protocol"),m=me(k,"host",!0),n=me(k,"port"),p=me(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Oi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Oi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=t(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var u=a.ignore_case?"i":void 0;try{var q=String(c)+u,r=Mi.get(q);r||(r=new RegExp(c,u),Mi.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ni(b,c)}return!1};var Qi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ri={},Si=encodeURI,X=encodeURIComponent,Ti=Ob;var Ui=function(a,b){if(!a)return!1;var c=me(ne(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Vi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Ri.yg=function(){var a=!1;return a};var Ej=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var nk=window,ok=document,pk=function(a){var b=nk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===nk["ga-disable-"+a])return!0;try{var c=nk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=Se("AMP_TOKEN",ok.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ok.getElementById("__gaOptOutExtension")?!0:!1};var sk=function(a){return"_"===a.charAt(0)},tk=function(a){ta(a,function(c){sk(c)&&delete a[c]});var b=a[J.wb]||{};ta(b,function(c){sk(c)&&delete b[c]})};var wk=function(a,b,c){Le(b,c,a)},xk=function(a,b,c){Le(b,c,a,!0)},zk=function(a,b){},yk=function(a,b){};
var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(id(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||E.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?me(ne(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ai(String(b)):String(b)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||yi();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ai(String(c));var e=ne(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=me(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=me(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;A(Vi(n.vtp_fieldsToSet,"fieldName","value"),g);A(Vi(n.vtp_contentGroup,"index","group"),h);A(Vi(n.vtp_dimension,"index","dimension"),k);A(Vi(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var p=A(n);d=A(d,p)}A(Vi(d.vtp_fieldsToSet,"fieldName","value"),g);A(Vi(d.vtp_contentGroup,
"index","group"),h);A(Vi(d.vtp_dimension,"index","dimension"),k);A(Vi(d.vtp_metric,"index","metric"),l);var u=ce(d.vtp_functionName);if(ia(u)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+zc(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var L=[].slice.call(arguments,0);L[0]=q+L[0];u.apply(window,L)},x=function(O,L){return void 0===L?L:O(L)},z=function(O,L){if(L)for(var ra in L)L.hasOwnProperty(ra)&&y("set",O+ra,L[ra])},C=function(){},B=function(O,L,ra){var yb=0;if(O)for(var Aa in O)if(O.hasOwnProperty(Aa)&&(ra&&v[Aa]||!ra&&void 0===v[Aa])){var Ya=w[Aa]?va(O[Aa]):O[Aa];"anonymizeIp"!=Aa||Ya||(Ya=void 0);L[Aa]=Ya;yb++}return yb},F={name:r};B(g,F,!0);u("create",d.vtp_trackingId||e.trackingId,F);y("set","&gtm",Gh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,L){void 0!==d[L]&&y("set",O,d[L])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var H={};B(g,H,!1)&&y("set",H);var K;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;ia(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}K?y("send","pageview",K):y("send","pageview");}if(!a){var sa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(sa="internal/"+sa);a=!0;var $a=Q("https:","http:","//www.google-analytics.com/"+sa,g&&g.forceSSL);R($a,function(){var O=ae();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else I(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;A(Vi(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=A(e);c=A(c,g)||{}}A(Vi(c.vtp_fieldsToSet,"fieldName","value"),d);var h=ce(c.vtp_functionName);if(ia(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+zc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(y,x,z){var C=0,B;for(B in y)if(y.hasOwnProperty(B)&&
(z&&m[B]||!z&&void 0===m[B])){var F=n[B]?va(y[B]):y[B];"anonymizeIp"!==B||F||(F=void 0);x[B]=F;C++}return C},u={name:l};p(d,u,!0);var q={"&gtm":Gh(!0)};p(d,q,!1);var r=encodeURI(Q("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,u);h(k+"set",q);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,R(r,function(){return ae().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else I(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.b="opt";Z.__opt.g=!0;Z.__opt.priorityOverride=0}();



Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=A(a),c=b;c[Ab.ia]=null;c[Ab.Ze]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Wd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Gh()},m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?V(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var p=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||{})[v]=w},u=function(v){return function(w,y,x,z){var C="DATA_LAYER"==
v?V(x):k[y];z(C)&&p(w,C)}},q=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?
(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,R(q,g(),e(q)))};Z.__awct=h;
Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Vi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=E.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Kb(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){I(h)}}}var b=function(d,e,g){Nd(function(){var h,k=oc;k.postscribe||(k.postscribe=Gb);h=k.postscribe;var l={done:e},m=E.createElement("div");m.style.display="none";m.style.visibility="hidden";E.body.appendChild(m);try{h(m,d,l)}catch(n){I(g)}})};var c=function(d){if(E.body){var e=
d.vtp_gtmOnFailure,g=Li(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Dc,k=g.L;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(E.body,Sb(h),k,e)()}else xi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();






var ll={};ll.macro=function(a){if(mg.qc.hasOwnProperty(a))return mg.qc[a]},ll.onHtmlSuccess=mg.Pd(!0),ll.onHtmlFailure=mg.Pd(!1);ll.dataLayer=bd;ll.callback=function(a){xc.hasOwnProperty(a)&&ia(xc[a])&&xc[a]();delete xc[a]};ll.Bf=function(){oc[nc.m]=ll;Ca(yc,Z.a);rb=rb||mg;sb=Fd};
ll.rg=function(){hh.gtm_3pds=!0;oc=D.google_tag_manager=D.google_tag_manager||{};if(oc[nc.m]){var a=oc.zones;a&&a.unregisterChild(nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ib.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)mb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)lb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},u=0;u<n.length;u++)p[n[u][0]]=Array.prototype.slice.call(n[u],1);kb.push(p)}ob=Z;pb=Oi;(0,ll.Bf)();Qf();Id=!1;Jd=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)Ld();else{G(E,"DOMContentLoaded",Ld);G(E,"readystatechange",Ld);if(E.createEventObject&&E.documentElement.doScroll){var q=!0;try{q=!D.frameElement}catch(y){}q&&Md()}G(D,"load",Ld)}Df=!1;"complete"===E.readyState?
Ff():G(D,"load",Ff);a:{if(!Rc)break a;D.setInterval(Tc,864E5);}
uc=(new Date).getTime();}};(0,ll.rg)();

})()
