import {Router} from "express";
const router = Router();
// const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";
// const {
//   getAllBooks,
//   getBookById,
//   createBook,
//   updateBook,
//   deleteBook,
// } = require("../controllers/bookController");
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} from "./controller/book.control.js";

// /api/books
router.route("/").get(getAllBooks).post(verifyTokenAndAdmin, createBook);

// /api/books/:id
router
  .route("/:id")
  .get(getBookById)
  .put(verifyTokenAndAdmin, updateBook)
  .delete(verifyTokenAndAdmin, deleteBook);

export default router;
