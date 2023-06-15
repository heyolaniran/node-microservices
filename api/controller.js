const distance =  require("../services/distance") ;


exports.getDistance = (req , res) => { 
    distance.find(req , res , (error , data) => { 
        if(error)
        res.send({distance : -1})
        else 
        { 
            res.send(data)
        }
    })
}
