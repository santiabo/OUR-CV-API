const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  const Curriculum = sequelize.define("curriculum",{

    language: {
      type: DataTypes.ENUM('english', 'spanish') 
    },
  }) 
  return Curriculum;
};