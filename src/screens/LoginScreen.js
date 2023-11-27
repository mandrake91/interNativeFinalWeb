import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginScreen = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.11:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'jeronimoledesma45450@gmail.com',
          password: 'asdasdasd'
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de inicio de sesión.');
      }

      const data = await response.json();

      console.log('Respuesta de inicio de sesión:', data);

      // Guarda la información del usuario en localStorage
      localStorage.setItem('userData', JSON.stringify(data.userData));

      // Utiliza navigate en lugar de window.location.href
      navigate('/');
      onLoginSuccess(); // Llama a la función onLoginSuccess
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleRegister = () => {
    navigate('/registro');
  };

  const handleRecover = () => {
    navigate('/recuperar-contrasena');
  };

  return (
    <div style={styles.container}>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Iniciar Sesión
        </Button>

        <Form.Group controlId="formRegisterLink">
          <Form.Text style={styles.registerLink} onClick={handleRegister}>
            Regístrate si no tienes cuenta
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formRecoverLink">
          <Form.Text style={styles.registerLink} onClick={handleRecover}>
            ¿Olvidaste tu Contraseña?
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  registerLink: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default LoginScreen;
