const express= require('express')
const dotenv = require('dotenv').config()
const dbConnect = require('./src/db/db')
const app = express()
dbConnect()
app.use(express.json())

PORT = process.env.PORT





app.listen(PORT, ()=> {
  console.log(`app is listening on ${PORT}`)
})