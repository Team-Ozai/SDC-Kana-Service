const express = require('express');
const app = express();
const port = 3002;

const Database = require('../database/index.js');

app.get('/', (req, res) =>
  res.send('We are in buisness baby')
);

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

