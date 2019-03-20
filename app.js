const weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')
    
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })

})

weatherApp.service('cityService', function() {

    this.city = "San Jose, CA"

})

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

}]);


// http: //api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1269643c3a92e4b5f9d6bd575054d50d



