import { Schema, model } from 'mongoose'

import answer from '../models/answerModel'

const questionSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        //we need to know which model this object ID works with which is user
        ref:'User'
    },
    answers: [{
        type: Schema.Types.ObjectId,
        required: true,
        //we need to know which model this object ID works with which is use
        ref:'Answer' 
        
    }],
    text: {
    type: String,
    required: [true, 'Please add text value'],},
}, {
    timestamps: true, 
},)

export default model('Question',questionSchema) 