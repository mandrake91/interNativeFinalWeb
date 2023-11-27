import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';

export default function AgregarUsuarioScreen() {
  const [formData, setFormData] = useState(defaultFormValues());
  const [error, setError] = useState("");
  const [isAdministrator, setIsAdministrator] = useState(false);

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.target.value });
  };

  const doRegisterUser = async () => {
    if (!validateData()) {
      return;
    }
    // Aquí debes enviar los datos del registro, incluyendo la información de isAdmin
    const userData = { ...formData, isAdmin: isAdministrator };
    // Resto de tu lógica de registro
  };

  const validateData = () => {
    setError("");

    if (!validateEmail(formData.email)) {
      setError("Debes ingresar un email válido");
      return false;
    }
    if (formData.password.length < 8 || formData.confirm.length < 8) {
      setError("La contraseña y la confirmación deben tener al menos 8 caracteres");
      return false;
    }
    if (formData.password !== formData.confirm) {
      setError("La contraseña y la confirmación no son iguales");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    // Implementación simple de validación de email
    // Puedes utilizar expresiones regulares u otras validaciones más robustas
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <div style={{ width: "80%" }}>
        {/* Resto de los controles */}
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
    </div>
  );
}

const defaultFormValues = () => {
  return { name: "", lastname: "", dni: "", phone: "", email: "", password: "", confirm: "" };
};
