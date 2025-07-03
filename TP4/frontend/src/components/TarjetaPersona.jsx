function TarjetaPersona({ persona }) {
    const { id, nombre, apellido, edad, email } = persona;

    return (
        <div style={{
            borderRadius: '16px',
            padding: '20px',
            width: '250px',
            backgroundColor: '#f5f7fa',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            color: '#333',
            fontFamily: 'Segoe UI, Roboto, sans-serif',
            transition: 'transform 0.3s ease',
            cursor: 'default',
            border: '1px solid #e0e0e0'
        }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
            <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '10px' }}>👤</div>

            <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '12px',
                textAlign: 'center',
                borderBottom: '2px solid #3498db',
                paddingBottom: '6px',
                letterSpacing: '0.5px',
            }}>
                {nombre} {apellido}
            </h3>

            <p style={{ margin: '8px 0', fontSize: '1rem' }}>
                🆔 <strong>ID:</strong> {id}
            </p>
            <p style={{ margin: '8px 0', fontSize: '1rem' }}>
                🎂 <strong>Edad:</strong> {edad} años
            </p>
            <p style={{ margin: '8px 0', fontSize: '1rem' }}>
                📧 <strong>Email:</strong> {email}
            </p>
        </div>
    );
}

export default TarjetaPersona;
