const path = require('path');
const BabelMinify = require('babel-minify-webpack-plugin');

// Config
const baseConfig = {
  entry: path.join(__dirname, 'src', 'index.ts'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  }
}

const unminified = Object.assign(
  {}, baseConfig,
  {
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'rythmoos-engine.js',
      library: 'RythmoosEngine'
    }
  }
);

const minified = Object.assign(
  {}, baseConfig,
  {
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'rythmoos-engine.min.js',
      library: 'RythmoosEngine'
    }
  },
  {
    plugins: [
      new BabelMinify()
    ]
  }
);

module.exports = [unminified, minified];
