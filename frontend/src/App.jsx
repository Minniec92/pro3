import './App.css';
import TraerPersonas from './components/TraerPersonas';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">🚀 Aplicación React + Express</h1>
      <h2 className="app-subtitle">Lista de Personas</h2>
      <TraerPersonas />
    </div>
  );
}

export default App;
