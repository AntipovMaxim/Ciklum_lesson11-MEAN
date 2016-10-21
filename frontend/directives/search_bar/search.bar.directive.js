
export function searchBar(){
    return {
        restrict: 'AE',
        replace: true,
        template: require('./search.bar.directive.html'),
        scope: false
    }
}

