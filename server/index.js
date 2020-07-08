const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3002;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

app.use(bodyParser.json());


//////// Banner Data ////////
//get any banner data
app.get('/api/banner', (req, res) => {
  db.Banner.findOne()
  .then(result => {
    res.send(result);
  })
});
//get specific banner data
app.get('/api/banner/:bannerId', (req, res) => {
  db.Banner.findOne({where: {id: req.params.bannerId}})
  .then(result => {
    res.send(result);
  })
});

//get all banner data -> unnecessary?
app.get('/api/banners', (req, res) => {
  db.Banner.findAll()
  .then(result => {
    res.send(result);
  })
});

//post 5 more banner data
app.post('/api/banners', (req, res) => {
  db.generateBanners()
  .then(db.Banner.findAll())
    .then(result => {
      res.send(result);
    });
})

//increments pledged amount by 10
app.patch('/api/banner/:bannerId', (req, res) => {
  db.BannerfindOne({where: {id: req.params.bannerId}})
    .then(result.increment('amount_pledged', {by : 10}))
      .then(result => {
        res.send(result);
      })
})


//deletes one banner
app.delete('/api/banner/:bannerId', (req, res) => {
  db.BannerfindOne({where: {id: req.params.bannerId}})
    .then(result => result.destroy())
      .catch(err => console.log(err))
        .then(res.end());

})

//////*Video Data*//////
app.get('/api/video/:videoId', (req, res) => {
  console.log(req.params.videoId);
  db.Video.findOne({where: {id: req.params.videoId}})
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

app.get('/api/videos', (req, res) => {
  db.Video.findAll()
  .then(result => {
    res.send(result);
  })
});

app.post('/api/video', (req, res) => {
  db.generateVids().then(result => {
    console.log(result);
  })
});

app.post('/api/banner', (req, res) => {
  db.generateBanners().then(result => {
    console.log(result);
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
