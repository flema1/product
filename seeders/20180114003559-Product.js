'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Product', [{
        id: 1,
        title: "Shoe 1",
        category: "Shoe",
        price: 75.00,
        rating: 4.9,
        stock: 5,
        image: 'https://static.pexels.com/photos/19090/pexels-photo.jpg'
      },
      {
        id: 2,
        title: "Shoe 2",
        category: "Shoe",
        price: 75.00,
        rating: 4.0,
        stock: 3,
        image: 'https://static.pexels.com/photos/157932/shoe-canvas-sneakers-casual-157932.jpeg'
      },
      {
        id: 3,
        title: "Shoe 3",
        category: "Shoe",
        price: 90.00,
        rating: 5.0,
        stock: 7,
        image: 'http://www.publicdomainpictures.net/pictures/170000/velka/shoes-14636709703CI.jpg'
      },
      {
        id: 4,
        title: "Shoe 4",
        category: "Shoe",
        price: 78.00,
        rating: 4.0,
        stock: 9,
        image: 'http://www.publicdomainpictures.net/pictures/170000/velka/a-pair-of-hiking-boots.jpg'
      },
      {
        id: 5,
        title: "Shoe 5",
        category: "Shoe",
        price: 89.00,
        rating: 2.0,
        stock: 8,
        image: 'http://www.publicdomainpictures.net/pictures/60000/velka/walking-boots-on-white.jpg'
      },
      {
        id: 6,
        title: "Shoe 6",
        category: "Shoe",
        price: 90.00,
        rating: 4.0,
        stock: 7,
        image: 'http://www.publicdomainpictures.net/pictures/10000/velka/1-1243351582S85l.jpg'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Product', null, {})
};
