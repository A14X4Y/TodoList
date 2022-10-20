"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiService = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiService =
/*#__PURE__*/
function () {
  function ApiService(baseUrl) {
    _classCallCheck(this, ApiService);

    this.url = baseUrl;
  }

  _createClass(ApiService, [{
    key: "createPost",
    value: function createPost(post) {
      var request;
      return regeneratorRuntime.async(function createPost$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
              });
              return _context.abrupt("return", useRequest(request));

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 5]]);
    }
  }, {
    key: "fetchPost",
    value: function fetchPost() {
      var request;
      return regeneratorRuntime.async(function fetchPost$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              request = new Request("".concat(this.url, "/posts.json"), {
                method: 'get'
              });
              return _context2.abrupt("return", useRequest(request));

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 5]]);
    }
  }]);

  return ApiService;
}();

function useRequest(request) {
  var response;
  return regeneratorRuntime.async(function useRequest$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch(request));

        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          return _context3.abrupt("return", _context3.sent);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
}

var apiService = new ApiService('https://todolist-8f9ce-default-rtdb.europe-west1.firebasedatabase.app/');
exports.apiService = apiService;