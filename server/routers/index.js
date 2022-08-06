const api = require('express').Router();
const v1 = require('./v1')
const v2 = require('./v2')

api.use('/api/v1', v1)
api.use('/api/v2', v2)

module.exports = api