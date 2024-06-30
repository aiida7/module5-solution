(function() {
    'use strict';

    angular.module('MenuApp')
    .component('myInfo', {
        templateUrl: 'src/myinfo/myinfo.template.html',
        controller: MyInfoController
    });

    MyInfoController.$inject = ['UserInfoService', 'MenuDataService'];
    function MyInfoController(UserInfoService, MenuDataService) {
        var $ctrl = this;
        $ctrl.user = UserInfoService.getUser();

        if ($ctrl.user) {
            var categoryShortName = $ctrl.user.favoriteMenuNumber.charAt(0).toUpperCase();
            var menuNumber = $ctrl.user.favoriteMenuNumber.slice(1) - 1;
            MenuDataService.getItem(categoryShortName, menuNumber)
            .then(function(response) {
                $ctrl.favoriteItem = response;
            });
        }
    }
})();
