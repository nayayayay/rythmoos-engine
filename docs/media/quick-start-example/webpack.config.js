const path = require('path');

module.exports = {
  // The entry point of our app
  entry: path.join(__dirname, 'src', 'index.js'),

  // The output file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'my-awesome-game.js'
  },

  // Source maps for ez debugging
  devtool: 'source-map'
};
