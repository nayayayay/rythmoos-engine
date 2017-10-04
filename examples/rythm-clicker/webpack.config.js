const path = require('path');

module.exports = {
  // Our game's entry point
  entry: path.join(__dirname, 'src', 'index.js'),
  // The bundled game file properties
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // Source maps, for easier debugging
  devtool: 'source-map',
  // Tell webpack that Rythmoos Engine is an external module so it doesn't rebuild
  // it along with our game.
  externals: {
    'rythmoos-engine': 'RythmoosEngine'
  }
};
