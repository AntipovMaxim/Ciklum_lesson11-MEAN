export function errorBox(){
	return {
		restrict: 'AE',
		replace: true,
		template: require('./error.directive.html'),
		scope: false
		}
}
