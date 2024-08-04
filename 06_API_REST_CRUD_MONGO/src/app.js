import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import bookRouters from "../routes/book.routes.js";
import bodyParser from "body-parser";

env.config();

//usamos express para los middlewares
const app = express();
app.use(bodyParser.json()); //parseador de bodys

//Acá conectaremos la BD Mongo
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;
//si es /books, va a ir a la bookRoutes importada arriba donde están todos los metodos
app.use("/books", bookRouters);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
