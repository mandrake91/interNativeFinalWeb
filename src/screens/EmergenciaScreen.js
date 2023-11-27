import React from 'react';
import { Button } from 'react-bootstrap'; // Asumo que estás utilizando Bootstrap para la versión web

const EmergencyScreen = () => {
  const handleCall911 = () => {
    window.location.href = 'tel:911';
  };

  const handleCall107 = () => {
    window.location.href = 'tel:107';
  };

  const handleCall100 = () => {
    window.location.href = 'tel:100';
  };

  return (
    <div style={styles.container}>
      <Button onClick={handleCall911} style={{ backgroundColor: 'blue', marginRight: '20px' }}>
        POLICIA
      </Button>

      <Button onClick={handleCall107} style={{ backgroundColor: 'green', marginRight: '20px' }}>
        SAME
      </Button>

      <Button onClick={handleCall100} style={{ backgroundColor: 'red' }}>
        BOMBEROS
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
  },
};

export default EmergencyScreen;
