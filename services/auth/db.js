const { MongoDB } = require('./utils/MongoDB.js');
require('dotenv').config({ path: '.env.local' });

const url = process.env.DATABASE_URL;
const nameDB = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbPassword = process.env.DATABASE_PASSWORD;

const db = new MongoDB(url, nameDB, dbUser, dbPassword);

module.exports = {
    db,
};