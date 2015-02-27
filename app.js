var newspaper = angular.module('newspaper', ['ui.router']);

newspaper.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: "partials/home.html",
    controller: 'BeatsCtrl'
  });


});
