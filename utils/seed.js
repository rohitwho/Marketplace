const connection = require('../config/connection')
const userschemaa =  require('../models/user')
const userSeed  = require('./user-seed')
const postingSchema = require("../models/postings");
const postingSeeds = require('./postings-seed')


connection.on('error', (err) => {
    console.error(err);
  });
  
  connection.once('open', async () => {
    console.log('Seeds Connected');

try{
// await postingSchema.deleteMany(postingSeeds);
// await userschemaa.deleteMany(userSeed)



await postingSchema.insertMany(postingSeeds)
await userschemaa.insertMany(userSeed)

console.info('Database Seeded');

}catch(err){
    console.log(err)
}
  })