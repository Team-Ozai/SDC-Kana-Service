const { Pool, Client } = require('pg')
const pg_config = require('./pgConfig.json')
const { dbName } = require('./pgSetup.js')
const path = require('path');

// //////////// Import data into table /////////////////

const client = new Client({
  user: pg_config.user,
  host: pg_config.host,
  database: dbName.dbName,
  password: pg_config.password,
  port: pg_config.port
})

const createBannerTable = `CREATE TABLE banner (
  id INTEGER,
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

const createVideoTable = `CREATE TABLE video (
  id INTEGER,
  title TEXT,
  description TEXT,
  video_url TEXT
)`

const bannerCsv = path.join(__dirname, '../banner.csv')
const videoCsv = path.join(__dirname, '../video.csv')
console.log(bannerCsv)

//import csv generated from dataGenerator.js
const seedBanner = `COPY banner FROM '${bannerCsv}' DELIMITER ',' CSV HEADER;`
const seedVideo = `COPY video FROM '${videoCsv}' DELIMITER ',' CSV HEADER;`

client.connect()
.then( () => client.query(createBannerTable))
.then( () => client.query(createVideoTable))
.then( () => client.query(seedBanner))
.then( () => client.query(seedVideo))
.then( () => client.end())
.catch( (error) => console.log(error))



