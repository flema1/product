'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Order', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createTime: {
        type: Sequelize.INTEGER,
      },
      customerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Customer',
          key: 'id'
        }
      },
    }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'order',

    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Order'),
}
