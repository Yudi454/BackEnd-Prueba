const UsuarioModel = require("../models/usuario.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

//GET 1 Usuario

const TraerUnUsuario = async (req,res,next) => {
        const id = req.params.id
        console.log(id);
        const usuario = await UsuarioModel.findById(id)
        {usuario ? (
            res.status(200).json(usuario)
        ):(
            next(error)
        )}
}

//POST

const crearUsuario = async (req,res,next) =>{
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
        next(error)
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
    //res.status(200).send("Usuario encontrado")

    //Creamos el token
    const token = jwt.sign({
        id: user._id,
        nombre: user.nombre
    },
    process.env.SECRET_KEY, //Clave secreta
    {expiresIn: "1D"}
    )
    
    res.header("auth-token", token).json({
        error: null,
        data: { token }
    })

}

module.exports = {
    crearUsuario,
    login,
    traerUsuario,
    TraerUnUsuario
}