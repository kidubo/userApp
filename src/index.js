const express = require ('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 2019

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