export function headerLogo($location, signService){
    return {
        restrict: 'AE',
        replace: true,
        template: require('./header.directive.html'),
        scope: true,
        link: function(scope, element, attr) {

        	 scope.isCurrentPath = function (path) {
              return $location.path() == path;
             };

             console.log(signService.isLoggedIn());

        	
        }
    }
}

