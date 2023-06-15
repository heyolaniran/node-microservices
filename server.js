const express = require('express')
const port = 3000 
const app = express() 
const routes  = require('./api/route') 

app.use(routes)

app.listen(port , () => { 
    console.log("Ecoute sur le port :", port)
})