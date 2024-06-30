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
            url: '/categories',
            templateUrl: 'src/categories/categories.template.html',
            controller: 'CategoriesController as categoriesCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/items/items.template.html',
            controller: 'ItemsController as itemsCtrl',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'src/signup/signup.template.html',
            controller: 'SignUpController as signUpCtrl'
        })
        .state('myinfo', {
            url: '/myinfo',
            templateUrl: 'src/myinfo/myinfo.template.html',
            controller: 'MyInfoController as myInfoCtrl'
        });
    }
})();
