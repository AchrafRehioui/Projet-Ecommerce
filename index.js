const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');



//Import Routes
const authRoutes = require('./routes/auth');

//Config App
const app = express();
require('dotenv').config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('db connected'))
    .catch(() => console.log('not connect to the database !'))


//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(expressValidator())



//Routes Middleware
app.use('/api', authRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`));