const UsuarioModel = require("../models/usuario.model")
const bcrypt = require("bcrypt")

//Get

const traerUsuario = async (req,res) =>{
    try {
        const usuarios = await UsuarioModel.find()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json("Usuarios no encontrados")
        console.log(error);
    }
}

//POST

const crearUsuario = async (req,res) =>{
    try {
        const {nombre, email, contraseña} = req.body
        const hash = await bcrypt.hash(contraseña, 10)
        const usuario = new UsuarioModel({
            nombre,
            email,
            contraseña: hash
        })
        await usuario.save()
        res.status(200).json("Usuario creado")
    } catch (error) {
        console.log(error);
    }
}

const login = async (req,res) => {
    const user = await UsuarioModel.findOne({email: req.body.email})
    if (!user) {
        return res.status(404).send("Usuario y/o contraseña incorrecta")
    } 

    const match = await bcrypt.compare(req.body.contraseña, user.contraseña)
    if (!match) {
        return res.status(404).send("Usuario y/o contraseña incorrecta")
    }
    res.status(200).send("Usuario encontrado")
}

module.exports = {
    crearUsuario,
    login,
    traerUsuario
}