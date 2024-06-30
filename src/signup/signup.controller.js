(function() {
    'use strict';

    angular.module('MenuApp')
    .component('signup', {
        templateUrl: 'src/signup/signup.template.html',
        controller: SignUpController
    });

    SignUpController.$inject = ['MenuDataService', 'UserInfoService'];
    function SignUpController(MenuDataService, UserInfoService) {
        var $ctrl = this;
        $ctrl.user = {};
        $ctrl.saved = false;
        $ctrl.menuNumberInvalid = false;

        $ctrl.submit = function() {
            var categoryShortName = $ctrl.user.favoriteMenuNumber.charAt(0).toUpperCase();
            var menuNumber = $ctrl.user.favoriteMenuNumber.slice(1) - 1;
            MenuDataService.getItem(categoryShortName, menuNumber)
            .then(function(response) {
                if (response) {
                    $ctrl.menuNumberInvalid = false;
                    UserInfoService.saveUser($ctrl.user);
                    $ctrl.saved = true;
                } else {
                    $ctrl.menuNumberInvalid = true;
                }
            });
        };
    }
})();
