const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Passion = sequelize.define("passion",{
    area: {
      type: DataTypes.STRING, 
    },
    description: {
      type: DataTypes.STRING,  
    }  
  }); 
  return Passion;
};