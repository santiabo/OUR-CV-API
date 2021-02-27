const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  const Skill = sequelize.define("skill",{

    area: {
      type: DataTypes.STRING, 
    },
    tools: {
      type: DataTypes.STRING,  
    }
  }) 
  return Skill;
};