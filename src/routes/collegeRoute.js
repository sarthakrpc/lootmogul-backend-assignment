import { Router } from "express";
const router = Router();
import {
  getAllColleges,
  getSingleCollege,
  getSimilarCollege
} from "../controllers/collegeController.js";

router.route("/").get(getAllColleges);

router.route("/:id").get(getSingleCollege);

router.route("/similar/:id").get(getSimilarCollege)

export default router;
