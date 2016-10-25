export default function ($scope, filmsService, $routeParams, searchService, favoriteService) {
    this.title = filmsService.title;
    this.id = $routeParams.id;

    this.favorite = false;

    
    this.getMovieDetail = function () {
        searchService.getMovieDetal(this.id).then(res => this.film = res)
    }

    this.getMovieDetail();



    this.getFromFavorites = function(){
        favoriteService.getFavorites().then(r =>{
        
          this.favorite = r.some(i =>{
            return i.imdbID == this.id;
          })
          
        })
    }

    this.getFromFavorites();
   
    this.addToFavorite = function (film) {
        
    favoriteService.addFavourite({Title: film.Title, Year: film.Year, imdbID: film.imdbID}).then(r => console.log(r))

    }

    this.deleteFromFavorites = function(){
       favoriteService.deleteFromFavourites(this.id).then(r => console.log(r))
    }

}