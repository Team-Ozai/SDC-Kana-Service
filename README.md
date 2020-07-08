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
 - [ ] GET any banner data
    - `endpoint` : /api/banner
 - [ ] GET banner data for specific id
    - `endpoint` : /api/banner/:bannerId
 - [ ] GET all banner data
    - `endpoint` : /api/banners

- **POST**
   - [ ] POSTS 5 more banner datas
    - `endpoint` : /api/banners

- **PATCH**
   - [ ] increments pledged amount for specific id by 10
    - `endpoint` : /api/banner/:bannerId

- **DELETE**
   - [ ] DELETES data for specific id
    - `endpoint` : /api/banner/:bannerId
