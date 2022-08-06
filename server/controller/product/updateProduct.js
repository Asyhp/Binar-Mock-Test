const { Data } = require('../../models')
module.exports = async (req,res,next) => {
    try {
        const id = req.params.id
        const updateProduct = await Data.update(req.body,{
            where: {id: id}
        })
        const newProduct = await Data.findAll({ where: {id:id}})
        res.status(201).json({ message: 'update success', data: newProduct})
    } catch (error) {
        res.status(400).json(error)
    }
}