'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('Pokemons', 'type', {
        allowNull: false,
        type: Sequelize.STRING
      })
      .then(result => {
        return queryInterface
          .addColumn('Pokemons', 'hp', {
            allowNull: false,
            type: Sequelize.INTEGER
          })
      })
      .then(result => {
        return queryInterface
          .addColumn('Pokemons', 'catched', {
            defaultValue: false,
            type: Sequelize.BOOLEAN
          })
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn('Pokemons', 'type')
      .then(result => {
        return queryInterface
          .removeColumn('Pokemons', 'hp')
      })
      .then(result => {
        return queryInterface
          .removeColumn('Pokemons', 'catched')
      })
  }
};
