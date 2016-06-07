var express = require('express');
var par = require('body-parser');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

app.use(par.urlencoded({extended: false}));

app.post('/form', function (req, res) {
  var result = req.body.str.split('').reverse().join('');
  res.end(result);
});
app.listen(port);
