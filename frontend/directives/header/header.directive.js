export function headerLogo($location, signService, $rootScope){
    return {
        restrict: 'AE',
        replace: true,
        template: require('./header.directive.html'),
        scope: true,
        link: function(scope, element, attr) {

        	 scope.isCurrentPath = function (path) {
              return $location.path() == path;
             };

            
             // out/in  batton
             scope.logging = false;

            
             $rootScope.$on( "log", function () {
             	scope.logging = true;

             });


              scope.logout = function () {

			      signService.logout()
			        .then(function () {
			          $location.path('/signin');
			        });

			        scope.logging = false;

			    };

        }
    }
}

