'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Customer', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      createTime: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(2012, 11, 24),
        field: 'createTime'
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Customer'),
}
