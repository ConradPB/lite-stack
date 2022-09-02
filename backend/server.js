const express = require('express')
const dotenv =  require('dotenv').config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use('/api/questions', require('./routes/questionRoutes'))

app.use('/api/answers', require('./routes/answerRoutes'))



module.exports = app