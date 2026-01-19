export function calculateImpact(
  original: number[],
  optimized: number[]
) {
  const base = original.reduce((a, b) => a + b, 0);
  const opt = optimized.reduce((a, b) => a + b, 0);

  const saved = Math.max(base - opt, 0);

  return {
    energy_saved_kwh: Number(saved.toFixed(2)),
    energy_saved_pct: Number(((saved / base) * 100).toFixed(2)),
    cost_saved_usd: Number((saved * 0.12).toFixed(2)),
    co2_avoided_kg: Number((saved * 0.82).toFixed(2))
  };
}
