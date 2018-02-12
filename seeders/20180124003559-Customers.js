'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Customer', [{
        id: 1,
        firstName: 'user1_firstName',
        lastName: 'user1_lastName',
        email: 'user1@gmail.com',
        password: 'password',
        createTime: '2016-08-09 04:05:02'
      },
      { id: 2,
        firstName: 'user2_firstName',
        lastName: 'user2_lastName',
        email: 'user2@gmail.com',
        password: 'password',
        createTime: '2016-08-09 04:05:02'
      },
      {
        id: 3,
        firstName: 'user3_firstName',
        lastName: 'user3_lastName',
        email: 'user3@gmail.com',
        password: 'password',
        createTime: '2016-08-09 04:05:02'
      },
      {
        id: 4,
        firstName: 'user4_firstName',
        lastName: 'user4_lastName',
        email: 'user4@gmail.com',
        password: 'password',
        createTime: '2016-08-09 04:05:02'
      },
      {
        id: 5,
        firstName: 'user5_firstName',
        lastName: 'user5_lastName',
        email: 'user5@gmail.com',
        password: 'password',
        createTime: '2016-08-09 04:05:02'
      }
    ], {});

  },

  down: function (queryInterface, Sequelize) {


    return queryInterface.bulkDelete('Customer', null, {});
  }
};
