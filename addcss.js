var express = require('express');
var app = express();
var port = process.argv[2];
var files = process.argv[3];

app.use(require('stylus').middleware(files));
app.use(express.static(files));

app.listen(port);
