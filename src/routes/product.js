const route = require('express').Router()
const {getAllProductStatic,getAllProduct} = require("../controllers/product")
route.get("/static", getAllProductStatic)
 route.get("/",getAllProduct )
//route.post("", )
//route.put("", )
//route.delete('',) 
module.exports = route