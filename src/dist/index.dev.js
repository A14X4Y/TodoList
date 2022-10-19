"use strict";

var _header = require("./components/header.component");

var _navigation = require("./components/navigation.componet");

var _create = require("./components/create.component");

var _posts = require("./components/posts.component");

var _favorite = require("./components/favorite.component");

new _header.HeaderComponent("header");
var navigation = new _navigation.NavigationComponent("navigation");
var create = new _create.CreateComponent("create");
var posts = new _posts.PostsComponent("posts");
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