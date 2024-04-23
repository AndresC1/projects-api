const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env.local' });

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function generateToken(info) {
    try{
        return jwt.sign(info, JWT_SECRET_KEY, { expiresIn: '1h' });
    } catch (error) {
        throw new Error('Error al generar token');
    }
}

function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET_KEY);
    } catch (error) {
        throw new Error('Error al verificar token');
    }
}

module.exports = {
    generateToken,
    verifyToken,
};