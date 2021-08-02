const express = require('express');
const app = express();

const mockUsername = [];



app.get('/', function(req,res){

  res.send('Hello World!');

});

app.get('/users', function(req,res){
  const usr = mockUsername.map((item)=>({id:item}));
    res.json(usr);
});

app.post('/user',(req,res)=>{

  mockUsername.push(mockUsername.length);
  const user = {id:mockUsername[mockUsername.length-1]}; 
  res.status(200).json(user);  

});

app.get('/user/:id', (req,res)=>{

    const index = mockUsername.indexOf(Number(req.params.id));
    
    console.log(index)

    if (index < 0){
        return res.sendStatus(204);
        
    }
    return res.json({id:Number(req.params.id)});
    
});

app.listen(3000, function(){console.log('server is listening')})