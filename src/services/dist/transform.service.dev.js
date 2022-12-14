"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransformService = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransformService =
/*#__PURE__*/
function () {
  function TransformService() {
    _classCallCheck(this, TransformService);
  }

  _createClass(TransformService, null, [{
    key: "fBaseObjectToArray",
    value: function fBaseObjectToArray(fBase) {
      return Object.keys(fBase).map(function (key) {
        var item = fBase[key];
        item.id = key;
        return item;
      });
    }
  }]);

  return TransformService;
}();

exports.TransformService = TransformService;