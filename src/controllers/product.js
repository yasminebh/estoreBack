const Product = require("../models/product");

const getAllProductStatic = async (req, res) => {
  const products = await Product.find({ featured: true }).sort('name').select('name , price')
  //.limit(4).skip(2);
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProduct = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);
  let result = Product.find(queryObject);
// sorting our data
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
// selecting fields by name price ..
  if (fields) {
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
// pagination
  const page = Number(req.query.page) || 1 
  const limit = Number(req.query.limit) || 10
  const skip = (page -1) * limit;

  result = result.skip(skip).limit(limit)

  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};
module.exports = {
  getAllProductStatic,
  getAllProduct,
};
