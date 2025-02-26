const mongoose = require('mongoose')

const MeowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name'],
        trim: true,
    },
    date: {
        type: Date,
        require: [true, 'Please add date']
    },
    location: {
        type: String,
        require: [true, 'Please add location']
    },
    member: {
        type: [String]
    }
})

module.exports = mongoose.model('meow', MeowSchema)