import { Router } from "express";
import multer from "multer";
import { uploadCSV } from "../controllers/uploadController";

const router = Router();
const upload = multer();

router.post("/", upload.single("file"), uploadCSV);

export default router;
