var _0x2af7 = [
  "renderAd",
  "starting\x20mouse\x20over",
  "adRequest",
  "mouseOverData",
  "time\x20up,\x20mouse\x20over\x20stopped",
  "data",
  "sendEvent",
  "AD_MOUSE_OVER",
  "innerWidth",
  "innerHeight",
  "join",
  "site_id",
  "location",
  "href",
  "hostname",
  "screen",
  "availWidth",
  "availHeight",
  "containermetadata",
  "adtype",
  "open",
  "POST",
  "getMessage",
  "responseType",
  "text",
  "onload",
  "responseText",
  "status_code",
  "debugInfo",
  "debug",
  "renderedDealId",
  "dealId",
  "getMessageResponse",
  "dealid",
  "setRequestHeader",
  "Content-type",
  "withCredentials",
  "stringify",
  "publisher/get_message_status",
  "send",
  "deal_id",
  "from",
  "no\x20markers\x20yet",
  "readyState",
  "then",
  "resolveValidDeal",
  "markersList",
  "getAdParamters",
  "getElementsByTagName",
  "/HTML[1]/BODY[1]",
  "offsetHeight",
  "offsetWidth",
  "getElementsByClassName",
  "_inv_marker",
  "keys",
  "length",
  "endTime",
  "now",
  "end\x20time",
  "execution\x20time",
  "parse",
  "adTemplate",
  "track",
  "credit_wallet",
  "log",
  "caught",
  "leftTree",
  "status",
  "startTime",
  "pubSiteDetailsResponse",
  "ims",
  "constructor",
  "element_id",
  "relativepos",
  "xpath",
  "style",
  "marker",
  "placement",
  "element",
  "playVideo",
  "IMSTAG",
  "undefined"
];
(function(_0x243a1e, _0xabc095) {
  var _0x53daa0 = function(_0x29c285) {
    while (--_0x29c285) {
      _0x243a1e["push"](_0x243a1e["shift"]());
    }
  };
  _0x53daa0(++_0xabc095);
})(_0x2af7, 0xd2);
var _0x476a = function(_0x330af9, _0x27f57d) {
  _0x330af9 = _0x330af9 - 0x0;
  var _0x15d11c = _0x2af7[_0x330af9];
  return _0x15d11c;
};
var adRequest = (function() {
  var _0x446bca,
    _0xdc03ed = {},
    _0x576bfe = { data: [] },
    _0x4d1e61;
  let _0x5ed161 = adRequest ? adRequest[_0x476a("0x0")] : [],
    _0x3c6c70 = ImsSDK[_0x476a("0x1")](),
    _0x410152 = document[_0x476a("0x2")]("body"),
    _0x35e4b6 = {},
    _0x478fa7 = null,
    _0x54297f = 0x0;
  containerInfo = {
    id: _0x410152[0x0] != undefined ? _0x410152[0x0]["id"] : null,
    xpath: _0x410152[0x0] != undefined ? _0x476a("0x3") : null,
    h: _0x410152[0x0] != undefined ? _0x410152[0x0][_0x476a("0x4")] : null,
    w: _0x410152[0x0] != undefined ? _0x410152[0x0][_0x476a("0x5")] : null
  };
  markerElements = document[_0x476a("0x6")](_0x476a("0x7"));
  const _0x289592 = _0x598eda => {
    return new Promise(_0x2409d8 => setTimeout(_0x2409d8, _0x598eda));
  };
  function _0x530c98() {
    let _0x137cd9 = setInterval(() => {
      if (
        _0x35e4b6 != null &&
        Object[_0x476a("0x8")](_0x35e4b6)[_0x476a("0x9")] !== 0x0
      ) {
        clearInterval(_0x137cd9);
        _0x1d8828();
      } else if (_0x35e4b6 == null) {
        clearInterval(_0x137cd9);
        window[_0x476a("0xa")] = performance[_0x476a("0xb")]();
        console["log"](
          _0x476a("0xc"),
          window[_0x476a("0xa")],
          _0x476a("0xd"),
          window[_0x476a("0xa")] - window["startTime"]
        );
      }
    }, 0x5);
  }
  function _0x1d8828() {
    let _0x3cc7d8 = JSON[_0x476a("0xe")](adRequest["leftTree"][_0x476a("0xf")]);
    try {
      window["ia"](_0x476a("0x10"), _0x476a("0x11"), _0x3cc7d8["bp"]);
    } catch (_0x178ffd) {
      console[_0x476a("0x12")](_0x476a("0x13"), _0x178ffd);
    }
    if (adRequest[_0x476a("0x14")][_0x476a("0x15")] !== 0x0) {
      window[_0x476a("0xa")] = performance[_0x476a("0xb")]();
      console[_0x476a("0x12")](
        _0x476a("0xc"),
        window["endTime"],
        _0x476a("0xd"),
        window[_0x476a("0xa")] - window[_0x476a("0x16")]
      );
      if (typeof _0x35e4b6 === "string") {
        _0x35e4b6 = JSON[_0x476a("0xe")](_0x35e4b6);
      }
      if (
        Object[_0x476a("0x8")](window["ims"][_0x476a("0x17")])[
          _0x476a("0x9")
        ] === 0x0 &&
        window[_0x476a("0x18")][_0x476a("0x17")][_0x476a("0x19")] === Object
      ) {
        _0x4d1e61 = {
          domeleid: window[_0x476a("0x18")][_0x476a("0x17")][_0x476a("0x1a")],
          relativepos:
            window[_0x476a("0x18")][_0x476a("0x17")][_0x476a("0x1b")],
          xpath: window[_0x476a("0x18")][_0x476a("0x17")][_0x476a("0x1c")],
          style: window[_0x476a("0x18")][_0x476a("0x17")]["style"],
          video: window[_0x476a("0x18")][_0x476a("0x17")]["video"]
        };
        _0x1648f4(_0x35e4b6);
      } else if (_0xdc03ed != undefined) {
        _0x4d1e61 = {
          domeleid: _0xdc03ed[_0x476a("0x1a")],
          relativepos: _0xdc03ed[_0x476a("0x1b")],
          xpath: _0xdc03ed[_0x476a("0x1c")],
          style: _0xdc03ed[_0x476a("0x1d")],
          video: _0xdc03ed["video"]
        };
        _0x1648f4(_0x35e4b6);
      }
      ims["request"]();
    }
  }
  function _0x1648f4(_0x35e4b6) {
    if (
      _0x35e4b6[_0x476a("0x1e")] &&
      _0x3c6c70 &&
      _0x35e4b6[_0x476a("0x1e")][_0x476a("0x1f")][_0x476a("0x20")] !=
        _0x3c6c70["id"]
    ) {
      ImsSDK[_0x476a("0x21")]();
    } else if (_0x3c6c70 && !_0x35e4b6["marker"]) {
      ImsSDK["playVideo"]();
    }
    if (typeof window[_0x476a("0x22")] != _0x476a("0x23")) {
      if (_0xdc03ed != undefined) {
        window["IMSTAG"]["renderAd"](_0x35e4b6, _0x4d1e61);
      } else {
        window[_0x476a("0x22")][_0x476a("0x24")](_0x35e4b6);
      }
    }
  }
  function _0x4c3cdb() {
    let _0x477ff1 = null;
    console[_0x476a("0x12")](
      _0x476a("0x25"),
      window[_0x476a("0x26")][_0x476a("0x27")]["data"]
    );
    _0x289592(0xa * 0x3c * 0x3e8)["then"](() => {
      _0x16c14e = () => {
        console["log"](_0x476a("0x28"));
        clearInterval(_0x477ff1);
      };
    });
    _0x477ff1 = setInterval(() => {
      if (
        window["adRequest"][_0x476a("0x27")][_0x476a("0x29")][_0x476a("0x9")] >
        0x0
      )
        _0x16c14e();
    }, 0x1388);
  }
  function _0x16c14e() {
    var _0x40f5ef = "TAG";
    var _0x29f2a7 = "0.34.1";
    var _0x231cd9 = 0x0;
    _0x231cd9 = window["adRequest"]["mouseOverData"][_0x476a("0x29")]["length"];
    if (
      _0x231cd9 > window["mouseOverLength"] ||
      window["mouseOverLength"] === undefined
    ) {
      window["ia"][_0x476a("0x2a")](
        _0x476a("0x2b"),
        JSON["stringify"](window[_0x476a("0x26")][_0x476a("0x27")]),
        _0x40f5ef,
        _0x29f2a7
      );
    }
  }
  function _0x5dfd61() {
    var _0x2bc455;
    var _0x159299;
    var _0x45736d = [];
    if (typeof window[_0x476a("0x2c")] != "undefined") {
      _0x2bc455 = window[_0x476a("0x2c")];
      _0x159299 = window[_0x476a("0x2d")];
      _0x45736d["push"](_0x2bc455, _0x159299);
    }
    return _0x45736d;
  }
  function _0x51a55d() {
    var _0x109fb0 = _0x5dfd61();
    var _0x47d55e = new Date()["toString"]();
    _0x47d55e = _0x47d55e["split"]("\x20");
    _0x47d55e[_0x476a("0x9")] = 0x6;
    _0x47d55e = _0x47d55e[_0x476a("0x2e")]("\x20");
    _0x47d55e = encodeURIComponent(_0x47d55e);
    var _0x97f7ff = {
      userid: null,
      site: {
        siteid: _0xdc03ed ? _0xdc03ed[_0x476a("0x2f")] : null,
        pageurl: window[_0x476a("0x30")][_0x476a("0x31")],
        domain: window[_0x476a("0x30")][_0x476a("0x32")],
        keywords: "",
        ext: {}
      },
      adsize: "",
      adposition: "",
      screenresolution:
        window[_0x476a("0x33")][_0x476a("0x34")] +
        "x" +
        window[_0x476a("0x33")][_0x476a("0x35")],
      tabsize: _0x109fb0[0x0] + "x" + _0x109fb0[0x1],
      coppa: "",
      timezone: _0x47d55e,
      ext: {},
      filter: { deals: { dealIds: _0x446bca, forced: ![] } },
      placement: {
        adtype: _0xdc03ed ? _0xdc03ed["adtype"] : null,
        size: _0xdc03ed ? _0xdc03ed["size"] : null
      },
      markers: _0x5ed161["length"] > 0x0 ? _0x5ed161 : undefined,
      viewportsize: { h: window[_0x476a("0x2d")], w: window["innerWidth"] },
      containermetadata: {
        id: _0xdc03ed ? _0xdc03ed[_0x476a("0x1a")] : null,
        xpath: _0xdc03ed ? _0xdc03ed["xpath"] : null,
        h:
          _0xdc03ed && _0xdc03ed["containermetadata"]
            ? _0xdc03ed[_0x476a("0x36")]["h"]
            : null,
        w:
          _0xdc03ed && _0xdc03ed[_0x476a("0x36")]
            ? _0xdc03ed[_0x476a("0x36")]["w"]
            : null
      }
    };
    if (
      _0x97f7ff[_0x476a("0x1f")] &&
      _0x97f7ff[_0x476a("0x1f")][_0x476a("0x37")] !== "in-stream"
    ) {
      delete _0x97f7ff[_0x476a("0x1f")];
    }
    return new Promise((_0x350826, _0x5f2704) => {
      var _0x48cd72 = new XMLHttpRequest();
      let _0x554329 = {};
      _0x48cd72[_0x476a("0x38")](
        _0x476a("0x39"),
        "https://cd-core.pymx5.com/v2/" + _0x476a("0x3a")
      );
      _0x48cd72[_0x476a("0x3b")] = _0x476a("0x3c");
      _0x48cd72[_0x476a("0x3d")] = function() {
        adRequest[_0x476a("0x14")] = JSON["parse"](_0x48cd72[_0x476a("0x3e")]);
        _0x554329[_0x476a("0x3f")] = _0x48cd72[_0x476a("0x15")];
        if (adRequest["leftTree"][_0x476a("0x15")] === 0x0 && _0xdc03ed) {
          ImsSDK[_0x476a("0x21")]();
        }
        if (adRequest[_0x476a("0x14")][_0x476a("0x40")]) {
          console[_0x476a("0x12")](
            _0x476a("0x41"),
            adRequest["leftTree"][_0x476a("0x40")]
          );
        }
        if (adRequest["leftTree"]["status"] == 0x1) {
          _0x35e4b6 = adRequest[_0x476a("0x14")]["adTemplate"];
          adRequest[_0x476a("0x42")] = parseInt(
            adRequest[_0x476a("0x14")][_0x476a("0x43")]
          )
            ? parseInt(adRequest["leftTree"][_0x476a("0x43")])
            : -0x1;
          adRequest[_0x476a("0x44")] = 0x1;
          _0x350826(_0x35e4b6);
        } else {
          _0x35e4b6 = null;
          adRequest[_0x476a("0x42")] = adRequest[_0x476a("0x14")][
            _0x476a("0x45")
          ]
            ? adRequest[_0x476a("0x14")][_0x476a("0x45")]
            : -0x1;
          _0x5f2704(_0x35e4b6);
        }
        _0x554329["deal_ids"] = _0x446bca;
        _0x46adf5(_0x554329);
      };
      _0x48cd72[_0x476a("0x46")](_0x476a("0x47"), "text/plain");
      _0x48cd72[_0x476a("0x48")] = !![];
      _0x48cd72["send"](JSON[_0x476a("0x49")](_0x97f7ff));
    });
  }
  function _0x46adf5(_0x36c5c4) {
    return new Promise(_0x598caf => {
      var _0x21d451 = new XMLHttpRequest();
      _0x21d451["open"](
        _0x476a("0x39"),
        "https://api.pymx5.com/v1/" + _0x476a("0x4a"),
        !![]
      );
      _0x21d451[_0x476a("0x46")](_0x476a("0x47"), "application/json");
      _0x21d451[_0x476a("0x48")] = !![];
      _0x21d451[_0x476a("0x4b")](JSON[_0x476a("0x49")](_0x36c5c4));
    });
  }
  function _0x29cc78() {
    _0x446bca = this[_0x476a("0x4c")];
    _0xdc03ed = this[_0x476a("0x17")];
    if (markerElements[_0x476a("0x9")] > 0x0) {
      for (
        let _0x39736f = 0x0;
        _0x39736f < markerElements["length"];
        _0x39736f++
      ) {
        _0x5ed161["push"](markerElements[_0x39736f]["id"]);
      }
      _0x5ed161 = Array[_0x476a("0x4d")](new Set(_0x5ed161));
    } else {
      console[_0x476a("0x12")](_0x476a("0x4e"), document[_0x476a("0x4f")]);
    }
    if (_0xdc03ed[_0x476a("0x36")] === null) {
      _0xdc03ed[_0x476a("0x36")] = containerInfo;
    }
    _0x51a55d()[_0x476a("0x50")](
      () => {
        ims[_0x476a("0x51")]();
      },
      () => {
        ims[_0x476a("0x51")]();
      }
    );
  }
  return {
    done: _0x29cc78,
    load: _0x5dfd61,
    render: _0x1d8828,
    checkForAd: _0x530c98,
    iframeLoaded: _0x4c3cdb,
    leftTree: _0x35e4b6,
    markersList: _0x5ed161,
    mouseOverData: _0x576bfe,
    renderedDealId: _0x478fa7,
    getMessageResponse: _0x54297f
  };
})();
