/**
 * Created by eklimenko on 27.03.2015.
 */
// because live_reload doesn't work in gulp - use grunt
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({

            open : {
                dev : {
                    path: 'http://localhost:63342/ekGrid/app/index.html',
                    app: 'Chrome'
                }
            },

            watch: {

                livereload: {
                    options: {
                        livereload: true
                    },
                    files: [
                        '**/*.{css,js,html}'
                    ]
                }
            },

            concat: {
                dist: {
                    src: ['app/**/*.js', '!app/**/*_test.js'],
                    dest: "js/ekGrid.js"
                },
                template: {
                    src: ["app/ekGrid/ekGrid_template.html"],
                    dest: "html/ekGrid_template.html"
                }
            }
        }
    );

    grunt.registerTask("default", [ 'open', 'watch' ]);
    grunt.registerTask("build", ['concat']);
}
