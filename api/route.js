const cacheMiddleware = require("../middlewares/memoryCacheMiddleware");
const redisCacheMiddleware = require("../middlewares/redisCacheMiddleware");
const Controller = require("./controller") ; 
const express = require("express")
const router = express.Router() 
router.get("/distance/:zip1/:zip2" , cacheMiddleware ,  Controller.getDistance) ; 

module.exports = router