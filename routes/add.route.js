import { Router } from "express";
import { add } from "../controllers/add.controller.js";

const router = Router();

router.post("/", add);

export default router;
