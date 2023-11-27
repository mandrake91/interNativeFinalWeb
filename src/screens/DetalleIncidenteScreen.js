import React from 'react';
import { Card } from 'react-bootstrap'; // Asumo que estás utilizando Bootstrap para la versión web

const DetalleIncidenteScreen = ({ route }) => {
  const { incidente } = route.params;

  return (
    <Card style={styles.container}>
      <Card.Body>
        <Card.Title style={styles.titulo}>ID: {incidente.id}</Card.Title>
        <Card.Text style={styles.descripcion}>Descripción: {incidente.descripcion}</Card.Text>
        <Card.Text style={styles.fecha}>Fecha del incidente: {incidente.fecha}</Card.Text>
        {/* Agrega más detalles según la estructura de tus datos */}
      </Card.Body>
    </Card>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: '30px',
  },
  titulo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  descripcion: {
    fontSize: '16px',
    marginBottom: '8px',
  },
  fecha: {
    fontSize: '14px',
    color: 'gray',
  },
};

export default DetalleIncidenteScreen;
