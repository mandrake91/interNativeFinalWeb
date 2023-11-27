import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navegacion = ({ isLoggedIn, handleLogout }) => {
  return (
    <Nav className="ml-auto">
      <LinkContainer to="/">
        <Nav.Link className="nav-link">
          {isLoggedIn ? 'Noticias' : 'Noticias'}
        </Nav.Link>
      </LinkContainer>
      {isLoggedIn ? (
        <>
          <LinkContainer to="/informes">
            <Nav.Link className="nav-link">
              Informes
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/perfil">
            <Nav.Link className="nav-link">
              Perfil
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/administrador">
            <Nav.Link className="nav-link">
              Administrador
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/recuperar-contrasena">
            <Nav.Link className="nav-link" onClick={handleLogout}>
              Cerrar Sesión
            </Nav.Link>
          </LinkContainer>
        </>
      ) : (
        <>
          <LinkContainer to="/login">
            <Nav.Link className="nav-link">Iniciar Sesión</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/registro">
            <Nav.Link className="nav-link">Registrarse</Nav.Link>
          </LinkContainer>
        </>
      )}
    </Nav>
  );
};

export default Navegacion;
