import express from 'express';
import env from 'dotenv';
env.config()

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})