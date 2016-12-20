
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        options: {
           sourceMap: true,
           banner: ""
        },
        files: {
           'js/helper.min.js': ['js/helper.js'],
           'js/viewmodel.min.js': ['js/viewmodel.js'],
        }
      }
    },

    cssmin: {
      dist: {
        options: {
          banner: ""
        },
        files: {
          'css/style.min.css': ['css/style.css'],
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
