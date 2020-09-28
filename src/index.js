const express = require ('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 2019

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
         fileSize: 1000000
    },
    fileFilter(req, file, cb){
        
        // if(!file.originalname.endsWith('.pdf')){
        //     return cb(new Error('Please upload a PDF file'))
        // }

        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a word document'))
        }

        cb(undefined, true)
        
    }
})

app.post('/upload', upload.single('upload'), (req, res)=> {
    res.send()
}, (error, req, res, next)=>{
    res.status(400).send({error: error.message})
})

// app.use((req, res , next)=> {
//     if(req.method === "GET"){
//         res.send(' GET request are disabled!!')
//     }else{
//         next ()
//     }
// })

// app.use((req, res, next)=>{
//     res.status(503).send(' maintainance mode')
// })


// this is where and how we set up our middleware

app.use(express.json())                                                                         // we configure our app to parse data that come from the postman
app.use(userRouter)
app.use(taskRouter)


app.listen(port, ()=>{
    console.log('server is up and running in port ' + port)
})







// const Task = require('./models/tasks')
// const User = require('../src/models/users')

// const main = async () => {
//     // const task = await Task.findById('5f6fca41c7a56431f221fd3d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5f6fc9fcc7a56431f221fd3a')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()