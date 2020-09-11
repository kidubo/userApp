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
    }
})

const Tasks = mongoose.model('Tasks',taskSchema )


module.exports = Tasks
    
