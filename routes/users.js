const express = require('express');
const { hello, signup, signin, signout } = require('../controllers/userController');
const { userSignUpValidator } = require('../middlewares/userValidator');
const router = express.Router();

router.get('/', hello);


router.post('/signup', userSignUpValidator, signup);

router.post('/signin', signin);

router.get('/signout', signout);


module.exports = router;