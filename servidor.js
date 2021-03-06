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
// metodos post
router.post('/tarea',(req, res)=>{
    let nuevaTarea = new TareaSchema({
        TipoDocumento: req.body.tipodoc,
        DocumentoIdentificación: req.body.id,
        Nombres: req.body.nombre,
        Apellidos : req.body.apellido,
        Dirección: req.body.direccion,
        CorreoElectrónico: req.body.correo,
        TeléfonoFijo: req.body.telefonoF,
        TeléfonoCelular: req.body.telefonoC,
        EnlaceSitioWeb: req.body.enlace,
        DescripciónDelPerfil: req.body.descripcion
        
    });

    nuevaTarea.save(function(err, datos){
        if (err){
            console.log(err);
    }
    res.send("usuario Almacenado")
 
    })
});
app.use(router);
app.listen(3000, () => {
    console.log("El servidor se esta ejecutando en el puerto 3000")
});