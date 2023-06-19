const redis = require("redis")
const client =   redis.createClient()

let redisCacheMiddleware =  (req , res , next) => { 
    let key = "__express__"+req.originalUrl || req.url
  
        client.get(key, (errror , reply) => { 
            if(reply)
                res.send(reply)
            else { 
                res.sendResponse = res.send 
                res.send = (body) => { 
                    client.set(key , JSON.stringify(body))
                    res.sendResponse(body)
                }
            next()
            }
       })
}

module.exports = redisCacheMiddleware