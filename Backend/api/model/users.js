const mongoose = require('mongoose');
const { userSchema } = require('../schema/user.schema.js');

//Create user model

const User = mongoose.model('User', userSchema);

module.exports = { User }