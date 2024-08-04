import mongoose from "mongoose";

//crear esquema o tabla
const book = new mongoose.Schema({
  title: String,
  author: String,
  gender: String,
  publication_date: Date,
  lenguage: String,
  pages: Number,
});

const model = mongoose.model("Book", book);
export default model;
