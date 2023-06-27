import { Router } from "express";
import { getStudent } from "../controllers/studentController.js";
const router = Router();

router.get("/:id", getStudent);

export default router;
