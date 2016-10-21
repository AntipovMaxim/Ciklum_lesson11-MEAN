export function sortForm(){
    return {
        restrict: 'AE',
        replace: true,
        template: require('./sort.directive.html'),
        scope: false
    }
}
