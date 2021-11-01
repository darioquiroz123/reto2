const mongoose = require ('mongoose')
	let TareaSchema = new mongoose.Schema({
         idTarea: Number,
         TipodocTarea: String,
         docid: Number,
         nombreTarea: String
	
	});
    // lo exportamos                    Esto es lo que importo
    module.exports = mongoose.model('tarea',TareaSchema,'Tareas');
