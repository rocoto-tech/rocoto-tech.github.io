var express = require('express');
var app = express();

var email 	= require("emailjs");

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/',function(req,res){
  res.sendFile('index.html');

  //It will find and locate index.html from View or Scripts
});

app.post('/send',function(req,res){

     var server 	= email.server.connect({
         user:    "rocoto.tech@gmail.com",
         password:"no_tocar",
         host:    "smtp.gmail.com",
         ssl:     true
      });


      server.send({
       text:    "Mensaje: " + req.body.message  + "  \n \n Email: " +  req.body.email + " \n Nombre: " + req.body.name,
       from:    req.body.name + "<rocoto.tech@gmail.com>",
       to:      "Web Page Consulta <rocoto.tech@gmail.com>",
       cc:      "Mail Principal <info@rocoto.tech>",
       subject: "Consulta desde Web"
    }, function(err, message) { console.log(err || message); });


    //console.log("heer");

      res.json({exito:true});
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});
