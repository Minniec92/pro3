import { useState, useEffect } from 'react';

function FormularioProducto({ onGuardar, productoEditando, cancelarEdicion }) {
    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        categoria: ''
    });

    useEffect(() => {
        if (productoEditando) {
            setFormulario(productoEditando);
        } else {
            setFormulario({
                nombre: '',
                descripcion: '',
                precio: '',
                stock: '',
                categoria: ''
            });
        }
    }, [productoEditando]);

    const handleChange = (e) => {
        setFormulario({ ...formulario, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onGuardar(formulario); 
            setFormulario({
                nombre: '',
                descripcion: '',
                precio: '',
                stock: '',
                categoria: ''
            });
        } catch (error) {
            console.error('Error al guardar producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-bold mb-4">
                {productoEditando ? '✏️ Editar producto' : '➕ Agregar nuevo producto'}
            </h2>

            <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
            <input type="text" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
            <input type="number" name="precio" placeholder="Precio" value={formulario.precio} onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
            <input type="number" name="stock" placeholder="Stock" value={formulario.stock} onChange={handleChange} className="w-full mb-2 p-2 border rounded" required />
            <input type="text" name="categoria" placeholder="Categoría" value={formulario.categoria} onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

            <div className="flex space-x-2">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Guardar
                </button>
                {productoEditando && (
                    <button
                        type="button"
                        onClick={cancelarEdicion}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                    >
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
}

export default FormularioProducto;
