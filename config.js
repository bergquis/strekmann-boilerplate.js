exports.config = {
  jshint: {
    pattern: /^app\/.*\.js$/,
    options: {
      bitwise: true,
      curly: true
    },
    globals: {
      jQuery: true
    }
  },
  paths: {
    public: 'server/public'
  },
  plugins: {
    uglify: { 
      mangle: false,
      compress: {
        unsafe: false
      }
    },
    sass: {
      debug: 'comments'
    }
  },
  files: {
    javascripts: {
      defaultExtension: 'js',
      joinTo: {
        'js/app.js': /^app(\/|\\)(?!specs)/,
        'js/vendor.js': /^vendor\/scripts/
      },
      order: {
        before: [
            'vendor/scripts/json2.js',
            'vendor/scripts/jquery.js',
            'vendor/scripts/underscore.js',
            'vendor/scripts/backbone.js',
            'vendor/scripts/custom.modernizr.js',
            'vendor/scripts/foundation.js'
        ]
      }
    },
    stylesheets: {
      defaultExtension: 'scss',
      joinTo: {
        'css/app.css': /^(app|vendor\/styles)/
      },
      order: {
        before: [
            'vendor/styles/normalize.css',
            'vendor/styles/foundation.css'
        ]
      }
    },
    templates: {
      defaultExtension: 'hbs',
      joinTo: 'js/templates.js'
    }
  }
};