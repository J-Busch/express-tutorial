var express = require('express');
var fs = require('fs');
var port = process.argv[2];
var app = express();

app.get('/books', function(req, res) {
  var file = process.argv[3];

  fs.readFile(file, function(err, data) {
    if (err) return res.error(err);
    var object = JSON.parse(data);
    res.json(object);
  });
});
app.listen(port);
