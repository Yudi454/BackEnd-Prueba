const express = require("express")
const router = express.Router()


const Equipos = require("../arrays/equipos")
const Canchas = require("../arrays/canchas")

//Ruta para Equipos

//Get
router.get(`/equipos`, (req,res) => {
    console.log("Entro en get equipos");
    res.send(Equipos)
})

//Ruta para Canchas

//GET
router.get(`/canchas`, (req,res) => {
    console.log("Entro en get canchas");
    res.json (Canchas)
})

//GET 1 sola cancha
router.get(`/canchas/:id`, (req,res) => {
    console.log("Entro en get Cancha");
    const id = req.params.id
    const cancha = Canchas.find((cancha) => cancha.id == id)
    {cancha ? (
        res.json(cancha)
    ):(
        res.status(404).json({error: "Cancha no encontrada"})
    )}
})

//POST

router.post(`/canchas`, (req,res) => {
    const cancha = req.body
    Canchas.push(cancha)
    res.status(201).json("Cancha Creada")
})

module.exports = router

//PUT

router.put(`/canchas/:id`, (req,res) => {
    const id = req.params.id
    const cancha = Canchas.find((cancha) => cancha.id == id)
    {cancha ? (
        cancha.Nombre = req.body.Nombre,
        cancha.Capacidad = req.body.Capacidad,
        cancha.Direccion = req.body.Direccion,
        res.status(200).json("Cancha Modificada"),
        res.json(cancha)
    ):(
        res.status(404).json({error: "Cancha no encontrada"})
    )}  
})

//DELETE

router.delete(`/canchas/:id`, (req,res) => {
    const id = parseInt(req.params.id)
    const index = Canchas.findIndex((cancha) => cancha.id == id)
    {index != -1 ? (
        Canchas.splice(index,1),
        res.status(200).json("Cancha Eliminada")
    ):(
        res.status(404).json("Cancha no encontrada")
    )}
})