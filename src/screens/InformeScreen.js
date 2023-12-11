import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { format } from 'date-fns';
//import GoogleMap from './GoogleMap';

export default function InformeScreen() {
  const [selectedType, setSelectedType] = useState('');
  const [location, setLocation] = useState(null);
  const [date, setDate] = useState(new Date());
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      // Tu lógica para obtener la ubicación

      // Simulación de ubicación para propósitos de ejemplo
      setLocation({
        latitude: 40.7128,
        longitude: -74.006,
      });
    } catch (error) {
      console.error('Error obteniendo la ubicación:', error.message);
    }
  };

  const handleChoosePhoto = async () => {
    try {
      // Tu lógica para elegir una foto de la galería

      // Simulación de selección de foto para propósitos de ejemplo
      setPhoto('URL_DE_LA_FOTO_SELECCIONADA');
    } catch (error) {
      console.error('Error al elegir la foto:', error.message);
    }
  };

  const handleSendReport = () => {
    // Tu lógica para enviar el informe
  };

  const formattedDate = format(date, 'dd/MM/yyyy');

  return (
    <div style={styles.container}>
      <Form>
        <Form.Group controlId="formType">
          <Form.Label>Tipo de Informe:</Form.Label>
          <Form.Control
            as="select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
            <option value="tipo3">Tipo 3</option>
          </Form.Control>
        </Form.Group>

      

        <Form.Group controlId="formDate">
          <Form.Label>Fecha:</Form.Label>
          <p style={styles.date}>{formattedDate}</p>
        </Form.Group>

        {/* Resto de los campos del formulario */}
      </Form>

      {/* Sección de la foto */}
      <div style={styles.photoContainer}>
        {photo && <img src={photo} alt="Foto" style={styles.photo} />}
        <Button variant="primary" onClick={handleChoosePhoto} style={styles.photoButton}>
          Seleccionar Foto
        </Button>       
      </div>

      {/* Campo de Descripción */}
      <Form.Group controlId="formDescription">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      {/* Botón de Enviar */}
      <div style={styles.buttonContainer}>
        <Button variant="primary" onClick={handleSendReport}>
          Enviar
        </Button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 16,
  },
  map: {
    height: 200,
    marginBottom: 16,
  },
  placeholderText: {
    fontStyle: 'italic',
    color: '#888',
  },
  date: {
    fontSize: 16,
    marginBottom: 10,
  },
  photoContainer: {
    marginBottom: 16,
  },
  photo: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 8,
  },
  photoButton: {
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 16,
  },
};


/*

  <Form.Group controlId="formLocation">
          <Form.Label>Ubicación:</Form.Label>
          {location ? (
            <GoogleMap
              center={[location.latitude, location.longitude]}
              zoom={13}
              style={styles.map}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[location.latitude, location.longitude]}>
                <Popup>Tu ubicación</Popup>
              </Marker>
            </GoogleMap>
          ) : (
            <p style={styles.placeholderText}>Obteniendo ubicación...</p>
          )}
        </Form.Group>
        */