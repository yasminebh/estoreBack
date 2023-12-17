const mongoose = require('mongoose')

URI = process.env.URI
const dbConnect = async ()=> {
  try {
    await mongoose.connect(URI)
          console.log('db connected')
  } catch (error) {
    console.log(error, 'failed to connect')
  }
}

module.exports= dbConnect