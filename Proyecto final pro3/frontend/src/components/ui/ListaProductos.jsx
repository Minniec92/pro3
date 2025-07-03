function ListaProductos({ productos, onEliminar = () => {}, onEditar = () => {} }) {
    if (!productos || productos.length === 0) {
        return <p className="text-gray-500">No hay productos disponibles.</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-green-800">📦 Inventario de Productos</h2>
            <ul className="space-y-3">
                {productos.map((producto) => (
                    <li key={producto.id} className="border p-4 rounded shadow bg-white relative">
                        <h3 className="text-xl font-semibold text-green-700">{producto.nombre}</h3>
                        <p className="text-gray-700">{producto.descripcion}</p>
                        <p className="text-sm">💰 ${producto.precio}</p>
                        <p className="text-sm">📦 Stock: {producto.stock}</p>
                        <p className="text-sm">🗂️ Categoría: {producto.categoria}</p>

                        <div className="absolute top-2 right-2 flex space-x-2">
                            <button
                                onClick={() => onEliminar(producto.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                                title="Eliminar"
                            >
                                Eliminar
                            </button>
                            <button
                                onClick={() => onEditar(producto)}
                                className="bg-yellow-400 text-black px-2 py-1 rounded hover:bg-yellow-500 transition"
                                title="Editar"
                            >
                                Editar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaProductos;
