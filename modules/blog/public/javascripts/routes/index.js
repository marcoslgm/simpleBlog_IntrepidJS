/**
 * @file index.js
 * @namespace Blog angular routes
 * @desc Blog angular routes
 */


angular.module('IntrepidJS').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            
            $stateProvider.
                state('blog', {
                    url: '/blog',
                    views: {
                        "main_content":
                            {
                                templateUrl: "/blog",
                                controller: '@nameIndexController'
                            }
                    }
                });
        }
    ]
);