const bcrypt = require('bcrypt');
require('dotenv').config({ path: '.env.local' });

async function encryptPassword(password) {
    try {
        const saltRounds = parseInt(process.env.SALT_ROUNDS);
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Error al encriptar contraseña');
    }
}

async function comparePassword(password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        throw new Error('Error al comparar contraseñas');
    }
}

module.exports = {
    encryptPassword,
    comparePassword,
};