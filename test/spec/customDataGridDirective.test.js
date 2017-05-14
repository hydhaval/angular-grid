describe('SampleDirectiveGrid', function() {

  describe('base validation', function() {
    var compile, scope, directiveElem;

    beforeEach(function() {
      module('app');

      inject(function($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
      });

      directiveElem = getCompiledElement();
    });

    function getCompiledElement() {
      var element = angular.element('<div angular-components-grid></div>');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement;
    }

    it('should have valid elements', function () {
      var spanElement = directiveElem.find('span');
      var tbodyElement = directiveElem.find('tbody');
      expect(directiveElem).toBeDefined();
      expect(spanElement).toBeDefined();
      expect(tbodyElement).toBeDefined();
    });

    it('it should perform defalut scope validation', function() {
    });
  });
});
