const CanchaModel = require("../models/cancha.model")

//GET

const getAllCanchas = async (req,res) =>{
    try {
        const allCanchas = await CanchaModel.find()
        res.status(200).json(allCanchas)
    } catch (error) {
        console.log();
    }
}

//Traer una sola cancha por id

const getPorId = async (req,res) => {
    
        const id = req.params.id
        const cancha = await CanchaModel.findById(id)
        {cancha ? (
            res.status(200).json(cancha)
        ):(
            res.status(404).json({ error : "Cancha no encontrada"})
        )}
}

//POST
const crearCancha = async (req,res) =>{
    try {
        const cancha = new CanchaModel(req.body)
        await cancha.save()
        console.log("Cancha Creada");
        res.status(200).json("Cancha Creada")
    } catch (error) {
        res.status(404).json("Cancha no Creada")
        console.log(error);
    }
}

//PUT

const actualizarCancha = async (req,res) => {
 try {
    const id = req.params.id
    const canchaModificada = req.body 
    await CanchaModel.findOneAndUpdate({_id : id}, canchaModificada, { new: true})
    res.status(200).json({message : "Cancha Modificada"})
 } catch (error) {
    res.status(404).json({message : "Cancha no encontrada"})
    console.log(error);
 }   
}

//DELETE

const borrarCancha = async (req,res) =>{
    try {
        const id = req.params.id
        await CanchaModel.findOneAndDelete({_id : id})
        res.status(200).json({ message : "Cancha eliminada"})
    } catch (error) {
        res.status(404).json({message : "Cancha no encontrada"})
        console.log(error);
    }
}

module.exports = {
    getAllCanchas,
    crearCancha,
    getPorId,
    actualizarCancha,
    borrarCancha
}