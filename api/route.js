const cacheMiddleware = require("../middlewares/memoryCacheMiddleware");
const Controller = require("./controller") ; 
const express = require("express")
const router = express.Router() 
router.get("/distance/:zip1/:zip2" , cacheMiddleware(20) ,  Controller.getDistance) ; 

module.exports = router