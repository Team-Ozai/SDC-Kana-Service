const { Pool, Client } = require('pg')
const pg_config = require('./pgConfig.json')
const dbName = require('./pgSetup.js')
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

var getFirstId = `SELECT * FROM BANNER WHERE ID=1`
var getOne = (req, res) => {
  client.connect()
  client.query(getFirstId, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result.rows)
    }
  })
  // .then(result => {
  //   // console.log(result.rows)
  //   return result.rows
  // })
  // .then( () => client.end())
  // .catch(err => {
  //   console.log(err)
  // })
}

module.exports.getOne = getOne;
