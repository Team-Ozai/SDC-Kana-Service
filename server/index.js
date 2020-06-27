const express = require('express');
const app = express();
const path = require('path');
const port = 3002;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

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

app.get('/api/banners/:bannerId', (req, res) => {
  db.Banner.findOne({id: req.params.bannerId})
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

app.post('/api/banner', (req, res) => {
  db.generateBanners().then(result => {
    console.log(result);
  })
});

app.get('/api/videos/:videoId', (req, res) => {
  db.Video.findOne({id: req.params.videoId})
  .then(result => {
    res.send(result);
  })
});

app.get('/api/video', (req, res) => {
  db.Video.findOne()
  .then(result => {
    res.send(result);
  })
});

app.post('/api/video', (req, res) => {
  db.generateVids().then(result => {
    console.log(result);
  })
});

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

