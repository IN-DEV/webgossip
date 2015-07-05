/* global angular */
angular.module('box',['ngMaterial'])
.directive('kajBox',function(){
  'use strict';
  return {
    restrict:'E',
    templateUrl:'template.html',
    transclude:true,
    replace:true,
    scope:{
      title:'@',
      role:'@',
    },
    controller:function($scope){
      $scope.title='Gossip...';	    
      if($scope.role==='alerter'){$scope.alerter=1;}
      else if($scope.role==='confirmer'){$scope.confirmer=1;}
      else if($scope.role==='reessayer'){$scope.reessayer=1;}
      else{$scope.alerter=1;}
    }
  };
});
