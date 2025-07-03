const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const productoController = require('../controllers/productoController');

router.get('/', asyncHandler(productoController.obtenerTodos));

router.post('/', asyncHandler(productoController.crearProducto));

router.get('/:id', asyncHandler(productoController.obtenerPorId));

router.put('/:id', asyncHandler(productoController.actualizarProducto));

router.delete('/:id', asyncHandler(productoController.eliminarProducto));

module.exports = router;
