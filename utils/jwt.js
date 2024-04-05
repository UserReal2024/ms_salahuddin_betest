const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/jwt');

class JwtUtils {
    static generateToken(payload) {
        return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    }

    static verifyToken(token) {
        return jwt.verify(token, jwtSecret);
    }
}

module.exports = JwtUtils;
