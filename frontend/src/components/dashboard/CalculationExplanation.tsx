export default function CalculationExplanation({ assumptions }: any) {
  return (
    <div style={{ marginTop: 16, fontSize: 13, opacity: 0.8 }}>
      <strong>How these numbers are calculated:</strong>
      <ul>
        <li>Energy saved = Baseline total − Optimized total</li>
        <li>Cost saved = Energy saved × ${assumptions.electricity_rate_per_kwh} / kWh</li>
        <li>CO₂ avoided = Energy saved × {assumptions.co2_factor_kg_per_kwh} kg CO₂ / kWh</li>
      </ul>
    </div>
  );
}
