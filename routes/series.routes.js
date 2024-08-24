import express from "express";
import { StreamValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  SeriesController,} from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, SeriesController.getAll);
router.post("/", validate(StreamValidationSchema.add), SeriesController.add);
router.get("/", authenticate, SeriesController.getById);
router.patch("/:id", authenticate, validate(StreamValidationSchema.update), SeriesController.update);
router.delete("/:id", authenticate, SeriesController.delete);
export default router;
