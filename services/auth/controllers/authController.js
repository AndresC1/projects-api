const { login, register } = require('../models/authModel')
const { createUser } = require('../models/userModel');

async function loginAuth({ username, password }) {
    return await login(username, password);
}

async function registerUser(request) {
    return await register(request.user);
}

module.exports = {
    loginAuth,
    registerUser,
}
