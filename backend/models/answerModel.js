const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    text: {
    type: String,
    required: [true, 'Please add text value'],},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Answer',answerSchema)