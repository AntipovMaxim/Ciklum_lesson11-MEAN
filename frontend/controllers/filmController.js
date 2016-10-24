export default function ($scope, filmsService, $resource, $routeParams, $localStorage, searchService) {
    this.title = filmsService.title;
    this.id = $routeParams.id;
    
    this.getMovieDetail = function () {
        searchService.getMovieDetal(this.id).then(res => this.film = res)
    }

    this.getMovieDetail();
   
    this.addToFavorite = function () {
        const fav = $localStorage.fav || [];
        fav.unshift(this.film);
        $localStorage.fav = fav;
    }



}