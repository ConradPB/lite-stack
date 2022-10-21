import { Schema, model } from 'mongoose'

const answerSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        //we need to know which model this object ID works with which is use
        ref:'User' 
        
    },
    
    text: {
    type: String,
    required: [true, 'Please add text value'],}, 
}, {
    timestamps: true,  
})
 
export default model('Answer',answerSchema) 