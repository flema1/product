var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/customers', function (req, res, next) {
  models.Customer.findAll({}).then(function (customers) {
    res.json(customers);
  });
});

module.exports = router;
