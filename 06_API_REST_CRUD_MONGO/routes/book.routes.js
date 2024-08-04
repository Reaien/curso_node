import express from "express";
import Book from "../models/book.model.js";

export const router = express.Router();

//Middleware hecho por nosotros que filtra por id
const getBook = async (req, res, next) => {
  let book;
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(404).json({ message: "el id del libro no es válido" });
  }
  try {
    book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "el libro no existe" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.book = book;
  next();
};

//obtener todos los books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    console.log(`GET DE BOOKS`, books);
    if (books.length === 0) {
      return res.status(204).json([]);
    }
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post un book
router.post("/", async (req, res) => {
  const { title, author, gender, publication_date, lenguage, pages } =
    req?.body;
  if (
    !title ||
    !author ||
    !gender ||
    !publication_date ||
    !lenguage ||
    !pages
  ) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const book = new Book({
    title,
    author,
    gender,
    publication_date,
    lenguage,
    pages,
  });
  try {
    const newBook = await book.save();
    console.log(newBook);
    res.status(201).json({ newBook });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//función para obtener book x id
router.get("/:id", getBook, async (req, res) => {
  res.json(res.book);
});

//función para hacer put
router.put("/:id", getBook, async (req, res) => {
  try {
    const book = res.book;
    book.title = req.body.title || book.title;
    book.author = req.author || book.author;
    book.gender = req.gender || book.gender;
    book.publication_date = req.publication_date || book.publication_date;
    book.lenguage = req.lenguage || book.lenguage;
    book.pages = req.pages || book.pages;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//función para hacer patch
router.patch("/:id", getBook, async (req, res) => {
  if (
    !req.body.title &&
    !req.author &&
    !req.gender &&
    !req.publication_date &&
    !req.lenguage &&
    !req.pages
  ) {
    res.status(400).json({
      message:
        "Al menos uno de los campos debe ser enviado: Título, Autor, Genero, Fecha de publicación, Lenguaje, Páginas",
    });
  }

  try {
    const book = res.book;
    book.title = req.body.title || book.title;
    book.author = req.author || book.author;
    book.gender = req.gender || book.gender;
    book.publication_date = req.publication_date || book.publication_date;
    book.lenguage = req.lenguage || book.lenguage;
    book.pages = req.pages || book.pages;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//Función para hacer delete
router.delete("/:id", getBook, async (req, res) => {
  try {
    const book = res.book;
    await book.deleteOne({ _id: book._id });
    res.json({
      message: `El libro ${book.title} fue eliminado correctamente`,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
