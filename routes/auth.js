var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport')
require('../config/auth/local.js')(passport);
//var passportGitHub = require('../config/auth/github');


router.post('/register', function (req, res, next) {
  passport.authenticate('local-signup', function (err, user, info) {
    if (err) {
      res.status(500).send('Something broke!');
      return next(err);
    }
    if (!user) {
      // res.status(400).send('User already exists');
      res.status(401).json({
        message: 'User already exists'
      });
      return next(err);
    }
    if (user) {
      console.log('ready');
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json(user);
      });
    }
  })(req, res, next);
});


/* LOGIN ROUTER */
router.post('/signin', function (req, res, next) {
  passport.authenticate('local-signin', function (err, user, info) {
    if (err) {
      res.status(500).send('Something broke!');
      return next(err);
    }
    if (!user) {
      // res.status(400).send('User already exists');
      res.status(400).json({
        message: 'Oops! Wrong password.'
      });
      return next(err);
    }
    if (user) {
      console.log('ready');
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        return res.json(user);
      });
    }
  })(req, res, next);
});


router.post('/checkAuth', function (req, res, next) {
  models.Customer.find({
    where: {
      token: req.body.token
    }
  }).then(function (customers) {
    res.json({
      id: customers.id,
      firstName: customers.firstName,
      lastName: customers.lastName,
      token: customers.token
    })
  });
});

/* GET Home Page */
router.get('/checkloggedIn', function (req, res, next) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated())
    return next();
  //res.redirect('/');
}, function (req, res) {
  console.log(req.user, 'user ')
  res.json({
    user: req.user
  })
});


// var isAuthenticated = function (req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.redirect('/');
// }



/* GITHUB ROUTER */
router.get('/github',
  passport.authenticate('github', {
    scope: ['user:email']
  }));



router.get('/github/callback', passport.authenticate('github'),
  function (req, res) {
    // Successful authentication, redirect home.;
    res.redirect('http://localhost:3000/products');
  });

router.get('/logout', (req, res) => {

  //res.redirect('/');
  req.logout();
  res.redirect('http://localhost:3000/home');
});


module.exports = router;
