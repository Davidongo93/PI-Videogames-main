const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    release:{
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    genre:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  {timestamps:false}
  );
};
