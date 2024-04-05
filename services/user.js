const User = require('../models/user');

class UserService {
    static async createUser(username, accountNumber, emailAddress, identityNumber) {
        const user = new User({
            username,
            accountNumber,
            emailAddress,
            identityNumber
        });
        await user.save();
        return user;
    }

    static async getById(id) {
        const user = await User.findById( id );
        return user;
    }

    static async updateUser(userId, newData) {
        const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
        return updatedUser;
    }

    static async deleteUser(userId) {
        await User.findByIdAndDelete(userId);
    }
}

module.exports = UserService;
