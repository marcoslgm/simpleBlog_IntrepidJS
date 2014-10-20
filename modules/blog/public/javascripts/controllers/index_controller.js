/**
 * @file index_controller.js
 * @namespace Index Controller
 * @desc This module manage AngularJS Blog index operations
 */


/**
 * @desc  Blog Index controller
 * @param object $scope - The controller scope var
 * @param object $state - The controller state route var
 */
angular.module('IntrepidJS').controller('@nameIndexController',
    [
        '$scope',
        '$state',
        'restService',
        function ($scope, $state, restService) {
            $scope.formData = {};


            restService.get({}, apiPrefix + '/blog/post',
                function(data) {
                    $scope.posts = data.objects;
                });


            $scope.createPost = function () {
                restService.post($scope.formData, apiPrefix + '/blog/post/create',
                    function(data) {
                        $scope.posts.push(data.objects);
                        $scope.formData = {};
                    });
            };
        }
    ]
);


/**
 * @desc  Blog Index controller
 * @param object $scope - The controller scope var
 * @param object $state - The controller state route var
 */
angular.module('IntrepidJS').controller('BlogHLC',
    [
        '$scope',
        '$state',
        'restService',
        function ($scope, $state, restService) {
            $scope.formData = {};


            restService.get({
                options: {'sort': '-created'}
            }, apiPrefix + '/blog/post',
                function(data) {
                    $scope.posts = data.objects;
                });


            
        }
    ]
);
