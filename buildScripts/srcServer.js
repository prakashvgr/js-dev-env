import express from 'express';
import path from 'path';
import open from 'open';

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