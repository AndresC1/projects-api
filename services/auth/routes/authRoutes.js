const express = require('express');
const { loginAuth, registerUser } = require('../controllers/authController');
const { checkJWT } = require('../middlewares/checkJWT');
const { StoreUserRequest } = require('../Requests/StoreUserRequest');

const authRoutes = express.Router();

authRoutes.post('/login', async (req, res) => {
    try{
        const request = {
            username: req.body.username,
            password: req.body.password
        }
        const token = await loginAuth(request);
        res.status(200).json(token);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

authRoutes.post('/register', StoreUserRequest, async (req, res) => {
    try{
        const request = {
            user: req.body.user
        }
        await registerUser(request);
        return res.json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = {
    authRoutes
};