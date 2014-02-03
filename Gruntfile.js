/*global require*/
module.exports = function(grunt) {
    var jsFiles = ['Gruntfile.js', 'src/*/*.js', 'tests/*/*Spec.js'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: jsFiles,
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jscs: {
            src: jsFiles,
            options: {
                config: ".jscs.json",
                requireCurlyBraces: [ "if" ]
            }
        },
        jasmine: {
            lib: {
                src: 'src/*/*.js',
                options: {
                    vendor: ['src/Data.js'],
                    specs: 'tests/*/*Spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jscs-checker');

    grunt.registerTask("check", ["jshint", "jscs", "jasmine"]);
    grunt.registerTask("default", ["check"]);
};
