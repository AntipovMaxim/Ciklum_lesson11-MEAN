export function favoriteBox(){
	return {
		restrict: 'AE',
		replace: true,
		template: require('./favorite.box.directive.html'),
		scope: false
		}
}
