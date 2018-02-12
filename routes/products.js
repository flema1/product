
var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET products page. */
router.get('/all', function (req, res, next) {
  models.Product.findAll({}).then(function (products) {
    res.json(products);
  });
});

module.exports = router;
