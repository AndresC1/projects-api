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
        return await db.insertOne('users', user);
    } catch (error) {
        throw new Error('Error al crear usuario');
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