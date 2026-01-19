type Reading = { timestamp: string; energy_kwh: number };

export function detectWaste(data: Reading[]) {
  // Waste = high usage during night hours (00–05)
  return data.filter(d => {
    const hour = new Date(d.timestamp).getHours();
    return hour >= 0 && hour <= 5 && d.energy_kwh > 100;
  });
}
