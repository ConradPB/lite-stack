const mongoose = require('mongoose')

const answer = require('../models/answerModel')

const questionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //we need to know which model this object ID works with which is user
        ref:'User'
    },
    answer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        //we need to know which model this object ID works with which is use
        ref:'Answer' 
        
    },
    text: {
    type: String,
    required: [true, 'Please add text value'],},
}, {
    timestamps: true, 
},)

module.exports = mongoose.model('Question',questionSchema) 