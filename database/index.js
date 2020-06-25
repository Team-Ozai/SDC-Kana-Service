const {Sequelize, Model, Datatypes} = require('sequelize');
const faker = require('faker');
const seeder = require('./seeder.js');

var sequelize = new Sequelize('kickstarter', 'root', 'baseball', {
  host: 'localhost',
  dialect: 'mysql'
});

// const sequelizeConnection = new Promise(sequelize.authenticate()
// )  .then(() => {
//   console.log('Connection has been established successfully.');
// }).then(()=> {
//   seeder.generateVideos()
//   seeder.generateBanners()
// })
// .catch(err => {
//   console.error('Unable to connect to the database:', err);
// });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).then(()=> {
    seeder.generateVideos()
    seeder.generateBanners()
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

class Video extends Model {}

Video.init({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  video_url: Sequelize.STRING,
  bannerID: Sequelize.STRING
}, {sequelize, modelName: 'video'});

class Banner extends Model {}

Banner.init ({
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  amount_pledged: Sequelize.STRING,
  goal: Sequelize.STRING,
  backers: Sequelize.INTEGER,
  backers_text: Sequelize.STRING,
  days: Sequelize.INTEGER,
  days_text: Sequelize.STRING,
  all_or_nothing: Sequelize.BOOLEAN,
  location: Sequelize.STRING,
  project_we_love: Sequelize.BOOLEAN
}, {sequelize, modelName: 'banner'});

Video.sync();
Banner.sync();

module.exports.sequelize = sequelize;
// module.exports.sequelizeConnection = sequelizeConnection;
module.exports.Video = Video;
module.exports.Banner = Banner;