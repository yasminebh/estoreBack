const dotenv = require('dotenv').config()
const express= require('express')
//middleware package for try catch 
require('express-async-errors')

const app = express()
const dbConnect = require('./src/db/db')
const notFound = require('./src/middleware/notFound')
const errorHandlerMiddleware = require('./src/middleware/error-handler')
app.use(express.json())

PORT = process.env.PORT


const productsRoute = require('./src/routes/product')

app.use('/api/v1/products', productsRoute)


app.use(notFound)
app.use(errorHandlerMiddleware)


const start = async () => {
  try {
    dbConnect()
    app.listen(PORT, ()=> {
      console.log(`app is listening on ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
