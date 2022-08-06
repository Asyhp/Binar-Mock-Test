const auth = require('express').Router()
const AuthController = require('../../controller/auth/auth')
const { validatorHandler } = require('../../middleware/validatorJoi')
const { registerUserSchema, loginUserSchema } = require('../../utils/validationSchema')

auth.post("/register", validatorHandler(registerUserSchema, "body"), AuthController.register)
auth.post("/login", validatorHandler(loginUserSchema, "body"), AuthController.login)

module.exports = auth