import React, { useState } from 'react';

const PerfilScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nombre, setNombre] = useState('John');
  const [apellido, setApellido] = useState('Doe');

  const handleSaveChanges = () => {
    // Agrega lógica de confirmación antes de guardar los cambios
    if (window.confirm('¿Estás seguro de que deseas guardar los cambios?')) {
      saveChangesConfirmed();
    }
  };

  const saveChangesConfirmed = () => {
    // Aquí puedes guardar los cambios en el backend si es necesario
    // Por ejemplo, hacer una solicitud HTTP para actualizar los datos del usuario
    setIsEditing(false);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión (puede incluir la eliminación del token, limpieza del almacenamiento local, etc.)
    // En una aplicación web, podrías redirigir a la página de inicio de sesión
    window.location.href = '/login';
  };

  return (
    <div style={styles.container}>
      <div style={styles.label}>Nombre:</div>
      {isEditing ? (
        <input
          style={styles.input}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      ) : (
        <div style={styles.text}>{nombre}</div>
      )}

      <div style={styles.label}>Apellido:</div>
      {isEditing ? (
        <input
          style={styles.input}
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      ) : (
        <div style={styles.text}>{apellido}</div>
      )}

      <button
        onClick={isEditing ? handleSaveChanges : () => setIsEditing(true)}
        style={{ ...styles.button, ...(!isEditing && styles.editButton) }}
      >
        {isEditing ? 'Guardar cambios' : 'Editar perfil'}
      </button>

      <button
        onClick={handleLogout}
        style={{ ...styles.button, ...styles.logoutButton }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#442484',
    padding: 10,
    color: '#fff',
    fontSize: 16,
    cursor: 'pointer',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: 'orange', // Cambia el color según sea necesario
  },
  logoutButton: {
    backgroundColor: 'red', // Cambia el color según sea necesario
  },
};

export default PerfilScreen;
