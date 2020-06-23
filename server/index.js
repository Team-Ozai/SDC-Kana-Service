const express = require('express');
const app = express();
const faker = require('faker');
const port = 3002;
const db = require('../database/index.js');

console.log(2);
let firstName = faker.name.firstName();

app.get('/api/videos', (req, res) => {
  db.Banner.findAll()
  .then(result => {
    res.send(result);
  })
});

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

