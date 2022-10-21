import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name']
    }, 
    email: {
        type: String, 
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please add a password'],
        unique: true
    },
},
{
    //for updated at field
    timestamps: true
})

export default model('User', userSchema) 