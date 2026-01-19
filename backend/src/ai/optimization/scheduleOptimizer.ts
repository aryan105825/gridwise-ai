type Reading = { energy_kwh: number };

export function optimizeSchedule(data: any[]) {
  return data.map(d => {
    const kwh = Number(d.energy_kwh);

    if (isNaN(kwh)) {
      return { ...d, optimized_kwh: kwh };
    }

    return {
      ...d,
      optimized_kwh: Number((kwh * 0.85).toFixed(2))
    };
  });
}
