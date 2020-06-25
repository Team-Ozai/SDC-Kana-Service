const db = require('./index.js');
const faker = require('faker');

const generateVideos = function() {
  for (var i = 0; i < 5; i ++) {
    db.Video.create ({
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      video_url: "https://www.youtube.com/embed/ASGBDmZj6o0"
    });
  }
}

const generateBanners = function() {
  for (var i = 0; i < 5; i ++) {
    db.Banner.create ({
      title: faker.commerce.productName(),
      description: faker.lorem.sentence(),
      amount_pledged: `$${faker.finance.amount()}`,
      goal: `pledged of $${faker.finance.amount()} goal`,
      backers: 1 + Math.floor(Math.random() * 499),
      backers_text: "backers",
      days: 1 + Math.floor(Math.random() * 59),
      days_text: "days to go",
      all_or_nothing: faker.random.boolean(),
      location: faker.address.country(),
      project_we_love: faker.random.boolean()
    });
  }
}

module.exports.generateVideos = generateVideos;
module.exports.generateBanners = generateBanners;
