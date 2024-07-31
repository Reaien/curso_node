/* FORMA ANTIGUA ANTES DE ES6 */

require('dotenv').config() // con esto seteamos que nuestras var-env se seteen en nuestro objeto process
const {get} = require('env-var') //con esto podremos darle propiedades a las var-env

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    //hacemos el get de la var PORT que está en .env az
    //.required para ser obligatorio .asPortNumber para que sea un puerto valido
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
    // recordar, el get lo tenemos gracias al npm env-var es lo que nos permite importar desde .env hacia acá
    // se define por default el nombre de la carpeta y se coloca asString
}

//exportar los envs para usarlos en el app.js
module.exports = {
    envs
}