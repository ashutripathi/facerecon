'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Master', []);
angular.module('Detail', []);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Master',
    'Detail',
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.view.html'
        })

        .when('/', {
            controller: 'MasterController',
            templateUrl: 'modules/master/views/master.view.html'
        })
        
        .when('/detail', {
            controller: 'DetailController',
            templateUrl: 'modules/detail/views/detail.view.html'
        })


        .otherwise({ redirectTo: '/login' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
