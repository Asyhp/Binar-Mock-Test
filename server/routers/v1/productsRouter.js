const products = require('express').Router();
const addProduct = require('../../controller/product/addProduct');
const deleteProduct = require('../../controller/product/deleteProduct');
const getProductById = require('../../controller/product/getProductById');
const getProducts = require('../../controller/product/getProducts');
const updateProduct = require('../../controller/product/updateProduct');
const authentication = require('../../middleware/authentication')

products.use(authentication)
products.get("/", getProducts)
products.get("/:id", getProductById)
products.post("/", addProduct)
products.put("/:id", updateProduct)
products.delete("/:id", deleteProduct)

module.exports = products