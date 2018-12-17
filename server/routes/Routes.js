const Users_router = require('./Users');
const path = require('path');

module.exports = function(app) {
  //Home page
  app.all('/', (req,res) => {
    //res.sendFile(path.join(__dirname + '/client/index.html'));
    res.render('index');
  });

  //Users page
  app.use('/Users',Users_router);

  //The 404 Route (ALWAYS Keep this as the last route)
  app.get('*', (req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname + '/../views/404.html'));
    //res.send(JSON.parse('{ "response": "error", "error":"Page not found" }'));
  });
}
