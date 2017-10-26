module.exports = function (grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      output: {
        options: {
          style: sassStyle
        },
        files: {
          './style.css': './scss/style.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['./src/plugin.js', './src/plugin2.js'],
        dest: './global.js'
      }
    },
    uglify: {
      compressjs: {
        files: {
          './global.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      all: ['<%= concat.dist.dest %>'],
      options: {
        browser: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('outputcss', ['sass']);
  grunt.registerTask('concatjs', ['concat']);
  grunt.registerTask('compressjs', ['concat', 'jshint', 'uglify']);
  grunt.registerTask('default');
}