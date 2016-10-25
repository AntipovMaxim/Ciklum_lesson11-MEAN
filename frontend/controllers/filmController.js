export default function ($scope, filmsService, $routeParams, searchService, favoriteService) {
    this.title = filmsService.title;
    this.id = $routeParams.id;

    this.favorite = false;

    
    this.getMovieDetail = function () {
        searchService.getMovieDetal(this.id).then(res => this.film = res)
    }

    this.getMovieDetail();



    // this.movie = {
    //     Title: this.film.Title,
    //     Year: this.film.Year
    // }

    this.getFromFavorites = function(){
        favoriteService.getFavorites().then(r =>{
          // console.log(r);
          this.favorite = r.some(i =>{
            return i.imdbID == this.id;
          })
          console.log(this.favorite);
        })
    }

    this.getFromFavorites();
   
    this.addToFavorite = function (film) {
        
    favoriteService.addFavourite({Title: film.Title, Year: film.Year, imdbID: film.imdbID}).then(r => console.log(r))


        // const fav = $localStorage.fav || [];
        // fav.unshift(this.film);
        // $localStorage.fav = fav;
    }

    this.deleteFromFavorites = function(){
       favoriteService.deleteFromFavourites(this.id).then(r => console.log(r))
    }

}