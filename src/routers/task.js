const express = require('express')
const Task = require ('../models/tasks')
const router = new express.Router()

router.post('/tasks', async (req, res)=>{
    task1 = new Task(req.body)

    try {

        await task1.save()
        res.status(201).send(task1)
        
    } catch (e) {
        res.status(400).send(e)  
    }
})

router.get('/tasks', async (req, res)=>{

    try {
        const tasks =await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
        
    }
})

router.get('/tasks/:id', async (req, res)=>{
    const _id = req.params.id

    try {

        const task = await Task.findById(_id)

        if(!task){
            return res.status(404).send(" No such task !!")
        }

        res.send(task)
    } catch (e) {
            res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async (req, res)=>{

     const updates = Object.keys(req.body)
     const allowedUpdates = [ 'description', 'complete']
     const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

     if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid updates!' })
     }

    try {
        const task = await Task.findById(req.params.id)

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

         if(!task){
             return res.status(404).send("No such task!!") 
         }

         res.send(task)
    } catch (e) {
        res.status(400).send(e)
        
    }
})

router.delete('/tasks/:id', async (req, res)=> {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send("No task was found")
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router