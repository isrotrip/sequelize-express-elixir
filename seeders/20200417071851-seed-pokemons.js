'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    const pokemons = [
      {
        name: 'bulbasaur',
        type: 'grass',
        hp: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'charmander',
        type: 'fire',
        hp: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    return queryInterface.bulkInsert('Pokemons', pokemons, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Pokemons', null, {});
  }
};
