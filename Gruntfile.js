//Gruntfile.js

module.exports = function(grunt) {

  grunt.registerTask("hello", function() {
    console.log("Hellay from Grunt.");
    grunt.file.write("build/test.txt",
    "This file is written sync.")
  });

  grunt.registerTask("hi", ["hello"]);

};
