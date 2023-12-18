require('dotenv').config()
const dbConnect = require('./src/db/db')
const Product = require('./src/models/product')

const jsonProduct = require('./products.json')



const start = async () => {
try {
  await dbConnect()
  await Product.deleteMany();
  await Product.create(jsonProduct)
  console.log('success')
  process.exit(0)
} catch (error) {
  console.log(error)
  process.exit(1)

}
}

start()