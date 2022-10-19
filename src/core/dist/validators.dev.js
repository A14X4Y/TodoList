"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validators = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validators =
/*#__PURE__*/
function () {
  function Validators() {
    _classCallCheck(this, Validators);
  }

  _createClass(Validators, null, [{
    key: "required",
    value: function required() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return value && value.trim();
    }
  }, {
    key: "minLength",
    value: function minLength(length) {
      return function (value) {
        return value.length > length;
      };
    }
  }]);

  return Validators;
}();

exports.Validators = Validators;