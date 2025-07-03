const { Router } = require('express');
const controller = require('../controllers/views.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');
const adminMiddleware = require('../middlewares/admin.middleware.js');

const router = Router();

router.get('/', controller.renderIndex);
router.get('/login', controller.renderLogin);
router.get('/logout', controller.logout);

router.get('/pacientes', controller.renderListaPacientes);
router.get('/pacientes/nuevo', controller.renderNuevoPaciente);
router.get('/pacientes/editar/:id', controller.renderEditarPaciente);

router.get('/turnos', authMiddleware, controller.renderListaTurnos);
router.get('/turnos/nuevo', controller.renderNuevoTurno);
router.get('/turnos/editar/:id', controller.renderEditarTurno);

router.get('/admin/login', controller.renderLoginAdmin);
router.post('/admin/login', controller.loginAdmin);
router.get('/admin', adminMiddleware, controller.renderAdminPanel);

router.get('/mis-turnos', authMiddleware, controller.renderMisTurnos);

module.exports = router;
