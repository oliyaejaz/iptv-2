import express from "express";
import { SeasonValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  SeasonController,} from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, SeasonController.getAll);
router.post("/", validate(SeasonValidationSchema.add), SeasonController.add);
router.get("/", authenticate, SeasonController.getById);
router.patch("/:id", authenticate, validate(SeasonValidationSchema.update), SeasonController.update);
router.delete("/:id", authenticate, SeasonController.delete);
export default router;
