const mongoose=require('mongoose')


const contactschema = mongoose.Schema({
    FullName:{
        type:String,
    },
    Email:{
        type:String
    },
    Subject:{
        type:String
    },
    Massage:{
        type:String
    }
}) 
module.exports= mongoose.model('users',contactschema)