const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('blockchain', function (req, res){

});

app.post('/transaction', function(req, res){
  console.log(req.body);
  res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);
});

app.get('/mine', function(req, res){

});

app.get('/', function (req, res) {
  res.send('Hello coding Javascript')
})

app.listen(3000, function(){
  console.log('listening on port 3000...')

})
