const { Data } = require('../../models')
module.exports = async (req,res,next) => {
    try {
        const id = req.params.id
        const deleteProduct = await Data.destroy({
            where: {id: id}
        })
        if(!deleteProduct) res.status(500).json({ message: 'id not found'})
        return res.status(200).json({ message: 'delete success'})
    } catch (error) {
        res.status(500).json({ message: 'internal server error' })
    }
}