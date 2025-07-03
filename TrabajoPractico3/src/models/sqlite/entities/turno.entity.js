const { DataTypes } = require('sequelize');
const { sequelize } = require('./../config/db.js');

const Turno = sequelize.define('Turno', {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
},
hora: {
    type: DataTypes.STRING,
    allowNull: false
},
pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: false
}
}, {
tableName: 'turnos',
timestamps: false
});

module.exports = { Turno };
