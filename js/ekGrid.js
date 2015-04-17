
define('ekGridModule', ['angular', 'itemsRepository', 'extractKeysFrom'], function (angular, itemsRepository, extractKeysFrom) {
    return angular.module('ekGridModule', []).
        directive('ekGrid', function () {
            return {
                link: function (scope, element, attrs) {
                    scope.items = itemsRepository.MockRepository.GetItems();
                    scope.keys = new extractKeysFrom(scope.items).getKeys();
                },
                templateUrl: 'bower_components/ekGrid/html/ekGrid_template.html'
            }
        }
    );
});



/**##sdv*/

/**
 * Created by eklimenko on 30.03.2015.
 * itemMap is needed for making the header of the grid. It's main purpose is to
 * extract the keys from the items array - from the [{f1: 1, f2:2... fN: N} ...]
 * we get the { f1, f2, ... fN}
 */
;
define('extractKeysFrom', [], function () {

    return function extractKeysFrom(_items) {
        var items = _items;
        this.getKeys = function () {
            var keys = [];
            // get the keys from the first array element only
            var firstEl = items[0];
            for (name in firstEl) {
                if (typeof firstEl[name] !== 'function' && firstEl.hasOwnProperty(name)) {
                    keys.push(name);
                }
            }
            return keys;
        }
    }

});


;
define('itemsRepository', [], function () {

return  function itemsRepository() {

        var WebApiRepository = function () {
            this.GetItems = function (from, nOf) {

            };
        };

        var MockRepository = function () {
            this.GetItems = function (from, nOf) {
                return [
                    {
                        field0: 0, field1: "0-1", field2: "0-2", field3: "0-3"
                    },
                    {
                        field0: 1, field1: "1-1", field2: "1-2", field3: "1-3"
                    },
                    {
                        field0: 2, field1: "2-1", field2: "2-2", field3: "2-3"
                    }
                ];
            };
        };

        return {
            MockRepository: new MockRepository(),
            WebApiRepository: new WebApiRepository()
        };

    }();

});
