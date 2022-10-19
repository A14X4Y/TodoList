"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component =
/*#__PURE__*/
function () {
  function Component(id) {
    _classCallCheck(this, Component);

    this.$el = document.getElementById(id);
    this.init();
  }

  _createClass(Component, [{
    key: "init",
    value: function init() {}
  }, {
    key: "hide",
    value: function hide() {
      this.$el.classList.add('hide');
    }
  }, {
    key: "show",
    value: function show() {
      this.$el.classList.remove('hide');
    }
  }]);

  return Component;
}();

exports.Component = Component;