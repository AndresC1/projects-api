const { body, validationResult } = require('express-validator');

const StoreUserRequest = [
    body('user').exists().withMessage('No se ha enviado un usuario'),
    body('user.username').exists().withMessage('El usuario debe de tener un nombre de usuario'),
    body('user.password').exists().withMessage('El usuario debe de tener una contraseña'),
    body('user.email').exists().withMessage('El usuario debe de tener un correo electrónico'),
    body('user.name').exists().withMessage('El usuario debe de tener un nombre'),
    body('user.city').exists().withMessage('El usuario debe de tener una ciudad'),
    body('user.country').exists().withMessage('El usuario debe de tener un país'),
    body('user.age').exists().withMessage('El usuario debe de tener una edad'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    StoreUserRequest
}