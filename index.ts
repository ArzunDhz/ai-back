
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { db } from './utils/db-server'
import Imagerouter from './routes/imageRoute'


dotenv.config()

const app = express()
app.use(express.json())
const PORT: number = parseInt(process.env.PORT!)

app.use(cors(
    {
        origin: ['http://localhost:3000'],
        methods: '*'
    }
))
app.post('/api/generate',)


app.use('/api/', Imagerouter)

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})