require.config({

    paths: {
        'domReady': '../bower_components/domReady/domReady',
        'angular': '../bower_components/angular/angular',

        'ekGridModule': 'ekGrid/ekGridModule',
        'itemsRepository': 'itemsRepository/itemsRepository',
        'extractKeysFrom': 'extractKeysFrom/extractKeysFrom'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // launch app
    deps: ['bootstrap']
});
