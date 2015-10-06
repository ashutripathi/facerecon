'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
            	
                if (response.code=='0') {
                	//Response1: {"code":0,"message":"Login Successfulâ€,"sessionId":"75984292-af89-4280-8aac-7f15b4e3a1ba","data":{"username":"john.doe","firstname":"John","lastname":"Doe"}}
                	$rootScope.sessionId=response.sessionId;
                	AuthenticationService.SetCredentials(response.username, response.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);