export default function MetricsCards({ impact }: any) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Card label="Energy Saved" value={`${impact.energy_saved_pct}%`} />
      <Card label="Cost Saved" value={`$${impact.cost_saved_usd}`} />
      <Card label="CO₂ Avoided" value={`${impact.co2_avoided_kg} kg`} />
    </div>
  );
}

function Card({ label, value }: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>
      <h4>{label}</h4>
      <h2>{value}</h2>
    </div>
  );
}
