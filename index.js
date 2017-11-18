let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen('8080');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/profile/index.html'));
})
