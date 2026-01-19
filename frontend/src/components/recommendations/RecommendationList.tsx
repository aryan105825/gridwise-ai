export default function RecommendationList({ recs }: any) {
  if (!recs || recs.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-400">
        Rule-Based Optimization Insights
      </h3>

      <div className="space-y-3">
        {recs.map((r: any, i: number) => (
          <div
            key={i}
            className="rounded-lg border border-white/10 bg-[#0b0f14] p-4 shadow-md shadow-emerald-500/5 transition hover:border-emerald-400/30"
          >
            <div className="mb-1 text-sm font-medium text-emerald-300">
              {r.type}
            </div>

            <p className="mb-2 text-sm leading-relaxed text-gray-300">
              {r.explanation}
            </p>

            <div className="text-xs italic text-gray-400">
              Impact: <span className="text-emerald-400">{r.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
