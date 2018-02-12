'use strict';

module.exports = function (sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    id: {
      autoIncrement:true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    token: {
      type:DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    //
    // last_login: {
    //   type: Sequelize.DATE
    // },
    // status: {
    //   type: Sequelize.ENUM('active', 'inactive'),
    //   defaultValue: 'active'
    // }
    //
    createTime: {
      type:  DataTypes.DATE,
      field: 'createTime'
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'customer'
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
//   Customer.associate = function (models) {
//     Customer.hasMany(models.Order, {
//       foreignKey: {
//         name: 'customerId',
//         field: 'customer_id',
//       },
//     });
//   }
  return Customer;
};
