/**
 * Created by eklimenko on 30.03.2015.
 * itemMap is needed for making the header of the grid. It's main purpose is to
 * extract the keys from the items array - from the [{f1: 1, f2:2... fN: N} ...]
 * we get the { f1, f2, ... fN}
 */
;
define([], function () {

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

