const db = require('../database/index.js');
const seeder = require('../database/seeder.js');

require('mysql2/node_modules/iconv-lite').encodingExists('foo')

// describe('Sequelize', () => {
//   test('sequelize connection established', () => {
//     return db.sequelize.authenticate().then(() => {
//       console.log = jest.fn();
//       log('Connection has been established successfully.')
//       expect(console.log).toHaveBeenCalledWith('Connection has been established successfully.')
//     });
//   });
// })


describe('Banner', () => {
  test('generateBanners is a function', () => {
    expect(seeder.generateBanners).toBeInstanceOf(Function);
  });
})

describe('Video', () => {
  test('generateVideos is a function', () => {
    expect(seeder.generateVideos).toBeInstanceOf(Function);
  });
})

