describe('calculator', function() {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  describe('scope function validation', function() {
    it('it should validate GetRecordData function', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      $scope.GetRecordData();
      expect($scope.IsLoading).toBe(false);
    });
  });

});
