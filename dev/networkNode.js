//May have to convert everything from here into api.js

const express = require('express');
const app = express();

app.get('blockchain', function (req, res){

});

app.post('/transaction', function(red, res){
  res.send('It works!!!');
});

app.get('/mine', function(req, res){

});

app.listen(3000, function(){
  console.log('listening on port 3000...')

});
