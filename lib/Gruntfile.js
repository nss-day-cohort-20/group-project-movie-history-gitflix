module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      files: {
        src: '../javascripts/main.js',
        dest: '../dist/app.js'
      },
      options: {
        transform: ['hbsfy'],
        browserifyOptions: {
          paths: ["./node_modules"]
        }
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console", "alert" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['../javascripts/**/*.js']
    },
    sass: {
      dist: {
        files: {
<<<<<<< HEAD
          "../css/main.css": "../sass/main.scss"
=======
          '../css/main.css': '../sass/main.scss'
>>>>>>> bb25cd9b353f42ca1bd25f66ec31d6611bf0932c
        }
      }
    },
    watch: {
      options: {
        reload: true,
      },
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.sass'],
        tasks: ['sass']
      },
      hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
