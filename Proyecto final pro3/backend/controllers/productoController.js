const { Producto } = require('../models');

exports.obtenerTodos = async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
};

exports.crearProducto = async (req, res) => {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json(nuevoProducto);
};

exports.obtenerPorId = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
        res.status(404);
        throw new Error('Producto no encontrado');
    }
    res.json(producto);
};

exports.actualizarProducto = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
        res.status(404);
        throw new Error('Producto no encontrado');
    }
    await producto.update(req.body);
    res.json(producto);
};

exports.eliminarProducto = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
        res.status(404);
        throw new Error('Producto no encontrado');
    }
    await producto.destroy();
    res.json({ mensaje: 'Producto eliminado correctamente' });
};
