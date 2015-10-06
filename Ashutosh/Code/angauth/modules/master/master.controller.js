'use strict';

angular.module('Master').controller('MasterController',
	    ['$scope', '$rootScope', '$location', 'UserService',
	     function ($scope, $rootScope, $location, UserService) {
	    	$scope.username=$rootScope.currentUser;

	    	 $scope.loadAllUsers = function () {
	             $scope.dataLoading = true;
	             UserService.GetAll($rootScope.sessionId, function (response) {
	             	
	                 if (response.code=='0') {
	                	 $scope.allUsers = users;
	                     $location.path('/');
	                 } else {
	                     $scope.error = response.message;
	                     $scope.dataLoading = false;
	                 }
	             });
	         };
	         	         
	         $scope.loadCurrentUser = function () {
	             $scope.dataLoading = true;
	             UserService.GetById($scope.currentUser, function (response) {
	             	
	                 if (response.code=='0') {
	                	 $scope.user = user;
	                     $location.path('/');
	                 } else {
	                     $scope.error = response.message;
	                     $scope.dataLoading = false;
	                 }
	             });
	         };
	         
	         $scope.logout = function () {
	             $scope.dataLoading = true;
	             UserService.LogOut($rootScope.sessionId, function (response) {
	            	 //Response1: {"code":0,"message":"Logout Successfulâ€,"sessionId":null,"data":null}
	                 if (response.code=='0') {
	                	$location.path('/login');
	                 } else {
	                     $scope.error = response.message;
	                     $scope.dataLoading = false;
	                 }
	             });
	         };
	         
	     }]);
