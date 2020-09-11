const mongodb = require ('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

//const { MongoClient, ObjectID} = require('mongodb')

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true , useUnifiedTopology: true }, (error, client)=> {

    if(error){
          return console.log('Unable to connect to the database')
    }

    console.log('connected to the database')

    const dataBase = client.db(databaseName)

    dataBase.collection('tasks').find({ complete : false}).toArray((error, task)=>{
        if(error){
            return console.log('please try another search')
        }

        console.log(task)
    })


    // dataBase.collection('tasks').find({ complete : false}).count((error, task)=>{
    //     if(error){
    //         return console.log('please try another search')
    //     }

    //     console.log(task)
    // })

    // dataBase.collection('tasks').findOne({ _id : new ObjectID('5f5b0093e2d4c647bb1386bb')}, (error, task)=>{
    //     if(error){
    //         return console.log(' No such file found')
    //     }

    //     console.log(task)
    // })


    // dataBase.collection('users').find({ age: 24}).count((error, users)=>{
    //     if(error){
    //         return console.log('No match for users with that age found')
    //     }

    //      console.log(users)
    // })

    // dataBase.collection('users').findOne({ _id : new ObjectID('5f5b08f47fe8144e1fbdc25d')}, (error, user)=>{
    //     if(error){
    //         return console.log('No user with such _id')
    //     }

    //     console.log(user)
    // })

    // dataBase.collection('users').find({ age: 24}).toArray((error, users)=>{
    //     if(error){
    //         return console.log('No match for users with that age found')
    //     }

    //      console.log(users)
    // })

    // dataBase.collection('users').findOne({ name: 'innocent', age : 23}, (error, user) =>{
    //     if(error){
    //         return console.log(' Unable to fetch user')
    //     }

    //     console.log(user)
    // })

    
    // dataBase.collection('users').insertOne({
    //             _id: id,
    //             name:'steven',
    //             age: 18
    // }, (error, result)=>{

    //     if(error){
    //         return console.log('Unable to insert the User')
    //     }

    //     console.log(result.ops)
    // })


    // dataBase.collection("users").insertMany([{
    //     name: 'adela',
    //     age: 25,
    //     email: "adelapaulo@gmail.com",
    //     password: "elgrande2020"
    // }, {
    //     name: " regina",
    //     age: 24,
    //     email: "reginapaul@gmail.com",
    //     password: "regking2020"
    // },{
    //     name: "frank zabron",
    //     age:23,
    //     email: "FRANKZABRON@gmail.com",
    //     password: 'zabron2020'

    // },{

    //     name: "merry",
    //     age: 24,
    //     email: 'merry2@gmail.com',
    //     password: " password123"

    // }], (error, result)=>{
    //     if(error){
    //          return console.log("Unable to insert users")
    //     }

    //     console.log (result.ops)
    // })



    // dataBase.collection('tasks').insertOne({
    //     description: 'learning nodejs',
    //     complete: true
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks to the database')
    //     }

    //     console.log(result.ops)
    // })

    // dataBase.collection('tasks').insertMany([{ 
    //     description : 'learn DevOps',
    //     complete: false
    // },{ 
    //     description: 'learn python',
    //     complete: false
    // },{ 
    //     description: 'learn serverless application',
    //     complete: false 
    // },{  
    //         description: 'learn python',
    //         complete: false

    //  }], (error, result)=>{
    //      if(error){
    //          return console.log('unable to insert the tasks')
    //      }

    //      console.log(result.ops)
    //  })




    // ************************************************************************

    /*
            Description
    ObjectId(<hexadecimal>)
    Returns a new ObjectId value. The 12-byte ObjectId value consists of:

    a 4-byte timestamp value, representing the ObjectId’s creation, measured in seconds since the Unix epoch
    a 5-byte random value
    a 3-byte incrementing counter, initialized to a random value
    While the BSON format itself is little-endian, the timestamp and counter values are big-endian, with the most significant bytes appearing first in the byte sequence.

    ObjectId() can accept the following parameter:

    Field	Type	Description
    hexadecimal	String	Optional. Hexadecimal string value for the new ObjectId.

    Methods and Attributes
    ObjectId() has the following attribute and methods:

    Attribute/Method                Description
                                     
                                     
    str	                            Returns the hexadecimal string representation of the object.
    ObjectId.getTimestamp()	        Returns the timestamp portion of the object as a Date.
    ObjectId.toString()	            Returns the JavaScript representation in the form of a string literal “ObjectId(...)”.
    ObjectId.valueOf()	            Returns the representation of the object as a hexadecimal string. The returned string is the str attribute.

    */

  // Quering Documents CRUD ===> Create {READ} Updates Delete
  // {READ}

})









