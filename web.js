var express = require('express');

var app = express.createServer(express.logger());
var htmlfile="index.html";

var fs=require('fs');



app.get('/', function(request, response) {
<<<<<<< HEAD
var html=fs.readFileSync(htmlfile).toString();
response.send(html);
=======
<<<<<<< HEAD
response.send(data);

=======
  response.send('Hello Universe! I am King of the Amazon !');
>>>>>>> f7d9c6321e60b979c7d29b4401fd842d42093f22
>>>>>>> 2c84da7f22c39419c5359e2caffaa2a233efabd6
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
