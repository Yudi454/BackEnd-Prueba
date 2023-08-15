const express = require("express")
const router = express.Router()

const usuarioController = require("../controllers/usuariosController")

//POST

router.post ("/registro", usuarioController.crearUsuario)

router.get("/usuarios", usuarioController.traerUsuario)

//Get por Id

router.get("/usuarios/:id", usuarioController.TraerUnUsuario)

router.post ("/login", usuarioController.login)

module.exports = router