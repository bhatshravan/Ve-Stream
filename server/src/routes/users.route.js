const express = require('express');
const router = express.Router();
const User_Controller = require('../controllers/Users.controller');

router.all('/login/', User_Controller.login);

router.post('/signup/', User_Controller.signup);

router.get('/Ligin', (req, res) => {
  res.render('Users/login');
});

module.exports = router;
