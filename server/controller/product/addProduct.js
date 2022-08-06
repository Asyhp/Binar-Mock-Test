const { Data } = require('../../models')
module.exports = async (req,res,next) => {
    try {
        const product = await Data.create(req.body)
        res.status(201).json(product)
    } catch (err) {
        res.status(400).json(err)
    }
}