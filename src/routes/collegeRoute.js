import { Router } from "express";
const router = Router();
import {
  getAllColleges,
  getSingleCollege,
  getSimilarCollege,
  filterColleges,
} from "../controllers/collegeController.js";

router.route("/").get(getAllColleges);

router.route("/filter").get(filterColleges);

router.route("/:id").get(getSingleCollege);

router.route("/similar/:id").get(getSimilarCollege);

export default router;
