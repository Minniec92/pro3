const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db.js');

const Paciente = sequelize.define('Paciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING
});

module.exports = { Paciente };
