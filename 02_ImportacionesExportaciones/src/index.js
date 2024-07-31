//Importación ES6
import {getAuthor, getTitle} from './functions.js'
import {curso} from './objects.js'
 
//Importación Legacy
//const {getAuthor, getTitle} = require('./functions')
//const {curso} = require('./objects')
 

console.log("hola desde 02, con demon")
console.log(getTitle())
console.log(getAuthor("Andito"))
console.log(curso)
