const path = require('path');
const BabelMinify = require('babel-minify-webpack-plugin');

module.exports = [
  // Debug
  {
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
      path: path.join(__dirname, 'build', 'debug'),
      filename: 'rythmoos-engine.js',
      library: 'RythmoosEngine'
    },
    resolve: {
      extensions: ['ts', 'js']
    },
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.ts$/, loader: 'awesome-typescript-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
      ]
    }
  },

  // Release unminified
  {
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'rythmoos-engine.js',
      library: 'RythmoosEngine'
    },
    resolve: {
      extensions: ['ts', 'js']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'awesome-typescript-loader' }
      ]
    }
  },

  // Release minified
  {
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'rythmoos-engine.min.js',
      library: 'RythmoosEngine'
    },
    resolve: {
      extensions: ['ts', 'js']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'awesome-typescript-loader' }
      ]
    },
    plugins: [
      new BabelMinify()
    ]
  }
];
