/**
 * @file admin.js
 * @namespace Blog admin angular routes
 * @desc Blog admin angular routes
 */


angular.module('IntrepidJS').config(
    [
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider.
                state('admin.modules.blog', {
                    url: '/blog',
                    views: {
                        "actions_parent_content":
                            {
                                templateUrl: "/blog/admin/parent",
                                controller: "@nameAdminIndexController"
                            }
                    }
                });
        }
    ]
);