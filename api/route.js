const Controller = require("./controller") ; 
const express = require("express")
const router = express.Router() 

router.get("/distance/:zip1/:zip2" , Controller.getDistance) ; 

module.exports = router