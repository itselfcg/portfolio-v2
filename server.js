const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist','portfolio-v2')));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'dist','app_name','portfolio-v2'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);
