"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostsComponent = void 0;

var _component = require("../core/component");

var _api = require("../services/api.service");

var _transform = require("../services/transform.service");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PostsComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PostsComponent, _Component);

  function PostsComponent(id, _ref) {
    var _this;

    var loader = _ref.loader;

    _classCallCheck(this, PostsComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostsComponent).call(this, id));
    _this.loader = loader;
    return _this;
  }

  _createClass(PostsComponent, [{
    key: "init",
    value: function init() {
      this.$el.addEventListener("click", buttonHandler.bind(this));
    }
  }, {
    key: "onShow",
    value: function onShow() {
      var fbData, posts, html;
      return regeneratorRuntime.async(function onShow$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.loader.show();
              _context.next = 3;
              return regeneratorRuntime.awrap(_api.apiService.fetchPost());

            case 3:
              fbData = _context.sent;
              posts = _transform.TransformService.fBaseObjectToArray(fbData);
              html = posts.map(function (post) {
                return renderPost(post);
              }).join("");
              this.loader.hide();
              this.$el.insertAdjacentHTML("afterbegin", html);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "onHide",
    value: function onHide() {
      this.$el.innerHTML = "";
    }
  }]);

  return PostsComponent;
}(_component.Component);

exports.PostsComponent = PostsComponent;

function renderPost(post) {
  var tag = post.type === "news" ? '<li class="tag tag-blue tag-rounded">Новости</li>' : '<li class="tag tag-rounded">Заметка</li>';
  var button = (JSON.parse(localStorage.getItem('favorites')) || []).includes(post.id) ? "<button class = \"button-round button-small button-danger\" data-id=\"".concat(post.id, "\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</buttton>") : "<button class = \"button-round button-small button-primary\" data-id=\"".concat(post.id, "\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</buttton>");
  return "\n      <div class=\"panel\">\n        <div class=\"panel-head\">\n          <p class=\"panel-title\">".concat(post.title, "</p>\n          <ul class=\"tags\">\n          </ul>\n        </div>\n        <div class=\"panel-body\">\n          <p class=\"multi-line\">").concat(post.fulltext, "</p>\n        </div>\n        <div class=\"panel-footer w-panel-footer\">\n          <small>").concat(post.date, "</small>\n          ").concat(button, "\n        </div>\n      </div>");
}

function buttonHandler(event) {
  var $el = event.target;
  var id = $el.dataset.id;

  if (id) {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(id)) {
      $el.textContent = "Сохранить";
      $el.classList.add("button-primary");
      $el.classList.remove("button-danger");
      console.log(favorites);
      favorites = favorites.filter(function (fId) {
        return fId !== id;
      });
    } else {
      $el.textContent = "Удалить";
      $el.classList.add("button-danger");
      $el.classList.remove("button-primary");
      console.log(favorites);
      favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}