const mongoose = require('mongoose')
const validator = require ('validator')

const userSchema = new mongoose.Schema({
    name:{
            type: String,
            required: true,
            trim: true
        },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                       throw new Error("Password can not contain 'password'")
           }
      },

    },
    age: {
        type: Number,
        default: 0
    },
    email:{
        type: String,
        required: true,
        trim:true,
        tolowercase: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                 throw new Error (' Email is invalid ')
       }
    },

    },
})

const  Users = mongoose.model('Users', userSchema) 



module.exports = Users