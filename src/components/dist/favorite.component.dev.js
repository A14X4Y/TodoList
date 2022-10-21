"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteComponent = void 0;

var _component = require("../core/component");

var _api = require("../services/api.service");

var _post = require("../templates/post.template");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FavoriteComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(FavoriteComponent, _Component);

  function FavoriteComponent(id, loader) {
    var _this;

    _classCallCheck(this, FavoriteComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FavoriteComponent).call(this, id));
    _this.loader = loader.loader;
    return _this;
  }

  _createClass(FavoriteComponent, [{
    key: "init",
    value: function init() {
      this.$el.addEventListener("click", linkClickHandler.bind(this));
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var favorites = JSON.parse(localStorage.getItem("favorites"));
      var html = renderList(favorites);
      this.$el.insertAdjacentHTML("afterbegin", html);
    }
  }, {
    key: "onHide",
    value: function onHide() {
      this.$el.innerHTML = "";
    }
  }]);

  return FavoriteComponent;
}(_component.Component);

exports.FavoriteComponent = FavoriteComponent;

function linkClickHandler(event) {
  var postId, post;
  return regeneratorRuntime.async(function linkClickHandler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();

          if (!event.target.classList.contains("js-link")) {
            _context.next = 10;
            break;
          }

          postId = event.target.dataset.id;
          this.$el.innerHTML = "";
          this.loader.show();
          _context.next = 7;
          return regeneratorRuntime.awrap(_api.apiService.fetchPostById(postId));

        case 7:
          post = _context.sent;
          this.loader.hide();
          this.$el.insertAdjacentHTML("afterbegin", (0, _post.renderPost)(post, {
            withButton: false
          }));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}

function renderList() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (list && list.length) {
    return "\n    <ul>\n      ".concat(list.map(function (item) {
      return "<li><a href = '#' class = \"js-link\" data-id =\"".concat(item.id, "\">").concat(item.title, "</a></li>");
    }).join(" "), "\n    </ul>\n    ");
  }

  return "<p class = 'center'>\u0412\u044B \u043F\u043E\u043A\u0430 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438</p>";
}