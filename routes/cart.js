
var express = require('express');
var router = express.Router();
var models = require('../models');

/* POST item to cart  */
router.get('/add', function (req, res, next) {
    // let price = Number(req.body.price)
	// let product_id = req.body.productId
    // let order_id = req.body.orderId
	// let quantity = req.body.quantity
	// let newCartItem = { price: price, product_id: product_id, order_id: order_id, quantity: quantity }

    //let price = '89'
	// let product_id =  '1'
    // let order_id = '1'
	// let quantity = "1"
	// let newCartItem = { /*price: price,*/ product_id: product_id, order_id: order_id, quantity: quantity }
    // models.LineItem.find({
	// 		where: {
	// 			order_id: order_id,
	// 			product_id: product_id
	// 		}
	// 	}).then(cart => {
	// 			if (!cart) {
    //                 console.log('nah--------------')
    //             }})
    //              .catch(err => console.log(err))


//   models.LineItem.findAll({}).then(function (products) {
//     res.json(products);
//   });

 models.LineItem.findAll({}).then(cart => console.log(JSON.parse(JSON.stringify(cart))));

});

module.exports = router;
