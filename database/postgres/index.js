const { Pool, Client } = require('pg')
const pg_config = require('./pgConfig.json')
const dbName = require('./pgSetup.js')
// const dataGenerator = require('./dataGenerator.js')
const path = require('path');

//////////////////// Setup ///////////////////////
const databaseName = dbName.dbName;

// const pool = new Pool({
//   user: pg_config.user,
//   host: pg_config.host,
//   database: databaseName,
//   password: pg_config.password,
//   port: pg_config.port
// })

const client = new Client({
  user: pg_config.user,
  host: pg_config.host,
  database: databaseName,
  password: pg_config.password,
  port: pg_config.port
})

//////Banner///////
// pool.on('error', (err, query) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

var getOneBanner = (req, res) => {
  var getFirstId = `SELECT * FROM BANNER WHERE ID=1`
  client.connect()
  client.query(getFirstId, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result.rows)
    }
    client.end();
  })
}

var getBannerById = (req, res) => {
  var id = req.params.bannerId
  var getBannerById = `SELECT * FROM BANNER WHERE ID=${id}`
  client.connect()
  client.query(getBannerById, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result.rows)
    }
    client.end();
  })
}

// var postBanners = (req, res) => {
//   var data = dataGenerator.bannerData()
//   var postBanners = `INSERT INTO BANNER WHERE ID=${id}`
//   client.connect()
//   client.query(postBanners, (err, result) => {
//     if (err) {
//       console.log(err)
//     } else {
//       res.send(result.rows)
//     }
//   })
// }

var getOneVid = (req, res) => {
  var getFirstId = `SELECT * FROM VIDEO WHERE ID=1`
  client.connect()
  client.query(getFirstId, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result.rows)
    }
    client.end();
  })
}

var getVidById = (req, res) => {
  var id = req.params.videoId
  var getVidById = `SELECT * FROM VIDEO WHERE ID=${id}`
  client.connect()
  client.query(getVidById, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result.rows)
    }
    client.end();
  })
}


module.exports.getOneBanner = getOneBanner;
module.exports.getBannerById = getBannerById;
// module.exports.postBanners = postBanners;
module.exports.getOneVid = getOneVid;
module.exports.getVidById = getVidById;
