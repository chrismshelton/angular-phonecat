'use strict';

/* Controllers */

var thingsApp = angular.module('thingsApp', []);

thingsApp.controller('ThingsAppCtrl', function ($scope) {
  $scope.things = [
    {'name': 'The Thing', 
     'snippet' : 'it\'s a thing that does things :O',
     'age' : 2},
    {'name' : 'Other Thing',
     'snippet' : 'Hey a thing that also does things',
     'age' : 5},
    {'name' : 'Last Thing',
     'snippet' : 'This is the last thing. It\'s not as good as the other things',
     'age' : 1},
  ];
  $scope.name = "Thing Looker";
  $scope.orderProp = 'age'
});

