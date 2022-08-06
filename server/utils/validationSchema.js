const Joi = require('joi')

const name = Joi.string().min(3).max(15)
const email = Joi.string()
const password = Joi.string().min(3)

const registerUserSchema = Joi.object({
    email: email.required(),
    name: name.required(),
    password: password.required()
})

const loginUserSchema = Joi.object({
    name: name,
    password: password.required()
})

module.exports = {
    registerUserSchema,
    loginUserSchema
}