'use strict';

module.exports = function(config) {
  let browsers = ['Chrome'];
  let reporters = ['mocha'];
  let preprocessors = ['webpack', 'sourcemap'];
  let webpack = {
    devtool : 'inline-source-map',
    module: {
      loaders: [
        {
          test: /(\.js)$/,
          exclude: /(node_modules)/,
          loader: ['babel-loader'],
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  };

  if (config.coverage) {
    browsers = ['PhantomJS'];
    reporters = ['mocha', 'coverage'];
    preprocessors = ['webpack'];
    webpack.isparta = {
      embedSource: true,
      noAutoWrap: true,
      babel: {
        presets: ['es2015']
      }
    };
    webpack.module.preLoaders = [
      {
        test: /(\.js)$/,
        exclude: /(__test__|node_modules)/,
        loader: 'isparta'
      }
    ];
  }

  config.set({
    browsers: browsers,
    reporters: reporters,
    webpack: webpack,
    frameworks: ['mocha'],
    files: [
      './src/**/__tests__/*-test.js'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],
    preprocessors: {
      './src/**/__tests__/*-test.js': preprocessors
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: config.coverage
  });
};
