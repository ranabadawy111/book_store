import {Router} from "express";
const router = Router();

// const {
//   updateUser,
//   getAllUsers,
//   getUserById,
//   deleteUser,
// } = require("../controllers/userController");
// const {
//     verifyTokenAndAuthorization,
//     verifyTokenAndAdmin,
//   } = require("../middlewares/verifyToken");

import { updateUser,
    getAllUsers,
    getUserById,
    deleteUser,
} from "./controller/user.control.js";
import  {
        verifyTokenAndAuthorization,
        verifyTokenAndAdmin,
      } from "../../middlewares/verifyToken.js"

// /api/users
router.get("/", verifyTokenAndAdmin, getAllUsers);

// /api/users/:id
router
  .route("/:id")
  .put(verifyTokenAndAuthorization, updateUser)
  .get(verifyTokenAndAuthorization, getUserById)
  .delete(verifyTokenAndAuthorization, deleteUser);



export default router;