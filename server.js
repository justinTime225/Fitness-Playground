const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
var app = express();
module.exports = app;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./db/routes.js')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
if(!module.parent){ app.listen(port); }
console.log('server started');
