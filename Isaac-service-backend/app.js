//? ------- Require's dependencies ------- //
const express = require('express');
const app = express();
const  path = require('path');

const routesAdmin = require('./routes/routes-admin')
const routesClient = require ('./routes/routes-client');
const routesMain = require('./routes/routers-main')


// ---- Configuracion previa para usar metodos post, put & delete ---- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON


app.use('/',routesMain);
app.use('/client',routesClient);
app.use('/admin',routesAdmin);





//? ------- levantar servidor ------- //
app.listen(process.env.PORT || 1689, ()=>{
    if (process.env.PORT == undefined){
        console.log("Servidor activado en el puerto: http://localhost:1689")
    }else{
    console.log("Servidor activado en el puerto: http://localhost:{process.env.PORT}");
    }
});

//! ------- Faltan crear las rutas y controladores. --------- //