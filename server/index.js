const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3002;
const db = require('../database/postgres/index.js');
// const faker = require('faker');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

app.use(bodyParser.json());


//////// Banner Data ////////
//get first banner data (id 1)
app.get('/api/banner', db.getOne);

// //get specific banner data
// app.get('/api/banner/:bannerId', (req, res) => {
//   db.Banner.findOne({where: {id: req.params.bannerId}})
//   .then(result => {
//     res.send(result);
//   })
// });

// //get all banner data -> unnecessary?
// app.get('/api/banners', (req, res) => {
//   db.Banner.findAll()
//   .then(result => {
//     res.send(result);
//   })
// });

// //post 5 more banner data
// app.post('/api/banners', (req, res) => {
//   seeder.generateBanners()
//   db.Banner.findAll()
//     .then(result => {
//       res.send(result);
//     });
// })

// //increments pledged amount by 10 (returns nothing)
// app.patch('/api/banner/:bannerId', (req, res) => {
//   db.Banner.findOne({where: {id: req.params.bannerId}})
//     .then(result => {
//       result.increment('backers', {by : 1})
//     })
//     .then(res.end)
// })


// //deletes one banner
// app.delete('/api/banner/:bannerId', (req, res) => {
//   db.Banner.findOne({where: {id: req.params.bannerId}})
//     .then(result => result.destroy())
//       .catch(err => console.log(err))
//         .then(res.end());
// })

// ///////// Video Data /////////

// //get first video (id 1)
// app.get('/api/video', (req, res) => {
//   db.Video.findOne()
//   .then(result => {
//     res.send(result);
//   })
// });

// //get one video based on id
// app.get('/api/video/:videoId', (req, res) => {
//   console.log(req.params.videoId);
//   db.Video.findOne({where: {id: req.params.videoId}})
//   .then(result => {
//     res.send(result);
//   })
// });

// //get all video data -> unnecessary?
// app.get('/api/videos', (req, res) => {
//   db.Video.findAll()
//   .then(result => {
//     res.send(result);
//   })
// });

// //add 5 video data
// app.post('/api/videos', (req, res) => {
//   db.generateVids()
//   db.Video.findAll()
//   .then(result => {
//     res.send(result);
//   })
// });

// //update the updatedAt attribute for the specific video data
// // app.patch('/api/video/:videoId', (req, res) => {
// //   db.findOne({where: {id: req.params.bannerId}})
// //   .then(result => {

// //   })
// // })


// //delete 1 video data
// app.delete('/api/video/:videoId', (req, res) => {
//     db.findOne({where: {id: req.params.bannerId}})
//     .then(result => result.destroy())
//       .catch(err => console.log(err))
//         .then(res.end());
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

// app.post('/api/banner', (req, res) => {
//   db.generateBanners().then(result => {
//     console.log(result);
//   })
// });