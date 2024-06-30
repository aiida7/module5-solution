(function() {
    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/categories/categories.template.html',
        bindings: {
            categories: '<'
        }
    });

    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var categoriesCtrl = this;
        categoriesCtrl.categories = categories;
    }
})();
