const axios = require('axios');
const pexels = require('../configure/config.js');

axios.get('https://api.pexels.com/videos', {
  headers: {'Authorization' : pexels}
});

