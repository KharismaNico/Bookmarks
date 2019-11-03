var _0x8366 = [
  "responseType",
  "text",
  "onload",
  "parse",
  "responseText",
  "withCredentials",
  "string",
  "keys",
  "ims",
  "pubSiteDetailsResponse",
  "element_id",
  "relativepos",
  "video",
  "xpath",
  "style",
  "marker",
  "playVideo",
  "IMSTAG",
  "undefined",
  "renderAd",
  "push",
  "getElementsByClassName",
  "_inv_marker",
  "toString",
  "split",
  "length",
  "join",
  "site_id",
  "location",
  "href",
  "hostname",
  "screen",
  "adtype",
  "size",
  "innerHeight",
  "innerWidth",
  "containermetadata",
  "placement",
  "then",
  "status",
  "adTemplate",
  "catch",
  "log",
  "unable\x20to\x20resolve\x20getDebugMessage",
  "open",
  "POST",
  "debugGetMessage"
];
(function(_0x3562b5, _0x22dabc) {
  var _0x54d52d = function(_0x27bd3d) {
    while (--_0x27bd3d) {
      _0x3562b5["push"](_0x3562b5["shift"]());
    }
  };
  _0x54d52d(++_0x22dabc);
})(_0x8366, 0x1bc);
var _0x2caa = function(_0x39826b, _0x29e007) {
  _0x39826b = _0x39826b - 0x0;
  var _0x52335f = _0x8366[_0x39826b];
  return _0x52335f;
};
var debugMode = (function() {
  let _0x4e3dcb = ims["pubSiteDetailsResponse"];
  let _0x2f9924 = ims["deal_id_arr"];
  let _0x13ad0e = [];
  let _0x49cb69 = document[_0x2caa("0x0")](_0x2caa("0x1"));
  let _0x510930 = ImsSDK["getAdParamters"]();
  init = function(_0x1e621e, _0x4367a7, _0x476e8a = ![]) {
    let _0xad8e4d = new Date()[_0x2caa("0x2")]();
    var _0x4382f5 = _0x24fb38();
    _0xad8e4d = _0xad8e4d[_0x2caa("0x3")]("\x20");
    _0xad8e4d[_0x2caa("0x4")] = 0x6;
    _0xad8e4d = _0xad8e4d[_0x2caa("0x5")]("\x20");
    _0xad8e4d = encodeURIComponent(_0xad8e4d);
    if (_0x49cb69[_0x2caa("0x4")] > 0x0)
      for (
        let _0x44f0b8 = 0x0;
        _0x44f0b8 < _0x49cb69[_0x2caa("0x4")];
        _0x44f0b8++
      )
        _0x13ad0e["push"](_0x49cb69[_0x44f0b8]["id"]);
    let _0x2040bc = {
      site: {
        siteid: _0x4e3dcb ? _0x4e3dcb[_0x2caa("0x6")] : null,
        pageurl: window[_0x2caa("0x7")][_0x2caa("0x8")],
        domain: window["location"][_0x2caa("0x9")]
      },
      adPlacement: _0x476e8a,
      screenresolution:
        window[_0x2caa("0xa")]["availWidth"] +
        "x" +
        window["screen"]["availHeight"],
      tabsize: _0x4382f5[0x0] + "x" + _0x4382f5[0x1],
      timezone: _0xad8e4d,
      filter: { deals: { dealIds: _0x2f9924, forced: ![] } },
      placement: {
        adtype: _0x4e3dcb ? _0x4e3dcb[_0x2caa("0xb")] : null,
        size: _0x4e3dcb ? _0x4e3dcb[_0x2caa("0xc")] : null
      },
      markers: _0x13ad0e[_0x2caa("0x4")] > 0x0 ? _0x13ad0e : null,
      viewportsize: { h: window[_0x2caa("0xd")], w: window[_0x2caa("0xe")] },
      containermetadata: {
        id: _0x4e3dcb ? _0x4e3dcb["element_id"] : null,
        xpath: _0x4e3dcb ? _0x4e3dcb["xpath"] : null,
        h:
          _0x4e3dcb && _0x4e3dcb["containermetadata"]
            ? _0x4e3dcb["containermetadata"]["h"]
            : null,
        w:
          _0x4e3dcb && _0x4e3dcb[_0x2caa("0xf")]
            ? _0x4e3dcb[_0x2caa("0xf")]["w"]
            : null
      }
    };
    if (
      _0x2040bc[_0x2caa("0x10")] &&
      _0x2040bc[_0x2caa("0x10")][_0x2caa("0xb")] !== "in-stream"
    ) {
      delete _0x2040bc[_0x2caa("0x10")];
    }
    if (_0x1e621e && _0x4367a7) {
      _0x2040bc[_0x1e621e] = _0x4367a7;
    }
    invokeGetDebugMessage(_0x2040bc)
      [_0x2caa("0x11")](_0x4367a7 => {
        if (_0x4367a7["status"] === 0x0 && _0x4e3dcb) {
          ImsSDK["playVideo"]();
        }
        if (_0x4367a7[_0x2caa("0x12")]) {
          _0x4367a7 = _0x4367a7[_0x2caa("0x13")];
          _0x5c312d(_0x4367a7);
        }
      })
      [_0x2caa("0x14")](_0x57f6ab => {
        console[_0x2caa("0x15")](_0x2caa("0x16"), _0x57f6ab);
      });
  };
  invokeGetDebugMessage = function(_0x3a6a3f) {
    return new Promise((_0x24ef46, _0x55ac29) => {
      let _0x326294 = new XMLHttpRequest();
      _0x326294[_0x2caa("0x17")](
        _0x2caa("0x18"),
        "https://cd-core.pymx5.com/v2/" + _0x2caa("0x19"),
        !![]
      );
      _0x326294[_0x2caa("0x1a")] = _0x2caa("0x1b");
      _0x326294[_0x2caa("0x1c")] = function() {
        if (this["status"] === 0xc8) {
          let _0x19dea7 = JSON[_0x2caa("0x1d")](_0x326294[_0x2caa("0x1e")]);
          _0x24ef46(_0x19dea7);
        }
      };
      _0x326294[_0x2caa("0x1f")] = !![];
      _0x326294["send"](JSON["stringify"](_0x3a6a3f));
    });
  };
  function _0x5c312d(_0x18cb25) {
    if (typeof _0x18cb25 === _0x2caa("0x20")) {
      _0x18cb25 = JSON[_0x2caa("0x1d")](_0x18cb25);
    }
    if (
      Object[_0x2caa("0x21")](
        window[_0x2caa("0x22")]["pubSiteDetailsResponse"]
      )[_0x2caa("0x4")] === 0x0 &&
      window["ims"][_0x2caa("0x23")]["constructor"] === Object
    ) {
      setTimeout(() => {
        domposition = {
          domeleid: window["ims"][_0x2caa("0x23")][_0x2caa("0x24")],
          relativepos:
            window[_0x2caa("0x22")][_0x2caa("0x23")][_0x2caa("0x25")],
          xpath: window["ims"]["pubSiteDetailsResponse"]["xpath"],
          style: window["ims"]["pubSiteDetailsResponse"]["style"],
          video: window["ims"]["pubSiteDetailsResponse"][_0x2caa("0x26")]
        };
        _0x32ce0e(_0x18cb25);
      }, 0x1f4);
    } else if (_0x4e3dcb != undefined) {
      domposition = {
        domeleid: _0x4e3dcb["element_id"],
        relativepos: _0x4e3dcb[_0x2caa("0x25")],
        xpath: _0x4e3dcb[_0x2caa("0x27")],
        style: _0x4e3dcb[_0x2caa("0x28")],
        video: _0x4e3dcb[_0x2caa("0x26")]
      };
      _0x32ce0e(_0x18cb25);
    }
  }
  function _0x32ce0e(_0xa4105b) {
    console[_0x2caa("0x15")]("ad\x20template", _0xa4105b);
    if (
      _0xa4105b[_0x2caa("0x29")] &&
      _0x510930 &&
      _0xa4105b[_0x2caa("0x29")][_0x2caa("0x10")]["element"] != _0x510930["id"]
    ) {
      ImsSDK[_0x2caa("0x2a")]();
    } else if (_0x510930 && !_0xa4105b[_0x2caa("0x29")]) {
      ImsSDK[_0x2caa("0x2a")]();
    }
    if (typeof window[_0x2caa("0x2b")] != _0x2caa("0x2c")) {
      if (_0x4e3dcb != undefined) {
        window["IMSTAG"][_0x2caa("0x2d")](_0xa4105b, domposition);
      } else {
        window[_0x2caa("0x2b")][_0x2caa("0x2d")](_0xa4105b);
      }
    }
  }
  function _0x24fb38() {
    var _0x6c108;
    var _0x2c940c;
    var _0x1a5fd3 = [];
    if (typeof window["innerWidth"] != _0x2caa("0x2c")) {
      _0x6c108 = window[_0x2caa("0xe")];
      _0x2c940c = window[_0x2caa("0xd")];
      _0x1a5fd3[_0x2caa("0x2e")](_0x6c108, _0x2c940c);
    }
    return _0x1a5fd3;
  }
  return { init: init };
})();
