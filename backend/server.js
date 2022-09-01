const express = require('express')
const dotenv =  require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use('/api/questions', require('./routes/questionRoutes'))

app.use('/api/answers', require('./routes/answerRoutes'))


module.exports = app