const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide a Name'], // makes sure that an empty string is not passed
        trim: true, // cuts the redundent white spaces
        maxlength:[30,'Name cannot be more than 30 characters'] // limit the number of character to be passed
    },
    completed: {
        type: Boolean,
        default:false // sets default valuse of our task to false
    }
})

module.exports = mongoose.model('task',taskSchema)