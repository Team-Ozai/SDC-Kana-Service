const fs = require('fs');
const faker = require('faker');

//banner data
var bannerData = () => ({
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
})


//video data
var videoData = () => ({
  title: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  video_url: "https://www.youtube.com/embed/zlvAcRFnYSQ"
})

/* generate data and export to a csv file */
const banner = fs.createWriteStream('banner.csv');
const video = fs.createWriteStream('video.csv');


var numofData = 10;
var banners = [];
var bannerJSON = () => {
  for (var i = 0; i < numofData; i++) {
    banners.push(bannerData());
  }
  return JSON.stringify(banners);
};
bannerJSON();

var videos = [];
var videoJSON = () => {
  for (var i = 0; i < numofData; i++) {
   console.log(videoData())
    videos.push(videoData());
  }
  return JSON.stringify(videos);
};
videoJSON();

banner.write(bannerJSON());
// the finish event is emitted when all data has been flushed from the stream
banner.on ('finish', () => {
  console.log('All writes are now complete.');
});
// close the stream and adds whatever text is passed in as input
banner.end();

video.write(videoJSON());
video.on ('finish', () => {
  console.log('All writes are now complete.');
});
video.end();