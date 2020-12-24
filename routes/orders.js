const express = require('express');

const { userById } = require('../middlewares/user');

const { create } = require('./../controllers/OrderController');

const router = express.Router();

router.post('/create/:userId', [requireSignIn, isAuth], create);


router.param('userId', userById);

module.exports = router;