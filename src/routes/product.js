const route = require('express').Router()
const {getAllProductStatic} = require("../controllers/product")
route.get("/static", getAllProductStatic)
/* route.get("", )
route.post("", )
route.put("", )
route.delete('',) */
module.exports = route