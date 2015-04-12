;
define([], function () {

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
