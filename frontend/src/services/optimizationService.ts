import { api } from "./api";

export async function runOptimization(data: any[]) {
  const res = await api.post("/optimize", { data });
  return res.data;
}
