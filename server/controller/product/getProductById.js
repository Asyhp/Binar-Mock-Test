const { Data } = require('../../models')

module.exports = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Data.findByPk(id)
        res.status(200).json(product)
    } catch(error) {
        res.status(500).json({ message: 'internal server error' })
    }
}