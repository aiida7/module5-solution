(function() {
    'use strict';

    angular.module('MenuApp')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserInfoService', 'MenuDataService'];
    function SignUpController(UserInfoService, MenuDataService) {
        var signUpCtrl = this;

        signUpCtrl.submit = function() {
            var favoriteItem = MenuDataService.getItem(signUpCtrl.user.favoriteCategory, signUpCtrl.user.favoriteMenuNumber);
            favoriteItem.then(function(response) {
                if (response === null) {
                    signUpCtrl.errorMessage = "No such menu number exists.";
                } else {
                    signUpCtrl.errorMessage = "";
                    UserInfoService.saveUser(signUpCtrl.user);
                    signUpCtrl.successMessage = "Your information has been saved
