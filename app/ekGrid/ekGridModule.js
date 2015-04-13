
define('ekGridModule', ['angular', 'itemsRepository', 'extractKeysFrom'], function (angular, itemsRepository, extractKeysFrom) {
    return angular.module('ekGridModule', []).
        directive('ekGrid', function () {
            return {
                link: function (scope, element, attrs) {
                    scope.items = itemsRepository.MockRepository.GetItems();
                    scope.keys = new extractKeysFrom(scope.items).getKeys();
                },
                templateUrl: 'ekGrid/ekGrid_template.html'
            }
        }
    );
});




