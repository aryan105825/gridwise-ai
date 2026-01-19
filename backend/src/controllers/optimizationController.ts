import { Request, Response } from "express";
import { analyzeEnergy } from "../services/energyAnalysis.service";

interface OptimizeRequestBody {
  data: any[];
}

export const runOptimization = async (
  req: Request<{}, {}, OptimizeRequestBody>,
  res: Response
) => {
  const { data } = req.body;

  const result = await analyzeEnergy(data);

  res.json(result);
};
