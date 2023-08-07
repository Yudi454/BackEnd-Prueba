const mongoose = require("mongoose")
const {Schema} = mongoose

const usuarioSchema = new Schema ({
    nombre: {
        type: String, //Tipo de dato
        required: true,
        max: 12,
        min:3,
        trim: true, //Elimina espacios
    },
    email: {
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
    collection: `Usuarios`
})

const UsuarioModel = mongoose.model("Usuarios", usuarioSchema)

module.exports = UsuarioModel