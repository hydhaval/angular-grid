describe('ExampleCtrl', function() {

  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  describe('scope function validation', function() {
    var foo, bar = null;
    beforeEach(function() {
        foo = {
          GetRecordData: function(value) {
            bar = value;
          }
        };

        spyOn(foo, 'GetRecordData');
        foo.GetRecordData(123);
      });

    it('it should perform defalut assigning validation', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      expect($scope.CurrentPage).toBe(1);
      expect($scope.TotalPage).toBe(10);
      expect($scope.PerPage).toBe(10);
      expect($scope.recordData.length).toBe(0);
    });

    it('it should validate state of examples', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });

      expect($scope.examples.length).toBe(1);
      expect($scope.examples[0].id).toBe('styling');
      expect($scope.examples[0].heading).toBe('Sample Angular Data Grid');
      expect($scope.examples[0].columns.length).toBe(5);
      expect($scope.examples[0].columns[0].id).toBe('name');
      expect($scope.examples[0].columns[1].id).toBe('surname');
      expect($scope.examples[0].columns[2].id).toBe('age');
      expect($scope.examples[0].columns[3].id).toBe('gender');
      expect($scope.examples[0].columns[4].id).toBe('joined');
    });

    it('it should validate GetRecordData function for page 1', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      $scope.GetRecordData(1);
      expect($scope.IsLoading).toBe(false);
      expect($scope.examples[0].records.length).toBe(10);
    });

    it('it should validate GetRecordData function for subsequent pages (infinite scroll)', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      $scope.GetRecordData(4);
      expect($scope.TotalPage).toBe(10);
      expect($scope.examples[0].records.length).toBe(20);
    });

    it('it should validate addMoreOnScroll function', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      $scope.GetRecordData(4);
      expect($scope.CurrentPage).toBe(1);
      expect($scope.TotalPage).toBe(10);
      expect(foo.GetRecordData).toHaveBeenCalled();
    });

    it('it should validate extend is working correctly or not', function() {
      var $scope = {};
      var controller = $controller('ExampleCtrl', {
        $scope: $scope
      });
      expect($scope.helpers).toEqual(jasmine.any(Object));
      expect($scope.helpers.viewConfig[0].key).toEqual('columnMenu');
      expect($scope.helpers.viewConfig[1].key).toEqual('filtering');
      expect($scope.helpers.viewConfig[2].key).toEqual('sortable');
      expect($scope.helpers.viewConfig[3].key).toEqual('striped');
      expect($scope.helpers.viewConfig[0].label).toEqual('Column Menu (Click on + sign at column header on mouse hover)');
      expect($scope.helpers.viewConfig[1].label).toEqual('Enable Filtering (Search across all columns)');
      expect($scope.helpers.viewConfig[2].label).toEqual('Sort Columns');
      expect($scope.helpers.viewConfig[3].label).toEqual('Stripped');
      expect($scope.updateViewStyles).toEqual(jasmine.any(Function));
    });
  });
});
