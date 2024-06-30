(function() {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>Welcome to our Restaurant</h1><a ui-sref="categories">View Categories</a>'
        })
        .state('categories', {
            url: '/
