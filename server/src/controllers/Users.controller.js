const User = require('../models/Users.model');
const logger = require('../utils/logger');

let datas;

exports.signup = (req, res, next) => {
  res.status(200);
  if (req.body.email && req.body.password) {
    let UserData = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    };
    logger.console(UserData + ' registered');

    User.create(UserData, function(err, user) {
      if (err) {
        // logger.console('err: ', err);
        return logger.sendResponse(true, 'Insertion error', req, res);
      } else {
        datas = 'No error,successfully inserted';
        return logger.sendResponse(false, 'Registered successfully', req, res);
      }
    });
  } else {
    return logger.sendResponse(true, 'incorrect input', req, res);
  }
};

exports.login = (req, res) => {
  if (req.body.email && req.body.password) {
    let user = req.body.email;
    let passwd = req.body.password;
    // logger.console(user + ' tried to log in');
    User.authenticate(user, passwd, (err, user) => {
      if (err || !user) {
        logger.sendResponse(true, err, req, res);
      } else {
        logger.sendResponse(false, user.email, req, res);
      }
    });
  } else {
    let error = 'Please enter username and password';
    logger.sendResponse(true, error, req, res);
  }
};

exports.listUsers = (req, res) => {
  User.find()
    .sort({ _id: -1 })
    .limit(50)
    .exec(logger.ParseCallback);
};

exports.deleteAll = (req, res) => {
  User.findOneAndDelete(req.params.id, logger.ParseCallback);
};

// module.exports = {
//     DLook: DLook,
//   };
// const Axios = require('../../utils/axiosClass.js');
// const axios = new Axios();
