const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const port = '3000';

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, function(err){
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:'+port);
	}
});