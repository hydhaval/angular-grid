describe('WhenScrolledDirective', function() {

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
      var element = angular.element('<div when-scrolled="addMoreOnScroll()"></div>');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement;
    }

    it('should have valid div element', function () {
      expect(directiveElem).toBeDefined();
    });
  });
});
