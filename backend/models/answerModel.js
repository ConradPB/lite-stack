const mongoose = require('mongoose')

const answerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
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
 
module.exports = mongoose.model('Answer',answerSchema) 