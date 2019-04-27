const express = require('express')
const fruits = require('./data');
const app = express();
const port = process.env.PORT || 8000;
console.log(fruits);


app.get('/' , function (req, res) {
  const userName = req.query.user;
  res.send('Hello ' + userName + "!") 
}); 

app.listen(port, () => console.log(`App listening on port ${port}!`));