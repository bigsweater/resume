module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  modules: {
    autoRequire: {
      'app.js': ['initialize']
    }
  },

  plugins: {
    babel: {presets: ['es2015']},

    sass: {
      options: {
        includePaths: [
          'node_modules/modularscale-sass/stylesheets',
          'node_modules/normalize-scss/sass',
          'node_modules/sass-toolkit/stylesheets'
        ]
      }
    },

    postcss: {
      processors: [
        require('autoprefixer')({
          browsers: 'last 3 versions'
        })
      ]
    }
  }
};
