
const router = require("express").Router()
const getPostin = require('../../Controller/home-controllers');



router.route('/').get(getPostin);


module.exports= router;







