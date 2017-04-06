var express = require('express');
var http = require('http');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var app = express();

const crypto = require('crypto');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname+'/public');
app.engine('html', require('ejs').renderFile);

require('./routes.js')(app, crypto);

var server = http.createServer(app);
server.listen(port, function(){
	console.log("Running Hash Chain on Port: "+port);
})
