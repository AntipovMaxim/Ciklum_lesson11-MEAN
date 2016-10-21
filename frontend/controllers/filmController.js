export default function ($scope, filmsService, $resource, $routeParams, $localStorage, httpService) {
    this.title = filmsService.title;
    this.id = $routeParams.id;

    this.filmsAPI = $resource(`http://www.omdbapi.com/?i=${this.id}&plot=short&r=json`, {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});
    this.film = this.filmsAPI.get();
    console.log(this.film);

   
    this.addToFavorite = function () {
        const fav = $localStorage.fav || [];
        fav.unshift(this.film);
        $localStorage.fav = fav;
    }

}