angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){
    $scope.travelInfo = mainSrv.travelInfo;
    $scope.getLocation = function(){
      for(var i=0; i<$scope.travelInfo.length; i++){
        if($scope.travelInfo[i].id == $stateParams.id){
          return $scope.travelInfo[i];
        }
      }
    }
    $scope.location = $scope.getLocation();

    // var array = mainSrv.travelInfo;

  // for (var i = 0; i < array.length; i++) {
  //   for (var key in array[i]) {
  //     if ($stateParams.id == array[i][key]) {
  //       $scope.background = {
  //         "background-image": "url(" + array[i].image +")",
  //         "background-repeat": "no-repeat",
  //         "background-size": "cover",
  //         "background-position": "center"
  //       };
  //       $scope.city = array[i].city;
  //     }
  //   }
  // }
});

//  Use the ng-style directive to change the background to the 
//     image link on the data object we are getting from the controller.
//       You will need to write a function that checks the url params
//       and then loops over the data object in the service and then returns
//       the object the matches the id being passed in the url params. 
//       Do this in your controller 