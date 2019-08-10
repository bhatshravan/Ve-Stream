const Users_router = require('./Users.route');
const path = require('path');

module.exports = function(app) {
  //Home page
  app.all('/', (req, res) => {
    res.render('index');
  });

  app.use('/api/users/', Users_router);

  app.all('/api/*', (req, res) => {
    res.status(404).json({ success: false, message: 'Page not found' });
  });

  //The 404 Route (ALWAYS Keep this as the last route)
  app.all('*', (req, res) => {
    res.status(404);
    res.render('../views/404.html');
  });
};

// res.sendFile(path.join(__dirname + '/../views/404.html'));
//res.send(JSON.parse('{ "response": "error", "error":"Page not found" }'));
//res.sendFile(path.join(__dirname + '/client/index.html'));
