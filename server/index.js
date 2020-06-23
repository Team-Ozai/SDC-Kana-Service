const express = require('express');
const app = express();
const faker = require('faker');
const path = require('path');
const port = 3002;
const db = require('../database/index.js');
const pexels = require('../pexels/pexels.js');
const request = require('request');
const bodyParser = require('body-parser');

console.log(2);
let firstName = faker.name.firstName();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());

app.get('/api/videos', (req, res) => {
  db.Video.findAll()
  .then(result => {
    res.send(result);
  })
});

app.get('/api/banners', (req, res) => {
  db.Banner.findAll()
  .then(result => {
    res.send(result);
  })
});

app.get('/api/banner', (req, res) => {
  db.Banner.findOne()
  .then(result => {
    res.send(result);
  })
});


app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

