const { db } = require('../db');

async function getUser(username){
    try {
        return await db.findOne(
            'users',
            { username: username },
            { _id: 0 }
        );
    } catch (error) {
        throw new Error('Usuario no encontrado');
    }
}

async function createUser(user){
    try {
        const dataUser = {
            id_user: await generateUserId(
                user.username
            ),
            ...user,
            api_key: '',
            status: 'active',
            created_at: new Date(),
            updated_at: new Date(),
            deleted_at: null,
            email_verified: false,
            is_visible: true,
            is_active: true,
            is_deleted: false,
            is_admin: false,
            is_superadmin: false,
            is_verified: true,
            is_blocked: false,
            is_suspended: false,
            is_banned: false,
            is_logged: false,
        }
        return await db.insertOne('users', dataUser);
    } catch (error) {
        throw new Error('Error al crear usuario');
    }
}

async function generateUserId(letters){
    try{
        const number = Math.floor(Math.random() * 10000);
        const date = new Date();
        return `${letters}${number}${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
    } catch (error) {
        throw new Error('Error al generar id de usuario');
    }
}

async function getAllInfoUser(id_user){
    try {
        const contact = await db.findOne('contacts_users', { id_user });
        const education = await db.findOne('education_users', { id_user });
        const experience = await db.findOne('experience_users', { id_user });
        const skills = await db.findOne('skills_users', { id_user });
        const projects = await db.findOne('projects_users', { id_user });
        const settings = await db.findOne('settings_users', { id_user });
        return {
            contact,
            education,
            experience,
            skills,
            projects,
            settings
        };
    } catch (error) {
        throw new Error('Usuario no encontrado');
    }
}

module.exports = {
    getUser,
    createUser,
    getAllInfoUser
};