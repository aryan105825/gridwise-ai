type Reading = { timestamp: string; energy_kwh: number };

export function detectPeaks(data: Reading[]) {
  const values = data.map(d => d.energy_kwh);
  const mean =
    values.reduce((a, b) => a + b, 0) / values.length;

  const threshold = mean * 1.25;

  return data.filter(d => d.energy_kwh >= threshold);
}
