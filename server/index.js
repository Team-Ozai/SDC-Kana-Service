const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3002;
const db = require('../database/index.js');
const seeder = require('../database/seeder.js');
const faker = require('faker');
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
  seeder.generateBanners()
  db.Banner.findAll()
    .then(result => {
      res.send(result);
    });
})

//increments pledged amount by 10 (returns nothing)
app.patch('/api/banner/:bannerId', (req, res) => {
  db.Banner.findOne({where: {id: req.params.bannerId}})
    .then(result => {
      console.log(result)
      // Number(result);
      result.increment('backers', {by : 1})
    })
    .then(res.end)
})


//deletes one banner
app.delete('/api/banner/:bannerId', (req, res) => {
  db.Banner.findOne({where: {id: req.params.bannerId}})
    .then(result => result.destroy())
      .catch(err => console.log(err))
        .then(res.end());

})

///////// Video Data /////////

//get one video based on id
app.get('/api/video/:videoId', (req, res) => {
  console.log(req.params.videoId);
  db.Video.findOne({where: {id: req.params.videoId}})
  .then(result => {
    res.send(result);
  })
});

//get any one video
app.get('/api/video', (req, res) => {
  db.Video.findOne()
  .then(result => {
    res.send(result);
  })
});

//get all video data -> unnecessary?
app.get('/api/videos', (req, res) => {
  db.Video.findAll()
  .then(result => {
    res.send(result);
  })
});

//add video data -> but don't send back
app.post('/api/video', (req, res) => {
  db.generateVids().then(result => {
    console.log(result);
  })
  res.end();
});

//update 1 video data
// app.patch()


//delete 1 video data
// app.delete()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

// app.post('/api/banner', (req, res) => {
//   db.generateBanners().then(result => {
//     console.log(result);
//   })
// });