const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
var products = require('./routes/products');
var customers = require('./routes/customers');
var cart = require('./routes/cart');

// var passportGitHub = require('./config/auth/github');

const app = express();
const env=require('dotenv').config();
app.use(logger('dev'));

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// static files
app.use(express.static('public'));
// static files, serving react build
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// views
//app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT} 00`);
});

app.get('/', (req, res) => {
  res.send('We are live!');
});

app.use('/', index);
app.use('/products', products);
app.use('/customers', customers);
app.use('/users', users);
app.use('/auth', auth);
app.use('/cart', cart);



app.get('*', (req, res) => {
    const err = new Error('not found!');
    res.status(404).send(err);
});
