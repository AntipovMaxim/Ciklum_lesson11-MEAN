import _ from 'lodash';
export default function ($scope, filmsService, $resource, $http, $localStorage, httpService) {
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

    let favorite = ($localStorage.fav);
    this.uiqFav = _.uniqBy(favorite, 'imdbID');

   this.test = function(){
    
     $http
            .get('/test')
            .then((res) => {
    
                

                console.log(res);

               

            }, (err) => {
                console.error("Cannot fetch data! " + err);
            });
   }

    this.submit = function () {

        const url = `http://www.omdbapi.com/?s=${this.title}&y=${this.year}&type=${this.type}&plot=full&r=json&page=${this.page}`;
        
        $http
            .get(url)
            .then((res) => {
    
                this.films = res.data.Search;
                this.totalRes = res.data.totalResults;

                console.log(res);

                this.error = res.data.Response;

            }, (err) => {
                console.error("Cannot fetch data! " + err);
            });

       
    };

}