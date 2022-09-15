const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requited: true,
        //we need to know which model this onject ID works with which is use
        ref:'Usef'
    },
    text: {
    type: String,
    required: [true, 'Please add text value'],},
}, {
    timestamps: true,
})

module.exports = mongoose.model('Question',questionSchema)