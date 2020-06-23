const express = require('express');
const app = express();
const faker = require('faker');
const path = require('path');
const port = 3002;
const db = require('../database/index.js');

console.log(2);
let firstName = faker.name.firstName();

app.use(express.static(path.join(__dirname, '../dist')));

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

// app.get('/api/videos/:videoId', (req, res) => {
//   db.Video.findOne({id: req.params.videoId})
//   .then(result => {
//     res.send(result);
//   })
// });

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

