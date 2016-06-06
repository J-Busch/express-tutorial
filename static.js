var express = require('express');
var app = express();
var port = process.argv[2];
var html = process.argv[3];

app.use(express.static(html));
app.listen(port);
