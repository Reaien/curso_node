import express from 'express';
import Book from '../models/book.model';

const router = express.Router()
//Obtener todos los libros


router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        console.log(`GET DE BOOKS ${books}`)
        if (books === 0) {
            res.status(204).json([])
        }
        res(books)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})