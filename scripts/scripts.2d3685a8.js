"use strict";angular.module("mytodoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("mytodoApp").controller("MainCtrl",["$scope",function(a){a.todos=["Item 1","Item 2","Item 3"],a.addTodo=function(){a.todos.push(a.todo),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)}}]),angular.module("mytodoApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("mytodoApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="container"> <h2>My todos</h2> <!-- Todos input --> <form role="form" ng-submit="addTodo()"> <div class="row"> <div class="input-group"> <input type="text" ng-model="todo" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Add"> </span> </div> </div> </form> <!-- Todos list --> <div ui-sortable ng-model="todos"> <p class="input-group" ng-repeat="todo in todos" style="padding:5px 10px; cursor: move"> <input type="text" ng-model="todo" class="form-control"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button> </span> </p> </div> </div>')}]);