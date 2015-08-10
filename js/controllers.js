(function () {
  angular.module('controllers', [])
    .controller('AttendesController', function ($scope, AttendesService) { // $injector

      $scope.attende = {
        name: '',
        email: ''
      };

      $scope.attendes = AttendesService.attendes;

      $scope.addAttende = function () {
        var attende = angular.copy($scope.attende);
        AttendesService.addAttende(attende);
      };

      $scope.removeAttende = function (attendeIndex) {
        AttendesService.removeAttende(attendeIndex);
      };

    });

})();