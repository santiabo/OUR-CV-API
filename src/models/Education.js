const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
 
  const Education = sequelize.define("education",{

    title: {
      type: DataTypes.STRING, 
    },
    place: {
      type: DataTypes.STRING,  
    },  
    date: {
      type: DataTypes.STRING, 
    }
  }) 
  return Education;
};

