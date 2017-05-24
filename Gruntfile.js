var sasspath = "src/scss/";
var csspath = "src/css/";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: sasspath,
                        src: ["**/*.scss"],
                        dest: csspath,
                        ext: ".css"
                    }
                ]
            }
        },
        autoprefixer: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: csspath,
                        src: ["**/*.css"],
                        dest: csspath,
                        ext: ".css"
                    }
                ]
            }
        },
        watch: {
            styles: {
                files: [sasspath + '**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['sass', 'autoprefixer', 'watch']);
};
