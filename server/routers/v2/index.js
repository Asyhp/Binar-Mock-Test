const product = require('./product');

const v2 = require('express').Router();

v2.get('/', (req, res) => {
    res.render("hello")
})

module.exports = v2