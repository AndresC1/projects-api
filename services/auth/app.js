const express = require('express');
const { db } = require('./db.js');
require('dotenv').config({ path: '.env.local' });
const { authRoutes } = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(authRoutes);

app.get('/api/v1/db', async (req, res) => {
    try{
        await db.connect();
        res.status(200).json("Conectado correctamente");
    } catch (error){
        res.status(500).send(error);
    }
});

app.get('/api/v1/db/users', async (req, res) => {
    try{
        const request = {
            query: req.query
        }
        const data = await db.findAll("users");
        res.status(200).json(data);
    } catch (error){
        res.status(500).send(error);
    }
})

app.listen(
    process.env.PORT || 3000,
    () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
)