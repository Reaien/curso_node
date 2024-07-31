const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path =  'public'} = options

    //poder usar las funciones de express en app
    const app = express()

    //middlewares

    //para poder usar middlewares se usa la palabra use (esto es propio de express)

    //con este middleware funciona para poner disponible el contenido estatico
    app.use(express.static(public_path)) 

    app.get('/', (req, resp) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        resp.sendFile(indexPath)
    })

    //basicamente abrir un puerto y que escuche por el
    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })

}

module.exports = {
    startServer
}