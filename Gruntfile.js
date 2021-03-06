//Gruntfile.js

module.exports = function(grunt) {

  //locate all JS files inside src/js/
  //"src/js/**/*.js"
  //will find:
  // src/js

  grunt.registerTask("hello", function() {
    console.log("Hellay from Grunt.");
    grunt.file.write("build/test.txt",
    "This file is written sync.")
  });

  grunt.registerTask("hi", ["hello"]);

  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-nodemon");

  grunt.registerTask("default", ["autoprefixer", "concurrent"]);

  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ["watch", "nodemon"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      dev: {
        script: "index.js"
      }
    },
    watch: {
      prefix: {
        files: "src/css/**/*.css",
        tasks: ["autoprefixer"]
      },
      options: {
        livereload: true
      },
      template: {
        files: "**/*.html",
        tasks: ["hello"]
      }
    },
    autoprefixer: {
      dev: {
        expand: true,
        flatten: true,
        src: "src/css/**/*.css",
        dest: "build/css/"
      }
    }
  }); //customizes plugins

};
