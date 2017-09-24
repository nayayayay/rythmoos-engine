const path = require('path');
const BabelMinify = require('babel-minify-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'rythmoos-engine.js',
    library: 'RythmoosEngine'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new BabelMinify()
  ]
};
