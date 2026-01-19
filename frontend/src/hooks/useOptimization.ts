import { useState } from "react";
import { runOptimization } from "../services/optimizationService";

export function useOptimization() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const optimize = async (data: any[]) => {
    setLoading(true);
    const res = await runOptimization(data);
    console.log("FULL OPTIMIZATION RESPONSE:", res);
    console.log("AI EXPLANATION:", res.ai_explanation);
    setResult(res);
    setLoading(false);
  };

  return { result, optimize, loading };
}
