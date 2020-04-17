'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn('Pokemons', 'name', {
        allowNull: false,
        type: Sequelize.STRING
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn('Pokemons', 'name', {
        type: Sequelize.STRING
      }) 
  }
};
