//? ------- Require's dependencies ------- //
const express = require('express');
const app = express();


// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON




//? ------- levantar servidor ------- //
app.listen(process.env.PORT || 1689, ()=>{
    if (process.env.PORT == undefined){
        console.log("Servidor activado en el puerto: http://localhost:1689")
    }else{
    console.log("Servidor activado en el puerto: http://localhost:{process.env.PORT}");
    }
});