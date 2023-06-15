const cache = require('flat-cache')

let flatCache = cache.load('distanceCache') 

let flatCacheMiddleware = (req , res , next) => { 
    let key = "__express__" + req.originalUrl || req.url 

    let flatContent = flatCache.getKey(key)
    if(flatContent) { 
        res.send(flatContent)
    }else { 
        res.sendResponse = res.send 
        res.send = (body) => { 
            cache.setKey(key , body)
            cache.save()
            res.sendResponse(body)
        }
        next()
    }
}

module.exports = flatCacheMiddleware