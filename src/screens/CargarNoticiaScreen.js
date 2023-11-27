import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const CargarNoticiaScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleCargarNoticia = async () => {
    const noticiasUrl = 'http://192.168.0.11:8000/api/cargarNoticia';

    try {
      const formData = new FormData();
      formData.append('titulo', titulo);
      formData.append('imagen', imagen);
      formData.append('descripcion', descripcion);

      const response = await fetch(noticiasUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer PDVwDJVi3A3mYb96b5HL2Wru7fLyOFZfM935BlkvqXtqujDmQjhkw6DvK7CRLhZT6vfA4p',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error en la carga de la noticia');
      }

      // Limpiar los campos después de la carga exitosa
      setTitulo('');
      setImagen(null);
      setDescripcion('');
      // Mostrar la alerta de carga exitosa
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  return (
    <div style={styles.container}>
      <h2>Cargar Noticia</h2>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Noticia cargada exitosamente.
        </Alert>
      )}
      <Form>
        <Form.Group controlId="titulo">
          <Form.Label>Título:</Form.Label>
          <Form.Control
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group controlId="imagen">
          <Form.Label>Seleccionar Imagen:</Form.Label>
          <Form.Control
            type="file"
            label={imagen ? imagen.name : 'Elegir archivo'}
            onChange={handleImagenChange}
          />
        </Form.Group>

        <Form.Group controlId="descripcion">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleCargarNoticia}>
          Cargar Noticia
        </Button>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    maxWidth: '600px', // Ajusta el ancho según sea necesario
    margin: 'auto', // Centra el formulario en la pantalla
  },
};

export default CargarNoticiaScreen;
