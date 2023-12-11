/*import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import '../estilos/ReportesScreen.css'; // Importa el archivo de estilos CSS

const ReportesScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Lógica para obtener los datos de tu endpoint
    // Por ejemplo, supongamos que los datos son un array con 4 números
    const response = await fetch('TU_ENDPOINT_AQUI');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const chartData = {
    labels: ['Informes Locales', 'Falta de Seguridad', 'En el día', 'En Buenos Aires'],
    datasets: [
      {
        data: data,
        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.5)'],
      },
    ],
  };

  return (
    <div className="reportes-container">
      <h1 className="title">Estadísticas</h1>
      <div className="numbers-container">
        <div className="row">
          <div className="number-card">
            <span className="number">{data[0]}</span>
            <span className="label">Informes Locales</span>
          </div>
          <div className="number-card">
            <span className="number">{data[1]}</span>
            <span className="label">Falta de Seguridad</span>
          </div>
        </div>
        <div className="row">
          <div className="number-card">
            <span className="number">{data[2]}</span>
            <span className="label">En el día</span>
          </div>
          <div className="number-card">
            <span className="number">{data[3]}</span>
            <span className="label">En Buenos Aires</span>
          </div>
        </div>
      </div>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ReportesScreen;

*/