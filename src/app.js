const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  Post.find({}).then(posts => {
    res.render('index', {posts: posts});
  });
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/form', (req, res) => {

  const {title, body} = req.body;
  
  Post.create({
    title,
    body
  }).then((post) => console.log('created post: ', post));

  res.redirect('/');
});

module.exports = app;