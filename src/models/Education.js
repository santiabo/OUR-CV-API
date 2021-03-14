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
      type: DataTypes.STRING,  //Change to date, depending on datepicker.
    }
  }); 
  return Education;
};

