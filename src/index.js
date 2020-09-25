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