'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL(5, 2),
    rating: DataTypes.DECIMAL(2, 1),
    stock: DataTypes.INTEGER, 
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'product'
  }, {
  });
//  Product.associate = function(models) {
//         Product.hasMany(models.Review, {
//           foreignKey: {
//             name: 'reviewId',//->
//             field: 'review_id',//->
//           }
//         });
//       }  

// Product.associate = function(models) {
//         Product.hasMany(models.LineItem, { 
//           foreignKey: {
//             field: 'product_id',
//             name: 'productId',
//           }
//         });


//       }

  return Product;
};


