'use strict';

/**
 * @ngdoc function
 * @name funToLearnApp.controller:MultiplyGridCtrl
 * @description
 * # MultiplyGridCtrl
 * Controller of the funToLearnApp
 */
angular.module('funToLearnApp')
	.controller(
		'MultiplyGridCtrl', 
  		[
  		'$scope',
  		'$log',
  		function ($scope, $log) {
    		$scope.currentIcon = '&#128513;';
    		$scope.num1 = 0;
    		$scope.num2 = 0;

        $log.debug($scope.num1);
    		$scope.setIcon = function(icon) {
    			$scope.currentIcon = icon;
    		};

    		$scope.flip = function() {
    			var temp = $scope.num1;
    			$scope.num1 = $scope.num2;
    			$scope.num2 = temp;
    		};

    		$scope.getRows = function(){
    			if ($scope.num1) {
    				return new Array($scope.num1);
    			}
    		};

    		$scope.getColumns = function(){
    			if ($scope.num2) {
    				return new Array($scope.num2);
    			}
    		};

    		$scope.isInvalidInput = function(){
    			var isInvalid = $scope.num1 === undefined || $scope.num2 === undefined;
    			return isInvalid;
    		};
  		}
  		]
  	);
