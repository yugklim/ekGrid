/**
 * Created by eklimenko on 30.03.2015.
 */
define(['itemsRepository', 'extractKeysFrom'], function(itemsRepository, extractKeysFrom) {

    describe("verify_whether_extractKeysFrom_returns_the_right_keys", function () {

        var items = itemsRepository.MockRepository.GetItems();
        var keys = new extractKeysFrom(items).getKeys();

        it("should be more than 0 items", function () {
            expect(keys.length).toBeGreaterThan(0);
        })
    });

});

