const router = require("express").Router()
const homeroutes = require("./api/homeroutes") 


router.use("/home",homeroutes)

module.exports= router