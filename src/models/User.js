const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {

  const User = sequelize.define("user",{

    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        is: /^([a-zA-ZñÑáéíóúÁÉÍÓÚ_-])+((\s*)+([a-zA-ZñÑáéíóúÁÉÍÓÚ_-]*)*)+$/,
        len: [2, 40]
      }
    },
    title : {
      type: DataTypes.STRING
    },
    mobile: {
      type: DataTypes.STRING,
      defaultValue: "+541166735627",
      validate: {
        is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      }
    },

    city: {
      type: DataTypes.STRING,
      defaultValue: "Argentina"
    },
    avatar: {
      type: DataTypes.STRING(1000),
    }
  }); 
  return User;
};
