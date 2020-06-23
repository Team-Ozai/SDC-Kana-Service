const {Sequelize, Model, Datatypes} = require('sequelize');
const mysql = require('mysql2');
const faker = require('faker');

var sequelize = new Sequelize('kickstarter', 'root', 'baseball', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
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

const generateVids = function() {
  for (var i = 0; i < 5; i ++) {
    Video.create ({
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      video_url: faker.image.imageUrl()
    });
  }
}

// generateVids()

Video.sync();

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

const generateBanners = function() {
  for (var i = 0; i < 5; i ++) {
    Banner.create ({
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      amount_pledged: faker.finance.amount(),
      goal: `pledged of $${faker.finance.amount()}`,
      backers: 1 + Math.floor(Math.random() * 500),
      backers_text: "backers",
      days: 1 + Math.floor(Math.random() * 59),
      days_text: "days to go",
      all_or_nothing: faker.random.boolean(),
      location: faker.address.country(),
      project_we_love: faker.random.boolean()
    });
  }
}

// generateBanners()

Banner.sync()

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
module.exports.Video = Video;
module.exports.Banner = Banner;