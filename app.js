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

    this.city = ''

})

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

}]);

weatherApp.controller('forecastController', ['$scope', '$sce', 'cityService', function ($scope, $sce, cityService) {

    $scope.city = cityService.city;

    $scope.appId = '1269643c3a92e4b5f9d6bd575054d50d'

    $scope.getWeather = function() {
        url = "http://api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&mode=json&APPID="+$scope.appId;
        $http.get(url).then(function(response) {
            console.log(response.data)
        }, function myError(response) {
            console.log(response.statusText)
        })
    };

    // $scope.weatherAPI = $sce.trustAsResourceUrl('https://api.openweathermap.org/data/2.5/weather',
    //     { callback: "JSON_CALLBACK"},
    //     { get: { method: "JSONP" }});

    // $scope.weatherResult = $scope.weatherAPI.get({
    //     q: $scope.city,
    //     APPID: '1269643c3a92e4b5f9d6bd575054d50d'
    // })

    // console.log($scope.weatherResult);

}]);



// http: //api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1269643c3a92e4b5f9d6bd575054d50d
// http: //api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1269643c3a92e4b5f9d6bd575054d50d



