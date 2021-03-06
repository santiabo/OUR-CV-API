const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 
  const Experience = sequelize.define("experience",{
    position: {
      type: DataTypes.STRING, 
    },
    place: {
      type: DataTypes.STRING,  
    },  
    date: {
      type: DataTypes.STRING,  //Change to date, depending on datepicker.
    },
    info: {
      type: DataTypes.TEXT,
    }
  }) 
  return Experience;
};