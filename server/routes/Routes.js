const Users_router = require('./Users');

module.exports = function(app) {
  //Home page
  app.all('/', (req,res) => {
    //res.sendFile(path.join(__dirname + '/client/index.html'));
    res.render('index');
  });

  //Users page
  app.use('/Users',Users_router);
}
