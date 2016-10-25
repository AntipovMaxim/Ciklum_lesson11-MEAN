import _ from 'lodash';
export default function ($scope, filmsService, searchService, signService, favoriteService, $rootScope) {
    this.title = filmsService.title;
    this.films = filmsService.films;
    this.year = '';
    this.type = '';
    this.page = filmsService.page;
    this.filterType = '';
    this.reverse = true;
    this.totalRes = filmsService.totalRes;
    this.bool = filmsService.bool;
    this.from = filmsService.from;
    this.to = filmsService.to;
    this.error = '';



    this.getNext = function(){
        this.page++;
        this.from += 10;
        this.to +=10;
    }

    this.getPrev = function(){
        this.page--;
        this.from -= 10;
        this.to -=10;
    }

    this.sortBy = function() {
        this.reverse = !this.reverse;
    };


    this.openFilters = function() {
        this.bool = true;
    }

    this.refresh = function(){
        this.page = 1;
        this.from = 1;
        this.to = 10;
    }

    $rootScope.$on( "log", (data) => {
            
                filmsService.films = [];
                this.uiqFav = []; 
                filmsService.bool = false;
                filmsService.title = '';

             });


    $scope.$watch(() => this.title, function (nv, ov) {

        filmsService.title = nv;
    });

    $scope.$watch(() => this.films, function (nv, ov) {
        filmsService.films = nv;
    });

    $scope.$watch(() => this.bool, function (nv, ov) {
        filmsService.bool = nv;
    });

    $scope.$watch(() => this.page, function (nv, ov) {
        filmsService.page = nv;
    });

    $scope.$watch(() => this.totalRes, function (nv, ov) {
        filmsService.totalRes = nv;
    });

    $scope.$watch(() => this.from, function (nv, ov) {
        filmsService.from = nv;
    });

    $scope.$watch(() => this.to, function (nv, ov) {
        filmsService.to = nv;
    });



   this.getFavorites = function(){
    favoriteService.getFavorites().then(r =>{
      
      this.uiqFav = _.uniqBy(r, 'imdbID');
    })
   }

   this.getFavorites();
    

   this.submit = function () {
       searchService.searchMovies(this.title, this.year, this.type, this.page).then(res => {
          
         this.films = res.Search;
         this.totalRes = res.totalResults;
         this.error = res.Response;

       })

   }

}