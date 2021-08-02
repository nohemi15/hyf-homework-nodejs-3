const express = require('express');
const app = express();

const mockUsername = [];



app.get('/', function(req,res){

  res.send('Hello World!');

});

app.get('/users', function(req,res){

    res.json(mockUsername);

});

app.get('/user/:id', function(req,res){

    const user = mockUsername.find(usr => usr.id == req.params.id)
    res.json(user);
  
});

app.post('/user', (req,res) => {

  mockUsername.push({id:0});
  res.json(mockUsername);

});

app.listen(3000, function(){console.log('server is listening')})