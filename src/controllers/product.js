const Product= require('../models/product')


const getAllProductStatic = async (req, res) => {
  const products = await Product.find({featured: true})
  res.status(200).json({products , nbHits: products.length})
};

const getAllProduct = async (req, res) => {
  res.status(200).json({msg: "testing route"})
}
module.exports = {
  getAllProductStatic,
  getAllProduct
}