'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take.
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    src: 'src',
    app: 'app'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= yeoman.app %>/**/*', '<%= yeoman.src %>/**/*'],
        tasks: [],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 8000,
        hostname: 'localhost',
        livereload: 35728
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
              connect.static(appConfig.app)
            ];
          }
        }
      }
    }
  });

  // Main tasks
  grunt.registerTask('serve', 'Compile then start a connect web server',
    function() {
      grunt.task.run([
        'connect:livereload',
        'watch'
      ]);
    });

};
