'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Pokemon extends Model {}

  Pokemon.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    catched: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Pokemon'
  });
  
  Pokemon.associate = function(models) {
    // associations can be defined here
  };
  
  return Pokemon;
};