const fs = require('fs');
const faker = require('faker');

//banner data
var id = '';
var bannerData = () => {
  return {
  id: id,
  title: faker.commerce.productName(),
  description: faker.lorem.sentence(),
  amount_pledged: `$${faker.finance.amount()}`,
  goal: `pledged of $${faker.finance.amount()} goal`,
  backers: 1 + Math.floor(Math.random() * 499),
  backers_text: "backers",
  days: 1 + Math.floor(Math.random() * 59),
  days_text: "days to go",
  all_or_nothing: faker.random.boolean(),
  location: faker.address.country().split(',').join(''),
  project_we_love: faker.random.boolean()
  }
}
module.exports.bannerData = bannerData;

//video data
var videoData = () => {
  return {
    id: id,
    title: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    video_url: "https://www.youtube.com/embed/zlvAcRFnYSQ"
  }
}
module.exports.videoData = videoData;

//format data to export to csv
var bannerHeader = ['id', 'title', 'description', 'amount_pledged', 'goal', 'backers', 'backers_text', 'days', 'days_text', 'all_or_nothing', 'location', 'project_we_love']

var formatBanner = () => {
  var data = '';
  for (var i = 0; i < bannerHeader.length; i++) {
    if (i === bannerHeader.length - 1) {
      data += bannerData()[bannerHeader[i]]
    } else (
      data += bannerData()[bannerHeader[i]] + ', '
    )
  }
  return data;
}

var videoHeader = ['id', 'title', 'description', 'video_url']
var formatVideo = () => {
  var data = '';
  for (var i = 0; i < videoHeader.length; i++) {
    if (i === videoHeader.length - 1) {
      data += videoData()[videoHeader[i]]
    } else (
      data += videoData()[videoHeader[i]] + ', '
    )
  }
  return data;
}

//generate headersa

var bannerCSV = "" + bannerHeader.join(', ') + "\n";
// var banners = function(num) {
//   for (var i = 0; i <= numofData; i++) {
//     bannerCSV += i+1 + formatBanner() + "\n"
//   }
//   return bannerCSV
// }

var videoCSV = "" + videoHeader.join(', ') + "\n";
// var videos = function(num) {
//   // for (var i = 0; i <= numofData; i++) {
//     videoCSV += id + 1 + formatVideo() + "\n"
//   // }
//   console.log(videoCSV)
//   return videoCSV;
// };

///////////////write to csv///////////////
var numofData = 10000000;

//Banner
//write header
function writeBannerHeader (writer, data, encoding, callback) {
  writer.write(data, encoding, callback)
}
//write the data x number of times
function writeBannerLotsOfTimes (writer, data, encoding, callback) {
  let i = numofData;

  function write() {
    let ok = true;
    do {
      data = i + formatBanner() + "\n"
      i--;

      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
  write();
}

//video
function writeVidHeader (writer, data, encoding, callback) {
  writer.write(data, encoding, callback)
}

function writeVidLotsOfTimes (writer, data, encoding, callback) {
  let i = numofData;

  function write() {
    let ok = true;
    do {
      data = i + formatVideo() + "\n"
      i--;

      if (i === 0) {
        // Last time!
        writer.write(data, encoding, callback);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
  write();
}



/*===========================BANNERS===========================*/
// start write stream
const banner = fs.createWriteStream('../banner.csv');
// the finish event is emitted when all data has been flushed from the stream
banner.on ('finish', () => {
  console.log('All writes are now complete.');
});

//start timer
var startBanner = Date.now();

//start writing
writeBannerHeader(banner, bannerCSV, 'utf-8', () => {
  banner.end
});

writeBannerLotsOfTimes(banner, '', 'utf-8', () => {
  // close the stream and adds whatever text is passed in as input
  banner.end();
});

//log end time and calculate how long it took
var endBanner = Date.now();
var diff = endBanner - startBanner;
console.log('Start - ', startBanner)
console.log('End - ', endBanner)

console.log('Diff (ms) - ', diff)
console.log('Diff (sec) - ', diff/1000)


/*===========================VIDEOS===========================*/


// const video = fs.createWriteStream('../video.csv');
// video.on ('finish', () => {
//   console.log('All writes are now complete.');
// });

//start timer
// var startVideo = Date.now();

// //start writing
// writeVidHeader(video, videoCSV, 'utf-8', () => {
//   video.end
// });

// writeVidLotsOfTimes(video, '', 'utf-8', () => {
//   // close the stream and adds whatever text is passed in as input
//   video.end();
// });

// //log end time and calculate how long it took
// var endVideo = Date.now();
// var diff = endVideo - startVideo;
// console.log('Start - ', startVideo)
// console.log('End - ', endVideo)

// console.log('Diff (ms) - ', diff)
// console.log('Diff (sec) - ', diff/1000)