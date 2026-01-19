type Reading = { timestamp: string; energy_kwh: number };

export function movingAverageForecast(
  data: Reading[],
  window = 3,
  horizon = 6
) {
  const values = data.map(d => d.energy_kwh);
  const forecasts: number[] = [];

  for (let i = 0; i < horizon; i++) {
    const start = Math.max(0, values.length - window);
    const slice = values.slice(start);
    const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
    forecasts.push(Number(avg.toFixed(2)));
    values.push(avg);
  }

  return forecasts;
}
