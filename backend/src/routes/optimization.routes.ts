import { Router } from "express";
import type { RequestHandler } from "express";
import { runOptimization } from "../controllers/optimizationController";

const router = Router();

router.post("/", runOptimization as RequestHandler);

export default router;
