import React, { useEffect, useState } from 'react';

const VerificarIncidentesScreen = ({ history }) => {
  const [incidentes, setIncidentes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncidentes();
  }, []);

  const incidentesUrl = 'http://192.168.0.11:8000/api/mostrarInformes';

  const fetchIncidentes = async () => {
    try {
      const response = await fetch(incidentesUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer PDVwDJVi3A3mYb96b5HL2Wru7fLyOFZfM935BlkvqXtqujDmQjhkw6DvK7CRLhZT6vfA4p',
        },
        body: JSON.stringify({
          estado: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de incidentes');
      }

      const data = await response.json();
      setIncidentes(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <ul>
        {incidentes.map((item) => (
          <li key={item.id} onClick={() => history.push('/Detalle de Incidente', { incidente: item })}>
            <div style={styles.incidenteItem}>
              <span style={styles.incidenteTitulo}>ID: {item.id}</span>
              <span style={styles.incidenteTitulo}>Tipo: {item.tipo}</span>
              <span style={styles.incidenteTitulo}>Descripción: {item.descripcion}</span>
              <span style={styles.incidenteTitulo}>
                Fecha: {new Date(item.fecha).toLocaleDateString('es-ES')}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Fondo claro
  },
  incidenteItem: {
    backgroundColor: 'white', // Fondo blanco para cada elemento
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    margin: 8, // Márgenes externos para separar los elementos
    borderWidth: 1, // Borde
    borderColor: '#ddd', // Color del borde
  },
  incidenteTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    display: 'block', // Para que cada texto esté en una línea nueva
    marginBottom: 8, // Espacio entre textos
  },
};

export default VerificarIncidentesScreen;
