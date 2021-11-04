const mongoose = require ('mongoose')
	let TareaSchema = new mongoose.Schema({
        TipoDocumento: String,
        DocumentoIdentificación: Number,
        Nombres: String,
        Apellidos : String,
        Dirección: String,
        CorreoElectrónico: String,
        TeléfonoFijo: String,
        TeléfonoCelular: String,
        EnlaceSitioWeb: String,
        DescripciónDelPerfil: String
	
	});
    // lo exportamos                    Esto es lo que importo
    module.exports = mongoose.model('tarea',TareaSchema,'Tareas');
