const express = require('express');
const router = express.Router();
const User_Controller = require('../controllers/Users.controller');

router.post('/login/', User_Controller.login);

router.post('/signup/', User_Controller.signup);

router.get('/allUsers/', User_Controller.listUsers);

router.delete('/deleteAll', User_Controller.deleteAll);

module.exports = router;
