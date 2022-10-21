import express, { json, urlencoded } from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorMiddleware'
import connectDB from './config/db'
const port = process.env.PORT || 5000

dotenv.config()

connectDB()

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))

app.use('/api/questions', import ('./routes/questionRoutes').default)

app.use('/api/answers', import ('./routes/answerRoutes'))

app.use('/api/users', import ('./routes/userRoutes').default)


app.use(errorHandler)
app.listen(port, () => console.log(`Its hot on port: ${port}`))