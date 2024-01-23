const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002; 
app.use(cors()); // Habilita CORS

/* app.get('/', (req, res) => {
    res.send('¡Hola desde el Microservicio 2!');
}); */

const allComputers = [
    { id: 1, name: 'Laptop', price: 800, description: 'Potente laptop para todas tus necesidades' },
    { id: 2, name: 'Desktop', price: 1200, description: 'Computadora de escritorio de alto rendimiento' },
    { id: 3, name: 'Tablet', price: 400, description: 'Tableta portátil para computación sobre la marcha' },
    { id: 4, name: 'Workstation', price: 1500, description: 'Computadora especializada para cargas de trabajo intensivas' },
    { id: 5, name: 'Gaming PC', price: 2000, description: 'Computadora de escritorio para juegos personalizable' },
    { id: 6, name: 'Ultrabook', price: 1200, description: 'Laptop delgada y liviana' },
    { id: 7, name: 'Chromebook', price: 500, description: 'Laptop que ejecuta Chrome OS para simplicidad' },
    { id: 8, name: 'Server', price: 2500, description: 'Servidor potente para alojar aplicaciones' },
    { id: 9, name: 'All-in-One PC', price: 1000, description: 'Computadora de escritorio compacta con pantalla incorporada' },
    { id: 10, name: 'Mini PC', price: 600, description: 'Computadora de escritorio de tamaño pequeño' },
    { id: 11, name: 'Convertible Laptop', price: 900, description: 'Laptop con pantalla táctil que se puede convertir en una tableta' },
    { id: 12, name: 'Gaming Laptop', price: 1800, description: 'Laptop de alto rendimiento para entusiastas de los juegos' },
    { id: 13, name: 'Media Center PC', price: 800, description: 'PC diseñada para entretenimiento multimedia' },
    { id: 14, name: "Estación de trabajo del desarrollador", price: 2000, description: 'Estación de trabajo potente para desarrollo de software' },
    { id: 15, name: 'Laptop resistente', price: 1500, description: 'Laptop resistente diseñada para entornos difíciles' },
  ];
  
  app.get('/search', (req, res) => {
    const searchTerm = req.query.q || '';
    const results = searchComputers(searchTerm);
  
    res.json({ searchResults: results });
  });
  
  function searchComputers(searchTerm) {
    const matchingComputers = allComputers.filter(computer =>
      computer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return matchingComputers;
  }

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
