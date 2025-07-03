import { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

function TraerPersonas() {
    const [personas, setPersonas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/personas')
            .then(res => {
                if (!res.ok) throw new Error("Error en la respuesta del servidor");
                return res.json();
            })
            .then(data => {
                setPersonas(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al traer personas:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Cargando personas...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <ListaTarjetas personas={personas} />
        </div>
    );
}

export default TraerPersonas;
