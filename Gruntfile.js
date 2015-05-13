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

  grunt.registerTask("default", ["autoprefixer"]);

  grunt.initConfig({
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
