const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    accountNumber: String,
    emailAddress: String,
    identityNumber: String
});

// Create a virtual property 'id' which maps to '_id' field
userSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized when converting to JSON
userSchema.set('toJSON', { virtuals: true });

const User = mongoose.model('User', userSchema);

module.exports = User;