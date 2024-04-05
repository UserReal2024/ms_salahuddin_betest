const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true
    },
    accountNumber: {
        type: String,
        index: true,
        unique: true
    },
    emailAddress: {
        type: String,
        index: true,
        unique: true
    },
    identityNumber: {
        type: String,
        index: true,
        unique: true
    }
});

// Create a virtual property 'id' which maps to '_id' field
userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized when converting to JSON
userSchema.set('toJSON', {virtuals: true});

const User = mongoose.model('User', userSchema);

module.exports = User;