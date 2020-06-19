const PORT = 8080;
var express = require('express');
var routes = require('./controllers/routes');
var app = express();
var router = express.Router()

app.get('/', function (req, res) {
  res.send('Hello World!');
});
  
app.use('/api',routes);

app.listen(PORT, function () {
  console.log('Server Online http://localhost:8080/');
});