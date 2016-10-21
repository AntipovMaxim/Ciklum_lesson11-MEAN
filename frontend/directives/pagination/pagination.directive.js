export function paginaTion(){
	return {
		restrict: 'AE',
		replace: true,
		template: require('./pagination.directive.html'),
		scope: false
		}
}
