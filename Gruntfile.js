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
        },
        watch: {
            scripts: {
                files: jsFiles,
                tasks: ['desktop-check'],
                options: {
                    spawn: false
                }
            }
        }
    });
    
    grunt.task.registerTask('desktop-check', function () {
        var done = this.async();
        exec('grunt check', function (error, result) {
            if (error) {
                growl('Checks failed', { title: 'Failure', sticky: true });
            } else {
                growl('Tests completed successfully.', { title: 'Success', image: 'success.png', sticky: true });
            }
            
            done();
        });
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("check", ["jshint", "jasmine"]);
    grunt.registerTask("default", ["check"]);
};