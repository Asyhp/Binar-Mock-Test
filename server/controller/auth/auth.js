const { User } = require("../../models")
const { verifyJwtToken, createJwtToken } = require("../../utils/tokenHandler")

class AuthController {
    static register = async (req, res) => {
        try {
            const { name, email, password } = req.body

            const isEmailExist = await User.findOne({ where: { email }})
            if (isEmailExist) return res.status(409).json({ message: "Email already taken"})
            const isNameExist = await User.findOne({ where: { name }})
            if (isNameExist) return res.status(409).json({ message: " Name is already taken"})

            const payload = {
                name, email, password
            }
            const user = await User.create(payload)
            
            if (user) {
                return res.status(201).json({ message: "user has been created"})
            } else {
                res.status(400).json({ message: "bad request"})
            }
        } catch (error) {
            return res.status(500).json({ message: error.message})
        }    
    }

    static login = async (req, res, next) => {
        try {
            const { name, password} = req.body
            const user = await User.findOne({
                where: { name }
            })
            if (!user) return res.status(404).json({ message: "user not found"})
            const token = await createJwtToken({
                id: user.id,
                email: user.email
            })
            res.cookie("UserId", user.id, {
                httpOnly: true
            })
            res.cookie("token", token, {
                httpOnly: true
            })
            return res.status(200).json({
                id: user.id,
                name: user.name,
                message: `user ${name}, berhasil login`
            })
        } catch (error) {
            return res.status(500).json({ message: error })
        }
    }
}

module.exports = AuthController