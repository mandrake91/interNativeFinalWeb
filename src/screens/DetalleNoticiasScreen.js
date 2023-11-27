import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetalleNoticiasScreen = () => {
  const { id } = useParams();

  // Aquí deberías obtener la noticia con el ID de tu fuente de datos (por ejemplo, mediante una nueva llamada a la API)
  const item = {}; // Obtén la noticia con el ID proporcionado

  return (
    <Card style={styles.container}>
      <Card.Img variant="top" src={item.imagen} style={styles.newsImage} />
      <Card.Body>
        <Card.Title style={styles.newsTitle}>{item.titulo}</Card.Title>
        <Card.Text style={styles.newsContent}>{item.descripcion}</Card.Text>
        <Button variant="primary" onClick={() => window.history.back()}>
          Volver
        </Button>
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
  newsImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  newsContent: {
    fontSize: '16px',
    color: '#555',
  },
};

export default DetalleNoticiasScreen;
