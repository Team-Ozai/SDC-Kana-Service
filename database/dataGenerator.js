const fs = require('fs');
const faker = require('faker');

//banner data
var bannerData = {
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
}

//video data
var videoData = {
  title: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  video_url: "https://www.youtube.com/embed/zlvAcRFnYSQ"
}


/* generate data and format for export to csv file */
const banner = fs.createWriteStream('banner.csv');
const video = fs.createWriteStream('video.csv');


var bannerHeader = ['title', 'description', 'amount_pledged', 'goal', 'backers', 'backers_text', 'days', 'days_text', 'all_or_nothing', 'location', 'project_we_love']

var formatBanner = () => {
  var data = '';
  for (var i = 0; i < bannerHeader.length; i++) {
    if (i === bannerHeader.length - 1) {
      data += bannerData[bannerHeader[i]]
    } else (
      data += bannerData[bannerHeader[i]] + ', '
    )
  }
  return data;
}

var videoHeader = ['title', 'description', 'video_url']
var formatVideo = () => {
  var data = '';
  for (var i = 0; i < videoHeader.length; i++) {
    if (i === videoHeader.length - 1) {
      data += videoData[videoHeader[i]]
    } else (
      data += videoData[videoHeader[i]] + ', '
    )
  }
  return data;
}


//generate required amount of data
var numofData = 1;

var bannerCSV = "" + bannerHeader.join(', ') + "\n";

var banners = function(num) {
  for (var i = 0; i <= numofData; i++) {
    bannerCSV += formatBanner() + "\n"
  }
  return bannerCSV
}

var videoCSV = "" + videoHeader.join(', ') + "\n";

var videos = function(num) {
  for (var i = 0; i <= numofData; i++) {
    videoCSV += formatVideo() + "\n"
  }
  return videoCSV;
};


//write to csv

banner.write(banners(numofData));
// the finish event is emitted when all data has been flushed from the stream
banner.on ('finish', () => {
  console.log('All writes are now complete.');
});
// close the stream and adds whatever text is passed in as input
banner.end();

video.write(videos(numofData));
video.on ('finish', () => {
  console.log('All writes are now complete.');
});
video.end();