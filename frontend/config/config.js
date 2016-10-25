export default function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            access: {restricted: true}
        })

        .when('/signin', {
            templateUrl: 'pages/signin.html',
            controller: 'signInController',
            controllerAs: 'sInCtrl',
            access: {restricted: false}
        })
     
          .when('/signup', {
            templateUrl: 'pages/signup.html',
            controller: 'signUpController',
            controllerAs: 'sUpCtrl',
            access: {restricted: false}
        })

          .when('/film/:id', {
            templateUrl: 'pages/film.html',
            controller: 'filmController',
            controllerAs: 'filmCtrl',
            access: {restricted: true}
        })
          .when('', {
            
            access: {restricted: true}
        })

        .otherwise({
            redirectTo: '/',
            access: {restricted: false}
        })

}