(function() {
    'use strict';

    angular.module('MenuApp')
    .service('UserInfoService', UserInfoService);

    function UserInfoService() {
        var service = this;
        var user = null;

        service.saveUser = function(userInfo) {
            user = userInfo;
        };

        service.getUser = function() {
            return user;
        };
    }
})();
