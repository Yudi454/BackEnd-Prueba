const mongoose = require("mongoose")
const { Schema } = mongoose

const canchaSchema = new Schema({
    nombre: String,
    capacidad: Number,
    direccion: String
},{
    versionKey: false,
    collection: `Canchas`
},)



const CanchaModel = mongoose.model("Canchas", canchaSchema)

module.exports = CanchaModel