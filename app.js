(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LaunchCheckController);

LaunchCheckController.$inject = ['$scope']

function LaunchCheckController($scope){
  $scope.list = "";
  $scope.checkLunch = function(){
    $scope.text_color = "green";
    
    var count = 0;
    var words = $scope.list.split(',');
    words.forEach((item) => {
      if (item.trim().length > 0)count++;
    });

    if(count == 0){
      $scope.message = "Please enter data first";
      $scope.text_color = "red";

    } else if (count <= 3){
      $scope.message = "Enjoy!";

    } else {
      $scope.message = "Too much!";


    }


  }
}


})();
