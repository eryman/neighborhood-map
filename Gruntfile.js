
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        options: {
           sourceMap: true,
           banner: ""
        },
        files: {
           'src/js/helper.min.js': ['dist/js/helper.js'],
           'src/js/viewmodel.min.js': ['dist/js/viewmodel.js'],
        }
      }
    },

    cssmin: {
      dist: {
        options: {
          banner: ""
        },
        files: {
          'src/css/style.min.css': ['dist/css/style.css'],
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
