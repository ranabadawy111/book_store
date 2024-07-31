import {Router} from "express";
const router = Router();
// const {
//     getAllAuthors,
//     getAuthorById,
//     createAuthor,
//     updateAuthor,
//     deleteAuthor,
//   } = require("../controllers/authorController");
// const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

import {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor,
} from "./controller/author.control.js";
import {verifyTokenAndAdmin} from "../../middlewares/verifyToken.js";

// /api/authors
router.route("/").get(getAllAuthors).post(verifyTokenAndAdmin, createAuthor);

// /api/authors/:id
router
  .route("/:id")
  .get(getAuthorById)
  .put(verifyTokenAndAdmin, updateAuthor)
  .delete(verifyTokenAndAdmin, deleteAuthor);



export default router;