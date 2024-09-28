const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Ejercicio Grupal 6 del Modulo 7. Grupo 9!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
