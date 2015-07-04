/* global angular */
angular.module('box',['ngMaterial'])
.directive('box',function(){
  'use strict';
  return {
    restrict:'E',
    templateUrl:'template.html',
    replace:true
  };
});
