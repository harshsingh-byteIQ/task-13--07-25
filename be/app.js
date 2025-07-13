const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());


function generateSensorData() {
  return {
    temperature: parseFloat((Math.random() * 100).toFixed(1)), 
    vibration: parseFloat((Math.random() * 30).toFixed(1)),     
    current: parseFloat((Math.random() * 50).toFixed(1)),       
    voltage: parseFloat((220 + Math.random() * 30).toFixed(1)), 
  };
}

app.get('/api/sensor-data', (req, res) => {
  const data = generateSensorData();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
