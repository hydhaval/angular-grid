describe('calculator', function() {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  describe('sum', function() {
    it('1 + 1 should equal 2', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      $scope.x = 1;
      $scope.y = 2;
      $scope.sum();
      expect($scope.z).toBe(3);
    });
  });

});
