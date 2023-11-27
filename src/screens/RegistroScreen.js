import React, { useState } from 'react';

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirm, setErrorConfirm] = useState('');

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.target.value });
  };

  const doRegisterUser = async () => {
    if (!validateData()) {
      return;
    }
    // Simulating navigation to 'account'
    window.location.href = '/account';
  };

  const validateData = () => {
    setErrorConfirm('');
    setErrorEmail('');
    setErrorPassword('');
    let isValid = true;

  /*  if (!validateEmail(formData.email)) {
      setErrorEmail('Debes ingresar un correo electrónico válido.');
      isValid = false;
    }*/

    if (formData.password.length < 8) {
      setErrorPassword('Debes ingresar una contraseña de al menos 8 caracteres.');
      isValid = false;
    }

    if (formData.confirm.length < 8) {
      setErrorConfirm('Debes ingresar una confirmación de contraseña de al menos 8 caracteres.');
      isValid = false;
    }

    if (formData.password !== formData.confirm) {
      setErrorPassword('La contraseña y la confirmación no son iguales.');
      setErrorConfirm('La contraseña y la confirmación no son iguales.');
      isValid = false;
    }

    return isValid;
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <input
          placeholder="Nombre"
          style={styles.input}
          onChange={(e) => onChange(e, 'name')}
          value={formData.name}
        />
        <input
          placeholder="Apellido"
          style={styles.input}
          onChange={(e) => onChange(e, 'lastname')}
          value={formData.lastname}
        />
        <input
          placeholder="DNI"
          style={styles.input}
          type="number"
          onChange={(e) => onChange(e, 'dni')}
          value={formData.dni}
        />
        <input
          placeholder="Número de Teléfono"
          style={styles.input}
          type="tel"
          onChange={(e) => onChange(e, 'phone')}
          value={formData.phone}
        />
        <input
          placeholder="Ingresa tu email"
          type="email"
          style={styles.input}
          onChange={(e) => onChange(e, 'email')}
          value={formData.email}
        />
        <input
          placeholder="Ingresa tu contraseña"
          type="password"
          style={styles.input}
          onChange={(e) => onChange(e, 'password')}
          value={formData.password}
        />
        <input
          placeholder="Confirma tu contraseña"
          type="password"
          style={styles.input}
          onChange={(e) => onChange(e, 'confirm')}
          value={formData.confirm}
        />
        <button
          style={styles.btn}
          onClick={doRegisterUser}
        >
          Registrar Nuevo Usuario
        </button>
      </div>
    </div>
  );
}

const defaultFormValues = () => {
  return { name: '', lastname: '', dni: '', phone: '', email: '', password: '', confirm: '' };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  form: {
    width: '80%',
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
