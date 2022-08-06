const product = require('express').Router()
const authentication = require('../../middleware/authentication')

product.use(authentication)
product.get("/", (req, res) => {
    res.render("hello there")
})

module.exports = product