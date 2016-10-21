

export function filmsList(){
	return {
		restrict: 'AE',
		replace: true,
		template: require('./films.list.directive.html'),
		scope: false
		}
}
