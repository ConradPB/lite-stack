const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    text: {
    type: String,
    required: [true, 'Please add text value'],},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Question',questionSchema)