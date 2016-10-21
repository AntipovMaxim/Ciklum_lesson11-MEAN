export function commentBox($localStorage, $routeParams){
	return {
		restrict: 'AE',
		replace: true,
		template: require('./comment.box.directive.html'),
		scope: true,
		link: function(scope, element, attr) {
            scope.id = $routeParams.id;
			scope.author = '';
		    scope.comment = '';
		    scope.rating = '';


		    scope.renderComment = [];
		     
		    if( $localStorage.comments == null ) $localStorage.comments = [];
		   
		    
		    (function getUniqComments(){
		    	for ( let com of $localStorage.comments ){
		        if( com.id == scope.id ){
		            scope.renderComment.push(com);
		        }
		     }
		    })();

		    
		     let comments = [];
		     let comObj = {};

		     scope.getTotalRating = function(){
		     	 var result;
		     	 var total = scope.renderComment.reduce((sum, cur) => {
		    	        return Number(cur.rating) + Number(sum);
		           }, 0)/(scope.renderComment.length)

		         result = Math.round(total*100)/100;
		         return result;
		     }

		     scope.totalRating = scope.getTotalRating();
             
            
		     scope.sendComment = function(){
		          comObj = {
		            author: scope.author,
		            date: new Date(),
		            comment: scope.comment,
		            id: scope.id,
		            rating: scope.rating        
		        };

		         $localStorage.comments.unshift(comObj);
		          
		         scope.renderComment.unshift(comObj);

		         scope.totalRating = scope.getTotalRating();

		         scope.author = '';
		         scope.comment = '';
		         scope.rating = '';

		    }

            }
		}
}
