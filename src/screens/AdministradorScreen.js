/*import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CargarNoticiaScreen from './CargarNoticiaScreen';
import AgregarUsuarioScreen from './AgregarUsuarioScreen';
import ReportesScreen from './ReportesScreen';
import VerificarIncidentesScreen from './VerificarIncidentesScreen';

const AdministradorScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <Link to="/cargarNoticia" style={styles.button}>
          <span style={styles.buttonText}>Agregar Noticias</span>
        </Link>

        <Link to="/agregarUsuario" style={styles.button}>
          <span style={styles.buttonText}>Agregar Usuario</span>
        </Link>

        <Link to="/reportes" style={styles.button}>
          <span style={styles.buttonText}>Visualizar Reportes</span>
        </Link>

        <Link to="/listadoIncidentes" style={styles.button}>
          <span style={styles.buttonText}>Verificar Incidentes</span>
        </Link>
      </div>

      <div style={styles.content}>
        <Routes>
          <Route path="/cargarNoticia" element={<CargarNoticiaScreen />} />
          <Route path="/agregarUsuario" element={<AgregarUsuarioScreen />} />
          <Route path="/reportes" element={<ReportesScreen />} />
          <Route path="/listadoIncidentes" element={<VerificarIncidentesScreen />} />
        </Routes>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  sidebar: {
    width: '20%',
    background: '#f5f5f5', // Color de fondo
    padding: '20px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  button: {
    backgroundColor: '#8e44ad', // Color del botón (violeta)
    padding: '15px',
    borderRadius: '10px', // Bordes más redondeados
    marginBottom: '20px', // Espacio entre botones
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none', // Quitar subrayado de enlaces
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)', // Sombra
    color: 'white', // Color del texto
  },
  buttonText: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default AdministradorScreen;
*/
import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CargarNoticiaScreen from './CargarNoticiaScreen';
import AgregarUsuarioScreen from './AgregarUsuarioScreen';
import ReportesScreen from './ReportesScreen';
import VerificarIncidentesScreen from './VerificarIncidentesScreen';

const AdministradorScreen = () => {
  return (
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <Link to="/cargarNoticia">
            <button>Agregar Noticias</button>
          </Link>

          <Link to="/agregarUsuario">
            <button>Agregar Usuario</button>
          </Link>

          <Link to="/visualizar-reportes">
            <button>Visualizar Reportes</button>
          </Link>

          <Link to="/listadoIncidentes">
            <button>Verificar Incidentes</button>
          </Link>
        </div>

        <div>
          <Routes>
            <Route path="/cargarNoticia" element={<CargarNoticiaScreen />} />
            <Route path="/agregarUsuario" element={<AgregarUsuarioScreen />} />
            <Route path="/visualizar-reportes" element={<ReportesScreen />} />
            <Route path="/listadoIncidentes" element={<VerificarIncidentesScreen />} />
          </Routes>
        </div>
      </div>
  );
};

export default AdministradorScreen;

