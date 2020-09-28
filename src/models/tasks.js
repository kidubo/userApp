const mongoose = require('mongoose')


taskSchema = new mongoose.Schema({
    description:  {
        type: String,
        required: true,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true
})

const Task = mongoose.model('Task',taskSchema )


module.exports = Task
    
