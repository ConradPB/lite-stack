const { cyan } = require('colors')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
    //we connect here. The the connect function takes in our mongo uri 
        const conn = await mongoose.connect(process.env.MONGO_URI)
    //once it connects we do a console log  and put some color to the connection variabble and host
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
    //if there is an error, we first console log it and then close the proces with failure by passing in a 1
        console.log(error) 
        process.exit(1)
    }
}

module.exports = connectDB