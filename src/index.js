const express = require ('express')

const app = express()
const port = process.env.PORT || 2019

app.listen(port, ()=>{
    console.log('server is up and running in port ' + port)
})