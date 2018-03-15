(function() {
    angular.module('myApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('index', {
                    url: '/index',
                    templateUrl: 'login.html',
                    controller: 'indexCtrl'
                })
                .state('register', {
                    url: '/register',
                    views: {
                        '': {
                            templateUrl: 'register.html',
                            controller: 'registerCtrl'
                        },
                        "ab1@register": {
                            templateUrl: 'ab1.html'
                        },
                        "ab2@register": {
                            templateUrl: 'ab2.html'
                        }
                    }
                })
                .state('home', {
                    url: '/home',
                    views: {
                        "": {
                            templateUrl: '/login.html',
                            controller: 'myCtrl'
                        },
                        "register": {
                            templateUrl: '/register.html'
                        }
                    }
                })
            $urlRouterProvider.otherwise('home')
        }])
        .controller('myCtrl', ['$scope', function($scope) {
            console.log('myCtrl');
        }])
        .controller('indexCtrl', ['$scope', function($scope) {
            console.log('indexCtrl');
        }])
        .controller('registerCtrl', ['$scope', function($scope) {
            console.log('registerCtrl');
        }])
})();