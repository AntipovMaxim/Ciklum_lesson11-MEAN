import angular from "angular";
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import routs from './config/config';
import homeController from './controllers/homeController';
import filmController from './controllers/filmController';
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
import ngStorage from 'ngstorage';



angular.module("myApp", ['ngRoute', 'ngResource' ,'ngStorage'])
    .config(routs)
    .service('filmsService', filmsService)
    .controller('homeController', ['$scope', 'filmsService', '$resource', '$http', '$localStorage', homeController])
    .controller('filmController', ['$scope', 'filmsService', '$resource', '$routeParams', '$localStorage', filmController])
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

