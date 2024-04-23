const { generateToken, verifyToken } = require('../utils/JWT');
const { comparePassword, encryptPassword } = require('../utils/bcrypt');
const { getUser, getAllInfoUser } = require('./userModel');

async function login(email, password) {
    const user = await getUser(email);
    const verificationPassword = await comparePassword(password, user.password);
    if (!verificationPassword) {
        throw new Error('Contraseña incorrecta');
    }
    const token = await generateToken(user);
    const AllInfoUser = await getAllInfoUser(user.id_user);
    return {
        token,
        expiresIn: 3600,
        user: {
            ...user,
        }
    }
}

async function register(user) {
    const userExists = await getUser(user.email);
    if (userExists) {
        throw new Error('Usuario ya existe');
    }
    user.password = await encryptPassword(user.password);
    return await createUser(user);
}

module.exports = {
    login,
    register,
};