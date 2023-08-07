import express, { response } from "express";
import "dotenv/config"
import cors from "cors"
import morgan from "morgan";

const conectDb = require("./src/database/db")

console.log("Hello World");

//Creamos una instancia de express 
const app = express()

//Configuramos el puerto en el que se va a ejecutar nuestro back end

app.set("port", process.env.PORT || 5050)

//Inicializamos nuestro back end

const initApp = async () =>{
    try {
        await conectDb()
        app.listen(app.get("port"), () => {
            console.log(`Servidor corriendo en el puerto ${app.get(`port`)}`);
        }).on(`Error`, (error) => {
        })
    } catch (error) {
        console.log(`Error`, error);
        process.exit(1)
    }
}

initApp()

//MIDDLEWARES: Configuraciones extras del backend antes de que se ejecuten las rutas

//1-middleares nativos de express

app.use(express.json()) //Permite recibir objetos en formato json
app.use(express.urlencoded({extended:true})) //Permite recibir parametros en las rutas

//2-middle de terceros

app.use(morgan("dev")) //Nos brinda detalles de nuestra terminal
app.use(cors()) //Permite recibir peticiones remotras

//Usando las rutas desde routes

app.use("/api", require("./src/routes/rutas"))