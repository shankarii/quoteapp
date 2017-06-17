var express = require('express')
var path = require('path')
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 8080;

app.listen(port,function(req,res){
    console.log("Listening on port: ",port)
});