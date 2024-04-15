const express = require('express');
const { db } = require('./db.js');
require('dotenv').config({ path: '.env.local' });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(
    process.env.PORT || 3000,
    () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
)