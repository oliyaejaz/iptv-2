import express from "express";
import { StreamValidationSchema } from "../validations/index.js";
import { validate, authenticate } from "../middleware/index.js";
import {  StreamController,} from "../controllers/index.js";

const router = express.Router();
router.get("/", authenticate, StreamController.getAll);
router.post("/", validate(StreamValidationSchema.add), StreamController.add);
router.get("/", authenticate, StreamController.getById);
router.patch("/:id", authenticate, validate(StreamValidationSchema.update), StreamController.update);
router.delete("/:id", authenticate, StreamController.delete);
export default router;
