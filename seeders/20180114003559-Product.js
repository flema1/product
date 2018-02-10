'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Product',[{
          id: 1,
          title: "Shoe 1",
          category: "Shoe",
          price: 75.00,
          rating: 4.9,
          stock: 5
          },
          {
          id:2,
          title: "Shoe 2",
          category: "Shoe",
          price: 75.00,
          rating: 4.0,
          stock: 3
          },
          {
          id: 3,
          title: "Shoe 3",
          category: "Shoe",
          price: 90.00,
          rating: 5.0,
          stock: 7
          },
          {
          id: 4,
          title: "Shoe 4",
          category: "Shoe",
          price: 78.00,
          rating: 4.0,
          stock: 9
          },
          {
          id: 5,
          title: "Shoe 5",
          category: "Shoe",
          price: 89.00,
          rating: 2.0,
          stock: 8
          },
          {
          id: 6,
          title: "Shoe 6",
          category: "Shoe",
          price: 90.00,
          rating: 4.0,
          stock: 7
          }], {});
  
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Product', null, {})
};
