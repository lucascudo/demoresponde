'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.questionBkp = '';
    $scope.question = '';
    $scope.answer = '';
    $scope.isPilantragem = 0;

    $scope.saveKey = function (event) {
        $scope.questionBkp = $scope.question;
    }

    $scope.handleQuestion = function (event) {
    	if (event.key == ';') {
    		$scope.isPilantragem = !$scope.isPilantragem;
            $scope.question = $scope.questionBkp;
            $scope.question += "?";
        } else if ($scope.isPilantragem) {
            $scope.question = $scope.questionBkp;
            if (event.key == 'Backspace') {
                $scope.answer.substring(0, $scope.answer.length - 1);
            } else {
                $scope.answer += event.key;
                $scope.question += "?";
            }
    	}
    };
  });
