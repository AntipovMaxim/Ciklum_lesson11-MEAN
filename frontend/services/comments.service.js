export default function ($http){

	 this.addComment = function (id, comment, author, rating) {
        
       
       return $http.post(`/comments/${id}`, {comment, author, rating})
        .then(res => res.data)

        .catch((error) => {

        alert(error.statusText);

        throw new Error(error.statusText);

      });
     	
     }


     this.getComments = function(id){
        
        return $http.get(`/comments/${id}`)
        .then(res => res.data)

        .catch((error) => {

        alert(error.statusText);

        throw new Error(error.statusText);

      });  
        
     }


}