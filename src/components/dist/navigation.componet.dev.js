"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationComponent = void 0;

var _component = require("../core/component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NavigationComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationComponent, _Component);

  function NavigationComponent(id) {
    _classCallCheck(this, NavigationComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, id));
  }

  _createClass(NavigationComponent, [{
    key: "init",
    value: function init() {
      this.$el.addEventListener('click', tabClickHandler.bind(this));
    }
  }, {
    key: "registerTabs",
    value: function registerTabs(tabs) {
      this.tabs = tabs;
    }
  }]);

  return NavigationComponent;
}(_component.Component);

exports.NavigationComponent = NavigationComponent;

function tabClickHandler(event) {
  event.preventDefault();
  console.log(event);
  console.log(this.$el);

  if (event.target.classList.contains('tab')) {
    Array.from(this.$el.querySelectorAll('.tab')).forEach(function (tab) {
      tab.classList.remove('active');
    });
    event.target.classList.add('active');
    var activeTabs = this.tabs.find(function (tab) {
      return tab.name === event.target.dataset.name;
    });
    this.tabs.forEach(function (tab) {
      return tab.component.hide();
    });
    activeTabs.component.show();
  }
}