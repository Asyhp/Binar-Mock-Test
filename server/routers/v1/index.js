const auth = require('./authRouter');
const products = require('./productsRouter');

const v1 = require('express').Router();

v1.use('/', auth)
v1.use('/products', products)

module.exports = v1