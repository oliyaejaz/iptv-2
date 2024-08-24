import express from "express";
import { EpisodeValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  EpisodeController,} from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, EpisodeController.getAll);
router.post("/", validate(EpisodeValidationSchema.add), EpisodeController.add);
router.get("/", authenticate, EpisodeController.getById);
router.patch("/:id", authenticate, validate(EpisodeValidationSchema.update), EpisodeController.update);
router.delete("/:id", authenticate, EpisodeController.delete);
export default router;
