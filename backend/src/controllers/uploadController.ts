import { Request, Response } from "express";
import { parseCSV } from "../utils/csvParser";

export const uploadCSV = (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const records = parseCSV(req.file.buffer);

  // Phase 1: return parsed data directly
  return res.json({
    rows: records.length,
    data: records
  });
};
