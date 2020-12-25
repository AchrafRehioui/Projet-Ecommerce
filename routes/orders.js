const express = require('express');

const { userById, addProductsToUserHistory } = require('../middlewares/user');

const { decreaseQuantity } = require('./../middlewares/product');

const { requireSignIn, isAuth } = require('../middlewares/auth');

const { create } = require('./../controllers/OrderController');

const router = express.Router();

router.post('/create/:userId', [requireSignIn, isAuth, addProductsToUserHistory, decreaseQuantity], create);

router.param('userId', userById);

module.exports = router;