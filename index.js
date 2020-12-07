const express = require('express');
const mongoose = require('mongoose');


//Import Routes
const userRoutes = require('./routes/users');


const app = express();
require('dotenv').config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('db connected'))
    .catch(() => console.log('not connect to the database !'))


//Routes Middleware
app.use('/api/users', userRoutes);




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`));