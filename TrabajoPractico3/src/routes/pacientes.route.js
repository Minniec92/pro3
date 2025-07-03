const { Router } = require('express');
const controller = require('../controllers/views.controller.js'); 
const apiController = require('../controllers/API/pacientes.controller.js'); 
const validate = require('../middlewares/validate.middleware.js');
const { registerPatientSchema } = require('../validations/pacientes.validation.js');
const adminMiddleware = require('../middlewares/admin.middleware.js');

const rutaPacientes = Router();

rutaPacientes.get('/',adminMiddleware, controller.renderListaPacientes);
rutaPacientes.get('/nuevo', controller.renderNuevoPaciente);
rutaPacientes.get('/:id/editar', adminMiddleware, controller.renderEditarPaciente);

rutaPacientes.post('/login', apiController.login);
rutaPacientes.post('/', validate(registerPatientSchema, 'new-paciente'), apiController.create);
rutaPacientes.put('/:id', adminMiddleware, apiController.update);
rutaPacientes.delete('/:id', adminMiddleware, apiController.delete);

module.exports = rutaPacientes;
