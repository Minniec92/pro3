import { useEffect, useState } from 'react';
import ListaProductos from './components/ui/ListaProductos';
import FormularioProducto from './components/ui/FormularioProducto';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);

  
  const fetchProductos = () => {
    fetch('http://localhost:3001/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error al cargar productos:', err));
  };

  const eliminarProducto = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/productos/${id}`, { method: 'DELETE' });
      await fetchProductos(); // Refrescar después de eliminar
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  const guardarProducto = async (producto) => {
    if (productoEditando) {
      // Actualizar
      try {
        const respuesta = await fetch(`http://localhost:3001/api/productos/${productoEditando.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(producto)
        });

        if (!respuesta.ok) throw new Error('Error al actualizar producto');

        setProductoEditando(null);
        await fetchProductos();
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    } else {
      try {
        const respuesta = await fetch('http://localhost:3001/api/productos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(producto)
        });

        if (!respuesta.ok) throw new Error('Error al crear producto');

        await fetchProductos(); // 🔄 Recargar lista completa
      } catch (error) {
        console.error('Error al crear:', error);
      }
    }
  };

  const editarProducto = (producto) => {
    setProductoEditando(producto);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-green-100 p-4 rounded">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
        🛒 Sistema de Inventario
      </h1>

      <FormularioProducto
        onGuardar={guardarProducto}
        productoEditando={productoEditando}
        cancelarEdicion={() => setProductoEditando(null)}
      />

      <ListaProductos
        productos={productos}
        onEliminar={eliminarProducto}
        onEditar={editarProducto}
      />
    </div>
  );
}

export default App;
