/* global angular */
angular.module('box',['ngMaterial'])
.directive('kajBox',function(){
  'use strict';
  return {
    restrict:'E',
    templateUrl:'template.html',
    replace:true,
    require:'ngModel',
    scope:{
      title:'@',
      type:'@',
      name:'@'
    },
    controller:function($scope,$element){
      $scope.content="Le contenu de ma super aler te ira ici....";
    }
  };
});
