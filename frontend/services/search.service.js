export default function ($http){


     this.searchMovies = function (title, year, type, page) {
        
        const url = `search/movies?title=${title}&year=${year}&type=${type}&plot=full&r=json&page=${page}`;
       
       return $http.get(url)
        .then(res => res.data)

        .catch((error) => {

        alert(error.statusText);

        throw new Error(error.statusText);

      });
     	
     }


     this.getMovieDetal = function (id) {
     	const url = `search/${id}`;

     	return $http.get(url)
        .then(res => res.data)

        .catch((error) => {

         alert(error.statusText);

        throw new Error(error.statusText);

      });


     }






}