//const {envs} = require('./config/env') import de env desde env.js LEGACY
import {envs} from './config/env.js'//FORMA ES6


// {startServer} = require('./server/server') import de server LEGACY
import {startServer} from './server/server.js' //FORMA ES6

//iniciamos servidor con las opciones importadas desde el .env
const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Función agnostica autoconvocada
//agnostica porque no tiene nombre
// autoconvocada porque la ejecutamos con los parentesis al final
( async () => {
    main()
})()


