;(function(window, document, pixelFunc, pixelFuncName, pixelEndpoint) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isset = function isset(variable) { return typeof variable !== "undefined" && variable !== null && variable !== '';};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var Config = {
  id: '',
  version: 1,
  appnexusUserId: null

};

var Pixel =
/*#__PURE__*/
function () {
  function Pixel(pixelId, appnexusUserId, destination, cookieAcceptance, optinal) {
    _classCallCheck(this, Pixel);

    this.params = [];
    this.isNew = !isset(this.getCookie('cookieAcceptance'));
    this.appnexusUserId = appnexusUserId;
    this.destination = destination;
    this.cookieAcceptance = cookieAcceptance;
    this.pixelId = pixelId;
    if (cookieAcceptance === 'Y'){
      this.setUid()
      this.setCookie('cookieAcceptance', cookieAcceptance, 30*24*60);
    } else {
      this.appnexusUserId = null;
      this.setUid(true)
      this.setCookie('cookieAcceptance', cookieAcceptance, 30*24*60);
    }
    this.buildParams();
    this.send();
  }

  _createClass(Pixel, [{
    key: "buildParams",
    value: function buildParams() {
      var attr = this.getAttribute();

      for (var index in attr) {
        if (attr.hasOwnProperty(index)) {
          this.setParam(index, attr[index](index));
        }
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute() {
      var _this = this;

      return {
        uid: function uid() {
          return _this.getCookie('uid');
        },
        // user Id
        ne: function ne() {
          return _this.isNew;
        },
        ca: function ca() {
          return _this.cookieAcceptance;
        },
        au: function au() {
          return _this.appnexusUserId;
        },
        de: function de() {
          return _this.destination;
        },
        dl: function dl() {
          return window.location.href;
        },
        // document location
        rl: function rl() {
          return document.referrer;
        },
        // referrer location
        dt: function dt() {
          return document.title;
        },
        ua: function ua() {
          return window.navigator.userAgent;
        }
      };
    }
  }, {
    key: "setParam",
    value: function setParam(key, val) {
      if (isset(val)) {
        this.params.push(key + '=' + val);
      } else {
        this.params.push(key + '=');
      }
    }
  }, {
    key: "send",
    value: function send() {
      window.navigator.sendBeacon ? this.sendBeacon() : this.sendImage();
      var elem = document.querySelector('body');
      if(elem) {
        elem.dispatchEvent(new CustomEvent('FoundeePixelDispatched', {
          detail: {
            uid: this.pixelId,
          },
          bubbles: true
        }));
      }
    }
  }, {
    key: "sendBeacon",
    value: function sendBeacon() {
      window.navigator.sendBeacon(this.getSourceUrl());
    }
  }, {
    key: "sendImage",
    value: function sendImage() {
      this.img = document.createElement('img');
      this.img.src = this.getSourceUrl();
      this.img.style.display = 'none';
      this.img.width = '1';
      this.img.height = '1';
      document.getElementsByTagName('body')[0].appendChild(this.img);
    }
  }, {
    key: "getSourceUrl",
    value: function getSourceUrl() {
      return pixelEndpoint + this.pixelId + '?' + encodeURI(this.params.join('&'));
    }
  }, {
    key: "setUid",
    value: function setUid(remove) {
      if (remove) this.setCookie('uid', '', -100);
      else if (isset(this.getCookie('uid'))) {
        this.setCookie('uid', this.getCookie('uid'), 2*365*24*60);
      } else {
        this.setCookie('uid', guid(), 2*365*24*60);
      }
    }
  },{
    key: "setCookie",
    value: function setCookie(name, v, minutes) {
    var expires = "";
    if (isset(minutes)) {
      var date = new Date();
      date.setTime(date.getTime()+(minutes*60*1000));
      expires = "; expires="+date.toGMTString();
    }
    document.cookie = name + "=" + v + expires + "; path=/";
   }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return;
   }
  }]);

  return Pixel;
}();



window.externalIdLoaded = function(data) {
  Config.appnexusUserId = data.uid
};

var scriptEl = document.createElement('script');
scriptEl.setAttribute('src','https://ib.adnxs.com/getuidp?callback=externalIdLoaded');
document.body.appendChild(scriptEl);

// invoke main segment pixel
var mainSegmentScriptEl = document.createElement('script');
mainSegmentScriptEl.setAttribute('src','https://secure.adnxs.com/seg?add=16260054&t=1');
document.body.appendChild(mainSegmentScriptEl);

// process the queue and future incoming commands
pixelFunc.process = function(destination, cookieAcceptance) {
  processEvent(destination, cookieAcceptance);
}
function processEvent(destination, cookieAcceptance) {
  if (isset(Config.appnexusUserId))
    new Pixel( pixelFunc.pixelId, Config.appnexusUserId, destination, cookieAcceptance);
  else
    setTimeout(processEvent.bind(null, destination, cookieAcceptance), 100);
}


// run the queued calls from the snippet to be processed
for(var i = 0, l = pixelFunc.queue.length; i < l; i++) {
  pixelFunc.process.apply(pixelFunc, pixelFunc.queue[i]);
}


}(window, document, window["foundee"], "foundee", "https://api.found.ee/dmp/fire/", 1));

