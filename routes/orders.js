const express = require('express');

const { userById, addProductsToUserHistory } = require('../middlewares/user');

const { decreaseQuantity } = require('./../middlewares/product');

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

const { create, listOrders, getStatus } = require('./../controllers/OrderController');

const router = express.Router();

router.get('/:userId', [requireSignIn, isAuth, isAdmin], listOrders);
router.get('/status/:userId', [requireSignIn, isAuth, isAdmin], getStatus);

router.post('/create/:userId', [requireSignIn, isAuth, addProductsToUserHistory, decreaseQuantity], create);

router.param('userId', userById);

module.exports = router;