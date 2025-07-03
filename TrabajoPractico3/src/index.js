const Server = require('./server.js');
const { connectDB } = require('./models/sqlite/config/db.js');
const { Turno } = require('./models/sqlite/entities/turno.entity.js');
const { Paciente } = require('./models/sqlite/entities/paciente.entity.js');

connectDB();

Turno.belongsTo(Paciente, {
foreignKey: 'pacienteId',
as: 'paciente'
});

Paciente.hasMany(Turno, {
foreignKey: 'pacienteId',
as: 'turnos'
});

Paciente.sync()
.then(() => {
    console.log('🟢 Tabla Pacientes sincronizada');
    return Turno.sync();
})
.then(() => {
    console.log('🟢 Tabla Turnos sincronizada');
})
.catch(err => {
    console.error('🔴 Error al sincronizar modelos:', err);
});

const server = new Server();
server.listen();
