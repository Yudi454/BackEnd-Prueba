const mongoose = require("mongoose")
const { Schema } = mongoose


const canchaSchema = new Schema({
    nombre: {
        type: String, //Tipo de dato
        required: true,
        max: 12,
        min:3,
        trim: true, //Elimina espacios
        unique: true, //Permite que este dato sea unico en la base de datos

    },
    capacidad: {
        type: Number,
        required:true,
        max: 12,
        min:3,
        trim: true, //Elimina espacios
    },
    direccion: {
        type: String, //Tipo de dato
        required: true,
        max: 12,
        min:3,
        trim: true, //Elimina espacios
        unique: true, //Permite que este dato sea unico en la base de datos
    },
    contraseña: {
        type: String, //Tipo de dato
        required: true,
        max: 12,
        min:3,
        trim: true, //Elimina espacios
    }
},{
    versionKey: false,
    collection: `Canchas`
},)



const CanchaModel = mongoose.model("Canchas", canchaSchema)

module.exports = CanchaModel