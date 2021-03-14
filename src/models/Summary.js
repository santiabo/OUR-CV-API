const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Summary = sequelize.define("summary",{
    description: {
      type: DataTypes.STRING, 
    }
  }); 
  return Summary;
};