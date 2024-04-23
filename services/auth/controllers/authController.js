const { login, register } = require('../models/authModel')

async function loginAuth({ username, password }) {
    return await login(username, password);
}

async function registerAuth(req, res) {
    const user = req.body;
    await register(user);
    res.json({ message: 'Usuario creado' });
}

module.exports = {
    loginAuth,
    registerAuth,
}
