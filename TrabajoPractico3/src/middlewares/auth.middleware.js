const jwt = require('jsonwebtoken');
const { Paciente } = require('../models/sqlite/entities/paciente.entity.js');

module.exports = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    req.paciente=null;
    return next();    
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto123');
    const paciente = await Paciente.findByPk(decoded.id);

    if (!paciente) {
      return res.status(401).json('Paciente no encontrado');
    } 

      req.paciente = paciente;
      next();

    } catch (err) {
    res.status(401).json('Token inválido');
  }
};
