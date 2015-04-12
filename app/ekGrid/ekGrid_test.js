;
// don't inject angular-mocks -> it's injected via angular
define(['angular', 'ekGridModule', 'itemsRepository', 'extractKeysFrom'],
    function (angular, ekGridModule, itemsRepository, extractKeysFrom) {

        describe('does the ekGrid returns a table', function () {
                var $compile, $rootScope;
                //it's angular-mocks module
                beforeEach(module('ekGrid/ekGrid_template.html'));
                beforeEach(function () {
                        module('ekGridModule');
                        inject(function (_$compile_, _$rootScope_, $cacheFactory) {
                            $compile = _$compile_;
                            $rootScope = _$rootScope_;
                        });
                    }
                );

                it('?', function () {
                    var html = '<ek-grid></ek-grid>';
                    var elem = compile(html);
                    expect(elem.html()).toContain('table');
                });


                function compile(html) {
                    var scope = $rootScope.$new();
                    //get the jqLite or jQuery element
                    var elem = angular.element(html);
                    var compiled = $compile(elem);
                    compiled(scope);
                    scope.$digest();
                    return elem;
                }

            }
        );

    }
);
