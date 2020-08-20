const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const arr = ['hi', 'hello', "Morning"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index', {arr: arr});
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/form', (req, res) => {
  arr.push(req.body.text);
  res.redirect('/');
});

module.exports = app;