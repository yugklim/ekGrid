;define(['require', 'angular', 'ekGridModule'], function (require, ng) {
        require(['domReady!'], function (document) {
            // this is angular module
           ng.bootstrap(document, ['ekGridModule']);
        });
    }
);
