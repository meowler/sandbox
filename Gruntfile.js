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
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: csspath,
              src: ['*.css', '!*.min.css'],
              dest: csspath,
              ext: '.min.css'
            }]
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
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['sass', 'autoprefixer', 'watch']);
};
