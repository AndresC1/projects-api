const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env.local' });

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function checkJWT(req, res, next) {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if (!token) throw new Error('No autorizado')
        req.user = jwt.verify(token, JWT_SECRET_KEY);
        next();
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports = {
    checkJWT
};