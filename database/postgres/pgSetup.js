const { Pool, Client } = require('pg')
const pg_config = require('./pgConfig.json')
const path = require('path');


//////////// Initial Setup //////////////////
const setUp = new Client({
  user: pg_config.user,
  host: pg_config.host,
  database: pg_config.database,
  password: pg_config.password,
  port: pg_config.port
})

const dbName = 'sdc'

setUp.connect()  //connects to default database in config file
.then( () => setUp.query(`CREATE DATABASE ${dbName};`) ) // creates a new db inside of default database
.catch( (error) => console.log(error))
.then( () => setUp.end());

module.exports.dbName = dbName;
module.exports.setUp = setUp;
