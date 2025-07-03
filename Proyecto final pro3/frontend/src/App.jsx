import { useEffect, useState } from 'react';
import ListaProductos from './components/ui/ListaProductos';
import FormularioProducto from './components/ui/FormularioProducto';
import './App.css';

function App() {
    const [productos, setProductos] = useState([]);

    const cargarProductos = () => {
        fetch('http://localhost:3001/api/productos')
            .then(res => res.json())
            .then(data => setProductos(data))
            .catch(err => console.error('Error al cargar productos:', err));
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const agregarProducto = (nuevoProducto) => {
        setProductos(prev => [...prev, nuevoProducto]);
    };

    const eliminarProducto = (id) => {
        // Placeholder: Implementar lógica para eliminar producto si querés
        console.log('Eliminar producto:', id);
    };

    const editarProducto = (producto) => {
        // Placeholder: Implementar lógica para editar producto si querés
        console.log('Editar producto:', producto);
    };

    return (
        <div className="app-container">
            <h1 className="app-title" style={{ textAlign: 'center' }}>
                🛒 Sistema de Inventario
            </h1>

            <FormularioProducto onProductoCreado={agregarProducto} />

            <div className="product-list">
                <ListaProductos
                    productos={productos}
                    onEliminar={eliminarProducto}
                    onEditar={editarProducto}
                />
            </div>
        </div>
    );
}

export default App;
