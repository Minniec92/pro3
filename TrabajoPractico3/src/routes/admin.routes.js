const { Router } = require('express');
const router = Router();
const controller = require('../controllers/admin.controller');
const adminMiddleware = require('../middlewares/admin.middleware');

router.get('/admin/login', controller.renderLoginAdmin);
router.post('/admin/login', controller.login);

router.get('/admin', adminMiddleware, controller.renderAdminPanel);

router.get('/logout', controller.logout);

module.exports = router;
