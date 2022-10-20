"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form =
/*#__PURE__*/
function () {
  function Form(form, controls) {
    _classCallCheck(this, Form);

    this.form = form;
    this.controls = controls;
  }

  _createClass(Form, [{
    key: "value",
    value: function value() {
      var _this = this;

      var value = {};
      Object.keys(this.controls).forEach(function (control) {
        value[control] = _this.form[control].value;
      });
      return value;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      Object.keys(this.controls).forEach(function (control) {
        _this2.form[control].value = '';
      });
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var _this3 = this;

      var isFormValid = true;
      Object.keys(this.controls).forEach(function (control) {
        var validators = _this3.controls[control];
        var isValid = true;
        validators.forEach(function (validator) {
          isValid = validator(_this3.form[control].value) && isValid;
        });
        !isValid ? setForm(_this3.form[control]) : cleanError(_this3.form[control]);
        isFormValid = isFormValid && isValid;
      });
      return isFormValid;
    }
  }]);

  return Form;
}();

exports.Form = Form;

function setForm($control) {
  cleanError($control);
  var error = '<p class= "validation-error">Введите коректное значение</p>';
  $control.classList.add("invalid");
  $control.insertAdjacentHTML('afterend', error);
}

function cleanError($control) {
  $control.classList.remove("invalid");

  if ($control.nextSibling) {
    $control.closest('.form-control').removeChild($control.nextSibling);
  }
}