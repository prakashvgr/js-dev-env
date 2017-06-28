import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const app = express();
const port = '3000';
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

/* eslint-disable no-console */

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
	res.json([
		{ 'id': 1,'firstName': 'Prakash', 'lastName': 'R', 'email': 'prakash.r@gmail.com' },
		{ 'id': 2,'firstName': 'Raj', 'lastName': 'Kumar', 'email': 'raj.kumar@gmail.com' },
		{ 'id': 3,'firstName': 'Selva', 'lastName': 'Kumar', 'email': 'selva.kumar@gmail.com' }
	]);
});

app.listen(port, function(err){
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:'+port);
	}
});