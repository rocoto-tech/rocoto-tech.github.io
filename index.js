var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
