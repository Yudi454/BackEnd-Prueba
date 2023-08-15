const jwt = require("jsonwebtoken")

const comprobacionJWT = (req,res,next) => {
    const token = req.headers("auth-token");//Obtenemos el toquen

    if (!token) {
        return res.status(401).send("Acesso denegado")
    }

    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        req.usuario = verifyToken // Guardamos el usuario en el req
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = comprobacionJWT