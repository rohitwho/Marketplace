const connection = require('../config/connection')
const userschemaa =  require('../models/user')
const userSeed  = require('./user-seed')


connection.on('error', (err) => {
    console.error(err);
  });
  
  connection.once('open', async () => {
    console.log('Seeds Connected');



try{

await userschemaa.insertMany(userSeed)

console.info('Database Seeded');

}catch(err){
    console.log(err)
}











  })