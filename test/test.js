const db = require('../database/index.js');
const seeder = require('../database/seeder.js');
const axios = require('axios');
const kickstarter = require('../server/index.js')

require('mysql2/node_modules/iconv-lite').encodingExists('foo')

jest.mock('axios');

// describe('Banner', () => {
//   test('generateBanners is a function', () => {
//     expect(seeder.generateBanners).toBeInstanceOf(Function);
//   });
// })

// describe('Video', () => {
//   test('generateVideos is a function', () => {
//     expect(seeder.generateVideos).toBeInstanceOf(Function);
//   });
// })

// describe('api/banners', () => {
//   console.log('test');
// })

// describe('api/videos', () => {
//   console.log('test');
// })

describe('Sequelize', () => {
  test('sequelize connection established', () => {
    db.sequelizeConnection.then(() => {
      console.log = jest.fn();
      log('Connection has been established successfully.')
      expect(console.log).toHaveBeenCalledWith('Connection has been established successfully.')
    });
  });
})

// it('returns the title of the first banner', async () => {
//   axios.get.mockResolvedValue({
//     data: [
//       {
//         userId: 1,
//         id: 1,
//         title: 'My first banner'
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: 'Banner: The Sequel'
//       }
//     ]
//   })
// })

// const title = await kickstarter
