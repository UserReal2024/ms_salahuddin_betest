const bcrypt = require('bcryptjs');
const JwtUtils = require('../utils/jwt');
const User = require('../models/user');

class AuthService {
    static async createJwtToken(username) {
        return await JwtUtils.generateToken({username});
    }
}

module.exports = AuthService;
