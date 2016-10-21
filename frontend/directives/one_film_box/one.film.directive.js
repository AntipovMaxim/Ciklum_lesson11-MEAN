export function oneFilm(){
    return {
        restrict: 'AE',
        replace: true,
        template: require('./one.film.directive.html'),
        scope: false
    }
}
