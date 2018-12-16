const db_url = require('./private/db.js');

var configs = {
  BUILD: 0,
  VERSION: 1,
  PORT: 8080,
  ip_Address: 'http://127.0.0.1',

  mongodb_url : db_url,


  //Get by using config.testing()
  testing2 : function() {
    return 'test2';
  },

  debug_mode : true
}

module.exports = configs;
