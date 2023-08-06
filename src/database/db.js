const mongoose = require("mongoose")



const uri = process.env.PORTDB
const db = process.env.DB



//Conectarme a la base de datos
const conectDb = async () =>{
    try {
      await  mongoose.connect(`${uri}/${db}`, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Conectado a la base de datos Futbol");
    } catch (error) {
        console.log(error);
    }
}
 
module.exports = conectDb