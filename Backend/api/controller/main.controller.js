var User = require('../db/db.js');
const { ObjectId } = require('mongodb');

function isEmptyList(obj){
    return(!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

function handleError(res,error){
    res.status(200);
    res.send('Something went wrong. \n'+error);
}

//CRUD

//uri1: /api/users
//uri2: /api/users/email

module.exports.create = function(req,res){
    
    try{
        var provider = req.body;

        User.create(provider)
            .then( result => {
                res.status(201);
                res.send('Added '+result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.readOne = function(req,res){
    
    try{

        User.find({'email':req.params.email})
            .then( result => {
                if(isEmptyList(result)){
                    res.status(400);
                    res.send("List is Empty.");
                }
                res.status(200);
                res.send(result[0]);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}