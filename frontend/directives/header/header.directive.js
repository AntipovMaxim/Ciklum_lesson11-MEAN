export function headerLogo(){
    return {
        restrict: 'AE',
        replace: true,
        template: require('./header.directive.html'),
        scope: {}
    }
}

