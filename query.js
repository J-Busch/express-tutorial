var express = require('express');
var port = process.argv[2];
var app = express(0);

app.get('/search', function(req, res) {
  var query = req.query;
  res.send(query);
});
app.listen(port);
