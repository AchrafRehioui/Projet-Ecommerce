const express = require('express');

const { userById, addProductsToUserHistory } = require('../middlewares/user');

const { decreaseQuantity } = require('./../middlewares/product');

const { orderById } = require('./../middlewares/order');

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

const { create, listOrders, getStatus, updateOrderStatus } = require('./../controllers/OrderController');

const router = express.Router();

router.get('/:userId', [requireSignIn, isAuth, isAdmin], listOrders);

router.get('/status/:userId', [requireSignIn, isAuth, isAdmin], getStatus);

router.patch('/:orderId/status/:userId', [requireSignIn, isAuth, isAdmin], updateOrderStatus);

router.post('/create/:userId', [requireSignIn, isAuth, addProductsToUserHistory, decreaseQuantity], create);

router.param('orderId', orderById);
router.param('userId', userById);

module.exports = router;