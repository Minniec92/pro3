const { Router } = require('express');
const viewController = require('../controllers/views.controller.js');
const apiController = require('../controllers/API/turnos.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');
const adminMiddleware = require('../middlewares/admin.middleware.js');

const rutaTurnos = Router();

rutaTurnos.get('/', authMiddleware, viewController.renderListaTurnos);

rutaTurnos.get('/nuevo', (req, res, next) => {
const isAdmin = req.cookies.admin === 'true';
if (isAdmin) return next();
return authMiddleware(req, res, next);
}, (req, res, next) => {
const isAdmin = req.cookies.admin === 'true';
if (isAdmin || req.paciente) return next();
return res.status(401).send('Acceso no autorizado');
}, viewController.renderNuevoTurno);

rutaTurnos.post('/', (req, res, next) => {
const isAdmin = req.cookies.admin === 'true';
if (isAdmin) return next();
return authMiddleware(req, res, next);
}, (req, res, next) => {
const isAdmin = req.cookies.admin === 'true';
if (isAdmin || req.paciente) return next();
return res.status(403).send('Acceso denegado');
}, apiController.crearTurno);

rutaTurnos.get('/editar/:id', adminMiddleware, viewController.renderEditarTurno);
rutaTurnos.get('/:idPaciente', adminMiddleware, apiController.obtenerPorPaciente);
rutaTurnos.put('/:idTurno', adminMiddleware, apiController.update);
rutaTurnos.delete('/:idTurno', adminMiddleware, apiController.eliminarTurno);

module.exports = rutaTurnos;
