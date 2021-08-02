const express = require('express');
const app = express();

const mockUserdata = [];



app.get('/', function(req,res){

  res.send('Hello World!');

});

app.get('/users', function(req,res){

    res.json(mockUserdata);

});

app.get('/user/:id', function(req,res){

    const user = mockUserdata.find(usr => usr.id == req.params.id)
    res.json(user);
  
});

app.post('/user', (req,res) => {

  mockUserdata.push({id:0});
  res.json(mockUserdata);

});

app.delete('/user/:id', function(req,res){

  if(mockUserdata.length > 0){

    index = mockUserdata.indexOf(req.params.id);
    mockUserdata.splice(index,1);
    res.status(202).json(mockUserdata);

  } else {

    res.status(204).json(mockUserdata);
  } 

})

app.listen(3000, function(){console.log('server is listening')})