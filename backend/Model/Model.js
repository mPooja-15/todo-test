const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = new mongoose.Schema({
    task_name: {
        type: String,
        required: true
    },
    iscomplate: {
        type: Boolean,
        required: true
    }
})

const User = new mongoose.model('Users', userSchema)
module.exports = User