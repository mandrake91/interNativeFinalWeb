import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { AuthProvider } from './screens/AuthProvider';
import NoticiasScreen from './screens/NoticiasScreen';
import DetalleNoticiasScreen from './screens/DetalleNoticiasScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import InformeScreen from './screens/InformeScreen';
import PerfilScreen from './screens/PerfilScreen';
import RegistroScreen from './screens/RegistroScreen';
import RecuperarPasswordScreen from './screens/RecuperarPasswordScreen';
import AdministradorScreen from './screens/AdministradorScreen';
import CargarNoticiaScreen from './screens/CargarNoticiaScreen';
import AgregarUsuarioScreen from './screens/AgregarUsuarioScreen';
import VerificarIncidentesScreen from './screens/VerificarIncidentesScreen';
import Navegacion from './components/Navegacion'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <AuthProvider>
        <Navbar bg="light" expand="lg" variant="light">
          <Container>
            <LinkContainer to="/" style={{ cursor: 'pointer' }}>
              <Navbar.Brand>Interconectados</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navegacion isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="route-container">
          <Routes>
          <Route
                  path="/"
                  element={<NoticiasScreen />}
                />
            {isLoggedIn ? (
              <>
                <Route
                  path="/informes"
                  element={<InformeScreen />}
                />
                <Route
                  path="/perfil"
                  element={<PerfilScreen />}
                />
                <Route
                  path="/administrador/*"
                  element={<AdministradorScreen />}
                />
                <Route
                  path="/cargarNoticia"
                  element={<CargarNoticiaScreen />}
                />
                <Route
                  path="/agregarUsuario"
                  element={<AgregarUsuarioScreen />}
                />
                <Route
                  path="/listadoIncidentes"
                  element={<VerificarIncidentesScreen />}
                />
              </>
            ) : (
              <>                
                <Route
                  path="/login"
                  element={<LoginScreen onLoginSuccess={handleLoginSuccess} />}
                />
                <Route path="/registro" element={<RegistroScreen />} />
                <Route
                  path="/recuperar-contrasena"
                  element={<RecuperarPasswordScreen />}
                />
                <Route path="/detalle-noticia/:id" element={<DetalleNoticiasScreen />} />
              </>
            )}
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
};

export default App;
