const { Turno } = require("./entities/turno.entity.js");
const { Paciente } = require("./entities/paciente.entity.js");

const buscarPorPaciente = async (pacienteId) => {
return await Turno.findAll({ where: { pacienteId } });
};

const eliminar = async (id) => {
return await Turno.destroy({ where: { id } });
};

const buscarPorFechaYHora = async (fecha, hora) => {
return await Turno.findOne({ where: { fecha, hora } });
};

const crear = async (data) => {
return await Turno.create(data);
};

const obtenerConPacientes = async () => {
return await Turno.findAll({
    include: {
    model: Paciente,
    as: "paciente",
    },
});
};

const buscarPorId = async (id) => {
    return await Turno.findByPk(id);
};

const actualizar = async (id, data) => {
    return await Turno.update(data, { where: { id } });
};

module.exports = {
    buscarPorPaciente,
    eliminar,
    buscarPorFechaYHora,
    crear,
    obtenerConPacientes,
    buscarPorId,
    actualizar,
};
