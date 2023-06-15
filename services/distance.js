require("dotenv").config()
const KEY = process.env.API_KEY 
const axios = require("axios")
const { response } = require("express")
const sourceUrl = "https://www.zipcodeapi.com/rest/" 
 exports.find = (req , res, callback) => { 
    let url = sourceUrl  + KEY + '/distance.json/' + req.params.zip1+ '/' + req.params.zip2 + '/km'
    console.log(url)
    axios.get(url)
    .then((response) => { 
        console.log(response.status)
        console.log(response.data)
        return callback(null , response.data)
    })
    .catch((error) => {
        if(error.response) {
              console.log(error.response.data)
              console.log(error.response.status)
        }else if (error.request) { 
            console.log(error.request) ; 
        }else 
        console.log(error.message)
        


    })
}