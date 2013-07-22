var express = require('express');

var app = express.createServer(express.logger());


var fs=require('fs');



var data = fs.readFileSync("index.html", "utf8");

app.get('/', function(request, response) {
<<<<<<< HEAD
response.send(data);

=======
  response.send('Hello Universe! I am King of the Amazon !');
>>>>>>> f7d9c6321e60b979c7d29b4401fd842d42093f22
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
