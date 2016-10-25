import angular from "angular";
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import routs from './config/config';
import homeController from './controllers/homeController';
import filmController from './controllers/filmController';
import signUpController from './controllers/signUpController';
import signInController from './controllers/signInController';
import {headerLogo} from './directives/header/header.directive';
import {searchBar} from './directives/search_bar/search.bar.directive';
import {filmsList} from './directives/film_list/films.list.directive';
import {paginaTion} from './directives/pagination/pagination.directive';
import {sortForm} from './directives/sort_form/sort.directive';
import {favoriteBox} from './directives/favorite_box/favorite.box.directive';
import {errorBox} from './directives/error/error.directive';
import {commentBox} from './directives/comment&rate_box/comment.box.directive';
import {oneFilm} from './directives/one_film_box/one.film.directive';
import filmsService from './services/films.service';
import searchService from './services/search.service';
import commentsService from './services/comments.service';
import signService from './services/signUpIn.service';
import favoriteService from './services/favorites.service';

import ngStorage from 'ngstorage';



angular.module("myApp", ['ngRoute', 'ngResource' ,'ngStorage'])
    .config(routs)
    .run(($rootScope, $location, $route, signService) => {
      $rootScope.$on('$routeChangeStart',
        (event, next, current) => {

          signService.getUserStatus()
          .then(()=>{
            //console.log(next.$$route);
            if (next.access.restricted && !signService.isLoggedIn()){
              $location.path('/signin');
              $route.reload();
            }
          });
      });
    })
    .service('filmsService', filmsService)
    .service('searchService', searchService)
    .service('commentsService', commentsService)
    .service('signService', signService)
    .service('favoriteService', favoriteService)
    .controller('homeController', ['$scope', 'filmsService', 'searchService', 'signService', 'favoriteService', '$location',  homeController])
    .controller('filmController', ['$scope', 'filmsService', '$routeParams', 'searchService', 'favoriteService', filmController])
    .controller('signUpController', ['signService', '$location', signUpController])
    .controller('signInController', ['signService', '$location',  signInController])
    .directive('headerLogo', headerLogo)
    .directive('searchBar', searchBar)
    .directive('filmsList', filmsList)
    .directive('paginaTion', paginaTion)
    .directive('sortForm', sortForm)
    .directive('favoriteBox', favoriteBox)
    .directive('errorBox', errorBox)
    .directive('commentBox', commentBox)
    .directive('oneFilm', oneFilm)




angular.bootstrap(document, ["myApp"]);

