const db = require('./index.js');
//const Video

const Video = sequelize.define('Video', {
  // Model attributes are defined here
  id : "<project id>",
  title : "<video title>",
  description : "<video description",
  created_at : "<mm/dd/yyyy>"
  video_url: "<video url>",
  image : {
    url: "<video img jpg>",
    width: 480,
    height: 360
  }
});

const videos = [
  {
    _id : "1",
    title : "Gourmet coffee machine",
    description : "It makes gourmet coffee",
    created_at : "<06/03/2020>"
    video_url: "https://www.pexels.com/video/a-person-gift-wrapping-a-box-3196685/",
    image : {
      url: "https://unsplash.com/photos/tNALoIZhqVM",
      width: 480,
      height: 360
    }
    project_id: "1"
  },

{
  id : "2",
  title : "New Cereal",
  description : "A great tasting way to start the day",
  created_at : "<06/01/2020>"
  video_url: "https://www.pexels.com/video/a-bowl-of-porridge-for-breakfast-3872446/",
  image : {
    url: "https://unsplash.com/photos/chp1ITgplkA",
    width: 480,
    height: 360
  }
  project_id: "<project id>"
},

{
  id : "3",
  title : "Watering Plants",
  description : "Water plants faster than ever before",
  created_at : "06/10/2020"
  video_url: "https://www.pexels.com/video/watering-plants-854161/",
  image : {
    url: "https://unsplash.com/photos/-eY6G0Z_fs0",
    width: 480,
    height: 360
  }
  project_id: "3"
}

{
  id : "4",
  title : "Biking",
  description : "A foldable bike",
  created_at : "06/13/2020"
  video_url: "https://www.pexels.com/video/foldable-bike-857166/",
  image : {
    url: "https://unsplash.com/photos/0ClfreiNppM",
    width: 480,
    height: 360
  }
  project_id: "4"
},

{
  id : "5",
  title : "Save Ferris",
  description : "Restore the old Ferris Wheel",
  created_at : "04/21/2020"
  video_url: "https://www.pexels.com/video/colorful-ferris-wheel-in-motion-854734/",
  image : {
    url: "https://unsplash.com/photos/ApBBVS2csbY",
    width: 480,
    height: 360
  }
  project_id: "5"
}

]



// {
//   id : "6",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "https://www.pexels.com/video/a-pet-dog-wandering-on-a-camera-3042471/",
//   image : {
//     url: "https://unsplash.com/photos/qO-PIF84Vxg",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "7",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "https://www.pexels.com/video/person-surfing-the-waves-857185/",
//   image : {
//     url: "https://unsplash.com/photos/_CFv3bntQlQ",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "8",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "https://www.pexels.com/video/pouring-tea-on-teacup-2325178/",
//   image : {
//     url: "https://unsplash.com/photos/5kb0HwTHqTg",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "9",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "https://www.pexels.com/video/guitarist-playing-a-guitar-854923/",
//   image : {
//     url: "https://unsplash.com/photos/7kueosQ7Inc",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "10",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "https://www.pexels.com/video/a-playful-cute-kitten-1722593/",
//   image : {
//     url: "https://unsplash.com/photos/7GX5aICb5i4",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }
// {
//   id : "11",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "https://www.pexels.com/video/a-computer-monitor-flashing-digital-information-2887463/",
//   image : {
//     url: "https://unsplash.com/photos/95YRwf6CNw8",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }

// {
//   id : "<video id>",
//   title : "<video title>",
//   description : "<video description",
//   created_at : "<mm/dd/yyyy>"
//   video_url: "<video url>",
//   image : {
//     url: "<video img jpg>",
//     width: 480,
//     height: 360
//   }
//   project_id: "<project id>"
// }