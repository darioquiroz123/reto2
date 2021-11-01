const express = require('express');
const mongoose = require ('mongoose')
const app = express();

// conexion con la base de datos
//mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@cluster0.od7lu.mongodb.net/Reto2db?retryWrites=true&w=majority")

// operaciones del CRUD

app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000")
            });