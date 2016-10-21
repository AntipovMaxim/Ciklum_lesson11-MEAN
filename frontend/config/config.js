export default function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })

        .when('/film/:id', {
            templateUrl: 'pages/film.html',
            controller: 'filmController',
            controllerAs: 'filmCtrl'
        })


}