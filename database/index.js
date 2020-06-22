const {Sequelize, Model, Datatypes} = require('sequelize');

var sequelize = new Sequelize('mysql', 'root', 'baseball', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync();


module.exports.sequelize = sequelize;