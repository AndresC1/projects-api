const express = require('express');
const { loginAuth, registerAuth } = require('../controllers/authController');
const { checkJWT } = require('../middlewares/checkJWT');

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

module.exports = {
    authRoutes
};