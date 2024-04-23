const express = require('express');
require('dotenv').config({ path: '.env.local' });
const { authRoutes } = require('./routes/authRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/v1/auth', authRoutes);

app.listen(
    process.env.PORT || 3000,
    () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
)