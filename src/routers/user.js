const express =  require('express')
const User = require('../models/users')
const router = new express.Router()

router.post('/users', async (req, res)=>{
    const user1 = new User(req.body)

    try {
        await user1.save()
        res.status(201).send(user1)
    
    } catch (e) {
        res.status(400).send(e)   
    }
  
})

router.get('/users', async (req, res)=>{

    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/users/:id', async (req, res)=>{
    const _id = req.params.id

    try {

       const user = await User.findById(_id)

       if(!user){
           return res.status(404).send("There is no such user found!!")
       }

       res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/users/:id', async (req, res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
    
        if(!user){
            return res.status(404).send("Error no such user!!")
        }
    
        res.send(user)
    } catch (e) {
        res.status(400).send(e)   
    }


})

router.delete('/users/:id', async (req, res)=>{

        try {
            const user = await User.findByIdAndDelete(req.params.id)

            if(!user){
                 return res.status(404).send("Cant find user to delete try another search")
            }

            res.send(user)
        } catch (e) {
            res.status(500).send(e)
        }

   
})

module.exports = router