import React, { useState } from 'react';

export default function RecuperarPasswordScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    securityQuestion: '',
  });
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRepeatPassword, setErrorRepeatPassword] = useState('');

  const onChange = (event, type) => {
    setFormData({ ...formData, [type]: event.target.value });
  };

  const handleResetPassword = () => {
    if (!validateData()) {
      return;
    }
    // Simulating navigation to 'ResetPassword'
    window.location.href = '/reset-password';
  };

  const validateData = () => {
    setErrorEmail('');
    setErrorPassword('');
    setErrorRepeatPassword('');
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail('Debes ingresar un correo electrónico válido.');
      isValid = false;
    }

    if (formData.password.length < 6) {
      setErrorPassword('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    }

    if (formData.password !== formData.repeatPassword) {
      setErrorRepeatPassword('Las contraseñas no coinciden.');
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSecurityQuestionChange = (event) => {
    setFormData({ ...formData, securityQuestion: event.target.value });
  };

  return (
    <div style={styles.container}>
      <input
        placeholder="Email"
        type="email"
        style={styles.input}
        onChange={(e) => onChange(e, 'email')}
        value={formData.email}
      />
      <input
        placeholder="Contraseña"
        type="password"
        style={styles.input}
        onChange={(e) => onChange(e, 'password')}
        value={formData.password}
      />
      <input
        placeholder="Repetir Contraseña"
        type="password"
        style={styles.input}
        onChange={(e) => onChange(e, 'repeatPassword')}
        value={formData.repeatPassword}
      />
      <input
        placeholder="Respuesta"
        style={styles.input}
        onChange={(e) => onChange(e, 'securityQuestion')}
        value={formData.securityQuestion}
      />
      <button
        style={styles.btn}
        onClick={handleResetPassword}
      >
        Restablecer Contraseña
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
    border: '1px solid #ccc',
    borderRadius: 5,
  },
  btn: {
    backgroundColor: '#442484',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    cursor: 'pointer',
  },
};
