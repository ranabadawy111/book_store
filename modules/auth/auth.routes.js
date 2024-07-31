import {Router} from "express";
import { login, register } from "./controller/auth.control.js";
const router = Router();
// const { register, login } = require("../controllers/authController");



// /api/auth/register
router.post("/register", register);

// /api/auth/login
router.post("/login", login);

export default router;