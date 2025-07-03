const { Paciente } = require('../sqlite/entities/paciente.entity.js');

const obtenerTodos = async () => {
  return await Paciente.findAll();
};

const buscarPorDni = async (dni) => {
  return await Paciente.findOne({ where: { dni } });
};

const crear = async (data) => {
  console.log('Creando paciente con datos:', data);
  return await Paciente.create(data);
};

const eliminar = async (id) => {
  return await Paciente.destroy({ where: { id } });
};

const actualizar = async (id, data) => {
  return await Paciente.update(data, { where: { id } });
};

const buscarPorId = async (id) => {
  return await Paciente.findByPk(id);
};

module.exports = {
  obtenerTodos,
  buscarPorDni,
  crear,
  eliminar,
  actualizar,
  buscarPorId
};
