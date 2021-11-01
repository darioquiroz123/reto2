const express = require("express");
const mongoose = require ("mongoose")
const TareaSchema = require('./Modelos/Tareas.js')

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// conexion con la base de datos
mongoose.connect("mongodb+srv://prog_web:ProgWebMintic2022@cluster0.od7lu.mongodb.net/Reto2db?retryWrites=true&w=majority")

// operaciones del CRUD
router.get('/', (req,res)=> {
    res.send("El inicio de la Api Rest")
});

app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000")
            });