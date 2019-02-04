'use strict';
module.exports = function (sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    //
    status: {
      type: DataTypes.ENUM('pending', 'on its way', 'sent', 'canceled', 'created'),
      defaultValue: 'created'
    },
    shippingDate: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    Street: {
      type: DataTypes.STRING,
    },
    Apartment: {
      type: DataTypes.STRING,
    },
    State: {
      type: DataTypes.ENUM('Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode')
    },
    City: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.INTEGER
      // validation: {
      //  len: [5]
      // }
    }
    //,
    //
    // createTime: {
    //   type: DataTypes.INTEGER,
    //   // field: 'create_time',
    // },
    // customerId: {
    //   type: DataTypes.INTEGER,
    //   //field: 'customer_id'
    // }
  }, {
    timestamps: false,
    freezeTableName: true,
    classMethods: {
        associate: function(models) {
           Order.belongsTo(models.Customer, {
      foreignKey: {
        name: 'customerId',
        field: 'customer_id',
      }
    });

    Order.hasMany(models.LineItem, {
      foreignKey: {
        name: 'lineItem',
        field: 'line_item',
      }
    });


        }




    },



    tableName: 'order',
  });
//   Order.associate = function (models) {
//     Order.belongsTo(models.Customer, {
//       foreignKey: {
//         name: 'customerId',
//         field: 'customer_id',
//       }
//     });

//     Order.hasMany(models.LineItem, {
//       foreignKey: {
//         name: 'lineItem',
//         field: 'line_item',
//       }
//     });

   

//   }
  return Order;
};




// module.exports.associations = (Order, {User, CartItem, Payment, Product}) => {
//   Order.belongsTo(User)
//   Order.hasMany(CartItem)
// }