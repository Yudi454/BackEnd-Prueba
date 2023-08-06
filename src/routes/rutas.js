const express = require("express")
const router = express.Router()

const canchasController = require("../controllers/canchasController")

//GET
router.get("/canchas", canchasController.getAllCanchas)

//GET por id

router.get("/canchas/:id", canchasController.getPorId)

//POST

router.post("/canchas", canchasController.crearCancha)

//PUT

router.put("/canchas/:id", canchasController.actualizarCancha)

//DELETE

router.delete("/canchas/:id", canchasController.borrarCancha)
module.exports = router 