const {envs} = require('./config/env') //import de env desde env.js de la manera antigua
const {startServer} = require('./server/server')

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


