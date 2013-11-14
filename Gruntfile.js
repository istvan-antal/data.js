/*global require*/
module.exports = function(grunt) {
    var growl = require('growl'),
        exec = require('child_process').exec,
        jsFiles = ['Gruntfile.js', 'src/*/*.js', 'tests/*/*Spec.js'];
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: jsFiles,
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