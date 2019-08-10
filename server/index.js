const config = require('./config.js');
const router = require('./src/routes/Routes');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');

//Connect to mongodb
const MongoDb = config.database;
mongoose.connect(MongoDb, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDb connection error'));
console.log('MongoDB connected: ' + config.database);

//Use CORS
app.use(cors());
app.options('*', cors());

//BodyParser and logger with morgan
app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// default options
app.use(fileUpload());

// serve static files from template
app.use('/public', express.static('./public/'));

//Set up a render engine which is ejs
app.engine('html', require('ejs').renderFile);
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Enable cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

//Start router
router(app);

//Start server
app.listen(config.PORT, function() {
  console.log('Started server on: ' + config.PORT + '\n\n');
});
