const db_url = require('./private/db.js');

var configs = {
  mongodb_url : db_url,

  //Get by using config.testing()
  testing2 : function() {
    return 'test2';
  },

  debug_mode : true
}

module.exports = configs;
