// Cargo modulos
const express = require('express');

// Inicio express
const app = express();

// Renderizo archivos estáticos de la carpeta public
app.use(express.static('public'));

// Puerto
app.listen(8080);