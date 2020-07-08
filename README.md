# Kana-Service

Usage - Start WITHOUT Seeding Database

npm start

Build

npm run build

Usage - Seed Database Script

npm run seed

## APIs
### Banner
- **GET**
 - [ ] GET first banner data (id = 1)
    - `endpoint` : /api/banner
 - [ ] GET banner data for specific id
    - `endpoint` : /api/banner/:bannerId
 - [ ] GET all banner data
    - `endpoint` : /api/banners

- **POST**
   - [ ] POSTS 5 more banner datas
    - `endpoint` : /api/banners

- **PATCH**
   - [ ] increments backers for specific id by 1
    - `endpoint` : /api/banner/:bannerId

- **DELETE**
   - [ ] DELETES data for specific id
    - `endpoint` : /api/banner/:bannerId


### Video
- **GET**
 - [ ] GET first video data (id = 1)
    - `endpoint` : /api/video
 - [ ] GET video video for specific id
    - `endpoint` : /api/video/:videoId
 - [ ] GET all video data
    - `endpoint` : /api/videos

- **POST**
   - [ ] POSTS 5 more video datas
    - `endpoint` : /api/videos

- **PATCH**
   - [ ] None

- **DELETE**
   - [ ] DELETES data for specific id
    - `endpoint` : /api/video/:videoId
