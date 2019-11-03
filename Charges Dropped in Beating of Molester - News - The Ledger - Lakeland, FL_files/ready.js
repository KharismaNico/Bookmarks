var _0x3599 = [
  "start\x20time",
  "docReady",
  "length",
  "call",
  "ctx",
  "readyState",
  "callback\x20for\x20docReady(fn)\x20must\x20be\x20a\x20function",
  "push",
  "attachEvent",
  "interactive",
  "addEventListener",
  "DOMContentLoaded",
  "load",
  "onreadystatechange",
  "contentDocument",
  "contentWindow",
  "document",
  "querySelectorAll",
  "startTime",
  "now",
  "log"
];
(function(_0x23ef7d, _0xc1d8ea) {
  var _0x27b857 = function(_0x192cc2) {
    while (--_0x192cc2) {
      _0x23ef7d["push"](_0x23ef7d["shift"]());
    }
  };
  _0x27b857(++_0xc1d8ea);
})(_0x3599, 0x90);
var _0x76c8 = function(_0x241b21, _0x429583) {
  _0x241b21 = _0x241b21 - 0x0;
  var _0x25cadb = _0x3599[_0x241b21];
  return _0x25cadb;
};
(function(_0x29d206, _0x5b7283) {
  "use strict"; // The public function name defaults to window.docReady
  // but you can modify the last line of this function to pass in a different object or method name
  // if you want to put them in a different namespace and those will be used instead of
  // window.docReady(...)
  window[_0x76c8("0x0")] = performance[_0x76c8("0x1")]();
  console[_0x76c8("0x2")](_0x76c8("0x3"), window["startTime"]);
  _0x29d206 = _0x29d206 || _0x76c8("0x4");
  _0x5b7283 = _0x5b7283 || window;
  var _0x5d3dd0 = [];
  var _0x25b6bc = ![];
  var _0x3f9abb = ![];
  function _0x18ad5a() {
    if (!_0x25b6bc) {
      _0x25b6bc = !![];
      for (
        var _0x5d3735 = 0x0;
        _0x5d3735 < _0x5d3dd0[_0x76c8("0x5")];
        _0x5d3735++
      ) {
        _0x5d3dd0[_0x5d3735]["fn"][_0x76c8("0x6")](
          window,
          _0x5d3dd0[_0x5d3735][_0x76c8("0x7")]
        );
      }
      _0x5d3dd0 = [];
    }
  }
  function _0x1e5d09() {
    if (document[_0x76c8("0x8")] === "complete") {
      _0x18ad5a();
    }
  }
  _0x5b7283[_0x29d206] = function(_0x3572a7, _0x26ed4c) {
    if (typeof _0x3572a7 !== "function") {
      throw new TypeError(_0x76c8("0x9"));
    }
    if (_0x25b6bc) {
      setTimeout(function() {
        _0x3572a7(_0x26ed4c);
      }, 0x1);
      return;
    } else {
      _0x5d3dd0[_0x76c8("0xa")]({ fn: _0x3572a7, ctx: _0x26ed4c });
    }
    if (
      document["readyState"] === "complete" ||
      (!document[_0x76c8("0xb")] && document["readyState"] === _0x76c8("0xc"))
    ) {
      setTimeout(_0x18ad5a, 0x1);
    } else if (!_0x3f9abb) {
      if (document[_0x76c8("0xd")]) {
        document[_0x76c8("0xd")](_0x76c8("0xe"), _0x18ad5a, ![]);
        window["addEventListener"](_0x76c8("0xf"), _0x18ad5a, ![]);
      } else {
        document[_0x76c8("0xb")](_0x76c8("0x10"), _0x1e5d09);
        window[_0x76c8("0xb")]("onload", _0x18ad5a);
      }
      _0x3f9abb = !![];
    }
  };
})(_0x76c8("0x4"), window);
(function() {
  function _0x46e020(_0x427024, _0x36539f) {
    try {
      const _0x5e4c70 =
        _0x427024[_0x76c8("0x11")] ||
        _0x427024[_0x76c8("0x12")][_0x76c8("0x13")];
      return _0x5e4c70[_0x76c8("0x14")](_0x36539f) || [];
    } catch (_0x22d959) {
      return [];
    }
  }
  window["$jQInv"] = { contentFind: _0x46e020 };
})();
