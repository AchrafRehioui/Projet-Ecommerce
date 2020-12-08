const express = require('express');
const { hello, signup } = require('../controllers/userController');
const { userSignUpValidator } = require('../middlewares/userValidator');
const router = express.Router();

router.get('/', hello);


router.post('/signup', userSignUpValidator, signup)


module.exports = router;