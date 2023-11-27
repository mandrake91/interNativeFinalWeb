import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../estilos/NoticiasScreen.css';

const NoticiasScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const noticiasUrl = 'http://192.168.0.11:8000/api/getNoticias';

  const fetchNews = async () => {
    try {
      const response = await fetch(noticiasUrl, {
        headers: {
          Authorization: 'Bearer PDVwDJVi3A3mYb96b5HL2Wru7fLyOFZfM935BlkvqXtqujDmQjhkw6DvK7CRLhZT6vfA4p',
        },
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de noticias');
      }

      const data = await response.json();
      setNews(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleNewsPress = (item) => {
    // Navegar a la pantalla de Detalle de Noticia con React Router
    navigate(`/detalle-noticia/${item.id}`);
  };

  return (
    <div className="noticias-container">
      {loading ? (
        <div className="center-spinner-container">
          <Spinner animation="border" role="status" className="spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div className="error-text">Error: {error}</div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {news.map((item) => (
            <Col key={item.id} style={{ marginBottom: '16px' }}>
              <Card>
                <Card.Img src={item.imagen} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>
                    {item.titulo}
                  </Card.Title>
                  <Card.Subtitle style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>
                    {item.fecha}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: '16px', color: '#555' }}>
                    {item.descripcion.slice(0, 50)}
                    {item.descripcion.length > 50 ? '...' : ''}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleNewsPress(item)}>
                    Ver Detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};


export default NoticiasScreen;
