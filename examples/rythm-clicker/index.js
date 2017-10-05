const express = require('express');
const app = express();

// Set our public directory
app.use(express.static('public'));

// Start the app on the port 3000
app.listen(3000, () => {
  console.log('Application listening on port 3000.');
});
