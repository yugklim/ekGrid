define(['itemsRepository'], function(itemsRepository) {

    describe("verify_whether_mockrepository_get_something", function () {
        var items = itemsRepository.MockRepository.GetItems();
        it("should be more than 0 items", function () {
            expect(items.length).toBeGreaterThan(0);
        })
    });

});
