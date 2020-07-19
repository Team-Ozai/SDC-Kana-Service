const { Pool, Client } = require('pg')
const pg_config = require('./pgConfig.json')
// const dbName = require('./pgSetup.js')
// const dataGenerator = require('./dataGenerator.js')
const path = require('path');

//////////////////// Setup ///////////////////////
// const databaseName = dbName.dbName;

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
  database: 'sdc',
  password: pg_config.password,
  port: pg_config.port
})
client.connect()

//////Banner///////
// pool.on('error', (err, query) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

var getOneBanner = (req, res) => {
  var getFirstId = `SELECT * FROM BANNER WHERE ID=1`
  // client.connect()
  client.query(getFirstId)
  .then(result => res.send(result.rows))
  .catch(errr => console.log(err.stack))
  // , (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     res.send(result.rows)
  //   }
  // })
  // client.end()
  // .catch(err => console.log(err.stack))
}

var getBannerById = (req, res) => {
  var id = req.params.bannerId
  var getBannerById = `SELECT * FROM BANNER WHERE ID=${id}`
  // client.connect()
  client.query(getBannerById)
  .then(result => res.send(result.rows))
  .catch(errr => console.log(err.stack))

  // , (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log(result.rows)
  //     res.send(result.rows)
  //   }
  // })
  // client.end()
  // .catch(err => console.log(err))
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
  // client.connect()
  client.query(getFirstId)
  .then(result => res.send(result.rows))
  .catch(errr => console.log(err.stack))
  //  (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     res.send(result.rows)
  //   }
  // })
  // // client.end()
    // .then(() => client.end())
    // .catch(err => console.log(err))
}

var getVidById = (req, res) => {
  var id = req.params.videoId
  console.log(id)
  var getVidById = `SELECT * FROM VIDEO WHERE ID=${id}`
  // client.connect()
  client.query(getVidById)
  .then(result => res.send(result.rows))
  .catch(errr => console.log(err.stack))

  // , (err, result) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     res.send(result.rows)
  //   }
  //   // client.end()
  // })
  // .catch(err => console.log(err))
}


module.exports.getOneBanner = getOneBanner;
module.exports.getBannerById = getBannerById;
// module.exports.postBanners = postBanners;
module.exports.getOneVid = getOneVid;
module.exports.getVidById = getVidById;
