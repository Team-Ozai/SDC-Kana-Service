const { Pool, Client } = require('pg')
const pg_config = require('./pgConfig.json')
const path = require('path');


//////////// Initial Setup /////////////////
const setUp = new Client({
  user: pg_config.user,
  host: pg_config.host,
  database: pg_config.database,
  password: pg_config.password,
  port: pg_config.port
})

const dbName = 'sdc'
const createBannerTable = `CREATE TABLE banner (
  title TEXT ,
  description TEXT,
  amount_pledged TEXT,
  goal TEXT,
  backers TEXT,
  backers_text TEXT,
  days TEXT,
  days_text TEXT,
  all_or_nothing TEXT,
  location TEXT,
  project_we_love TEXT
)`

setUp.connect()  //connects to default database in config file
.then( () => client.query(`CREATE DATABASE ${dbName};`) ) // creates a new db inside of default database
.catch( (error) => console.log(error))
.then( () => setUp.end());

//////////// Import data into table /////////////////

const client = new Client({
  user: pg_config.user,
  host: pg_config.host,
  database: dbName,
  password: pg_config.password,
  port: pg_config.port
})

client.connect()
.then( () => client.query(createBannerTable))
.then( () => client.query(seedDB))
.catch( (error) => console.log(error))
.then( () => client.end);

const bannerCsv = path.join(__dirname, '/banner.csv')
// console.log(bannerCsv)

//import csv generated from dataGenerator.js
const seedDB = `COPY banner FROM '${bannerCsv}' DELIMITER ',' CSV HEADER;`


//////////////////// Pool ///////////////////////

const pool = new Pool({
  user: pg_config.user,
  host: pg_config.host,
  database: dbName,
  password: pg_config.password,
  port: pg_config.port
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

