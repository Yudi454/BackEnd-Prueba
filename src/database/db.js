const mongoose = require("mongoose")

const CanchaModel = require("../models/cancha.model")

const uri = process.env.PORTDB
const db = process.env.DB

//Crear cancha en base de datos
const crearCancha = async () =>{
    try {
        const cancha = new CanchaModel({
            nombre:"Ciudadela",
            capacidad: 20000,
            direccion: "Rondeau y Pellegrini"
        })
        await cancha.save()
        console.log("Cancha Creada");
    } catch (error) {
        console.log(error);
    }
}

//Traer Canchas desde base de datos
const conectDb = async () =>{
    try {
      await  mongoose.connect(`${uri}/${db}`, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Conectado a la base de datos Futbol");
        const allCanchas = await CanchaModel.find().lean() //Traer todas las Canchas que cumplan con el schema   
        console.log(allCanchas); 
        //crearCancha()    
    } catch (error) {
        console.log(error);
    }
}
 
module.exports = conectDb