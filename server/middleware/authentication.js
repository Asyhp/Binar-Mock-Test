
const { verifyJwtToken } = require('../utils/tokenHandler');

module.exports = (req, res, next) => {
    try {
      const { token } = req.cookies;
      if (!token) return res.status(401).json({ message: error.message });
      const data = verifyJwtToken(token);
      console.log(data);
      req.user = data;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };