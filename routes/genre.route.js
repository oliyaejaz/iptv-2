import express from "express";
import { GenreValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  GenreController,} from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, GenreController.getAll);
router.post("/", validate(GenreValidationSchema.add), GenreController.add);
router.get("/", authenticate, GenreController.getById);
router.patch("/:id", authenticate, validate(GenreValidationSchema.update), GenreController.update);
router.delete("/:id", authenticate, GenreController.delete);
export default router;
