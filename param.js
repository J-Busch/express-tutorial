var express = require('express');
var port = process.argv[2];
var app = express();

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  var string = require('crypto').createHash('sha1').update(new Date().toDateString() + id).digest('hex');
  res.end(string);
});
app.listen(port);
