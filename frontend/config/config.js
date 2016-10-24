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

        .when('/signup', {
            templateUrl: 'pages/signup.html',
            controller: 'signUpController',
            controllerAs: 'sUpCtrl'
        })

        .when('/signin', {
            templateUrl: 'pages/signin.html',
            controller: 'signInController',
            controllerAs: 'sInCtrl'
        })

        .otherwise({
            redirectTo: '/'
        });

}