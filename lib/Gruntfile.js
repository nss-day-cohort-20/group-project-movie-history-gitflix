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
          "../css/main.css": "../sass/main.scss"
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
        files: ['../sass/**/*.scss'],
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
