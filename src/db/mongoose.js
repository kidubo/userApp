const mongoose = require ('mongoose')

const url = 'mongodb://127.0.0.1:27017/TaskManager-API'

mongoose.connect( url,
    { 
    useNewUrlParser: true, 
    useCreateIndex: true ,  
    useUnifiedTopology: true
   })

   const  Users = mongoose.model('Users', {
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
            },
   })


   const user = new Users({
       name:'maxmilian',
       age: 2
   })

   user.save().then((user)=>{
         console.log(user)
   })


// *****************************************************************************



   const Tasks = mongoose.model('Tasks', {
       description:  {
           type: String,
           required: true,
           trim: true
       },
       complete: {
           type: Boolean,
           required: false
       }
   })


   const task1 = new Tasks({
       description: " learning AWS lamba function",
       complete: false
   })

   task1.save().then((task1)=>{
       console.log(task1)
   }).catch((error)=>{
       console.log(error)
   })