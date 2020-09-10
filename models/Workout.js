const {model,Shema, Schema} = require('mongoose')

const Workout = new Schema({
    text:{
        type: String,
        unique: true,
        required: true
    },
}, { timestamps: true })

module.exports = model('Workout', Workout)