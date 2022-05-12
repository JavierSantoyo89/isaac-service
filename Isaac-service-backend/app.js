//? ------- Require's dependencies ------- //
const express = require('express');
const app = express();


// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON




//? ------- levantar servidor ------- //
app.listen(1689,()=>{
    console.log('Servidor funcionando en http://localhost:1689');

});
