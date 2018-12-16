var express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const path = require('path');

//Connect to mongodb
const MongoDb = process.env.MONGODB_URI || config.mongodb_url;
mongoose.connect(MongoDb, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDb connection error'));

//Connect to express
var app = express();

//Set up a render engine which is ejs
app.set('view engine', 'ejs');
app.set('views', 'server/views/ejs');


//Home page
app.all('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

//Home page
app.all('/hello', (req,res) => {
  res.render('index');
});

app.listen(config.PORT, function(){
  console.log("Started server at: "+config.ip_Address+":"+config.PORT);
});
