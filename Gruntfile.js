/*global require*/
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/*/*.js', 'tests/*/*Spec.js'],
            options: {
                jshintrc: '.jshintrc'
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

    grunt.registerTask("check", ["jshint", "jasmine"]);
    grunt.registerTask("default", ["check"]);
};