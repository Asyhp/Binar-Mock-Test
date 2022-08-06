const jwt = require('jsonwebtoken')

const createJwtToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

const verifyJwtToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) return err;
        return data
        
    })
}

module.exports = {
    createJwtToken,
    verifyJwtToken
}