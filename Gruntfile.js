module.exports = function(grunt) {
  grunt.initConfig({
    htmllint: {
      all: {
        options: {
          ignore : [
            /Section lacks heading/,
            /cc:attributionURL/,
            /Attribute “rel” not allowed on element “span”/,
            /Consider using the “h1” element/,
            /Attribute “integrity” not allowed on element “script”/,
            /The “align” attribute on the “div” element is obsolete. Use CSS instead/,
            /The “align” attribute on the “td” element is obsolete. Use CSS instead./,
            /CSS: “align”: Property “align” doesn\\'t exist./,
            /This document appears to be written in German but the /
          ]
        },
        src : '_site/**/*.html'
      }
    }
  });
  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('test', ['htmllint']);
};
