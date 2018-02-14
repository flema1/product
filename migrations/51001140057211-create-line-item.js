'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('LineItem', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      }, price: {
        type: Sequelize.DECIMAL
      },
      // productId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Product',
      //     key: 'id'
      //   }
      // },
      // orderId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Order',
      //     key: 'id'
      //   }
      // },
      quantity: {
        type: Sequelize.INTEGER,
      },
      unitPrice: Sequelize.DECIMAL(5, 2),

    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('LineItem'),
}
