const mongoose = require('mongoose')


taskSchema = new mongoose.Schema({
    description:  {
        type: String,
        required: true,
        trim: true
    },
    complete: {
        type: Boolean,
        required: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
})

const Task = mongoose.model('Tasks',taskSchema )


module.exports = Task
    
