const express = require('express');
const { hello, signup, signin, signout } = require('../controllers/userController');
const { userSignUpValidator } = require('../middlewares/userValidator');
const { requireSignIn } = require('../middlewares/auth');
const router = express.Router();

router.get('/', hello);

router.post('/signup', userSignUpValidator, signup);

router.post('/signin', signin);

router.get('/signout', signout);

router.get("/hello", requireSignIn, (req, res) => {
    res.send('hello there');
})

module.exports = router;