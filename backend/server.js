const express = require('express')
const dotenv =  require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/questions', require('./routes/questionRoutes'))

app.use('/api/answers', require('./routes/answerRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Its hot on port: ${port}`))