const mongoose=require('mongoose')


const contactschema = mongoose.Schema({
    FullName:{
        type:String,
        required: true

    },
    Email:{
        type:String,
        required: true

    },
    Subject:{
        type:String,
        required: true


    },
    Massage:{
        type:String,
        required: true

    }
}) 
module.exports= mongoose.model('users',contactschema)