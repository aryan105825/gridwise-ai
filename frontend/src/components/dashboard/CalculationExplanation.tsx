export default function CalculationExplanation({ assumptions }: any) {
  return (
    <div className="mt-4 rounded-lg border border-white/5 bg-[#0b0f14] px-4 py-3 text-xs text-gray-400">
      <strong className="mb-2 block text-gray-300">
        How these numbers are calculated:
      </strong>

      <ul className="list-disc space-y-1 pl-4">
        <li>
          Energy saved = Baseline total − Optimized total
        </li>
        <li>
          Cost saved = Energy saved ×{" "}
          <span className="text-emerald-400">
            ${assumptions.electricity_rate_per_kwh} / kWh
          </span>
        </li>
        <li>
          CO₂ avoided = Energy saved ×{" "}
          <span className="text-emerald-400">
            {assumptions.co2_factor_kg_per_kwh} kg CO₂ / kWh
          </span>
        </li>
      </ul>
    </div>
  );
}
