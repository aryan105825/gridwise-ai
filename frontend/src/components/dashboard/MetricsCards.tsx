export default function MetricsCards({ impact }: any) {
  return (
    <div className="flex flex-wrap gap-4">
      <Card label="Energy Saved" value={`${impact.energy_saved_pct}%`} />
      <Card label="Cost Saved" value={`$${impact.cost_saved_usd}`} />
      <Card label="CO₂ Avoided" value={`${impact.co2_avoided_kg} kg`} />
    </div>
  );
}

function Card({ label, value }: any) {
  return (
    <div className="flex min-w-[180px] flex-1 flex-col rounded-xl border border-white/10 bg-[#0b0f14] p-5 shadow-lg shadow-emerald-500/5">
      <h4 className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </h4>

      <h2 className="text-2xl font-semibold text-emerald-400">
        {value}
      </h2>
    </div>
  );
}
