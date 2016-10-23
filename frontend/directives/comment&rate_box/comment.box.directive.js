export function commentBox($localStorage, $routeParams, commentsService){
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

            (function () {
		     	commentsService.getComments(scope.id).then(r => {
                   console.log(r);
                   if(r == null){
                   	scope.renderComment = [];
                   	scope.totalRating = null;
                   }else{
                   	scope.renderComment = r.comments;
                    scope.totalRating = scope.getTotalRating(r.comments);
                   }
                   
		     	})
		     })()
             


		     scope.getTotalRating = function(data){
		     	 var result;
		     	 var total = data.reduce((sum, cur) => {
		    	        return Number(cur.rating) + Number(sum);
		           }, 0)/(data.length)

		         result = Math.round(total*100)/100;
		         return result;
		     }
		     
            
		     scope.sendComment = function(){
		          
                commentsService.addComment(scope.id, scope.comment, scope.author, scope.rating).then(r => {
                	
                    scope.renderComment = r;

                    scope.totalRating = scope.getTotalRating(r);

                	console.log(r);
                })  
                  
		         scope.author = '';
		         scope.comment = '';
		         scope.rating = '';

		    }

            }
		}
}
