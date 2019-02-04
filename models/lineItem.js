// 'use strict'
// const Sequelize = require('sequelize')
// const db = require('./index.js')


// module.exports = (db) => db.define('cartItem', {
//   quantity: {
//     type: Sequelize.INTEGER,
//     defaultValue: 1
//   },
//   price: {
//     type: Sequelize.DECIMAL(10, 2),
//   }

// })

// module.exports.associations = (CartItem, {Product, User, Order}) => {
//   CartItem.belongsTo(Product)
//   CartItem.belongsTo(Order)
// }



// ///


'use strict';
module.exports = function (sequelize, DataTypes) {
  var LineItem = sequelize.define('LineItem', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    }
    // ,
    // productId: {
    //   type: DataTypes.INTEGER,
    //   field: 'productId'
    // },
    // orderId: {
    //   type: DataTypes.INTEGER,
    //   field: 'orderId'
    // }
  },
  
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'LineItem'
  }
  );
  LineItem.associate = function (models) {
    LineItem.belongsTo(models.Order, {
      foreignKey: {
        name: 'orderId', //->
        field: 'order_id', //->
      }
    });
    LineItem.belongsTo(models.Product, {
      foreignKey: {
        name: 'productId', //->
        field: 'product_id', //->
      }
    });
  }

  return LineItem;
};

////






// 'use strict'

// const Sequelize = require('sequelize')
// const db = require('APP/db')
// const LineItem = db.define('lineItems', {
//   orderedPrice: {
//     type: Sequelize.INTEGER,
//     get: function(price){
//       let unformatted = this.getDataValue(price);
//       let formatted = unformatted / 100;
//       return formatted
//     }
//   },
//   quantity: {
//     type: Sequelize.INTEGER,
//     defaultValue: 1
//   },
// }, {
//   hooks: {
//     afterUpdate: function(lineItem){
//       if (lineItem.order_id) {
//         db.model('orders').findById(lineItem.order_id)
//           .then(order => {
//             let addition = (+order.totalPrice) + (+lineItem.orderedPrice);
//             return order.update({totalPrice: addition})
//           })
//           .catch(console.error)
//       }
//     }
//   },

//   scopes: {
//     default: {
//       include: [{all: true}]
//     }
//   }
// })


// module.exports = LineItem
