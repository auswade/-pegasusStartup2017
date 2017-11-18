let express = require('express');
let app = express();
let path = require('path');

function run(){
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  })

  app.listen(8080);
}

run();