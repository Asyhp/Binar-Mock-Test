const { Data } = require('../../models')

module.exports = async (req,res) => {
    try {
        const products = await Data.findAll({
            order: [["id", 'ASC']]
        })
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ message: 'internal server error'})
    }
}
