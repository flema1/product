var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res,next) {
    models.Product.findAll({
    }).then(function(products){
        res.json(products);
    });
});

module.exports = router;
