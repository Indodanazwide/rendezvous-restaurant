import express from 'express'
import cors from 'cors'
import db from '../database/db.js'
import dotenv from 'dotenv'
import router from '../routes/router.js'

dotenv.config()

const server = express()
const port = process.env.PORT

server.use(express.json())
server.use(cors({ origin: 'http://localhost:5173/' }))

server.use('/', router)

server.listen(port, () => {
    console.log('Server running on port: ', port)
})