const db = require('../database/index.js');


describe('Banner', () => {
  test('generateBanners is a function', () => {
    expect(db.generateBanners).toBeInstanceOf(Function);
  });
})

describe('Video', () => {
  test('generateVids is a function', () => {
    expect(db.generateVids).toBeInstanceOf(Function);
  });
})