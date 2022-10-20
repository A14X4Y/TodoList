"use strict";

var _header = require("./components/header.component");

var _navigation = require("./components/navigation.component");

var _create = require("./components/create.component");

var _favorite = require("./components/favorite.component");

var _posts = require("./components/posts.component");

var _loader = require("./components/loader.component");

new _header.HeaderComponent("header");
var navigation = new _navigation.NavigationComponent("navigation");
var loader = new _loader.LoaderComponent("loader");
var posts = new _posts.PostsComponent("posts", {
  loader: loader
});
var create = new _create.CreateComponent("create");
var favorite = new _favorite.FavoriteComponent("favorite");
navigation.registerTabs([{
  name: "create",
  component: create
}, {
  name: "posts",
  component: posts
}, {
  name: "favorite",
  component: favorite
}]);