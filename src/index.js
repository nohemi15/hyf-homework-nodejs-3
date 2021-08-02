const express = require('express');
const app = express();

const mockUserData = [];

app.get('/', function(req, res) {

  res.send('Hello World!');

});

app.get('/users', function(req, res){

	res.send(mockUserData);

});

app.listen(3000, function(){console.log('Server is listening')})

