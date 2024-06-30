(function() {
    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/items/items.template.html',
        bindings: {
            items: '<'
        }
    });

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
    }
})();
