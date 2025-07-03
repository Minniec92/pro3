const { Router } = require('express');
const { home } = require('../controllers/home/home.controller.js');
const pacientesController = require('../controllers/API/pacientes.controller.js');
const loginPaciente = pacientesController.login.bind(pacientesController);
const validate = require('../middlewares/validate.middleware.js');
const { loginSchema } = require('../validations/pacientes.validation.js');

const rutaHome = Router();

rutaHome.get('/', home);
rutaHome.post('/login', validate(loginSchema), loginPaciente);

module.exports = rutaHome;
