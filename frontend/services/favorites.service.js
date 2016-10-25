export default function($http) {


  this.getFavorites = function() {

    return $http.get('/favorites')

      .then((res) => {
        
        return res.data;

      });

  }



  this.addFavourite = function(movie) {

    return $http.post('/favorites', {movie})

      .then((res) => {

        return res.data;

      });

  }



  this.deleteFromFavourites = function(id) {

    return $http.delete(`/favorites/${id}`)

      .then((res) => {

        return res.data;

      });

  }

}