module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    express: {
      dev: {
        options: {
          script: "./app.js"
        }
      }
    },
    watch: {
      express: {
        files: ["dist/**/*.js"],
        tasks: ["express"],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express-server");

  grunt.registerTask("client", [
    "express",
    "watch"
  ]);
};
